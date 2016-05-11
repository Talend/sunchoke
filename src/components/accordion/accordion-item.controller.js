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
 * @name talend.sunchoke.accordion.controller:ScAccordionItemCtrl
 * @description Accordion item component controller
 */
export default class ScAccordionItemCtrl {

    $onInit() {
        this.opened = false;
        this.parent.register(this);

        if (this.default) {
            this.toggle();
        }
    }

    $onDestroy() {
        this.parent.unregister(this);
    }

    /**
     * @ngdoc method
     * @name toggle
     * @methodOf talend.sunchoke.accordion.controller:ScAccordionItemCtrl
     * @description Toggle the accordion state.
     */
    toggle() {
        this.parent.toggle(this);
    }

    /**
     * @ngdoc method
     * @name open
     * @methodOf talend.sunchoke.accordion.controller:ScAccordionItemCtrl
     * @description Open the accordion.
     */
    open() {
        if (this.opened) {
            return;
        }
        this.opened = true;
        this.onOpen();
    }

    /**
     * @ngdoc method
     * @name close
     * @methodOf talend.sunchoke.accordion.controller:ScAccordionItemCtrl
     * @description Close the accordion.
     */
    close() {
        this.opened = false;
    }
}
