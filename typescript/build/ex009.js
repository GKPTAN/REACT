"use strict";
var AcessLevel;
(function (AcessLevel) {
    AcessLevel[AcessLevel["ADMIN"] = 0] = "ADMIN";
    AcessLevel[AcessLevel["EDITOR"] = 1] = "EDITOR";
    AcessLevel[AcessLevel["VISITOR"] = 2] = "VISITOR";
})(AcessLevel || (AcessLevel = {}));
;
function registerProfile(name, level = AcessLevel.VISITOR, email) {
    if (email) {
        return `Perfil: ${name} | Nível: ${level} | Contato: ${email}`;
    }
    else {
        return `Perfil: ${name} | Nível: ${level} | sem e-mail cadastrado.`;
    }
}
;
const nameProfile = registerProfile("Carlos");
const nameAndLevel = registerProfile("Ana", AcessLevel.ADMIN, "ana@empresa.com");
const nameProfile2 = registerProfile("Bia", AcessLevel.EDITOR);
console.log(nameProfile);
console.log(nameAndLevel);
console.log(nameProfile2);
