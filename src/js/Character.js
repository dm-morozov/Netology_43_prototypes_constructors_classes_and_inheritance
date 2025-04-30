// Character.js
export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    }

    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!types.includes(type)) {
      throw new Error(`Тип должен быть одним из: ${types.join(", ")}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Нельзя повысить левел умершего");
    }
    if (this.attack === undefined || this.defence === undefined) {
      throw new Error("Нельзя повысить уровень: attack или defence не заданы");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.defence === undefined) {
      throw new Error("Нельзя нанести урон: defence не задано");
    }
    this.health = Math.max(0, this.health - points * (1 - this.defence / 100));
  }
}
