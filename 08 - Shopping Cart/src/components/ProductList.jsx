import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from './Product';

function ProductList() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await axios.get('https://dummyjson.com/products?limit=20');
      const data = res.data;
      setProducts(data.products);
      console.log(data.products[1]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto flex justify-center gap-2 flex-wrap mt-10">
      {isLoading && <p>Loading...</p>}
      {products?.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

export default ProductList;
