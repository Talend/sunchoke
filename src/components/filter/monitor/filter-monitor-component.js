/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import ScFilterMonitorCtrl from './filter-monitor-controller.js';

const ScFilterMonitorComponent = {
    template: `
    <div id="filter-monitor">
        <label class="label-switch" ng-if="$ctrl.filters.length">
            <input type="checkbox"
                   ng-model="$ctrl.state"
                   ng-change="$ctrl.onToogle()"/>
            <div id="filter-toggle-switch" class="checkbox"></div>
        </label>

        <div id="filters-monitor-stats"
             title="percentage to compute">
            <span class="filtered-number" ng-bind="$ctrl.nbLines"></span>/{{$ctrl.nbTotalLines}}
        </div>
    </div>`,
    controller: ScFilterMonitorCtrl,
    bindings: {
        filters: '=',
        onToogle: '&',
        nbLines: '<',
        nbTotalLines: '<',
        percentage: '<',
        state: "="
    }
};

export default ScFilterMonitorComponent;
