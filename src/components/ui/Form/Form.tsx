'use client';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';

import Checkbox from '../Checkbox';
import Button from '../Button';
import FormInput from '../FormInput';
import FormModal from '../FormModal';

import { formDataType } from '@/types/formData';

import { convertFormDataToString } from '@/utils/convertFormDataToString';
import { sendData } from '@/utils/telegram';
import { schema } from '@/utils/schema';

import form from '@/data/form.json';

function Form() {
  const {
    title,
    text,
    formProps: { inputs, checkbox },
    successMessage,
    errorMessage,
    modalButtonText,
    buttonText,
  } = form;

  const [isChecked, setIsChecked] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useFormPersist('formData', {
    watch,
    setValue,
    exclude: ['privacyPolicy'],
  });

  const onSubmit = async (data: formDataType) => {
    try {
      const formData = convertFormDataToString(data);
      await sendData(formData);
      reset();
      setIsChecked(false);
      setOpenSuccessModal(true);
    } catch (error) {
      setOpenErrorModal(true);
    }
  };

  return (
    <>
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
      <FormModal
        open={openSuccessModal}
        handleClose={() => setOpenSuccessModal(false)}
        title={successMessage.title}
        text={successMessage.text}
        buttonText={modalButtonText}
      />
      <FormModal
        open={openErrorModal}
        handleClose={() => setOpenErrorModal(false)}
        title={errorMessage.title}
        text={errorMessage.text}
        buttonText={modalButtonText}
        error={true}
      />
    </>
  );
}

export default Form;
