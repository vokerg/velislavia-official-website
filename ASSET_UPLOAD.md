# Загрузка статических ресурсов

Код портала уже находится в этой ветке. Для полной работы сайта требуется добавить подготовленные бинарные ресурсы из архива `velislavia-official-website-complete.zip`.

## Что скопировать

Из архива перенесите каталог `static` в корень репозитория, сохранив структуру:

```text
static/
├── images/  # 25 изображений WebP
├── audio/   # гимн MP3, MIDI и текст нот
└── assets-manifest.json
```

Файл `assets-manifest.json` перечисляет все ожидаемые ресурсы.

## Через локальный Git

```bash
git checkout feature/official-site-v1
unzip velislavia-official-website-complete.zip -d /tmp/velislavia-site
cp -R /tmp/velislavia-site/velislavia-site/static ./static
git add static
git commit -m "feat: add Velislavia media archive"
git push
```

## Через интерфейс GitHub

Откройте ветку `feature/official-site-v1`, выберите **Add file → Upload files** и перетащите содержимое каталогов `static/images` и `static/audio`, сохранив названия файлов из манифеста.

После загрузки ресурсов сайт можно публиковать через GitHub Pages из ветки `main` и корневого каталога.
