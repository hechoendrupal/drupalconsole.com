# مشارکت در مستندسازی
این مستندات به صورت یک سند زنده ارائه می‌شوند و از *حضور شما به منظور کمک‌رسانی* به آن استقبال بعمل می‌آید. تنها کافی است [کتاب کنسول دروپال](https://github.com/hechoendrupal/drupalconsole.com) را از روی گیت‌هاب fork کنید. اگر تاکنون در پروژه‌ای از گیت‌هاب مشارکت نکرده‌اید، یا اطمینان ندارید که با این گردشگار آشنا هستید، شاید اول بخواهید نگاهی به مستندات درباره [pull requests](https://help.github.com/articles/using-pull-requests/) بیندازید. شاید تمایل داشته باشید که برنامه رومیزی گیت‌هاب ([Mac](https://mac.github.com) یا [Windows](https://windows.github.com)) را نصب کنید، که اندکی این گردشکار را آسان کرده و از ظاهر گرافیکی بهتری برخوردار است.

*This page is a meeting point for translators. If you're one, consider yourself invited to edit this page and state constancy of your opinions and your work*

# Guide for translators
If you would like to help in the translation of this book, consider yourself welcome. Please, keep in mind the following guidelines:

* Be gender neutral.
* Code and examples should not be translated.
* Use a formal style. We prefer a formal tone.

Note: The files are located in `/path/directory/drupalconsole.com/content/docs/fa-ir`

# Generate translated all available commands
*Over time, DrupalConsole programmers add more and more commands, so it's possible some available commands weren't present in this book if they are not added to the book as they are added.
In order to solve this problem, with a single command is possible to generate (already translated) all the .json files belonging to all the available commands*

### Comand for generating documentation of all available commands currently
If you have cloned in your local machine both projects, DrupalConsole and this book, you should have this [console-develop](https://github.com/weknowinc/drupal-console-develop) repository and execute the following command from a directory where Drupal were installed (or using the *--root* option):

``` 
drupal develop:doc:data --path=/path/directory/drupalconsole.com/content/data/commands-fa-ir.json
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