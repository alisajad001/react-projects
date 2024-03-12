import { useEffect, useState } from 'react';
import Product from './components/Product';
import LoadMoreBtn from './components/LoadMoreBtn';

const API = 'https://dummyjson.com/products';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  // Fetch data
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();

      setIsLoading(false);
      setProducts(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Hnadle load more click
  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 8);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main>
      <h1>High Quality Cheap Products</h1>
      <p>Find high quality and cheap products of your choice.</p>

      <div className="products-container">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          products.slice(0, visibleProducts).map((product) => {
            return <Product key={product.id} {...product} />;
          })
        )}

        {products.length > visibleProducts && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    </main>
  );
};

export default App;
