"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton(message) {
        this.message = message;
    }
    Singleton.getInstance = function () {
        if (!Singleton.__instance__)
            Singleton.__instance__ = new Singleton("HelloWorld");
        return Singleton.__instance__;
    };
    Singleton.prototype.getHelloWorld = function () {
        return this.message;
    };
    Singleton.__instance__ = null;
    return Singleton;
}());
exports.Singleton = Singleton;
var DIAS;
(function (DIAS) {
    DIAS[DIAS["Lunes"] = 0] = "Lunes";
    DIAS[DIAS["Martes"] = 1] = "Martes";
})(DIAS = exports.DIAS || (exports.DIAS = {}));
;
//# sourceMappingURL=Singleton.js.map