let makeCapitalized = str => {
     let capitalized = str.split(' ').map(word => word[0].toUpperCase()+word.substr(1))
     return capitalized.join(' ');
}

module.exports = makeCapitalized;