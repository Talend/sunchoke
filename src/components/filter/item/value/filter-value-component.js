/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScFilterValueCtrl from './filter-value-controller.js';

const ScFilterValueComponent = {
    template: `
        <div class="filter-value">
            <input ng-if="$ctrl.valueToDisplay" type="text"
                   ng-model="$ctrl.valueToDisplay"
                   title="{{$ctrl.valueToDisplay}}"
                   ng-blur="$ctrl.onEdit({newValue: $ctrl.valueToDisplay})"
                   ng-keydown="$ctrl.onKeydown($event)"
                   ng-trim="false"
                   pu-elastic-input
            />
                
            <span ng-if="!$ctrl.valueToDisplay" class="empty">empty</span>
        
            <a class="filter-value-btn-remove"
               ng-show="$ctrl.removable"
               ng-click="$ctrl.onRemove()">&times;</a>
        </div>`,
    controller: ScFilterValueCtrl,
    bindings: {
        filterValue: '<',
        onEdit: '&',
        removable: '<',
        onRemove: '&',
        renderValueFn: '&'
    }
};

export default ScFilterValueComponent;