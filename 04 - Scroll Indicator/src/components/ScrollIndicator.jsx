const ScrollIndicator = ({ scrollPercentage }) => {
  return (
    <div
      className="scroll-indicator"
      style={{ width: `${scrollPercentage}%` }}
    ></div>
  );
};

export default ScrollIndicator;
