"use strict";
//Imprimir en consola
console.log("ReyAlexM");
//Variables y valores primitivos
var full_nombre = "Jorge Cano";
var age = 27;
var developer = true;
//Arreglos
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray = [123, 123, 1213, 1231];
//Enumerables
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
var role = ROLE.Employee;
//Funciones
//Funcion que no retorne nada y no reciba parametros
function hello() {
}
//Funcion que no retorne nada y que reciba un parametro de tipo string
function SetName(name) {
}
//Funcion que retorne un dato tipo string y que reciba 2 parametros
function setNamee(name, surName) {
    return "string";
}
