# Veleda Landing

Статический лендинг Veleda Studio для продажи лендингов, Telegram-ботов и CRM под заявки.

## Как открыть локально

Можно просто открыть `index.html` в браузере.

Если нужен локальный сервер:

```bash
python -m http.server 8000
```

Потом открыть:

```text
http://localhost:8000
```

## Деплой на Vercel

1. Зайти на https://vercel.com и авторизоваться через GitHub.
2. Нажать `Add New...` -> `Project`.
3. Выбрать репозиторий `wango044/veleda`.
4. Настройки оставить такими:
   - Framework Preset: `Other`
   - Build Command: пусто
   - Output Directory: пусто или `.`
   - Root Directory: корень репозитория
5. Нажать `Deploy`.

Главная страница проекта: `index.html`.
