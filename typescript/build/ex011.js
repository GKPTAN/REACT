"use strict";
var StatusStock;
(function (StatusStock) {
    StatusStock[StatusStock["IN_STOCK"] = 0] = "IN_STOCK";
    StatusStock[StatusStock["SOLD_OUT"] = 1] = "SOLD_OUT";
    StatusStock[StatusStock["REPLACEMENT"] = 2] = "REPLACEMENT";
})(StatusStock || (StatusStock = {}));
const productsCodes = [0, 1, 0, 2, 1];
productsCodes.forEach((code, idx) => {
    console.log(`item ${idx + 1}: ${code === StatusStock.IN_STOCK ? "Produto disponível" : code === StatusStock.REPLACEMENT ? "aguardando fornecedor..." : "Atenção: produto acabou!"} (status: ${code})`);
});
