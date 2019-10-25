---
title: The Command Class
---

Custom Commands should extend any of the base Classes provided by the DrupalConsole Core project.

## Extending the Base `Command` class

By extending the provided Base `Command` Class, your command will be able to take advantage of the multi-language feature provided by DrupalConsole.

1.- Import the `Command` Class.

```php
use Drupal\Console\Core\Command\Command;
```

2.- Extend the imported `Command` Class.

```php
class DefaultCommand extends Command
```

## Extending the `ContainerAwareCommand` Class.

By extending the `ContainerAwareCommand` Class on your class for the command (instead of the more basic `Command`), you also have access to the service container.

In other words, you can access any configured Drupal service using the provided `get` method.

1.- Import the `ContainerAwareCommand` Class.

```php
use Drupal\Console\Core\Command\ContainerAwareCommand;
```

2.- Extend the imported `ContainerAwareCommand` Class.

```php
class DefaultCommand extends ContainerAwareCommand
```
