import classNames from 'classnames';

import { FormInputProps } from './FormInput.types';

import style from './FormInput.module.css';

function FormInput({ type, placeholder, error, errorMessage }: FormInputProps) {
  return (
    <div
      className={classNames(
        'h-[83px]  mb-[34px]',
        error && `relative ${style.errorIcon}`
      )}
    >
      <input
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        className={classNames(
          'text-geologica font-light text-light tracking-[-0.02em] text-black rounded-xl py-5 px-6 w-full h-[62px] bg-input mb-1 border border-solid	border-transparent outline-none  relative	 placeholder:text-grey hover:border-strokeLightGreen focus:border-strokeLightGreen',
          error && `border-red  `
        )}
      />
      {error && <span className="text-red">{errorMessage}</span>}
    </div>
  );
}

export default FormInput;