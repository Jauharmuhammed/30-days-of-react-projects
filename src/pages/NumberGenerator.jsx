import React from "react";
import Tooltip from "../components/Tooltip";
import NumberColor from "../components/NumberColor";

const NumberGenerator = () => {
  const numbers = [...Array(32).keys()];
  console.log(numbers);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto",
    padding: "90px 100px",
    columnGap: "3px",
    rowGap: "3px",
  };

  return (
    <>
      <div style={containerStyle}>
        {numbers.map((number) => (
          <NumberColor key={number} number={number} />
        ))}
      </div>
      <Tooltip title='This is a Color Generator according to number, evens are green, odds are yellow and prime numbers are red.'/>
    </>
  );
};

export default NumberGenerator;
