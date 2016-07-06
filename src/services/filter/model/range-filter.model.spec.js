/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import { FILTER_TYPE } from './filter-const.js';
import RangeFilter from './range-filter.model.js';

describe('range filter model', () => {
    describe('when creating', () => {
        it('should sort all the filter values', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:20, max:30}, {min:0, max:10}, {min:11, max:19}]}
            };

            //when
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //then
            expect(filter instanceof RangeFilter).toBeTruthy();

            expect(filter.sign).toBe("range");
            expect(filter.fieldId).toBe("Col1");
            expect(filter.fieldName).toBe("Col1");
            expect(filter.options.values.length).toBe(3);
            expect(filter.options.values[0].min).toBe(0);
            expect(filter.options.values[0].max).toBe(10);
            expect(filter.options.values[1].min).toBe(11);
            expect(filter.options.values[1].max).toBe(19);
            expect(filter.options.values[2].min).toBe(20);
            expect(filter.options.values[2].max).toBe(30);
        }));
    });
    describe('when updating filter not in merge mode and not in overwrite mode', () => {
        it('should return null when toggling existing value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:20, max:30}, {min:0, max:10}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:20, max:30}, {min:0, max:10}]}
            };
            const result = filter.update(newConfiguration);
            //then
            expect(result).toBeNull();
        }));

        it('should return null when toggling existing value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:20, max:30}, {min:0, max:10}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: [1]}
            };
            const result = filter.update(newConfiguration);
            //then
            expect(result).toBe(filter);
        }));

        it('should toggle filter value and ignore ranges which are part of another range', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:20, max:30}, {min:80, max:90}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:25, max:29}, {min:0, max:10},  {min:80, max:90}, {min:40, max:50}]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(4);
            expect(result.options.values[0].min).toBe(0);
            expect(result.options.values[0].max).toBe(10);
            expect(result.options.values[1].min).toBe(20);
            expect(result.options.values[1].max).toBe(25);
            expect(result.options.values[2].min).toBe(29);
            expect(result.options.values[2].max).toBe(30);
            expect(result.options.values[3].min).toBe(40);
            expect(result.options.values[3].max).toBe(50);
        }));

        it('should split range when selecting a range included in the current ones', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:20, max:30}, {min:40, max:90}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:50, max:70}]}
            };
            const result = filter.update(newConfiguration);
            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0].min).toBe(20);
            expect(result.options.values[0].max).toBe(30);
            expect(result.options.values[1].min).toBe(40);
            expect(result.options.values[1].max).toBe(50);
            expect(result.options.values[2].min).toBe(70);
            expect(result.options.values[2].max).toBe(90);
        }));

        it('should merge previous range with given one', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:20, max:30}, {min:40, max:90}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:90, max:100}]}
            };

            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0].min).toBe(20);
            expect(result.options.values[0].max).toBe(30);
            expect(result.options.values[1].min).toBe(40);
            expect(result.options.values[1].max).toBe(100);
        }));

        it('should merge 3 ranges', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:20, max:30}, {min:40, max:90}, {min:100, max:120}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min:90, max:100}]}
            };

            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0].min).toBe(20);
            expect(result.options.values[0].max).toBe(30);
            expect(result.options.values[1].min).toBe(40);
            expect(result.options.values[1].max).toBe(120);
        }));
    });

    describe('when updating filter in overwrite mode', () => {
        it('should overwrite current filter value by the given one', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 20, max: 30}, {min: 0, max: 10}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                overwriteMode: true,
                options: {values: [{min: 25, max: 30}, {min: 9, max: 20}]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0].min).toBe(9);
            expect(result.options.values[0].max).toBe(20);
            expect(result.options.values[1].min).toBe(25);
            expect(result.options.values[1].max).toBe(30);
        }));
    });

    describe('when updating filter in range merge mode', () => {
        it('should modify biggest range min when giving a smaller range', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 20, max: 30}, {min: 5, max: 10}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                rangeMergeMode: true,
                options: {values: [{min: 1, max: 5}]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0].min).toBe(1);
            expect(result.options.values[0].max).toBe(30);
        }));

        it('should modify biggest range which is smaller than the given one', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 20, max: 30}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                rangeMergeMode: true,
                options: {values: [{min: 11, max: 17}, {min: 18, max: 19}, {min: 25, max: 50}, {min: 31, max: 40}]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(50);
        }));

        it('should remove range inside the new one and keep the other', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                rangeMergeMode: true,
                options: {values: [{min: 12, max: 32}]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(32);
            expect(result.options.values[1].min).toBe(35);
            expect(result.options.values[1].max).toBe(40);
        }));

        it('should select from the smallest to the stepped range if the given range steps on another one', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 25, max: 60}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                rangeMergeMode: true,
                options: {values: [{min: 12, max: 32}]}
            };

            const result = filter.update(newConfiguration);
            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(60);
        }));
    });

    describe('using range filter api', () => {
        it('should return new filters when using setValues', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 12, max: 32}]}
            };

            //when
            const result = filter.setValues(newConfiguration.options);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0].min).toBe(12);
            expect(result.options.values[0].max).toBe(32);
        }));

        it('should return new filters when using setValues', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: []}
            };

            //when
            const result = filter.setValues(newConfiguration.options);

            //then
            expect(result).toBeNull();
        }));

        it('should return new filters without the removed value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 10, max: 30}]}
            };

            //when
            const result = filter.removeValue(newConfiguration.options.values[0]);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(10);
            expect(result.options.values[1].min).toBe(35);
            expect(result.options.values[1].max).toBe(40);
        }));

        it('should return new filters with the added value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 50, max: 60}]}
            };

            //when
            const result = filter.addValue(newConfiguration.options.values[0]);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(4);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(10);
            expect(result.options.values[1].min).toBe(10);
            expect(result.options.values[1].max).toBe(30);
            expect(result.options.values[2].min).toBe(35);
            expect(result.options.values[2].max).toBe(40);
            expect(result.options.values[3].min).toBe(50);
            expect(result.options.values[3].max).toBe(60);
        }));

        it('should return new filters with the added value (toggle)', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 40, max: 50}]}
            };

            //when
            const result = filter.addValue(newConfiguration.options.values[0]);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(10);
            expect(result.options.values[1].min).toBe(10);
            expect(result.options.values[1].max).toBe(30);
            expect(result.options.values[2].min).toBe(35);
            expect(result.options.values[2].max).toBe(50);
        }));

        it('should return new filters with without the toggled value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}]}
            };

            //when
            const result = filter.toggleValue(newConfiguration.options.values[0]);

            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0].min).toBe(10);
            expect(result.options.values[0].max).toBe(30);
            expect(result.options.values[1].min).toBe(35);
            expect(result.options.values[1].max).toBe(40);
        }));

        it('should update the given range', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue({min: 10, max: 30}, {min: 45, max: 50});
            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(10);
            expect(result.options.values[1].min).toBe(35);
            expect(result.options.values[1].max).toBe(40);
            expect(result.options.values[2].min).toBe(45);
            expect(result.options.values[2].max).toBe(50);
        }));

        it('should update the range', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue({min: 10, max: 30}, {min: 11, max: 34});
            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(10);
            expect(result.options.values[1].min).toBe(11);
            expect(result.options.values[1].max).toBe(34);
            expect(result.options.values[2].min).toBe(35);
            expect(result.options.values[2].max).toBe(40);
        }));

        it('should update the given range and merge ranges', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue({min: 10, max: 30}, {min: 10, max: 35});
            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(40);
        }));

        it('should do nothing because the new value steps on another range', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue({min: 10, max: 30}, {min: 10, max: 37});
            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0].min).toBe(5);
            expect(result.options.values[0].max).toBe(10);
            expect(result.options.values[1].min).toBe(10);
            expect(result.options.values[1].max).toBe(30);
            expect(result.options.values[2].min).toBe(35);
            expect(result.options.values[2].max).toBe(40);
        }));

        it('should return current filter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue({min: 100, max: 100}, {min: 10, max: 37});
            //then
            expect(result instanceof RangeFilter).toBeTruthy();
            expect(result).toBe(filter);
        }));
    });

    describe('DSL actions', () => {
        it('return filter in tql form', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.INSIDE_RANGE,
                options: {values: [{min: 5, max: 10}, {min: 10, max: 30}, {min: 35, max: 40}]}
            };
            const filter = new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            expect(filter.toDSL()).toBe("(Col1 between [5, 10] OR Col1 between [10, 30] OR Col1 between [35, 40])");
        }));
    });
});