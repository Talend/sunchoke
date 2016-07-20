/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
describe('Filter monitor directive', () => {
    let createElement, scope, element;

    beforeEach(angular.mock.module('talend.sunchoke.filter-monitor'));
   /* beforeEach(angular.mock.module('pascalprecht.translate', ($translateProvider) => {
        $translateProvider.translations('en', {
            'NB_LINES_MATCHING_FILTERS': '{{percentage}}% of lines are matching your filter(s)'
        });
        $translateProvider.preferredLanguage('en');
    }));*/

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        scope.toogle = () => {};

        createElement = () => {
            var html = `<sc-filter-monitor
                filters="filters"
                on-toogle="toogle()"
                nb-lines="nbLines"
                nb-total-lines="nbTotalLines"
                percentage="percentage" state="state"></sc-filter-monitor>`;
            element = angular.element(html);
            angular.element('body').append(element);
            $compile(element)(scope);
            scope.$digest();
        }

        spyOn(scope,'toogle');
    }));

    afterEach(() => {
        scope.$destroy();
        if(element) element.remove();
    });

    describe('render', function() {
        it('should NOT render "remove all" icon when filters are empty', () => {
            //given
            scope.filters = [];

            //when
            createElement();
            //then
            expect(element.find('#reset-filters').length).toBe(0);
        });

        it('should render stats', function() {
            //given
            scope.percentage = 25;
            scope.nbLines = 50;
            scope.nbTotalLines = 200;

            //when
            createElement();

            //then
            var statsElement = element.find('#filters-monitor-stats').eq(0);
            expect(statsElement.attr('title')).toBe('percentage to compute');
            expect(statsElement.text().trim()).toBe('50/200');
        });
    });

    describe('actions', function() {
        it('should execute reset callback on "toogle" icon click', function() {
            //given
            scope.filters = [{}];
            createElement();

            //when
            let ngModelController = element.find('input').controller('ngModel');
            ngModelController.$setViewValue('true');

            //then
            expect(scope.toogle).toHaveBeenCalled();
        });
    });
});
