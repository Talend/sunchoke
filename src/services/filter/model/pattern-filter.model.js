import {FILTER_TYPE} from "./filter-const.js"; //eslint-disable-line no-unused-vars
import ScFilter from "./abstract/filter.model.js";

/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model:PatternFilter
 * @description class defining an "Pattern" filter
 */
export default class PatternFilter extends ScFilter {

	constructor(fieldId, fieldName, options, editable) {
		super(fieldId, fieldName, options, editable);
		this.sign = '';

		//sort value
		this.options.values.sort(this._compareValues);
	}

	/**
	 * @ngdoc method
	 * @name toDSL
	 * @methodOf talend.sunchoke.filter.model:PatternFilter
	 * @description transform current object to string dsl
	 * @return { string }the string DSL representing the object
	 */
	toDSL() {
		let valueToString = '';
		this.options.values.forEach((value, index) => {
			valueToString += index !== this.options.values.length - 1 ? this.fieldId + " complies '" + value + "' or " :
			this.fieldId + " complies '" + value + "'";
		});
		return "(" + valueToString + ")";
	}

	//-----------------------------------------------------------------------------------------------
	// override method
	//-----------------------------------------------------------------------------------------------

	/**
	 * @ngdoc method
	 * @name setValues
	 * @methodOf talend.sunchoke.filter.model:PatternFilter
	 * @param newOptions the options for the new filter
	 * @description creates a new filter from the current one using the given options object
	 * @return the new filter
	 */
	setValues(newOptions) {
		if (newOptions.values.length) {
			return new PatternFilter(this.fieldId, this.fieldName, newOptions, this.editable)
		}
		return null;
	}

	/**
	 * @ngdoc method
	 * @name update
	 * @methodOf talend.sunchoke.filter.model:ExactFilter
	 * @param configuration the configuration to apply to the filter list
	 * @description updates the current filter with the given configuration if the type and field matches
	 */
	update(configuration) {
		if (configuration.fieldId === this.fieldId && (configuration.type === FILTER_TYPE.PATTERN)) {

			//overwrite the filter with the current configuration values
			if (configuration.overwriteMode) {
				return new PatternFilter(
					this.fieldId, this.fieldName, configuration.options, configuration.editable);
			} else {
				//process configuration to remove existing value and add new ones
				const newValue = this.toggleFilterValues(configuration.options.values);
				configuration.options.values = newValue;

				if (configuration.options.values.length === 0) {
					return null;
				} else {
					return new PatternFilter(
						this.fieldId, this.fieldName, configuration.options, configuration.editable);
				}
			}
		}
		//configuration doesn't concern the current filter
		return this;
	}

	/*getFilterFn() {

	 }

	 toTree() {

	 }

	 static fromTree(subtree) {

	 }

	 static fromDSL(subDSL) {

	 }*/
}
