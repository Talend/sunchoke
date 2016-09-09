/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import { FILTER_TYPE } from './filter-const.js';
import QualityFilter from './quality-filter.model.js';

describe('quality filter model', () => {
	describe('when not the same field', () => {
		it('should return the given filter', inject(function () {
			//given
			const configuration = {
				fieldId: 'Col1',
				fieldName: 'Col1',
				type: FILTER_TYPE.QUALITY,
				overwriteMode: true,
				options: { isValid: true }
			};
			const filter = new QualityFilter(configuration.fieldId, configuration.fieldName, configuration.options);

			//when
			const newConfiguration = {
				fieldId: 'Col2',
				fieldName: 'Col2',
				type: FILTER_TYPE.QUALITY,
				options: { isValid: true }
			};
			const result = filter.update(newConfiguration);

			//then
			expect(result instanceof QualityFilter).toBeTruthy();

			expect(result.sign).toBe("quality");
			expect(result.editable).toBeFalsy();
			expect(result.fieldId).toBe("Col1");
			expect(result.fieldName).toBe("Col1");
			expect(result.options.isValid).toBeTruthy();
			expect(result.options.values.length).toBe(1);
			expect(result.options.values[0]).toBe("valid records");
		}));

		it('should remove the filter (toggle)', inject(function () {
			//given
			const configuration = {
				fieldId: 'Col1',
				fieldName: 'Col1',
				type: FILTER_TYPE.QUALITY,
				options: { isValid: true }
			};
			const filter = new QualityFilter(configuration.fieldId, configuration.fieldName, configuration.options);

			//when
			const newConfiguration = {
				fieldId: 'Col1',
				fieldName: 'Col1',
				type: FILTER_TYPE.QUALITY,
				options: { isValid: true }
			};
			const result = filter.update(newConfiguration);

			//then
			expect(result).toBeNull();
		}));

		it('should return the new filter (quality filter valid and invalid)', inject(function () {
			//given
			const configuration = {
				fieldId: 'Col1',
				fieldName: 'Col1',
				type: FILTER_TYPE.QUALITY,
				options: { isValid: true }
			};
			const filter = new QualityFilter(configuration.fieldId, configuration.fieldName, configuration.options);

			//when
			const newConfiguration = {
				fieldId: 'Col1',
				fieldName: 'Col1',
				type: FILTER_TYPE.QUALITY,
				options: { isValid: false }
			};
			const result = filter.update(newConfiguration);

			//then
			expect(result instanceof QualityFilter).toBeTruthy();

			expect(result.sign).toBe("quality");
			expect(result.editable).toBeFalsy();
			expect(result.fieldId).toBe("Col1");
			expect(result.fieldName).toBe("Col1");
			expect(result.options.isValid).toBeFalsy();
			expect(result.options.values.length).toBe(1);
			expect(result.options.values[0]).toBe("invalid records");
		}));
	});

	describe('DSL actions', () => {
		it('return filter valid in tql form', inject(function () {
			//given
			const configuration = {
				fieldId: 'Col1',
				fieldName: 'Col1',
				type: FILTER_TYPE.QUALITY,
				options: { isValid: false }
			};
			const filter = new QualityFilter(configuration.fieldId, configuration.fieldName, configuration.options);
			expect(filter.toDSL()).toBe("(Col1 is invalid)");
		}));

		it('return filter invalid in tql form', inject(function () {
			//given
			const configuration = {
				fieldId: 'Col1',
				fieldName: 'Col1',
				type: FILTER_TYPE.QUALITY,
				options: { isValid: true }
			};
			const filter = new QualityFilter(configuration.fieldId, configuration.fieldName, configuration.options);
			expect(filter.toDSL()).toBe("(Col1 is valid)");
		}));
	});
});