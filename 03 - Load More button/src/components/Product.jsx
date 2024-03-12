const Product = () => {
  return (
    <div className="product-box">
      <img
        src="https://cdn.dummyjson.com/product-images/1/3.jpg"
        className="product-img"
        alt="Product Image"
      />
      <h3 className="product-name">Product Name</h3>
      <p className="product-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        iusto et temporibus.
      </p>
      <div className="product-price">
        <span>45$</span>
        <del>85$</del>
      </div>
      <button className="add-btn">Add to cart</button>
    </div>
  );
};

export default Product;
