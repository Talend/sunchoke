import ScFilter from './abstract/filter.model.js';
import { FILTER_TYPE } from "./filter-const.js";

const INVALID_RECORDS_LABEL = 'invalid records';
const VALID_RECORDS_LABEL = 'valid records';

/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model:QualityFilter
 * @description class defining an "range" filter
 */
export default class QualityFilter extends ScFilter {

	constructor(fieldId, fieldName, options) {
		super(fieldId, fieldName, options, false);
		this.sign = 'quality';

		//creating value depending of the quality filter type
		this.options.values = [this.options.isValid ? VALID_RECORDS_LABEL : INVALID_RECORDS_LABEL];
	}

	/**
	 * @ngdoc method
	 * @name update
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @param configuration the configuration to apply to the filter list
	 * @description updates the current filter with the given configuration if the type and field matches
	 */
	update(configuration) {
		if (configuration.fieldId === this.fieldId && configuration.type === FILTER_TYPE.QUALITY) {
			if (this.options.isValid === configuration.options.isValid) {
				// same filter : remove it
				return null;
			} else {
				// quality filter but of different kind (valid and invalid)
				// change the filter to the given type
				return new QualityFilter(this.fieldId, this.fieldName, configuration.options);
			}
		}

		//configuration doesn't concern the current filter
		return this;
	}

	/**
	 * @ngdoc method
	 * @name setValues
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @param newOptions the options for the new filter
	 * @description creates a new filter from the current one usin²g the given options object
	 * @return the new filter
	 */
	setValues(/*newOptions*/) {
		// not needed
	}

	/**
	 * @ngdoc method
	 * @name removeValue
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @param value the value to remove from filter
	 * @description remove a value from the filter
	 * @return a new filter after removing the given one
	 */
	removeValue(/*value*/) {
		// not needed
	}

	/**
	 * @ngdoc method
	 * @name addValue
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @param value the value to add
	 * @description add a value to the filter's values
	 * @return the new filter with containing the added value
	 */
	addValue(/*value*/) {
		// not needed
	}

	/**
	 * @ngdoc method
	 * @name addValue
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @param value the value to add
	 * @description add a value to the filter's values
	 * @return the new filter with containing the added value
	 */
	updateValue(/*oldValue, newValue*/) {
		// not needed
	}

	/**
	 * @ngdoc method
	 * @name toggleValue
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @param value the value to toggle
	 * @description toggle a value of the filter's values
	 * @return the new filter with containing the new filter value list
	 */
	toggleValue(/*value*/) {
		// not needed
	}

	/**
	 * @ngdoc method
	 * @name toDSL
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @description transform current object to string dsl
	 * @return { string }the string DSL representing the object
	 */
	toDSL() {
		if (this.options.isValid) {
			return "(" + this.fieldId + " is valid)";
		} else {
			return  "(" + this.fieldId + " is invalid)";
		}
	}

	/*getFilterFn() {

	 }

	 toTree() {

	 }

	 static fromTree(subtree) {

	 }

	 static fromDSL(subDSL) {

	 }*/

	//-----------------------------------------------------------------------------------------------
	// override method
	//-----------------------------------------------------------------------------------------------

	/**
	 * @ngdoc method
	 * @name getLabel
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @param value to display
	 * @description converts the value into a label
	 */
	getLabel(value) {
		return value;
	}

	/**
	 * @ngdoc method
	 * @name toggleFilterValues
	 * @methodOf talend.sunchoke.filter.model:QualityFilter
	 * @param configuration the configuration to apply to the filter list
	 * @description process the configuration for simple value filter
	 */
	toggleFilterValues(/*values*/) {
		// filter value not toggable
	}
}