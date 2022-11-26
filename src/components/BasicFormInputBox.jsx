import React from 'react'

function InputBox(props) {
    const InputStyle = {
        width: '250',
        borderRadius: '5px',
        backgroundColor: 'white',
        color: 'grey',
        padding: '10px 15px',
        margin: '10px 20px',
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
    }
  return (
    <input style={InputStyle} type={props.style} placeholder={props.placeholder} />
  )
}

export default InputBox