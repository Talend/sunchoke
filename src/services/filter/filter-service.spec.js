/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import InFilter from './model/in-filter.model.js';
import ExactFilter from './model/exact-filter.model.js';

import { FILTER_TYPE } from './model/filter-const.js';

describe('Filter service', () => {

    beforeEach(angular.mock.module('talend.sunchoke.services.filter'));

    beforeEach(inject(() => {
    }));

    describe('updating filter', function() {
        it('should add in filter to the current filter', inject(function (FilterService) {
            //given
            const currentFilter = [];
            const configuration = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.IN,
                options: {values: ["tata", "toto", "value1"]}
            };
            //when
            const result = FilterService.updateFilter(currentFilter, configuration);
            //then
            expect(result.length).toBe(1);
            expect(result[0].options.values.length).toBe(3);
            expect(result[0].sign).toBe("in");
            expect(result[0].options.values[0]).toBe("tata");
            expect(result[0].options.values[1]).toBe("toto");
            expect(result[0].options.values[2]).toBe("value1");
        }));

        it('should update in filter to exact filter', inject(function (FilterService) {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const currentFilter = [filter];
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["tata", "toto", "value1"]}
            };
            //when
            const result = FilterService.updateFilter(currentFilter, newConfiguration);
            //then
            expect(result.length).toBe(1);
            expect(result[0] instanceof ExactFilter).toBeTruthy();
            expect(result[0].options.values.length).toBe(1);
            expect(result[0].sign).toBe("=");
            expect(result[0].options.values[0]).toBe("value1");
        }));

        it('should update exact filter to in filter', inject(function (FilterService) {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const currentFilter = [filter];
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["tata", "toto", "value1"]}
            };
            //when
            const result = FilterService.updateFilter(currentFilter, newConfiguration);
            //then
            expect(result.length).toBe(1);
            expect(result[0] instanceof InFilter).toBeTruthy();
            expect(result[0].options.values.length).toBe(2);
            expect(result[0].sign).toBe("in");
        }));
    });

    describe('removing filter', function() {
        it('should return a list without the wanted value', inject(function (FilterService) {

            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };

            const configuration2 = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };

            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const filter2 = new InFilter(configuration2.fieldId, configuration2.fieldName, configuration2.options);
            const filterArray = [filter, filter2];
            const removeConfiguration = {filter: filter2};

            const newFilterArray = FilterService.removeFilter(filterArray, removeConfiguration);
            expect(newFilterArray.length).toBe(1);
            expect(filterArray.length).toBe(2); // not mutated
            expect(newFilterArray[0] instanceof ExactFilter);
            expect(newFilterArray[0].sign).toBe("=");
            expect(newFilterArray[0].options.values[0]).toBe("toto");
        }));
    });

    describe('add filter value', function() {
        it('should return a list with the new filter in it', inject(function (FilterService) {

            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };

            const configuration2 = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };

            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const filter2 = new InFilter(configuration2.fieldId, configuration2.fieldName, configuration2.options);
            const filterArray = [filter, filter2];
            const addConfiguration = {filter: filter2, newValue: "bobo"};

            const newFilterArray = FilterService.addFilterValue(filterArray, addConfiguration);
            expect(newFilterArray.length).toBe(2);
            expect(filterArray.length).toBe(2); // not mutated
            expect(filterArray[1].options.values.length).toBe(2);// not mutated

            expect(newFilterArray[1].options.values.length).toBe(3);
            expect(newFilterArray[1] instanceof InFilter);
            expect(newFilterArray[1].sign).toBe("in");
            expect(newFilterArray[1].options.values[0]).toBe("bobo");
            expect(newFilterArray[1].options.values[1]).toBe("tata");
            expect(newFilterArray[1].options.values[2]).toBe("toto");
        }));
    });

    describe('update filter value', function() {
        it('should return a list with the updated filter value', inject(function (FilterService) {

            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };

            const configuration2 = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };

            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const filter2 = new InFilter(configuration2.fieldId, configuration2.fieldName, configuration2.options);
            const filterArray = [filter, filter2];
            const updateConfiguration = {filter: filter2, oldValue: "toto", newValue: "bobo"};

            const newFilterArray = FilterService.updateFilterValue(filterArray, updateConfiguration);
            expect(newFilterArray.length).toBe(2);
            expect(filterArray.length).toBe(2); // not mutated
            expect(filterArray[1].options.values[0]).toBe("tata"); // not mutated
            expect(filterArray[1].options.values[1]).toBe("toto"); // not mutated

            expect(newFilterArray[1] instanceof InFilter);
            expect(newFilterArray[1].sign).toBe("in");
            expect(newFilterArray[1].options.values[0]).toBe("bobo");
            expect(newFilterArray[1].options.values[1]).toBe("tata");
        }));
    });

    describe('remove filter value', function() {
        it('should remove filter value from filter', inject(function (FilterService) {

            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };

            const configuration2 = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };

            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const filter2 = new InFilter(configuration2.fieldId, configuration2.fieldName, configuration2.options);
            const filterArray = [filter, filter2];
            const removeConfiguration = {filter: filter2, value: "toto"};

            const newFilterArray = FilterService.removeFilterValue(filterArray, removeConfiguration);
            expect(newFilterArray.length).toBe(2);
            expect(filterArray.length).toBe(2); // not mutated
            expect(filterArray[1].options.values[0]).toBe("tata"); // not mutated
            expect(filterArray[1].options.values[1]).toBe("toto"); // not mutated

            expect(newFilterArray[1] instanceof ExactFilter);
            expect(newFilterArray[1].options.values.length).toBe(1);
            expect(newFilterArray[1].sign).toBe("=");
            expect(newFilterArray[1].options.values[0]).toBe("tata");
        }));
    });

    describe('toggle filter value', function() {
        it('should remove filter value from filter list', inject(function (FilterService) {

            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };

            const configuration2 = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };

            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const filter2 = new InFilter(configuration2.fieldId, configuration2.fieldName, configuration2.options);
            const filterArray = [filter, filter2];
            const toggleConfiguration = {filter: filter, value: "toto"};

            const newFilterArray = FilterService.toggleFilterValue(filterArray, toggleConfiguration);
            expect(newFilterArray.length).toBe(1);
            expect(filterArray.length).toBe(2); // not mutated
            expect(filterArray[1].options.values[0]).toBe("tata"); // not mutated
            expect(filterArray[1].options.values[1]).toBe("toto"); // not mutated

            expect(newFilterArray[0] instanceof InFilter);
            expect(newFilterArray[0].options.values.length).toBe(2);
            expect(newFilterArray[0].sign).toBe("in");
            expect(newFilterArray[0].options.values[0]).toBe("tata");
            expect(newFilterArray[0].options.values[1]).toBe("toto");
        }));

        it('should remove filter value from filter list', inject(function (FilterService) {

            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };

            const configuration2 = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };

            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            const filter2 = new InFilter(configuration2.fieldId, configuration2.fieldName, configuration2.options);
            const filterArray = [filter, filter2];
            const toggleConfiguration = {filter: filter, value: "bobo"};

            const newFilterArray = FilterService.toggleFilterValue(filterArray, toggleConfiguration);
            expect(newFilterArray.length).toBe(2);
            expect(filterArray.length).toBe(2); // not mutated
            expect(filterArray[1].options.values[0]).toBe("tata"); // not mutated
            expect(filterArray[1].options.values[1]).toBe("toto"); // not mutated

            expect(newFilterArray[0] instanceof InFilter);
            expect(newFilterArray[0].options.values.length).toBe(2);
            expect(newFilterArray[0].sign).toBe("in");
            expect(newFilterArray[0].options.values[0]).toBe("bobo");
            expect(newFilterArray[0].options.values[1]).toBe("toto");
        }));
    });
});