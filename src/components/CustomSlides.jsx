"use client"
import { useState } from 'react';
import styles from '../styles/Carousel.css'; // Import CSS file for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.prevButton}>
        Prev
      </button>
      <div className={styles.slideContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? `${styles.slide} ${styles.active}` : styles.slide}
          >
            {index === currentIndex && (
              <img src={image} alt={`Slide ${index}`} className={styles.image} />
            )}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles.nextButton}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
