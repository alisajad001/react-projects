function Buttons({ data, handleClick, activeTab }) {
  return (
    <div className="button-container">
      {data.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => handleClick(index)}
            style={index === activeTab ? { border: '2px dotted white' } : {}}
          >
            {item.button}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
