import classNames from 'classnames';

import Modal from '@/components/common/Modal';
import CloseIcon from '/public/icons/Close.svg';
import Button from '../Button';

import { FormModalProps } from './FormModal.types';

import { ariaLabelCloseIcon } from '@/data/form.json';

function FormModal({
  open,
  handleClose,
  title,
  text,
  buttonText,
  error,
}: FormModalProps) {
  return (
    <Modal
      isOpen={open}
      close={handleClose}
      variant="simple"
      className="px-4  pb-8 md:px-10 md:pb-10 md:w-[526px] xl:px-[102px] xl:w-[677px]"
    >
      <CloseIcon
        aria-label={ariaLabelCloseIcon}
        onClick={handleClose}
        className="ml-auto w-6 h-6 mb-6 absolute right-4 top-6 stroke-green md:right-6 md:w-10 md:h-10"
      />
      <h3
        className={classNames(
          'font-roboto font-bold text-[22px] leading-[1.15] uppercase text-center text-black mb-4 pt-[72px] md:text-lightLarge md:leading-[1.15] md:pt-[88px]xl:text-3xl xl:leading-[1.15] ',
          error && 'text-red'
        )}
      >
        {title}
      </h3>
      <p className="font-geologica font-light text-light tracking-[-0.02em] text-center text-black mb-8 xl:text-medium">
        {text}
      </p>
      <Button
        label={buttonText}
        variant="primary"
        onClick={handleClose}
        className="w-full"
      />
    </Modal>
  );
}

export default FormModal;
