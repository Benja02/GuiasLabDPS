class Calculadora {
    numero1:number;
    numero2:number;

    constructor(num1:number,num2:number){
        this.numero1 = num1;
        this.numero2 = num2;
    }

}

let Valores = new Calculadora(50,5);

function Operaciones() {
    function Suma():number {
        var TotalSum = Valores.numero1 + Valores.numero2;
        return TotalSum;
    }
    console.log("El total de la Suma es: " + Suma());

    function Resta():number {
        var TotalRes = Valores.numero1 - Valores.numero2;
        return TotalRes;
    }
    console.log("El total de la Resta es: " + Resta());

    function Multipliacion():number {
        var TotalMult = Valores.numero1 * Valores.numero2;
        return TotalMult;
    }
    console.log("El total de la Multiplicacion es: " + Multipliacion());

    function Division():number {
        var TotalDiv = Valores.numero1/ Valores.numero2;
        return TotalDiv;
    }
    console.log("El total de la Division es: " + Division());
     
}

console.log(Operaciones());