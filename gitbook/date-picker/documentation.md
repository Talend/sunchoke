# DatePicker Documentation

### Usage
```html
    <sc-date-picker ng-model="$ctrl.ngModelValue" config='$ctrl.configurationObject'></sc-date-picker>
```

### Inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- |
| ngModel | variable | sc-date-picker | none | The ngModel value, this is the value updated when a date is choosen. The ngModel value is the date's timestamp
| config | object | sc-date-picker | {} | the pikaday configuration object



### Configuration Available

| **Name** | **Type** | **Description** |
| -- | -- | -- |
| noneButton | boolean | Allow to show the none button on the datepicker to reset the value to null
| format | String | Format the input value ( with moment.js format )
| firstDay | 0 or 1 | Determine if the sunday or the monday is the first day of the week
| defaultTimeStamp | timestamp | Initialize the datepicker with the timestamp's date
| i18n | object | Allow to translate the entries on the datepicker ( months / days / labels )

field & controller values can't be overridden.

Other entry can be founded at [Pikaday documentation](https://github.com/dbushell/Pikaday#configuration)