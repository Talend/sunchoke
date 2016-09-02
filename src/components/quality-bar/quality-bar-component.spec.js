/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Quality bar component', () => {
    'use strict';

    let scope;
    let element;
    let createElement;
    let controller;

    beforeEach(angular.mock.module('talend.sunchoke.quality-bar'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        createElement = () => {
            const html = '<sc-quality-bar quality="quality" has-menu="hasMenu" is-trusted="isTrusted" enter-animation="enterAnimation"></sc-quality-bar>';
            element = $compile(html)(scope);
            scope.$digest();

            controller = element.controller('scQualityBar');
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    describe('with enter animation', () => {
        it(' should enable transition', () => {
            //given
            scope.quality = {
                valid: 10,
                invalid: 20,
                empty: 70
            };
            scope.enterAnimation = true;
            createElement();

            //when
            scope.$digest();

            //then
            expect(controller.blockTransition).toBe(false);
        });

        it(' should reset the width object', () => {
            //given
            scope.quality = {
                valid: 10,
                invalid: 20,
                empty: 70
            };
            scope.enterAnimation = true;
            createElement();

            //when
            scope.$digest();

            //then
            expect(controller.width).toEqual({
                invalid: 0,
                empty: 0,
                valid: 0
            });
        });

        it(' compute percentage and width after a 300ms timeout', inject(($timeout) => {
            //given
            scope.quality = {
                valid: 10,
                invalid: 20,
                empty: 70
            };
            scope.enterAnimation = true;
            createElement();

            //when
            scope.$digest();
            $timeout.flush(300);

            //then
            expect(controller.percent).toEqual({ invalid: 20, empty: 70, valid: 10 });
            expect(controller.width).toEqual({ invalid: 20, empty: 70, valid: 10 });
        }));
    });

    describe('without enter animation', () => {
        beforeEach(inject(($compile) => {
            createElement = () => {
                const html = '<sc-quality-bar quality="quality" has-menu="hasMenu" enter-animation="false"></sc-quality-bar>';
                element = $compile(html)(scope);
                scope.$digest();

                controller = element.controller('scQualityBar');
            };
        }));

        it(' should not enable transition', () => {
            //given
            scope.quality = {
                valid: 10,
                invalid: 20,
                empty: 70
            };
            createElement();

            //when
            scope.$digest();

            //then
            expect(controller.blockTransition).toBe(true);
        });

        it('compute percentage and width with no animation', () => {
            //given
            scope.quality = {
                valid: 10,
                invalid: 20,
                empty: 70
            };
            createElement();

            //when
            scope.$digest();

            //then
            expect(controller.percent).toEqual({ invalid: 20, empty: 70, valid: 10 });
            expect(controller.width).toEqual({ invalid: 20, empty: 70, valid: 10 });
        });
    });


    describe('without menu', () => {
        beforeEach(inject(($compile) => {
            createElement = () => {
                const html = '<sc-quality-bar quality="quality" has-menu="hasMenu" is-trusted="true" enter-animation="false"></sc-quality-bar>';
                element = $compile(html)(scope);
                scope.$digest();

                controller = element.controller('scQualityBar');
            };
        }));

        it('should render only the 3 partitions', inject(($timeout) => {
            //given
            scope.quality = {
                valid: 10,
                invalid: 20,
                empty: 70
            };
            scope.hasMenu = false;
            createElement();

            //when
            scope.$digest();
            $timeout.flush(300);

            //then
            expect(element.find('.valid-partition').eq(0)[0].hasAttribute('talend-dropdown')).toBe(false);
        }));
    });

    describe('with valid menu', () => {
        beforeEach(inject(($compile) => {
            createElement = () => {
                const html = '<sc-quality-bar quality="quality" has-menu="hasMenu" is-trusted="true" enter-animation="false">' +
                    '<valid-menu-items><li class="column-action">valid</li></valid-menu-items>' +
                    '<empty-menu-items><li class="column-action">empty</li></empty-menu-items>' +
                    '<invalid-menu-items><li class="column-action">invalid</li></invalid-menu-items>' +
                    '</sc-quality-bar>';
                element = $compile(html)(scope);
                scope.$digest();

                controller = element.controller('scQualityBar');
            };
        }));

        it('should render menu and its content', () => {
            //given
            scope.quality = {
                valid: 10,
                invalid: 20,
                empty: 70
            };
            scope.hasMenu = true;
            createElement();

            //when
            scope.$digest();

            //then
            expect(element.find('.valid-partition').eq(0)[0].hasAttribute('talend-dropdown')).toBe(true);
            expect(element.find('.valid-partition .dropdown-container .dropdown-menu .column-action').text()).toBe('valid');

            expect(element.find('.empty-partition').eq(0)[0].hasAttribute('talend-dropdown')).toBe(true);
            expect(element.find('.empty-partition .dropdown-container .dropdown-menu .column-action').text()).toBe('empty');

            expect(element.find('.invalid-partition').eq(0)[0].hasAttribute('talend-dropdown')).toBe(true);
            expect(element.find('.invalid-partition .dropdown-container .dropdown-menu .column-action').text()).toBe('invalid');
        });
    });

    describe('with no trusted statistics', () => {
        it('should not render its content', () => {
            //given
            scope.quality = {
                valid: 10,
                invalid: 20,
                empty: 70
            };
            scope.isTrusted = false;
            createElement();

            //when
            scope.$digest();

            //then
            expect(element.find('.quality-bar').children().length).toBe(0);
        });
    });
});
