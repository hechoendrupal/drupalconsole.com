# generate:post:update
Generar una implementación de hook_post_update_NAME()

**Uso:**
```
drupal generate:post:update [options]
gpu
```

## Opciones disponibles
Opción | Detalles
-------|-------------
--module | Nombre del módulo.
--post-update-name | Nombre Post Actualización

## Ejemplos
* Generar una implementación del hook post_update especificando el nombre del módulo y el nombre de post_update
```
drupal generate:post:update  \
  --module="modulename"  \
  --post-update-name="PostUpdateName"
```
