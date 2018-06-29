import NebPay from 'nebpay'
import {BigNumber} from 'bignumber';
const nebPay = new NebPay()
let intervalQuery;
let serialNumber;

const funcIntervalQuery = () => {
  nebPay.queryPayInfo(serialNumber)   //search transaction result from server (result upload to server by app)
  .then(function (resp) {
    console.log("tx result: " + resp)   //resp is a JSON string
    var respObject = JSON.parse(resp)
    if(respObject.code === 0){
      //The transaction is successful

      clearInterval(intervalQuery)    //stop the periodically query
    }
  })
  .catch(function (err) {
    console.log(err);
  });
}
// const serialNumber=""
export const onButtonClick = () => {
  var to = "n1yqJ6U1uLmc2XhYyPV2ieFLGpFhUBWRDZo";   //the smart contract address of your Dapp
  var value = 0
  var callFunction = "balanceOf" //the function name to be called
  var callArgs =  '[]'  //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
  var options = {
    goods: {        //commodity description
      name: "test"
    },
    listener: parseResponse,
    }


  //Send transaction (here is smart contract call)
  nebPay.simulateCall(to, value, callFunction, callArgs, options);

  // //Set a periodically query
  // let intervalQuery = setInterval(function() {
  //   funcIntervalQuery();
  // }, 30000); //it's recommended that the query frequency is between 10-15s.
}

const parseResponse = async (resp) => {
  if (!resp) {
    console.log("waiting for response....");
  }
  const result = await JSON.parse(resp.result)
  console.log("wish", result.wish);
}
