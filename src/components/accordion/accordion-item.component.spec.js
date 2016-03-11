/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Accordion item component', () => {
    let createElement, scope, element;

    beforeEach(angular.mock.module('talend.sunchoke.accordion'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        scope.onOpen = jasmine.createSpy('onOpen');

        createElement = () => {
            var template = `
                <sc-accordion>
                    <sc-accordion-item default="isDefault" on-open="onOpen()">
                        <trigger>Angular</trigger>
                        <content>https://www.angularjs.org</content>
                    </sc-accordion-item>
                </sc-accordion>
            `;
            element = $compile(template)(scope);
            scope.$digest();
        };
    }));

    describe('render', () => {
        it('should transclude trigger/content in the right container', () => {
            //when
            createElement();

            //then
            expect(element.find('.sc-accordion').eq(0).find('.trigger-container').eq(0).text()).toBe('Angular');
            expect(element.find('.sc-accordion').eq(0).find('.content-container').eq(0).text()).toBe('https://www.angularjs.org');
        });
    });

    describe('default flag', () => {
        it('should NOT set open class to NON default accordion', () => {
            //given
            scope.isDefault = false;

            //when
            createElement();

            //then
            expect(element.find('.sc-accordion').eq(0).hasClass('open')).toBe(false);
        });

        it('should set open class to default accordion', () => {
            //given
            scope.isDefault = true;

            //when
            createElement();

            //then
            expect(element.find('.sc-accordion').eq(0).hasClass('open')).toBe(true);
        });
    });

    describe('trigger click', () => {
        it('should toggle accordion', () => {
            //given
            createElement();
            expect(element.find('.sc-accordion').eq(0).hasClass('open')).toBe(false);

            //when
            element.find('.trigger-container').eq(0).click();

            //then
            expect(element.find('.sc-accordion').eq(0).hasClass('open')).toBe(true);
        });
    });
});