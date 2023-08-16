import Category from "../components/form/Category";
import Color from "../components/form/Color";
import Filters from "../components/form/Filters";
import Price from "../components/form/Price";
import Size from "../components/form/Size";
import Blog from "../components/ui/Blog";
import products from "../data/products.json";

const AllProducts = () => {
  return (
    <div className="products-wrapper">
      <div className="allProducts">
        <div className="allProducts-aside">
          <div className="allProducts-aside-inner">
            <div className="products-filter">
              <Filters />
            </div>
            <div className="aside-dashed">
              <Category />
            </div>
            <div className="aside-dashed">
              <Size />
            </div>
            <div className="aside-dashed">
              <Color />
            </div>
            <div className="aside-dashed">
              <Price />
            </div>
          </div>
        </div>

        <div className="allProducts-main">
          <div className="allProducts-main-wrapper">
            {products.map((product) => {
              const { id, image, name, price, strikeThroughPrice, discount } =
                product;

              return (
                <div key={id} className="allProducts-main-wrapper-card">
                  <img src={image} alt="product image" />
                  <p className="product-name">{name}</p>
                  <p>{price}</p>

                  <div className="allProducts-main-wrapper-card-flex">
                    <p>
                      <s>{strikeThroughPrice}</s>
                    </p>
                    <p>{discount}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default AllProducts;
