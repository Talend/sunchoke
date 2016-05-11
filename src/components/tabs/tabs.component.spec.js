/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Tabs component', () => {
    let createElement;
    let scope;
    let element;

    beforeEach(angular.mock.module('talend.sunchoke.tabs'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        scope.onTabChange = jasmine.createSpy('onTabChange');

        createElement = () => {
            const template = `
                <sc-tabs selected-tab="selectedTab" on-tab-change="onTabChange()">
                    <sc-tabs-item tab-title="tab 1 title">
                        <div id="tab1Content">Content tab 1</div>
                    </sc-tabs-item>
                    <sc-tabs-item tab-title="tab 2 title" is-default="true">
                        <div id="tab2Content">Content tab 2</div>
                    </sc-tabs-item>
                    <sc-tabs-item tab-title="tab 3 title">
                        <div id="tab3Content">Content tab 3</div>
                    </sc-tabs-item>
                </sc-tabs>
            `;
            element = $compile(template)(scope);
            scope.$digest();
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    it('should render tabs headers', () => {
        // when
        createElement();

        // then
        expect(element.find('.tabs-header').length).toBe(3);
        expect(element
            .find('.tabs-header')
            .eq(0)
            .text()
            .trim())
            .toBe('tab 1 title');
        expect(element
            .find('.tabs-header')
            .eq(1)
            .text()
            .trim())
            .toBe('tab 2 title');
        expect(element
            .find('.tabs-header')
            .eq(2)
            .text()
            .trim())
            .toBe('tab 3 title');
    });

    it('should display default tab content', () => {
        // when
        createElement();

        // then
        expect(element.find('#tab1Content').length).toBe(0);
        expect(element.find('#tab2Content').length).toBe(1);
        expect(element.find('#tab3Content').length).toBe(0);
    });

    it('should display clicked tab', () => {
        // given
        createElement();

        expect(element.find('#tab1Content').length).toBe(0);
        expect(element.find('#tab2Content').length).toBe(1);
        expect(element.find('#tab3Content').length).toBe(0);

        // when
        element.find('.tabs-header').eq(0).click();

        // then
        expect(element.find('#tab1Content').length).toBe(1);
        expect(element.find('#tab2Content').length).toBe(0);
        expect(element.find('#tab3Content').length).toBe(0);
    });

    it('should call tab change callback', () => {
        // given
        createElement();
        expect(scope.onTabChange.calls.count()).toBe(1);

        // when
        element.find('.tabs-header').eq(0).click();

        // then
        expect(scope.onTabChange.calls.count()).toBe(2);
    });

    it('should change tab programmatically', () => {
        // given
        createElement();

        expect(element.find('#tab1Content').length).toBe(0);
        expect(element.find('#tab2Content').length).toBe(1);
        expect(element.find('#tab3Content').length).toBe(0);

        // when
        scope.selectedTab = 2;
        scope.$digest();

        // then
        expect(element.find('#tab1Content').length).toBe(0);
        expect(element.find('#tab2Content').length).toBe(0);
        expect(element.find('#tab3Content').length).toBe(1);
    });
});
