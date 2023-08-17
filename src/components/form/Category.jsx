import { useState } from "react";

const Category = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(
        expandedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  return (
    <div>
      <div className="category">
        <div className="category-item-wrapper">
          <div
            className="category-item wrapper"
            onClick={() => toggleCategory(1)}
          >
            <p className="aside-category-heading">Category</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          {expandedCategories.includes(1) && (
            <div className="subcategory">
              <div className="category-item">
                <p onClick={() => toggleCategory(11)}>Men's Clothing</p>
                {expandedCategories.includes(11) && (
                  <div className="nested-subcategory">
                    <p onClick={() => toggleCategory(111)}>Casual Wear</p>
                    {expandedCategories.includes(111) && (
                      <div className="nested-subcategory">
                        <p onClick={() => toggleCategory(111)}>Shirts</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

{/*         
        <ProductFilter searchPlaceHolder='Search by Contry' products={contries} buttonTxt='Country' /> */}
      </div>
    </div>
  );
};

export default Category;
