"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(_numero1, _numero2) {
        this.numero1 = _numero1;
        this.numero2 = _numero2;
        this.respuesta = 0;
    }
    Calculadora.prototype.suma = function () {
        this.respuesta = this.numero1 + this.numero2;
        return console.log("La suma es: " + this.respuesta);
    };
    Calculadora.prototype.resta = function () {
        this.respuesta = this.numero1 - this.numero2;
        return console.log("La resta es: " + this.respuesta);
    };
    Calculadora.prototype.multiplicacion = function () {
        this.respuesta = this.numero1 * this.numero2;
        return console.log("La multiplicacion es: " + this.respuesta);
    };
    Calculadora.prototype.division = function () {
        this.respuesta = this.numero1 / this.numero2;
        return console.log("La division es: " + this.respuesta);
    };
    return Calculadora;
}());
var cal = new Calculadora(8, 4);
cal.suma();
cal.resta();
cal.multiplicacion();
cal.division();
