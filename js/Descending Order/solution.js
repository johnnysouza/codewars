function descendingOrder(n){
  if (n >= 0) { //Apenas se o número for positivo
	var digitis = n.toString().split("");
    document.write(parseInt(digitis.sort(function(a, b) {return a < b;}).join(''), 10));
	return;
  }
  document.write(n); //Numero negativo, retorna ele mesmo...
}