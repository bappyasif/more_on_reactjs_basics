let axios = require("axios");
let orderTotal = require('../test_codes/orderTotalReturnsPromise');
// through this call we're able to check actually its matching with our test toBe value for that assertion
let result = orderTotal(axios, {
    country: "DE",
    items: [{ name: "waffles", price: 20, quantity: 2 }],
  })
  
console.log(Promise.resolve(result))
result.then(data=>console.log(data));


// axios(
//   "http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=DE"
// ).then((data) => console.log(data.data.standard_rate, data.data));


// // let fetch = require("node");
// let axios = require("axios");

// axios
// (
//   "http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=DE"
// )
// //   .then((res) => res.json())
//   .then((data) => console.log(data.data));

// // let result =
