let orderTotal = require("../test_codes/orderTotal");
// it('works', ()=>{})
// code syntax, consists assertion and expectations to be passed or not
// it('works', ()=>{
//     expect(1).toBe(1)
// })
// console.log(typeof orderTotal);

it("quantity", () => {
  expect(
    orderTotal({
      items: [{ name: "candy", price: 2, quantity: 3 }],
    })
  ).toBe(6);
});

it("quantity not specified", () => {
  expect(
    orderTotal({
      items: [{ name: "candy", price: 3 }],
    })
  ).toBe(3);
});

it("example 1", () => {
  expect(
    orderTotal({
      items: [
        { name: "food", price: 8, quantity: 1 },
        { name: "cage", price: 800, quantity: 1 },
      ],
    })
  ).toBe(808);
});

it("example 2", () => {
  expect(
    orderTotal({
      items: [
        { name: "dragon", price: 20, quantity: 1 },
        { name: "chewtoy", price: 40, quantity: 1 },
      ],
    })
  ).toBe(60);
});
