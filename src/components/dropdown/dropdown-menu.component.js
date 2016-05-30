/*  ============================================================================
 Copyright (C) 2006-2016 Talend Inc. - www.talend.com
 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE
 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France
 ============================================================================*/

import TalendDropdownMenuTemplate from './dropdown-menu.template.html';

/**
 * @ngdoc component
 * @name talend.sunchoke.dropdown-menu.component:TalendDropdownMenuComponent
 * @description Dropdown menu widget.
 * @restrict E
 * @param {string} side Force display on the specified side (left | right)
 */
const TalendDropdownMenuComponent = {
    restrict: 'E',
    require: '^^talendDropdown',
    scope: false,
    template: TalendDropdownMenuTemplate,
    bindings: {
        side: '@'
    },
    transclude: {
        'talend-dropdown-menu-item': '?talendDropdownMenuItem'
    }
};

export default TalendDropdownMenuComponent;
