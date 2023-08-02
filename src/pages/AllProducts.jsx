import products from "../data/products.json";

const AllProducts = () => {
  return (
    <div className="allProducts">
      <div className="allProducts-aside">
        <p>aside</p>
      </div>

      <div className="allProducts-main">
        <div className="allProducts-main-wrapper">

          {products.map((product) => {
            const {id,image,name,price,strikeThroughPrice,discount} = product;

            return (
              <div key={id} className="allProducts-main-wrapper-card">
                <img src={image} alt="" />
                <p className="product-name">{name}</p>
                <p>{price}</p>

                <div className="allProducts-main-wrapper-card-flex">
                  <p><s>{strikeThroughPrice}</s></p>
                  <p>{discount}</p>
                </div>

              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
