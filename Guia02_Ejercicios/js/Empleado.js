"use strict";
var Empleado = /** @class */ (function () {
    function Empleado(_nombre, _salario) {
        this.nombre = _nombre;
        this.salario = _salario;
        this.saldofinal = 0;
        this.ISSS = 0.03;
        this.AFP = 0.072;
    }
    Empleado.prototype.salarioTotal = function () {
        this.saldofinal = this.salario - (this.salario * this.ISSS) - (this.salario * this.AFP);
        return console.log("El salario total es: $" + this.salario + " Salario despues de impuestos: $" + this.saldofinal);
    };
    return Empleado;
}());
var emp = new Empleado("Jose Martinez", 2500);
emp.salarioTotal();
