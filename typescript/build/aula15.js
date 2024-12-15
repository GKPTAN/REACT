"use strict";
function fsoma(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    //n.forEach((en) => {
    //s+=en;
    //})
    return s;
}
;
console.log(fsoma(10, 20, 30, 48, 50));
