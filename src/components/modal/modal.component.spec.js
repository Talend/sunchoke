/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Modal component', () => {
    let createElement;
    let scope;
    let element;

    beforeEach(angular.mock.module('talend.sunchoke.modal'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new(true);
        scope.beforeClose = jasmine.createSpy('beforeClose');
        scope.onClose = jasmine.createSpy('onClose');
        scope.primaryClick = jasmine.createSpy('primaryClick');

        createElement = () => {
            const template = `
                <sc-modal visible="isVisible"
                          close-button="closeButton"
                          close-on-escape="closeOnEscape"
                          close-on-overlay-click="closeOnOverlayClick"
                          validate-on-enter="validateOnEnter"
                          before-close="beforeClose()"
                          on-close="onClose()">
                    <sc-modal-header id="myModalHeader">My modal title</sc-modal-header>
                    <sc-modal-content  id="myModalContent">
                        <button class="sc-modal-close" id="close-button">Close</button>
                        <button class="sc-modal-primary" ng-click="primaryClick()">Primary</button>
                    </sc-modal-content>
                </sc-modal>
            `;
            element = $compile(template)(scope);
            scope.$digest();
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    describe('input#visible', () => {
        it('should render modal when it is true', () => {
            // given
            createElement();
            expect(element.find('.sc-modal-overlay').length).toBe(0);

            // when
            scope.isVisible = true;
            scope.$digest();

            // then
            expect(element.find('.sc-modal-overlay').length).toBe(1);
        });

        it('should NOT render modal when it is false', () => {
            // given
            createElement();
            expect(element.find('.sc-modal-overlay').length).toBe(0);

            // when
            scope.isVisible = false;
            scope.$digest();

            // then
            expect(element.find('.sc-modal-overlay').length).toBe(0);
        });
    });

    describe('input#close-button', () => {
        it('should render close button when it is true', () => {
            // given
            scope.isVisible = true;
            scope.closeButton = true;

            // when
            createElement();

            // then
            expect(element.find('.sc-modal-close-btn').length).toBe(1);
        });

        it('should NOT render close button when it is false', () => {
            // given
            scope.isVisible = true;
            scope.closeButton = false;

            // when
            createElement();

            // then
            expect(element.find('.sc-modal-close-btn').length).toBe(0);
        });

        it('should close modal on button click', () => {
            // given
            scope.isVisible = true;
            scope.closeButton = true;
            createElement();
            expect(element.find('.sc-modal-overlay').length).toBe(1);

            // when
            element.find('.sc-modal-close-btn').click();

            // then
            expect(element.find('.sc-modal-overlay').length).toBe(0);
        });
    });

    describe('input#close-on-escape', () => {
        it('should close modal on ESC keydown when it is true', () => {
            // given
            scope.isVisible = true;
            scope.closeOnEscape = true;
            createElement();
            expect(element.find('.sc-modal-overlay').length).toBe(1);

            // when
            const esc = new angular.element.Event('keydown');
            esc.keyCode = 27;
            element.find('.sc-modal-inner').eq(0).trigger(esc);
            scope.$digest();

            // then
            expect(element.find('.sc-modal-overlay').length).toBe(0);
        });

        it('should NOT close modal on ESC keydown when it is false', () => {
            // given
            scope.isVisible = true;
            scope.closeOnEscape = false;
            createElement();
            expect(element.find('.sc-modal-overlay').length).toBe(1);

            // when
            const esc = new angular.element.Event('keydown');
            esc.keyCode = 27;
            element.find('.sc-modal-inner').eq(0).trigger(esc);
            scope.$digest();

            // then
            expect(element.find('.sc-modal-overlay').length).toBe(1);
        });
    });

    describe('input#close-on-overlay-click', () => {
        it('should close modal on overlay click when it is true', () => {
            // given
            scope.isVisible = true;
            scope.closeOnOverlayClick = true;
            createElement();
            const overlay = element.find('.sc-modal-overlay');
            expect(overlay.length).toBe(1);

            // when
            overlay.eq(0).click();

            // then
            expect(element.find('.sc-modal-overlay').length).toBe(0);
        });

        it('should NOT close modal on overlay click when it is false', () => {
            // given
            scope.isVisible = true;
            scope.closeOnOverlayClick = false;
            createElement();
            const overlay = element.find('.sc-modal-overlay');
            expect(overlay.length).toBe(1);

            // when
            overlay.eq(0).click();

            // then
            expect(element.find('.sc-modal-overlay').length).toBe(1);
        });
    });

    describe('input#validate-on-enter', () => {
        it('should click the primary button on ENTER keydown when it is true',
            inject(($timeout) => {
                // given
                scope.isVisible = true;
                scope.validateOnEnter = true;
                createElement();
                expect(scope.primaryClick).not.toHaveBeenCalled();

                // when
                const enter = new angular.element.Event('keydown');
                enter.keyCode = 13;
                element.find('.sc-modal-inner').eq(0).trigger(enter);
                $timeout.flush();

                // then
                expect(scope.primaryClick).toHaveBeenCalled();
            }));

        it('should NOT click the primary button on ENTER keydown when it is false',
            inject(($timeout) => {
                // given
                scope.isVisible = true;
                scope.validateOnEnter = false;
                createElement();
                expect(scope.primaryClick).not.toHaveBeenCalled();

                // when
                const enter = new angular.element.Event('keydown');
                enter.keyCode = 13;
                element.find('.sc-modal-inner').eq(0).trigger(enter);
                $timeout.flush();

                // then
                expect(scope.primaryClick).not.toHaveBeenCalled();
            }));
    });

    describe('class#sc-modal-close', () => {
        it('should tag an element to close the modal on click', () => {
            // given
            scope.isVisible = true;
            createElement();
            expect(element.find('.sc-modal-overlay').length).toBe(1);

            // when
            element.find('#close-button').click();

            // then
            expect(element.find('.sc-modal-overlay').length).toBe(0);
        });
    });

    describe('transclusion', () => {
        it('should inject sc-modal-title element', () => {
            // given
            scope.isVisible = true;

            // when
            createElement();
            // then
            expect(element.find('.sc-modal-title').find('#myModalHeader').length).toBe(1);
        });

        it('should inject sc-modal-content element', () => {
            // given
            scope.isVisible = true;

            // when
            createElement();

            // then
            expect(element.find('.sc-modal-content').find('> #myModalContent').length).toBe(1);
        });
    });

    describe('close', () => {
        it('should call beforeClose callback', () => {
            // given
            scope.isVisible = true;
            createElement();
            expect(scope.beforeClose).not.toHaveBeenCalled();

            // when
            element.find('#close-button').click();

            // then
            expect(scope.beforeClose).toHaveBeenCalled();
        });

        it('should call onClose callback', () => {
            // given
            scope.isVisible = true;
            createElement();
            expect(scope.onClose).not.toHaveBeenCalled();

            // when
            element.find('#close-button').click();

            // then
            expect(scope.onClose).toHaveBeenCalled();
        });

        it('should NOT close when beforeClose() returns false', () => {
            // given
            scope.isVisible = true;
            scope.beforeClose.and.returnValue(false);
            createElement();

            expect(scope.onClose).not.toHaveBeenCalled();
            expect(element.find('.sc-modal-overlay').length).toBe(1);

            // when
            element.find('#close-button').click();

            // then
            expect(scope.onClose).not.toHaveBeenCalled();
            expect(element.find('.sc-modal-overlay').length).toBe(1);
        });
    });
});
