var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Starting Tutorial');
        /*types*/
        /*Se permite el tipado debil (No se especifica el tipo)*/
        var a = 3;
        var b = "hola";
        var c = a + b;
        console.log(c);
        //BOOL
        var isDone = false;
        //number
        var decimal = 20;
        var hex = 0xf00d;
        var binary = 10; //Estoy es binario?
        var octal = 484;
        //strings
        var color = "blue";
        color = 'red';
        console.log(color);
        var name = 'Adrián';
        var edad = 23;
        //OJO por que no es (') es (`) esto es una template string
        var sentence = "Soy " + name + " y tengo " + edad + " a\u00F1os";
        console.log(sentence);
        //Que es equivalente a:
        var frase = "Hello, my name is " + name + "." + "I'll be " + (edad + 1);
        console.log(frase);
        //LITERAL TYPE (NO BIEN EXPLICADO??)
        /*let literalString = 'damm';
        literalString = 'suu';
        console.log(literalString);*/
        //ARRAY
        var list = [1, 2, 3];
        var list1 = [1, 2, 3];
        //NULL -> OBJETO O VARIABLE NO ACCESIBLE
        //UNDEFINED -> EL OBJETO EXISTE PERO NO TIENE VALOR
        console.log(undefined == undefined); // true
        console.log(null == undefined); // true
        console.log(0 == undefined); // false
        console.log('' == undefined); // false
        console.log(false == undefined); // false
        // Declaración de tublas
        var x;
        // Inicialización correcta
        x = ["hello", 10]; // OK
        // Inicialización incorrecta
        //x = [10, "hello"]; // Error
        console.log(x[0].substr(1));
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=HelloWorld.js.map