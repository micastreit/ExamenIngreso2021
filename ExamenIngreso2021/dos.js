function mostrar() {
  let nombre;
  let cursada;
  let cantmaterias;
  let sexo;
  let promedionota;
  let edad;
  let seguir;
  let flag = 1;
  let promediomax;
  let nombreprommax;
  let flagedad = 1;
  let edadnim;
  let nombremin;
  let contmasc = 0;
  let acumnotamasc = 0;
  let contfem = 0;
  let acumnotafem = 0;
  let contnobi = 0;
  let acumnotanobi = 0;
  let promediofem;
  let promediomasc;
  let promedionobi;
  let edadmasmat;
  let nombremasmat;
  let matmaxima;
  let flagmat = 1;

  do {
    nombre = prompt('ingrese su nombre');
    cursada = ('ingrese el tipo de cursada (libre, presencial, remota)');
    while (cursada != 'libre' && cursada != 'presencial' && cursada != 'remota') {
      cursada = ('dato invalido. ingrese el tipo de cursada (libre, presencial, remota)');
    }
    cantmaterias = parseInt(prompt('ingrese la cantidade de materias (entre 1 y 8)'));
    while (cantmaterias < 1 && cantmaterias > 8 && isNaN(cantmaterias)) {
      cantmaterias = parseInt(prompt('dato invalido. ingrese la cantidad de de materias (entre 1 y 8)'));
    }
    sexo = prompt('ingrese su sexo utilizando masculino, femenino, no binario.');
    while (sexo != 'masculino' && sexo != 'femenino' && sexo != 'no binario') {
      sexo = prompt('dato invalido. ingrese su sexo utilizando masculino, femenino, no binario.');
    }
    promedionota = parseInt(prompt('ingrese el promedio de nota (entre 0 y 10)'));
    while (promedionota) {
      promedionota = parseInt(prompt('dato invalido. ingrese el promedio de nota (entre 0 y 10)'));
    }
    edad = parseInt(prompt('ingrese su edad.'));
    while (edad < 0 && isNaN(edad)) {
      edad = parseInt(prompt('dato invalido. ingrese su edad.'));
    }

    if (sexo != 'masculino') {
      if (flag || promedionota > promediomax) {
        promediomax = promedionota;
        nombreprommax = nombre;
        flag = 0;
      }
    }

    if (cursada == 'libre') {
      if (flagedad || edad < edadmin) {
        edadmin = edad;
        nombremin = nombre;
        flagedad = 0;
      }
    }
    if (cursada != 'remota') {
      if (flagmat || cantmaterias > matmaxima) {
        edadmasmat = edad;
        nombremasmat = nombre;
        flagmat = 0;
      }
    }


    switch (sexo) {
      case 'masculino':
        contmasc++;
        acumnotamasc += promedionota;
        break;

      case 'femenino':
        contfem++;
        acumnotafem += promedionota;
        break;

      case 'no binario':
        contnobi++;
        acumnotnobi += promedionota;
        break;


    }


    seguir = prompt('desea ingresar otro alumno?');
  } while (seguir == 'si');

  promediofem = acumnotafem / contfem;
  promediomasc = acumnotamasc / contmasc;
  promedionobi = acumnotanobi / contnobi;

  if (flag == 0) {
    console.log('a) El nombre del mejor promedio que no sea masculino' + nombreprommax);

  } else {
    console.log('no hay mejor promedio que no sea masculino.')
  }

  if (flagedad == 0) {
    console.log('b) El nombre del mas joven de los alumnos entre los que la dan libre' + nombremin);

  } else {
    console.log('no hay nadie que curse libre.')
  }

  console.log('promedio femenino' + promediofem + 'promedio masculino' + promediomasc + 'promedio no binario' + promedionobi);

  if (flagmat != 0) {

    console.log('edad: ' + edadmasmat + ' y nombre ' + nombremasmat + ' del que cursa mas materias de forma no remota');
  } else {
    console.log('no hay nadie que no curse de manera remota.')
  }

}
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una
 division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota */