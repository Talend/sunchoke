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
import FILTER_BAR from './components/filter/bar/filter-bar-module.js';
import FILTER_ITEM from './components/filter/item/filter-item-module.js';
import FILTER_ITEM_VALUE from './components/filter/item/value/filter-value-module.js';
import FILTER_ITEM_RANGE from './components/filter/item/range/filter-range-module.js';
import FILTER_LIST from './components/filter/list/filter-list-module.js';
import LIST_EDITOR_MODULE from './components/list-editor/list-editor.module.js';
import FILTER_MONITOR from './components/filter/monitor/filter-monitor-module.js';
/*
import FILTER_SEARCH from './components/filter/search/filter-search-module.js';
*/
import BADGE from './components/badge/badge-module.js';

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
    VERTICAL_BARCHART_MODULE,
    // filter bar
    FILTER_BAR,
    FILTER_ITEM,
    FILTER_ITEM_VALUE,
    FILTER_ITEM_RANGE,
    FILTER_LIST,
    FILTER_MONITOR,
    LIST_EDITOR_MODULE,
    /*
    FILTER_SEARCH,
    */
    BADGE

]);

export default SUNCHOKE_MODULE;