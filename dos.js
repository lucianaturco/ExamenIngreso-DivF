/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
 los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los que NO trabajan o estan buscando (SOLO ESTUDIANTES)
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

*/

function mostrar() {
  let nombre;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let nota;
  let edad;
  let seguir;

  let flagNota = 1;
  let notaMax;
  let nombreNotaMax;
  let flagEdad = 1;
  let edadMasViejo;
  let nombreMasViejo;
  let contadorBuscando = 0;
  let contadorSoloEstudiante = 0;
  let contadorTrabajando = 0;
  let acumBuscando = 0;
  let acumSoloEstudiante = 0;
  let acumTrabajando = 0;
  let promedioBuscando;
  let promedioSoloEstudiante;
  let promedioTrabajando;
  let FlagMaterias = 1;
  let materiaMin;
  let nombreMinMaterias;
  let edadMinMaterias;


  do {
    
      nombre = prompt("Ingrese el nombre:");
      while(!isNaN(nombre)){
        nombre = prompt("Error. Ingrese el nombre:");
      }
      
      situacionLaboral = prompt(`Ingrese tipo de situacion laboral: buscando/trabajando/solo estudiante `);
      while((!isNaN(situacionLaboral)) ||  situacionLaboral!= "buscando" && situacionLaboral!= "trabajando" && situacionLaboral!= "solo estudiante"){
        situacionLaboral = prompt(`Error. Ingrese : buscando/trabajando/solo estudiante `);
      }  

      cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias: "));
      while( cantidadMaterias<1 || cantidadMaterias > 8 || isNaN(cantidadMaterias)){
          cantidadMaterias = parseInt(prompt("Error.Ingrese la cantidad de materias: "));
      }
      
     sexo = prompt(`Ingrese sexo: femenino/masculino/no binario `);
      while((!isNaN(sexo)) ||  sexo!= "femenino" && sexo!= "masculino" && sexo!= "no binario"){
          sexo = prompt(`Error. Ingrese sexo: femenino/masculino/no binario`);
      }  
      
      nota = parseInt(prompt("Ingrese la nota :"));
      while( nota < 0 ||   nota > 10   || isNaN(nota)){
          nota = parseInt(prompt("Error.Ingrese "));
      }  
   
      edad = parseInt(prompt("Ingresar edad: "));
      while(edad<1 || isNaN(edad)){
          edad = parseInt(prompt("Error. Ingresar edad: "));
      }
      

      if(situacionLaboral == "solo estudiante"  && (flagNota ||  nota > notaMax)){
        notaMax = nota
        nombreNotaMax = nombre;
        flagNota = 0;
      }

      if(situacionLaboral == "solo estudiante" && (flagEdad || edad > edadMasViejo)){
        edadMasViejo = edad;
        nombreMasViejo = nombre;
        flagEdad = 0;
      }

      switch(situacionLaboral){
        case "buscando":
            contadorBuscando++;
            acumBuscando += nota;
            break;
        case "solo estudiante":
            contadorSoloEstudiante++;
            acumSoloEstudiante += nota;
            break;
        case "trabajando":
            contadorTrabajando++;
            acumTrabajando += nota;
            break;
      }

      if(situacionLaboral == "buscando" && (FlagMaterias || cantidadMaterias < materiaMin)){
      materiaMin = cantidadMaterias;
      edadMinMaterias = edad;
      nombreMinMaterias = nombre;
      flag = 0;
      }

    seguir = prompt("Quiere ingresar otro alumno?");
  } while (seguir == 's');




  //a) El nombre del mejor promedio de los que NO trabajan o estan buscando (SOLO ESTUDIANTES)

    if (flagNota == 0){
    console.log(`Nombre del mejor promedio de los que no trabajan o estan buscando es: ${nombreNotaMax}`);
    } else {
        console.log(`No se ingresó ningun nombre del mejor promedio que sea solo estudiante`);
    }


    //b) El nombre del mas viejo de los alumnos que solo sea estudiantes
    if(flagEdad == 0){
      console.log(`El nombre del mas viejo de los alumnos que solo es estudiante: ${nombreMasViejo}`);
    }else{
      console.log(`No se ingresaron alumnos que solo sean estudiantes.`);
    }

    //c) El promedio de nota por situacion laboral
    if (contadorBuscando != 0){
      promedioBuscando = acumBuscando / contadorBuscando;
      console.log(`El promedio de nota de los que estan buscando es: ${promedioBuscando} `);
      } else{
          console.log(`No se ingresaron alumnos que estan buscando trabajo`);
      }
  
      if(contadorSoloEstudiante != 0){
          promedioSoloEstudiante = acumSoloEstudiante / contadorSoloEstudiante;
          console.log(`El promedio de solo estudiante es: ${promedioSoloEstudiante} `);
      } else{
          console.log(`No se ingresaron alumnos solo estudiantes`);
      }
  
      if(contadorTrabajando != 0){
          promedioTrabajando = acumTrabajando / contadorTrabajando;
          console.log(`El promedio de nota de los que trabajan es: ${promedioTrabajando} `);
      } else{
          console.log(`No se ingresaron alumnos que trabajan`);
      }
      
     // d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
     if(FlagMaterias == 0){
      console.log(`La edad y nombre del que cursa menos materias y que no esté buscando trabajo es: ${nombreMinMaterias} y tiene ${edadMinMaterias} años.`);
  } 



}
