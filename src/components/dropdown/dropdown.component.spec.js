/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Dropdown component', () => {
    let scope, element;

    beforeEach(angular.mock.module('talend.sunchoke.dropdown'));

    let clickDropdownToggle = (elm) => {
        elm = elm || element;
        elm.find('.sc-dropdown-action').eq(0).click();
    };

    let clickDropdownItem =  (elm) => {
        elm = elm || element;
        elm.find('a[role="menuitem"]').eq(0).click();
    };

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    describe('closeable dropdown', () => {

        beforeEach(inject(($rootScope, $compile) => {

            scope = $rootScope.$new();

            const html = `<sc-dropdown>
                            <sc-dropdown-action>
                                <div class="grid-header-title">{{ column.id }}</div>
                                <div class="grid-header-type">{{ column.type }}</div>
                            </sc-dropdown-action>
                            <sc-dropdown-menu>
                                <ul class="grid-header-menu">
                                    <li role="presentation"><a role="menuitem" href="#">Hide Column</a></li>
                                    <li class="divider"></li>
                                    <li role="presentation"><a role="menuitem" href="#">Split first Space</a></li>
                                    <li role="presentation"><a role="menuitem" href="#">Uppercase</a></li>
                                </ul>
                            </sc-dropdown-menu>
                        </sc-dropdown>`;
            const body = angular.element('body');
            body.append(element);
            element = $compile(html)(scope);
            scope.$digest();
        }));

        it('should show dropdown-menu on dropdown-action click', () => {
            //given
            const menu = element.find('.sc-dropdown-menu').eq(0);
            expect(menu.hasClass('show-menu')).toBe(false);

            //when
            clickDropdownToggle();

            //then
            expect(menu.hasClass('show-menu')).toBe(true);
        });

        it('should hide dropdown-menu on item click', () => {
            //given
            const menu = element.find('.sc-dropdown-menu').eq(0);
            menu.addClass('show-menu');

            //when
            clickDropdownItem();

            //then
            expect(menu.hasClass('show-menu')).toBe(false);
        });

        it('should register window scroll handler on open', inject(($window) => {
            //given
            expect($._data(angular.element($window)[0], 'events')).not.toBeDefined();

            //when
            clickDropdownToggle();

            //then
            expect($._data(angular.element($window)[0], 'events')).toBeDefined();
            expect($._data(angular.element($window)[0], 'events').scroll.length).toBe(1);
        }));

        it('should unregister window scroll on close', inject(($window) => {
            //given
            clickDropdownToggle();
            expect($._data(angular.element($window)[0], 'events').scroll.length).toBe(1);

            //when
            clickDropdownToggle();

            //then
            expect($._data(angular.element($window)[0], 'events')).not.toBeDefined();
        }));

        it('should hide dropdown-menu on body mousedown',() => {
            //given
            const menu = element.find('.sc-dropdown-menu').eq(0);
            menu.addClass('show-menu');

            //when
            angular.element('body').mousedown();

            //then
            expect(menu.hasClass('show-menu')).toBe(false);

            angular.element('body').off('mousedown');
        });

        it('should unregister body mousedown on element remove', () => {
            //given
            expect($._data(angular.element('body')[0], 'events').mousedown.length).toBe(1);

            //when
            scope.$destroy();
            //then
            expect($._data(angular.element('body')[0], 'events')).not.toBeDefined();
        });

        it('should stop mousedown propagation on dropdown-menu mousedown', () => {
            //given
            let  bodyMouseDown = false;
            const  mouseDownCallBack = function () {
                bodyMouseDown = true;
            };
            angular.element('body').mousedown(mouseDownCallBack);

            //when
            element.find('.sc-dropdown-menu').mousedown();

            //then
            expect(bodyMouseDown).toBe(false);

            angular.element('body').off('mousedown', mouseDownCallBack);
        });

        it('should hide dropdown menu on ESC', () => {
            //given
            const menu = element.find('.sc-dropdown-menu').eq(0);
            menu.addClass('show-menu');

            let event = angular.element.Event('keydown');
            event.keyCode = 27;

            //when
            menu.trigger(event);

            //then
            expect(menu.hasClass('show-menu')).toBe(false);
        });

        it('should not hide dropdown menu on not ESC keydown',() => {
            //given
            const menu = element.find('.sc-dropdown-menu').eq(0);
            menu.addClass('show-menu');

            let event = angular.element.Event('keydown');
            event.keyCode = 13;

            //when
            menu.trigger(event);

            //then
            expect(menu.hasClass('show-menu')).toBe(true);
        });
    });

    describe('not closeable on click dropdown',() => {
        beforeEach(inject(($rootScope, $compile) => {
            scope = $rootScope.$new();

            const html = `<sc-dropdown close-on-select="false">
                            <sc-dropdown-action>
                                <div class="grid-header-title">{{ column.id }}</div>
                                <div class="grid-header-type">{{ column.type }}</div>
                            </sc-dropdown-action>
                            <sc-dropdown-menu>
                                <ul class="grid-header-menu">
                                    <li role="presentation"><a role="menuitem" href="#">Hide Column</a></li>
                                    <li class="divider"></li>
                                    <li role="presentation"><a role="menuitem" href="#">Split first Space</a></li>
                                    <li role="presentation"><a role="menuitem" href="#">Uppercase</a></li>
                                </ul>
                            </sc-dropdown-menu>
                        </sc-dropdown>`;

            element = $compile(html)(scope);
            scope.$digest();
        }));

        it('should not hide dropdown-menu on item click if closeOnSelect is false', () => {
            //given
            const menu = element.find('.sc-dropdown-menu').eq(0);
            menu.addClass('show-menu');

            //when
            clickDropdownItem();

            //then
            expect(menu.hasClass('show-menu')).toBe(true);
        });
    });

    describe('with onOpen action', () => {
        beforeEach(inject(($rootScope, $compile) => {
            scope = $rootScope.$new();
            scope.onOpen = jasmine.createSpy('onOpen');

            const html = `<sc-dropdown on-open="onOpen()">
                            <sc-dropdown-action>
                                <div class="grid-header-title">{{ column.id }}</div>
                                <div class="grid-header-type">{{ column.type }}</div>
                            </sc-dropdown-action>
                            <sc-dropdown-menu>
                                <ul class="grid-header-menu">
                                    <li role="presentation"><a role="menuitem" href="#">Hide Column</a></li>
                                    <li class="divider"></li>
                                    <li role="presentation"><a role="menuitem" href="#">Split first Space</a></li>
                                    <li role="presentation"><a role="menuitem" href="#">Uppercase</a></li>
                                </ul>
                            </sc-dropdown-menu>
                        </sc-dropdown>`;

            element = $compile(html)(scope);
            scope.$digest();
        }));

        it('should call action on open click',() => {
            //given
            expect(scope.onOpen).not.toHaveBeenCalled();

            //when
            clickDropdownToggle();

            //then
            expect(scope.onOpen).toHaveBeenCalled();
        });
    });

    describe('force placement side', () => {
        let createElement;

        beforeEach(inject(($rootScope, $compile) => {
            scope = $rootScope.$new();

            createElement = () => {
                const html = `<sc-dropdown side="{{side}}">
                            <sc-dropdown-action>
                                Action
                            </sc-dropdown-action>
                            <sc-dropdown-menu>
                                <ul class="grid-header-menu">
                                   <li role="presentation">toto</li>
                                </ul>
                            </sc-dropdown-menu>
                        </sc-dropdown>`;
                element = angular.element(html);
                $compile(element)(scope);
                scope.$digest();
            };
        }));

        it('should set menu placement to the right by default', () => {
            //given
            scope.side = null;
            createElement();

            const menu = element.find('.sc-dropdown-menu').eq(0);
            expect(menu.hasClass('right')).toBe(false);

            //when
            clickDropdownToggle();

            //then
            expect(menu.hasClass('right')).toBe(true);
        });

        it('should force menu placement to the left', () => {
            //given
            scope.side = 'left';
            createElement();

            const menu = element.find('.sc-dropdown-menu').eq(0);
            menu.addClass('right');

            //when
            clickDropdownToggle();

            //then
            expect(menu.hasClass('right')).toBe(false);
        });

        it('should force menu placement to the right', () => {
            //given
            scope.side = 'right';
            createElement();

            const menu = element.find('.sc-dropdown-menu').eq(0);
            expect(menu.hasClass('right')).toBe(false);

            //when
            clickDropdownToggle();

            //then
            expect(menu.hasClass('right')).toBe(true);
        });
    });
});