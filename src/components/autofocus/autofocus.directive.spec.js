/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

describe('Autofocus directive', () => {
    let createElement, scope, element;

    beforeEach(angular.mock.module('talend.sunchoke.autofocus'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new(true);

        createElement = () => {
            const template = `
                <div>
                    <div  tabindex="-1" id="parent" sc-autofocus>
                        <div tabindex="-1" id="child" ng-if="renderChild" sc-autofocus></div>
                    </div>
                </div>
            `;
            element = $compile(template)(scope);
            angular.element('body').append(element);
            scope.$digest();
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    it('should focus on "sc-autofocus" tagged element', inject(($timeout) => {
        // given
        scope.renderChild = false;

        // when
        createElement();
        $timeout.flush();

        // then
        const parent = element.find('#parent').eq(0)[0];
        expect(document.activeElement).toBe(parent);
    }));

    it('should focus on the last rendered "sc-autofocus" tagged element',  inject(($timeout) => {
        // given
        scope.renderChild = true;

        // when
        createElement();
        $timeout.flush();

        // then
        const child = element.find('#child').eq(0)[0];
        expect(document.activeElement).toBe(child);
    }));
});
