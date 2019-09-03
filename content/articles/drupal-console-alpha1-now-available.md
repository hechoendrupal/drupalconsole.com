---
title: 'Drupal Console alpha1 is now available'
date: 2016-04-21
author: jmolivas
path: /articles/drupal-console-alpha1-now-available
image: ../assets/2016-04/drupal-alpha1-cover_0.png
tags:
  - Drupal
  - DrupalConsole
  - drupal8
  - DrupalPlanet
---

We are so excited to announce the first Alpha release of Drupal Console. Almost three years of working on this project and after 84 releases, almost 86,000 downloads and the awesome help of 169 contributors we released the [1.0.0-alpha1](https://github.com/hechoendrupal/DrupalConsole/releases/tag/1.0.0-alpha1) version.

What is so great about this version 
------------------------------------

This release provides support for latest Drupal 8.1.0 version released on April the 20th. For more information and details about this Drupal release you can visit [Drupal](https://www.drupal.org/blog/drupal-8-1-0)[ 8.1.0 is now available](https://www.drupal.org/blog/drupal-8-1-0).

This release includes minor fixes and improvements and only one new feature. Support for placeholders on chain files, I will elaborate about this on another blog post, but if you are interested to know about this please visit the [issue 2055](https://github.com/hechoendrupal/DrupalConsole/issues/2055).

What is not so great about it
-----------------------------

Drupal 8.0.x is no longer supported. We are still trying to confirm if the [Embedded Composer](https://github.com/dflydev/dflydev-embedded-composer) project can help us with this issue. If this is not doable, we can open a discussion to find a better way to approach this issue.

How to update to this version
-----------------------------

Depending on the current version loaded on your system you can try to use the ***self-update*** command

\[gist-embed data-gist-id="a8a115bbc429267163a63da7419b31ca" data-gist-file="self-update.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

 ![Drupal self-update](/../assets/inline-images/drupal-self-update.gif)If the ***self-update*** command does not work, you can use the installer.

\[gist-embed data-gist-id="a8a115bbc429267163a63da7419b31ca" data-gist-file="installer.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

 ![Drupal installer](/../assets/inline-images/drupal-installer.gif)Finally, I just want to say thanks to all of you using, spreading the word and supporting this project. And a huge shout to each one of the 169 contributors, without your help this project would not be possible.

You can see their faces or avatars from the [contributors page](https://drupalconsole.com/contributors). If you know them, have a chance to meet them or know their twitter handler, please make sure to say thanks for their great work.
