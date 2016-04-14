# Splitter Documentation

### Usage

```html
    <sc-splitter orientation="horizontal" min-size="100">
        <sc-split-first-pane>
            <div>My first pane content</div>
        </sc-split-first-pane>

        <sc-split-second-pane>
            <div>My second pane content</div>
        </sc-split-second-pane>
    </sc-splitter>
```

### Inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- | -- |
| orientation | string | sc-splitter | horizontal | Defines the pane orientation. Possible values: horizontal - vertical |
| min-size | integer | sc-splitter | 256 | Defines the min size of a pane. In horizontal mode it will set the panes min-width, in vertical mode it well set the panes min-height |

### Outputs

No outputs

### Transclusion

```<sc-split-first-pane>`` will be transcluded into the first (left | top) pane.

```<sc-split-second-pane>`` will be transcluded into the second (right | bottom) pane.

### Style customisation

| **Name** | **Default** | **Description** |
| -- | -- | -- |
| $split-handler-background | $discrete-lighter | Defines the color of the resize handler element |
| $split-handler-size | 12px | Defines the size of the resize handler element |