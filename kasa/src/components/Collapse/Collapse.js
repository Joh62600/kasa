import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Collapse.css'; 

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <button className="collapse-header" onClick={toggleCollapse}>
                {title}
                <span className="chevron-container">
                    <FontAwesomeIcon icon={faChevronUp} className={`arrow ${isOpen ? 'rotate' : ''}`} />
                </span>
            </button>
            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapse;