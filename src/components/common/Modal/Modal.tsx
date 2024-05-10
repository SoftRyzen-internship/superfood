'use client';

import React from 'react';
import classNames from 'classnames';

import { Dialog, DialogPanel, Transition } from '@headlessui/react';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  variant?: string;
}

function Modal({ children, isOpen, close, variant }: ModalProps) {
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
                ' bg-white',
                variant === 'burgermenu' && 'w-full h-full',
                variant === 'modal' &&
                  'px-4 py-4 max-w-[360px] max-h-[90%] rounded-xl'
              )}
            >
              {children}
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
