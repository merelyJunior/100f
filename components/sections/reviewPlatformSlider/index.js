
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from'./index.module.css';
import Image from 'next/image';

const ReviewPlatformSlider = () => {
  return (
    <Swiper
      className={styles['exeptional-section-slider']}
      spaceBetween={6} // Расстояние между слайдами
      slidesPerView={4} // Количество слайдов на экране
      grabCursor={true} // Включает захват курсора для перетаскивания
      loop={true} // Зацикливает слайдер
      centeredSlides={true} // Центрирует активный слайд
      slideToClickedSlide={true} // Перелистывание на клик по слайду
      effect="slide" // Эффект анимации
      breakpoints={{
        390: {
          slidesPerView: 2, 
        },
        768: {
          slidesPerView: 3, 
        },
        1024: {
          slidesPerView: 4, 
        },
      }}
    >
      <SwiperSlide сlassName={styles['slide-wrapper']}>
          <Image
            src='/assets/img/Rectangle40.png'
            alt="project-item"
            width={260}
            height={195}
          />
      </SwiperSlide>
      <SwiperSlide сlassName={styles['slide-wrapper']}>
          <Image
            src='/assets/img/Rectangle41.png'
            alt="project-item"
            width={260}
            height={195}
          />
      </SwiperSlide>
      <SwiperSlide сlassName={styles['slide-wrapper']}>
          <Image
            src='/assets/img/Rectangle42.png'
            alt="project-item"
            width={260}
            height={195}
          />
      </SwiperSlide>
      <SwiperSlide сlassName={styles['slide-wrapper']}>
          <Image
            src='/assets/img/Rectangle43.png'
            alt="project-item"
            width={260}
            height={195}
          />
      </SwiperSlide>
      <SwiperSlide сlassName={styles['slide-wrapper']}>
          <Image
            src='/assets/img/Rectangle40.png'
            alt="project-item"
            width={260}
            height={195}
          />
      </SwiperSlide>
      <SwiperSlide сlassName={styles['slide-wrapper']}>
          <Image
            src='/assets/img/Rectangle41.png'
            alt="project-item"
            width={260}
            height={195}
          />
      </SwiperSlide>
      <SwiperSlide сlassName={styles['slide-wrapper']}>
          <Image
            src='/assets/img/Rectangle42.png'
            alt="project-item"
            width={260}
            height={195}
          />
      </SwiperSlide>
      <SwiperSlide сlassName={styles['slide-wrapper']}>
          <Image
            src='/assets/img/Rectangle43.png'
            alt="project-item"
            width={260}
            height={195}
          />
      </SwiperSlide>
    
    </Swiper>
  );
};

export default ReviewPlatformSlider;
