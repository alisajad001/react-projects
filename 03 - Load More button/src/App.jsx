import { useEffect, useState } from 'react';
import Product from './components/Product';
import LoadMoreBtn from './components/LoadMoreBtn';

const API = 'https://dummyjson.com/products?limit=20&skip=';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(0);

  // Fetch data
  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `${API}${visibleProducts === 0 ? 0 : visibleProducts * 20}`,
      );

      const data = await res.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
      }

      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Hnadle load more click
  const handleLoadMore = () => {
    setVisibleProducts(visibleProducts + 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [visibleProducts]);
  return (
    <main>
      <h1>High Quality Cheap Products</h1>
      <p>Find high quality and cheap products of your choice.</p>

      <div className="products-container">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          products &&
          products.length &&
          products.map((product) => {
            return <Product key={product.id} {...product} />;
          })
        )}

        <LoadMoreBtn onClick={handleLoadMore} />
      </div>
    </main>
  );
};

export default App;
