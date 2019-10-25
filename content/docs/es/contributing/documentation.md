---
title: How to translate Drupal Console (app & documentation)
---

Para poder traducir la documentación, primero debe traducir las cadenas de texto de la aplicación.

El libro se traduce después por si mismo con un simple comando.

### Clonar los repositorios necesarios

Necesita clonar los siguientes repositorios, todos bajo un mismo directorio (sea éste el que usted elija).

- drupal-console-core
- drupal-console-develop
- drupal-console-en
- drupal-console-_CODIGO-IDIOMA-A-TRADUCIR_
- drupal-console-launcher
- drupalconsole.com

### Crear un nuevo sitio dedicado a traducir
_(haga esto sólo la primera vez)_

```
$ drupal develop:contribute \
--drupal=/Users/leandro/Sites/translator \
--code=/Users/leandro/git/
```

En este comando indicamos la ruta al sitio con el parámetro `--drupal` y la ruta a sus repositorios clonados con el parámetro `--code`

### Enlazar los repositorios
_(haga esto sólo la primera vez)_

```
$ drupal develop:create:symlinks \
--code-directory=/Users/leandro/git/
```

el parámetro `--code` indica la ruta a sus repositorios

### Configure Drupal Console en su idioma
`drupal settings:set language es`

### Vaya a su archivo `config.yml` de Drupal Console y configure el siguiente valor `develop:true`
_(haga esto sólo la primera vez)_


### ¡Traduzcamos esas cadenas!

Ahora usted cuenta con un entorno listo para traducir; lo primero que necesita es sincronizar las cadenas nuevas con el siguiente comando:

```
drupal develop:translation:sync
```

Después conviene eliminar las cadenas que ya no son necesarias con:

```
drupal develop:translation:cleanup
```

Ahora vamos a examinar lo que necesita ser traducido con:

```
drupal develop:translation:pending es
```

_`es` significa idioma español, cámbielo según su idioma_

Llegados a este punto, usted ya puede traducir sus cadenas. Los archivos .yml se encuentran en `/config/translations`

A la hora de traducir, por favor, tenga en cuenta las siguientes consideraciones:

- Utilice un género neutral.
- El código y los ejemplos no se traducen.
- Utilice un estilo formal. Se prefiere un tono serio y preferimos el "usted" al "tu".

En este momento usted debería haber traducido la aplicación por completo a su idioma. Ahora debe saber que la documentación se traduce sola :-)

### Auto-generando la documentación
Debería tener un repositorio correspondiente a  `drupalconsole.com` Si no lo tiene, clónelo usted mismo con el siguiente comando:

```
git clone git@github.com:hechoendrupal/drupalconsole.com.git
```

Ahora el comando para traducir automágicamente es:

```
drupal develop:doc:data --file=/Users/leandro/git/drupalconsole.com/content/data/commands-es.json
```

indicando en el parámetro `--file` la ruta absoluta al fichero `commands-LANGUAGE_CODE.json`

### Contribuya su trabajo

Si ha tenido éxito hasta aquí, podemos decir que ha terminado!!

No olvide realizar un Pull Request a los repositorios de Drupal Console en Github incluyendo el repositorio del idioma al que traduce y el repositorio de documentación!!
