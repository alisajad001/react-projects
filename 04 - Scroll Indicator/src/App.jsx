import { useEffect, useState } from 'react';
import ScrollIndicator from './components/ScrollIndicator';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const result = await res.json();

      setData(result.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h1>Scroll Indicator Project</h1>
      </header>

      <ScrollIndicator />

      <section>
        {/* Hnadle Loading and Error */}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error {isError}</p>}

        {data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </section>
    </>
  );
};

export default App;
