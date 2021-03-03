/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y 
el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos
*/
function mostrar()
{
	let tipo;
    let precio;
    let cantidad;
    let categoría;
    let fabricante;

	let promedioAlcohol;
    let promedioIAC;
    let promedioQUAT;

    let contAlcohol = 0;
    let acumAlcohol = 0;
    let contIAC = 0;
    let acumIAC = 0;
    let contQUAT = 0;
    let acumQUAT = 0;

	let acumDesinfectante = 0;
	let acumBactericida = 0;
	let acumDetergente = 0;

	let categoriaMasCantidad;
	let contadorDetergentePrecio = 0;
	let flagPrecio = 1;
	let fabricanteMasCaro;
	let categoriaMasCara;
	let precioMasCaro;

	for(i = 0;i<5;i++){
	
		tipo = prompt(`Ingrese tipo de producto : ALCOHOL/IAC/QUAT `);
        while((!isNaN(tipo)) || tipo != "ALCOHOL" && tipo!= "IAC" && tipo!= "QUAT"){
           tipo = prompt(`Error. Ingrese: ALCOHOL/IAC/QUAT `);
        }  
    
        precio = parseFloat(prompt("Ingrese el precio $(100-300):"));
        while(precio<100 || precio>300 || isNaN(precio)){
            precio = parseFloat(prompt("Error. Ingrese el precio entre $100 y $300"));
        } 

        cantidad = parseInt(prompt("Ingrese la cantidad deseada (hasta 1000 unidades):"));
        while(cantidad<1 || cantidad>1000 || isNaN(cantidad)){
            cantidad = parseInt(prompt("Error.Ingrese la cantidad deseada (hasta 1000 unidades)"));
        } 
        
        categoría = prompt(`Ingrese la categoría : desinfectante/bactericida/detergente `);
        while((!isNaN(categoría)) ||  categoría!= "desinfectante" && categoría != "bactericida" && categoría!= "detergente"){
          categoría = prompt(`Error. Ingrese la categoría : desinfectante/bactericida/detergente`);
        } 

        fabricante = prompt("Ingrese el fabricante:");
    	while(!isNaN(fabricante)){
			fabricante = prompt("Error. Ingrese el fabricante:");
        }
	
		switch(tipo){
            case "ALCOHOL":
                contAlcohol++;
                acumAlcohol += cantidad;
            break;
            case "IAC":
                contIAC++;
                acumIAC += cantidad;
            break;
            case "QUAT":
                contQUAT++;
                acumQUAT += cantidad;
            break;
        }
	
		switch (categoría){
            case "desinfectante":
                acumDesinfectante += cantidad;
                break;
            case "bactericida":
                acumBactericida += cantidad;
                break;
            case "detergente":
                acumDetergente += cantidad;
				if(precio <= 200){
					contadorDetergentePrecio++;
                break;
        	}
		}
		
		if (flagPrecio || precio > precioMasCaro){
            precioMasCaro = precio;
            fabricanteMasCaro = fabricante;
            categoriaMasCara = categoría;
            flagPrecio = 0;
        }

		
	}
		
		//a) El promedio de cantidad por tipo de producto
		if(contAlcohol != 0){
			promedioAlcohol = acumAlcohol / contAlcohol;
		   console.log(`El promedio de Alcohol es: ${promedioAlcohol} unidades`) 
		} else{
			console.log(`No se registró la compra de alcohol.`) 
		}
	
		if(contIAC != 0){
			promedioIAC = acumIAC / contIAC;
			console.log(`El promedio de IAC es: ${promedioIAC} unidades`) 
		} else{
			console.log(`No se registró la compra de IAC.`) 
		}
		
		if(contQUAT != 0){
			promedioQUAT = acumQUAT / contQUAT;
			console.log(`El promedio de QUAT es: ${promedioQUAT} unidades`) 
		} else{
			console.log(`No se registró la compra de QUAT.`) 
		}
	
		//b) La categoria con mas cantidad de unidades en total de la compra

		if( acumDesinfectante > acumBactericida && acumDesinfectante > acumDetergente){
			categoriaMasCantidad = "desinfectante";
		}else if(acumBactericida >= acumDesinfectante && acumBactericida > acumDetergente){
			categoriaMasCantidad = "bactericida";
		}else{
		  categoriaMasCantidad = "detergente";
		}
	
		console.log(`La categoría con más cantidad de unidades en total de la compra es: ${categoriaMasCantidad}`);


		//c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total

		if (contadorDetergentePrecio != 0){
			console.log(`Se compraron en total: ${contadorDetergentePrecio} unidades de detergente a precio menor a 200`);
		}else{
			console.log(`No compraron unidades de detergente con precios menor a $200`);
		}

		//d) el fabricante y Categoria del más caro de los productos

		console.log(`el fabricante y la categoría del más caro de los productos: ${fabricanteMasCaro} y ${categoriaMasCara}`);



}

