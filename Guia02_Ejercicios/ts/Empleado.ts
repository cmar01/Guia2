class Empleado {
    nombre: string;
    salario: number;
    saldofinal:number; 
    ISSS:number;
    AFP:number;
    
    constructor(_nombre: string, _salario: number) {
       this.nombre = _nombre;
       this.salario = _salario;
        this.saldofinal = 0;
        this.ISSS= 0.03;
        this.AFP= 0.072;
    }  
   
    salarioTotal(){
       this.saldofinal = this.salario - (this.salario*this.ISSS) - (this.salario *this.AFP);
       return console.log("El salario total es: $" + this.salario + " Salario despues de impuestos: $" + this.saldofinal);
    }
   
   }
   
   let emp = new Empleado("Jose Martinez",2500);
   
   emp.salarioTotal();