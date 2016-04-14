# <%= widget.description %> Documentation

### Usage

```html
    <<%= widget.selector %>>
        //TODO insert inputs, outputs and transclusion usage
    </<%= widget.selector %>>
```

> *TODO* if there are multiple components in the widget, describe the parts/subparts

> Example : 

> ```<sc-accordion>``` is the parent element that will coordinate the accordion items. On item open, all the other accordions item with the same parent will be hidden.

> ```<sc-accordion-item>``` is an item. It contains ```<trigger>``` and ```<content>``` elements.


### Inputs

> *TODO* add every inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- | -- |
|  |  | <%= widget.selector%> |  |  |


### Outputs

> *TODO* add every outputs

| **Name** | **Type** | **Element** | **Description** |
| -- | -- | -- | -- |
|  | function | <%= widget.selector%> |  |

### Transclusion

> *TODO* add transclusion points

> Example : 

> ```<trigger>`` will be transcluded into the displayed part. On click, its details is toggled.

> ```<content>`` will be transcluded into the details part.

### Style customisation

> *TODO* add Sass variables that can be overridden to customise the component

| **Name** | **Default** | **Description** |
| -- | -- | -- |
|  |  |  |