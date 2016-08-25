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

    let createElement, scope, element, ctrl;

    beforeEach(angular.mock.module('talend.sunchoke.filter-item-range'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.filterValue = { min: 1, max: 2 };
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
            ctrl = element.controller('scFilterRange');
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });


    describe('init range', () => {

        it('should init fromValue and toValue', () => {
            //given
            createElement();

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
            createElement();

            //when
            ctrl.filterValue = { min: 1, max: 3 };
            let escEvent = new angular.element.Event('keydown');
            escEvent.which = 27;
            ctrl.onKeydown(escEvent);

            //then
            expect(ctrl.fromValue).toEqual(1);
            expect(ctrl.toValue).toEqual(2);
        });

        it('should execute edit callback if ENTER key is pressed', () => {
            //given
            createElement();
            spyOn(ctrl, 'onEdit');

            //when
            ctrl.toValue = 3;
            let enterEvent = new angular.element.Event('keydown');
            enterEvent.which = 13;
            ctrl.onKeydown(enterEvent);

            //then
            expect(ctrl.onEdit).toHaveBeenCalledWith({ newValue: { min: 1, max: 3 } });
        });

        it('should do nothing if key is pressed and it is not ESC or ENTER keys', () => {
            //given
            createElement();
            spyOn(ctrl, 'onEdit');

            //when
            let aEvent = new angular.element.Event('keydown');
            aEvent.which = 65;
            ctrl.onKeydown(aEvent);

            //then
            expect(ctrl.onEdit).not.toHaveBeenCalled();
        });
    });
});