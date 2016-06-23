# Horizontal barchart Documentation

### Usage

```html
    <sc-horizontal-barchart>
        width="300"
        height="400"
        key-field="formattedValue"
        key-label="Occurrences"
        primary-data=[{"formattedValue":"male","occurrences":6,"data":"male"},{"formattedValue":"female","occurrences":3,"data":"female"}]
        primary-value-field="occurrences"
        primary-bar-class=""
        secondary-data=[{"formattedValue":"male","filteredOccurrences":4},{"formattedValue":"female","filteredOccurrences":2}]
        secondary-value-field="filteredOccurrences"
        secondary-bar-class="blueBar"
        tooltip-content="MyCtrl.getTooltip(keyLabel, key, primaryValue, secondaryValue)">
    </sc-horizontal-barchart>
```

### Inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- | -- |
| id | string | sc-horizontal-barchart | 0 | chart class identifier. Mandatory |
| width | number | sc-horizontal-barchart | 0 | chart width. Mandatory |
| height | number | sc-horizontal-barchart | 0 | chart height. Mandatory |
| key-field | string | sc-horizontal-barchart | 0 | key field |
| key-label | string | sc-horizontal-barchart | 0 | key label |
| primary-data | json | sc-horizontal-barchart | 0 | primary data|
| primary-value-field | string | sc-horizontal-barchart | 0 | primary value field |
| primary-bar-class | string | sc-horizontal-barchart | 0 | primary css bar class |
| secondary-data | json | sc-horizontal-barchart | 0 | secondary-data= |
| secondary-value-field | string | sc-horizontal-barchart | 0 | secondary value field|
| secondary-bar-class | string | sc-horizontal-barchart | 0 | secondary css bar class|
| tooltip-content= | string | sc-horizontal-barchart | 0 | tooltip content|

### Outputs

| **Name** | **Type** | **Element** | **Description** |
| -- | -- | -- | -- |
| on-click | function | sc-horizontal-barchart |  click on bar chart|

### Transclusion

No transclusion