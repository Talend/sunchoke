/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScFilterItemCtrl from './filter-item-controller.js';

const ScFilterItemComponent = {
    template: `
        <sc-talend-badge class="filter-item {{$ctrl.badgeClass}}"
                  removable="$ctrl.removable"
                  on-remove="$ctrl.onRemove()">
            <span>
                <span class="filter-item-label">
                    {{$ctrl.filter.fieldName}}
                </span>
                <span class="operator">
                    {{$ctrl.sign}}
                </span>
                <form ng-submit="$ctrl.submit()">
                        <ul class="filter-item-value" ng-class="{'multi': $ctrl.filterValues.length > 1}">
                        <li ng-repeat="filterValue in $ctrl.filterValues track by $index">
                            <sc-filter-value ng-if="$ctrl.filter.sign !== 'inside_range' && $ctrl.editable"
                                             filter-value="filterValue"
                                             render-value-fn="$ctrl.renderValue(value)"
                                             on-edit="$ctrl.edit($index, newValue)"
                                             removable="!($first && $last)"
                                             on-remove="$ctrl.remove($index)">
                            </sc-filter-value>
                            
                            <sc-filter-range ng-if="$ctrl.filter.sign === 'inside_range' && $ctrl.editable"
                                             filter-value="filterValue"
                                             on-edit="$ctrl.edit($index, newValue)"
                                             removable="!($first && $last)"
                                             on-remove="$ctrl.remove($index)">
                            </sc-filter-range>
                            
                            <span class="readonly" ng-if="!$ctrl.editable">{{$ctrl.renderValue(filterValue)}}</span>
                        </li>
                    </ul>
                </form>
            </span>
    </sc-talend-badge>`,
    controller: ScFilterItemCtrl,
    bindings: {
        filter: '<',
        editable: '<',
        onEdit: '&',
        removable: '<',
        onRemove: '&',
        onRemoveValue: '&',
        renderValueFn: '&'
    }
};

export default ScFilterItemComponent;