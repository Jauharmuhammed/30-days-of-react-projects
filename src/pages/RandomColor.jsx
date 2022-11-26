import React from 'react'
import ReloadButton from '../components/ReloadButton'
import Tooltip from '../components/Tooltip'
import { hexaColor } from '../utils/randomColor'

function RandomColor() {
    
    const bodyStyle ={
        height: '100vh',
        width: '100%',
        backgroundColor: hexaColor(),
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
            <Tooltip title='This is a random color generator using the hexadecimal values and random fucntion in JavaScript' />
            <ReloadButton/>
        </div>
    )
}

export default RandomColor