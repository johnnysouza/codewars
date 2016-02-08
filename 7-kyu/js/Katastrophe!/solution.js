var magnitude = 1;
var schokwave = 0;

function strongEnough(earthquake, age) {
	magnitude = 1;
	if (earthquake) {
		earthquake.forEach(earthquakeMag); //Poderia ter feito com a função reduce de array
		if (magnitude > expDecay(age)) {
			return "Needs Reinforcement!";
		}
		return "Safe!";
	}
	return "Safe!";
}

function expDecay(age) {
	return 1000 * (Math.pow(0.99, age));
}

function earthquakeMag(elem, index) {
	schokwave = 0;
	if (elem) {
		elem.forEach(schokwaveSom); //Poderia ter feito com a função reduce de array
		magnitude *= schokwave;
	}
}

function schokwaveSom(elem, index) {
	schokwave += elem;
}