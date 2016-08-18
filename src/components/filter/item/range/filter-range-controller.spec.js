/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('Filter item range controller', () => {
    'use strict';

    let createController, scope;
    let filterValue, onEditFn,
        removable, onRemoveFn;

    const originalFilterValue = { min: 1, max: 2 };
    const newFilterValue = { min: 1, max: 3 };

    beforeEach(angular.mock.module('talend.sunchoke.filter-item-range'));

    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();

        filterValue = originalFilterValue;
        onEditFn = jasmine.createSpy('onEditFn');
        removable = false;
        onRemoveFn = jasmine.createSpy('onRemoveFn');

        createController = () => {
            const ctrl = $componentController('scFilterRange', {
                $scope: scope
            }, {
                filterValue: filterValue,
                onEdit: onEditFn,
                removable: removable,
                onRemove: onRemoveFn
            });
            ctrl.$onInit();
            return ctrl;
        };
    }));

    describe('init input', () => {

        it('should init fromValue and toValue', () => {
            //given when
            const ctrl = createController();

            //then
            expect(ctrl.fromValue).toEqual(1);
            expect(ctrl.fromValueSaved).toEqual(1);
            expect(ctrl.toValue).toEqual(2);
            expect(ctrl.toValueSaved).toEqual(2);
        });

    });

    describe('manage keyboard inputs', () => {


        it('should reset value if ESC key is pressed', () => {
            //given
            const ctrl = createController();

            //when
            ctrl.filterValue = newFilterValue;

            let escEvent = new angular.element.Event('keydown');
            escEvent.which = 27;
            ctrl.onKeydown(escEvent);

            //then
            expect(ctrl.fromValue).toEqual(originalFilterValue.min);
            expect(ctrl.toValue).toEqual(originalFilterValue.max);
        });

        it('should execute edit callback if ENTER key is pressed', () => {
            //given
            const ctrl = createController();

            //when
            ctrl.toValue = 3;
            let enterEvent = new angular.element.Event('keydown');
            enterEvent.which = 13;
            ctrl.onKeydown(enterEvent);

            //then
            expect(onEditFn).toHaveBeenCalledWith({ newValue: newFilterValue });
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