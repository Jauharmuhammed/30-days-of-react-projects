import React from "react";
import { AiOutlineReload } from "react-icons/ai";

const ReloadButton = ({color}) => {
  const buttonStyle = {
    fontSize: "24px",
    backgroundColor: "transparent",
    color:  "white",
    padding: "10px 30px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
    cursor: "pointer",
  };

  const containerStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)'
  }
  return (
    <div style={containerStyle}>
      <button title="reload the page" style={buttonStyle} onClick={() => window.location.reload(false)}>
        <AiOutlineReload color={color ? `${color}` :"black"} />
      </button>
    </div>
  );
};

export default ReloadButton;
