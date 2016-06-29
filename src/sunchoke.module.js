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
import DATE_PICKER_MODULE from './components/date-picker/date-picker.module.js';
import DROPDOWN_MENU_MODULE from './components/dropdown-menu/dropdown-menu.module.js';
import DROPDOWN_MODULE from './components/dropdown/dropdown.module.js';
import HORIZONTAL_BARCHART_MODULE from './components/horizontal-barchart/horizontal-barchart.module.js';
import SLIDABLE_MODULE from './components/slidable/slidable.module.js';
import SPLITTER_MODULE from './components/splitter/splitter.module.js';
import TABS_MODULE from './components/tabs/tabs.module.js';
import VERTICAL_BARCHART_MODULE from './components/vertical-barchart/vertical-barchart.module.js';
import FILTER_MODULE from './services/filter/filter-module.js';

const SUNCHOKE_MODULE = 'talend.sunchoke';

angular.module(SUNCHOKE_MODULE, [
    ACCORDION_MODULE,
    DATE_PICKER_MODULE,
    DROPDOWN_MENU_MODULE,
    DROPDOWN_MODULE,
    FILTER_MODULE,
    HORIZONTAL_BARCHART_MODULE,
    SLIDABLE_MODULE,
    SPLITTER_MODULE,
    TABS_MODULE,
    VERTICAL_BARCHART_MODULE
]);

export default SUNCHOKE_MODULE;