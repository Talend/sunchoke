# Slidable Documentation

### Usage

```html
    <sc-slidable visible="playgroundCtrl.state.playground.assignableUsers.visible"
                 control-bar="true"
                 side="left"
                 visible-state-key="sunchoke.leftSlidable.visibility">
          <!-- transcluded content here -->
        </sc-slidable>
```

### Inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- | -- |
| visible | boolean | sc-slidable |  | Indicates whether the content of the slidable is visible |
| control-bar | boolean | sc-slidable |  | Indicates whether the control bar is displayed |
| side | string | sc-slidable |  | Indicates which the side of the slidable |
| visible-state-key | string | sc-slidable |  | The key of the visible attribute in localstorage |
| resizable-key | boolean | sc-slidable |  | The key of the width attribute in localstorage |

### Style customisation

| **Name** | **Default** | **Description** |
| -- | -- | -- |
| $sc-slidable-resize-bar-width | 3px | The width of the draggable resize bar. |
| $sc-slidable-action-font-size | 3em | The font of the action button. |