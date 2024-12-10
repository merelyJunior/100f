
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from'./index.module.css';
import Image from 'next/image';

const Slider = () => {

  
    return (
      <Swiper
        className={styles['become-section-slider']}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide1.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide2.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide3.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide4.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide5.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide6.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide7.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide8.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide9.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide10.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide11.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide12.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['slide-wrapper']}>
          <Image
            src='/assets/img/new-slide13.png'
            alt="project-item"
            width={386}
            height={225}
          />
        </SwiperSlide>
      </Swiper>
    );
  };
  
  export default Slider;