---
title: 'The DrupalConsole Launcher is a stand-alone full CLI application.'
date: 2017-06-27
author: jmolivas
path: /articles/drupalconsole-launcher-a-stand-alone-full-cli-application
image: ../assets/2017-06/drupal-list-no-drupal.png
tags:
  - Drupal
  - drupal8
  - DrupalConsole
  - DrupalPlanet
---

On the latest DrupalConsole release the Launcher aka the global executable is a stand-alone full CLI application. Yes, it was like this before, but at some point on RC releases when the per-site installation was introduced we removed global commands and most of the Launcher features, but after receiving feedback and analyzing the benefits, we decided to bring back the Launcher as a full CLI application.

### What are the benefits?

- Availability for global commands as init, check, chain, exec among others.
- Load and share global configurations from the ~/.console/config.yml file.
- Discover chain files at ~/.console/chain/ directory.
- Load custom chain commands as site:new, quick:start and provide the ability to add custom global chain commands.
- Support for command autocompletion.

### What will change related to Launcher execution?

So far nothing. You are still able to run the command drupal from any directory within your site project or use --root option to specify your Drupal project directory.

### How to try this feature?

Make sure you update the DrupalConsole and Launcher to the latest version by executing:

\[gist-embed data-gist-id="a0970e1ea252ecb852fe8c7182d85d3e" data-gist-file="instructions.md" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]
