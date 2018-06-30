import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { getMessages } from '../functions/chatTest'
var NebPay = require("nebpay");
var nebPay = new NebPay();



class CardGroup extends Component {

  state = {
    wishes: []
  }

parseResponse = async (resp) => {
    try {
      if (!resp) {
      console.log("waiting for response....");
    }
    const result = await JSON.parse(resp.result)
    console.log("PARSERESULT>>>", result);
    this.setState({ wishes: result })
  } catch (err) {
    console.log(err);
    return err
  }
}


  getWishes = async (count) => {

      var to = "n1yhXbxnVhQNeV8HMKyh9oLwKLwor2wupxZ";   //the smart contract address of your Dapp
      var value = ".0000001";
      var callFunction = "getWishes" //the function name to be called
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
  this.getWishes()
  // let messages = getMessages()
  // this.setState({ messages })
  // console.log("MESSAGES>>>", messages);
}



render() {
let { wishes } = this.state
console.log(">>>>", wishes);
  return ( <div style={{margin: "1em 0 1em 0"}}>
    <div style={{margin: "auto", textAlign:"center"}}>
      <Button inverted color="purple" onClick={() => this.getWishes()} style={{fontSize: "1.2em"}}> Refresh Wishes </Button>
    </div>
    <Card.Group style={{margin: "1em 0 2em 0"}}>
    {!wishes.length ? "Nada" : wishes.map((wish, index) => {
      return (<Card key={index}>
        <Card.Content>
          <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
          <Card.Header>{wish.name}</Card.Header>
          <Card.Meta>{wish.value}</Card.Meta>
          <Card.Description>
            {wish.wish}
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
</div>
)}}


export default CardGroup
