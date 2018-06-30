import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { onButtonClick } from '../functions/nebpaytest'
import { buttonClick } from '../functions/banktest'
import { pureNeb } from '../functions/purenebpay'
import { Input } from 'semantic-ui-react'
import { makeAWish, getWishCount, getWishingWellBalance, grantWish } from "../functions/makeAWish"

class TextField extends Component {

  state = {
    wish: "",
    user: "",
    name: ""
  }



render() {

  const transparent = {
      backgroundColor:'rgba(0,0,0,0)',
      color: '#D561FC',
      border: "2px solid #D561FC",
      marginBottom: ".5em"
    }

  return (
    <div>
    <Input placeholder='Enter your name' style={transparent} onChange={(e) => {
    this.setState({ user: e.target.value })
    this.setState({ name: e.target.value })
    console.log(this.state);
    }}/>

    <Form>
      <TextArea placeholder='Enter your wish' style={transparent} onChange={(e) => {
      this.setState({ message: e.target.value })
      this.setState({ wish: e.target.value })
      console.log(this.state);
      }}/>

    </Form>
    <Button inverted color="purple" onClick={() => makeAWish(this.state.name, this.state.wish)} style={{fontSize: "1.2em"}}> Make A Wish </Button>
    <Button inverted color="red" onClick={() => getWishCount()} style={{fontSize: "1.2em"}}> Wish Count </Button>
    <Button inverted color="blue" onClick={() => getWishingWellBalance()} style={{fontSize: "1.2em"}}> Wish Balance </Button>
    <Button inverted color="green" onClick={() => grantWish()} style={{fontSize: "1.2em"}}> Grant Wish </Button>


  </div>
  )
}
}

export default TextField
