import ExactFilter from './exact-filter.model.js'; //eslint-disable-line no-unused-vars
import { FILTER_TYPE } from "./filter-const.js"; //eslint-disable-line no-unused-vars
import AbstractExactInFilter from "./abstract/exact-in-filter.model.js";

/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model:InFilter
 * @description class defining an "IN" filter
 */
export default class InFilter extends AbstractExactInFilter {

    constructor(fieldId, fieldName, options) {
        super(fieldId, fieldName, options, true);
        this.sign = 'in';
    }

    /**
     * @ngdoc method
     * @name removeValue
     * @methodOf talend.sunchoke.filter.model:InFilter
     * @param value the value to remove from filter
     * @description remove a value from the filter
     * @return a new filter after removing the given one
     */
    removeValue(value) {
        const options = this.options;
        const newValues = this.options.values.filter((filterValue) => {
            return filterValue !== value;
        });

        //recreating an option object
        const newOptions = {
            ...options,
            values: newValues
        };
        return this.setValues(newOptions);
    }

    /**
     * @ngdoc method
     * @name addValue
     * @methodOf talend.sunchoke.filter.model:InFilter
     * @param value the value to add
     * @description add a value to the filter's values
     * @return the new filter with containing the added value
     */
    addValue(value) {
       const options = this.options;
       const newOptions = {
           ...options,
           values: options.values.concat(value)
       };
       return this.setValues(newOptions);
    }

    /**
     * @ngdoc method
     * @name addValue
     * @methodOf talend.sunchoke.filter.model:InFilter
     * @param value the value to add
     * @description add a value to the filter's values
     * @return the new filter with containing the added value
     */
    updateValue(oldValue, newValue) {
        //adding the value to the list
        const options = this.options;
        const newValues = (this.options.values.slice(0));
        const updateIndex = newValues.findIndex((filterValue) => {
            return this._compareValues(filterValue, oldValue) === 0;
        });

        if (updateIndex > - 1) {
            newValues[updateIndex] = newValue;
            //recreating an option object
            const newOptions = {
                ...options,
                values: newValues
            };
            return this.setValues(newOptions);
        } else {
            return this;
        }
    }

    /**
     * @ngdoc method
     * @name toggleValue
     * @methodOf talend.sunchoke.filter.model:InFilter
     * @param value the value to toggle
     * @description toggle a value of the filter's values
     * @return the new filter with containing the new filter value list
     */
    toggleValue(value) {
        const options = this.options;
        const newValues = this.toggleFilterValues([value]);

        const newOptions = {
            ...options,
            values: newValues
        };
        return this.setValues(newOptions);
    }

    /**
     * @ngdoc method
     * @name toDSL
     * @methodOf talend.sunchoke.filter.model:InFilter
     * @description transform current object to string dsl
     * @return { string }the string DSL representing the object
     */
    toDSL() {
        let valueToString = '';
        this.options.values.forEach((value, index) => {
            valueToString+=  index !== this.options.values.length - 1 ? "'" + value + "', " : "'" + value + "'";
        });
        return "(" + this.fieldId + " in [" + valueToString +"])";
    }

    /*getFilterFn() {

    }

    toTree() {

    }

    static fromTree(subtree) {

    }

    toDSL() {

    }

    static fromDSL(subDSL) {

    }*/
}