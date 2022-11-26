import React from "react";

const NumberColor = ({ number }) => {
  const primeNumber = (n) => {
    let flag = true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }
    if (flag === true && n > 1) return true;
    else return false;
  };

  const chooseColor = (number) => {
    if (primeNumber(number)) {
      return "#FD5E53";
    } else if (number % 2 === 0) {
      return "#21BF73";
    } else return "#FDDB3A";
  };

  const boxStyle = {
    backgroundColor: `${chooseColor(number)}`,
    position: "relative",
    aspectRatio: "1/1",
    height: "auto",
    color: 'white',
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

  return (
    <div className='numberGenerator' style={boxStyle}>
      <h1 style={contentStyle}>{number}</h1>
    </div>
  );
};

export default NumberColor;
