import React, { useState, useEffect } from 'react';
import data from '../../data/logement.json';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ apartmentId }) => {
  // Déclare deux états : currentIndex pour l'index de l'image actuelle et images pour stocker les images de l'appartement
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Utilise useEffect pour charger les images lorsque l'ID de l'appartement change
  useEffect(() => {
    const apartment = data.find(item => item.id === apartmentId); // Trouve l'appartement correspondant dans les données
    if (apartment && apartment.pictures) {
      setImages(apartment.pictures); // Si l'appartement a des images, les met à jour dans l'état
    } else {
      setImages([]); // Sinon, initialise les images à un tableau vide
    }
  }, [apartmentId]); // Dépendance : exécute cet effet chaque fois que apartmentId change

  // Fonction pour aller à l'image précédente
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0; // Vérifie si l'image actuelle est la première
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1; // Si c'est la première, revient à la dernière; sinon, décrémente l'index
    setCurrentIndex(newIndex); // Met à jour l'index actuel
  };

  // Fonction pour aller à l'image suivante
  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1; // Vérifie si l'image actuelle est la dernière
    const newIndex = isLastImage ? 0 : currentIndex + 1; // Si c'est la dernière, revient à la première; sinon, incrémente l'index
    setCurrentIndex(newIndex); // Met à jour l'index actuel
  };

  return (
    <div className="carousel-container"> {/* Conteneur principal du carrousel */}
      {images.length > 1 && ( // Si plus d'une image est disponible, affiche les boutons pour naviguer
        <button onClick={goToPrevious} className="carousel-button carousel-button--prev">
          <FontAwesomeIcon icon={faChevronLeft} /> {/* Bouton pour l'image précédente avec icône */}
        </button>
      )}
      {images.length > 0 && ( // Si des images sont disponibles, affiche l'image actuelle et le compteur
        <>
          <img src={images[currentIndex]} alt={`Appartement ${currentIndex + 1}`} className="carousel-img" />
          <h2 className="carousel-counter">{`${currentIndex + 1} / ${images.length}`}</h2> {/* Affiche le compteur */}
        </>
      )}
      {images.length > 1 && ( // Si plus d'une image est disponible, affiche les boutons pour naviguer
        <button onClick={goToNext} className="carousel-button carousel-button--next">
          <FontAwesomeIcon icon={faChevronRight} /> {/* Bouton pour l'image suivante avec icône */}
        </button>
      )}
    </div>
  );
};

export default Carousel; // Exporte le composant Carousel