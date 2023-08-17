import Category from "../components/form/Category";
import Color from "../components/form/Color";
import Filters from "../components/form/Filters";
import Price from "../components/form/Price";
import Size from "../components/form/Size";
import Star from "../components/form/Star";
import Blog from "../components/ui/Blog";
import ProductFilter from "../components/ui/ProductFilter";
import ecommerceProducts from "../data/products.json";

const products = [
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
];
const fabric = [
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
];
const pattern = [
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
  "Aeropostale",
  "Antony Morato ",
  "Arrow Blue Jeans ",
  "Arrow Sport ",
];
const countries = ["USA", "Germany","UK", "Italy", "Bangladesh"];
const discount = ["10% - 30%", "30% -50%","50% - 70%"];
const service = ["Cash on Delivery", "Free Shipping"];

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
              <ProductFilter
                searchPlaceHolder="Search by Brands"
                searchBar
                products={products}
                buttonTxt="Brands"
                moreProductLeft={100}
              />
            </div>
            <div className="aside-dashed">
              <ProductFilter
                searchPlaceHolder="Search by Brands"
                products={countries}
                buttonTxt="Country"
                moreProductLeft={2}
              />
            </div>
            <div className="aside-dashed">
              <Size />
            </div>
            <div className="aside-dashed">
              <Color />
            </div>
            <div className="aside-dashed">
              <ProductFilter
                products={discount}
                buttonTxt="Discount"
              />
            </div>
            <div className="aside-dashed">
              <Price />
            </div>
            <div className="aside-dashed">
              <Star />
            </div>
            <div className="aside-dashed">
              <ProductFilter
                products={fabric}
                buttonTxt="Fabric"
                moreProductLeft={5}
              />
            </div>
            <div className="aside-dashed">
              <ProductFilter
                products={pattern}
                buttonTxt="Pattern"
                moreProductLeft={26}
              />
            </div>
            <div className="aside-dashed">
              <ProductFilter
                products={service}
                buttonTxt="Service"
              />
            </div>
          </div>
        </div>

        <div className="allProducts-main">
          <div className="allProducts-main-wrapper">
            {ecommerceProducts.map((product) => {
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
