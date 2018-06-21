import NebPay from 'nebpay'
import { BigNumber } from 'bignumber';
const nebPay = new NebPay()
const intervalQuery = 10000
var result = ""


export const buttonClick = () => {
  var to = "n1mR3kXtvLtXC5ppFRHXZD3YXcRdfoHPSm9";   //the smart contract address of your Dapp
  var value = 0
  var callFunction = "balanceOf" //the function name to be called
  var callArgs =  '[]'  //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
  var options = {
    // callback: {payUrl: "http://127.0.0.1:8685/v1/user/call" },
    goods: {        //commodity description
      name: "test"
    },
    listener: stringifyResponse,
    debug: true
  }


  //Send transaction (here is smart contract call)
    nebPay.simulateCall(to, value, callFunction, callArgs, options);

  //Set a periodically query
  // let intervalQuery = setInterval(function() {
  //   funcIntervalQuery(serialNumber);
  // }, 10000); //it's recommended that the query frequency is between 10-15s.
}

function stringifyResponse(resp) {
  console.log(JSON.stringify(resp));
  console.log(resp);
  result = JSON.parse(resp.result)
  console.log(result.balance);
}

const funcIntervalQuery = (serialNumber) => {
  nebPay.queryPayInfo(serialNumber)   //search transaction result from server (result upload to server by app)
  .then(function (resp) {
      //resp is a JSON string
    var respObject = JSON.parse(resp)
    console.log("respObject>>>>", respObject);
    if(respObject.code === 1){
      //The transaction is successful
      clearInterval(intervalQuery)    //stop the periodically query
    }
  })
  .catch(function (err) {
    console.log("error", err);
  });
}
