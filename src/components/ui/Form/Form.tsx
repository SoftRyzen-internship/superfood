'use client';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Checkbox from '../Checkbox';
import Button from '../Button';
import FormInput from '../FormInput';

import { FormProps } from './Form.types';

const schema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(30)
    .matches(/^[a-zA-Zа-яА-я '-]+$/)
    .required(),
  phone: yup
    .string()
    .matches(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm)
    .required(),
  email: yup.string().email(),
  privacyPolicy: yup.boolean().oneOf([true]).required(),
});

function Form({ title, text, formProps, buttonText }: FormProps) {
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log({ ...data, privacyPolicy: isChecked });
    reset();
    setIsChecked(false);
  };
  //модалки будуть коли створимо групу та логіку надсилання даних туди
  return (
    <div className="max-w-[360px] py-[60px] px-4 bg-white md:w-[527px] md:rounded-xl	 md:py-12 md:px-16 xl:w-[592px] xl:py-14 xl:px-20">
      <h3 className="font-roboto font-bold text-[22px] leading-[1.15] uppercase text-center text-black mb-3 md:text-lightLarge xl:text3xl ">
        {title}
      </h3>
      <p className="font-geologica font-light text-light tracking-[-0.02em] text-center text-black mb-8 xl:text-medium ">
        {text}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formProps.map(({ name, type, placeholder, errorMessage }, index) => (
          <FormInput
            key={index}
            type={type}
            placeholder={placeholder}
            register={register}
            name={name}
            error={errors}
            errorMessage={errorMessage}
          />
        ))}
        <Checkbox
          label="Даю згоду на обробку персональних даних "
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          register={register}
          name="privacyPolicy"
          error={errors}
        />
        <Button
          label={buttonText}
          variant="primary"
          type="submit"
          className=" mx-auto mt-8 block"
        />
      </form>
    </div>
  );
}

export default Form;
