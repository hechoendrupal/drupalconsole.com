# How to translate Drupal Console (app & documentation)

In order to translate the book, first you need to translate the app strings. 
The book translates itself afterwards with a simple command.

### Cloning the required repos

You need to clone the following repos under the same parent folder (whatever it be)

- drupal-console-core
- drupal-console-develop
- drupal-console-en
- drupal-console-es _[or your language to translate]_
- drupal-console-launcher
- drupalconsole.com

### Create a new site ready to contribute
_(do this only the first time)_

```
$ drupal develop:contribute \
--drupal=/Users/leandro/Sites/translator \
--code=/Users/leandro/git/
```

Here we point out the site path with `--drupal` parameter and your cloned repositories path with parameter `--code`

### Link the repositories
_(do this only the first time)_

```
$ drupal develop:create:symlinks \
--code-directory=/Users/leandro/git/
```

`--code` parameter points out your repositories path

### Set Drupal Console in your language
`drupal settings:set language es`

### Go to your Drupal Console `config.yml` and set `develop:true`
_(do this only the first time)_


### Let's translate those strings

Ok, now you got an environment ready to translate, so first of all let's synchronize new string with the following command:

```
drupal develop:translation:sync
```

Then you want to remove not already necessary strings with:

```
drupal develop:translation:cleanup
```

Now, lets check what needs to be translated with:

```
drupal develop:translation:pending es
```

_`es` means spanish, change it according your language_

Right now, you can translate your strings, the .yml files live in `/config/translations`

Please, keep in mind the following guidelines:

- Be gender neutral.
- Code and examples should not be translated.
- Use a formal style. We prefer a formal tone.

Ok, so you translated all the app to your language, right? Now you want to know that the Documentation Book is translated automagically :-)

### Auto-generating the docs
Let's go for the documentation: you should have a repo called `drupalconsole.com` if not, clone it yourself:

```
git clone git@github.com:hechoendrupal/drupalconsole.com.git
```

Now the command for automagically translate it is:

```
drupal develop:doc:data --file=/Users/leandro/git/drupalconsole.com/content/data/commands-es.json
```

giving with the `--file` parameter the absolute path to the file `commands-LANGUAGE_CODE.json`

### Contribute your work
You're all done!!
Don't forget to make a pull request to the Drupal Console repos at Github including your language repo and the documentation repo!!
