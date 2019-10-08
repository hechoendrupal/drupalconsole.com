# migrate:execute
Ejecuta una migración que esté disponible para la aplicación

**Uso:**
```
drupal migrate:execute [arguments] [options]
mie
```

## Opciones disponibles
Opción | Detalles
-------|-------------
--site-url | URL fuente del sitio
--db-type | commands.migrate.execute.migrations.options.db-type
--db-host | Host de la base de datos
--db-name | Nombre de la base de datos
--db-user | Usuario de la base de datos
--db-pass | Contraseña de la base de datos
--db-prefix | Prefijo de la base de datos
--db-port | Puerto de la base de datos
--exclude | Excluir los siguientes IDs de migración
--source-base_path | Directorio local que contiene los fuentes de su sitio (p.ej. /var/www/docroot), o la dirección de su sitio (for example http://example.com)

## Argumentos disponibles
Argumento | Detalles
---------|-------------
migration-ids | ID de migración
