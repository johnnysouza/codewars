function pipeFix(numbers){
  var firstVal = numbers[0];
  var maxVal = numbers[numbers.length - 1];
  var newArray = [];
  var i = 0;
  for (i = 0; firstVal <= maxVal; i++, firstVal++) {
      newArray.push(firstVal);
  }
  document.write(newArray);
}