import React from 'react'
import Button from '../components/BasicFormButton'
import InputBox from '../components/BasicFormInputBox'
import Tooltip from '../components/Tooltip'

function BasicForm() {
    const bodyStyle = {
        textAlign: 'center',
        backgroundColor: 'rgb(195,230,243)',
        minHeight: '100vh'
    }
    const headingStyle = {
        textTransform:'uppercase', 
        // paddingTop: '100px',
        padding:'220px 0 20px 0',
        fontSize: '24px',
        fontWeight: '500'
    }
  return (
    <div style={bodyStyle}>
        <h4 style={headingStyle}>subscribe</h4>
        <p style={{marginBottom:'20px'}}>Sign up with your email address to receive news and updates</p>
        <InputBox type='text' placeholder='First Name'/>
        <InputBox type='text' placeholder='Last Name'/>
        <InputBox type='text' placeholder='Email'/>
        <div><Button text = 'Subscribe' /></div>
        <Tooltip title='This is a basic form using React components' />
    </div>
  )
}

export default BasicForm