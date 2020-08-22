var a:string = "Uriel";
var b = 'Saludos a ti ${this.a},';
console.log(b);

get Saludo():string{
    let emojis = '(⌐■_■)';
    return 'Saludos ${this.last_name}, ${this.first_name} Le enviamos un saludo desde la consola! ${emojis}';
}
