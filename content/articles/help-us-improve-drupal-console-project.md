---
title: 'Help us improve the Drupal Console project  '
date: 2019-06-06
author: druprompt
path: /articles/help-us-improve-drupal-console-project
image: ../assets/2016-06/accelerate-drupalconsole.png
tags:
  - Drupal
  - DrupalConsole
  - DrupalPlanet
  - drupal8
---

Like any other open source project, the Drupal Console team defines the vision and roadmap of the project based on their own needs and their vision about that would be useful or helpful to have.

---

Also, we (the drupal console team) receive a lot of feedback from users through our participation in events such as DrupalCons, DrupalCamps, and meetups around the world, however, this type of communication has a bottleneck that prevents us from getting as close to the community as we would like.

For that reason, we want to ask you to help us get to know more about how the Drupal Console project has had an impact on your life as a Drupal user (developer or not). Let us share several initiatives we have in that matter.flow

### How code generators impact your work?

The Drupal Console project is divided into four groups of features: Code Generation, Debugging, Automation (Chain) and Administration.

This week we are launching a campaign to try to determine how many hours of development are saved by using Drupal Console generators.

~~If you would like to participate, go ahead and access the poll through [Facebook](https://www.facebook.com/317073868632727/posts/941809122825862?s=584110186&sfns=mo), [Twitter](https://twitter.com/weknowinc/status/1136378139398066181) or only by vote using the Drupal Console site. [https://drupalconsole.com/poll/1](https://drupalconsole.com/poll/1)~~

### Learning about our customers

Contributing to open source project is more complex than it seems, and defining the roadmap and features that will be most useful for users is not an easy task. We base those decisions in our needs and our vision in combination with the ideas we got from our issue queue.

The contributing team has been thinking about ways we could prioritize all those ideas in order to work precisely in something that truly impacts how users use the Drupal Console project.

Well, we realized that what we need is usage statistics but before we can get stats we need data. So how can we get that data, especially in the days where privacy awareness is in the spotlight? Our approach to this is to include a new feature that allows Drupal Console users to share some usage statistics, starting in version 1.9.0.

Don't worry, all the collected information will be anonymous and the featured can be easily disabled at any time.

### What information will be gathered?

We only need and will be going to collect very high-level information.

* What commands are executed?
* Which language you use to run Drupal Console, i.e., English, Spanish, Japanese.
* If you run a generator command, how many lines of code were generated.

You can read the [privacy policy](/privacy-policy) page.

### Where is this information stored?

The configuration to collect or not information about statistics,  and, the information is stored in your User Home Directory + Drupal Console configuration folder which is located at **_~/.console/_**.

The approach avoids logging statistics in production mode because, when Drupal projects are pushed to production servers, the configuration related to statistics remains in your local, in the future when the Drupal project handle environment configuration like Symfony we could make a different approach.

It will create a folder named ‘stats’ inside your User Home Drupal Console folder, in that folder, you will find files with the format \[date\]-\[status\].csv, where the date is the day when information is collected, and status refers to whether the file has been sent or still pending.

### How and how often the information is sent?

Once the data is collected, pending files are sent a single time per day and then processed on the server by creating an aggregation report of your usage.

### How to enable/disable sharing my usage of Drupal Console?

If you want to contribute with your data, simply update Drupal Console to version 1.9.x and run the following command:

```bash
drupal init
```

To enable the statistics and other configurations.

If you already have the Drupal console configured, you can enable or disable using the following commands:

```bash
drupal settings:set share.statistics true
```

In case you want to stop sharing, simply execute the following command:

```bash
drupal settings:set share.statistics false  
```

### Show me how this information is collected?

If you are still sceptical about how this information is collected and processed, don’t worry, remember that Drupal Console is an open source project, which means there is nothing to hide.

To see how the data is aggregated and where it gets sent, feel free to check the integration [here](https://github.com/hechoendrupal/drupal-console-core/pull/342/files) in Drupal Console core repository.

### Spread the word

If you would like to contribute even more, please help us by promoting the feature among your peers as well as in your social networks.

All collected information will help us shape Drupal Console 2.0 and beyond.

If you decided to support the initiative, be sure you are truly contributing to Drupal Console, a contribution is not only a matter of coding.
