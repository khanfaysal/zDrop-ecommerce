import { useState } from "react";
import downArrow from "../../assets/images/others/down-arrow.png";
import ProductFilter from "../ui/ProductFilter";



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
            <img
              src={downArrow}
              alt=""
              className={`dropdown-arrow ${
                expandedCategories.includes(1) ? "expanded" : ""
              }`}
            />
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
                        {/* Add more nested subcategories as needed */}
                      </div>
                    )}
                    {/* Add more nested subcategories as needed */}
                  </div>
                )}
              </div>
              {/* Add more subcategories under Subcategory 1 */}
            </div>
          )}
        </div>

        {/* Add more main categories and their nested dropdowns */}

{/*         
        <ProductFilter searchPlaceHolder='Search by Contry' products={contries} buttonTxt='Country' /> */}
      </div>
    </div>
  );
};

export default Category;
