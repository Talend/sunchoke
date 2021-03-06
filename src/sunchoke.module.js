/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import angular from 'angular';

import ACCORDION_MODULE from './components/accordion/accordion.module.js';
import AUTOFOCUS_MODULE from './components/autofocus/autofocus.module.js';
import DROPDOWN_MENU_MODULE from './components/dropdown-menu/dropdown-menu.module.js';
import DROPDOWN_MODULE from './components/dropdown/dropdown.module.js';
import MODAL_MODULE from './components/modal/modal.module.js';
import SLIDABLE_MODULE from './components/slidable/slidable.module.js';
import SPLITTER_MODULE from './components/splitter/splitter.module.js';
import TABS_MODULE from './components/tabs/tabs.module.js';

const SUNCHOKE_MODULE = 'talend.sunchoke';

angular.module(SUNCHOKE_MODULE, [
    ACCORDION_MODULE,
    AUTOFOCUS_MODULE,
    DROPDOWN_MENU_MODULE,
    DROPDOWN_MODULE,
    MODAL_MODULE,
    SPLITTER_MODULE,
    TABS_MODULE,
    SLIDABLE_MODULE,
]);

export default SUNCHOKE_MODULE;
