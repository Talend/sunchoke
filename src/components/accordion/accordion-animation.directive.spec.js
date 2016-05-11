/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Accordion animation directive', () => {
    let createElement;
    let scope;
    let element;
    let $animate;

    beforeEach(angular.mock.module('talend.sunchoke.accordion'));
    beforeEach(angular.mock.module('ngAnimateMock'));

    beforeEach(inject(($rootScope, $compile, _$animate_) => {
        $animate = _$animate_;
        scope = $rootScope.$new();

        createElement = () => {
            const template = `
                <div sc-accordion-animation="isOpened">
                   Angular : https://www.angularjs.org
                </div>
            `;
            element = $compile(template)(scope);
            scope.$digest();
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    it('should animate open classes', () => {
        // given
        scope.isOpened = false;
        createElement();
        $animate.flush();

        expect(element.hasClass('opening')).toBe(false);
        expect(element.hasClass('open')).toBe(false);

        // when
        scope.isOpened = true;

        scope.$digest();
        expect(element.hasClass('opening')).toBe(true);
        expect(element.hasClass('open')).toBe(false);

        $animate.flush();

        // then
        expect(element.hasClass('opening')).toBe(false);
        expect(element.hasClass('open')).toBe(true);
    });

    it('should animate close classes', () => {
        // given
        scope.isOpened = true;
        createElement();
        $animate.flush();

        element.addClass('open');
        expect(element.hasClass('closing')).toBe(false);
        expect(element.hasClass('open')).toBe(true);

        // when
        scope.isOpened = false;

        scope.$digest();
        expect(element.hasClass('closing')).toBe(true);
        expect(element.hasClass('open')).toBe(true);

        $animate.flush();

        // then
        expect(element.hasClass('closing')).toBe(false);
        expect(element.hasClass('open')).toBe(false);
    });
});
