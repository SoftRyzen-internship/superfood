'use client';
import classNames from 'classnames';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';
import './styles.css';

import Chevron from '../../../../public/icons/Chevron.svg';
interface Slide {
  id: number;
  content: string;
}

interface ProductSwiperProps {
  slides: Slide[];
  isProductsSlider: boolean;
}

function Slider({ slides, isProductsSlider }: ProductSwiperProps) {
  return (
    <div className="w-[100vw] relative mx-[auto]">
      {' '}
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        modules={[Navigation]}
        initialSlide={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="h-[626px] w-[100%] mb-[64px] md:mb-[40px] xl:mb-[56px]"
        breakpoints={{
          1280: {
            slidesPerView: 1.9,
            spaceBetween: '130px',
          },
          1440: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="w-[592px]">{slide.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={classNames({
          'flex gap-[16px] justify-center': true,
          'xl:absolute top-[50%] left-[50%] xl:gap-[477px] xl:transform xl:translate-x-[-50%] xl:translate-y-[-50%] z-50':
            isProductsSlider,
        })}
      >
        <button className="custom-prev border-inherit">
          <Chevron />
        </button>
        <button className="custom-next border-inherit">
          <Chevron />
        </button>
      </div>
    </div>
  );
}
export default Slider;
