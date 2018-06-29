import NebPay from 'nebpay'
import { BigNumber } from 'bignumber';
const nebPay = new NebPay()
var intervalQuery;


export const buttonClick = (user, wish) => {
  var to = "n21xFv35rLRsVHQsNRGsrLFAuojmVX6jrLf";   //the smart contract address of your Dapp
  var value = ".0000001"
  var callFunction = "save" //the function name to be called
  var callArgs =  `["${user}", "${wish}"]` //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
  var options = {
    callback: "http://127.0.0.1:8685/v1/user/call",
    goods: {        //commodity description
      name: "test"
    },
  }


  //Send transaction (here is smart contract call)
  let serialNumber = nebPay.call(to, value, callFunction, callArgs, options);

  // Set a periodically query
  let intervalQuery = setInterval(function() {
    funcIntervalQuery(serialNumber);
  }, 10000); //it's recommended that the query frequency is between 10-15s.
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
