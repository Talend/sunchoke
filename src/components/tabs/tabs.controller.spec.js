/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScTabsItemCtrl from './tabs-item.controller';

describe('Tabs component controller', () => {
    let scope;
    let createController;

    beforeEach(angular.mock.module('talend.sunchoke.tabs'));

    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();

        createController = () =>
            $componentController(
                'scTabs',
                { $scope: scope },
                { onTabChange: jasmine.createSpy('onTabChange') }
            );
    }));

    describe('register', () => {
        it('should register tabs', () => {
            // given
            const tab1 = new ScTabsItemCtrl();
            const tab2 = new ScTabsItemCtrl();

            const ctrl = createController();
            expect(ctrl.tabs.length).toBe(0);

            // when
            ctrl.register(tab1);
            ctrl.register(tab2);

            // then
            expect(ctrl.tabs).toEqual([tab1, tab2]);
        });

        it('should set first added tab as active tab', () => {
            // given
            const tab1 = new ScTabsItemCtrl();
            const tab2 = new ScTabsItemCtrl();

            const ctrl = createController();
            expect(ctrl.tabs.length).toBe(0);

            // when
            ctrl.register(tab1);
            ctrl.register(tab2);

            // then
            expect(tab1.active).toBeTruthy();
            expect(tab2.active).toBeFalsy();
        });
    });

    describe('select', () => {
        describe('manually', () => {
            it('should set selected tab as active', () => {
                // given
                const tab1 = new ScTabsItemCtrl();
                const tab2 = new ScTabsItemCtrl();
                const tab3 = new ScTabsItemCtrl();

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(tab3.active).toBeFalsy();

                // when
                ctrl.select(tab3);

                // then
                expect(tab3.active).toBeTruthy();
            });

            it('should set selected tab as active', () => {
                // given
                const tab1 = new ScTabsItemCtrl();
                const tab2 = new ScTabsItemCtrl();
                const tab3 = new ScTabsItemCtrl();

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                tab1.active = true;

                // when
                ctrl.select(tab3);

                // then
                expect(tab1.active).toBeFalsy();
                expect(tab2.active).toBeFalsy();
            });

            it('should call tab change callback', () => {
                // given
                const tab1 = new ScTabsItemCtrl();
                const tab2 = new ScTabsItemCtrl();
                const tab3 = new ScTabsItemCtrl();

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(ctrl.onTabChange).not.toHaveBeenCalled();

                // when
                ctrl.select(tab3);

                // then
                expect(ctrl.onTabChange).toHaveBeenCalled();
            });
        });

        describe('programmatically', () => {
            it('should set selected tab as active', () => {
                // given
                const tab1 = new ScTabsItemCtrl();
                const tab2 = new ScTabsItemCtrl();
                const tab3 = new ScTabsItemCtrl();

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(tab3.active).toBeFalsy();

                // when
                ctrl.$onChanges({ selectedTab: { currentValue: 2 } });

                // then
                expect(tab3.active).toBeTruthy();
            });

            it('should set previous selected tab as inactive', () => {
                // given
                const tab1 = new ScTabsItemCtrl();
                const tab2 = new ScTabsItemCtrl();
                const tab3 = new ScTabsItemCtrl();

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                tab1.active = true;

                // when
                ctrl.$onChanges({ selectedTab: { currentValue: 2 } });

                // then
                expect(tab1.active).toBeFalsy();
            });

            it('should call tab change callback', () => {
                // given
                const tab1 = new ScTabsItemCtrl();
                const tab2 = new ScTabsItemCtrl();
                const tab3 = new ScTabsItemCtrl();

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(ctrl.onTabChange).not.toHaveBeenCalled();

                // when
                ctrl.$onChanges({ selectedTab: { currentValue: 2 } });

                // then
                expect(ctrl.onTabChange).toHaveBeenCalled();
            });

            it('should do nothing if the index is out of bound', () => {
                // given
                const tab1 = new ScTabsItemCtrl();
                const tab2 = new ScTabsItemCtrl();
                const tab3 = new ScTabsItemCtrl();

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(tab1.active).toBeTruthy();
                expect(tab2.active).toBeFalsy();
                expect(tab3.active).toBeFalsy();
                expect(ctrl.onTabChange).not.toHaveBeenCalled();

                // when
                ctrl.$onChanges({ selectedTab: { currentValue: 10 } });

                // then
                expect(tab1.active).toBeTruthy();
                expect(tab2.active).toBeFalsy();
                expect(tab3.active).toBeFalsy();
                expect(ctrl.onTabChange).not.toHaveBeenCalled();
            });
        });
    });

    describe('unregister', () => {
        it('should unregister tab', () => {
            // given
            const tab1 = new ScTabsItemCtrl();
            const tab2 = new ScTabsItemCtrl();

            const ctrl = createController();
            ctrl.tabs = [tab1, tab2];

            // when
            ctrl.unregister(tab2);

            // then
            expect(ctrl.tabs).toEqual([tab1]);
        });
    });
});
