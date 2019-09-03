---
title: 'How to install Drupal Console'
date: 2016-02-04
author: jmolivas
path: /articles/how-to-install-drupal-console
image: ../assets/2016-02/drupalconsole-installer.png
tags:
  - DrupalConsole
  - DrupalPlanet
---

Here is a list of the required steps to properly install Drupal Console in your system.

1\) Download the latest project version  
 \[gist-embed data-gist-id="47a7f40e660154978b45" data-gist-file="install.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

2\) Test the downloaded file is working properly  
 \[gist-embed data-gist-id="47a7f40e660154978b45" data-gist-file="test-phar.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

![Execute phar](/../assets/inline-images/php-drupal-phar_0.png)

3\) Move to a globally accessing path on your system and apply it executable permissions

\[gist-embed data-gist-id="47a7f40e660154978b45" data-gist-file="mv-chmod.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

4\) Copy the provided configuration files to user home directory.

\[gist-embed data-gist-id="47a7f40e660154978b45" data-gist-file="init.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

![drupal init](/../assets/inline-images/drupal-init.png)

5\) Take advantage of command autocomplete feature.

\[gist-embed data-gist-id="47a7f40e660154978b45" data-gist-file="autocomplete.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

![drupal console autocomplete](/../assets/inline-images/drupal-autocomplete.png)

6\) Update to the latest version.

\[gist-embed data-gist-id="47a7f40e660154978b45" data-gist-file="self-update.sh" data-gist-hide-line-numbers="true" data-gist-show-loading="false"\]

That’s it, you sould have the DrupalConsole project installed and fully funcional on your system, make sure you ask any doubts or questions by commenting on this blog post.

- - - - - -

UPDATE (2016-02-09): If you are interested in making your terminal look as the images on this blog post, you can take a look at this post on my personal blog [Improve your shell using fish and oh my fish](http://jmolivas.com/improve-your-shell-using-fish-and-oh-my-fish)
