'use client';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

function ProductSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="h-[500px] relative"
    >
      <SwiperSlide>
        {({ isActive, isNext, isPrev }) => (
          <div className={isNext || isPrev ? 'absolute' : ''}>
            Current slide is {isActive ? 'active' : 'not active'}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive, isNext, isPrev }) => (
          <div className={isNext || isPrev ? 'absolute' : ''}>
            Current slide is {isActive ? 'active' : 'not active'}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive, isNext, isPrev }) => (
          <div className={isNext || isPrev ? 'absolute' : ''}>
            Current slide is {isActive ? 'active' : 'not active'}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive, isNext, isPrev }) => (
          <div className={isNext || isPrev ? 'absolute' : ''}>
            Current slide is {isActive ? 'active' : 'not active'}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive, isNext, isPrev }) => (
          <div className={isNext || isPrev ? 'absolute' : ''}>
            Current slide is {isActive ? 'active' : 'not active'}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive, isNext, isPrev }) => (
          <div className={isNext || isPrev ? 'absolute' : ''}>
            Current slide is {isActive ? 'active' : 'not active'}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive, isNext, isPrev }) => (
          <div className={isNext || isPrev ? 'absolute' : ''}>
            Current slide is {isActive ? 'active' : 'not active'}
          </div>
        )}
      </SwiperSlide>
      {/* Добавьте свои слайды */}
    </Swiper>
  );
}
export default ProductSwiper;
