'use client';
import React, { useState } from 'react';
import Icon from '@/../public/icons/LowPartOfReview.svg';
import styles from './CardComments.module.css';
import { CardCommentsProps } from './CardComments.types';

function CardComments({ data }: CardCommentsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState('');

  const openModal = (comment: string) => {
    setSelectedComment(comment);
    setIsModalOpen(true);
  };

  return (
    <div className="flex gap-[23px] md:gap-6 xl:gap-8 bg-grey">
      {data.commentsList.map(comment => (
        <div className="flex flex-col gap" key={comment.key}>
          <div className="bg-white rounded-xl flex h-[299px] w-[338px] md:h-[397px] xl:h-[384px]">
            <div className="flex flex-col">
              <div className="px-6 pt-6 pb-8 md:px-8 md:tp-8 transition">
                <h3 className="transition font-geologica text-base font-medium leading-[21.6px] tracking-tighter pb-4 md:pb-5 md:text-[18px] md:leading-[24.3px] xl:text-[20px] xl:leading-[27px]">
                  @{comment.nameAndSurname}
                </h3>
                <p className="transition font-geologica text-sm font-light leading-[18.9px] tracking-tighter md:text-[16px] md:leading-[21.6px] xl:text-[18px] xl:leading-[24.3px] line-clamp-[8] md:line-clamp-[9] xl:line-clamp-[12] ">
                  {comment.comment}
                </p>
                {comment.comment.split('').length > 290 && (
                    <div className="pt-4 md:pt-6">
                      <button
                        onClick={() => openModal(comment.comment)}
                        type="button"
                        className="transition font-geologica text-green text-sm font-light leading-[18.9px] tracking-tighter text-left relative md:text-[16px] md:leading-[21.6px] xl:text-[18px] xl:leading-[24.3px]"
                      >
                        <span className={`${styles.readMore}`}>{data.readMore}</span>
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
  );
}

export default CardComments;
