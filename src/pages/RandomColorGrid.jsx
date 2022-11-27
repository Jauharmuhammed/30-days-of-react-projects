import React from "react";
import ReloadButton from "../components/ReloadButton";
import Tooltip from "../components/Tooltip";
import { hexaColor } from "../utils/randomColor";
import toast, { Toaster } from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";

const RandomColorGrid = () => {
  const RandomColorBox = () => {
    const randomColor = hexaColor();
    const boxStyle = {
      backgroundColor: randomColor,
      position: "relative",
      aspectRatio: "1/1",
      height: "auto",
      cursor: "pointer",
    };

    const contentStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
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
      <div style={boxStyle} onClick={handleClick}>
        <p style={contentStyle}>{randomColor}</p>
      </div>
    );
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto",
    padding: "90px 100px",
    columnGap: "3px",
    rowGap: "3px",
  };

  return (
    <>
      <div className="randomColorGrid" style={containerStyle}>
        {[...Array(32)].map((e, i) => (
          <RandomColorBox key={i} />
        ))}
        <Tooltip title="This is a random color Generator using haxadecimal values" />
        <Toaster/>
      </div>
      <ReloadButton />
    </>
  );
};

export default RandomColorGrid;
