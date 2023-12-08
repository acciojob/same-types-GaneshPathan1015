function isSameType(value1, value2) {
  //your js code here
	let typeof1 = (typeof value1);
	let typeof2 = (typeof value2);
	let ans
	 return ans = (typeof1===typeof2)?true:false;
	console.log(ans);
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
