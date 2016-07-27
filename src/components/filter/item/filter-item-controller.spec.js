/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import RangeFilter from '../../../services/filter/model/range-filter.model.js'; //eslint-disable-line no-unused-vars

describe('Filter item controller', () => {
    let createController, scope;

    let filter,
        editable, onEditFn,
        removable, onRemoveFn, onRemoveValueFn, renderValueFn, getLabel;

    beforeEach(angular.mock.module('talend.sunchoke.filter-item'));

    /*
     beforeEach(angular.mock.module('pascalprecht.translate', $translateProvider => {
     $translateProvider.translations('en', {
     'COLON': ': '
     });
     $translateProvider.preferredLanguage('en');
     }));
     */


    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        filter = {
            fieldId: 'fieldId',
            fieldName: 'fieldName',
            sign: 'in',
            options: {
                values: ['val1', 'val2']
            }
        };
        editable = false;
        onEditFn = jasmine.createSpy('onEditFn');
        removable = false;
        onRemoveFn = jasmine.createSpy('onRemoveFn');
        onRemoveValueFn = jasmine.createSpy('onRemoveValueFn');
        renderValueFn = jasmine.createSpy('renderValueFn').and.returnValue("formattedValue");
        getLabel = jasmine.createSpy('getLabel');
        filter.getLabel = getLabel;

        createController = () => {
            const ctrl = $componentController('scFilterItem', {
                $scope: scope
            }, {
                value: filter,
                editable: editable,
                onEdit: onEditFn,
                removable: removable,
                onRemove: onRemoveFn,
                onRemoveValue: onRemoveValueFn,
                renderValueFn: renderValueFn
            });
            ctrl.$onInit();
            return ctrl;
        };
    }));

    it('should set the sign character to : in', () => {
        //given
        filter = {
            fieldId: 'fieldId',
            fieldName: 'fieldName',
            sign: 'inside_range',
            options: {
                values: ['val1', 'val2']
            }
        };
        const ctrl = createController();

        //then
        expect(ctrl.sign).toEqual(' in ');
    });

    it('should set the sign character to : ":"', () => {
        //given
        filter = {
            fieldId: 'fieldId',
            fieldName: 'fieldName',
            sign: 'valid_records',
            options: {
                values: ['val1', 'val2']
            }
        };
        const ctrl = createController();

        //then
        expect(ctrl.sign).toEqual(' : ');
    });


    /*

     TODO when implementing contains

     it('should set the sign character to : "≅"', () => {
     //given
     filter = {
     fieldId: 'fieldId',
     fieldName: 'fieldName',
     sign :'contains',
     options : {
     values: ['val1', 'val2']
     }
     };
     const ctrl = createController();

     //then
     expect(ctrl.sign).toEqual(' ≅ ');
     });
     */

    it('should set the sign character to : "=" ', () => {
        //given
        filter = {
            fieldId: 'fieldId',
            fieldName: 'fieldName',
            sign: '=',
            options: {
                values: ['val1', 'val2']
            }
        };
        const ctrl = createController();

        //then
        expect(ctrl.sign).toEqual(' = ');
    });


    /*

     TODO when implementing EDIT

     it('should execute edit callback when submit is called', () => {
     //given
     const ctrl = createController();

     //when
     ctrl.submit();

     //then
     expect(onEditFn).toHaveBeenCalledWith({
     filter: filter,
     value: filter.value
     });
     });






     it('should execute edit callback when remove is called', () => {
     //given
     const ctrl = createController();

     //when
     ctrl.remove(0);

     //then
     expect(onEditFn).toHaveBeenCalledWith({
     filter: filter,
     value: []
     });
     });


     */

    it('should execute remove callback when close is called', () => {
        //given
        const ctrl = createController();

        //when
        ctrl.close();

        //then
        expect(onRemoveFn).toHaveBeenCalledWith({
            filter: filter
        });


    });

    describe('rendering value in filter item', () => {
        it('should call filter render value callback and filter get label function', () => {
            //given
            const ctrl = createController();

            //when
            ctrl.renderValue('fieldId', 'value1');

            //then
            expect(renderValueFn).toHaveBeenCalledWith({
                colId: 'fieldId', value: 'value1'
            });
            expect(getLabel).toHaveBeenCalledWith("formattedValue");
        });
    });
});