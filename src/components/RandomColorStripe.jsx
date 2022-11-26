import React from 'react'
import { hexaColor } from '../utils/randomColor'

function RandomColorBox() {

    const bodyStyle ={
        height: '100px',
        width: '100%',
        backgroundColor: hexaColor(),
        margin: '15px 0',
        position: 'relative'
    }
    const headerStyle ={
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: '800',
        
    }

    return (
        <div style={bodyStyle}>
            <h1 style={headerStyle} >{hexaColor()}</h1>
        </div>
    )
}

export default RandomColorBox