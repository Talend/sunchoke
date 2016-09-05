import RangeFilter from '../../../services/filter/model/range-filter.model.js';
import { FILTER_TYPE } from '../../../services/filter/model/filter-const.js';

/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
//eslint-disable-line no-unused-vars

describe('Filter item controller', () => {
    let createController, scope;

    let filter,
        editable, onEditFn,
        removable, onRemoveFn, onRemoveValueFn, renderValueFn, getLabel;

    beforeEach(angular.mock.module('talend.sunchoke.filter-item'));

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
                filter: filter,
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

    describe('manage sign', () => {

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

        it('should set the sign character to : "≅"', () => {
            //given
            filter = {
                fieldId: 'fieldId',
                fieldName: 'fieldName',
                sign: 'in',
                options: {
                    values: ['val1', 'val2']
                }
            };
            const ctrl = createController();

            //then
            expect(ctrl.sign).toEqual(' ≅ ');
        });

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


    });

    describe('rendering value in filter item', () => {
        it('should not call filter render value callback and  call filter get label function', () => {
            //given
            const ctrl = createController();
            ctrl.filter.sign = 'quality';

            //when
            ctrl.renderValue('value1');

            //then
            expect(renderValueFn).not.toHaveBeenCalledWith({ colId: 'fieldId', value: 'value1' });
            expect(getLabel).toHaveBeenCalledWith("value1");
        });

        it('should call filter render value callback and filter get label function', () => {
            //given
            const ctrl = createController();

            //when
            ctrl.renderValue('value1');

            //then
            expect(renderValueFn).toHaveBeenCalledWith({ colId: 'fieldId', value: 'value1' });
            expect(getLabel).toHaveBeenCalledWith("formattedValue");
        });
    });

    describe('edit filter value', () => {

        it('should call onEdit callback for normal filter value', () => {
            //given
            const ctrl = createController();

            //when
            ctrl.edit(0, 'value1');

            //then
            expect(ctrl.onEdit).toHaveBeenCalledWith({
                filter,
                newValue: 'value1',
                oldValue: 'val1'
            });
        });

        it('should call onEdit callback for range filter value', () => {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: { values: [{ min: 1, max: 5 }] }
            };
            filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const ctrl = createController();

            //when
            ctrl.edit(0, { min: 1, max: 6 });

            //then
            expect(ctrl.onEdit).toHaveBeenCalledWith({
                filter,
                newValue: { min: 1, max: 6 },
                oldValue: { min: 1, max: 5 }
            });
        });

        it('should call onEdit callback with min=max for one-value range-filter', () => {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: { values: [{ min: 10, max: 10 }] }
            };
            filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const ctrl = createController();

            //when
            ctrl.edit(0, { min: 11, max: 11 });

            //then
            expect(ctrl.onEdit).toHaveBeenCalledWith({
                filter,
                newValue: { min: 11, max: 11 },
                oldValue: { min: 10, max: 10 }
            });
        });

        it('should not call onEdit callback when min > max', () => {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: { values: [{ min: 10, max: 11 }] }
            };
            filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const ctrl = createController();

            //when
            ctrl.edit(0, { min: 12, max: 11 });

            //then
            expect(ctrl.onEdit).not.toHaveBeenCalled();
        });

        it('should not call onEdit callback when input is text for a range (should be number)', () => {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: { values: [{ min: 10, max: 11 }] }
            };
            filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const ctrl = createController();

            //when
            ctrl.edit(0, { min: "test", max: 11 });

            //then
            expect(ctrl.onEdit).not.toHaveBeenCalled();
        });

        it('should not call onEdit callback when filter value is the same', () => {
            //given
            const ctrl = createController();

            //when
            ctrl.edit(0, 'val1');

            //then
            expect(ctrl.onEdit).not.toHaveBeenCalled();
        });

        it('should not call onEdit callback when filter range value is the same', () => {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: { values: [{ min: 10, max: 10 }] }
            };
            filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const ctrl = createController();

            //when
            ctrl.edit(0, { min: 10, max: 10 });

            //then
            expect(ctrl.onEdit).not.toHaveBeenCalled();
        });

    });

});