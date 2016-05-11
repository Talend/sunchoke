/*  ============================================================================
 Copyright (C) 2006-2016 Talend Inc. - www.talend.com
 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE
 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France
 ============================================================================*/

import ScDropdownCtrl from './dropdown.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.dropdown.component:ScDropdownComponent
 * @description Dropdown widget.
 * @restrict E
 * @usage
 <sc-dropdown close-on-select="false" on-open="open()" side="left">
     <sc-dropdown-trigger>
        Click me !
     </sc-dropdown-trigger>
     <sc-dropdown-content>
        My menu content
     </sc-dropdown-content>
 </sc-dropdown>`
 * @param {boolean} closeOnSelect Default `true`.
 * If set to false, dropdown will not close on inner item click
 * @param {function} onOpen The callback to execute on dropdown open
 * @param {string} side Force display on the specified side (left | right)
 */
const ScDropdownComponent = {
    template: `
        <div class="sc-dropdown-trigger"
             ng-click="$ctrl.toggleMenu()"
             ng-transclude="sc-dropdown-trigger">
        </div>
        <div class="sc-dropdown-content"
             ng-click="$ctrl.onMenuClick($event)"
             ng-transclude="sc-dropdown-content">
        </div>
    `,
    bindings: {
        closeOnSelect: '<',
        onOpen: '&',
        side: '@',
    },
    transclude: {
        'sc-dropdown-trigger': 'scDropdownTrigger',
        'sc-dropdown-content': 'scDropdownContent',
    },
    controller: ScDropdownCtrl,
};

export default ScDropdownComponent;
