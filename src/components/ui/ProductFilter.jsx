import React, { useRef, useState } from 'react'
import SearchInput from './SearchInput'

function ProductFilter({ searchBar = false, buttonTxt = '', products = [], searchPlaceHolder = '', moreProductLeft }) {
    const [expanded, setExpanded] = useState(null);
    const contentRef = useRef([]);


    const handleMenuClick = () => {
        setExpanded(expanded ? false : true);
    };

    const handleTransitionEnd = () => {
        if (expanded) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.maxHeight = '0px';
        }
    };

    const renderRadioButtons = () => {

        return products.map((product, index) => (
            <label key={index} className="radio-option">
                <input
                    type="radio"
                    name="filterOptions"
                />
                {product}
            </label>
        ));
    };

    return (
        <div className='product-filter'>
            <button onClick={handleMenuClick} className={`arrow-button ${expanded ? 'active' : ''}`} >
                <span className="button-text">{buttonTxt}</span>
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z" />
                </svg>
            </button>
            <div
                ref={contentRef}
                onTransitionEnd={() => handleTransitionEnd()}
                style={{
                    maxHeight: expanded ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
                className='filter-items-container'
            >
                {
                    searchBar && <SearchInput placeholder={searchPlaceHolder} />
                }
                <div className="radio-group">
                    {renderRadioButtons()}
                </div>

                {
                    moreProductLeft && (<span>
                        {moreProductLeft} more
                    </span>)
                }

            </div>

        </div>
    )
}

export default ProductFilter