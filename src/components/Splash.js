import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import fountain from '../assets/fountain.jpg'
import TextField from './TextField'
import { Button } from 'semantic-ui-react'
import { onButtonClick } from '../functions/nebpaytest'
import { buttonClick } from '../functions/banktest'

const Splash = () => {

const splash = {
    position: 'relative',
    width: '100%' /* for IE 6 */
  }

const textField = {
   position: 'absolute',
   top: '200px',
   'verticleAlign': 'middle',
   left: '50px',
   background: 'transparent',
   width: '50%'
  }
    return (
      <div style={splash}>

          <Image src={fountain} />

      <div style={textField}>
        <TextField/>
        <Button inverted color="purple" onClick={() => onButtonClick()} style={{fontSize: "1.2em"}} > NebPay </Button>
        <Button inverted color="red" onClick={() => buttonClick()} style={{fontSize: "1.2em"}} > BankTest </Button>
      </div>


      </div>
    )


}

export default Splash
