/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import { FILTER_TYPE } from './filter-const.js';
import ExactFilter from './exact-filter.model.js';
import InFilter from './in-filter.model.js';

describe('exact filter model', () => {
    describe('when not the same field', () => {
        it('should return the given filter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["tata"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof ExactFilter).toBeTruthy();

            expect(result.sign).toBe("=");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0]).toBe("toto");
        }));
    });
    describe('when in override mode', () => {
        it('should overwrite filter value with configuration', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["value1"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof InFilter).toBeFalsy();
            expect(result instanceof ExactFilter).toBeTruthy();

            expect(result.sign).toBe("=");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0]).toBe("value1");
        }));
        it('should overwrite filter value with configuration and change to in filter type', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["tata", "toto", "value1"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof InFilter).toBeTruthy();
            expect(result instanceof ExactFilter).toBeFalsy();

            expect(result.sign).toBe("in");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values[0]).toBe("tata");
            expect(result.options.values[1]).toBe("toto");
            expect(result.options.values[2]).toBe("value1");
        }));
    });
    describe('when not in override mode', () => {
        it('should add value and change into a InFilter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["tata"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof InFilter).toBeTruthy();
            expect(result instanceof ExactFilter).toBeFalsy();

            expect(result.sign).toBe("in");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values[0]).toBe("tata");
            expect(result.options.values[1]).toBe("toto");
        }));

        it('should remove the filter by returning null when same value is passed', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const result = filter.update(newConfiguration);
            //then
            expect(result).toBeNull();
        }));

        it('should remove value if already present and add the new one (changes to in filter)', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["tata", "toto", "bobo"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof InFilter).toBeTruthy();
            expect(result instanceof ExactFilter).toBeFalsy();

            expect(result.sign).toBe("in");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0]).toBe("bobo");
            expect(result.options.values[1]).toBe("tata");
        }));

        it('should remove value and change back to exact filter type', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            let newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["tata", "toto", "bobo"]}
            };
            const result = filter.update(newConfiguration);

            //when
            newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["bobo"]}
            };
            const lastFilter = result.update(newConfiguration);

            expect(lastFilter instanceof InFilter).toBeFalsy();
            expect(lastFilter instanceof ExactFilter).toBeTruthy();

            expect(lastFilter.sign).toBe("=");
            expect(lastFilter.fieldId).toBe("Col1");
            expect(lastFilter.fieldName).toBe("Col1");
            expect(lastFilter.options.values.length).toBe(1);
            expect(lastFilter.options.values[0]).toBe("tata");
        }));

        it('should update in filter add value to in filter when adding an exact filter on same field', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                overwriteMode: true,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["tutu", "tata"]}
            };

            //when
            const result = filter.update(newConfiguration);
            //then
            expect(result instanceof InFilter).toBeTruthy();

            expect(result.sign).toBe("in");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0]).toBe("tata");
            expect(result.options.values[1]).toBe("toto");
            expect(result.options.values[2]).toBe("tutu");
            // should return only one IN
        }));
    });
    describe('filter component api', () => {
        it('should add value to the current filter, changing it to InFilter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.addValue("tata");

            //then
            expect(result instanceof InFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0]).toBe("tata");
            expect(result.options.values[1]).toBe("toto");
        }));

        it('should remove value to the current filter delete the filter by returning null', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.removeValue("toto");

            //then
            expect(result).toBeNull();
        }));

        it('should do nothing because the given value does not match any of the filter values', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.removeValue("tata");

            //then
            expect(result).toBe(filter);
        }));

        it('should update value in the current filter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue("toto", "bobo");

            //then
            expect(result instanceof ExactFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0]).toBe("bobo");
        }));

        it('should do nothing on the current filter because the value to update does not exist', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue("tata", "bobo");

            //then
            expect(result instanceof ExactFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0]).toBe("toto");
        }));
    });

    it('should remove filter by returning null when toggling an already existing value', inject(function () {
        //given
        const configuration = {
            fieldId: 'Col1',
            fieldName: 'Col1',
            type: FILTER_TYPE.EXACT,
            options: {values: ["toto"]}
        };
        const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

        //when
        const result = filter.toggleValue("toto");

        //then
        expect(result).toBeNull();
    }));

    it('should add value to the current filter when toggling a non-existing value', inject(function () {
        //given
        const configuration = {
            fieldId: 'Col1',
            fieldName: 'Col1',
            type: FILTER_TYPE.EXACT,
            options: {values: ["toto"]}
        };
        const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);

        //when
        const result = filter.toggleValue("tata");

        //then
        expect(result instanceof InFilter).toBeTruthy();
        expect(result.options.values.length).toBe(2);
        expect(result.options.values[0]).toBe("tata");
        expect(result.options.values[1]).toBe("toto");
    }));

    describe('DSL actions', () => {
        it('return filter in tql form', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["toto"]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            expect(filter.toDSL()).toBe("(Col1='toto')");
        }));

        it('return filter in tql form is empty', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: [""]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            expect(filter.toDSL()).toBe("(Col1 is empty)");
        }));
    });

    describe('get label', () => {
        it('should return the label', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: [""]}
            };
            const filter = new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            expect(filter.getLabel("toto")).toBe("toto");
        }));
    });
});