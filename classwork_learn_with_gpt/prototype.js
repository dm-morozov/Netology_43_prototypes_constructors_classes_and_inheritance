// ### 🧑‍💻 Практическое задание

// Чтобы закрепить материал, создай прототип для игровой системы:

// 1. **Задача**:

//   - Создай конструктор `Player` с полями `name` и `score` (очки).

//   - Добавь в прототип метод `addScore(amount)`, который увеличивает `score` и возвращает сообщение вроде `${name} получил ${amount} очков! Теперь у него ${score}`.

//   - Создай конструктор `ProPlayer`, который наследует `Player`, и добавь метод `useBoost()`, возвращающий `${name} использует буст, удваивая ${score}!`.




function Player(name, score = 0) {
    this.name = name;
    this.score = score;
}

Player.prototype.addScore = function(amount) {
    this.score += amount;
    return `${this.name} получил ${amount} очков! Теперь у него ${this.score}`;
}

function ProPlayer(name, score) {
    Player.call(this, name, score); // Инициализируем name и score
}

ProPlayer.prototype = Object.create(Player.prototype); // 2. Настраиваем прототипное наследование
ProPlayer.prototype.constructor = ProPlayer // 3. Восстанавливаем constructor

ProPlayer.prototype.UseBoost = function() {
    this.score *= 2;
    return `${this.name} использует буст, удваивая ${this.score}!`;
}

const player = new Player('Иван', 100);
console.log(player.addScore(50));

const pro = new ProPlayer('Сергей Pro', 200);
console.log(pro.name, pro.score);
console.log(pro.UseBoost());
console.log(pro.addScore(100));
