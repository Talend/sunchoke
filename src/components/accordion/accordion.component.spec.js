/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Accordion component', () => {
    let createElement, scope;

    beforeEach(angular.mock.module('talend.sunchoke.accordion'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        createElement = () => {
            var template = `
                <sc-accordion>
                    <sc-accordion-item>
                        <trigger>Angular</trigger>
                        <content>https://www.angularjs.org</content>
                    </sc-accordion-item>
                    <sc-accordion-item>
                        <trigger>React</trigger>
                        <content>https://facebook.github.io/react/</content>
                    </sc-accordion-item>
                    <sc-accordion-item>
                        <trigger>Backbone</trigger>
                        <content>http://backbonejs.org/</content>
                    </sc-accordion-item>
                </sc-accordion>
            `;
            const element = $compile(template)(scope);
            scope.$digest();
            return element;
        };
    }));

    it('should render accordion', () => {
        //when
        const element = createElement();

        //then
        expect(element.find('>ul').length).toBe(1); //sc-accordion
        expect(element.find('>ul sc-accordion-item').length).toBe(3); //sc-accordion-items
    });
});