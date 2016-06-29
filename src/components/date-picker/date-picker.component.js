/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScDatePickerCtrl from './date-picker.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.date-picker.component:ScDatePickerComponent
 * @description Date picker
 * @restrict E
 * @usage
 <sc-date-picker ng-model="value" config="{noneButton:true, format:"DD MMM YYYY", firstDay:1}">
 </sc-date-picker>
 * @param {int} ngModel The value with two way databinding. It represent the timestamp of the selected date
 * @param {object} config The configuration object, the list of attributes is available on Pikaday documentation ( https://github.com/dbushell/Pikaday )
 */
const ScDatePickerComponent = {
    template: `<div class="sc-date-picker">
                    <div class="calendar-icon" ng-class="{'active':$ctrl.focusState}"></div>
                    <input autocomplete="off" type='text' ng-focus="$ctrl.setFocus(true)" ng-blur="$ctrl.setFocus(false)">
                    <div class="datepicker-container"></div>
                </div>`,
    bindings: {
        "ngModel":"=",
        "defaultDate":"@",
        "config":"<"
    },
    controller: ScDatePickerCtrl
};

export default ScDatePickerComponent;