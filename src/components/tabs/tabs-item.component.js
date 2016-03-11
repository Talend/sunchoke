/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScTabsItemCtrl from './tabs-item.controller';

/**
 * @ngdoc component
 * @name talend.sunchoke.tabs.component:ScTabsItemComponent
 * @description Tabs
 * @restrict E
 * @usage
 *     <sc-tabs tab="selectedTab" on-tab-change="onchange()">
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
 * @param {string} tabTitle The tab Title to display
 * @param {boolean} isDefault Is the default tab to select
 */
const ScTabsItemComponent = {
    template: `<ng-transclude ng-if="$ctrl.active"></ng-transclude>`,
    bindings: {
        tabTitle: '@',
        isDefault: '<'
    },
    require: {
        tabsCtrl: '^^scTabs'
    },
    transclude: true,
    controller: ScTabsItemCtrl
};

export default ScTabsItemComponent;