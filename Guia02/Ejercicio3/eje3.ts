class Empleados {
    nombre:string;
    salario:number;
    constructor(name:string,sal:number) {
        this.nombre = name;
        this.salario = sal;
    }
}

//Instanciando clase Empleado
let Datos = new Empleados('Benja',500);


function CalSalario():number {

    var Isss = Datos.salario*0.03;
    var Rent = Datos.salario*0.0725;

    var Total = Datos.salario - (Isss+Rent);

    return Total;

}

console.log("El Salario de " + Datos.nombre + " es de: " + CalSalario());