// function isSameType(value1, value2) {
//   //your js code here
// 	let typeof1 = (typeof value1);
// 	let typeof2 = (typeof value2);
// 	let ans;
// 	 return ans = (typeof1===typeof2)?true:false;
// 	// console.log(ans);
	
// }

// // do not change the code below.
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");
// alert(isSameType(value1, value2));


function isSameType(value1, value2) {
  if (isNan(value1) || isNan(value2)) {
    return isNan(value1) === isNan(value2);
  }
  return toString.call(value1) === toString.call(value2);
}

// function isNan(val) {
//   return val !== val;
// }

// uncoment first
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));



