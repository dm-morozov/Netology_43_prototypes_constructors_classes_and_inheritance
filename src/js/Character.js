// Character.js
export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    }

    const types = {
      Bowerman: { attack: 25, defence: 25 },
      Swordsman: { attack: 40, defence: 10 },
      Magician: { attack: 10, defence: 40 },
      Daemon: { attack: 10, defence: 40 },
      Undead: { attack: 25, defence: 25 },
      Zombie: { attack: 40, defence: 10 },
    };

    if (!types[type]) {
      throw new Error(
        "Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
      );
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = types[type].attack;
    this.defence = types[type].defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Нельзя повысить левел умершего");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health = Math.max(
      0,
      Math.min(100, this.health - points * (1 - this.defence / 100)),
    );
  }
}
