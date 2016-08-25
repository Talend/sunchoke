/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Filter item value controller', () => {
    'use strict';

    let createElement, scope, element, ctrl;

    const newFilterValue = 'LOREM ISPUM DOLOR';

    beforeEach(angular.mock.module('talend.sunchoke.filter-item-value'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        scope.filterValue = 'lorem ipsum dolor';
        scope.removable = false;
        scope.onRemove = jasmine.createSpy('onRemove');

        createElement = () => {
            element = angular.element(
                `<sc-filter-value filter-value="filterValue"
                                  on-edit="onEdit()"
                                  removable="removable"
                                  on-remove="onRemove()">
                </sc-filter-value>`
            );

            $compile(element)(scope);
            scope.$digest();
            ctrl = element.controller('scFilterValue');
        };
    }));

    describe('manage user inputs', () => {

        it('should reset value if ESC key is pressed', () => {
            //given
            createElement();

            //when
            ctrl.valueToDisplay = newFilterValue;

            let escEvent = new angular.element.Event('keydown');
            escEvent.which = 27;
            ctrl.onKeydown(escEvent);

            //then
            expect(ctrl.valueToDisplay).toEqual('lorem ipsum dolor');
        });

        it('should execute edit callback if ENTER key is pressed', () => {
            //given
            createElement();
            spyOn(ctrl, 'onEdit')

            //when
            ctrl.valueToDisplay = newFilterValue;

            let enterEvent = new angular.element.Event('keydown');
            enterEvent.which = 13;
            ctrl.onKeydown(enterEvent);

            //then
            expect(ctrl.onEdit).toHaveBeenCalledWith({
                newValue: newFilterValue
            });
        });

        it('should do nothing if key is pressed and it is not ESC or ENTER keys', () => {
            //given
            createElement();
            spyOn(ctrl, 'onEdit')

            //when
            let aEvent = new angular.element.Event('keydown');
            aEvent.which = 65;
            ctrl.onKeydown(aEvent);

            //then
            expect(ctrl.onEdit).not.toHaveBeenCalled();
        });
        
        it('should remove \'empty\' when editing an empty filter', () => {
            //given
            createElement();
            ctrl.valueToDisplay = 'empty';

            //when
            ctrl.removeEmptyValue();

            //then
            expect(ctrl.valueToDisplay).toEqual('');
        });
    });

});