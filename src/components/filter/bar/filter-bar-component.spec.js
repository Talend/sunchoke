/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Filter bar component', function () {

    var scope, createElement, element;

    beforeEach(angular.mock.module('talend.sunchoke.filter-bar'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        createElement = function () {
            element = angular.element(`<sc-filter-bar id="playground-filter-bar" filters="filters"></sc-filter-bar>`);
            $compile(element)(scope);
            scope.$digest();
        };
    }));

    afterEach(function () {
        scope.$destroy();
        element.remove();
    });

    it('should render "remove all" icon when there are filters', function () {
        //when
        scope.filters = [{ myfilter: 'myFilter' }]

        createElement();

        //then
        expect(element.find('#reset-filters').length).toBe(1);
        expect(element.find('#reset-filters').attr('title')).toBe('Remove all filters');
    });

    it('should NOT render "remove all" icon when there are not filters', function () {
        //when
        createElement();

        //then
        expect(element.find('#reset-filters').length).toBe(0);
    });

    it('should render filter list', function () {
        //when
        createElement();

        //then
        expect(element.find('sc-filter-list').length).toBe(1);
    });

    it('should render filter monitor', function () {
        //when
        createElement();
        
        //then
        expect(element.find('sc-filter-monitor').length).toBe(1);
    });

});