import React from "react";
import ReloadButton from "../components/ReloadButton";
import Tooltip from "../components/Tooltip";
import { hexaColor } from "../utils/randomColor";

const RandomColorGrid = () => {
  const RandomColorBox = () => {
    const randomColor = hexaColor();
    const boxStyle = {
      backgroundColor: randomColor,
      position: "relative",
      aspectRatio: "1/1",
      height: "auto",
    };

    const contentStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    return (
      <div style={boxStyle}>
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
      </div>
      <ReloadButton/>
    </>
  );
};

export default RandomColorGrid;
