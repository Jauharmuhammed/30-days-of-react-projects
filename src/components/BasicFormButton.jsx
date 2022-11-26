import React from "react";

function Button(props) {
  const buttonStyle = {
    padding: '10px 100px',
    borderRadius: '5px',
    backgroundColor: 'rgb(241,117,119)',
    color: 'white',
    margin: '20px 0',
    boxShadow: 'none',
    border: 'none'
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

export default Button;
