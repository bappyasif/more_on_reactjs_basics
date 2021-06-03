// let orderTotal = order => order.items.reduce((prev,curr) => ((curr.price * curr.quantity) || 1) + prev, 0);
let orderTotal = order => order.items.reduce((prev,curr) => (curr.price * (curr.quantity || 1)) + prev, 0);
module.exports = orderTotal;

// export let orderTotal = order => order.items.reduce((prev,curr) => ((curr.price * curr.quantity) || 1) + prev, 0);