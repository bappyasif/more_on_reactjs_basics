let orderTotal = require("../test_codes/orderTotalReturnsPromise");

it("calls vatLayer api correctly", () => {
  // using jest mock function
  let mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      data: {
        standard_rate: 19,
      },
    })
  );

  return orderTotal(mockFetch, {
    country: "DE",
    items: [{ name: "waffles", price: 20, quantity: 2 }],
  }).then((result) => {
    // test case
    expect(result).toBe(20 * 2 * 1.19);
    // test case
    expect(mockFetch).toBeCalledWith(
      "http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=DE"
    );
  });
});

// it('if contry code is specified')

it("quantity Async", () => {
  orderTotal(null, {
    items: [{ name: "candy", price: 2, quantity: 3 }],
  }).then((result) => expect(result).toBe(6));
});

it("quantity not specified Async", () => {
  orderTotal(null, {
    items: [{ name: "candy", price: 3 }],
  }).then((result) => expect(result).toBe(3));
});

it("Async example 1", () => {
  orderTotal(null, {
    items: [
      { name: "food", price: 8, quantity: 1 },
      { name: "cage", price: 800, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(808));
});

it("Async example 2", () => {
  orderTotal(null, {
    items: [
      { name: "dragon", price: 20, quantity: 1 },
      { name: "chewtoy", price: 40, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(60));
});

// it("calls vatLayer api correctly", () => {
//   // example mock fetch function
//   let fakeFetch = (url) => {
//     // test case
//     expect(url).toBe(
//       "http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=DE"
//     );

//     // so that it matches actual api call and resolve that promise retunred from that call, but later on we tested it from vatAsync file confirming results for that
//     return Promise.resolve({
//       data: {
//         standard_rate: 19,
//       },
//     });
//   };

//   // using jest mock function
//   let mockFetch = jest.fn().mockReturnValue(Promise.resolve({
//     data: {
//       standard_rate: 19,
//     },
//   }))

//   // return orderTotal(fakeFetch, {
//     return orderTotal(mockFetch, {
//     country: "DE",
//     items: [{ name: "waffles", price: 20, quantity: 2 }],
//   }).then((result) => {
//     // test case
//     expect(result).toBe(20*2*1.19);
//     // test case
//     expect(mockFetch).toBeCalledWith('http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=DE')
//   });
// });

// let emptyFunction = () => {};

// it("calls vatLayer api correctly", () => {
//   // let isFakeFetchCalled = false;
//   // example mock fetch function
//   let fakeFetch = (url) => {
//     expect(url).toBe(
//       "http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=DE"
//     );
//     // isFakeFetchCalled = true;
//     // so that it matches actual api call and resolve that promise retunred from that call, but later on we tested it from vatAsync file confirming results for that
//     return Promise.resolve({
//       data: {
//         standard_rate: 19,
//       },
//     });
//   };
//   return orderTotal(fakeFetch, {
//     country: "DE",
//     items: [{ name: "waffles", price: 20, quantity: 2 }],
//   }).then((result) => {
//     expect(result).toBe(20*2*1.19)
//     // expect(isFakeFetchCalled).toBe(true)
//   });
// });

// it("Async example 2", () => {
//   orderTotal(emptyFunction, {
//     items: [
//       { name: "dragon", price: 20, quantity: 1 },
//       { name: "chewtoy", price: 40, quantity: 1 },
//     ],
//   }).then((result) => expect(result).toBe(60));
// });

// it.only('calls vatLayer api correctly', () => {
//   let isFakeFetchCalled = false;
//   // example mock fetch function
//   let fakeFetch = url => {
//     expect(url).toBe('http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=DE')
//     isFakeFetchCalled = true;
//   }
//   orderTotal(fakeFetch, {
//     country: 'DE',
//     items: [{ name: "candy", price: 2, quantity: 3 }],
//   }).then(result => expect(isFakeFetchCalled).toBe(true))
// })

// it('calls vatLayer api if contry code is specified', () => {
//   let isFakeFetchCalled = false;
//   let fakeFetch = url => {
//     isFakeFetchCalled = true;
//   }
//   orderTotal(fakeFetch, {
//     country: 'DE',
//     items: [{ name: "candy", price: 2, quantity: 3 }],
//   }).then(result => expect(isFakeFetchCalled).toBe(true))
// })

// it("quantity Async", () => {
//     orderTotal({
//         items: [{ name: "candy", price: 2, quantity: 3 }],
//       }).then(result => expect(result).toBe(6))
// });

// it("quantity not specified Async", () => {
//     orderTotal({
//         items: [{ name: "candy", price: 3 }],
//       }).then(result => expect(result).toBe(3));
// });

// it("Async example 1", () => {
//     orderTotal({
//         items: [
//           { name: "food", price: 8, quantity: 1 },
//           { name: "cage", price: 800, quantity: 1 },
//         ],
//       }).then(result=>expect(result).toBe(808))
// });

// it("Async example 2", () => {
//     orderTotal({
//         items: [
//           { name: "dragon", price: 20, quantity: 1 },
//           { name: "chewtoy", price: 40, quantity: 1 },
//         ],
//       }).then(result=>expect(result).toBe(60));
// });
