/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScTabsComponent from './tabs.component';
import ScTabsItemComponent from './tabs-item.component';

(() => {
    /**
     * @ngdoc object
     * @name talend.sunchoke.tabs
     * @description Tabs
     */
    angular.module('talend.sunchoke.tabs', [])
        .component('scTabsItem', ScTabsItemComponent)
        .component('scTabs', ScTabsComponent);
})();