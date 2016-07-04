/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScDropdownMenuCtrl from './dropdown-menu.controller.js';

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
    transclude: {
        'sc-dropdown-menu-trigger': '?scDropdownMenuTrigger',
        'sc-dropdown-menu-dropdown': '?scDropdownMenuDropdown'
    },
    controller: ScDropdownMenuCtrl
};

export default ScDropdownMenuComponent;