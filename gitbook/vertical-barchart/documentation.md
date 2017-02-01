# Vertical barchart Documentation

### Usage

```html
    <sc-vertical-barchart
		id="vBarChart" 
        width="300"
        height="250"
        key-field="data"
        key-label="Occurrences"	
		primary-data=[
			{"data":{"type":"number","min":1,"max":257},"occurrences":50},
			{"data":{"type":"number","min":257,"max":513},"occurrences":100},
		]
		primary-value-field="occurrences"
		primary-bar-class=""
		secondary-data=[
			{"data":{"type":"number","min":1,"max":257},"filteredOccurrences":120},
			{"data":{"type":"number","min":257,"max":513},"filteredOccurrences":50},
			{"data":{"type":"number","min":513,"max":769},"filteredOccurrences":150}
		]
		secondary-value-field="filteredOccurrences"
		secondary-bar-class="blueBar"
	>
    </sc-vertical-barchart>
```

### Inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- | -- |
| id | string | sc-vertical-barchart |  | the chart's id |
| width | number | sc-vertical-barchart |  | the chart's width) |
| height | number | sc-vertical-barchart |  | the chart's height |
| key-field | string | sc-vertical-barchart |  | Key of the represented data |
| key-label | string | sc-vertical-barchart |  | Label of the data represented by the primary data array |
| primary-data | array | sc-vertical-barchart |  | Array containing the main data |
| primary-value-field | string | sc-vertical-barchart |  | Key of the value in the main data array |
| primary-bar-class | string | sc-vertical-barchart | bar | Class applied to the main vertical bar |
| secondary-data | array | sc-vertical-barchart |  | Array containing the filtered data |
| secondary-value-field | string | sc-vertical-barchart |  | Key of the value in the secondary data array |
| secondary-bar-class | string | sc-vertical-barchart | blueBar | Class applied to the secondary vertical bar |