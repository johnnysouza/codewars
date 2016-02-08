function travel(r, zipcode) {
	var listAdress = r.split(",");
	var header = zipcode + ":";
	var footer = "/";
	if (zipcode) {
		var adressWithZip = listAdress.filter(containsZipcode, zipcode);
		if (adressWithZip.length > 0) {
			var streets = adressWithZip.reduce(reduceStreet, header);
			streets = streets.substr(0, streets.length - 1); //Remove ultima virgula
			var numbers = adressWithZip.reduce(reduceNum, footer);
			numbers = numbers.substr(0, numbers.length - 1); //Remove ultima virgula
			return streets.concat(numbers);
		}
	}
	return header.concat(footer);
}

function containsZipcode(str) {
	var index = str.lastIndexOf(this);
	return (index != -1) && (index + this.length == str.length);
}

function reduceStreet(str, adress) {
	var splitAdress = adress.split(" ");
	var zipcode = " " + splitAdress[splitAdress.length - 2] + " " + splitAdress[splitAdress.length - 1];
	var street = adress.replace(splitAdress[0] + " ", "").replace(zipcode, "").concat(",");
	return str.concat(street);
}

function reduceNum(str, adress) {
	var splitAdress = adress.split(" ");
	var num = splitAdress[0].concat(",");
	return str.concat(num);
}