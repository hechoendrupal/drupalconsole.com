---
title: 'Drupal Console and Drush collaboration efforts'
date: 2016-04-13
author: jmolivas
path: /articles/drupal-console-and-drush-collaboration-efforts
image: ../assets/2016-04/cover-command.png
tags:
  - Drupal
  - DrupalConsole
  - drupal8
---

The Drupal Console team has analyzed the proposal of one of the Drush co-maintainers in the blog post ["Modern Command Line Tools for Drupal"](https://pantheon.io/blog/modern-command-line-tools-drupal-modules-drush-and-drupal-console). We continue to agree to collaborate and share efforts to create libraries that any Drupal CLI project can take advantage of. With that said, we don’t agree with creating a new Drupalisim or a new Drupal way to write symfony/console based commands.

Why we do not agree with creating a new standard
------------------------------------------------

 ![standards xkcd](/../assets/inline-images/standards.png)*Image source *

Defining a new way of doing things is not necessary when there is a well accepted and defined standard provided and supported by the community. You can read the symfony/console component documentation [Creating a basic Command](http://symfony.com/doc/current/components/console/introduction.html), to learn about how to create command classes.

Drupal Console uses that standard, which has been tested for years and it is been widely supported by the Symfony and PHP communities. Here is a small list as example of CLI tools that uses symfony/console component:

- [Symfony Framework Bundle](https://github.com/symfony/framework-bundle)
- [Composer](https://github.com/composer/composer)
- [Doctrine](https://github.com/doctrine/doctrine2)
- [Sculpin](https://github.com/sculpin/sculpin)
- [Platform.sh CLI](https://github.com/platformsh/platformsh-cli)

For a full list of projects using symfony/console components, visit the [official site.](http://symfony.com/components/Console)

By embracing Symfony standards, we’re fully participating in the PHP community, building bridges and encouraging Symfony community to join the Drupal project and allow us to reduce the isolation of Drupal, which allow new developers that have experience with symfony/console project to easily contribute to Drupal CLI projects.

On the other hand, creating a new "Drupal" way of writing commands as proposed by the Drush team will have the opposite effect and will further alienate the community. Creating a new Drupalism for writing CLI commands also introduces a new learning curve and technical debt including standards maintenance.

We should embrace and collaborate with existing communities and take advantage of the ability to "learn once, apply everywhere".

The issue is not the introduction of annotations
------------------------------------------------

We have been discussing the usage of annotation long time ago, as you can follow on this issue [Use annotations in Commands](https://github.com/hechoendrupal/DrupalConsole/issues/478) and the related pull request [Annotations in Drupal Commands](https://github.com/hechoendrupal/DrupalConsole/pull/479).

The Drupal Console team proposal for using annotation was to define any Drupal only feature.

Our proposal for a Drush and Drupal Console collaboration
---------------------------------------------------------

There was a previous effort to work together in the pull request ["Call Drupal Console commands natively from Drush"](https://github.com/drush-ops/drush/pull/1337), but still not yet merged, unfortunately, this never got much attention and Drush team instead decided to work on a new pull request ["Use Symfony Console application and annotation commands in Drush"](https://github.com/drush-ops/drush/pull/2103).

In terms of sharing efforts and collaboration, we are working in decoupling Drupal Console features as components. Some of the advantages of extracting code as libraries will be:

- Isolate features to make packages small and easy to maintain.
- Reuse components between different Drupal CLI projects to avoid duplicated code.
- Provide functionality into packages outside of Drupal Console Core and Contrib modules.
- Propose to upstream improved features to symfony/console component.

To conclude, the Drupal Console team is open to collaborate with the Drush team. We strongly believe in using the standards defined by the Symfony community. This will help us to reduce the isolation of Drupal Community and at the same time, we will be following the modern PHP practices which were introduced in Drupal 8.

### **Related articles:**

- [\[policy\] Drupal and PSR-0/PSR-4 Class Loading](https://www.drupal.org/node/1971198#comment-8253693)
- [Getting off the island in 2013](http://www.garfieldtech.com/blog/off-the-island-2013)
- [Building Bridges, Linking Islands](https://dev.acquia.com/blog/building-bridges-linking-islands)

*Thanks to everyone that help us reviewing and fixing this article.*
