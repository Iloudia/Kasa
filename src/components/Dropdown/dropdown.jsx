import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import React, { useState } from 'react';

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown-item">
            <div
                className="dropdown-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='titre'>{title}</span>
                {isOpen ? <FiChevronDown /> : <FiChevronUp />}
            </div>
            {isOpen && (
                <div className="dropdown-text">
                    <div>
                        {content}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;