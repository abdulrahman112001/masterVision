import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const label = tv({
  base: "inline-block capitalize",
  variants: {
    color: {
      primary: "text-mainBlack",
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    required: {
      true: 'after:content-["*"] after:text-mainRed after:me-1',
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export interface LabelProps_TP
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: ReactNode | string;
  htmlFor: string;
  size?: "sm" | "md" | "lg";
  required?: boolean;
}

export const Label = ({
  htmlFor,
  className,
  children,
  size = "sm",
  required = false,
}: LabelProps_TP) => {
  return (
    <label
      className={label({
        className,
        size,
        required,
      })}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
