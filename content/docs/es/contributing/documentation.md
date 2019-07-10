# Contribuir a esta documentación
Esta documentación está en constante desarrollo y *usted es bienvenido para ponerse a trabajar y ayudar*. Simplemente, cree un fork del proyecto [Drupal Console Book](https://github.com/hechoendrupal/drupal-console-book "(esta documentación)") en GitHub. Si aún no ha contribuido nunca a un proyecto en Github, o todavía no está seguro de cómo proceder en la forma de trabajar, lea la documentación sobre [pull requests](https://help.github.com/articles/using-pull-requests/). 
Es posible que también le interese descargar la aplicación de GitHub para [Mac](https://mac.github.com) o [Windows](https://windows.github.com), que simplifica la forma de trabajar y le provee de una agradable interfaz de usuario a la hora de llevar a cabo sus contribuciones.

*Esta página es un punto de encuentro para traductores. Si usted lo es está invitado a editar esta página y dejar constancia de su opinión y trabajo.*

# Guía para traductores
Si usted desea ayudar en la traducción de este libro sea bienvenido. Por favor tenga en cuenta las siguientes directrices:

* Se evita el trato de «tú» y se prefiere siempre de «usted». Además, preferimos frases impersonales antes que interpelar al lector, siempre que sea posible.
* «Introduzca» suena mal en hispanoamérica e «ingrese» suena mal en España. Por ello, preferimos utilizar «proporcione» o «escriba».
* Preferimos usar «archivo» en lugar de «fichero».

# Generar traducidos todos los comandos disponibles
*Con el paso del tiempo, los programadores de DrupalConsole van añadiendo cada vez más comandos, por lo que faltarán algunos comandos disponibles en este libro si no se van generando conforme se van añadiendo. Para solucionar este problema, con sólo un comando es posible generar (ya traducidos) todos los archivos .md pertenecientes a todos los comandos disponibles en un momento dado*

## Comando para generar la docuentación de todos los comandos disponibles actualmente
Suponiendo que tenga en su máquina local clonados los dos proyectos (DrupalConsole y este libro), debe tener este repositorio [console-develop](https://github.com/weknowinc/drupal-console-develop) y ejecutar el siguiente comando desde un directorio donde esté Drupal instalado (o utilizando la opción *--root*):

``` drupal develop:doc:data --path=/path/directorio/drupalconsole.com/content/data/commands-es.json ```

(Por favor, compruebe que tiene DrupalConsole configurado previamente en su máquina en español para obtener todos los comandos en dicho idioma

Debe tener los siguientes modulos que activan los comandos ocultos para evitar sobreescribir los comandos existentes:
* [migrate](https://www.drupal.org/project/migrate)
* [features](https://www.drupal.org/project/features)
* [rest](https://www.drupal.org/docs/8/core/modules/rest)
* locale

[Los archivos se generarán en el idioma en el que tenga DrupalConsole configurado.])

___
*Por favor, si tiene dudas, disiente o quiere hacer una propuesta, ponga un issue en este repositorio o edite directamente esta página.*
