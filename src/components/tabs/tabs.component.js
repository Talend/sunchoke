/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScTabsCtrl from './tabs.controller';

/**
 * @ngdoc component
 * @name talend.sunchoke.tabs.component:ScTabsComponent
 * @description Tabs
 * @restrict E
 * @usage
 *     <sc-tabs selected-tab="selectedTab" on-tab-change="onchange()">
 *          <sc-tabs-item tab-title="tab 1 title">
 *              Content tab 1
 *          </sc-tabs-item>
 *          <sc-tabs-item tab-title="tab 2 title" is-default="true">
 *              Content tab 2
 *          </sc-tabs-item>
 *          <sc-tabs-item tab-title="tab 3 title">
 *              Content tab 3
 *          </sc-tabs-item>
 *     </sc-tabs>
 * @param {number} selectedTab The selected tab index
 * @param {function} onTabChange The callback when the selected tab change
 */
const ScTabsComponent = {
    template: `
        <ul class="tabs">
            <li class="tabs-header"
                ng-class="{active : tab.active}"
                ng-repeat="tab in $ctrl.tabs track by $index"
                ng-click="$ctrl.select(tab)">
                {{tab.tabTitle}}
            </li>
        </ul>
        <ng-transclude></ng-transclude>
    `,
    bindings: {
        selectedTab: '<',
        onTabChange: '&',
    },
    transclude: true,
    controller: ScTabsCtrl,
};

export default ScTabsComponent;
