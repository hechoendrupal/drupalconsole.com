---
title: 'RC-9'
date: 2016-11-14
author: jmolivas
path: /changelog/rc-9
redirect: /articles/drupal-console-rc-9-out
image: ../assets/2016-11/drupal-alias-finder_0.png
tags:
  - DrupalConsole
  - drupal8
  - DrupalPlanet
---

Latest DrupalConsole rc-9 is out including several changes and fixes.

#### Support for command aliases

Aliases for commands added making easy to memorize by typing less. You can find aliases definition at 

#### Support to execute the DrupalConsole Launcher on Windows platform

This PR [https://github.com/hechoendrupal/drupal-console-launcher/pull/51]( https://github.com/hechoendrupal/drupal-console-launcher/pull/51) fixes the `\\vendor\\bin\\drupal.php` file not found error.

#### Execute DrupalConsole from any directory within your Drupal site

No need to stay at site root directory. You can now switch to any directory as modules, themes, web/modules/custom or any other directory within your Drupal site. This was possible using the DrupalFinder project 

**NOTE**: Having a configuration file containing `root: web` on the site is no longer required. You can keep the file but is required to remove that value from your `path/to/drupal8/console/config.yml`

#### Improvements on the `init` command 

The interactive mode for the init command now ask you and show a list of directories where to copy the configuration files.


**Update instructions:**

\[gist-embed data-gist-id="a0970e1ea252ecb852fe8c7182d85d3e" data-gist-file="instructions.md" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]
