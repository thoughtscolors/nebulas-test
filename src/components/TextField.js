import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { onButtonClick } from '../functions/nebpaytest'
import { buttonClick } from '../functions/banktest'
import { pureNeb } from '../functions/purenebpay'
import { Input } from 'semantic-ui-react'
import { newUserTest, msgTest, getMessageCount, getMessages } from '../functions/chatTest'

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
    <Button inverted color="purple" onClick={() => onButtonClick()} style={{fontSize: "1.2em"}}> NebPay </Button>
    <Button inverted color="red" onClick={() => buttonClick(this.state.wish)} style={{fontSize: "1.2em"}}> BankTest </Button>
    <Button inverted color="blue" onClick={() => pureNeb(this.state.user, this.state.wish)} style={{fontSize: "1.2em"}}> PureNeb </Button>
    <Button inverted color="purple" onClick={() => newUserTest(this.state.name)} style={{fontSize: "1.2em"}}> NewUserTest </Button>
    <Button inverted color="red" onClick={() => msgTest(this.state.message)} style={{fontSize: "1.2em"}}> MsgTest </Button>
    <Button inverted color="red" onClick={() => getMessageCount()} style={{fontSize: "1.2em"}}> GetMsgCount </Button>
    <Button inverted color="red" onClick={() => getMessages()} style={{fontSize: "1.2em"}}> getMsgTest </Button>

  </div>
  )
}
}

export default TextField
