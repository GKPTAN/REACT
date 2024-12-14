"use strict";
const teste = (txt = "...") => {
    console.log(txt);
};
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("Guilherme");
teste();
let numer = [10, 20, 30, 40, 50];
console.log(fsoma2(numer));
