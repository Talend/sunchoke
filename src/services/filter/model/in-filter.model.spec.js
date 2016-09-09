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

describe('IN filter model', () => {
    describe('when not the same field', () => {
        it('should return the given filter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col2',
                fieldName: 'Col2',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["tata", "toto", "value1"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof InFilter).toBeTruthy();

            expect(result.sign).toBe("in");
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
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
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

        it('should overwrite filter value with configuration and change filter to exact filter type', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["bobo"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof InFilter).toBeFalsy();
            expect(result instanceof ExactFilter).toBeTruthy();

            expect(result.sign).toBe("=");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values[0]).toBe("bobo");
        }));
    });
    describe('when not in override mode', () => {
        it('should add value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["bobo"]}
            };
            const result = filter.update(newConfiguration);

            //then
            expect(result instanceof InFilter).toBeTruthy();
            expect(result instanceof ExactFilter).toBeFalsy();

            expect(result.sign).toBe("in");
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
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
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
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["tata", "toto", "bobo", "coco"]}
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
            expect(result.options.values[1]).toBe("coco");
        }));

        it('should remove value and change back to exact filter type', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);
            let newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["tata"]}
            };
            const result = filter.update(newConfiguration);
            expect(result instanceof InFilter).toBeFalsy();
            expect(result instanceof ExactFilter).toBeTruthy();

            expect(result.sign).toBe("=");
            expect(result.fieldId).toBe("Col1");
            expect(result.fieldName).toBe("Col1");
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0]).toBe("toto");
        }));

        it('should update in filter add value to in filter when adding an exact filter on same field', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                overwriteMode: true,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            const newConfiguration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.EXACT,
                options: {values: ["tutu"]}
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

    describe('in filter component api', () => {
        it('should add value to the current filter, changing it to InFilter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.addValue("bobo");

            //then
            expect(result instanceof InFilter).toBeTruthy();
            expect(result.options.values.length).toBe(3);
            expect(result.options.values[0]).toBe("bobo");
            expect(result.options.values[1]).toBe("tata");
            expect(result.options.values[2]).toBe("toto");
        }));

        it('should remove value to the current filter, changing it to ExactFilter', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.removeValue("toto");

            //then
            expect(result instanceof ExactFilter).toBeTruthy();
            expect(result.options.values.length).toBe(1);
            expect(result.options.values[0]).toBe("tata");
        }));

        it('should return the same filter cause the value to update does not exist', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue("valueToUp", "bobo");

            //then
            expect(result instanceof InFilter).toBeTruthy();
            expect(result).toBe(filter);
        }));

        it('should update value current filter value', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.updateValue("toto", "bobo");

            //then
            expect(result instanceof InFilter).toBeTruthy();
            expect(result.options.values.length).toBe(2);
            expect(result.options.values[0]).toBe("bobo");
            expect(result.options.values[1]).toBe("tata");
        }));

        it('should add value in  current filter when new value toggled', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.toggleValue("bobo");

            //then
            expect(result instanceof InFilter).toBeTruthy();
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
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            //when
            const result = filter.toggleValue("tata");

            //then
            expect(result instanceof ExactFilter).toBeTruthy();
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
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata"]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            expect(filter.toDSL()).toBe("(Col1 in ['tata', 'toto'])");
        }));

        it('return filter in tql form with is empty', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ["toto", "tata", ""]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            expect(filter.toDSL()).toBe("(Col1 is empty or Col1 in ['tata', 'toto'])");
        }));

        it('return filter in tql form with boolean and string', inject(function () {
            //given
            const configuration = {
                fieldId: 'Col1',
                fieldName: 'Col1',
                type: FILTER_TYPE.IN,
                options: {values: ['2', true, false]}
            };
            const filter = new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);

            expect(filter.toDSL()).toBe("(Col1 in [false, true, '2'])");
        }));
    });
});