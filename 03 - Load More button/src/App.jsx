const App = () => {
  return (
    <main>
      <h1>High Quality Cheap Products</h1>
      <p>Find high quality and cheap products of your choice.</p>

      <div className="products-container">
        <div className="product-box">
          <img
            src="https://placehold.co/200x300"
            className="product-img"
            alt="Product Image"
          />
          <h2 className="product-name">Product Name</h2>
          <p className="product-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            iusto et temporibus.
          </p>
          <button className="add-btn">Add to cart</button>
        </div>
      </div>
    </main>
  );
};

export default App;
