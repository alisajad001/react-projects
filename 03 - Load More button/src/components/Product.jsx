const Product = ({
  title,
  description,
  price,
  discountPercentage,
  thumbnail,
}) => {
  return (
    <div className="product-box">
      <img src={thumbnail} className="product-img" alt="Product Image" />
      <h3 className="product-name">{title}</h3>
      <p className="product-desc">{description}</p>
      <div className="product-price">
        <span>${price}</span>
        <del>{discountPercentage}%</del>
      </div>
      <button className="add-btn">Add to cart</button>
    </div>
  );
};

export default Product;
