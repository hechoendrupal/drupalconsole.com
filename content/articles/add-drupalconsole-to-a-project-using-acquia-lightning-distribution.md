---
title: 'Add DrupalConsole to a project using Acquia Lightning distribution'
date: 2016-11-28
author: jmolivas
path: /articles/add-drupalconsole-to-a-project-using-acquia-lightning-distribution
image: ../assets/2016-11/drupal-console-lightning-blog-header_0.png
tags:
  - Drupal
  - drupal8
  - DrupalPlanet
---

Lightning is a base distribution maintained by Acquia. In this short blog post you will learn how to fix the dependency conflicts when trying to add DrupalConsole to a project using the Lightning distribution.

Lightning distribution repository at github 

Link of the reported issue between dependencies of the Lightning distribution and DrupalConsole 

### Download Lightning distribution

\[gist-embed data-gist-id="c5c6cda0640555becc618d9e64690560" data-gist-file="install-lightning.bash" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

As you can read we are passing the `--no-install` flag, this will skip installation of the package dependencies, and it is required to avoid the conflict between dependencies.

### Download DrupalConsole

According to project instructions at [readme](https://github.com/hechoendrupal/DrupalConsole/#download-as-new-dependency) file.

\[gist-embed data-gist-id="c5c6cda0640555becc618d9e64690560" data-gist-file="install-drupal-console.bash" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

This command will add the DrupalConsole dependency to the composer.json file and then resolve and download Lightning + DrupalConsole.

### Download DrupalConsole on a current project based on Lightning distribution

If you already have a project using the Lightning distribution then you can download DrupalConsole by executing

\[gist-embed data-gist-id="c5c6cda0640555becc618d9e64690560" data-gist-file="install-drupal-console-no-update.bash" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

By using the `--no-update` flag we are disabling the automatic update of the dependencies.

Finally just execute the following composer command to update project dependencies.

\[gist-embed data-gist-id="c5c6cda0640555becc618d9e64690560" data-gist-file="composer-update.bash" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

Thanks to Adam Balsama for this recommendation at the [issue](https://github.com/acquia/lightning-project/issues/15#issuecomment-263377964).
