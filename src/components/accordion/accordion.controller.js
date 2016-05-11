/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

/**
 * @ngdoc controller
 * @name talend.sunchoke.accordion.controller:ScAccordionCtrl
 * @description Accordions component controller
 */
export default class ScAccordionCtrl {

    constructor() {
        /**
         * @ngdoc property
         * @name accordions
         * @propertyOf talend.sunchoke.accordion.controller:ScAccordionCtrl
         * @description The array containing all its accordions items
         * @type {Array}
         */
        this.accordions = [];
    }

    /**
     * @ngdoc method
     * @name register
     * @methodOf talend.sunchoke.accordion.controller:ScAccordionCtrl
     * @description Register an accordions item
     */
    register(accordion) {
        this.accordions.push(accordion);
    }

    /**
     * @ngdoc method
     * @name unregister
     * @methodOf talend.sunchoke.accordion.controller:ScAccordionCtrl
     * @param {object} accordion The accordion to unregister
     * @description Unregister an accordion
     */
    unregister(accordion) {
        this.accordions = this.accordions.filter((next) => next !== accordion);
    }

    /**
     * @ngdoc method
     * @name toggle
     * @methodOf talend.sunchoke.accordion.controller:ScAccordionCtrl
     * @description Open/close an accordion and hide the others
     */
    toggle(accordion) {
        const wasActive = accordion.opened;
        this.accordions.forEach((next) => next.close());

        if (!wasActive) {
            accordion.open();
        }
    }
}
