export class Singleton{
    private static __instance__ : Singleton = null;
    private constructor (private message :string){}
    
    static getInstance(){
        
        if(!Singleton.__instance__) Singleton.__instance__ = new Singleton("HelloWorld");
        
        return Singleton.__instance__;
    }

    getHelloWorld(){
        return this.message;
    }


}

export enum DIAS {Lunes,Martes};