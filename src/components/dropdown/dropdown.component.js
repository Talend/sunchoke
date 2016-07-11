/*  ============================================================================
 Copyright (C) 2006-2016 Talend Inc. - www.talend.com
 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE
 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France
 ============================================================================*/

import TalendDropdownTemplate from './dropdown.template.html';
import TalendDropdownCtrl from './dropdown.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.dropdown.component:TalendDropdownComponent
 * @description Dropdown widget.
 * @restrict E
 * @param {boolean} closeOnSelect Default `true`. If set to false, dropdown will not close on inner item click
 * @param {function} onOpen The callback to execute on dropdown open
 */
const TalendDropdownComponent = {
    restrict: 'E',
    scope: false,
    template: TalendDropdownTemplate,
    bindings: {
        closeOnSelect: '<',
        onOpen: '&'
    },
    transclude: {
        'talend-dropdown-trigger': '?talendDropdownTrigger',
        'talend-dropdown-content': '?talendDropdownContent',
        'talend-dropdown-menu': '?talendDropdownMenu'
    },
    controller: TalendDropdownCtrl,
    controllerAs: 'dropdown'
};

export default TalendDropdownComponent;