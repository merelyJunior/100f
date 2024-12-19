import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from './index.module.css';
import Image from 'next/image';

const MySwal = withReactContent(Swal);

const Carousel = () => {
  const items = [
    { id: 1, src: "/assets/img/screen9.png" },
    { id: 2, src: "/assets/img/screen10.png" },
    { id: 3, src: "/assets/img/screen4.png" }
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Центральный элемент по умолчанию
  const [isPaused, setIsPaused] = useState(false); // Флаг остановки таймера

  useEffect(() => {
    if (isPaused) return; // Если таймер остановлен, ничего не делаем

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [items.length, isPaused]);

  const handleItemClick = (index) => {
    setIsPaused(true); // Останавливаем таймер

    if (index === activeIndex) {
      // Открыть увеличенное изображение в модальном окне
      MySwal.fire({
        html: (
          <div>
            <Image
              src={items[index].src}
              alt="Enlarged project item"
              width={800}
              height={400}
              style={{ borderRadius: '10px' }}
            />
          </div>
        ),
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          popup: 'swalPopup', 
        },
      }).then(() => setIsPaused(false)); // Возобновляем таймер после закрытия модального окна
    } else {
      setActiveIndex(index); // Меняем активный элемент
      setTimeout(() => setIsPaused(false), 3000); // Возобновляем таймер через 3 секунды
    }
  };

  const getClassName = (index) => {
    const position = (index - activeIndex + items.length) % items.length;

    if (position === 0) return styles.active; // Центральный элемент
    if (position === 1) return styles.next; // Следующий справа
    if (position === 2) return styles.prev; // Предыдущий слева
    return '';
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
