/*  ============================================================================
 Copyright (C) 2006-2016 Talend Inc. - www.talend.com
 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE
 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France
 ============================================================================*/

import TalendDropdownContentTemplate from './dropdown-content.template.html';

/**
 * @ngdoc component
 * @name talend.sunchoke.dropdown-content.component:TalendDropdownContentComponent
 * @description Dropdown content widget.
 * @restrict E
 * @param {string} side Force display on the specified side (left | right)
 */
const TalendDropdownContentrComponent = {
    restrict: 'E',
    require: '?^^talendDropdown',
    template: TalendDropdownContentTemplate,
    bindings: {
        side: '@'
    },
    transclude: true
};

export default TalendDropdownContentrComponent;
