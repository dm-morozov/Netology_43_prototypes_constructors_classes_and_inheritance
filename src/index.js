// index.js
import "./css/style.css";
import Character from "./js/Character.js";
import Bowman from "./js/Bowman.js";
import Swordsman from "./js/Swordsman.js";
import Magician from "./js/Magician.js";
import Daemon from "./js/Daemon.js";
import Undead from "./js/Undead.js";
import Zombie from "./js/Zombie.js";

// Для тестирования в консоли добавим классы в глобальную область видимости
window.Character = Character;
window.Bowman = Bowman;
window.Swordsman = Swordsman;
window.Magician = Magician;
window.Daemon = Daemon;
window.Undead = Undead;
window.Zombie = Zombie;

console.log("index worked");
