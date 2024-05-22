'use client';
import React, { useState } from 'react';

import Icon from '@/../public/icons/LowPartOfReview.svg';
import CloseIcon from '@/../public/icons/Close.svg';

import Modal from '@/components/common/Modal';
import readMore from '@/data/comments.json';

import { CardCommentsProps } from './CardComments.types';
import styles from './CardComments.module.css';

function CardComments({ data }: CardCommentsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState('');
  const [selectedName, setSelectedName] = useState('');

  const openModal = (comment: string, name: string) => {
    setSelectedComment(comment);
    setSelectedName(name);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex gap-[23px] md:gap-6 xl:gap-8">
        {data.commentsList.map(comment => (
          <div className="flex flex-col gap" key={comment._id}>
            <div className="bg-white rounded-xl flex h-[299px] w-[338px] md:h-[397px] xl:h-[490px] xl:w-[384px]">
              <div className="flex flex-col">
                <div className="px-6 pt-[24px] pb-8 md:px-8 md:pt-[32px] transition">
                  <h3 className="transition text-black font-geologica text-base font-medium leading-[21.6px] tracking-tighter pb-4 md:pb-5 md:text-[18px] md:leading-[24.3px] xl:text-[20px] xl:leading-[27px]">
                    {comment.reviewer}
                  </h3>
                  <p className="transition text-black font-geologica text-sm font-light leading-[18.9px] tracking-tighter md:text-[16px] md:leading-[21.6px] xl:text-[18px] xl:leading-[24.3px] line-clamp-[8] md:line-clamp-[9] xl:line-clamp-[12] ">
                    {comment.comment}
                  </p>
                  {comment.comment.split('').length > 320 && (
                    <div className="pt-4 md:pt-6">
                      <button
                        onClick={() =>
                          openModal(comment.comment, comment.reviewer)
                        }
                        type="button"
                        className="transition font-geologica text-green text-sm font-light hover:text-grey leading-[18.9px] tracking-tighter text-left relative md:text-[16px] md:leading-[21.6px] xl:text-[18px] xl:leading-[24.3px]"
                      >
                        <span className={`${styles.readMore}`}>
                          {readMore.readMore}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex">
              <Icon className="pl-6 w-full" />
            </div>
          </div>
        ))}
      </div>

      <Modal
        variant="comments"
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        className="overflow-y-hidden"
      >
        <div className="px-6 py-[56px] md:px-8 md:py-[66px]">
          <h3 className="text-black transition font-geologica text-base font-medium leading-[21.6px] tracking-tighter pb-4 md:pb-5 md:text-[18px] md:leading-[24.3px] xl:text-[20px] xl:leading-[27px]">
            {selectedName}
          </h3>
          <p className="text-black transition font-geologica text-sm font-light leading-[18.9px] tracking-tighter md:text-[16px] md:leading-[21.6px] xl:text-[18px] xl:leading-[24.3px] ">
            {selectedComment}
          </p>
        </div>
        <button
          type="button"
          className="absolute top-4 right-4"
          onClick={() => setIsModalOpen(false)}
        >
          <CloseIcon
            width={32}
            height={32}
            stroke="#CADAB0"
            className="w-8 h-8 md:w-10 md:h-10 hover:stroke-green transition"
          />
        </button>
      </Modal>
    </>
  );
}

export default CardComments;
