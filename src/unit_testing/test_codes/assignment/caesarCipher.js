let cc = (str, shiftBy) => {
  let tokenizedString = str.split(" ");
  let cpipheredString = tokenizedString.map((word) => {
    let wordenized = word.split("");
    let ciphered = wordenized.map((ch) => makeCipher(ch, shiftBy));
    return ciphered.join('');
  });
  return cpipheredString.join(" ");
};

let makeCipher = (c, k) => {
  let charCode = c.charCodeAt(0);

  if (charCode > 64 && charCode <= 90) {
    let upperCaseBoundsCheck = charCode + k > 90;
    if (upperCaseBoundsCheck) {
      return String.fromCharCode(64 + k);
    } 

  } else if (charCode > 96 && charCode <= 122) {
    let lowerCaseBoundsCheck = charCode + k > 122;
    if (lowerCaseBoundsCheck) {
      return String.fromCharCode(96 + k);
    } 
  } 
    return String.fromCharCode(charCode + k);
};


module.exports = cc;

// console.log(cc("aZ zA", 13));
// console.log(cc("a brand new day", 13));

/**
 * 
 * 
 let makeCipher = (c, k) => {
  let charCode = c.charCodeAt(0);

  if (charCode > 64 && charCode <= 90) {
    let upperCaseBoundsCheck = charCode + k > 90;
    if (upperCaseBoundsCheck) {
      return String.fromCharCode(64 + k);
    } 

  } else if (charCode > 96 && charCode <= 122) {
    let lowerCaseBoundsCheck = charCode + k > 122;
    if (lowerCaseBoundsCheck) {
      return String.fromCharCode(96 + k);
    } 
  } 
    return String.fromCharCode(charCode + k);
};
 * 
 * 
 let makeCipher = (c, k) => {
  let charCode = c.charCodeAt(0);
  //    let lowerCaseBoundsCheck = charCode + k > 122;
  //    let upperCaseBoundsCheck = charCode + k > 90;
  let ccCode = (charCode + k) % 26;
//   console.log(c, ccCode, charCode, lowerCaseBoundsCheck, upperCaseBoundsCheck);
// console.log(c, charCode);

  if (charCode > 64 && charCode <= 90) {
    let upperCaseBoundsCheck = charCode + k > 90;
    if (upperCaseBoundsCheck) {
        // console.log("upper if", c, charCode);
    //   ccCode = (charCode + k) % 26;
      return String.fromCharCode(64 + k);
    } else {
        // console.log("upper else", c, charCode, k, String.fromCharCode(charCode + k));
      return String.fromCharCode(charCode + k);
    }
  } else if (charCode > 96 && charCode <= 122) {
    let lowerCaseBoundsCheck = charCode + k > 122;
    if (lowerCaseBoundsCheck) {
    //   ccCode = (charCode + k) % 26;
    // ccCode = (charCode) % 26;
      console.log("lower if", c, charCode, ccCode, String.fromCharCode(96 + k));
      return String.fromCharCode(96 + k);
    //   return String.fromCharCode(96 + k);
    } else {
        console.log("lower else", c, charCode);
      return String.fromCharCode(charCode + k);
    }
  }
};
 * 
 * 
 let makeCipher = (c, k) => {
       let charCode = c.charCodeAt(0);
    // let charCode = String.fromCodePoint(c);
       let ccCode = (charCode + k) % 26;
       console.log(ccCode, charCode);

       if(charCode > 64 && charCode <= 90) {
           return String.fromCharCode(64 + ccCode);
       } else if(charCode > 96 && charCode <= 122) {
           return String.fromCharCode(96 + ccCode);
       }
}
 */
