import { useState } from "react";
import downArrow from "../../assets/images/others/down-arrow.png";

const Size= () => {
  const [expandedSize, setExpandedSize] = useState([]);

  const toggoleSizeCategory = (sizeId) => {
    if (expandedSize.includes(sizeId)) {
        setExpandedSize(
            expandedSize.filter((id) => id !== sizeId)
      );
    } else {
        setExpandedSize([...expandedSize, sizeId]);
    }
  };

  const sizes = [
    {id: 1, name: "XS"},
    {id: 1, name: "S"},
    {id: 1, name: "M"},
    {id: 1, name: "L"},
    {id: 1, name: "XL"},
    {id: 1, name: "XXL"},
  ]

  return (
    <div>
      <div className="size category">
        <div className="category-item-wrapper">
          <div
            className="category-item wrapper"
            onClick={() => toggoleSizeCategory(1)}
          >
            <p className="aside-category-heading">Size</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          {expandedSize.includes(1) && (
            <div className="subcategory">
              <div className="size-item">
               {
                sizes.map((size) => {
                    return (
                        <div className="size-wrapper" key={size.id}>
                            <p>{size.name}</p>
                        </div>
                    )
                })
               }
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

export default Size;
