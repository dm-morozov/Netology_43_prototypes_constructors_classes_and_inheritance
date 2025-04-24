class Player {
    constructor(name, score = 0) {
        this.name = name;
        this.score = score;
    }

    addScore(amount) {
        this.score += amount;

        return `${this.name} получил ${amount} очков! Теперь у него ${this.score}`
    }
}

class PlayerPro extends Player{
    constructor(name, score, rank = 'Pro') {
        super(name, score);
        this.rank = rank;
    }

    useBoost() {
        this.score *=2;
        return `${this.name} (${this.rank}) использует буст, удваивая очки. Теперь у него ${this.score}!`;
    }
}

const player = new Player('Дмитрий', 100)
console.log(player.addScore(200));

const pro = new PlayerPro('ДмитрийPRO', 1000);
console.log(pro.addScore(200));
console.log(pro.useBoost());