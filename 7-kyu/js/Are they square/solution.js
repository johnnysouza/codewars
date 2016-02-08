var isSquare = function(arr){
	var ret = (!arr.length) ? undefined : arr.every(isSquareNumber);
	document.write(ret);
};

function isSquareNumber(num) {
	return (Math.sqrt(num) % 1) == 0;
}