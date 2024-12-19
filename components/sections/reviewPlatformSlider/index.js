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

  const handleSlideClick = (src) => {
    MySwal.fire({
      imageUrl: src,
      imageAlt: 'Large Image',
      showCloseButton: true,
      showConfirmButton: false,
      width: '80%',
      heightAuto: true,
    });
  };

  return (
    <Swiper
      className={styles['exeptional-section-slider']}
      spaceBetween={6}
      slidesPerView={5}
      grabCursor={true}
      loop={true}
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
      
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen1.png')}>
        <Image
          src='/assets/img/screen1.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen2.png')}>
        <Image
          src='/assets/img/screen2.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen3.png')}>
        <Image
          src='/assets/img/screen3.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen4.png')}>
        <Image
          src='/assets/img/screen4.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen5.png')}>
        <Image
          src='/assets/img/screen5.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen6.png')}>
        <Image
          src='/assets/img/screen6.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen7.png')}>
        <Image
          src='/assets/img/screen7.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen8.png')}>
        <Image
          src='/assets/img/screen8.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen9.png')}>
        <Image
          src='/assets/img/screen9.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
      <SwiperSlide className={styles['slide-wrapper']} onClick={() => handleSlideClick('/assets/img/screen10.png')}>
        <Image
          src='/assets/img/screen10.png'
          alt="project-item"
          width={260}
          height={195}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewPlatformSlider;
