"use strict";
var usuarioImpl = (function () {
    function usuarioImpl() {
    }
    usuarioImpl.prototype.listar = function () {
        return [
            { _id: 11, nome: 'João', idade: 20 },
            { _id: 12, nome: 'Maria', idade: 24 },
            { _id: 13, nome: 'Joana', idade: 29 },
            { _id: 14, nome: 'José', idade: 60 },
            { _id: 15, nome: 'Magneta', idade: 89 },
            { _id: 16, nome: 'RubberMan', idade: 21 },
            { _id: 17, nome: 'Dynama', idade: 29 },
            { _id: 18, nome: 'Dr IQ', idade: 26 },
            { _id: 19, nome: 'Nataniel', idade: 25 },
            { _id: 20, nome: 'Jéssica', idade: 23 },
            { _id: 21, nome: 'Lucas Lima', idade: 35 }
        ];
    };
    return usuarioImpl;
}());
exports.usuarioImpl = usuarioImpl;
//# sourceMappingURL=usuario.implement.js.map