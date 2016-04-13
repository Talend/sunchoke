/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

describe('Dropdown menu component', () => {
    let createElement, scope, element;

    beforeEach(angular.mock.module('talend.sunchoke.dropdown-menu'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        createElement = () => {
            element = angular.element(`
                <sc-dropdown-menu>
                    <sc-dropdown-menu-trigger id="trigger">
                        <span class="sc-dropdown-menu-trigger">Username</span>
                    </sc-dropdown-menu-trigger>
                    <sc-dropdown-menu-dropdown id="dropdown">
                        <ul class="menu">
                            <li ng-click="logout()">
                                <span class="sc-dropdown-menu-item-label">Logout</span>
                            </li>
                        </ul>
                    </sc-dropdown-menu-dropdown>
                </sc-dropdown-menu>
            `);
            angular.element('body').append(element);
            $compile(element)(scope);
            scope.$digest();
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    describe('transclusion', () => {
        it('should transclude sc-dropdown-menu-trigger', () => {
            //given

            //when
            createElement();

            //then
            expect(element.find('.sc-dropdown-menu-trigger').find('#trigger').length).toBe(1);
        });

        it('should transclude sc-dropdown-menu-dropdown', () => {
            //given
            createElement();
            const ctrl = element.controller('scDropdownMenu');

            //when
            ctrl.visible = true;
            scope.$digest();

            //then
            expect(element.find('.sc-dropdown-menu-dropdown').find('#dropdown').length).toBe(1);
        });
    });

    describe('menu', () => {
        it('should be hidden by default', () => {
            //given

            //when
            createElement();

            //then
            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(0);
        });

        it('should be rendered on trigger click', () => {
            //given
            createElement();

            //when
            element.find('.sc-dropdown-menu-trigger').eq(0).click();
            scope.$digest();

            //then
            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(1);
        });

        it('should be removed on trigger click when it was initially rendered', () => {
            //given
            createElement();
            const ctrl = element.controller('scDropdownMenu');
            ctrl.visible = true;
            scope.$digest();

            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(1);

            //when
            element.find('.sc-dropdown-menu-trigger').eq(0).click();
            scope.$digest();

            //then
            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(0);
        });

        it('should be removed on menu click', () => {
            //given
            createElement();
            const ctrl = element.controller('scDropdownMenu');
            ctrl.visible = true;
            scope.$digest();

            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(1);

            //when
            element.find('.sc-dropdown-menu-dropdown').eq(0).click();
            scope.$digest();

            //then
            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(0);
        });
    });

    describe('body events', () => {
        it('should hide menu', inject(($timeout) => {
            //given
            createElement();
            const ctrl = element.controller('scDropdownMenu');
            ctrl.visible = true;
            scope.$digest();

            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(1);

            //when
            angular.element('body').eq(0).mousedown();
            $timeout.flush();

            //then
            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(0);
        }));

        it('should stop propagation on element mousedown to prevent body mousedown', () => {
            //given
            createElement();
            const ctrl = element.controller('scDropdownMenu');
            ctrl.visible = true;
            scope.$digest();

            expect(element.find('.sc-dropdown-menu-dropdown').length).toBe(1);

            const event = angular.element.Event('mousedown');
            spyOn(event, 'stopPropagation');

            //when
            element.trigger(event);

            //then
            expect(event.stopPropagation).toHaveBeenCalled();
        });

        it('should unregister body mousedown on element remove', () => {
            //given
            createElement();
            expect($._data(angular.element('body')[0], 'events').mousedown.length).toBe(1);

            //when
            scope.$destroy();

            //then
            expect($._data(angular.element('body')[0], 'events')).not.toBeDefined();
        });
    });
});