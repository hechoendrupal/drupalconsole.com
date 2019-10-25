---
title: Getting Services from the Service Container
---

You can access services from the service container by:

### Injecting services to the command Class

Using the `arguments` section when registering your Command class at the `console.services.yml` file.

```yaml
services:
  example.example_default:
    class: Drupal\example\Command\DefaultCommand`
    arguments: ['@entity_type.manager']
    tags:
      - { name: drupal.command }
```

Adding a new protected property.

```php
  /**
   * The $entityTypeManager definition.
   *
   * @var EntityTypeManager
   */
  protected $entityTypeManager;
```

Passing the service using the `__construct` method.

```php
  /**
   * Constructs a new DefaultCommand object.
   */
  public function __construct(EntityTypeManager $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
    parent::__construct();
  }
```

### Extending the `ContainerAwareCommand` base Class on your Command class.

By doing this you have access to the service container, in other words, you have access to any configured service using the provided `get` method.

```php
protected function execute(InputInterface $input, OutputInterface $output)
{
    $uid = $input->getArgument('uid');
    $entityTypeManager = $this->get('entity_type.manager');;
    if ($entityTypeManager) {
        $user = $entityTypeManager->getStorage('user')->load($uid);
    }
}
```
