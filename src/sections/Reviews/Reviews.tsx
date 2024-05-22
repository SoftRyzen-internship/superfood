'use client';
import React, { useState, useEffect } from 'react';
import CardComments from '@/components/ui/CardComments';
import styles from './Reviews.module.css';
import Slider from '@/components/common/Slider/Slider';
import { getReviews } from '../../../sanity/requests';
import { Review } from './Reviews.type';

function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews()
      .then((fetchedReviews: Review[]) => {
        setReviews(fetchedReviews);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const slides = reviews.map(review => ({
    id: review._id,
    content: (
      <CardComments
        key={review._id}
        data={{
          commentsList: [review],
        }}
      />
    ),
  }));

  return (
    <section
      id="reviews"
      className={`section bg-lightGreen ${styles.reviewsBg}`}
    >
      <div className="container overflow-hidden">
        <h2 className="section-title mb-[48px] mb:mb-[40px] xl:mb-[56px] ">
          Відгуки про суперфуд
        </h2>
        <Slider slides={slides} isProductsSlider={false} />
      </div>
    </section>
  );
}

export default Reviews;
