const Accordion = ({ title, content, selected, id, onSelect }) => {
  return (
    <div
      className={selected === id ? "accordion active" : "accordion"}
      onClick={() => onSelect(id)}
    >
      <div className="accordion-title">
        <p>0{id + 1}</p>
        <h2>{title}</h2>
        <i
          className={
            selected === id
              ? "fa-solid fa-chevron-up"
              : "fa-solid fa-chevron-down"
          }
        ></i>
      </div>
      <div
        className="accordion-content"
        style={{ display: selected === id ? "block" : "none" }}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
