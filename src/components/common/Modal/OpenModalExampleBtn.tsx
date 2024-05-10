'use client';

import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import ScrollLink from '@/components/ui/ScrollLink';
import Modal from './Modal';

export interface OpenModalExampleBtnProps {}

function OpenModalExampleBtn({}: OpenModalExampleBtnProps) {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button label="Open Modal" variant="readmore" onClick={openModal} />
      <Modal isOpen={isOpen} close={closeModal} variant="modal">
        <div>
          Your super modal!
          <div>
            <ScrollLink
              label="На головну"
              href="/"
              variant="primary"
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default OpenModalExampleBtn;
