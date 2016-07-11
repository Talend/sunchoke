/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import TalendDropdownComponent from './dropdown.component.js';
import TalendDropdownTriggerComponent from './dropdown-trigger.component.js';
import TalendDropdownContentComponent from './dropdown-content.component.js';
import TalendDropdownMenuComponent from './dropdown-menu.component.js';
import TalendDropdownMenuItemComponent from './dropdown-menu-item.component.js';

const MODULE_NAME = 'talend.sunchoke.dropdown';

/**
 * @ngdoc object
 * @name talend.sunchoke.dropdown
 * @description Dropdown
 * @restrict E
 * @usage
 *       <talend-dropdown>
 *         <talend-dropdown-trigger icon-class="some-icon-class" text="SOME TEXT" use-arrow="true">
 *         </talend-dropdown-trigger>
 *         <talend-dropdown-menu>
 *           <talend-dropdown-menu-item icon-class="icon-class-1" text="Item 1"></talend-dropdown-menu-item>
 *           <talend-dropdown-menu-item text="Item 2" /></talend-dropdown-menu-item>
 *         </talend-dropdown-menu>
 *       </talend-dropdown>
 *
 *       or
 *
 *       <talend-dropdown close-on-select="false" on-open="open()">
 *         <talend-dropdown-trigger text="Click me!" use-arrow="false"></talend-dropdown-trigger>
 *         <talend-dropdown-content side="left">
 *           My content
 *         </talend-dropdown-content>
 *       </talend-dropdown>
 */
angular.module(MODULE_NAME, [])
    .component('talendDropdown', TalendDropdownComponent)
    .component('talendDropdownTrigger', TalendDropdownTriggerComponent)
    .component('talendDropdownContent', TalendDropdownContentComponent)
    .component('talendDropdownMenu', TalendDropdownMenuComponent)
    .component('talendDropdownMenuItem', TalendDropdownMenuItemComponent);

export default MODULE_NAME;