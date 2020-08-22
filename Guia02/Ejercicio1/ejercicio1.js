var Rombo = /** @class */ (function () {
    function Rombo(_DiagoVert, _DiagoHori) {
        this.DiagonalHorizontal = _DiagoHori;
        this.DiagonalVertical = _DiagoVert;
    }
    return Rombo;
}());
function CalArea() {
    var ValRombo = new Rombo(20, 5);
    return ValRombo.DiagonalHorizontal * ValRombo.DiagonalVertical;
}
console.log(CalArea());
