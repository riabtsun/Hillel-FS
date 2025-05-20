# Express Authentication Server

Сервер на Express.js з автентифікацією користувачів, що використовує MongoDB та Passport.js

## Встановлення

1. Клонуйте репозиторій:

```bash
git clone <repository-url>
cd project-folder

npm install
```

MONGO_URI=mongodb://localhost:27017/pug
PORT=3000

Налаштування MongoDB
Локальне встановлення:

Встановіть MongoDB Community Edition
Запустіть MongoDB сервіс
База даних буде доступна за адресою: mongodb://localhost:27017
MongoDB Atlas (хмарне рішення):

Створіть обліковий запис на MongoDB Atlas
Створіть новий кластер
Отримайте рядок підключення
Замініть MONGO_URI в .env на отриманий рядок
API Endpoints
Автентифікація
POST /register - Реєстрація нового користувача

```
{
"email": "user@example.com",
"password": "password123"
}
POST /login - Вхід в систему

{
"email": "user@example.com",
"password": "password123"
}
```

GET /logout - Вихід із системи

Користувачі
GET /profile - Отримання інформації про поточного користувача
GET /userslist - Отримання списку всіх користувачів
Запуск сервера
Для запуску в режимі розробки:

```npm run dev```

Технології
Express.js
TypeScript
MongoDB & Mongoose
Passport.js
express-session
connect-mongo

## Структура проекту

```bash
├── api/
│ └── users/
│ ├── user.model.ts
│ ├── users.controller.ts
│ └── users.router.ts
├── config/
│ ├── database.ts
│ └── passport.ts
├── middlewars/
│ └── status.middleware.ts
├── .env
├── server.ts
└── package.json