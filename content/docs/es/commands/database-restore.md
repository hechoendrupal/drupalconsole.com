# database:restore
Restaurar la estructura y los contenidos de bases de datos y tablas MySQL

**Uso:**
```
drupal database:restore [arguments] [options]
dbr
```

## Opciones disponibles
Opción | Detalles
-------|-------------
--file | El nombre de archivo para su archivo de respaldo de la base de datos

## Argumentos disponibles
Argumento | Detalles
---------|-------------
database | Clave de la base de datos en el settings.php

## Ejemplos
* Restaurar el volcado en archivo de la base de datos en la base de datos por defecto o en la que se especifique
```
drupal database:restore \
  --file='/srv/dump/db.sql'
```
