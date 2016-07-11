/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

const clickDropdownTrigger = (elm) => {
    elm.find('.sc-dropdown-trigger').eq(0).click();
};

const clickDropdownContent = (elm) => {
    elm.find('.sc-dropdown-content').eq(0).click();
};

describe('Dropdown component', () => {
    'use strict';

    let scope, element, createElement;

    beforeEach(angular.mock.module('talend.sunchoke.dropdown'));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        scope.onOpen = jasmine.createSpy('onOpen');

        createElement = () => {
            element = angular.element(`
                <sc-dropdown side="{{side}}" on-open="onOpen()" close-on-select="closeOnSelect">
                    <sc-dropdown-trigger id="trigger">
                        Trigger
                    </sc-dropdown-trigger>
                    <sc-dropdown-content id="content">
                        Content
                    </sc-dropdown-content>
                </sc-dropdown>
            `);
            angular.element('body').append(element);
            $compile(element)(scope);
            scope.$digest();
        }
    }));

    describe('render', () => {
        it('should transclude sc-dropdown-trigger', () => {
            //when
            createElement();

            //then
            expect(element.find('.sc-dropdown-trigger').find('#trigger').length).toBe(1);
        });

        it('should transclude sc-dropdown-content', () => {
            //when
            createElement();

            //then
            expect(element.find('.sc-dropdown-content').find('#content').length).toBe(1);
        });

        it('should hide dropdown content by default', () => {
            //when
            createElement();

            //then
            expect(element.hasClass('show')).toBe(false);
        });
    });

    describe('dropdown action', () => {
        it('should show dropdown on action click', () => {
            //given
            createElement();
            expect(element.hasClass('show')).toBe(false);

            //when
            clickDropdownTrigger(element);

            //then
            expect(element.hasClass('show')).toBe(true);
        });
    });

    describe('body listeners', () => {
        it('should register body event listeners on dropdown display', () => {
            //given
            createElement();
            expect($._data(angular.element('body')[0], 'events')).not.toBeDefined();

            //when
            clickDropdownTrigger(element);

            //then
            const listeners = $._data(angular.element('body')[0], 'events');
            expect(listeners).toBeDefined();
            expect(listeners.mousedown.length).toBe(1);
            expect(listeners.keydown.length).toBe(1);
        });

        it('should unregister body event listeners on dropdown hide', () => {
            //given
            createElement();
            clickDropdownTrigger(element);
            expect($._data(angular.element('body')[0], 'events')).toBeDefined();

            //when
            clickDropdownTrigger(element);

            //then
            expect($._data(angular.element('body')[0], 'events')).not.toBeDefined();
        });

        it('should unregister body event listeners on destroy', () => {
            //given
            createElement();
            clickDropdownTrigger(element);
            expect($._data(angular.element('body')[0], 'events')).toBeDefined();

            //when
            scope.$destroy();

            //then
            expect($._data(angular.element('body')[0], 'events')).not.toBeDefined();
        });

        it('should hide dropdown on body mousedown', () => {
            //given
            createElement();
            clickDropdownTrigger(element);
            expect(element.hasClass('show')).toBe(true);

            //when
            angular.element('body').mousedown();

            //then
            expect(element.hasClass('show')).toBe(false);
        });

        it('should hide dropdown on body ESC keydown', () => {
            //given
            createElement();
            clickDropdownTrigger(element);
            expect(element.hasClass('show')).toBe(true);

            const event = angular.element.Event('keydown');
            event.keyCode = 27;

            //when
            angular.element('body').trigger(event);

            //then
            expect(element.hasClass('show')).toBe(false);
        });

        it('should NOT hide dropdown on body NON ESC keydown', () => {
            //given
            createElement();
            clickDropdownTrigger(element);
            expect(element.hasClass('show')).toBe(true);

            const event = angular.element.Event('keydown');
            event.keyCode = 14;

            //when
            angular.element('body').trigger(event);

            //then
            expect(element.hasClass('show')).toBe(true);
        });
    });

    describe('window listeners', () => {
        it('should register window event listeners on dropdown display', inject(($window) => {
            //given
            createElement();
            expect($._data(angular.element($window)[0], 'events')).not.toBeDefined();

            //when
            clickDropdownTrigger(element);

            //then
            const listeners = $._data(angular.element($window)[0], 'events');
            expect(listeners).toBeDefined();
            expect(listeners.resize.length).toBe(1);
            expect(listeners.scroll.length).toBe(1);
        }));

        it('should unregister window event listeners on dropdown hide', inject(($window) => {
            //given
            createElement();
            clickDropdownTrigger(element);
            expect($._data(angular.element($window)[0], 'events')).toBeDefined();

            //when
            clickDropdownTrigger(element);

            //then
            expect($._data(angular.element($window)[0], 'events')).not.toBeDefined();
        }));

        it('should unregister window event listeners on destroy', inject(($window) => {
            //given
            createElement();
            clickDropdownTrigger(element);
            expect($._data(angular.element($window)[0], 'events')).toBeDefined();

            //when
            scope.$destroy();

            //then
            expect($._data(angular.element($window)[0], 'events')).not.toBeDefined();
        }));
    });

    describe('open callback', () => {
        it('should execute open callback on dropdown open', () => {
            //given
            createElement();
            expect(scope.onOpen).not.toHaveBeenCalled();

            //when
            clickDropdownTrigger(element);

            //then
            expect(scope.onOpen).toHaveBeenCalled();
        });
    });

    describe('horizontal position (side)', () => {
        const assertContentIsOnTheLeft = (content) => {
            expect(content.hasClass('right')).toBe(false);
            expect(content[0].style.left).not.toBe('auto');
            expect(content[0].style.right).toBe('auto');
        };

        const assertContentIsOnTheRight = (content) => {
            expect(content.hasClass('right')).toBe(true);
            expect(content[0].style.left).toBe('auto');
            expect(content[0].style.right).not.toBe('auto');
        };

        it('should force side to left', () => {
            //given
            scope.side = 'left';
            createElement();
            const content = element.find('.sc-dropdown-content').eq(0);

            expect(content.hasClass('right')).toBe(false);

            //when
            clickDropdownTrigger(element);

            //then
            assertContentIsOnTheLeft(content);
        });

        it('should force side to right', () => {
            //given
            scope.side = 'right';
            createElement();
            const content = element.find('.sc-dropdown-content').eq(0);

            expect(content.hasClass('right')).toBe(false);

            //when
            clickDropdownTrigger(element);

            //then
            assertContentIsOnTheRight(content);
        });

        it('should set side to right by default', () => {
            //given
            scope.side = '';
            createElement();
            const content = element.find('.sc-dropdown-content').eq(0);

            expect(content.hasClass('right')).toBe(false);

            //when
            clickDropdownTrigger(element);

            //then
            assertContentIsOnTheRight(content);
        });

        it('should set side to left by default when content\'s left border is out of window', () => {
            //given
            scope.side = '';
            createElement();
            const content = element.find('.sc-dropdown-content').eq(0);

            spyOn(content[0], 'getBoundingClientRect').and.returnValue({left: -5}); //left border is out of the window
            expect(content.hasClass('right')).toBe(false);

            //when
            clickDropdownTrigger(element);

            //then
            assertContentIsOnTheLeft(content);
        });
    });

    describe('horizontal position (side)', () => {
        it('should put the content on the bottom', () => {
            //given
            scope.side = 'left';
            createElement();
            const content = element.find('.sc-dropdown-content').eq(0);

            expect(content.hasClass('top')).toBe(false);

            //when
            clickDropdownTrigger(element);

            //then
            expect(content.hasClass('top')).toBe(false);
        });

        it('should put the content on the top when content\'s bottom border is out of window', inject(($window) => {
            //given
            scope.side = '';
            createElement();
            const content = element.find('.sc-dropdown-content').eq(0);
            const windowHeight = angular.element($window)[0].innerHeight;

            spyOn(content[0], 'getBoundingClientRect').and.returnValue({top: 50, height: windowHeight, bottom: windowHeight + 50}); //bottom border out of window
            expect(content.hasClass('top')).toBe(false);

            //when
            clickDropdownTrigger(element);

            //then
            expect(content.hasClass('top')).toBe(true);
        }));
    });

    describe('close on select', () => {
        it('should stop content mousedown propagation to avoid body callback that hide it', () => {
            //given
            createElement();
            clickDropdownTrigger(element);

            expect(element.hasClass('show')).toBe(true);

            //when
            element.find('.sc-dropdown-content').eq(0).mousedown();

            //then
            expect(element.hasClass('show')).toBe(true);
        });

        it('should close dropdown on dropdown content click', () => {
            //given
            scope.closeOnSelect = true;
            createElement();
            clickDropdownTrigger(element);

            expect(element.hasClass('show')).toBe(true);

            //when
            clickDropdownContent(element);

            //then
            expect(element.hasClass('show')).toBe(false);
        });

        it('should NOT close dropdown on dropdown content click', () => {
            //given
            scope.closeOnSelect = false;
            createElement();
            clickDropdownTrigger(element);

            expect(element.hasClass('show')).toBe(true);

            //when
            clickDropdownContent(element);

            //then
            expect(element.hasClass('show')).toBe(true);
        });
    });
});