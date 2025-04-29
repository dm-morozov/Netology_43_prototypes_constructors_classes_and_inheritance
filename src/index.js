// index.js
import "./css/style.css";
import Character from "./js/Character.js";
import {
  Bowerman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from "./js/characters.js";

// Для тестирования в консоли добавим классы в глобальную область видимости
window.Character = Character;
window.Bowerman = Bowerman;
window.Swordsman = Swordsman;
window.Magician = Magician;
window.Daemon = Daemon;
window.Undead = Undead;
window.Zombie = Zombie;

console.log("index worked");
