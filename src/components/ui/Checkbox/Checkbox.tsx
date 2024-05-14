'use client';

import classNames from 'classnames';

import CheckboxIcon from '/public/icons/Checkbox.svg';

import { CheckboxProps } from './Checkbox.types';

function Checkbox({
  label,
  error,
  isChecked,
  setIsChecked,
  register,
  name,
}: CheckboxProps) {
  const privacyPolicy = register(name);
  return (
    <label className="relative flex items-center gap-3">
      <input
        type="checkbox"
        {...privacyPolicy}
        onChange={e => {
          privacyPolicy.onChange(e);
          setIsChecked(!isChecked);
        }}
        className={classNames(
          'appearance-none	border border-solid rounded-md border-[rgba(23,117,49,0.5)] w-5 h-5 outline-none cursor-pointer hover:border-green focus:border-green',
          isChecked && 'border-green hover:border-green focus:border-green',
          error[name] && 'border-red hover:border-red focus:border-red'
        )}
      />
      <span className="font-geologica font-light text-sm leading-[1.35] tracking-[-0.02em] text-black xl:text-light">
        {label}
      </span>
      {isChecked && (
        <CheckboxIcon className="absolute top-auto left-[2px] cursor-pointer" />
      )}
    </label>
  );
}

export default Checkbox;
