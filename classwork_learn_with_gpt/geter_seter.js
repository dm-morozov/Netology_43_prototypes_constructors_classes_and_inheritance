class Player {
    constructor(name, score = 0) {
        this.name = name;
        this._score = score;
    }

    get score() {
        return this._score;
    }

    set score(value) {
        this._score = Math.max(0, value); // Не даём score стать отрицательным
    }

    addScore(amount) {
        this.score += amount;
        return `${this.name} получил ${amount} очков! Теперь у него ${this.score}`;
    }
}

const player = new Player("Иван", 100);
console.log(player.addScore(50)); // Иван получил 50 очков! Теперь у него 150
player.score = -50; // Сеттер не даст score стать отрицательным
console.log(player.score); // 0