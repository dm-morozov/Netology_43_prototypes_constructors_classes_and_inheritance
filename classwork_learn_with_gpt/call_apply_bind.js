function greet(greeting, power) {
    return `${greeting}, меня зовут ${this.name} ${this.lastname}, и моя сила равна ${power}`
}

const person = {name: 'Дмитрий', lastname: 'Морозов'};
const arr = ['Привет', 100];

console.log(greet.call(person, greeting = 'Привет', power = 100))
console.log(greet.apply(person, arr))
