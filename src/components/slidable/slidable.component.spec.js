/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

describe('Slidable component', () => {
    let createElement, createResizableElement, createElementVisibleKey, scope, element;
    const resizableId = 'resizableId';
    const visibleStateKey = 'visibilityKey';

    beforeEach(angular.mock.module('talend.sunchoke.slidable'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        createElement = (side) => {
            const template = `
                <sc-slidable visible="visible" side="${side}" control-bar="controlBar">content</sc-slidable>
            `;
            element = $compile(template)(scope);
            scope.$digest();
        };

        createElementVisibleKey = (side) => {
            const template = `
                <sc-slidable visible="visible" side="${side}" control-bar="controlBar" visible-state-key="${visibleStateKey}">content</sc-slidable>
            `;
            element = $compile(template)(scope);
            scope.$digest();
        };

        createResizableElement = (side) => {
            const template = `
                <sc-slidable visible="visible" side="${side}" control-bar="controlBar" resizable-key="${resizableId}">content</sc-slidable>
            `;
            element = $compile(template)(scope);
            scope.$digest();
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    it('should create element', () => {
        //given

        //when
        createElement();

        //then
        expect(element).toBeTruthy();
    });

    it('should hide slidable on creation', () => {
        //given
        scope.visible = false;

        //when
        createElement();

        //then
        const slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(true);
    });

    it('should show slidable on creation', () => {
        //given
        scope.visible = true;

        //when
        createElement();

        //then
        const slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(false);
    });

    it('should hide slidable on action click', () => {
        //given
        scope.visible = true;
        scope.controlBar = true;
        createElement();
        expect(element.hasClass('slide-hide')).toBe(false);

        //when
        element.find('.action').eq(0).click();

        //then
        const slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(true);
    });

    it('should show slidable on action click', () => {
        //given
        scope.visible = false;
        scope.controlBar = true;
        createElement();
        let slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(true);

        //when
        element.find('.action').eq(0).click();
        //then
        slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(false);
    });

    it('should show slidable on action click with size in storage', inject(($window) => {
        //given
        scope.visible = false;
        scope.controlBar = true;

        createResizableElement('left');
        let slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(true);
        $window.localStorage.setItem(resizableId, '900');

        //when
        element.find('.action').eq(0).click();

        //then
        slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(false);
        expect(element.css('flex')).toBe('0 0 900px');
    }));

    it('should show slidable on action click and set visibility in storage', inject(($window) => {
        //given
        scope.visible = false;
        scope.controlBar = true;
        $window.localStorage.setItem(visibleStateKey, false);

        createElementVisibleKey('left');
        let slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(true);

        //when
        element.find('.action').eq(0).click();

        //then
        slidable = element.find('.slidable').eq(0);
        expect(slidable.hasClass('slide-hide')).toBe(false);
        expect(JSON.parse($window.localStorage.getItem(visibleStateKey))).toBeTruthy();
    }));

    it("should show '>' when left slidable is hidden", () => {
        //given
        scope.visible = false;
        scope.controlBar = true;

        //when
        createElement('left');
        //then
        const actionOnlySpan = element.find('.action').eq(0).find('span').eq(0);
        const displayedActionText = actionOnlySpan.find('span').not('.ng-hide').eq(0).text();
        expect(displayedActionText).toBe('›');
    });

    it("should show '<' when left slidable is displayed", () => {
        //given
        scope.visible = true;
        scope.controlBar = true;

        //when
        createElement('left');

        //then
        const actionOnlySpan = element.find('.action').eq(0).find('span').eq(0);
        const displayedActionText = actionOnlySpan.find('span').not('.ng-hide').eq(0).text();
        expect(displayedActionText).toBe('‹');
    });

    it("should show '<' when right slidable is hidden", () => {
        //given
        scope.visible = false;
        scope.controlBar = true;

        //when
        createElement('right');

        //then
        const actionOnlySpan = element.find('.action').eq(0).find('span').eq(0);
        const displayedActionText = actionOnlySpan.find('span').not('.ng-hide').eq(0).text();
        expect(displayedActionText).toBe('‹');
    });

    it("should show '>' when right slidable is displayed", () => {
        //given
        scope.visible = true;
        scope.controlBar = true;

        //when
        createElement('right');

        //then
        const actionOnlySpan = element.find('.action').eq(0).find('span').eq(0);
        const displayedActionText = actionOnlySpan.find('span').not('.ng-hide').eq(0).text();
        expect(displayedActionText).toBe('›');
    });

    it('should set and configure resize feature on left slidable', () => {
        //given
        scope.visible = true;
        scope.controlBar = true;

        //when
        createResizableElement('right');

        //then
        const resizeBar = element.find('.resize-bar.resize-right');
        expect(resizeBar.length).toBe(1);
    });

    it('should set flex constant size on slidable creation if there is a size in localStorage', inject(($window) => {
        //given
        $window.localStorage.setItem(resizableId, '500');
        scope.visible = true;
        scope.controlBar = true;

        //when
        createResizableElement('right');

        //then
        const elementStyle = element[0].style;

        const flexStyle = elementStyle['flex'] || elementStyle['-webkit-flex'];
        expect(flexStyle).toBe('0 0 500px');
    }));

    describe('event listeners', () => {
        describe('drag flag', () => {
            it('should set drag flag to true on resize bar handler mousedown', () => {
                //given
                createElement();
                scope.visible = true;

                createResizableElement('left');

                const event = angular.element.Event('mousedown');
                const ctrl = element.controller('scSlidable');
                expect(ctrl.drag).toBe(false);

                //when
                element.find('.resize-bar').eq(0).trigger(event);

                //then
                expect(ctrl.drag).toBe(true);
            });

            it('should set drag flag to false on window mouseup and save size in storage', inject(($window) => {
                //given
                scope.visible = true;

                createResizableElement('left');
                const eventMove = angular.element.Event('mousemove');
                eventMove.clientX = 700;
                const eventUp = angular.element.Event('mouseup');
                const ctrl = element.controller('scSlidable');
                ctrl.drag = true;

                //when
                angular.element($window).trigger(eventMove);
                angular.element($window).trigger(eventUp);

                //then
                expect(ctrl.drag).toBe(false);
                expect($window.localStorage.getItem(resizableId)).toBe('700');

            }));

            it('should set drag flag to false on window mouseup and set left panel width', inject(($window) => {
                //given
                scope.visible = true;

                createResizableElement('left');

                const event = angular.element.Event('mousemove');
                event.clientX = 400;
                const ctrl = element.controller('scSlidable');
                ctrl.drag = true;

                //when
                angular.element($window).trigger(event);

                //then
                expect(element.css('flex')).toBe('0 1 400px');

            }));

            it('should set drag flag to false on window mouseup and set right panel width', inject(($window) => {
                //given
                scope.visible = true;

                createResizableElement('right');

                const event = angular.element.Event('mousemove');
                event.clientX = 400;
                const ctrl = element.controller('scSlidable');
                ctrl.drag = true;

                //when
                angular.element($window).trigger(event);
                const width = $window.innerWidth - 400;
                //then
                expect(element.css('flex')).toBe('0 1 ' + width + 'px');

            }));

            it('should do nothing on mouse move without drag on', inject(($window) => {
                //given
                $window.localStorage.setItem(resizableId, '500');
                scope.visible = true;
                scope.controlBar = true;
                createResizableElement('right');
                const elementStyle = element[0].style;
                let flexStyle = elementStyle['flex'] || elementStyle['-webkit-flex'];
                expect(flexStyle).toBe('0 0 500px');
                const event = angular.element.Event('mousemove');
                event.clientX = 400;

                //when
                angular.element($window).trigger(event);

                //then
                flexStyle = elementStyle['flex'] || elementStyle['-webkit-flex'];
                expect(flexStyle).toBe('0 0 500px');
            }));
        })
    });
});