'use client';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from '@/components/common/Modal';
import Checkbox from '../Checkbox';
import Button from '../Button';
import FormInput from '../FormInput';
import CloseIcon from '/public/icons/Close.svg';

import { convertFormDataToString } from '@/utils/convertFormDataToString';
import { sendData } from '@/utils/telegram';

import { schema } from '@/utils/shema';

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
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    try {
      console.log({ ...data, privacyPolicy: isChecked });
      const formData = convertFormDataToString({
        ...data,
        privacyPolicy: isChecked,
      });
      await sendData(formData);
      sessionStorage.setItem(
        'formData',
        JSON.stringify({ ...data, privacyPolicy: isChecked })
      );
      reset();
      setIsChecked(false);
      setOpenSuccessModal(true);
    } catch (error) {
      setOpenErrorModal(true);
    }
  };
  //модалки будуть коли створимо групу та логіку надсилання даних туди
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
      <Modal
        isOpen={openSuccessModal || openErrorModal}
        close={() => {
          if (openSuccessModal) {
            setOpenSuccessModal(false);
          } else if (openErrorModal) {
            setOpenErrorModal(false);
          }
        }}
        variant="simple"
        className="px-4 pt-6 pb-8"
      >
        <CloseIcon
          aria-label="закрити діалогове вікно"
          className="ml-auto w-6 h-6 mb-6"
        />
        <h3 className="font-roboto font-bold text-[22px] leading-[1.15] uppercase text-center text-black mb-[15px]">
          {(openSuccessModal && successMessage.title) ||
            (openErrorModal && errorMessage.title)}
        </h3>
        <p className="font-geologica font-light text-light tracking-[-0.02em] text-center text-black mb-8">
          {' '}
          {(openSuccessModal && successMessage.text) ||
            (openErrorModal && errorMessage.text)}
        </p>
        <Button
          label={modalButtonText}
          variant="primary"
          onClick={() => {
            if (openSuccessModal) {
              setOpenSuccessModal(false);
            } else if (openErrorModal) {
              setOpenErrorModal(false);
            }
          }}
          className="w-full"
        />
      </Modal>
      {/* <Modal
        isOpen={openErrorModal}
        close={() => setOpenErrorModal(false)}
        variant="simple"
      >
        <h3></h3>
        <p></p>
        <Button label={} variant="primary" />
      </Modal> */}
    </>
  );
}

export default Form;
