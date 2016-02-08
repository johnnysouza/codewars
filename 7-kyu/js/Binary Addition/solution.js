function addBinary(a,b){
  var num = a + b;
  var binArray = [];
  while (num > 0) {
	binArray.push(num % 2);
    num = Math.floor(num / 2);
  }
  var numBin = "";
  while (binArray.length > 0) {
    numBin += binArray.pop();
  }
  document.write(numBin);
}