'use client';

import React from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import classNames from 'classnames';

import { ModalProps } from './Modal.types';

import Icon from '@/../../public/icons/LowPartOfReview.svg';

function Modal({
  children,
  isOpen,
  close,
  variant,
  className = '',
}: ModalProps) {
  return (
    <>
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-300 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog onClose={close} className="relative z-50 transition">
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0  bg-backdrop" aria-hidden="true" />
          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel
              className={classNames(
                'bg-white relative',
                variant === 'burger' && 'w-full h-full',
                (variant === 'comments' || variant === 'simple') &&
                  'max-w-[328px] max-h-[90%] rounded-xl md:max-w-[700px] xl:max-w-[800px]',
                className
              )}
            >
              {children}
              {variant === 'comments' && (
                <Icon
                  width={31}
                  height={21}
                  className="absolute bottom-[-21px] left-10  w-[31px] h-[21px]"
                />
              )}
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
