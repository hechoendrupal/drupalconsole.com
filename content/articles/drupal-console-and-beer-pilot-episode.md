---
title: 'Drupal Console and Beer - Pilot Episode'
date: 2016-03-25
author: jmolivas
path: /articles/drupal-console-and-beer-pilot-episode
image: ../assets/2016-03/Untitled-2_0.png
tags:
  - Drupal
  - DrupalConsole
  - DrupalPlanet
---

We are starting a weekly hangout “Drupal Console and Beer” our goal is to keep you informed about changes on Drupal Console project. In this article, we will provide you some of the content that we discuss during the video.

   ### Tagged releases

- 0.10.13 - 
- 0.10.14 - 

### Attended events

Eduardo Garcia aka enzo is been traveling the world since DrupalCon Asia visiting several cities, you can see the full tour at [Around the Drupal World in 120 Days](http://enzolutions.com/articles/2016/01/19/around-the-drupal-world-in-120-days/)

Jesus Manuel Olivas & Darryl Norris attended SandCamp and DrupalCamp Florida.

Our goal is to attend as many Drupal events as we can and organize Drupal Console contribution sprints.

### Contributions

During SandCamp we wrote the "config:delete" command [\#1366](https://github.com/hechoendrupal/DrupalConsole/issues/1366), [\#1984](https://github.com/hechoendrupal/DrupalConsole/pull/1984), which it was a very requested feature that allows you to remove a configuration. As well as improving some of the configuration and state commands. We also wrote "state:delete" [\#1968](https://github.com/hechoendrupal/DrupalConsole/issues/1968), [\#1985](https://github.com/hechoendrupal/DrupalConsole/pull/1985), which allow you to delete a state from your Drupal site.

During DrupalCamp Florida, we have a chance to have a sprint and teach people how to contribute, during this session we receive two Pull Requests.

- New command "generate:plugin:ckeditorbutton" [\#1999](https://github.com/hechoendrupal/DrupalConsole/pull/1999) by [Mauricio Dinarte](https://twitter.com/dinarcon). There are few modules that have been created when this pull request was been tested.
  
  
  - [https://www.drupal.org/project/ckeditor\_font](https://www.drupal.org/project/ckeditor_font)
  - [https://www.drupal.org/project/ckeditor\_loremipsum](https://www.drupal.org/project/ckeditor_loremipsum)
  - [https://www.drupal.org/project/ckeditor\_smiley](https://www.drupal.org/project/ckeditor_smiley)
  - [https://www.drupal.org/project/ckeditor\_videodetector](https://www.drupal.org/project/ckeditor_videodetector)
- Autoload Generator classes defined within themes. [\#1997](https://github.com/hechoendrupal/DrupalConsole/pull/1997)[ ](https://github.com/hechoendrupal/DrupalConsole/pull/1997)by [Marc Drummond](https://twitter.com/MarcDrummond)

MidCamp we won’t able to attend personally but Mauricio Dinarte was representing the Drupal Console team and did a great job during the sprint to improve the project Spanish translation to 98.75%, increasing by almost 12%. On the previous release Spanish translation was 87.7% completed.

### We are we going next?

- March 26 enzo will be talking about Drupal Console at [DrupalCamp China](https://groups.drupal.org/node/499003)
- April 2 - Darryl Norris is going to be attending to Stanford Drupal Camp, he will be talking about debugging Drupal with Drupal Console. 
- April 7 to 9 Jesus Manuel Olivas and Omar Aguirre are attending to [DrupalCamp Guadalajara](http://www.drupalcampgdl.com/) to talk about Drupal Console and the Electron Desktop Application.

For more information about where we are going and where will we be talking about Drupal Console visit our events page - 

### Known issues

Dependency hell: Drupal 8.1.x will be released with a different version of Symfony components than 8.0.x, this introduces several problems, related issues listed here:

- Built-in version control system [\#1408](https://github.com/hechoendrupal/DrupalConsole/issues/1408)
- Decide when to require Drupal 8.1 [\#2022](https://github.com/hechoendrupal/DrupalConsole/issues/2022)
- Avoid using symfony/dependency-injection [\#2061](https://github.com/hechoendrupal/DrupalConsole/issues/2061)

Novice issues: We are tagging easy to resolve issues as novice, if you are interested in taking care in one of these issues, feel free to ping us for help at our [support channel](https://gitter.im/hechoendrupal/DrupalConsole)

- \[console\] Update CLI output style [\#1986](https://github.com/hechoendrupal/DrupalConsole/issues/1986)
- \[generate:theme\] Base theme examples should be classy and stable [\#1431](https://github.com/hechoendrupal/DrupalConsole/issues/1431)

### Upcoming and planned features

- Use chain as actual command [\#1898 ](https://github.com/hechoendrupal/DrupalConsole/issues/1898)
- Allow chain commands to have placeholders (question) [\#2055](https://github.com/hechoendrupal/DrupalConsole/issues/2055)
- Add a FieldTrait - [\#2058](https://github.com/hechoendrupal/DrupalConsole/pull/2058)
- Drupal Console Desktop Application, define a basic UI [\#5](https://github.com/hechoendrupal/drupal-console-desktop/issues/5)

### Wrapping things up

In this episode for some reason during the first 30 minutes, you only see Darryl but that got fixed when we start sharing our screens. However, we still discussing Drupal Console.

Please feel free to send us your comments about this episode and what do you like to see on upcoming episodes, maybe you want to know about a feature of Drupal Console or want to see a demo of a command, just let us know and we will try to include it.
