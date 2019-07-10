# Внести свой вклад в эту документацию
Эта документация находится в процессе перевода и *мы рады любой вашей помощи*. Просто создайте fork для [Drupal Console Site](https://github.com/hechoendrupal/drupalconsole.com "(т.е. данной документации)") на GitHub. Если вы не участвовали прежде в каком-либо проекте на GitHub или вы не уверены как происходит рабочий процесс, пожалуйста, прочтите сначала документацию о [pull request](https://help.github.com/articles/using-pull-requests/). Также, вы можете скачать приложение GitHub.
([Mac](https://mac.github.com) | [Windows](https://windows.github.com), которое немного облегчает рабочий процесс и имеет удобный графический интерфейс для вашего участия.

*Эта страница является местом встречи переводчиков. Если вы являетесь одним из них, приглашаем вас отредактировать эту страницу и выразить верность вашему мнению и вашей работе*

# Руководство для переводчиков #
Если вы хотели бы помочь в переводе этой книги, добро пожаловать. Пожалуйста, примите во внимание следующие рекомендации:

* Будьте нейтральны по отношению к полу.
* Код и примеры не должны переводиться.
* Используйте формальный стиль. Мы предпочитаем формальный тон.

Note: The files are located in `/path/directory/drupalconsole.com/content/docs/ru`

# Перевод всех доступных команд
*Со временем, программисты DrupalConsole добавляют все больше и больше команд, вполне возможно, что некоторые команды не были представлены в этой книге, если они были не добавлены по мере их появления.
Эту проблему можно решить, используя одну команду, которая сгенерирует все .md файлы (уже переведенные) для всех доступных команд*

### Comand for generating documentation of all available commands currently
If you have cloned in your local machine both projects, DrupalConsole and this book, you should have this [console-develop](https://github.com/weknowinc/drupal-console-develop) repository and execute the following command from a directory where Drupal were installed (or using the *--root* option):

``` 
drupal develop:doc:data --path=/path/directory/drupalconsole.com/content/data/commands-ru.json 
```

(Пожалуйста, проверьте, что DrupalConsole корректно сконфигурирован локально для предпочитаемого языка, чтобы получить все команды на вашем языке.

 You must have the following modules that activate the hidden commands to avoid overriding existing commands:
* [migrate](https://www.drupal.org/project/migrate)
* [features](https://www.drupal.org/project/features)
* rest (core module)
* locale (core module)
* taxonomy (core module)

[Файлы будут сгенерированы на языке, который был использован для конфигурации DrupalConsole])

___
*Пожалуйста, в случае сомнения, несогласия или если вы просто хотите предложить изменение, пожалуйста, напишите о проблеме в этом репозитории или отредактируйте непосредственно эту страницу*