/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import Sc$ctrl from './filter-bar-controller.js';

const ScFilterBarComponent = {
    template: `
    <div id="filter-bar" >
    
    <!--
        <sc-filter-monitor class="monitor"
                        filters="$ctrl.state.playground.filter.gridFilters"
                        state="$ctrl.state.playground.filter.enabled"
                        on-toogle="$ctrl.filterService.toggleFilters()"
                        nb-lines="$ctrl.state.playground.grid.nbLines"
                        nb-total-lines="$ctrl.state.playground.grid.nbTotalLines"
                        percentage="$ctrl.state.playground.grid.displayLinesPercentage"
                        title="{{::'TOOGLE_ALL_FILTERS' | translate}}"></sc-filter-monitor>

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
           title="{{::'REMOVE_ALL_FILTERS' | translate}}"
           ng-if="$ctrl.filters.length"></a>
    </div>`,
    bindings :{
        filters : '<',
        onFilterRemoveValue : '&',
        onFilterRemove : '&',
        onRemoveAllFilters : '&',
        removable : '<'
    },
    controller: Sc$ctrl
};

export default ScFilterBarComponent;