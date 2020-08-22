class Calculadora{
    numero1: number;
    numero2: number;
    respuesta: number;

    constructor(_numero1: number, _numero2: number){
        this.numero1 = _numero1;
        this.numero2 = _numero2;
        this.respuesta = 0;
    }

    suma(){
        this.respuesta = this.numero1 + this.numero2;
        return console.log("La suma es: " + this.respuesta);
    }

    resta(){
        this.respuesta = this.numero1 - this.numero2;
        return console.log("La resta es: " + this.respuesta);
    }
    
    multiplicacion(){
        this.respuesta = this.numero1 * this.numero2;
        return console.log("La multiplicacion es: " + this.respuesta);
    }

    division(){
        this.respuesta = this.numero1 / this.numero2;
        return console.log("La division es: " + this.respuesta);
    }

}


let cal = new Calculadora(8,4);
cal.suma();
cal.resta();
cal.multiplicacion();
cal.division();