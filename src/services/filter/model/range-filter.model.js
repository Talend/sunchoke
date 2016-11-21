import ScFilter from './abstract/filter.model.js';
import { FILTER_TYPE } from "./filter-const.js";

/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model:RangeFilter
 * @description class defining an "range" filter
 */
export default class RangeFilter extends ScFilter {

    constructor(fieldId, fieldName, options) {
        super(fieldId, fieldName, options, false);
        this.sign = 'inside_range';

        //sort value
        this.options.values.sort(this._compareValues);
    }

    /**
     * @ngdoc method
     * @name update
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param configuration the configuration to apply to the filter list
     * @description updates the current filter with the given configuration if the type and field matches
     */
    update(configuration) {
        if (configuration.fieldId === this.fieldId && configuration.type === FILTER_TYPE.INSIDE_RANGE) {
            //overwrite the filter with the current configuration values
            if (configuration.overwriteMode) {
                return new RangeFilter(this.fieldId, this.fieldName, configuration.options);
            } else {
                if (configuration.rangeMergeMode) {
                    //update current filter
                    const newValue = this.mergeRangesWithCurrentOne(configuration.options.values);
                    configuration.options.values = newValue;
                } else {
                    const newValue = this.toggleFilterValues(configuration.options.values);
                    configuration.options.values = newValue;
                }
                //if there's no value left
                return configuration.options.values.length === 0 ? null : new RangeFilter(this.fieldId, this.fieldName, configuration.options);
            }
        }
        //configuration doesn't concern the current filter
        return this;
    }

    /**
     * @ngdoc method
     * @name toggleFilterValues
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param configuration the configuration to apply to the filter list
     * @description process the configuration for simple value filter
     */
    mergeRangesWithCurrentOne(values) {
        let clone = JSON.parse(JSON.stringify(this.options.values));

        //looking for the given filter value in the current filter
        values.forEach((value) => {
            if (clone[0].min > value.min) {
                //smallest range so we select everything from the biggest range max to the smallest range min
                clone = [{
                    min: value.min,
                    minLabel: value.minLabel,
                    max: clone[clone.length - 1].max,
                    maxLabel: clone[clone.length - 1].maxLabel
                }];
            } else {
                const newRange = {
                    min: clone[0].min,
                    minLabel: clone[0].minLabel,
                    max: value.max,
                    maxLabel: value.maxLabel
                };
                if (!this.inAnotherRange(clone, newRange)) {
                    //removing all the duplicate range (in the new range)
                    clone = this.removeDuplicateRange(clone, newRange);

                    if (!this.stepsOnCurrentRanges(clone, newRange)) {
                        clone.push(newRange);
                    } else {
                        //steps on another range
                        const rangeToUpdate = clone.findIndex((filterValue) => {
                            return newRange.max >= filterValue.min && newRange.max <= filterValue.max;
                        });

                        if (rangeToUpdate > -1) {
                            //as when using merge mode the begining point is always the min of the smallest range
                            clone[rangeToUpdate].min = newRange.min;
                            clone[rangeToUpdate].minLabel = newRange.minLabel;
                        }
                    }
                }
            }
            clone.sort(this._compareValues);
        });
        return clone;
    }

    /**
     * @ngdoc method
     * @name inAnotherRange
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param { string } filterValues the filter's values
     * @param { object } range given range
     * @description verify if the given range is included in an existing one
     * @return { boolean } true if it exists in current ranges, otherwise false
     */
    inAnotherRange(filterValues, range) {
        const rangeContainingValue = filterValues.filter((filterValue) => {
            return range.min >= filterValue.min && range.max <= filterValue.max;
        })

        if (rangeContainingValue.length > 0) {
            return true;
        }
        return false;
    }

    /**
     * @ngdoc method
     * @name stepsOnCurrentRanges
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param { string } filterValues the filter's values
     * @param { object } range given range
     * @description verify if the given range is steps on an existing one
     * @return { boolean } true if the given range steps in current ranges, otherwise false
     */
    stepsOnCurrentRanges(filterValues, range) {
        const rangeContainingValue = filterValues.filter((filterValue) => {
            return (range.min > filterValue.min && range.min < filterValue.max) ||
                (range.max < filterValue.max && range.max > filterValue.min);
        })

        if (rangeContainingValue.length > 0) {
            return true;
        }
        return false;
    }

    /**
     * @ngdoc method
     * @name rangeContainingValue
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param { string } filterValues the filter's values
     * @param { object } range given range
     * @description removes range which are included in the given range
     */
    removeDuplicateRange(filterValues, range) {
        const rangeContainingValue = filterValues.filter((filterValue) => {
            return !(filterValue.min >= range.min && filterValue.max <= range.max);
        });
        return rangeContainingValue;
    }

    /**
     * @ngdoc method
     * @name setValues
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param newOptions the options for the new filter
     * @description creates a new filter from the current one usin²g the given options object
     * @return the new filter
     */
    setValues(newOptions) {
        if (newOptions.values.length) {
            return new RangeFilter(this.fieldId, this.fieldName, newOptions);

        }
        return null;
    }

    /**
     * @ngdoc method
     * @name removeValue
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param value the value to remove from filter
     * @description remove a value from the filter
     * @return a new filter after removing the given one
     */
    removeValue(value) {
        const options = this.options;
        const newValues = this.options.values.filter((filterValue) => {
            return this._compareValues(filterValue, value) !== 0;
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
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param value the value to add
     * @description add a value to the filter's values
     * @return the new filter with containing the added value
     */
    addValue(value) {
        //add if it does not exist so it's just like a toggle
        return this.toggleValue(value);
    }

    /**
     * @ngdoc method
     * @name addValue
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param value the value to add
     * @description add a value to the filter's values
     * @return the new filter with containing the added value
     */
    updateValue(oldValue, newValue) {
        //adding the value to the list
        const options = this.options;
        const newValues = JSON.parse(JSON.stringify(this.options.values));
        const updateIndex = newValues.findIndex((filterValue) => {
            return this._compareValues(filterValue, oldValue) === 0;
        });

        if (updateIndex > -1) {
            const updatedValue = newValues.splice(updateIndex, 1)[0];
            updatedValue.min = newValue.min;
            updatedValue.max = newValue.max;

            //if the modified value is not included in other range then adding it
            if (!this.stepsOnCurrentRanges(newValues, updatedValue)) {
                //add or merge the range
                this.processMergeableRange(newValues, updatedValue);
                //recreating an option object
                const newOptions = {
                    ...options,
                    values: newValues
                };
                return this.setValues(newOptions);
            } else {
                return this;
            }
        } else {
            return this;
        }
    }

    /**
     * @ngdoc method
     * @name toggleValue
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param value the value to toggle
     * @description toggle a value of the filter's values
     * @return the new filter with containing the new filter value list
     */
    toggleValue(value) {
        const options = this.options;
        const newValue = this.toggleFilterValues([value]);
        const newOptions = {
            ...options,
            values: newValue
        };
        return this.setValues(newOptions);
    }

    /**
     * @ngdoc method
     * @name processMergeableRange
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param configuration the configuration to apply to the filter list
     * @description process the given value to check if it can be merged with other ranges,
     *              if not simply adds the range to the list
     */
    processMergeableRange(filterList, value) {
        //find ranges where max = value.min or min = value.max
        const previousRangeIndex = filterList.findIndex((filterValue) => {
            return filterValue.max === value.min;
        });
        const nextRangeIndex = filterList.findIndex((filterValue) => {
            return filterValue.min === value.max;
        });

        //if the given range is consecutive to an existing range (after or before), fuse them together
        if (previousRangeIndex > -1) {
            filterList[previousRangeIndex].max = value.max;
            filterList[previousRangeIndex].maxLabel = value.maxLabel;
        }
        if (nextRangeIndex > -1) {
            filterList[nextRangeIndex].min = value.min;
            filterList[nextRangeIndex].min = value.minlabel;
        }

        if (previousRangeIndex > -1 && nextRangeIndex > -1) {
            //merging the 3 ranges
            filterList[previousRangeIndex].max = filterList[nextRangeIndex].max;
            filterList[previousRangeIndex].maxLabel = filterList[nextRangeIndex].maxLabel;
            filterList.splice(nextRangeIndex, 1);
        }

        else if (previousRangeIndex < 0 && nextRangeIndex < 0) {
            filterList.push(value);
        }
    }

    /**
     * @ngdoc method
     * @name toDSL
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @description transform current object to string dsl
     * @return { string }the string DSL representing the object
     */
    toDSL() {
        let stringToReturn = '';

        if (this.options.isSingleValueRange) {
            this.options.values.forEach((value, index) => {
                //if the min = max then it's just like an equal
                stringToReturn += "(" + this.fieldId + " >= " + value.min + " and " + this.fieldId + " <= " + value.max + ")";
                index !== this.options.values.length - 1 ? stringToReturn += ' or ' : '';
            });
        } else {
            this.options.values.forEach((value, index) => {
                stringToReturn += this.fieldId + " between [" + value.min + ", " + value.max + "]";
                index !== this.options.values.length - 1 ? stringToReturn += ' or ' : '';
            });
        }
        return "(" + stringToReturn + ")";
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
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param value to display
     * @description converts the value into a label
     */
    getLabel(value) {
        let keyMin = 'min';
        let keyMax = 'max';

        if (value.minLabel && value.maxLabel) {
          keyMin = 'minLabel';
          keyMax = 'maxLabel';
        }

        if (value[keyMin] !== value[keyMax]) {
            return !this.options.isSingleValueRange  && !this.options.includeDateMax ? ("[" + value[keyMin] + ", " + value[keyMax] + "[") :
                ("[" + value[keyMin] + ", " + value[keyMax] + "]");
        }

        if (value.min === value.max) {
          return '[' + value[keyMin] + ']';
        }
        return value[keyMin];
    }

    /**
     * @ngdoc method
     * @name toggleFilterValues
     * @methodOf talend.sunchoke.filter.model:RangeFilter
     * @param configuration the configuration to apply to the filter list
     * @description process the configuration for simple value filter
     */
    toggleFilterValues(values) {
        let clone = this.options.values.slice(0);

        //looking for the given filter value in the current filter
        values.forEach((value) => {
            const index = clone.findIndex(filterValue => {
                return this._compareValues(value, filterValue) === 0;
            });
            //if exactly the same one is found remove it
            if (index > -1) {
                //removing them if they were found
                clone.splice(index, 1);
            }
            //else we need to check if it's part of another existing range
            else if (!this.stepsOnCurrentRanges(clone, value)) {
                this.processMergeableRange(clone, value);
            } else {
                //in another range, split range into 2 if not in single value range
                //as we're not able to know previous range value in that case
                if (this.inAnotherRange(clone, value) && !this.options.isSingleValueRange) {
                    //find the first range which included the new range
                    const rangeToUpdate = clone.findIndex((filterValue) => {
                        return value.min >= filterValue.min && value.max <= filterValue.max;
                    });

                    //default range (split case)
                    let newRanges = [{
                        min: clone[rangeToUpdate].min,
                        max: value.min,
                        minLabel: clone[rangeToUpdate].minLabel,
                        maxLabel: clone[rangeToUpdate].maxLabel
                      }, {
                        min: value.max,
                        max: clone[rangeToUpdate].max,
                        minLabel: value.maxLabel,
                        maxLabel: clone[rangeToUpdate].maxLabel
                    }];

                    //if the range to update is the first one
                    if (clone[rangeToUpdate].max === value.max) {
                        newRanges = [{
                          min: clone[rangeToUpdate].min,
                            minLabel: clone[rangeToUpdate].minLabel,
                            max: value.min,
                            maxLabel: value.minLabel
                          }];
                    }
                    clone.splice(rangeToUpdate, 1);
                    clone = clone.concat(newRanges);
                }
                //the else case would be that it steps in another range but without being in it
                //which should be impossible ... so we ignore those cases
            }
            clone.sort(this._compareValues);
        });
        return clone;
    }

    /**
     * @override
     *
     * @ngdoc method
     * @name _compareValues
     * @methodOf talend.sunchoke.filter.model.abstract:ScFilter
     * @param { object } colA  first range to compare
     * @param { object } colB second range to compare
     * @description compares two ranges value
     * @return { int } -1 if smaller, 1 if bigger and 0 if equals
     */
    _compareValues(colA, colB) {
        if (colA.max <= colB.min && colA.min < colB.min) {
            return -1;
        }
        if (colA.min >= colB.max && colA.max > colB.max) {
            return 1;
        }
        else if (colA.min === colB.min && colA.max === colB.max) {
            return 0;
        }
    }
}
