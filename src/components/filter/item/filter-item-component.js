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
        <sc-talend-badge class="filter-item {{$ctrl.filter.type}}"
                  removable="$ctrl.removable"
                  on-remove="$ctrl.onRemove()">
            <span>
                <span class="filter-item-label">
                    {{$ctrl.value.fieldName}}{{$ctrl.sign}}
                </span>
                <form ng-submit="$ctrl.submit()">
                        <ul class="filter-item-value" ng-class="{'multi': $ctrl.value.options.values.length > 1}">
                        <li ng-repeat="filterValue in $ctrl.value.options.values track by $index">
                            <sc-filter-value value="$ctrl.value.getLabel(filterValue)"
                                          editable="$ctrl.editable && !filterValue.isEmpty"
                                          on-edit="$ctrl.edit($index, value)"
                                          removable="!($first && $last)"
                                          on-remove="$ctrl.remove($index)">
                            </sc-filter-value>
                        </li>
                    </ul>
                </form>
            </span>
    </sc-talend-badge>`,
    controller: ScFilterItemCtrl,
    bindings: {
        value: '<',
        editable: '<',
        onEdit: '&',
        removable: '<',
        onRemove: '&'
    }
};

export default ScFilterItemComponent;