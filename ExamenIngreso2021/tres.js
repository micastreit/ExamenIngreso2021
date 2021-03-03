function mostrar() {
	let nombre;
	let estcivil;
	let edad;
	let temperatura;
	let sexo;
	let constpasaje = 600;
	let contviejovuido = 0;
	let seguir;
	let nombreMSJ;
	let edadMSJ;
	let flagjoven = 1;
	nombre = prompt('ingrese su nombre');
	estcivil = prompt('ingrese su estado civil(soltero, casado, vuido)');
	edad = parseInt(prompt('ingrese su edad'));
	while (edad < 17) {
		edad = parseInt(prompt('dato invalido.ingrese su edad'));
	}
	temperatura = parseFloat(prompt('ingrese su temperatura corporal'));
	while (temperatura < 35 || temperatura > 42 || isNaN(temperatura)) {
		temperatura = parseFloat(prompt('dato invalido. ingrese su temperatura corporal'));
	}
	sexo = prompt('ingrese su sexo con f o m ');
	while (sexo != 'm' && sexo != 'f') {
		sexo = prompt('ingrese su sexo con f o m ');
	}

	if (estcivil == 'vuido' && edad > 60) {
		contviejovuido++;
	}

	if (sexo == 'femenino') {
		if (flagjoven || edad < edadMSJ) {
			edadMSJ = edad;
			nombreMSJ = nombre;
			flagjoven = 0;
		}
	}




	seguir = prompt('desea ingresar otro dato?');
} while (seguir == 'si');


console.log('cantidad de vuidos mayores de 60' + contviejovuido);
console.log('la mujer soletera mas joven tiene ' + edadMSJ + 'y se llama ' + nombreMSJ);


}
/*debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
 de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un
 descuento del 25%, que solo mostramos
