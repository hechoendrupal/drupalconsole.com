---
title: Install Drupal Console Using Composer
---

Change directory to Drupal site:

```bash
cd /path/to/drupal8.dev
```

Execute composer require command:

```bash
composer require drupal/console:~1.0 \
--prefer-dist \
--optimize-autoloader
```

## Download using DrupalComposer project template

```bash
composer create-project \
drupal-composer/drupal-project:8.x-dev \
drupal8.dev \
--prefer-dist \
--no-progress \
--no-interaction
```

## Update DrupalConsole

```bash
composer update drupal/console --with-dependencies
```
