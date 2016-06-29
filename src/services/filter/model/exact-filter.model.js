import InFilter from './in-filter.model.js';  //eslint-disable-line no-unused-vars
import { FILTER_TYPE } from "./filter-const.js";  //eslint-disable-line no-unused-vars
import AbstractExactInFilter from "./abstract/exact-in-filter.model.js";

/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model:ExactFilter
 * @description class defining an "exact" filter
 */
export default class ExactFilter extends AbstractExactInFilter {

    constructor(fieldId, fieldName, options) {
        super(fieldId, fieldName, options, true);
        this.sign = '=';
    }

    /**
     * @ngdoc method
     * @name removeValue
     * @methodOf talend.sunchoke.filter.model:ExactFilter
     * @param value the value to remove from filter
     * @description remove a value from the filter
     * @return null if the removed value was a filter value (there's only one value in ExactFilter)
     */
    removeValue(value) {
        //whatever the value there can be only one value in exact filter
        //so the filter has to be deleted
        if (this.options.values[0] === value) {
            return null;
        }
        return this;
    }

    /**
     * @ngdoc method
     * @name addValue
     * @methodOf talend.sunchoke.filter.model:ExactFilter
     * @param value the value to add
     * @description add a value to the filter's values
     * @return the new filter with containing the added value
     */
    addValue(value) {
        const options = this.options;
        //adding the value to the list
        const newValues = (this.options.values.slice(0));
        newValues.push(value);
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
     * @methodOf talend.sunchoke.filter.model:ExactFilter
     * @param value the value to add
     * @description add a value to the filter's values
     * @return the new filter with containing the added value
     */
    updateValue(oldValue, newValue) {
        const options = this.options;
        //adding the value to the list
        const newValues = (this.options.values.slice(0));
        if (this._compareValues(newValues[0], oldValue)) {
            newValues[0] = newValue;
            //recreating an option object
            const newOptions = {
                ...options,
                values: newValues
            };
            return this.setValues(newOptions);
        }
        else {
            return this;
        }
    }

    /**
     * @ngdoc method
     * @name toggleValue
     * @methodOf talend.sunchoke.filter.model:ExactFilter
     * @param value the value to toggle
     * @description toggle a value of the filter's values
     * @return the new filter with containing the new filter value list
     */
    toggleValue(value) {
        const newValues = (this.options.values.slice(0));
        if (this._compareValues(newValues[0], value)) {
           return null;
        }
        else {
            return this.addValue(value);
        }
    }

    /**
     * @ngdoc method
     * @name toDSL
     * @methodOf talend.sunchoke.filter.model:ExactFilter
     * @description transform current object to string dsl
     * @return { string } the string DSL representing the object
     */
    toDSL() {
        return this.options.values[0] !== "" ?
            "(" + this.fieldId + "='"+ this.options.values[0] +"')" :
        "(" + this.fieldId + " is empty)";
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