'use client';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Checkbox from '../Checkbox';
import Button from '../Button';
import FormInput from '../FormInput';

import { schema } from '@/utils/shema';

import form from '@/data/form.json';

function Form() {
  const {
    title,
    text,
    formProps: { inputs, checkbox },
    buttonText,
  } = form;
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
    sessionStorage.setItem(
      'formData',
      JSON.stringify({ ...data, privacyPolicy: isChecked })
    );
    reset();
    setIsChecked(false);
  };
  //модалки будуть коли створимо групу та логіку надсилання даних туди
  return (
    <div className="max-w-[460px] py-[60px] px-4 bg-white mx-auto md:max-w-[527px] md:rounded-xl	 md:py-12 md:px-16 xl:max-w-[592px] xl:py-14 xl:px-20">
      <h3 className="font-roboto font-bold text-[22px] leading-[1.15] uppercase text-center text-black mb-3 md:text-lightLarge xl:text3xl ">
        {title}
      </h3>
      <p className="font-geologica font-light text-light tracking-[-0.02em] text-center text-black mb-8 xl:text-medium ">
        {text}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map(({ name, type, placeholder }, index) => (
          <FormInput
            key={index}
            type={type}
            placeholder={placeholder}
            register={register}
            name={name}
            error={errors}
          />
        ))}
        <Checkbox
          label={checkbox.label}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          register={register}
          name={checkbox.name}
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
