import ExactFilter from './exact-filter.model.js'; //eslint-disable-line no-unused-vars
import { FILTER_TYPE } from "./filter-const.js"; //eslint-disable-line no-unused-vars
import AbstractExactInFilter from "./abstract/exact-in-filter.model.js";

/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model:InFilter
 * @description class defining an "IN" filter
 */
export default class InFilter extends AbstractExactInFilter {

    constructor(fieldId, fieldName, options, editable) {
        super(fieldId, fieldName, options, editable);
        this.sign = 'in';
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