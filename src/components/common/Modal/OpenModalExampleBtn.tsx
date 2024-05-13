'use client';

import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import ScrollLink from '@/components/ui/ScrollLink';
import Modal from './Modal';

function OpenModalExampleBtn() {
  let [isOpen1, setIsOpen1] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  let [isOpen3, setIsOpen3] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);

  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);

  const openModal3 = () => setIsOpen3(true);
  const closeModal3 = () => setIsOpen3(false);

  return (
    <>
      <ul className="flex flex-wrap gap-5">
        <li>
          <Button
            label="OpenComments"
            variant="readmore"
            onClick={openModal1}
          />
          <Modal isOpen={isOpen1} close={closeModal1} variant="comments">
            <div className="relative px-5 py-5">
              Your super modal! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero, deleniti. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vero, deleniti.
              <button className="absolute top-4 right-4" onClick={closeModal1}>
                X
              </button>
            </div>
          </Modal>
        </li>

        <li>
          <Button label="OpenSimple" variant="readmore" onClick={openModal2} />
          <Modal isOpen={isOpen2} close={closeModal2} variant="simple">
            <div className="relative px-5 py-5">
              Your super modal! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero, deleniti. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vero, deleniti.
              <div className="text-center">
                <ScrollLink
                  label="На головну"
                  href="/"
                  variant="primary"
                  onClick={closeModal2}
                />
              </div>
            </div>
          </Modal>
        </li>

        <li>
          <Button label="OpenBurger" variant="readmore" onClick={openModal3} />
          <Modal isOpen={isOpen3} close={closeModal3} variant="burger">
            <div className="relative px-5 py-5">
              Your super modal! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero, deleniti. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vero, deleniti.
              <button className="absolute top-4 right-4" onClick={closeModal3}>
                X
              </button>
            </div>
          </Modal>
        </li>
      </ul>
    </>
  );
}

export default OpenModalExampleBtn;
