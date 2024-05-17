import React from 'react';
import CardComments from '@/components/ui/CardComments';
import commentsData from '@/data/comments.json';
import styles from './Reviews.module.css';
import Slider from '@/components/common/Slider/Slider';

function Reviews() {
  const { commentsList, readMore } = commentsData;

  const slides = commentsList.map(comment => ({
    id: comment.key,
    content: (
      <CardComments
        key={comment.key}
        data={{
          commentsList: [comment],
          readMore: readMore,
        }}
      />
    ),
  }));

  return (
    <section className={`section bg-lightGreen ${styles.reviewsBg}`}>
      <div className="container overflow-hidden">
        <h2 className="section-title pb-[76px]">Відгуки про суперфуд</h2>
        <Slider slides={slides} isProductsSlider={false}/>
      </div>
    </section>
  );
}

export default Reviews;
