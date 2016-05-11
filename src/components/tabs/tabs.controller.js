/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

/**
 * @ngdoc controller
 * @name talend.sunchoke.tabs.controller:ScTabsCtrl
 * @description Tabs controller
 */
export default class ScTabsCtrl {
    constructor() {
        /**
         * @ngdoc property
         * @name tabs
         * @propertyOf talend.sunchoke.tabs.controller:ScTabsCtrl
         * @description The array containing all its tabs items
         * @type {Array}
         */
        this.tabs = [];
    }

    $onChanges(changes) {
        if (changes.selectedTab) {
            this.setSelectedTab(changes.selectedTab.currentValue);
        }
    }

    /**
     * @ngdoc method
     * @name register
     * @methodOf talend.sunchoke.tabs.controller:ScTabsCtrl
     * @description Register a tab
     */
    register(tab) {
        if (this.tabs.length === 0) {
            tab.setActive(true);
        }
        this.tabs.push(tab);
    }

    /**
     * @ngdoc method
     * @name select
     * @methodOf talend.sunchoke.tabs.controller:ScTabsCtrl
     * @description Select a tab
     */
    select(tab) {
        this.tabs.forEach((tabToDeactivate) => {
            tabToDeactivate.setActive(false);
        });
        tab.setActive(true);
        this.onTabChange();
    }

    /**
     * @ngdoc method
     * @name setSelectedTab
     * @methodOf talend.sunchoke.tabs.controller:ScTabsCtrl
     * @description Set selected tab
     */
    setSelectedTab(index) {
        const tabToSelect = this.tabs[index];
        if (tabToSelect) {
            this.select(tabToSelect);
        }
    }

    /**
     * @ngdoc method
     * @name unregister
     * @methodOf talend.sunchoke.tabs.controller:ScTabsCtrl
     * @param {object} tab The tab to delete
     * @description Delete a tab
     */
    unregister(tab) {
        const index = this.tabs.indexOf(tab);
        this.tabs.splice(index, 1);
    }
}
