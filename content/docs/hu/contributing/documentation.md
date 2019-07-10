# Contribute to this documentation
This documentation is a work-in-progress and *you are welcome to pitch in and help*. Simply fork the [Drupal Console Site](https://github.com/hechoendrupal/drupalconsole.com "(i.e. this documentation)") on GitHub. If you haven't yet contributed to a project on GitHub, or aren't still sure what the workflow looks like, read the documentation about [pull requests](https://help.github.com/articles/using-pull-requests/). You may also wish to download the GitHub application ([Mac](https://mac.github.com) | [Windows](https://windows.github.com), which simplifies the workflow a bit and provides a nice GUI for your contributions).

*This page is a meeting point for translators. If you're one, consider yourself invited to edit this page and state constancy of your opinions and your work*

# Guide for translators
If you would like to help in the translation of this book, consider yourself welcome. Please, keep in mind the following guidelines:

* Be gender neutral.
* Code and examples should not be translated.
* Use a formal style. We prefer a formal tone.

# Generate translated all available commands
*Over time, DrupalConsole programmers add more and more commands, so it's possible some available commands weren't present in this book if they are not added to the book as they are added.
In order to solve this problem, with a single command is possible to generate (already translated) all the .json files belonging to all the available commands*

Note: The files are located in ```/path/directorio/drupalconsole.com/content/docs/hu```

### Comand for generating documentation of all available commands currently
If you have cloned in your local machine both projects, DrupalConsole and this book, you should have this [console-develop](https://github.com/weknowinc/drupal-console-develop) repository and execute the following command from a directory where Drupal were installed (or using the *--root* option):

``` 
drupal develop:doc:data --path=/path/directorio/drupalconsole.com/content/data/commands-hu.json 
```

(Please, check you have DrupalConsole correctly configured previously in your local machine in your desired language in order to get all the commands in your language.

 You must have the following modules that activate the hidden commands to avoid overriding existing commands:
* [migrate](https://www.drupal.org/project/migrate)
* [features](https://www.drupal.org/project/features)
* rest (core module)
* locale (core module)
* taxonomy (core module)

[Files will be generated in the language you have DrupalConsole configured])

___
*Please, in case of doubt, dissent or just if you want to make a proposal, please file an issue on this repository or edit directly this page.*