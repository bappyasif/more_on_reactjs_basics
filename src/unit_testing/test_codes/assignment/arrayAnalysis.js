let aa = arr => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let length = arr.length;
    let average = arr.reduce((a,c)=>a+c)/length;
    
    return {average, min, max, length}
    // return {average:average, min:min, max:max, length:length}
}

module.exports = aa;

// console.log(aa([1,8,3,4,2,6]))

/**
 * 
 * 
 let aa = arr => {
    // let min = Math.min([...arr]);
    // let max = Math.max([...arr]);
    console.log(Math.min([...arr]), [...arr], Math.min(...arr))
    let min = Math.min(arr);
    let max = Math.max([...arr]);
    let length = arr.length;
    let average = arr.reduce((a,c)=>a+c)/length;
    // console.log(average, min, max, length)
    // return [average, min, max, length]
    return {average, min, max, length}
    // return {average:average, min:min, max:max, length:length}
}
 */