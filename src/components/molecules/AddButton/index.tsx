import { Add } from '../../atoms/icons/Add';

type AddButton_TP = {
  addLabel?: string;
  action?: () => void;
  className?: string;
};

export const AddButton = ({ addLabel, action, className }: AddButton_TP) => {
  return (
    <>
      {addLabel && (
        <div
          className={` addBtn ${className}`}
          onClick={action}
        >
          <Add className='w-5 h-5 text-white dark:text-mainBlue' />
          <p className=' text-sm text-white'>{addLabel}</p>
        </div>
      )}
    </>
  );
};
