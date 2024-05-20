import React, { useState, useEffect } from 'react';
import data from '../../data/logement.json';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ apartmentId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apartment = data.find(item => item.id === apartmentId);
    if (apartment && apartment.pictures) {
      setImages(apartment.pictures);
    } else {
      setImages([]);
    }
  }, [apartmentId]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious} className="carousel-button carousel-button--prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {images.length > 0 && (
        <>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="carousel-img" />
          <h2 className="carousel-counter">{`${currentIndex + 1} / ${images.length}`}</h2>
        </>
      )}
      <button onClick={goToNext} className="carousel-button carousel-button--next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;