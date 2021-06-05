let reverse = str => {
    let reversed = str.split('').reverse();
    return reversed.join('');
}

let reverseScentence = str => {
    let reversed = str.split(' ').reverse();
    return reversed.join(' ');
}

module.exports = reverse;