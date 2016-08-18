/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScFilterListCtrl from './filter-list-controller.js';

const ScFilterListComponent = {
    template: `<ul id="filter-list">
            <li ng-repeat="filter in $ctrl.filters track by $index">
                <sc-filter-item filter="filter"
                             editable="filter.editable"
                             on-edit="$ctrl.editFilter(filter, newValue, oldValue)"
                             removable ="$ctrl.removable"
                             on-remove="$ctrl.removeFilter(filter)"
                             on-remove-value="$ctrl.removeFilterValue(filter, value)"
                             render-value-fn="$ctrl.renderValue(colId, value)">
                </sc-filter-item>
            </li>
        </ul>`,
    controller: ScFilterListCtrl,
    bindings: {
        filters: '=',
        onFilterRemoveValue: '&',
        onFilterRemove: '&',
        onFilterEdit: '&',
        removable: "<",
        renderValueFn: "&"
    }
};

export default ScFilterListComponent;