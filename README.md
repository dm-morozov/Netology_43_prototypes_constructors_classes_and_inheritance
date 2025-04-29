# Классы и наследование персонажей

![Netology](https://img.shields.io/badge/Netology-JavaScript-blue)
![Jest Coverage](https://img.shields.io/badge/Покрытие-100%25-brightgreen)

Этот проект является решением домашнего задания Нетологии по теме **«Классы, наследование»**. Реализована иерархия классов для игровых персонажей, включая базовый класс `Character` и шесть дочерних классов: `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie`. Проект построен на шаблоне Webpack, использует Jest для юнит-тестирования и ESLint с Prettier для проверки кода, обеспечивая 100% покрытие тестами и отсутствие ошибок линтинга.

## 📖 Описание проекта

Проект реализует систему классов для игровых персонажей со следующими возможностями:

- **Базовый класс `Character`**:
  - Свойства: `name`, `type`, `health`, `level`, `attack`, `defence`.
  - Конструктор проверяет:
    - `name` (строка, 2–10 символов).
    - `type` (один из: `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie`).
  - Устанавливает значения:
    - `health: 100`, `level: 1`.
    - `attack`/`defence` в зависимости от типа:
      - `Bowman`: 25/25
      - `Swordsman`: 40/10
      - `Magician`: 10/40
      - `Daemon`: 10/40
      - `Undead`: 25/25
      - `Zombie`: 40/10
  - Методы:
    - `levelUp`: Увеличивает `level` на 1, повышает `attack` и `defence` на 20%, устанавливает `health` в 100. Выбрасывает ошибку, если `health <= 0`.
    - `damage(points)`: Уменьшает `health` по формуле `health -= points * (1 - defence / 100)`, обеспечивая `health >= 0`.

- **Дочерние классы**:
  - `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie` наследуются от `Character` и задают свой `type`.

- **Юнит-тесты**:
  - Написаны с использованием Jest, покрывают 100% строк кода в `Character.js` и `characters.js`.

- **Линтинг**:
  - ESLint с Prettier обеспечивает чистоту и единообразие кода.

- **Сборка**:
  - Webpack собирает проект для работы в браузере.

Исходное описание задания от Нетологии сохранено в файле [`README_for_Netology.md`](./README_for_Netology.md).

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
Запустите сервер разработки Webpack для просмотра проекта в браузере:
```bash
npm run dev
```
- Откройте `http://localhost:8080` в браузере.
- В консоли разработчика (F12 → Консоль) можно протестировать классы:
  ```javascript
  const character = new Magician("Lion");
  console.log(character); // Magician { name: "Lion", type: "Magician", health: 100, level: 1, attack: 10, defence: 40 }
  ```

### Сборка проекта
Создайте продакшен-сборку:
```bash
npm run build
```
- Результат будет в папке `dist/`.

### Запуск тестов
Запустите юнит-тесты с Jest и проверьте покрытие кода:
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
├── src/
│   ├── js/
│   │   ├── Character.js        # Базовый класс Character
│   │   ├── characters.js       # Дочерние классы (Bowman, Swordsman и т.д.)
│   │   └── index.js            # Точка входа, экспортирует классы в window
│   ├── css/
│   │   └── style.css           # Базовые стили
│   └── index.html              # HTML-шаблон
├── __tests__/
│   └── Character.test.js       # Юнит-тесты для Character и дочерних классов
├── dist/                       # Результат сборки
├── node_modules/               # Зависимости
├── .eslintrc.json              # Конфигурация ESLint (устаревшая)
├── .prettierrc                 # Конфигурация Prettier
├── eslint.config.js            # Плоская конфигурация ESLint
├── package.json                # Метаданные проекта и скрипты
├── webpack.config.js           # Конфигурация Webpack
├── README.md                   # Основная документация (на русском)
├── README_for_Netology.md      # Оригинальное описание задания от Нетологии
└── .gitignore                  # Игнорируемые файлы для Git
```

## ✅ Требования

- **Node.js**: v16 или выше
- **npm**: v8 или выше
- **Зависимости**: Указаны в `package.json`
- **Браузеры**: Современные браузеры (Chrome, Firefox, Edge)

## 📚 Детали задания

Проект полностью выполняет требования домашнего задания Нетологии по теме «Классы, наследование»:
- Реализован базовый класс `Character` с указанными свойствами и методами.
- Созданы шесть дочерних классов: `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie`.
- Конструктор проверяет `name` (2–10 символов) и `type`, выбрасывая ошибки при некорректных значениях.
- Реализованы методы `levelUp` и `damage` с обработкой ошибок.
- Юнит-тесты обеспечивают 100% покрытие кода в `Character.js` и `characters.js`.
- Код проходит проверки ESLint с форматированием Prettier.
- Проект собран на основе шаблона Webpack.

Полное описание задания доступно в файле [`README_for_Netology.md`](./README_for_Netology.md).

## 🔗 Ссылки

- **Задание Нетологии**: [Классы, наследование](http://netology.ru/)
- **Репозиторий**: [GitHub](#) (замените на URL вашего репозитория)
- **CI**: [![Build status](https://ci.appveyor.com/api/projects/status/b6oj97266ojh2fey?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-43-prototypes-constructors-classes-and-in)
- **Автор**: [Ваше Имя] (замените на ваше имя или профиль Нетологии)

## 🤝 Вклад в проект

Это студенческий проект, но вы можете сообщать об ошибках или предлагать улучшения через GitHub!

## 📧 Контакты

### Если возникнут вопросы по задачам, пишите или в чат учебной группы:
- ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
- ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
- ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)

