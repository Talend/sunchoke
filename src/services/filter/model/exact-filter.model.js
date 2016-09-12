import InFilter from './in-filter.model.js';  //eslint-disable-line no-unused-vars
import { FILTER_TYPE } from "./filter-const.js";  //eslint-disable-line no-unused-vars
import AbstractExactInFilter from "./abstract/exact-in-filter.model.js";

/**
 * @ngdoc class
 * @name talend.sunchoke.filter.model:ExactFilter
 * @description class defining an "exact" filter
 */
export default class ExactFilter extends AbstractExactInFilter {

	constructor(fieldId, fieldName, options, editable) {
		super(fieldId, fieldName, options, editable);
		this.editable = options.values[0].length > 1 ? editable : false;
		this.sign = '=';
	}

    /**
     * @ngdoc method
     * @name toDSL
     * @methodOf talend.sunchoke.filter.model:ExactFilter
     * @description transform current object to string dsl
     * @return { string } the string DSL representing the object
     */
    toDSL() {
        let dsl = "";
        if (typeof(this.options.values[0]) === 'string') {  //eslint-disable-line angular/typecheck-string
            dsl = this.options.values[0] !== "" ?
            "(" + this.fieldId + "='" + this.options.values[0] + "')" :
            "(" + this.fieldId + " is empty)";
        } else {
            dsl = this.options.values[0] !== "" ?
            "(" + this.fieldId + "=" + this.options.values[0] + ")" :
            "(" + this.fieldId + " is empty)";
        }
        return dsl;
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
