
import { useState } from "react";
import downArrow from "../../assets/images/others/down-arrow.png";

const Color = () => {
  const [expandedColor, setExpandedColor] = useState([]);

  const toggoleColorCategory = (colorId) => {
    if (expandedColor.includes(colorId)) {
        setExpandedColor(
            expandedColor.filter((id) => id !== colorId)
      );
    } else {
        setExpandedColor([...expandedColor, colorId]);
    }
  };

  return (
    <div>
      <div className="color size category">
        <div className="category-item-wrapper">
          <div
            className="category-item wrapper"
            onClick={() => toggoleColorCategory(1)}
          >
            <p className="aside-category-heading">Color</p>
            <img
              src={downArrow}
              alt=""
              className={`dropdown-arrow ${
                expandedColor.includes(1) ? "expanded" : ""
              }`}
            />
          </div>
          {expandedColor.includes(1) && (
            <div className="subcategory" style={{maxWidth: "233px"}}>
              <div className="size-item">
               <input type="color" value="#000000" />
               <input type="color" value="#00b55b" />
               <input type="color" value="#ffffff" />
               <input type="color" value="#e74c3c" />
               <input type="color" value="#3498db" />
               <input type="color" value="#34495e" />
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

export default Color;
