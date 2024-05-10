'use client';
import { useState } from 'react';

import CheckboxIcon from '/public/icons/Checkbox.svg';

import { CheckboxProps } from './Checkbox.types';
import classNames from 'classnames';

function Checkbox({ label, error }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label className="relative flex items-center gap-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
          className={classNames(
            'appearance-none	border border-solid rounded-md border-[rgba(23,117,49,0.5)] w-5 h-5 outline-none hover:border-green focus:border-green',
            isChecked && 'border-green',
            error && 'border-red'
          )}
        />
        <span>{label}</span>
        {isChecked && <CheckboxIcon className="absolute top-auto left-[2px]" />}
      </label>
    </div>
  );
}

export default Checkbox;
