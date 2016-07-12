import InFilter from '../in-filter.model.js';
import ExactFilter from '../exact-filter.model.js';
import ScFilter from './filter.model.js';
import { FILTER_TYPE } from "../filter-const.js";

/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model:ExactFilter
 * @description class defining an "exact" filter
 */
export default class AbstractExactInFilter extends ScFilter {

    constructor(fieldId, fieldName, options, editable) {
        super(fieldId, fieldName, options, editable);
        this.options.values.sort(this._compareValues);
    }

    /**
     * @ngdoc method
     * @name update
     * @methodOf talend.sunchoke.filter.model:ExactFilter
     * @param configuration the configuration to apply to the filter list
     * @description updates the current filter with the given configuration if the type and field matches
     */
    update(configuration) {
        if(configuration.fieldId === this.fieldId && (configuration.type === FILTER_TYPE.EXACT || configuration.type === FILTER_TYPE.IN)) {

            const configurationValues = configuration.options.values; // all values
            //overwrite the filter with the current configuration values
            if (configuration.overwriteMode) {
                return configurationValues.length > 1 ?
                    new InFilter(this.fieldId, this.fieldName, configuration.options) :  new ExactFilter(this.fieldId, this.fieldName, configuration.options);
            } else {
                //process configuration to remove existing value and add new ones
                const newValue = this.toggleFilterValues(configuration.options.values);
                configuration.options.values = newValue;

                if (configuration.options.values.length === 0) {
                    return null;
                } else {
                    return configuration.options.values.length > 1 ? new InFilter(this.fieldId, this.fieldName, configuration.options) :  new ExactFilter(this.fieldId, this.fieldName, configuration.options);
                }
            }
        }
        //configuration doesn't concern the current filter
        return this;
    }

    /**
     * @ngdoc method
     * @name setValues
     * @methodOf talend.sunchoke.filter.model:ExactFilter
     * @param newOptions the options for the new filter
     * @description creates a new filter from the current one using the given options object
     * @return { Object } the new filter
     */
    setValues(newOptions) {
        if(newOptions.values.length > 1) {
            return new InFilter(this.fieldId, this.fieldName, newOptions);
        } else if (newOptions.values.length) {
            return new ExactFilter(this.fieldId, this.fieldName, newOptions)
        }
        return null;
    }
}