import React from "react";

const Tooltip = ({ title }) => {
  return (
    <div className="infoButton">
      <span className="tooltip">?
        <span className="tooltiptext">{title}</span>
      </span>
    </div>
  );
};

export default Tooltip;
