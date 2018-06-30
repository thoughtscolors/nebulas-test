import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import fountain from '../assets/fountain.jpg'






const Splash = () => {

const splash = {
    width: '100%' /* for IE 6 */
  }

  const textField = {
     position: 'absolute',
     top: '200px',
     'verticleAlign': 'middle',
     left: '50px',
     background: 'transparent',
     width: '50%',
     color: "white",
    }

    const h1 = {
  background: "linear-gradient(to right, violet, blue, cyan, green)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  "font-size": "60px",
  "line-height": "60px",
  textShadow: ".05em .05em rgba(0,0,0,0.1)"
}

const h3 = {
background: "linear-gradient(to right, violet, blue, cyan, green)",
"-webkit-background-clip": "text",
"-webkit-text-fill-color": "transparent",
"font-size": "24px",
"line-height": "24px",
textShadow: ".1em .1em rgba(0,0,0,0.1)"
}

    return (
      <div style={splash}>

          <Image src={fountain} />
          <div style={textField}>
            <h1 style={h1}> {<strong>THE WISHING WELL</strong>}</h1>
            <h3 style={h3}> <p>Make a wish, and at the end of each week </p>
                <p>the contents of the well will be paid out</p>
                <p>to one person randomly chosen by the wish granter AI.</p></h3>
          </div>
      </div>

    )


}

export default Splash
