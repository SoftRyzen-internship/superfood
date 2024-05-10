import classNames from 'classnames';
import { FormInputProps } from './FormInput.types';

function FormInput({ type, placeholder, error }: FormInputProps) {
  return (
    <input
      type={type}
      autoComplete="off"
      placeholder={placeholder}
      className={classNames(
        'text-geologica font-light text-light tracking-[-0.02em] text-grey rounded-xl py-5 px-6 w-[328px] h-[62px]',
        error && ''
      )}
    />
  );
}

export default FormInput;
