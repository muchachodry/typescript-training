import { Singleton, DIAS } from "./Singleton";

class Startup {
    public static main(): number {
        console.log('Starting Tutorial');


        //Singleton func example
        console.log(Singleton.getInstance().getHelloWorld());
        console.log(DIAS.Lunes.toString()  );
        let a={miprop:"hola"}
        let b={a}; // {a:{miprop:"hola"}}
        let c={...a,...b}: // {miprop:hola,a:{mipop:hola}}

        /*types*/
        /*Se permite el tipado debil (No se especifica el tipo)*/
        var a = 3;
        var b = "hola";
        var c = a + b;
        console.log(c);

        //BOOL
        let isDone: boolean = false;

        //number
        let decimal: number = 20;
        let hex: number = 0xf00d;
        let binary: number = 0b1010;//Estoy es binario?
        let octal: number = 0o744;

        //strings
        let color: string = "blue";
        color = 'red';
        console.log(color);

        let name: string = 'Adrián';
        let edad: number = 23;

        //OJO por que no es (') es (`) esto es una template string
        let sentence: string = `Soy ${name} y tengo ${edad} años`;
        console.log(sentence);
        //Que es equivalente a:
        let frase: string = "Hello, my name is " + name + "." + "I'll be " + (edad + 1);
        console.log(frase);

        //LITERAL TYPE (NO BIEN EXPLICADO??)
        /*let literalString = 'damm';
        literalString = 'suu';
        console.log(literalString);*/

        //ARRAY
        let list: number[] = [1,2,3];
        let list1: Array <number> = [1,2,3];

        //NULL -> OBJETO O VARIABLE NO ACCESIBLE
        //UNDEFINED -> EL OBJETO EXISTE PERO NO TIENE VALOR
        console.log(undefined == undefined); // true
        console.log(null == undefined); // true
        console.log(0 == undefined); // false
        console.log('' == undefined); // false
        console.log(false == undefined); // false

        // Declaración de tublas
        let x: [string, number];
        // Inicialización correcta
        x = ["hello", 10]; // OK
        // Inicialización incorrecta
        //x = [10, "hello"]; // Error
        console.log(x[0].substr(1)); 

        enum Direction{
            Up = "w",
            Down = "s",
            Izquierda = "a",
            Derecha = "d"
        }

        var d = Direction.Derecha;
        console.log(Direction.Down);

        enum Color{Red,Green,Blue};
        let e: Color = Color.Green;

        enum Color1 {Red = 1, Green, Blue};
        let colorName: string = Color[2];
        console.log(colorName);

        // FOO
        enum FooIdBrand {}
        type FooId = FooIdBrand & string;
       
        // BAR
        enum BarIdBrand {}
        type BarId = BarIdBrand & string;
       
        /**
        * Demo
        */
        var fooId: FooId;
        var barId: BarId;
        
        // Por seguridad
       // fooId = barId; // error
        //barId = fooId; // error
        
        // Newing up
        fooId = 'foo' as FooId;
        barId = 'bar' as BarId;
       
        // Los dos tipos son compatibles con la base
        // que en este caso es string
        var str: string;
        str = fooId;
        str = barId;

        ej1();





        return 0;
    }
}

function ej1(): void {
    
    let notsure: any = 4;
    notsure = "maybe a string instead"; // typeof = string
    notsure = false;; // typeof = boolean

    let prettySure: Object = 4;
    prettySure.constructor.length
    let list: any[] = [1, true, "free"];
    list[1] = 100;
}

Startup.main();