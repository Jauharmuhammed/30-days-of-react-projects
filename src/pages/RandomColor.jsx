import React from "react";
import toast, { Toaster } from "react-hot-toast";
import ReloadButton from "../components/ReloadButton";
import Tooltip from "../components/Tooltip";
import { hexaColor } from "../utils/randomColor";
import { IoCopyOutline } from "react-icons/io5";

function RandomColor() {
  const randomColor = hexaColor();
  const bodyStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: randomColor,
  };
  const headerStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "800",
    cursor: "pointer",
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
    <div style={bodyStyle}>
      <h1 style={headerStyle} onClick={handleClick}>
        {randomColor}
      </h1>
      <Tooltip title="This is a random color generator using the hexadecimal values and random fucntion in JavaScript" />
      <ReloadButton />
      <Toaster />
    </div>
  );
}

export default RandomColor;
