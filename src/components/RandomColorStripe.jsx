import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";
import { hexaColor } from "../utils/randomColor";

function RandomColorBox() {
  const randomColor = hexaColor();

  const bodyStyle = {
    height: "100px",
    width: "100%",
    backgroundColor: randomColor,
    margin: "15px 0",
    position: "relative",
    cursor: 'pointer',
  };
  const headerStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "800",
  };

  const handleClick = () => {
    navigator.clipboard.writeText(randomColor);
    toast("Copied to clipboard", {
      icon: <IoCopyOutline />,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div style={bodyStyle} onClick={handleClick}>
      <h1 style={headerStyle}>{randomColor}</h1>
      <Toaster />
    </div>
  );
}

export default RandomColorBox;
