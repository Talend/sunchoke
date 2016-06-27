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

    let scope, element, createElement, ctrl;

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
                <sc-dropdown side="{{side}}" on-open="onOpen()" close-on-select="closeOnSelect" visible="visible" distance-from-border="{{distanceFromBorder}}">
                    <sc-dropdown-trigger id="trigger">
                        Trigger
                    </sc-dropdown-trigger>
                    <sc-dropdown-content id="content">
                        Content
                        <button id="close" class="sc-dropdown-close">Close</button>
                    </sc-dropdown-content>
                </sc-dropdown>
            `);
            angular.element('body').append(element);
            $compile(element)(scope);
            scope.$digest();
            ctrl = element.controller('scDropdown');
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

    describe('set to visible', () => {
        it('should execute open show content', inject(function ($timeout) {
            //given
            scope.visible = true;

            //when
            createElement();
            spyOn(ctrl, '_showContent');
            $timeout.flush();

            //then
            expect(ctrl._showContent).toHaveBeenCalled();
        }));

        it('should not execute open show content if visible not true', inject(function ($timeout) {
            //given
            scope.visible = "test_val_erronée";

            //when
            createElement();
            spyOn(ctrl, '_showContent');
            $timeout.flush();

            //then
            expect(ctrl._showContent).not.toHaveBeenCalled();
        }));
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

    describe('vertical position ', () => {

        it('should put the content on the bottom if more space at bottom, with scrollbar (content does not fit), ', inject(() => {
            //given
            scope.side = 'left';
            createElement();
            const content = element.find('.sc-dropdown-content');
            const trigger = element.find('.sc-dropdown-trigger');

            spyOn(trigger[0], 'getBoundingClientRect').and.returnValue({top: 0, height: 10, bottom: 10});
            spyOn(content[0], 'getBoundingClientRect').and.returnValue({top: 10, height: 300, bottom: 310});

            //when
            clickDropdownTrigger(element);

            //then
            expect(content.children()[0].style.height).toEqual('260px');
        }));

        it('should put the content on the top if more space at top without scrollbar (content does fit)', () => {
            //given
            scope.side = 'left';
            createElement();
            const content = element.find('.sc-dropdown-content');
            const trigger = element.find('.sc-dropdown-trigger');

            spyOn(trigger[0], 'getBoundingClientRect').and.returnValue({top: 250, height: 10, bottom: 260});
            spyOn(content[0], 'getBoundingClientRect').and.returnValue({top: 260, height: 100, bottom: 300});

            //when
            clickDropdownTrigger(element);

            //then
            expect(content[0].style.top).toEqual('250px');
        });


        it('should put the content on the top if more space at top with scrollbar (content does not fit), ', inject(() => {
            //given
            scope.side = 'left';
            createElement();
            const content = element.find('.sc-dropdown-content');
            const trigger = element.find('.sc-dropdown-trigger');

            spyOn(trigger[0], 'getBoundingClientRect').and.returnValue({top: 250, height: 10, bottom: 260});
            spyOn(content[0], 'getBoundingClientRect').and.returnValue({top: 260, height: 500, bottom: 760});

            //when
            clickDropdownTrigger(element);
            scope.$digest();

            //then            .
            expect(content[0].style.top).toEqual('30px'); // distance from top border
            expect(content.children()[0].style.height).toEqual('215px'); // 250 - 30 -5
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

        it('should close dropdown on "sc-dropdown-close" element click', () => {
            //given
            scope.closeOnSelect = false; // do NOT close on content click
            createElement();
            clickDropdownTrigger(element);

            expect(element.hasClass('show')).toBe(true);

            //when
            element.find('#close').eq(0).click();

            //then
            expect(element.hasClass('show')).toBe(false);
        });
    });
});