import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const GeneralInputClass: string = 'form-input px-4 py-[.30rem] w-full';

const baseInput = tv({
  base: 'rounded-md base-input-style dark:bg-[#151521] dark:text-white border-1  border-[rgba(0, 29, 110, 0.4)] focus:!border-1 focus:!border-[rgba(0, 29, 110, 0.7)] h-[41px]',
  variants: {
    error: {
      true: 'border-mainRed',
    },
    type: {
      checkbox:
        'w-4 h-4 text-mainGreen border-gray-300 rounded focus:ring-mainGreen form-checkbox shadow-none',
      radio:
        'w-5 h-5 form-radio rounded-full focus:ring-mainGreen border-gray-300',
      text: GeneralInputClass,
      email: GeneralInputClass,
      password: GeneralInputClass,
      number: GeneralInputClass,
      date: GeneralInputClass,
      time: GeneralInputClass,
      datetime: GeneralInputClass,
      month: GeneralInputClass,
      week: GeneralInputClass,
      tel: GeneralInputClass,
      url: GeneralInputClass,
      search: GeneralInputClass,
      color: GeneralInputClass,
    },
  },
});

type BaseInputVariants_TP = VariantProps<typeof baseInput>;

export interface BaseInputProps_TP
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  autocomplete?: string;
  error?: boolean;
  ref?: any;
}

export const BaseInput = forwardRef(
  ({ error, ...props }: BaseInputProps_TP & BaseInputVariants_TP, ref: any) => {
    return (
      <input
        {...props}
        type={props.type || 'text'}
        name={props.name}
        id={props.id}
        {...(props.placeholder ? { placeholder: props.placeholder } : {})}
        disabled={props.disabled}
        className={baseInput({
          error: error,
          className: props.className,
          type: props.type || 'text',
        })}
        autoComplete={'off'}
        placeholder={props?.placeholder}
        value={props.value}
        ref={ref}
      />
    );
  }
);
