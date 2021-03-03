
function mostrar() {
	let producto;
	let precio;
	let marca;
	let cantidad;
	let tipoInflamable;
	let promedioI;
	let promedioA;
	let promedioQ;
	let contA = 0;
	let contQ = 0;
	let contI = 0;
	let acumA = 0;
	let acumQ = 0;
	let acumI = 0;
	let acumprecioA = 0;
	let acumprecioI = 0;
	let acumprecioQ = 0;
	let tipoImax;
	let tipoPmax = 0;
	let marcamax;
	let preciomax;
	let flagmax = 1;
	let acumIbarato;
	let acumIG = 0;
	let acumCOM = 0;
	let acumEX = 0;
	let marcabarata;
	let tipoIbarato;

	for (i = 0; i < 5; i++) {

		//el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
		producto = prompt('ingrese el producto(alcohol,iac, quat)');
		while (producto != 'alcohol' && producto != 'iac' && producto != 'quat') {
			producto = prompt('dato invalido. ingrese el producto(alcohol,iac, quat)');
		}
		marca = prompt('ingrese la marca del producto');

		//el precio (validar entre 100 y 300),
		precio = parseFloat(prompt('ingrese el precio del producto'));
		while (!(precio >=100 && precio <= 300)) {
			precio = parseFloat(prompt('dato invalido. ingrese el precio del producto'));
		}
		//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
		cantidad = parseInt(prompt('ingrese la cantidad solicitada'));
		while (cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)) {
			cantidad = parseInt(prompt('dato invalido. ingrese la cantidad solicitada'));
		}
		//el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
		tipoInflamable = prompt('ingrese el tipo de inflamable (ignifugo, combustible, explosivo)');
		while (tipoInflamable != 'ignifugo' && tipoInflamable != 'combustible' && tipoInflamable != 'explosivo') {
			tipoInflamable = prompt('dato invalido. ingrese el tipo de inflamable (ignifugo, combustible, explosivo)');
		}
		switch (producto) {
			case 'alcohol':
				contA++;
				acumA += cantidad;
				acumprecioA += precio;
				break;
			case 'iac':
				contI++;
				acumI += cantidad;
				acumprecioI += precio;
				break;
			case 'quat':
				contQ++;
				acumQ += cantidad;
				acumprecioQ += precio;
				break;
		}

		if (flagmax || precio > preciomax) {
			preciomax = precio;
			tipoPmax = producto;
			marcamax = marca;
			flagmax = 0;
		}
		switch (tipoInflamable) {
			case 'ignifugo':
				acumIG += cantidad;
				break;
			case 'combustible':
				acumCOM += cantidad;
				break;
			case 'explosivo':
				acumEX += cantidad;
				break;
		}

	}
	if (producto == 'iac' && precio >= 200) {
		acumIbarato += cantidad;
	}
	promedioI = acumI / contI;
	promedioA = acumA / contA;
	promedioQ = acumQ / contQ;

	if (acumEX > acumIG && acumEX > acumCOM) {
		tipoImax = 'EXPLOSIVO';
	} else if (acumIG > acumEX && acumIG > acumCOM) {
		tipoImax = 'IGNIFUGO';
	} else if (acumCOM > acumIG && acumCOM > acumEX) {
		tipoImax = 'COMBUSTIBLE';
	}



	console.log('a) El promedio de cantidad por tipo de producto: el promedio de alcohol es ' + promedioA + ' el promedio de iac es ' + promedioI + ' el promedio de quat es ' + promedioQ);
	console.log('b) El tipo de inflamable con más cantidad de unidades en total de la compra' + tipoImax);
	console.log('c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total' + acumIbarato);
	console.log('d) la marca: ' + marcamax + ' y tipo ' + tipoPmax + 'del más caro de los productos');

}
/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */

//switch con producto acum y contar
//marca y tipo mas caro
//----
//if iac barato acum
//promedios
//tipo inf con mas cant



