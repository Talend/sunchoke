/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import Pikaday from "./pikaday-override";

/**
 * @ngdoc controller
 * @name talend.sunchoke.date-picker.controller:ScDatePickerCtrl
 * @description Date picker controller
 */
export default class ScDatePickerCtrl {
    constructor($element, $timeout) {
        'ngInject';
        this.$element = $element;
        this.focusState = false;
        this.$timeout = $timeout;
    }


    /**
     * @ngdoc method
     * @name $onInit
     * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
     * @description Hook when controller is initialized
     */
    $onInit() {
        //Get the input in the element dom
        const input = this.$element.find('input')[0];
        //date picker container
        const container = this.$element.find('div')[2];
				this.initialNgModel = this.ngModel;

        //Config object for pikaday
        const config = {
            showDaysInNextAndPreviousMonths: true,
            controller: this,
            container: container,
            field: input,
            onClose: this.onCloseHandler,
            positionLeft: this.positionLeft,
            i18n: {
                previousMonth: 'Previous Month',
                nextMonth: 'Next Month',
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                none: "None"
            },
            firstDay: 0,
            noneButton: false,
            format: 'MMM D, YYYY',
            yearRange: [1900,2099]
        };

        //Get all specific configuration
        for (const configKey in this.config) {
            //protect controller & field parameters
            if (configKey !== 'controller' && configKey !== 'field' && container !== 'container') {
                config[configKey] = this.config[configKey];
            }
        }

        this.pikaday = new Pikaday(config);
    }

    /**
     * @ngdoc method
     * @name $onDestroy
     * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
     * @description Method called when the controller is destroyed
     */
    $onDestroy() {
        this.pikaday.destroy();
    }

    /**
     * @ngdoc method
     * @name onCloseHandler
     * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
     * @description This method is called when datepicker value changed ( onClose )
     */
		onCloseHandler() {
			//if there is a controller
			if (this._o && this._o.controller) {
				//get the controller
				const actualController = this._o.controller;

				//the user can't change a value from the component, we return the previous value
				if (!this.isSetDate) {
					actualController.$timeout(() => {
						actualController.ngModel = actualController.config.initialValue;
					});
				} else {
					//if a valid date has been provided
					if (this._d) {
						// if a bad date has been provided
						if (this.textErrorDate !== null) {
							actualController.ngModel = this.textErrorDate;
						} else {
							// Need timeout to update value
							actualController.$timeout(() => {
								actualController.ngModel = this._d.getTime();
							});
						}
					}
					// incorrect date : save even tough
					else {
						// erroneous date has been typed
						if (this.textErrorDate !== null) {
							actualController.ngModel = this.textErrorDate;
						} else {
							actualController.ngModel = null;
						}
					}
				}

				// In all cases, we call the callback function to close date picker
				actualController.$timeout(() => {
					actualController.onCloseFn({
						isEscape: this.isEscape
					});
				});
			}
		}

    /**
     * @ngdoc method
     * @name setFocus
     * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
     * @description This method is called when gain or loose focus
     */
    setFocus(focusState) {
        this.focusState = focusState;
    }

}
