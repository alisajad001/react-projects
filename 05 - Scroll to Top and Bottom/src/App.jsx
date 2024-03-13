import { useEffect, useRef, useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const bottomRef = useRef();

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`https://dummyjson.com/products?limit=20`);
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

  // Scroll to bottom
  const handleScrolltoBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to top
  const handleScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <h1>Scroll to Top and Bottom</h1>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}

      <button onClick={handleScrolltoBottom}>Scroll to bottom</button>

      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.thumbnail} width="300" />
            </div>
          );
        })}

      <button onClick={handleScrolltoTop}>Scroll to top</button>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default App;
