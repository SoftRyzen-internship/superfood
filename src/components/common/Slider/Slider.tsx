'use client';
import classNames from 'classnames';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';

import ariaLabel from '@/data/slider.json';

import { SliderProps } from './Slider.types';
import './Slider.css';

import Chevron from '@/../public/icons/Chevron.svg';

function Slider({ slides, isProductsSlider }: SliderProps) {
  const slidesToShowTabl = isProductsSlider ? 1 : 2;
  const slidesToShowDesc = isProductsSlider ? 1.99 : 3;
  const gapToShowDesc = isProductsSlider ? '120px' : '24px';
  const centeredSlides = isProductsSlider ? true : false;
  return (
    <div
      className={classNames('relative', 'mx-[auto]', {
        'w-[100vw]': isProductsSlider,
      })}
    >
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Navigation]}
        initialSlide={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="w-[100%] mb-[40px]"
        breakpoints={{
          768: {
            slidesPerView: slidesToShowTabl,
            centeredSlides: centeredSlides,
          },
          1280: {
            slidesPerView: slidesToShowDesc,
            spaceBetween: gapToShowDesc,
            centeredSlides: centeredSlides,
          },
          1560: {
            slidesPerView: 3,
            centeredSlides: centeredSlides,
          },
        }}
      >
        {slides.map(slide => (
          <SwiperSlide
            key={slide.id}
            className={classNames({
              product: isProductsSlider,
            })}
          >
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={classNames({
          'flex gap-[16px] justify-center': true,
          'md:absolute top-[35%] left-[50%] md:gap-[477px] md:transform md:translate-x-[-50%] md:translate-y-[-50%] z-50':
            isProductsSlider,
        })}
      >
        <button
          className={classNames('custom-prev', 'border-inherit', {
            'stroke-white text-[#ffffff29]': isProductsSlider,
            'stroke-[#1F7437]  text-[#1f743752] hover:stroke-white focus:stroke-white':
              !isProductsSlider,
          })}
          aria-label={ariaLabel.prev}
          type="button"
        >
          <Chevron width={32} height={32} />
        </button>
        <button
          className={classNames('custom-next', 'border-inherit', {
            'stroke-white text-[#ffffff29]': isProductsSlider,
            'stroke-[#1F7437] text-[#1f743752] hover:stroke-white focus:stroke-white':
              !isProductsSlider,
          })}
          aria-label={ariaLabel.next}
          type="button"
        >
          <Chevron width={32} height={32} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
