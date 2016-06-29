import { FILTER_TYPE } from "../model/filter-const.js";
import ExactFilter from "../model/exact-filter.model.js";
import InFilter from "../model/in-filter.model.js";
import RangeFilter from "../model/range-filter.model.js";

export default class FilterModelFactory {
    constructor() {
    }

    /**
     * configuration = {
     *      type: exact,
     *      options:  {values: ['toto', 'tata], caseSensitive: true},
     *      fieldId, fieldName, ...
     * }
     * @param configuration
     */
    createFilter(configuration) {
        if (configuration) {
            switch(configuration.type) {
                case FILTER_TYPE.COMPARE:
                    break;
                case FILTER_TYPE.CONTAINS:
                    break;
                case FILTER_TYPE.EMPTY_FILTER:
                    break;
                case FILTER_TYPE.EXACT:
                case FILTER_TYPE.IN:
                    //shouldn't be of size 0
                    if (configuration.options.values && configuration.options.values.length > 0) {
                        //creating filter object
                        return configuration.options.values.length > 1 ?
                            new InFilter(configuration.fieldId, configuration.fieldName, configuration.options) :
                            new ExactFilter(configuration.fieldId, configuration.fieldName, configuration.options);
                    }
                    break;
                    //return new InFilter(configuration.fieldId, configuration.fieldName, configuration.options);
                case FILTER_TYPE.INSIDE_RANGE:
                    return new RangeFilter(configuration.fieldId, configuration.fieldName, configuration.options);
                /*case FILTER_TYPE.INVALID_RECORDS:
                    return;
                case FILTER_TYPE.MATCHES:
                    return;
                case FILTER_TYPE.VALID_RECORDS:
                    return;*/
            }
        }
    }
}
