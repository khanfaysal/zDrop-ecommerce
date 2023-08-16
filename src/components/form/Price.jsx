import rightArrow from "../../assets/images/others/chevron.png"
const Price = () => {
  
    return (
      <div className="price">
      <p className="aside-category-heading">Price</p>
      <div className="price-wrapper">
        <div className="price-inputs">
          <input className="price-input" type="text" placeholder="Min" />
          <span className="hyphen">-</span>
          <input className="price-input" type="text" placeholder="Max" />
        </div>
        <div className="price-btn">
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
    );
};

export default Price;

  