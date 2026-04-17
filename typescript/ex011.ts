enum StatusStock {
    IN_STOCK = 0,
    SOLD_OUT = 1,
    REPLACEMENT = 2
}

const productsCodes: readonly number[] = [0,1,0,2,1];

productsCodes.forEach((code, idx) => {
    console.log(`item ${idx + 1}: ${code === StatusStock.IN_STOCK ? "Produto disponível" : code === StatusStock.REPLACEMENT ? "aguardando fornecedor..." : "Atenção: produto acabou!"} (status: ${code})`);
});