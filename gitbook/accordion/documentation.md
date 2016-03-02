# Accordion Documentation

### Usage
```
    <sc-accordion>
    
        <sc-accordion-item>
            <trigger>My first item</trigger>
            <content>
                <p>My content</p>
                <button>Click me</button>
            </content>
        </sc-accordion-item>
        
         <sc-accordion-item>
            <trigger>My second item</trigger>
            <content>
                <p>My second content</p>
            </content>
        </sc-accordion-item>
        
    </sc-accordion>
```

```<sc-accordion>``` is the parent element that will coordinate the accordion items. On item open, all the other accordions item with the same parent will be hidden.

```<sc-accordion-item>``` is an item. It contains ```<trigger>``` and ```<content>``` elements.


### Inputs

| **Name** | **Type** | **Element** | **Description** |
| -- | -- | -- | -- |
| default | boolean | sc-accordion-item | If the item is the default item, it will be opened on component creation. |


### Outputs

| **Name** | **Type** | **Element** | **Description** |
| -- | -- | -- | -- |
| on-open | function | sc-accordion-item | Callback triggered on details open |

### Transclusion

```<trigger>`` will be transcluded into the displayed part. On click, its details is toggled.

```<content>`` will be transcluded into the details part.

### Style customisation

//TODO