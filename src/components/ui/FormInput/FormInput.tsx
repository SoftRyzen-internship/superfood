import classNames from 'classnames';

import { FormInputProps } from './FormInput.types';

import style from './FormInput.module.css';

function FormInput({ placeholder, error, name, register }: FormInputProps) {
  return (
    <label
      className={classNames(
        'block h-[83px] mb-[34px]',
        error[name] && `relative ${style.errorIcon}`
      )}
    >
      <input
        autoComplete="off"
        placeholder={placeholder}
        {...register(name)}
        className={classNames(
          'font-geologica font-light text-light tracking-[-0.02em] text-black rounded-xl py-5 px-6 w-full h-[62px] bg-input mb-1 border border-solid	border-transparent outline-none  relative	 placeholder:text-grey hover:border-strokeLightGreen focus:border-strokeLightGreen',
          error[name] && style.error
        )}
      />
      {error[name] && <span className="text-red">{error[name].message}</span>}
    </label>
  );
}

export default FormInput;
