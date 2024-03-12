import { useState } from 'react';
import Product from './components/Product';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  return (
    <main>
      <h1>High Quality Cheap Products</h1>
      <p>Find high quality and cheap products of your choice.</p>

      <div className="products-container"></div>
    </main>
  );
};

export default App;
