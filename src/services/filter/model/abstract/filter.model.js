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

    static fromTree(/*subtree*/) {

    }

    static fromDSL(/*subDSL*/) {

    }
}