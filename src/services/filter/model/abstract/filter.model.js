/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model.abstract:ScFilter
 * @description class defining an filter with its default behaviour
 */
export default class ScFilter {
    constructor(fieldId, fieldName, options, editable) {
        /*if (new.target === ScFilter) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }*/

        //affectation
        this.fieldId = fieldId;
        this.fieldName = fieldName;
        this.options = options;
        this.editable = editable;
    }

    /**
     * @ngdoc method
     * @name toggleFilterValues
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param configuration the configuration to apply to the filter list
     * @description process the configuration for simple value filter
     */
    toggleFilterValues(values) {
        const clone =  this.options.values.slice(0);
        const newFilterValue = [];
        //looking for the given filter value in the current filter
        values.forEach((value) => {
            const index = clone.findIndex(filterValue => {
                return this._compareValues(value, filterValue) === 0;
            });
            if (index > - 1) {
                //removing them if they were found
                clone.splice(index, 1);
            } else {
                newFilterValue.push(value);
            }
        });

        //adding the new values
        clone.push(...newFilterValue);
        clone.sort(this._compareValues);
        return clone;
    }

    /**
     * @ngdoc method
     * @name _compareValues
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param value  first value to compare
     * @param valueToCompare second value to compare
     * @description default compare function (compares two simple value)
     */
    _compareValues(value, valueToCompare) {
        if (value < valueToCompare) {
            return -1;
        }
        if (value > valueToCompare) {
            return 1;
        }
        if (value === valueToCompare) {
            return 0;
        }
    }

    /**
     * @ngdoc method
     * @name getLabel
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param value to display
     * @description converts the value into a label
     */
    getLabel(value) {
        return value;
    }

    /**
     * @ngdoc method
     * @name removeValue
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param value the value to remove from filter
     * @description remove a value from the filter
     * @return { Object } a new filter after removing the given one
     */
    removeValue(value) {
        const options = this.options;
        const newValues = this.options.values.filter((filterValue) => {
            return filterValue !== value;
        });

        if (newValues.length === this.options.values.length) {
            return this;
        }

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
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param value the value to add
     * @description add a value to the filter's values
     * @return { Object } the new filter with containing the added value
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
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param value the value to add
     * @description add a value to the filter's values
     * @return { Object } the new filter with containing the added value
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
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param value the value to toggle
     * @description toggle a value of the filter's values
     * @return { Object } the new filter with containing the new filter value list
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
     * @name setValues
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param newOptions the options for the new filter
     * @description creates a new filter from the current one using the given options object
     * @return { Object } the new filter
     */
    setValues(/*newOptions*/) {
        //must be override
    }

    static fromTree(/*subtree*/) {

    }

    static fromDSL(/*subDSL*/) {

    }
}