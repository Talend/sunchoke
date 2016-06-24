/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import angular from 'angular';

import ScDatePickerComponent from './date-picker.component.js';

const MODULE_NAME = 'talend.sunchoke.date-picker';

/**
 * @ngdoc object
 * @name talend.sunchoke.date-picker
 * @description Date picker
 */
angular.module(MODULE_NAME, [])
    .component('scDatePicker', ScDatePickerComponent);

export default MODULE_NAME;
