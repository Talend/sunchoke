# Accordion Documentation

### Usage

```html
    <sc-tabs selected-tab="selectedTab" on-tab-change="onchange()">
        <sc-tabs-item tab-title="tab 1 title">
            Content tab 1
        </sc-tabs-item>
        <sc-tabs-item tab-title="tab 2 title" is-default="true">
            Content tab 2
        </sc-tabs-item>
        <sc-tabs-item tab-title="tab 3 title">
            Content tab 3
        </sc-tabs-item>
    </sc-tabs>
```

```<sc-tabs>``` is the parent element that will coordinate the tabs items. On item open, all the other tabs item with the same parent will be hidden, only the selected one will be visible.

```<sc-tabs-item>``` is an item. It contains the tab detailed content.


### Inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- | -- |
| selectedTab | number | sc-tabs | 0 | The variable allows you to control the selected tab from the outside. On change, the tab at the specified index will be selected. |
| is-default | boolean | sc-tabs-item | false | Indicate if the item is the default item. The default item is displayed on tabs creation. |

### Outputs

| **Name** | **Type** | **Element** | **Description** |
| -- | -- | -- | -- |
| onTabChange | function | sc-tabs | Callback triggered everytime a new tab is selected. |

### Transclusion

There is no specific transclusion point. Everything is transcluded in item content part.

### Style customisation

| **Name** | **Default** | **Description** |
| -- | -- | -- |
| $sc-tabs-headers-background | $discrete-lighter | Headers background. |
| $sc-tabs-header-background-disabled | $discrete-lighter | Header background color when the item is disabled. |
| $sc-tabs-header-background-enabled | $wave-dark | Header background color when the item is enabled. |
| $sc-tabs-header-color-disabled | $discrete | Header text color when the item is disabled. |
| $sc-tabs-header-color-enabled | $light | Header text color when the item is enabled. |
| $sc-tabs-header-padding | 10px | Header text padding. |