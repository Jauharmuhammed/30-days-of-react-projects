import React from 'react'
import RandomColorStripe from '../components/RandomColorStripe'
import ReloadButton from '../components/ReloadButton'
import Tooltip from '../components/Tooltip'

function RandomColors() {

  

  return (
    <div style={{padding:'70px'}}>
        <RandomColorStripe/>
        <RandomColorStripe/>
        <RandomColorStripe/>
        <RandomColorStripe/>
        <RandomColorStripe/>
        <ReloadButton/>
        <Tooltip title='This is a random color generator using hexadecimal values'/>
    </div>
  )
}

export default RandomColors