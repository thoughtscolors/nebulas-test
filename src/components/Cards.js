import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { getMessages } from '../functions/chatTest'
var NebPay = require("nebpay");
var nebPay = new NebPay();



class CardGroup extends Component {

  state = {
    messages: []
  }

parseResponse = async (resp) => {
    try {
      if (!resp) {
      console.log("waiting for response....");
    }
    const result = await JSON.parse(resp.result)
    console.log("PARSERESULT>>>", result);
    this.setState({ messages: result })
  } catch (err) {
    console.log(err);
    return err
  }
}


  getMessages = async (count) => {

      var to = "n221k8bYq4oevaXhDQFfJa6u56wpUT92Vo6";   //the smart contract address of your Dapp
      var value = ".0000001";
      var callFunction = "getMessages" //the function name to be called
      var callArgs; //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
      var options = {
          goods: {        //commodity description
              name: "example"
          },
          listener: this.parseResponse
      }
      //Send transaction (here is smart contract call)
      nebPay.simulateCall(to, value, callFunction, callArgs, options);

      //Set a periodically query
      // intervalQuery = setInterval(function() {
      //     funcIntervalQuery();
      // }, 10000); //it's recommended that the query frequency is between 10-15s.
  }


componentDidMount = () => {
  this.getMessages()
  // let messages = getMessages()
  // this.setState({ messages })
  // console.log("MESSAGES>>>", messages);
}



render() {
let { messages } = this.state
console.log(">>>>", messages);
  return (<Card.Group>
    {!messages ? "Nada" : messages.map((message, index) => {
      return (<Card key={index}>
        <Card.Content>
          <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
          <Card.Header>{message.name}</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            {message.msg}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>)
    })}

  </Card.Group>
)}}


export default CardGroup
