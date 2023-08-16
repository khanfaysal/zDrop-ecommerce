import { useState } from 'react';
import downArrow from "../../assets/images/others/down-arrow.png";

const Category = () => {
    const [expandedCategories, setExpandedCategories] = useState([]);

    const toggleCategory = (categoryId) => {
        if (expandedCategories.includes(categoryId)) {
            setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
        } else {
            setExpandedCategories([...expandedCategories, categoryId]);
        }
    };

    return (
        <div>
            <div className="category">
                <div className="category-item-wrapper">
                    <div className="category-item wrapper">
                        <p className='ca'>Category</p>
                        <img
                        onClick={() => toggleCategory(1)}
                            src={downArrow}
                            alt=""
                            className={`dropdown-arrow ${expandedCategories.includes(1) ? 'expanded' : ''}`}
                        />
                    </div>
                    {expandedCategories.includes(1) && (
                        <div className="subcategory">
                            <div className="category-item">
                                <p onClick={() => toggleCategory(11)}>Subcategory 1</p>
                                {expandedCategories.includes(11) && (
                                    <div className="nested-subcategory">
                                        <p>Nested Subcategory 1</p>
                                        {/* Add more nested subcategories as needed */}
                                    </div>
                                )}
                            </div>
                            {/* Add more subcategories under Subcategory 1 */}
                        </div>
                    )}
                </div>

                {/* Add more main categories and their nested dropdowns */}
            </div>
        </div>
    );
};

export default Category;
