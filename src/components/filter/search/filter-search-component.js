/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScFilterSearchCtrl from './filter-search-controller.js';

/**
 * @ngdoc directive
 * @name data-prep.filter-search.directive:FilterSearch
 * @description This directive create an input to add a filter. The `keydown` event is stopped to avoid propagation
 * to a possible {@link talend.widget.directive:TalendModal TalendModal} container
 * @restrict E
 */
const ScFilterSearchComponent = {
        template: `
        <div id="filter-search">
            <div mass-autocomplete>
                <input type="search"
                       class="no-focus"
                       translate-once-placeholder="NEW_FILTER"
                       ng-model="filterCtrl.filterSearch"
                       mass-autocomplete-item="$ctrl.filterSuggestOptions">
            </div>
        </div>`,
        controller: ScFilterSearchCtrl

}

export default ScFilterSearchComponent;