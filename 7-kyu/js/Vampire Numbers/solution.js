var vampire_test = function(a, b){
  var mul = a * b;
  var abStr = a.toString();
  abStr += b.toString();
  var mulStr = mul.toString();
  var charAt = 0;
  var meta = abStr.length;
  
  while (abStr.length > 0) {
	vampChar = abStr.charAt(0);
	var vampCharIndex = mulStr.indexOf(vampChar);
	if (vampCharIndex != -1) {
		mulStr = mulStr.substring(0, vampCharIndex).concat(mulStr.substring(vampCharIndex + 1, mulStr.length));
		meta--;
	}
	abStr = abStr.substring(1, abStr.length);
  }
  document.write(meta==0);
}