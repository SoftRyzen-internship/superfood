'use client';

import React from 'react';
import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import classNames from 'classnames';

import { ModalProps } from './Modal.types';

import Icon from '@/../../public/icons/LowPartOfReview.svg';

import styles from '../BurgerMenu/BurgerMenu.module.css';

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
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-300 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          onClose={variant === 'burger' ? () => {} : close}
          className={classNames(
            'relative z-50 transition',
            variant === 'burger' && 'xl:hidden'
          )}
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            className={classNames(
              variant === 'burger'
                ? classNames('fixed inset-0', styles.burger)
                : 'fixed inset-0 bg-backdrop'
            )}
            aria-hidden="true"
          />
          {/* Full-screen container to center the panel */}
          <div
            className={
              'fixed inset-0 flex w-screen h-screen flex-col items-center justify-center'
            }
          >
            <DialogPanel
              className={classNames(
                'relative overflow-hidden',

                variant === 'burger' && 'w-full h-screen overflow-y-auto',
                (variant === 'comments' || variant === 'simple') &&
                  'bg-white max-w-[328px] max-h-[90%] rounded-xl md:max-w-[700px] xl:max-w-[800px]',
                className
              )}
            >
              {children}
            </DialogPanel>
            {variant === 'comments' && (
              <div className="w-[328px] relative top-[-0.5px] pl-[24px] md:w-[700px] xl:w-[800px]">
                <Icon width={31} height={21} className="w-[31px] h-[21px] " />
              </div>
            )}
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
