# Внести свой вклад в эту документацию
Эта документация находится в процессе перевода и *мы рады любой вашей помощи*. Просто создайте fork для [Drupal Console Book](https://github.com/hechoendrupal/drupal-console-book "(т.е. данной документации)") на GitHub. Если вы не участвовали прежде в каком-либо проекте на GitHub или вы не уверены как происходит рабочий процесс, пожалуйста, прочтите сначала документацию о [pull request](https://help.github.com/articles/using-pull-requests/). Также, вы можете скачать приложение GitHub.
([Mac](https://mac.github.com) | [Windows](https://windows.github.com), которое немного облегчает рабочий процесс и имеет удобный графический интерфейс для вашего участия.

*This page is a meeting point for translators. If you're one, consider yourself invited to edit this page and state constancy of your opinions and your work*

# Guide for translators
If you would like to help in the translation of this book, consider yourself welcome. Please, keep in mind the following guidelines:

* Be gender neutral.
* Code and examples should not be translated.
* Use a formal style. We prefer a formal tone.

# Generate translated all available commands
*Over time, DrupalConsole programmers add more and more commands, so it's possible some available commands weren't present in this book if they are not added to the book as they are added.
In order to solve this problem, with a single command is possible to generate (already translated) all the .json files belonging to all the available commands*

##Comand for generating documentation of all available commands currently
If you have cloned in your local machine both projects, DrupalConsole and this book, you should have this [console-develop](https://github.com/weknowinc/drupal-console-develop) repository and execute the following command from a directory where Drupal were installed (or using the *--root* option):

``` drupal develop:doc:data --path=/path/directorio/drupalconsole.com/content/data/commands-ru.json ```

(Please, check you have DrupalConsole correctly configured previously in your local machine in your desired language in order to get all the commands in your language.

 You must have the following modules that activate the hidden commands to avoid overriding existing commands:
* [migrate](https://www.drupal.org/project/migrate)
* [features](https://www.drupal.org/project/features)
* [rest](https://www.drupal.org/docs/8/core/modules/rest)
* locale

[Files will be generated in the language you have DrupalConsole configured])

___
*Please, in case of doubt, dissent or just if you want to make a proposal, please file an issue on this repository or edit directly this page.*