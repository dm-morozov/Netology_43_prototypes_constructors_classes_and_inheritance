// Character.test.js
import Character from "../Character";
import {
  Bowerman,
  Daemon,
  Magician,
  Swordsman,
  Undead,
  Zombie,
} from "../characters";

describe("Character", () => {
  test("Создание персонажа character", () => {
    const character = new Character("Лучник", "Bowerman");
    expect(character).toEqual({
      name: "Лучник",
      type: "Bowerman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test("Проверка имени на длину, если короткое", () => {
    expect(() => new Character("М", "Magician")).toThrow(
      "Имя должно содержать от 2 до 10 символов",
    );
  });

  test("Проверка имени на длину, если длинное", () => {
    expect(() => new Character("VeryLongName", "Magician")).toThrow(
      "Имя должно содержать от 2 до 10 символов",
    );
  });

  test("Проверка типа персонажа", () => {
    expect(() => new Character("Heroes", "Invalid")).toThrow(
      "Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
    );
  });

  test("Повышение уровня героя", () => {
    const character = new Character("Heroes", "Bowerman");
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  test("Исключение, при повышении уровня, если герой умер", () => {
    const character = new Character("Hero", "Bowerman");
    character.health = 0;
    expect(() => character.levelUp()).toThrow("Нельзя повысить левел умершего");
  });

  test("Тест нанесения урона", () => {
    const character = new Character("Heroes", "Bowerman");
    character.damage(25);
    expect(character.health).toBe(81.25);
    character.damage(125);
    expect(character.health).toBe(0);
  });

  test("Тест нанесение отрицательного урона", () => {
    const character = new Character("Heroes", "Bowerman");
    character.damage(-25);
    expect(character.health).toBe(100);
  });
});

describe("character classes", () => {
  test.each([
    [Bowerman, "Bowerman", 25, 25],
    [Swordsman, "Swordsman", 40, 10],
    [Magician, "Magician", 10, 40],
    [Daemon, "Daemon", 10, 40],
    [Undead, "Undead", 25, 25],
    [Zombie, "Zombie", 40, 10],
  ])(
    "should create %p with correct attributes",
    (Class, type, attack, defence) => {
      const character = new Class("Heroes");
      expect(character.name).toBe("Heroes");
      expect(character.type).toBe(type);
      expect(character.attack).toBe(attack);
      expect(character.defence).toBe(defence);
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
    },
  );
});
