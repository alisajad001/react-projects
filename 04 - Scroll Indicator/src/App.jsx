import { useEffect, useState } from 'react';
import ScrollIndicator from './components/ScrollIndicator';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

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

  // Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    const scrollWidth =
      document.body.scrollTop || document.documentElement.scrollTop;

    const maxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollWidth / maxHeight) * 100);
  };

  // Handle scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <>
      <header>
        <h1>Scroll Indicator Project</h1>
        <ScrollIndicator scrollPercentage={scrollPercentage} />
      </header>

      <section className="products-container">
        {/* Hnadle Loading and Error */}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error {isError}</p>}

        {data.map((item) => {
          return (
            <div>
              <img
                src={item.thumbnail}
                alt="Product Image"
                width="300"
                height="200"
              />
              <p key={item.id}>{item.title}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default App;
