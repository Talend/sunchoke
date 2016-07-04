/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

const ScFilterMonitorComponent = {
    template: `<div id="filter-monitor">
        <label class="label-switch" ng-if="$ctrl.filters.length">
            <input type="checkbox"
                   ng-model="$ctrl.state"
                   ng-change="$ctrl.onToogle()"/>
            <div id="filter-toggle-switch" class="checkbox"></div>
        </label>
    
        <div id="filters-monitor-stats"
             title="{{ 'NB_LINES_MATCHING_FILTERS' | translate:{percentage: $ctrl.percentage} }}">
            {{$ctrl.nbLines}}/{{$ctrl.nbTotalLines}}
        </div>
    </div>`,
    bindings: {
        filters: '=',
        onToogle: '&',
        nbLines: '=',
        nbTotalLines: '=',
        percentage: '=',
        state: "="
    }
};
export default ScFilterMonitorComponent;
