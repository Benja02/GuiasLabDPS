var Empleados = /** @class */ (function () {
    function Empleados(name, sal) {
        this.nombre = name;
        this.salario = sal;
    }
    return Empleados;
}());
var Datos = new Empleados('Benja', 500);
function CalSalario() {
    var Isss = Datos.salario * 0.03;
    var Rent = Datos.salario * 0.0725;
    var Total = Datos.salario - (Isss + Rent);
    return Total;
}
console.log("El Salario de " + Datos.nombre + " es de: " + CalSalario());
