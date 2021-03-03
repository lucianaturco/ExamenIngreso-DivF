/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata 
con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).

NOTA:el precio por pasajero es de $600.

Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer con PAMI mas joven.(MUJER QUE TENGA PAMI MAS JOVEN )
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, 
el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()
{
	let nombre;
    let obraSocial;
    let edad;
    let temperatura;
    let sexo;
    let precioPorPasajero = 600;
    let seguir;

	let contadorPAMIMayores = 0;
	let flagPAMI = 1;
	let edadMasJoven;
	let nombreMasJoven;
	let temperaturaMasJoven;
	let contadorPasajerosTotales = 0;
	let viajeTotalSD;
	let contadorPAMI = 0;
	let porcentajePAMI;
	let viajeConDescuento;
	
	do{


		nombre = prompt("Ingrese el nombre:");
    		while(!isNaN(nombre)){
				nombre = prompt("Error. Ingrese el nombre:");
        	}
        obraSocial = prompt("Ingrese la obra social PAMI/OSDE/otras :");
        	while(obraSocial != "PAMI" && obraSocial != "OSDE" && obraSocial != "otras" || !isNaN(obraSocial) ){
            	obraSocial = prompt("Error. Ingrese la obra social PAMI/OSDE/otras :");
        	}
        edad = parseInt(prompt("Ingresar edad: "));
        	while(edad<17 || isNaN(edad)){
            	edad = parseInt(prompt("Error. Ingresar edad: "));
        	}
        temperatura = parseFloat(prompt("Ingrese la temperatura corporal:"));
			while(temperatura < 1 || isNaN(temperatura)){
				temperatura = parseFloat(prompt("Error. Ingrese la temperatura corporal:"));
        	}
        sexo = prompt("Ingrese el sexo f/m:");
			while(sexo !='f' && sexo!= 'm'|| !isNaN(sexo)){
				sexo = prompt("Error. Ingrese el sexo f/m:");
			}


			if(obraSocial == "PAMI" && edad > 60){
                contadorPAMIMayores++;
            }

			if(sexo == 'f' && obraSocial == "PAMI" && (flagPAMI || edad < edadMasJoven)){
				edadMasJoven = edad;
				nombreMasJoven = nombre;
				temperaturaMasJoven = temperatura;
				flagPAMI = 0;
			}

			contadorPasajerosTotales++;

			if(obraSocial == "PAMI"){
				contadorPAMI++;
			}



		seguir = prompt("Quiere añadir otro pasajero?");
	}while(seguir == 's');




	//a) La cantidad de personas con OSDE de mas de 60 años.
	if(contadorPAMIMayores != 0){
		console.log(`Cantidad de personas con OSDE de mas de 60 años: ${contadorViudosMayores}`);
		}else{
			console.log(`no se ingresaron personas con OSDE y con mas de 60 años`);
		}

	//b) el nombre y temperatura de la mujer con PAMI mas joven.(MUJER QUE TENGA PAMI MAS JOVEN )
	
	if (flagPAMI == 0){
		console.log(`la mujer con PAMI mas joven es ${nombreMasJoven} y tiene de temperatura ${temperaturaMasJoven}°C.`);
	}else{
		console.log("no se ingresaron mujeres con PAMI");
	}

	//c) cuanto sale el viaje total sin descuento.
	viajeTotalSD = contadorPasajerosTotales * precioPorPasajero

    console.log(`El viaje total sin descuento cuesta: $${viajeTotalSD}`)
	
	//d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, 
	//el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

	if (contadorPAMI != 0){
		porcentajePAMI = contadorPAMI * 100 / contadorPasajerosTotales;
	}
	
	if (porcentajePAMI > 50){
		viajeConDescuento = viajeTotalSD - (viajeTotalSD * 25 / 100);
	console.log(`El precio final con descuento del 25% es de: ${viajeConDescuento}`);
	} else{
		console.log("No corresponde precio con descuento");
	}



}
