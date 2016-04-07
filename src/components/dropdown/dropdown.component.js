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
     <sc-dropdown-action>
        <div class="grid-header-title">{{ column.id }}</div>
        <div class="grid-header-type">{{ column.type }}</div>
     </sc-dropdown-action>
     <sc-dropdown-menu>
        <ul class="grid-header-menu">
            <li role="presentation"><a role="menuitem" href="#">Hide Column</a></li>
            <li class="divider"></li>
            <li role="presentation"><a role="menuitem" href="#">Split first Space</a></li>
            <li role="presentation"><a role="menuitem" href="#">Uppercase</a></li>
        </ul>
     </sc-dropdown-menu>
 </sc-dropdown>`
 * @param {boolean} closeOnSelect Default `true`. If set to false, dropdown will not close on inner item click
 * @param {function} onOpen The callback to execute on dropdown open
 * @param {string} side Force display on the specified side (left | right)
 */
const ScDropdownComponent = {
    template: `
     <div class="sc-dropdown-container">
        <div class="sc-dropdown-action" ng-click="$ctrl.toggleMenu()">
            <div class="sc-dropdown-action-content" ng-transclude="sc-dropdown-action"></div>
            <div class="sc-dropdown-action-button"></div>
        </div>
        <div class="sc-dropdown-menu" ng-transclude="sc-dropdown-menu"  ng-click="$ctrl.onMenuClick($event)"></div>
     </div>`,
    bindings: {
        closeOnSelect: '=',
        onOpen: '&',
        side: '@'
    },
    transclude: {
        'sc-dropdown-action': 'scDropdownAction',
        'sc-dropdown-menu': 'scDropdownMenu'
    },
    controller: ScDropdownCtrl
};

export default ScDropdownComponent;