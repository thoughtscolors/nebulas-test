var NebPay = require("nebpay");
var nebPay = new NebPay();
var serialNumber; //transaction serial number
var intervalQuery; //periodically query tx results

//initiate the transaction with a button click, here is an example of calling a smart contract


export function makeAWish(name, wish) {
    var to = "n1yhXbxnVhQNeV8HMKyh9oLwKLwor2wupxZ";   //the smart contract address of your Dapp
    var value = ".0000001";
    var callFunction = "makeAWish" //the function name to be called
    var callArgs =  `["${name}", "${wish}"]` //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
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

export function getWishCount() {
    var to = "n1yhXbxnVhQNeV8HMKyh9oLwKLwor2wupxZ";   //the smart contract address of your Dapp
    var value = "";
    var callFunction = "getWishCount" //the function name to be called
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

export const getWishes1 = async (count) => {
    var to = "n1yhXbxnVhQNeV8HMKyh9oLwKLwor2wupxZ";   //the smart contract address of your Dapp
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

export const getWishingWellBalance = async () => {
    var to = "n1yhXbxnVhQNeV8HMKyh9oLwKLwor2wupxZ";   //the smart contract address of your Dapp
    var value = ""
    var callFunction = "getWishingWellBalance" //the function name to be called
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

export const grantWish = async () => {
  var to = "n1yhXbxnVhQNeV8HMKyh9oLwKLwor2wupxZ"
  var value = ""
  var callFunction = "grantWish" //the function name to be called
  var callArgs; //the parameter, it's format JSON string of parameter arrays, such as'["arg"]','["arg1","arg2]'
  var options = {
      goods: {        //commodity description
          name: "example"
      },
      listener: parseResponse
  }

  //Send transaction (here is smart contract call)
  nebPay.simulateCall(to, value, callFunction, callArgs, options);
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
