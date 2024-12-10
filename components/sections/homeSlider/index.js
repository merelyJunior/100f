
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from'./index.module.css';
import Image from 'next/image';

const Carousel = () => {
  const items = [
    { id: 1, src: "/assets/img/Rectangle40.png" },
    { id: 2, src: "/assets/img/Rectangle39.png" },
    { id: 3, src: "/assets/img/Rectangle39.png" }
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Центральный элемент по умолчанию

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const getClassName = (index) => {
    // Вычисляем смещение относительно активного индекса
    const position = (index - activeIndex + items.length) % items.length;

    if (position === 0) return styles.active; // Центральный элемент
    if (position === 1) return styles.next; // Следующий справа
    if (position === 2) return styles.prev; // Предыдущий слева
  };

  return (
    <div className={styles.carousel}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.item} ${getClassName(index)}`}
          onClick={() => handleItemClick(index)}
        >
           <Image
            src={item.src}
            alt="project-item"
            width={165}
            height={85}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
