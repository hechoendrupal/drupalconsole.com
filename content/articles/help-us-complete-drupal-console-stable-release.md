---
title: 'Help us complete the Drupal Console stable release'
date: 2016-06-14
author: druprompt
path: /articles/help-us-complete-drupal-console-stable-release
image: ../assets/2016-06/accelerate-drupalconsole.png
tags:
  - Drupal
  - DrupalConsole
  - DrupalPlanet
  - drupal8
---

If you are reading this you maybe are aware or have an idea what the Drupal Console is, but in case you are not; this is a brief explanation.

Drupal Console is “The new CLI for Drupal”. A tool to generate boilerplate code, interact with and debug Drupal.

For more detailed information about this, you can visit the following links:

- [Drupal Console: An Overview of the New Drupal CLI](https://ffwagency.com/blog/drupal-console-an-overview-of-new-drupal-cli)
- [Drupal Console by the numbers](https://drupalconsole.com/articles/drupal-console-by-numbers)

Why are we asking for help?
---------------------------

The Drupal Console as many other Open Source projects is created and maintained with the effort and free time of contributors and maintainers, which is great but, sometimes the community requires those tools earlier than the contributors can produce using only in their own time.

One example of that is the [Drupal 8 Accelerate program](https://assoc.drupal.org/d8accelerate), [d8rules funding program](http://d8rules.org/), and [D8 Module Acceleration Program](https://www.acquia.com/d8-module-acceleration-program) with the aim to bring to the community those products as soon as possible, getting money to sponsor contributors office hours to complete those products.

Our situation is not so different from other projects, even though the core maintainers have some hours per week sponsored by our employer or business. But this time is not enough, and we need to use our personal time to continue with the development.

We need to assign more time to check the issue queue, currently with 200+ pending issues and feature requests, to provide support on the [Gitter channel](https://gitter.im/hechoendrupal/DrupalConsole), to do a much better work with the documentation, and improve the test coverage.

Therefore, we need some financial assistance to try to deliver our first stable release as soon as possible.

Why is the stable release important for the Drupal Community?
-------------------------------------------------------------

On Nov 19th of 2015, after almost five years of development Drupal 8 was released. Now that the Drupal 8 API is stable, some parts of Drupal Console need to be updated. We are also currently refactoring the Drupal Console internals to be more flexible and maintainable.

The Drupal Console project has been evolving, and a good sign of trust is the number of companies using and talking about it:

- [Amazee Labs](https://github.com/hechoendrupal/DrupalConsole/issues/2180)
- [Acquia](https://www.acquia.com/resources/webinars/fast-paced-drupal-8-accelerating-development-composer-drupal-console-and-services)
- [Lullabot](https://www.lullabot.com/podcasts/drupalizeme-podcast/drupal-console) / [Drupalizeme](https://drupalize.me/blog/201507/learning-drupal-8-boilerplate-code)
- [Media Current](https://www.mediacurrent.com/tags/drupal-console)
- [Commerce Guys](http://docs.drupalcommerce.org/v2/install.html)
- [Phase2](https://www.phase2technology.com/blog/announcing-phase2s-2015-drupalcon-lineup/)
- [Four Kitchens](http://fourkitchens.com/blog/article/stanford-drupalcamp-2016)

(Please send us your post to include.)

For that reason, the Drupal Console core maintainers are defining goals to for next month(s)

Our goals?
----------

Below the list of our goals in order of importance

### Dependency isolation

Allow Drupal Console installation per project basis, instead of a global phar file.

A new project was created [drupal-console-launcher](https://github.com/hechoendrupal/drupal-console-launcher) to use as global executable to detect which site to execute Drupal Console executed against.

### Composer support

Migrate current composer logic for the commands site:new, module:download, module:update, theme:download, and theme:update to the new [drupal-console-launcher](https://github.com/hechoendrupal/drupal-console-launcher) project.

### Configuration Workflow

Create a new set of commands to export and import the difference between active site configuration and the configuration stored in the file system. This can be used to extend the Drupal 8 configuration management to manage settings unique to certain environments. Examples could include different solr search cores on production or pulling data from a different REST url in local development.

### Annotations

Add support for annotations to provide metadata on commands to specify Drupal related requirements or features such as Drupal module dependencies, or Drupal bootstrap level.

### Commands as Services

Implement logic in Drupal Console core to enable commands to be independent services that could be loaded as services in the Drupal service container.

Registering commands as services allows us to use commands in a variety of new ways. For example, we could inject dependencies instead of having to access the full Drupal container, or call commands within Drupal site cron or update execution.

### Decoupling languages

Enable the usage of composer to register current and new languages for translation., This change requires a new custom composer package. This decoupling will help to reduce the size of the Drupal Console project and to make easy to maintain each language.

### Migrations

Repair and update the migration commands to use the new logic added in Drupal 8.1, which changed migrations to be plugins.

How you can help?
-----------------

### Are you a business owner?

As a business owner has your company already leveraged the advantages of Drupal Console? Will Drupal Console will play a significant role in your business plan for your immersion in Drupal 8?

You can contribute to complete the Goals for our 1.0.0 stable release by assigning 1 or more of your resources to work in office hours to complete the pending tasks.

### Are you an independent developer?

If you are an independent developer you can help us as well by allocating some hours. We always have issues to resolve and none of them are rocket science!

You are still here and we have your attention–what is the next step?
--------------------------------------------------------------------

All you have to do is fill this contact form:



Please add your information and providing the amount of hours per week you can offer and your contact details or the one for your developer(s) and we will provide the guidelines to start to contribute to the project.

What do you get in exchange?
----------------------------

- An unmeasurable quantity of good Karma points
- Prepare and train your team or yourself in Drupal 8 and Symfony applications at the same time.
- Promote your company as an active contributor of the Drupal and PHP ecosystem.

Which companies are currently supporting the project?
-----------------------------------------------------

[![](http://www.drupal.org/files/ffw-logo.png)](https://ffwagency.com/ "FFW") [![](http://www.drupal.org/files/anexus-logo.png)](http://www.anexusit.com/ "Anexus") [![](http://www.drupal.org/files/indava-logo.png)](http://www.indava.com/ "Indava")

Feel free to ask any questions or add any comments on this article.
