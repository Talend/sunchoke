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

    let createController, scope;
    let filterValue,
        editable, onEditFn,
        removable, onRemoveFn, renderValueFn;

    const originalFilterValue = 'lorem ipsum';
    const newFilterValue = 'LOREM ISPUM DOLOR';

    beforeEach(angular.mock.module('talend.sunchoke.filter-item-value'));

    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();

        filterValue = originalFilterValue;
        editable = false;
        onEditFn = jasmine.createSpy('onEditFn');
        removable = false;
        onRemoveFn = jasmine.createSpy('onRemoveFn');
        renderValueFn = jasmine.createSpy('renderValueFn').and.returnValue('LOREM ipsum');

        createController = () => {
            const ctrl = $componentController('scFilterValue', {
                $scope: scope
            }, {
                filterValue: filterValue,
                editable: editable,
                onEdit: onEditFn,
                removable: removable,
                onRemove: onRemoveFn,
                renderValueFn: renderValueFn
            });
            ctrl.$onInit();
            return ctrl;
        };
    }));

    describe('manage keyboard inputs', () => {

        it('should reset value if ESC key is pressed', () => {
            //given
            const ctrl = createController();

            //when
            ctrl.valueToDisplay = newFilterValue;

            let escEvent = new angular.element.Event('keydown');
            escEvent.which = 27;
            ctrl.onKeydown(escEvent);

            //then
            expect(ctrl.valueToDisplay).toEqual(originalFilterValue);
        });

        it('should execute edit callback if ENTER key is pressed', () => {
            //given
            const ctrl = createController();

            //when
            ctrl.valueToDisplay = newFilterValue;

            let enterEvent = new angular.element.Event('keydown');
            enterEvent.which = 13;
            ctrl.onKeydown(enterEvent);

            //then
            expect(onEditFn).toHaveBeenCalledWith({
                newValue: newFilterValue
            });
        });

        it('should do nothing if key is pressed and it is not ESC or ENTER keys', () => {
            //given
            const ctrl = createController();

            //when
            let aEvent = new angular.element.Event('keydown');
            aEvent.which = 65;
            ctrl.onKeydown(aEvent);

            //then
            expect(onEditFn).not.toHaveBeenCalled();
        });
    });

});