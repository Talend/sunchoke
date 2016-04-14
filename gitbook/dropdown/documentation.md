# Dropdown Documentation

### Usage

```html
    <sc-dropdown close-on-select="false" on-open="open()" side="left">
        <sc-dropdown-trigger>
            Click Me !
        </sc-dropdown-trigger>
        <sc-dropdown-content>
            Dropdown content
        </sc-dropdown-content>
    </sc-dropdown>
```

```<sc-dropdown>``` contains a trigger part (<sc-dropdown-trigger>) and a content part <sc-dropdown-content>

### Inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- | -- |
| close-on-select | boolean | sc-dropdown | true | If set to false, dropdown menu will not close on content click |
| side | string | sc-dropdown | right | Force display on the specified side (left or right) |


### Outputs

| **Name** | **Type** | **Element** | **Description** |
| -- | -- | -- | -- |
| on-open | function | sc-dropdown  | The callback to execute when the dropdown opens |

### Transclusion

``<sc-dropdown-trigger>`` will be transcluded into the div that trigger content visibility.

``<sc-dropdown-content>`` will be transcluded into the dropdown content.

### Style customisation

| **Name** | **Default** | **Description** |
| -- | -- | -- |
| $sc-dropdown-height | 1.5em | The trigger height. |
| $sc-dropdown-content-background | $light| The content background. |
| $sc-dropdown-content-color | $discrete-dark| The content text color. |
| $sc-dropdown-content-border-color | $discrete | the content border color. |
| $sc-dropdown-content-border-radius | 3px | The content corder radius. |
| $sc-dropdown-content-z-index | 20 | The content z-index |