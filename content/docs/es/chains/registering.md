---
title: Registrando comandos _chain_ como comandos normales
---
La definición de los comandos chain puede contener metadatos que los hagan ser descubiertos y registrados por DrupalConsole, de modo que puedan ser ejecutados como cualquier otro comando normal y corriente.

Para registrarlos como un comando normal tiene que añadir una sección `command` que contenga un `name` y una `description`.

```
command:
  name: build
  description: 'Build site'
vars:
  profile:
    - standard
    - minimal
commands:
  # Install site
  - command: site:install
    options:
      force: true
    arguments:
      profile: "{{ profile }}"
  # Import configuration
  - command: config:import
    options:
      skip-uuid: true
  # Rebuild caches.
  - command: cache:rebuild
    arguments:
        cache: all

```

En el caso de este ejemplo, después de añadir la sección `command` debería ver un nuevo comando `build` listado al lanzar el comando `list`.
