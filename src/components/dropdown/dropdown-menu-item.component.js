/*  ============================================================================
 Copyright (C) 2006-2016 Talend Inc. - www.talend.com
 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE
 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France
 ============================================================================*/

import TalendDropdownMenuItemTemplate from './dropdown-menu-item.template.html'

/**
 * @ngdoc component
 * @name talend.sunchoke.dropdown-menu-item.component:TalendDropdownMenuItemComponent
 * @description Dropdown menu item widget.
 * @restrict E
 * @param {string} iconClass The class of the menu item icon. If not set icon will not be inserted
 * @param {string} text The text of the menu item
 */
const TalendDropdownMenuItemComponent = {
    restrict: 'E',
    require: '^^talendDropdownMenu',
    scope: false,
    template: TalendDropdownMenuItemTemplate,
    bindings: {
        iconClass: '@',
        text: '@'
    }
};

export default TalendDropdownMenuItemComponent;
