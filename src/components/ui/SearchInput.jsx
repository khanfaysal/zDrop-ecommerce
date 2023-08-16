import React, { useRef } from 'react'

function SearchInput({ placeholder = '' }) {
    const inputRef = useRef(null);

    const handleInputChange = () => {
        const searchText = inputRef.current.value;
        // invoke a function that fetch or filter through the products.. with the ${searchText}
    };

    return (
        <div className="dynamic-search-input">
            <input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                onChange={handleInputChange}
            />
            <div className="search-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </div>
        </div>
    )
}

export default SearchInput