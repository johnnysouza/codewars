function nextPal(val) {
  while (true) {
    val++;
    var digitis = val.toString().split('');
    var reverseDigitis = val.toString().split('').reverse();
    if (equalsArray(digitis, reverseDigitis)) {
       document.write(val);
	   return;
    }
  }
}

function equalsArray(array1, array2) {
	if (array1.length != array2.length) {
		return false;
	}
	return array1.every(function(element, index) {return element === array2[index];});
}