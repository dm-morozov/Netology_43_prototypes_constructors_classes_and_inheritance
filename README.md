# Классы и наследование персонажей

[![Build status](https://ci.appveyor.com/api/projects/status/ff3ce4iylaxapka7?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-43-prototypes-constructors-classes-and-in-s443a)
![Netology](https://img.shields.io/badge/Netology-JavaScript-blue)
![Jest Coverage](https://img.shields.io/badge/Покрытие-100%25-brightgreen)

Этот проект — решение домашнего задания Нетологии по теме **«Классы, наследование»**. Реализована иерархия классов для игровых персонажей: базовый класс `Character` и шесть дочерних классов: `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie`. Проект построен на шаблоне Webpack, использует Jest для юнит-тестирования и ESLint с Prettier для проверки кода, обеспечивая 100% покрытие тестами и отсутствие ошибок линтинга.

## 📖 Описание проекта

Проект реализует систему классов для игровых персонажей с проверкой данных и игровыми механиками:

- **Базовый класс `Character`**:
  - Свойства: `name`, `type`, `health`, `level`, `attack`, `defence`.
  - Конструктор:
    - Проверяет `name` (строка, 2–10 символов).
    - Проверяет `type` (один из: `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie`).
    - Устанавливает `health: 100`, `level: 1`, `attack: undefined`, `defence: undefined`.
  - Методы:
    - `levelUp`: Повышает `level` на 1, увеличивает `attack` и `defence` на 20%, устанавливает `health` в 100. Выбрасывает ошибку, если `health <= 0` или `attack`/`defence` не заданы.
    - `damage(points)`: Уменьшает `health` по формуле `health -= points * (1 - defence / 100)`, обеспечивая `health >= 0`. Выбрасывает ошибку, если `defence` не задано.

- **Дочерние классы**:
  - `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie` наследуются от `Character`, задавая `type` и значения `attack`/`defence`:
    - `Bowman`: 25/25
    - `Swordsman`: 40/10
    - `Magician`: 10/40
    - `Daemon`: 10/40
    - `Undead`: 25/25
    - `Zombie`: 40/10

- **Юнит-тесты**:
  - Написаны с использованием Jest, обеспечивают 100% покрытие строк кода в `Character.js`, `Bowman.js`, `Swordsman.js`, `Magician.js`, `Daemon.js`, `Undead.js`, `Zombie.js`.

- **Линтинг**:
  - ESLint с Prettier гарантирует чистоту и единообразие кода.

- **Сборка**:
  - Webpack собирает проект для работы в браузере, экспортируя классы в глобальную область (`window`).

Исходное описание задания сохранено в файле [`README_for_Netology.md`](./README_for_Netology.md).

## 🛠️ Установка

Для запуска проекта локально выполните следующие шаги:

1. **Клонируйте репозиторий**:
   ```bash
   git clone git@github.com:dm-morozov/Netology_43_prototypes_constructors_classes_and_inheritance.git
   cd Netology_43_prototypes_constructors_classes_and_inheritance
   ```

2. **Установите зависимости**:
   ```bash
   npm install
   ```

3. **Убедитесь, что установлен Node.js** (рекомендуется версия 16 или выше).

## 🚀 Использование

### Запуск сервера разработки
Запустите сервер Webpack для просмотра проекта в браузере:
```bash
npm run dev
```
- Откройте `http://localhost:8080` в браузере.
- В консоли разработчика (F12 → Консоль) можно протестировать классы:
  ```javascript
  const character = new Bowman("Лучник");
  console.log(character); // Bowman { name: "Лучник", type: "Bowman", health: 100, level: 1, attack: 25, defence: 25 }
  character.levelUp();
  console.log(character); // Bowman { name: "Лучник", type: "Bowman", health: 100, level: 2, attack: 30, defence: 30 }
  ```

### Сборка проекта
Создайте продакшен-сборку:
```bash
npm run build
```
- Результат будет в папке `dist/`.

### Запуск тестов
Запустите юнит-тесты и проверьте покрытие:
```bash
npm run test
```
- Отчёт о покрытии доступен в `coverage/lcov-report/index.html`.

### Проверка кода
Проверьте код на ошибки ESLint:
```bash
npm run lint
```
Исправьте ошибки автоматически:
```bash
npm run lint:fix
```

## 📂 Структура проекта

```
Netology_43_prototypes_constructors_classes_and_inheritance/
├── .husky/                     # Настройки Husky для pre-commit хуков
├── .vscode/                    # Настройки VS Code
├── classwork_learn_with_gpt/   # Дополнительная папка для работы с GPT
├── coverage/                   # Отчёты покрытия тестами
├── dist/                       # Результат сборки
├── node_modules/               # Зависимости
├── src/
│   ├── css/
│   │   └── style.css           # Базовые стили
│   ├── js/
│   │   ├── __tests__/
│   │   │   └── Character.test.js  # Юнит-тесты для классов
│   │   ├── Bowman.js           # Класс Bowman
│   │   ├── Character.js        # Базовый класс Character
│   │   ├── characters__old.js  # Устаревший файл с дочерними классами
│   │   ├── Daemon.js           # Класс Daemon
│   │   ├── Magician.js         # Класс Magician
│   │   ├── Swordsman.js        # Класс Swordsman
│   │   ├── Undead.js           # Класс Undead
│   │   └── Zombie.js           # Класс Zombie
│   ├── index.html              # HTML-шаблон
│   └── index.js                # Точка входа, экспортирует классы в window
├── svg/                        # Иконки для README
├── .appveyor.yml               # Конфигурация CI для AppVeyor
├── .gitattributes              # Настройки Git
├── .gitignore                  # Игнорируемые файлы для Git
├── babel.config.json           # Конфигурация Babel
├── description_homework.md     # Описание задания (альтернативное)
├── eslint.config.mjs           # Конфигурация ESLint
├── jest.config.js              # Конфигурация Jest
├── package-lock.json           # Заблокированные версии зависимостей
├── package.json                # Метаданные проекта и скрипты
├── README_for_Netology.md      # Оригинальное описание задания
├── README.md                   # Основная документация (на русском)
├── webpack.common.mjs          # Общая конфигурация Webpack
├── webpack.config.mjs          # Основная конфигурация Webpack
├── webpack.dev.mjs             # Конфигурация Webpack для разработки
└── webpack.prod.mjs            # Конфигурация Webpack для продакшена
```

## ✅ Требования

- **Node.js**: v16 или выше
- **npm**: v8 или выше
- **Зависимости**: Указаны в `package.json`
- **Браузеры**: Современные браузеры (Chrome, Firefox, Edge)

## 📚 Детали задания

Проект полностью выполняет требования домашнего задания Нетологии:
- Реализован базовый класс `Character` с указанными свойствами и методами.
- Созданы шесть дочерних классов: `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie`, каждый в отдельном файле.
- Конструктор `Character` проверяет `name` (2–10 символов) и `type`, выбрасывая ошибки при некорректных значениях.
- Реализованы методы `levelUp` и `damage` с обработкой ошибок для случаев `health <= 0` и отсутствия `attack`/`defence`.
- Юнит-тесты обеспечивают 100% покрытие строк кода в `Character.js`, `Bowman.js`, `Swordsman.js`, `Magician.js`, `Daemon.js`, `Undead.js`, `Zombie.js`.
- Код проходит проверки ESLint с форматированием Prettier.
- Проект собран на основе шаблона Webpack.

Полное описание задания доступно в [`README_for_Netology.md`](./README_for_Netology.md).

## 🔗 Ссылки

- **Задание Нетологии**: [Классы, наследование](./README_for_Netology.md)
- **Репозиторий**: [GitHub](https://github.com/dm-morozov/Netology_43_prototypes_constructors_classes_and_inheritance)
- **CI**: [![Build status](https://ci.appveyor.com/api/projects/status/ff3ce4iylaxapka7?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-43-prototypes-constructors-classes-and-in)
- **Автор**: Дмитрий Морозов

## 🤝 Вклад в проект

Это студенческий проект, но вы можете сообщать об ошибках или предлагать улучшения через GitHub Issues!

## 📧 Контакты

Если возникнут вопросы, пишите:
- ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
- ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
- ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)