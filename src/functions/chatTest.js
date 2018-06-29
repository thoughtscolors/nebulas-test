var NebPay = require("nebpay");
var nebPay = new NebPay();
var serialNumber; //transaction serial number
var intervalQuery; //periodically query tx results

//initiate the transaction with a button click, here is an example of calling a smart contract
export function newUserTest(user) {
    var to = "n221k8bYq4oevaXhDQFfJa6u56wpUT92Vo6";   //the smart contract address of your Dapp
    var value = ".0000001";
    var callFunction = "newUser" //the function name to be called
    var callArgs =  `["${user}"]` //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
    var options = {
        goods: {        //commodity description
            name: "example"
        },
        listener: parseResponse
    }

    //Send transaction (here is smart contract call)
    nebPay.call(to, value, callFunction, callArgs, options);

    //Set a periodically query
    // intervalQuery = setInterval(function() {
    //     funcIntervalQuery();
    // }, 10000); //it's recommended that the query frequency is between 10-15s.
}

export function msgTest(message) {
    var to = "n221k8bYq4oevaXhDQFfJa6u56wpUT92Vo6";   //the smart contract address of your Dapp
    var value = ".0000001";
    var callFunction = "sendMessage" //the function name to be called
    var callArgs =  `["${message}"]` //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
    var options = {
        goods: {        //commodity description
            name: "example"
        },
        listener: parseResponse
    }

    //Send transaction (here is smart contract call)
    nebPay.call(to, value, callFunction, callArgs, options);

    //Set a periodically query
    // intervalQuery = setInterval(function() {
    //     funcIntervalQuery();
    // }, 10000); //it's recommended that the query frequency is between 10-15s.
}

export function getMessageCount(message) {
    var to = "n221k8bYq4oevaXhDQFfJa6u56wpUT92Vo6";   //the smart contract address of your Dapp
    var value = ".0000001";
    var callFunction = "getMessageCount" //the function name to be called
    var callArgs; //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
    var options = {
        goods: {        //commodity description
            name: "example"
        },
        listener: parseResponse
    }

    //Send transaction (here is smart contract call)
    nebPay.simulateCall(to, value, callFunction, callArgs, options);

    //Set a periodically query
    // intervalQuery = setInterval(function() {
    //     funcIntervalQuery();
    // }, 10000); //it's recommended that the query frequency is between 10-15s.
}

export const getMessages = async (count) => {
    var to = "n221k8bYq4oevaXhDQFfJa6u56wpUT92Vo6";   //the smart contract address of your Dapp
    var value = ".0000001";
    var callFunction = "getMessages" //the function name to be called
    var callArgs; //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
    var options = {
        goods: {        //commodity description
            name: "example"
        },
        listener: parseResponse
    }

    //Send transaction (here is smart contract call)
    const result = await nebPay.simulateCall(to, value, callFunction, callArgs, options);
    console.log("GETMESSAGES RESULT", result);
    return result
    //Set a periodically query
    // intervalQuery = setInterval(function() {
    //     funcIntervalQuery();
    // }, 10000); //it's recommended that the query frequency is between 10-15s.
}

const parseResponse = async (resp) => {
  try {
    if (!resp) {
    console.log("waiting for response....");
  }
  const result = await JSON.parse(resp.result)
  console.log("PARSERESULT>>>", result);
  // return await result
} catch (err) {
  console.log(err);
  return err
}
}
//Query the result of the transaction. queryPayInfo returns a Promise object.
// function funcIntervalQuery() {
//   let options = {
//     callback: "http://127.0.0.1:8685/api/pay/query"
//   }
//     nebPay.queryPayInfo(serialNumber, options)   //search transaction result from server (result upload to server by app)
//         .then(function (resp) {
//             console.log("tx result: " + resp)   //resp is a JSON string
//             var respObject = JSON.parse(resp)
//             if(respObject.code === 0){
//                 //The transaction is successful
//
//                 clearInterval(intervalQuery)    //stop the periodically query
//             }
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }
