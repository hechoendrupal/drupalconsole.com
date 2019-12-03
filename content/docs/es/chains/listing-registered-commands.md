---
title: Listando todos los comandos registrados
---

Para inspeccionar los comandos _chain_ descubiertos por la aplicación puede utilizar el comando `debug:chain`.

```
 Directorio /path/to/drupal8.dev/vendor/drupal/console-core/config/chain/
 ------------------------ --------------------
  Nombre de archivo.        Nombre de Comando.
 ------------------------ --------------------
  develop-contribute.yml   develop:contribute
  quick-start.yml          quick:start
  site-new.yml             site:new
 ------------------------ --------------------

  Directorio /path/to/drupal8.dev/console/chain/
 -------------------------- ----------------------
  Nombre de archivo.            Nombre de Comando.
 -------------------------- ----------------------
  build.yml                  build
  cache-rebuild-custom.yml   cache:rebuild:custom
  custom-test.yml
 -------------------------- ----------------------
```

Si hubiera algún comando _chain_ descubierto pero aún no registrado como comando normal, debería ver un mensaje como el siguiente.

```
/path/to/drupal8.dev/console/chain/custom-test.yml
 * Debería registrar su archivo chain como comando indicando sus metadatos; más información en:
   https://docs.drupalconsole.com/es/chains/registering.html
```
