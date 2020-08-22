class Rombo {
    DiagonalVertical:number;
    DiagonalHorizontal:number;
    constructor(_DiagoVert:number,_DiagoHori:number) {
        this.DiagonalHorizontal = _DiagoHori;
        this.DiagonalVertical = _DiagoVert;
    }
}



function CalArea(): number {
    let ValRombo = new Rombo(20,5);
    return ValRombo.DiagonalHorizontal * ValRombo.DiagonalVertical;
    
}

console.log(CalArea());