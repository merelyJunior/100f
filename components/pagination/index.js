import React from 'react';
import styles from './index.module.css'
import Image from 'next/image';
const Pagination = ({ totalPosts, postsPerPage, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];

  if (currentPage > 3) {
    pageNumbers.push('...');
  }

  // Ограничение диапазона отображаемых страниц
  let startPage = Math.max(2, currentPage - 1);
  let endPage = Math.min(totalPages - 1, currentPage + 1);

  for (let page = startPage; page <= endPage; page++) {
    pageNumbers.push(page);
  }

  if (currentPage < totalPages - 2) {
    pageNumbers.push('...');
  }

  return (
    <ul className={styles.pagination}>
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles['active']} ${styles['page-nav']}`}
        >
          <Image src='/assets/img/icons/left-pagination.png' alt='icon' width={22} height={22}/>
        </button>
      </li>
      <li>
        <button
          onClick={() => onPageChange(1)}
          className={` ${currentPage === 1 ? styles['active'] : ''}`}
          disabled={currentPage === 1}
        >
          1
        </button>
      </li>
      {pageNumbers.map((number, index) => (
        <li key={index} className={styles['page-item']}>
          {number === '...' ? (
            <span className={styles['page-ellipsis']}>{number}</span>
          ) : (
            <button
              onClick={() => onPageChange(number)}
              className={`${currentPage === number ? styles['active'] : ''}`}
              disabled={currentPage !== number}
            >
              {number}
            </button>
          )}
        </li>
      ))}
      <li>
        <button
          onClick={() => onPageChange(totalPages)}
          className={`${currentPage === totalPages ? styles['active'] : ''}`}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </button>
      </li>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles['active']} ${styles['page-nav']}`}
        >
          <Image src='/assets/img/icons/right-pagination.png' alt='icon' width={22} height={22}/>
        </button>
      </li>
      
    </ul>
  );
};

export default Pagination;