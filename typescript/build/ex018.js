"use strict";
class DataCenter {
    _temp = 20;
    constructor() { }
    get temp() {
        return this._temp;
    }
    ;
    set temp(temp) {
        if (temp > 40) {
            console.log(`[ALERTA] Temperatura de ${temp}°C é crítica! ajuste bloqueado.`);
        }
        else if (temp < 10) {
            console.log(`[ALERTA] Temperatura muito baixa! ajuste bloqueado.`);
        }
        else {
            this._temp = temp;
        }
    }
    ;
}
const statusServidor = {
    ligado: true,
    exibir: () => {
        console.log(`Servidor ativo: ${statusServidor.ligado ? 'sim' : 'não'}`);
    }
};
const servidor1 = new DataCenter();
servidor1.temp = 45;
servidor1.temp = 30;
servidor1.temp = 5;
statusServidor.exibir();
console.log(`Temperatura atual do sistema: ${servidor1.temp}°C`);
