import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Collapse.css';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false); // Gère l'état d'ouverture/fermeture
    const contentRef = useRef(null); // Référence au conteneur du contenu

    // Fonction pour basculer l'état de la section
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // Effet pour ajuster la hauteur du conteneur en fonction de l'état
    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.height = '0px';
        }
    }, [isOpen]);

    return (
        <div className="collapse-container">
            <button className="collapse-header" onClick={toggleCollapse}>
                {title}
                <span className="chevron-container">
                    <FontAwesomeIcon icon={faChevronUp} className={`arrow ${isOpen ? 'rotate' : ''}`} />
                </span>
            </button>
            <div
                ref={contentRef}
                className={`collapse-content`}
                onTransitionEnd={() => {
                    if (isOpen) {
                        contentRef.current.style.height = 'auto';
                    }
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Collapse;