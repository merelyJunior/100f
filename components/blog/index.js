import React, { useState } from 'react';
import styles from './index.module.css';
import Footer from '../footer';
import CoinsPlugin from '../coinsPlugin';
import BlogCard from '../blogCard';
import Filter from '../filter';
import Pagination from '../pagination';
import Image from 'next/image';

const Blog = ({data}) => {

  const {blogPages, allPosts, popularPosts} = data;
  const [originalPosts, setOriginalPosts] = useState(allPosts);
  
  // Отображаемые посты
  const postsPerPage = 6;
  const getPaginatedPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return originalPosts.slice(startIndex, startIndex + postsPerPage);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = originalPosts.length - 1;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Фильтр блога
  const [showFilter, setShowFilter] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [filters, setFilters] = useState({ difficulty: [], readingTime: [] });
  
  const filterParams = (filters) => {
    let updatedPosts = [...allPosts];
  
    if (filters.difficulty.length > 0) {
      updatedPosts = updatedPosts.filter(post => filters.difficulty.includes(post.acf.difficulty));
    }
  
    if (filters.readingTime.length === 2) {
      const [minTime, maxTime] = filters.readingTime;
      updatedPosts = updatedPosts.filter(post => {
        const postReadingTime = post.readingTime || 0;
        return postReadingTime >= minTime && postReadingTime <= maxTime;
      });
    }
  
    setOriginalPosts(updatedPosts);
  };
  return (
    <>
      <section className={styles['first-screen-card']}>
          <div className={styles['first-screen-card-container']}>
              {/* <CoinsPlugin/> */}
              <div className={styles.inner}>
                  <h1 className="main-title">BLOG</h1>
                  <p className={styles.subtitle}>Product updates, partnerships, and announcements from CoinMarketCap and our contributors</p>
              </div>
          </div>
      </section>
      <section>
        <div className={styles.toolbar}>
          <div className={styles['view-control']}>
            <p>Layout</p>
            <button className={`${gridView ? styles.active : ''}`} onClick={() => setGridView(false)}><Image src='/assets/img/icons/list-icon.png' alt='icon' width={11} height={11}/></button>
            <button className={`${!gridView ? styles.active : ''}`} onClick={() => setGridView(true)}><Image src='/assets/img/icons/grid-icon.png' alt='icon' width={11} height={11}/></button>
          </div>
          <button className={`${styles['blog-filter']} ${showFilter ? styles.active : ''}`} onClick={() => setShowFilter(!showFilter)}>Filters</button>
        </div>
        <Filter showFilter={showFilter} handleApplyFilter={filterParams}/>
        <h3 className={styles.subtitle}>Articles <span>({totalPosts + 1 })</span></h3>
        <div className={`${styles['card-inner']} ${!gridView && styles['list-view']}`}>
          {totalPosts + 1 >= 1 ? (
           <>
            {getPaginatedPosts().map((post) => (
              <BlogCard key={post.id} post={post} gridView={gridView} relatedPosts={false}/>
            ))}
            </>
          ) : (
            <p>No posts yet.</p>
          )}
          
        </div>
      </section>
      {
        totalPosts > 6 && (
          <Pagination
          totalPosts={totalPosts}
          postsPerPage={postsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
      />
        )
      }
      
      <Footer/>
    </>
  );
};

export default Blog;

{/* <h3>Популярные посты:</h3>
<div className={styles['popular-posts']}>
  {popularPosts.map((post) => (
    <BlogCard key={post.id} post={post} />
  ))}
</div> */}