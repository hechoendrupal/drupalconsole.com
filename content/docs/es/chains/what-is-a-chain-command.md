---
title: ¿Qué es un comando chain? 
---

Un comando `chain` es un comando personalizado que le ayuda a automatizar la ejecución de comandos múltiples, permitiéndole definir y leer un archivo YAML externo que contiene el nombre de definición, las opciones y argumentos de múltiples comandos y ejecutar esa lista basándose en la secuencia definida en el archivo.

## Características de los comandos chain:

### Descubrimiento de los archivos YAML
Los comandos chain son descubiertos si se encuentran en las siguientes rutas: 
* Globalmente * `~/.console/chain` 
* **Por sitio * ** `path/to/site/console/chain`

### Definir los comodines
Puede definir los comodines usando `{{name}}` y puede pasar un `--clave=valor` desde la consola como una opción de comando `--nombre=[VALOR]` al ejecutar el comando.

Si define comodines y no le pasa un valor usando la consola, el comodín será convertido en una pregunta durante la ejecución del modo interactivo.
```
commands:
  # Crear un proyecto Drupal usando DrupalComposer
  - command: exec
    arguments:
      bin: composer create-project {{repository}} {{directory}} --prefer-dist --no-progress --no-interaction
  # Instalar Drupal
  - command: exec
    arguments:
      bin: drupal site:install {{profile}} --root={{directory}} --db-type="sqlite" --no-interaction
  # Iniciar el servidor incorporado de PHP
  - command: exec
    arguments:
      bin: drupal server --root={{directory}}
```

### Establecer valores por defecto para los comodines
Se puede usar la sección `variables` para definir valores por defecto para los comodines.
```
vars:
  repository:
    - drupal-composer/drupal-project:8.x-dev
    - acquia/lightning-project
    - acquia/reservoir-project
  profile: standard
```

Puede definir comodines como un único valor o como un array. Esta definición será usada para decidir el tipo de pregunta que aparecerá al ejecutar este comando al usar el modo interactivo.

### Leer variables de entorno:
Puede leer variables de entorno usando `{{ env("ENVIRONMENT_VAR_NAME") }}`.
```
command:
  name: site:install:env
  description: 'Install site using environment placeholders'
commands:
  # Instalar Drupal
  - command: site:install
    options:
      langcode: en
      db-type: '{{ env("DATABASE_TYPE") }}'
      db-host: '{{ env("DATABASE_HOST") }}'
      db-name: '{{ env("DATABASE_NAME") }}'
      db-user: '{{ env("DATABASE_USER") }}'
      db-pass: '{{ env("DATABASE_PASSWORD") }}'
      db-port: '{{ env("DATABASE_PORT") }}'
      site-name: 'Drupal 8 site'
      site-mail: admin@example.org # default email
      account-name: admin # default account
      account-mail: admin@example.org # default email
      account-pass: admin # default pass
    arguments:
      profile: 'standard'
```
Todas las variables de entorno usadas en la definición de un comando chain son obligatorias.
