let orderTotal = order => order.items.reduce((prev,curr) => ((curr.price * curr.quantity) || 1) + prev, 0);

if(orderTotal({
    items: [
        {'name': 'candy', price: 2, quantity: 3}
    ]
}) !== 6) throw new Error('check failed: quantity')

if(orderTotal({
    items: [
        {'name': 'candy', price: 3}
    ]
}) !== 3) throw new Error('check failed: no quantity specified')

if(orderTotal({
    items: [
        { name: 'food', price: 8, quantity: 1 },
        { name: 'cage', price: 800, quantity: 1 }
    ]
}) !== 808) throw new Error('check failed: example 1')

if(orderTotal({
    items: [
        {name: 'dragon', price: 20, quantity: 1},
        {name: 'chewtoy', price: 40, quantity: 1}
    ]
}) !== 60) throw new Error('check failed: example 2')