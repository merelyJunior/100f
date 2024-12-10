import React, { useState } from 'react';
import styles from './index.module.css';
import { motion } from 'framer-motion';
import ReadingFilter from './readingFilter/ReadingFilter'

const Filter = ({showFilter, handleApplyFilter}) => {
  const [difficulty, setDifficulty] = useState([
    'easy',
    'moderate',
    'hard'
]);
  const [readingTime, setReadingTime] = useState([1, 30]);
  const handleDifficultyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDifficulty([...difficulty, value])
    } else {
      setDifficulty(difficulty.filter(difficulty => difficulty !== value))
    }
  }
  const applyFilters = () => {
    handleApplyFilter({ difficulty, readingTime });
  };
  const clearFilters = () => {
    setDifficulty([]);
    setReadingTime([1, 30]);
    handleApplyFilter({ difficulty: [], readingTime: [1, 30] }); 
  };
  return (
    <motion.div
      initial={{ opacity: 0, maxHeight: 0, zIndex: -1, position: 'relative'}}
      animate={showFilter ? { opacity: 1, maxHeight: 300, zIndex: 1 } : { opacity: 0, maxHeight: 0, zIndex: -1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles['filter-container']}>
        <div>
          <div className={styles.difficulty}>
            <p>Difficulty</p>
            <div>
              <label className={`${styles['filter-label']} ${difficulty.includes('easy') ? styles.active : '' }`}>
                <input
                  type='checkbox'
                  value='easy'
                  checked={difficulty.includes('easy')}
                  onChange={handleDifficultyChange}
                />
                Easy
              </label>
              <label className={`${styles['filter-label']} ${difficulty.includes('moderate') ? styles.active : '' }`}>
                <input
                  type='checkbox'
                  value='moderate'
                  checked={difficulty.includes('moderate')}
                  onChange={handleDifficultyChange}
                />
                Moderate
              </label>
              <label className={`${styles['filter-label']} ${difficulty.includes('hard') ? styles.active : '' }`}>
                <input
                  type='checkbox'
                  value='hard'
                  checked={difficulty.includes('hard')}
                  onChange={handleDifficultyChange}
                />
                Hard
              </label>
            </div>
          </div>
          <div className={styles['reading-time']}>
            <p>Reading time</p>
            <ReadingFilter readingTime={readingTime} setReadingTime={setReadingTime} />
          </div>
        </div>
        <div className={styles['btn-container']}>
          <button className={styles['btn-apply']} onClick={()=>{applyFilters();}}>Apply filters</button> 
          {
            difficulty.length > 0 || (readingTime[0] !== 1 || readingTime[readingTime.length - 1] !== 30) ? (
              <button button className={styles['btn-clear']} onClick={()=>clearFilters()}>Clear filters</button> 
            ) : null
          }
          
        </div>
        
      </div>
    </motion.div>
  );
};

export default Filter;