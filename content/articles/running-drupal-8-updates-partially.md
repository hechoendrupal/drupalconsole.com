---
title: 'Running Drupal 8 updates partially'
date: 2016-01-20
author: enzo
path: /articles/running-drupal-8-updates-partially
image: ../assets/2016-01/cover-update.png
tags:
  - drupal8
  - update
  - DrupalConsole
  - DrupalPlanet
---

If we are actively developing a web application that uses Drupal is normal that we require applies some changes in configuration, database structure or similar.

The proper way to do that is using the hook [hook\_update\_N](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Extension%21module.api.php/function/hook_update_N/8) and Drupal 8 is not the exception, of course, the proper way to apply this changes according the documentation is executing the script http://example.com/update.php

Using the Drupal Console project you can execute those update functions, but we include some interesting options to allow you a significant flexibility in your update process.

Let's imagine this scenario, we have two modules names example and samples and each one has some update function as you can see in the following snippets of code.

Firstly, check out the implementation of example & samples modules.

\[gist-embed data-gist-id="98b75e9689613bc54d5c" data-gist-file="example.php"\]

\[gist-embed data-gist-id="98b75e9689613bc54d5c" data-gist-file="samples.php"\]

Using Drupal Console we could determine what updates are pending to be applied in our system, using the command **update:debug** as you can see in the following image

 ![Update debug](/../assets/inline-images/console_update_debug.png)Until here, nothing special right. O.K, let's put the thing more interesting.

Imagine you want to execute the update 8001 for module samples, but, there is always a but, update function 8002 of module example has a PHP fatal error in their code and as is usual in real life that update is not critical right now in production, but function samples 8001 is critical. At this point, you are doing the maths to try to apply desperate measures.

Don't worry and don't do anything crazy, like an attempt to hack the core for instance. Using the options of command **update:****execute,** we can accomplish this task and resolve our problem as you can see in the following image.

The command to execution will be: $ drupal update:execute samples 8001

![Update execute by module and function](/../assets/inline-images/console_update_execute_module_N.png)

Now, you can celebrate and maybe you the hero of the day in your company.

As a bonus, let imagine another scenario. Do you remember the example module with three update functions, well now image we don't want to execute the last function for any purpose.

Using the same logic we could perform the following command **$ drupal** **update:execute** **example 8002**

Maybe you are expecting that update will be executed alone, but Drupal Console protects us from ourself. Becuase, executing update function ignoring the sequence could be a recall issue and could complete mess up with our data.

For that reason, the **update:execute** command will take your request and will execute any previous update function pending before to run your requested function, as can appreciate in the following image.

![Update execute with limit](/../assets/inline-images/console_update_execute_module_limit.png)

As you maybe infer, if we only provide the module name, all pending updated will be executed, and we don't provide a module all pending updated will be execute as well.

I hope you found this article useful.
