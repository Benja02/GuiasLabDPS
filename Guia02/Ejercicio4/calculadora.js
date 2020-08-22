var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    return Calculadora;
}());
var Valores = new Calculadora(50, 5);
function Operaciones() {
    function Suma() {
        var TotalSum = Valores.numero1 + Valores.numero2;
        return TotalSum;
    }
    console.log("El total de la Suma es: " + Suma());
    function Resta() {
        var TotalRes = Valores.numero1 - Valores.numero2;
        return TotalRes;
    }
    console.log("El total de la Resta es: " + Resta());
    function Multipliacion() {
        var TotalMult = Valores.numero1 * Valores.numero2;
        return TotalMult;
    }
    console.log("El total de la Multiplicacion es: " + Multipliacion());
    function Division() {
        var TotalDiv = Valores.numero1 / Valores.numero2;
        return TotalDiv;
    }
    console.log("El total de la Division es: " + Division());
}
console.log(Operaciones());
