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
                return this._compareValues(value, filterValue);
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
        return value === valueToCompare;
    }

    static fromTree(/*subtree*/) {

    }

    static fromDSL(/*subDSL*/) {

    }
}