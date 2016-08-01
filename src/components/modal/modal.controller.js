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
 * @name talend.sunchoke.modal.controller:ScModalCtrl
 * @description Modal controller
 */
export default class ScModalCtrl {
    constructor($element, $timeout) {
        'ngInject';
        this.$element = $element;
        this.$timeout = $timeout;
    }

    onInnerClick(e) {
        // stop click propagation to prevent overlay click that close the modal
        e.stopPropagation();

        if (e.target.classList.contains('sc-modal-close')) {
            this.close();
        }
    }

    onInnerKeydown(e) {
        switch (e.keyCode) {
            case 13: // ENTER
                // click on primary element
                if (this.validateOnEnter) {
                    const domPrimaryElement = this.$element[0].querySelector('.sc-modal-primary');
                    const primaryElement = angular.element(domPrimaryElement);
                    this.$timeout(() => {
                        primaryElement.click();
                    }, 0, false);
                }
                break;

            case 27: // ESC
                if (this.closeOnEscape) {
                    this.close();
                }
                break;
            default:
                break;
        }
    }

    close() {
        if (this.beforeClose() === false) {
            return;
        }

        this.visible = false;
        this.onClose();
    }
}
