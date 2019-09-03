---
title: 'How to download and install Drupal 8 using Drupal Console'
date: 2016-02-15
author: jmolivas
path: /articles/how-to-download-and-install-drupal-8-using-drupal-console
image: ../assets/2016-02/drupal-download-install.png
tags:
  - drupal8
  - DrupalConsole
  - DrupalPlanet
---

The Drupal Console project provides more that one method for download and installs Drupal 8. In this blog post I will list the steps to achieve this process.

### Download

1\) Using the interactive mode

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="site-new.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

![Drupal site new](/../assets/inline-images/drupal-site-new.png)

2\) Passing arguments inline

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="site-new-inline.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

![Drupal site new inline](/../assets/inline-images/drupal-site-new-inline.png)

### Install

1\) Using the interactive mode

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="site-install.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

![Drupal site install](/../assets/inline-images/drupal-site-install.png)

2\) Passing arguments inline

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="site-install-inline.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

![Drupal site install inline](/../assets/inline-images/drupal-site-install-inline_0.png)

### Download and install using one command

1\) Copy configuration files, including sample YAML files on your system.

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="init.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

![drupal init](/../assets/inline-images/drupal-init_1.png)

2\) Customize the provided sample file.

Open and edit on your preferred IDE or text editor the file `~/.console/chain/quick-start-mysql.yml`, make sure you set your database credentials properly.

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="quick-start-mysql.yml" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

3\) Execute the chain command.

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="chain-mysql.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

The previous configuration will execute several commands, in this case commands that will download and install Drupal using MySQL, and finally start the PHP's built in server, you only need to open your browser and point it to 127.0.0.1:8088.

![Drupal chain](/../assets/inline-images/drupal-chain.png)

NOTE: If you want to try Drupal 8 using SQLite and save time configuring your MySQL connection credentials, you can execute this instruction.

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="chain-sqlite.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

This instruction will use the provided chain file `~/.console/chain/quick-start.yml`.

\[gist-embed data-gist-id="c9b5db50a5654978b936" data-gist-file="quick-start.yml" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

As you can imagine you can take advantage of this to try Drupal 8 quick, use it on sprints, demos and trainings.

For more information about this feature you can visit the project documentation page [How to download, install and serve Drupal 8](https://hechoendrupal.gitbooks.io/drupal-console/content/en/using/how-to-download-install-and-serve-drupal8.html)

For instructions to install Drupal Console you can read my previous post [How to install Drupal Console](https://drupalconsole.com/articles/how-to-install-drupal-console).
