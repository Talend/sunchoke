# Modal Documentation

### Usage

```html
    <sc-modal visible="isVisible"
              close-button="closeButton"
              close-on-escape="closeOnEscape"
              close-on-overlay-click="closeOnOverlayClick"
              validate-on-enter="validateOnEnter"
              before-close="beforeClose()"
              on-close="onClose()">
        <sc-modal-header>My title</sc-modal-header>
        <sc-modal-content>
            <button class="sc-modal-close" id="close-button">Close</button>
            <button class="sc-modal-primary" ng-click="primaryClick()">Primary</button>
        </sc-modal-content>
    </sc-modal>
```

Any clickable element tagged with the class `sc-modal-close` will close the modal on click.

### Inputs

| **Name** | **Type** | **Element** | **Default** | **Description** |
| -- | -- | -- | -- | -- |
| visible | boolean | sc-modal | - | Flag that controls the modal visibility |
| close-button | boolean | sc-modal | false | Flag that indicates if the close button should be displayed  |
| close-on-escape | boolean | sc-modal | false | Flag that indicates if the modal should be closed on ESC keydown  |
| close-on-overlay-click | boolean | sc-modal | false | Flag that indicates if the modal should be closed on overlay click  |
| validate-on-enter | boolean | sc-modal | false | Flag that indicates if the primary element should be clicked on ENTER keydown. The primary element is tagged by the class name `sc-modal-primary` |

### Outputs

| **Name** | **Type** | **Element** | **Description** |
| -- | -- | -- | -- |
| before-close | function | sc-modal | Function called before the modal close. If the function returns explicitly `false`, the close is canceled. |
| on-close | function | sc-modal | Function before when the modal close. |

### Transclusion

```<sc-modal-header>``` will be transcluded into the header part. For example, insert the modal title here.

```<sc-modal-content>``` will be transcluded into the body part.

### Style customisation

| **Name** | **Default** | **Description** |
| -- | -- | -- |
| $sc-modal-background | $light | The modal box background. |
| $sc-modal-border-radius | 3px | The modal box border radius. |
| $sc-modal-close-color | $discrete-light | The close cross color. |
| $sc-modal-header-border-color | $discrete | The modal box header text color. |
| $sc-modal-overlay-background | rgba(0, 0, 0, 0.7) | The overlay background. |
| $sc-modal-padding | 1.5em 2em | The modal box padding. |
| $sc-modal-z-index | 20 | The modal z-index. |
