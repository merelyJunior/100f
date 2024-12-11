import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import styles from './index.module.css';
import Image from 'next/image';

const BlogCard = ({ post, gridView, relatedPosts }) => {
  const { date, modified, title, content, author_name, link, acf } = post;
  
  const extractImageUrl = (htmlContent) => {
    const matches = htmlContent.match(/<img .*?src=["'](.*?)["']/);
    return matches && matches[1] ? matches[1] : null;
  };
  const imageUrl = extractImageUrl(content.rendered);

  const extractSecondParagraphIfFirstContainsImage = (htmlContent) => {
    const paragraphs = htmlContent.match(/<p>(.*?)<\/p>/g);
    
    if (paragraphs && paragraphs.length > 0) {
      const stripTags = (text) => text.replace(/<\/?[^>]+(>|$)/g, '');
      
      const decodeEntities = (text) => {
        const entities = {
          '&#8212;': '—',
          '&#171;': '«',
          '&#187;': '»',
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&#39;': '"',
          '&apos;': "'"
        };
  
        return text.replace(/&#?[a-zA-Z0-9]+;/g, (match) => entities[match] || match);
      };
      
      const processParagraph = (paragraph) => decodeEntities(stripTags(paragraph));
  
      if (paragraphs[0].match(/<img.*?src=["'].*?["']/)) {
        return paragraphs[1] ? processParagraph(paragraphs[1]) : null;
      }
      return paragraphs[0] ? processParagraph(paragraphs[0]) : null;
    }
    
    return null;
  };
  
  const htmlContent = content.rendered;
  const firstOrSecondParagraph = extractSecondParagraphIfFirstContainsImage(htmlContent);

  const publishedTimeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });  
 
  return (
    <Link 
    className={`${styles.card} ${!gridView && styles['list-view']} ${relatedPosts && styles['related-view']} `} 
    href={`/blog/${link}`}>
        {imageUrl && 
          <div className={styles['img-container']}>
            <Image src={imageUrl} alt={title.rendered} className={styles.image} width={294} height={155}/>
            <p className={styles.difficulty}>{acf.difficulty}</p>
          </div> 
        }
        <div className={`${styles.description} `}>
          <div>
            <p className={styles.subtitle}>Blog</p>
            <p className={styles.title}>{title.rendered}</p>
            <p className={styles.text}>{firstOrSecondParagraph}</p>
          </div>
          <div className={`${styles['blog-info']} `}>
            <p>By {author_name}</p>
            <div className={styles.date}>
              <p>{publishedTimeAgo}</p>
              <div>
                <Image src='/assets/img/icons/clock.png' alt='icon' width={11} height={11}/>
                <p>{post.readingTime}m</p>
              </div>
            </div>
          </div>
        </div>
        
    </Link>
  );
};

export default BlogCard;