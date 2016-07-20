/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import { FILTER_TYPE } from './filter-const.js';
import PatternFilter from './pattern-filter.model.js';

describe('Pattern filter model', () => {
    describe('when not the same field', () => {
        it('should return the given filter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.PATTERN,
                overwriteMode: true,
                options: {values: ["tata", "toto", "value1"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof PatternFilter).toBeTruthy();

            expect(result.sign).toBe("");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0]).toBe("tata");
            expect(result.options.values[1]).toBe("toto");
        }));
    });
    describe('when in overwrite mode', () => {
        it('should overwrite filter value with configuration', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                overwriteMode: true,
                options: {values: ["tata", "toto", "value1"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof PatternFilter).toBeTruthy();

            expect(result.sign).toBe("");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values[0]).toBe("tata");
            expect(result.options.values[1]).toBe("toto");
            expect(result.options.values[2]).toBe("value1");
        }));
    });
    describe('when not in override mode', () => {
        it('should add value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["bobo"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof PatternFilter).toBeTruthy();

            expect(result.sign).toBe("");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values[0]).toBe("bobo");
            expect(result.options.values[1]).toBe("tata");
            expect(result.options.values[2]).toBe("toto");
        }));

        it('should remove the filter by returning null when same value is passed', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result).toBeNull();
        }));

        it('should remove value if already present and add the new one', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["tata", "toto", "bobo", "coco"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof PatternFilter).toBeTruthy();

            expect(result.sign).toBe("");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0]).toBe("bobo");
            expect(result.options.values[1]).toBe("coco");
        }));
    });

    describe('Pattern filter component api', () => {

        it('should return null when setting filter without values', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.setValues({values: []});

            //then
            expect(result).toBeNull();
        }));

        it('should add value to the current filter, changing it to PatternFilter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.addValue("bobo");

            //then
            expect(result instanceof PatternFilter).toBeTruthy();
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0]).toBe("bobo");
            expect(result.options.values[1]).toBe("tata");
            expect(result.options.values[2]).toBe("toto");
        }));

        it('should remove value to the current filter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.removeValue("toto");

            //then
            expect(result instanceof PatternFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0]).toBe("tata");
        }));

        it('should return the same filter cause the value to update does not exist', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue("valueToUp", "bobo");

            //then
            expect(result instanceof PatternFilter).toBeTruthy();
            expect(result).toBe(filter);
        }));

        it('should update value current filter value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue("toto", "bobo");

            //then
            expect(result instanceof PatternFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0]).toBe("bobo");
            expect(result.options.values[1]).toBe("tata");
        }));

        it('should add value in  current filter when new value toggled', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.toggleValue("bobo");

            //then
            expect(result instanceof PatternFilter).toBeTruthy();
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0]).toBe("bobo");
            expect(result.options.values[1]).toBe("tata");
            expect(result.options.values[2]).toBe("toto");
        }));

        it('should remove value on toggle when already in filter value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.toggleValue("tata");

            //then
            expect(result instanceof PatternFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0]).toBe("toto");
        }));
    });

    describe('DSL actions', () => {
        it('return filter in tql form', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.PATTERN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new PatternFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            expect(filter.toDSL()).toBe("(Col1 complies 'tata' or Col1 complies 'toto')");
        }));
    });
});