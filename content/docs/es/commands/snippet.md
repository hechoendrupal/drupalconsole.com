# snippet
Ejecuta código PHP

**Uso:**
```
drupal snippet [options]
```

## Opciones disponibles
Opción | Detalles
-------|-------------
--file | Ruta al archivo
--code | Código a ejecutar
--show-code | Mostrar el código después de la ejecución

## Ejemplos
* Ejecutar usando un archivo
```
drupal snippet --file=/path/to/file
```
* Pasar código como opción
```
drupal snippet --code=codeToExecute
```
* Mostrar código ejecutado
```
drupal snippet --show-code --file=/path/to/file
```
