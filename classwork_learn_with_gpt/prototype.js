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

Player.prototype.addScore = function (amount) {
    this.score += amount;
    return `${this.name} получил ${amount} очков! Теперь у него ${this.score}`;
}

function ProPlayer(name, score) {
    Player.call(this, name, score); // Инициализируем name и score
}

ProPlayer.prototype = Object.create(Player.prototype); // 2. Настраиваем прототипное наследование
ProPlayer.prototype.constructor = ProPlayer // 3. Восстанавливаем constructor

ProPlayer.prototype.useBoost = function () {
    this.score *= 2;
    return `${this.name} использует буст, удваивая ${this.score}!`;
}

const player = new Player('Иван', 100);
console.log(player.addScore(50));
setTimeout((function () {
    console.log(player.addScore(20));
}).bind(player), 2000);


const pro = new ProPlayer('Сергей Pro', 200);
console.log(pro.name, pro.score);
console.log(pro.useBoost());
console.log(pro.addScore(100));

// ### 🧑‍💻 Практическое задание

// Давай применим привязку контекста к твоей игровой системе.

// 1. **Задача**:

//   - Доработай `Player` и `ProPlayer` из предыдущего задания.

//   - Добавь метод `startGame` в `Player.prototype`, 
// который каждые 2 секунды вызывает `addScore(10)` 
// и выводит результат.

//   - Убедись, что `this` работает корректно.

//   - Для `ProPlayer` переопредели `startGame`, 
// чтобы он дополнительно вызывал `useBoost` каждые 6 секунд.

Player.prototype.startGame = function () {
    const ScoreInterval = setInterval(() => {
        console.log(this.addScore(10))
    }, 2000)

    setTimeout(() => {
        clearInterval(ScoreInterval)
        console.log(`${this.name} закончил игру.`)
    }, 30000)

    return { ScoreInterval };
}

ProPlayer.prototype.startGame = function () {
    const scoreInterval = setInterval(() => {
        console.log(this.addScore(10))
    }, 2000)
    const boostInterval = setInterval(() => {
        console.log(this.useBoost())
    }, 6000)

    setTimeout(() => {
        clearInterval(scoreInterval);
        clearInterval(boostInterval);
        console.log(`${this.name} закончил игру.`)
    }, 30000);

    return { scoreInterval, boostInterval }; // Возвращаем ID для stopGame
};

ProPlayer.prototype.stopGame = function (intervals) {
    clearInterval(intervals.scoreInterval);
    clearInterval(intervals.boostInterval);
    console.log(`${this.name} остановил игру.`);
};

Player.prototype.stopGame = function (intervals) {
    clearInterval(intervals.scoreInterval);
    console.log(`${this.name} остановил игру.`);
};

// Запуск игры
const playerInterval = player.startGame();
const proIntervals = pro.startGame();

// Пример остановки вручную (например, через 10 секунд)
setTimeout(() => {
    player.stopGame(playerInterval);
    pro.stopGame(proIntervals);
}, 10000);