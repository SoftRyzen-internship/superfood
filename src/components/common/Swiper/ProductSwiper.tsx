'use client';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';
import './styles.css';
interface Slide {
  id: number;
  content: string;
}

interface ProductSwiperProps {
  slides: Slide[];
}

function ProductSwiper({ slides }: ProductSwiperProps) {
  return (
    <div className="w-[100vw] relative">
      {' '}
      <Swiper
        spaceBetween={133}
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        modules={[Navigation]}
        initialSlide={1}
        navigation={true}
        className="h-[626px] w-[100vw]"
        effect={'freeMode'}
        breakpoints={{
          1280: {
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
    </div>
  );
}
export default ProductSwiper;
