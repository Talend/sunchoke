# Accordion Documentation

### Usage

```html
    <sc-dropdown-menu>
        <sc-dropdown-menu-trigger>
            <i class="sc-dropdown-menu-icon">Your icon</i>
            <span class="sc-user-menu-text">Username</span>
        </sc-dropdown-menu-trigger>
        <sc-dropdown-menu-dropdown>
            <ul>
                <li>
                    <span class="sc-dropdown-menu-item-label">Do nothing</span>
                </li>
                <li ng-click="ctrl.logout()">
                    <i class="sc-dropdown-menu-item-icon">Your icon</i>
                    <span class="sc-dropdown-menu-item-label">Logout</span>
                </li>
            </ul>
        </sc-dropdown-menu-dropdown>
    </sc-dropdown-menu>
```

```<sc-accordion>``` contains a trigger part (```<sc-dropdown-menu-trigger>```) and a dropdown part ```<sc-dropdown-menu-dropdown>```

```.sc-dropdown-menu-icon``` The trigger icon

```.sc-dropdown-menu-text``` The text to display in trigger part

```.sc-dropdown-menu-item-icon``` The menu item icon

```.sc-dropdown-menu-item-label``` The menu item label

### Inputs

No input

### Outputs

No output

### Transclusion

 ```<sc-dropdown-menu-trigger>`` will be transcluded into the displayed part. It is used as trigger part, since it reveals the dropdown on click.

 ```<sc-dropdown-menu-dropdown>`` will be transcluded into the dropdown menu part.

### Style customisation

| **Name** | **Default** | **Description** |
| -- | -- | -- |
| $sc-dropdown-menu-trigger-max-width | 130px | The trigger text max width. The rest will be hidden with an ellipsis. |
| $sc-dropdown-menu-trigger-color | $light | The trigger text color. |
| $sc-dropdown-menu-trigger-height | 50px | The trigger height. |
| $sc-dropdown-menu-dropdown-border-color | $discrete | The dropdown menu border color. |
| $sc-dropdown-menu-item-color | $discrete-dark | The menu item text color. |
| $sc-dropdown-menu-item-color-hover | $light | The menu item text color on mouse hover. |
| $sc-dropdown-menu-item-background | $light | The menu item background. |
| $sc-dropdown-menu-item-background-hover | $discrete | he menu item background on mouse hover. |
