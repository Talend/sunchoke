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
 * @name talend.sunchoke.tabs.controller:ScTabsItemCtrl
 * @description Tabs item controller
 */
export default class ScTabsItemCtrl {

    $onInit() {
        this.tabsCtrl.register(this);
        if (this.isDefault) {
            this.tabsCtrl.select(this);
        }
    }

    $onDestroy() {
        this.tabsCtrl.unregister(this);
    }

    setActive(value) {
        this.active = value;
    }
}
