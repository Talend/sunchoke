/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScFilterBarctrl from './filter-bar-controller.js';

const ScFilterBarComponent = {
    template: `
    <div id="filter-bar" >
        <!-- <sc-filter-monitor class="monitor"
                        filters="$ctrl.filters"
                        on-toogle=""
                        nb-lines="$ctrl.nbLines"
                        nb-total-lines="$ctrl.nbTotalLines"
                        percentage="$ctrl.state.playground.grid.displayLinesPercentage"
                        title="Toggle all filters"></sc-filter-monitor>  -->
      
    <!--
    TODO when implementing manual filter
    <sc-filter-search class="search"></sc-filter-search>
        -->
    
        <sc-filter-list class="list"
                     filters="$ctrl.filters"
                     on-filter-remove-value="$ctrl.removeFilterValue(filter, value)"
                     on-filter-remove="$ctrl.removeFilter(filter)"
                     removable="$ctrl.removable"></sc-filter-list>
    
        <a id="reset-filters"
           class="filters-remove"
           data-icon="e"
           ng-click="$ctrl.onRemoveAllFilters()"
           title="Remove all filters"
           ng-if="$ctrl.filters && $ctrl.filters.length > 0"></a>
           
    </div>`,
    bindings: {
        filters: '<',
        onFilterRemoveValue: '&',
        onFilterRemove: '&',
        onRemoveAllFilters: '&',
        removable: '<',
        onFilterChange: '&',
        nbLines: '<',
        nbTotalLines: '<'

    },
    controller: ScFilterBarctrl
};

export default ScFilterBarComponent;