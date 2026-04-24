class Drone {
    private id: number = Math.floor(Math.random() * 100) + 1;
    private height: number=0;
    private battery: number=100;
    protected flying: boolean=false
    constructor (
        public model: string,
    ) {}

    takeOff(): void {
        this.flying = true;
        this.height = 10;
    }

    setHeight(newHeight: number): void {
        if (this.flying) {
            if (newHeight < 0 || newHeight > 500) {
                console.log(`[ERRO]: altura de ${newHeight} é inválida para o drone ${this.model}`);
            } else {
                this.height = newHeight;
            }
        } else {
            console.log(`[ERRO]: não é possível ajustar a altura com o drone no chão!`)
        };
    };

    status(): void {
        console.log(`
            --------------- STATUS DO DRONE ---------------\n
            Modelo: ${this.model}\n
            ID: ${this.id}\n
            Altura atual: ${this.height}m\n
            Bateria: ${this.battery}%\n
            Status: ${this.flying ? `em voo` : `no chão`}\n
            -----------------------------------------------
        `)
    }
}

const drone1 = new Drone("Skymaster");
drone1.setHeight(50);
drone1.takeOff();
drone1.setHeight(200);
drone1.setHeight(-10);
drone1.status();