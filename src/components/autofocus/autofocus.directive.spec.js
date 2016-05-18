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
                    <div id="parent" sc-autofocus>
                        <div ng-if="renderChild" sc-autofocus></div>
                    </div>
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

    it('should focus on "sc-autofocus" tagged element', () => {
        //given

        //when
        createElement();

        //then

    });

    it('should focus on the last rendered "sc-autofocus" tagged element', () => {
        //given

        //when
        createElement();

        //then

    });
});
