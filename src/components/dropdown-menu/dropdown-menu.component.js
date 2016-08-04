/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScDropdownMenuCtrl from './dropdown-menu.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.dropdown.component:ScDropdownComponent
 * @description Dropdown widget.
 * @restrict E
 * @usage
 <sc-dropdown-menu on-close="onClose()" visible-on-init="visibleOnInit">
     <sc-dropdown-menu-trigger id="trigger">
         <span class="sc-dropdown-menu-trigger">Username</span>
     </sc-dropdown-menu-trigger>
     <sc-dropdown-menu-dropdown id="dropdown">
         <ul class="menu">
             <li ng-click="logout()">
                 <span class="sc-dropdown-menu-item-label">Logout</span>
             </li>
         </ul>
     </sc-dropdown-menu-dropdown>
 </sc-dropdown-menu>

 * @param {function} onClose The callback to execute on dropdown close
 * @param {boolean} visibleOnInit Force dropdown to load
 */

const ScDropdownMenuComponent = {
    template: `
        <div class="sc-dropdown-menu-trigger"
             ng-class="{opened:$ctrl.visible}"
             ng-click="$ctrl.toggleMenu()"
             ng-transclude="sc-dropdown-menu-trigger">
        </div>
        <div class="sc-dropdown-menu-dropdown"
             ng-if="$ctrl.visible"
             ng-click="$ctrl.toggleMenu()"
             ng-transclude="sc-dropdown-menu-dropdown">
        </div>
    `,
    bindings: {
        onClose: '&',
        visibleOnInit: '<'
    },
    transclude: {
        'sc-dropdown-menu-trigger': '?scDropdownMenuTrigger',
        'sc-dropdown-menu-dropdown': '?scDropdownMenuDropdown'
    },
    controller: ScDropdownMenuCtrl
};

export default ScDropdownMenuComponent;