function Player(name, score = 0) {
    this.name = name;
    this.score = score;
}

Player.prototype.addScore = function(amount) {
    this.score += amount;
    return `${this.name} получил ${amount} очков! Теперь у него ${this.score}`;
}

function ProPlayer(name, score) {

}

const player = new Player('Иван', 100);
console.log(player.addScore(50));
