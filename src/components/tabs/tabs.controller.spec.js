/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Tabs component controller', () => {
    let scope, createController;

    beforeEach(angular.mock.module('talend.sunchoke.tabs'));

    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();

        createController = () => {
            return $componentController(
                'scTabs',
                { $scope: scope},
                {onTabChange: jasmine.createSpy('onTabChange')}
            );
        };
    }));

    describe('register', () => {
        it('should register tabs', () => {
            //given
            const tab1 = {tabTitle: 'Flash'};
            const tab2 = {tabTitle: 'Arrow'};

            const ctrl = createController();
            expect(ctrl.tabs.length).toBe(0);

            //when
            ctrl.register(tab1);
            ctrl.register(tab2);

            //then
            expect(ctrl.tabs).toEqual([tab1, tab2]);
        });

        it('should set first added tab as active tab', () => {
            //given
            const tab1 = {tabTitle: 'Flash'};
            const tab2 = {tabTitle: 'Arrow'};

            const ctrl = createController();
            expect(ctrl.tabs.length).toBe(0);

            //when
            ctrl.register(tab1);
            ctrl.register(tab2);

            //then
            expect(tab1.active).toBeTruthy();
            expect(tab2.active).toBeFalsy();
        });
    });

    describe('select', () => {
        describe('manually', () => {
            it('should set selected tab as active', () => {
                //given
                const tab1 = {tabTitle: 'Flash'};
                const tab2 = {tabTitle: 'Arrow'};
                const tab3 = {tabTitle: 'Superman'};

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(tab3.active).toBeFalsy();

                //when
                ctrl.select(tab3);

                //then
                expect(tab3.active).toBeTruthy();
            });

            it('should set selected tab as active', () => {
                //given
                const tab1 = {tabTitle: 'Flash'};
                const tab2 = {tabTitle: 'Arrow'};
                const tab3 = {tabTitle: 'Superman'};

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                tab1.active = true;

                //when
                ctrl.select(tab3);

                //then
                expect(tab1.active).toBeFalsy();
                expect(tab2.active).toBeFalsy();
            });

            it('should call tab change callback', () => {
                //given
                const tab1 = {tabTitle: 'Flash'};
                const tab2 = {tabTitle: 'Arrow'};
                const tab3 = {tabTitle: 'Superman'};

                const ctrl = createController();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(ctrl.onTabChange).not.toHaveBeenCalled();

                //when
                ctrl.select(tab3);

                //then
                expect(ctrl.onTabChange).toHaveBeenCalled();
            });
        });

        describe('programmatically', () => {
            it('should set selected tab as active', () => {
                //given
                const tab1 = {tabTitle: 'Flash'};
                const tab2 = {tabTitle: 'Arrow'};
                const tab3 = {tabTitle: 'Superman'};

                const ctrl = createController();
                ctrl.$onInit();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(tab3.active).toBeFalsy();

                //when
                ctrl.selectedTab = 2;
                scope.$digest();

                //then
                expect(tab3.active).toBeTruthy();
            });

            it('should set selected tab as active', () => {
                //given
                const tab1 = {tabTitle: 'Flash'};
                const tab2 = {tabTitle: 'Arrow'};
                const tab3 = {tabTitle: 'Superman'};

                const ctrl = createController();
                ctrl.$onInit();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                tab1.active = true;

                //when
                ctrl.selectedTab = 2;
                scope.$digest();

                //then
                expect(tab1.active).toBeFalsy();
                expect(tab2.active).toBeFalsy();
            });

            it('should call tab change callback', () => {
                //given
                const tab1 = {tabTitle: 'Flash'};
                const tab2 = {tabTitle: 'Arrow'};
                const tab3 = {tabTitle: 'Superman'};

                const ctrl = createController();
                ctrl.$onInit();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(ctrl.onTabChange).not.toHaveBeenCalled();

                //when
                ctrl.selectedTab = 2;
                scope.$digest();

                //then
                expect(ctrl.onTabChange).toHaveBeenCalled();
            });

            it('should do nothing if the index is out of bound', () => {
                //given
                const tab1 = {tabTitle: 'Flash'};
                const tab2 = {tabTitle: 'Arrow'};
                const tab3 = {tabTitle: 'Superman'};

                const ctrl = createController();
                ctrl.$onInit();
                ctrl.register(tab1);
                ctrl.register(tab2);
                ctrl.register(tab3);

                expect(tab1.active).toBeTruthy();
                expect(tab2.active).toBeFalsy();
                expect(tab3.active).toBeFalsy();
                expect(ctrl.onTabChange).not.toHaveBeenCalled();

                //when
                ctrl.selectedTab = 10;
                scope.$digest();

                //then
                expect(tab1.active).toBeTruthy();
                expect(tab2.active).toBeFalsy();
                expect(tab3.active).toBeFalsy();
                expect(ctrl.onTabChange).not.toHaveBeenCalled();
            });
        });
    });

    describe('unregister', () => {
        it('should unregister tab', () => {
            //given
            const tab1 = {tabTitle: 'Flash'};
            const tab2 = {tabTitle: 'Arrow'};

            const ctrl = createController();
            ctrl.tabs = [tab1, tab2];

            //when
            ctrl.unregister(tab2);

            //then
            expect(ctrl.tabs).toEqual([tab1]);
        });
    });

});