/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScFilterRangeCtrl from './filter-range-controller.js';

const ScFilterRangeComponent = {
    template: `
        <div class="filter-range">
            <span>[</span>
            <input type="text"
                ng-model="$ctrl.fromValue"
                title="{{$ctrl.fromValue}}"
                ng-blur="$ctrl.onEdit({newValue: {min: $ctrl.fromValue, max : $ctrl.toValue} })"
                ng-keydown="$ctrl.onKeydown($event)"
                pu-elastic-input
             />
            <span ng-if="$ctrl.filterValue.min !== $ctrl.filterValue.max">,</span>
            <input type="text" ng-if="$ctrl.filterValue.min !== $ctrl.filterValue.max"
                ng-model="$ctrl.toValue"
                title="{{$ctrl.toValue}}"
                ng-blur="$ctrl.onEdit( {newValue: {min: $ctrl.fromValue, max : $ctrl.toValue} })"
                ng-keydown="$ctrl.onKeydown($event)"
                pu-elastic-input
            />
            <span ng-if="$ctrl.filterValue.min !== $ctrl.filterValue.max">[</span>
            <span ng-if="$ctrl.filterValue.min === $ctrl.filterValue.max">]</span>
        
            <a class="filter-value-btn-remove"
               ng-show="$ctrl.removable"
               ng-click="$ctrl.onRemove()">&times;</a>
        </div>`,
    controller: ScFilterRangeCtrl,
    bindings: {
        filterValue: '<',
        onEdit: '&',
        removable: '<',
        onRemove: '&'
    }
};

export default ScFilterRangeComponent;