function RenderTabInfo({ data, activeTab }) {
  return (
    <section className="tabs-info-container">
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            style={
              index === activeTab ? { display: 'block' } : { display: 'none' }
            }
          >
            <h2>{item.name}</h2>

            {item.paragraphs.map((p, ind) => {
              return <p key={ind}>- {p}</p>;
            })}
          </div>
        );
      })}
    </section>
  );
}

export default RenderTabInfo;
