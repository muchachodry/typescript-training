"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Starting Tutorial');
        //Singleton func example
        console.log(Singleton_1.Singleton.getInstance().getHelloWorld());
        console.log(Singleton_1.DIAS.Lunes.toString());
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
        var Direction;
        (function (Direction) {
            Direction["Up"] = "w";
            Direction["Down"] = "s";
            Direction["Izquierda"] = "a";
            Direction["Derecha"] = "d";
        })(Direction || (Direction = {}));
        var d = Direction.Derecha;
        console.log(Direction.Down);
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        ;
        var e = Color.Green;
        var Color1;
        (function (Color1) {
            Color1[Color1["Red"] = 1] = "Red";
            Color1[Color1["Green"] = 2] = "Green";
            Color1[Color1["Blue"] = 3] = "Blue";
        })(Color1 || (Color1 = {}));
        ;
        var colorName = Color[2];
        console.log(colorName);
        // FOO
        var FooIdBrand;
        (function (FooIdBrand) {
        })(FooIdBrand || (FooIdBrand = {}));
        // BAR
        var BarIdBrand;
        (function (BarIdBrand) {
        })(BarIdBrand || (BarIdBrand = {}));
        /**
        * Demo
        */
        var fooId;
        var barId;
        // Por seguridad
        // fooId = barId; // error
        //barId = fooId; // error
        // Newing up
        fooId = 'foo';
        barId = 'bar';
        // Los dos tipos son compatibles con la base
        // que en este caso es string
        var str;
        str = fooId;
        str = barId;
        ej1();
        return 0;
    };
    return Startup;
}());
function ej1() {
    var notsure = 4;
    notsure = "maybe a string instead"; // typeof = string
    notsure = false;
    ; // typeof = boolean
    var prettySure = 4;
    prettySure.constructor.length;
    var list = [1, true, "free"];
    list[1] = 100;
}
Startup.main();
//# sourceMappingURL=HelloWorld.js.map