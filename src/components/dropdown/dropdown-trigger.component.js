/*  ============================================================================
 Copyright (C) 2006-2016 Talend Inc. - www.talend.com
 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE
 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France
 ============================================================================*/

import TalendDropdownTriggerTemplate from './dropdown-trigger.template.html';

/**
 * @ngdoc component
 * @name talend.sunchoke.dropdown-trigger.component:TalendDropdownTriggerComponent
 * @description Dropdown trigger widget.
 * @restrict E
 * @param {string} iconClass The class of the trigger icon. If not set icon will not be inserted
 * @param {string} text The text of the trigger
 * @param {boolean} useArrow Default 'false'. Show arrow after text
 */
const TalendDropdownTriggerComponent = {
    restrict: 'E',
    require: '^^talendDropdown',
    scope: false,
    template: TalendDropdownTriggerTemplate,
    bindings: {
        iconClass: '@',
        text: '@',
        useArrow: '<'
    }
};

export default TalendDropdownTriggerComponent;