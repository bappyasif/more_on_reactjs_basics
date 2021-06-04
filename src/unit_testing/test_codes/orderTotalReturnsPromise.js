let orderTotal = (fetch, order) => {
  let isolatedOrder = (order) =>
    order.items.reduce(
      (prev, curr) => curr.price * (curr.quantity || 1) + prev,
      0
    );
  if (order.country) {
    return fetch(
      `http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=` +
        order.country
    )
      .then((data) => data.data.standard_rate)
      .then((vatValue) => isolatedOrder(order) * (1 + vatValue / 100));
  }

  return Promise.resolve(isolatedOrder(order));
};

module.exports = orderTotal;

// let orderTotal = (fetch, order) => {
//   if (order.country) {
//     return fetch(
//       `http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=` +
//         order.country
//     )
//       .then((data) => data.data.standard_rate)
//       .then(
//         (vatValue) =>
//           order.items.reduce(
//             (prev, curr) => curr.price * (curr.quantity || 1) + prev,
//             0
//           ) *
//           (1 + vatValue / 100)
//       );
//   }

//   return Promise.resolve(
//     order.items.reduce(
//       (prev, curr) => curr.price * (curr.quantity || 1) + prev,
//       0
//     )
//   );
// };

// let orderTotal = (fetch, order) => {
//     if (order.country) {
//       return fetch(
//         `http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=` +
//           order.country
//       )
//         .then((data) => data.data.standard_rate)
//         .then(
//           (vatValue) =>
//             order.items.reduce(
//               (prev, curr) => curr.price * (curr.quantity || 1) + prev,
//               0
//             ) *
//             (1 + vatValue / 100)
//         );
//     }

//     return Promise.resolve(
//       order.items.reduce(
//         (prev, curr) => curr.price * (curr.quantity || 1) + prev,
//         0
//       )
//     );
//   };

// let orderTotal = (fetch, order) => {
//     fetch(
//       `http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=` +
//         order.country
//     )
//       .then((data) => data.data.standard_rate)
//       .then(
//         (vatValue) =>
//           order.items.reduce(
//             (prev, curr) => curr.price * (curr.quantity || 1) + prev,
//             0
//           ) * vatValue
//       );
//     //   fetch(
//     //     `http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=`+order.country
//     //   );
//     // fetch(
//     //     "http://apilayer.net/api/rate?access_key=39448f83bc3ca2b6a5aef5150723cbad&country_code=DE"
//     // );
//     // fetch();  // mock function
//     return Promise.resolve(
//       order.items.reduce(
//         (prev, curr) => curr.price * (curr.quantity || 1) + prev,
//         0
//       )
//     );
//   };

// let orderTotal = (order) =>
//   Promise.resolve(
//     order.items.reduce(
//       (prev, curr) => curr.price * (curr.quantity || 1) + prev,
//       0
//     )
//   );
