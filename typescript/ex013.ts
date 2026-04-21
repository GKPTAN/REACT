class RacingTeam {
    name: string;
    times: number[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTurns(...newTurns: number[]) {
        this.times = [...this.times, ...newTurns];
    }

    showTopTurn() {
        const shortTurn = Math.min(...this.times);
        console.log(`Equipe: ${this.name} | Melhor volta: ${shortTurn}s`);
    }
}

const trainingMorning = [95.5, 98.2];
const trainingAfternoon = [94.1, 92.8];

const equipe1 = new RacingTeam("Scuderia TS");
equipe1.addTurns(100.0);
const allTraining = [...trainingMorning, ...trainingAfternoon]
equipe1.addTurns(...allTraining)
equipe1.showTopTurn();