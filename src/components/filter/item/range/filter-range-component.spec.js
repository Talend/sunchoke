/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Filter Item Range Component', () => {

    beforeEach(angular.mock.module('talend.sunchoke.filter-item-range'));

    let createElement, scope, element;

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        scope.filterValue = { min: 1, max: 2 };
        scope.onEdit = jasmine.createSpy('onEdit');
        scope.removable = false;
        scope.onRemove = jasmine.createSpy('onRemove');

        createElement = () => {
            element = angular.element(
                `<sc-filter-range filter-value="filterValue"
                                  on-edit="onEdit()"
                                  removable="removable"
                                  on-remove="onRemove()">   
                 </sc-filter-range>`
            );

            $compile(element)(scope);
            scope.$digest();
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    describe('rendering filter range', () => {
        it('should render editable range with 2 inputs when min != max', () => {
            //given
            createElement();

            //then
            expect(element.find('input').size()).toBe(2);
            expect(element.find('span').size()).toBe(3);
        });

        it('should render editable range with only one input when min == max', () => {
            //given
            scope.filterValue = { min: 2, max: 2 };
            createElement();

            //then
            expect(element.find('input').size()).toBe(1);
            expect(element.find('span').size()).toBe(2);
        });

        it('should call onEdit callback when blur on input', () => {
            //given
            createElement();

            //when
            const inputElement = element.find('input').eq(0); //only one input
            inputElement.blur();

            //then
            expect(scope.onEdit).toHaveBeenCalled();
        });
    });

    describe('removable option', () => {

        it('should render remove button', () => {
            //given
            scope.removable = true;
            createElement();

            //then
            expect(element.find('a.filter-value-btn-remove').size()).toBe(1);
            expect(element.find('a.filter-value-btn-remove').eq(0).hasClass('ng-hide')).toBeFalsy();
        });

        it('should render hidden remove button', () => {
            //given
            createElement();

            //then
            expect(element.find('a.filter-value-btn-remove').size()).toBe(1);
            expect(element.find('a.filter-value-btn-remove').eq(0).hasClass('ng-hide')).toBeTruthy();
        });

        it('should render remove button when removable option has changed', () => {
            //given
            createElement();
            expect(element.find('a.filter-value-btn-remove').size()).toBe(1);
            expect(element.find('a.filter-value-btn-remove').eq(0).hasClass('ng-hide')).toBeTruthy();

            //when
            scope.removable = true;
            scope.$digest();

            //then
            expect(element.find('a.filter-value-btn-remove').size()).toBe(1);
            expect(element.find('a.filter-value-btn-remove').eq(0).hasClass('ng-hide')).toBeFalsy();
        });

        it('should call onRemove callback when button is clicked', () => {
            //given
            scope.removable = true;
            createElement();

            //when
            const $removeBtn = element.find('a.filter-value-btn-remove').eq(0);
            $removeBtn.click();

            //then
            expect(scope.onRemove).toHaveBeenCalled();
        });
    });
});