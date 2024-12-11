import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './index.module.css';
import Image from 'next/image';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ReviewPlatformSlider = () => {
  const MySwal = withReactContent(Swal);

  // Функция для открытия попапа
  const handleSlideClick = (src) => {
    MySwal.fire({
      imageUrl: src,
      imageAlt: 'Large Image',
      showCloseButton: true,
      showConfirmButton: false,
      width: '80%', // Контролируем размер изображения в попапе
      heightAuto: true,
    });
  };

  return (
    <Swiper
      className={styles['exeptional-section-slider']}
      spaceBetween={6}
      slidesPerView={4}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slideToClickedSlide={true}
      effect="slide"
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
      
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/Rectangle41.png')}>
        <Image
          src='/assets/img/Rectangle41.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/Rectangle42.png')}>
        <Image
          src='/assets/img/Rectangle42.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/Rectangle43.png')}>
        <Image
          src='/assets/img/Rectangle43.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/Rectangle44.png')}>
        <Image
          src='/assets/img/Rectangle44.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/Rectangle45.png')}>
        <Image
          src='/assets/img/Rectangle45.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/Rectangle46.png')}>
        <Image
          src='/assets/img/Rectangle46.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/Rectangle47.png')}>
        <Image
          src='/assets/img/Rectangle47.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewPlatformSlider;
