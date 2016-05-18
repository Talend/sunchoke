/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScModalCtrl from './modal.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.modal.component:ScModalComponent
 * @description Modal
 * @restrict E
 * @usage
 * <sc-modal visible="isVisible"
 *           close-button="hasCloseButton"
 *           close-on-escape="closeOnEscape"
 *           close-on-overlay-click="closeOnOverlayClick"
 *           validate-on-enter="validateOnEnter"
 *           before-close="beforeClose()"
 *           on-close="onClose()">
 *     <sc-modal-header></sc-modal-header>
 *     <sc-modal-content>
 *         <button class="sc-modal-close">Close</button>
 *     </sc-modal-content>
 * </sc-modal>
 * @param {boolean} visible Control the modal visibility
 * @param {boolean} closeButton Display a cross that close the modal on click
 * @param {boolean} closeOnEscape Determine if modal you close on ESC keydown
 * @param {boolean} closeOnOverlayClick Determine if modal you close on overlay click
 * @param {boolean} validateOnEnter Determine if .sc-modal-primary element should  be clicked on ENTER keydown
 * @param {function} beforeClose Called when a close is requested. 
 * If the function returns explicitly false, the close is canceled. Otherwise the modal is closed.
 * @param {function} onClose Close callback
 * @param {string} sc-modal-close Class that tag an element to close the modal on click
 */
const ScModalComponent = {
    template: `
        <div ng-if="$ctrl.visible"
             class="sc-modal-overlay"
             ng-click="::($ctrl.closeOnOverlayClick && $ctrl.close())">
            <div class="sc-modal-inner" 
                 tabindex="-1"
                 ng-click="::($ctrl.onInnerClick($event))"
                 ng-keydown="::($ctrl.onInnerKeydown($event))"
                 sc-autofocus>
                <div class="sc-modal-header">
                    <div class="sc-modal-title" ng-transclude="scModalHeader"></div>
                    <label ng-if="::($ctrl.closeButton)"
                           class="sc-modal-close-btn sc-modal-close"></label>
                </div>
                <div class="sc-modal-content" ng-transclude="scModalContent"></div>
            </div>
        </div>
    `,
    transclude: {
        scModalHeader: '?scModalHeader',
        scModalContent: 'scModalContent'
    },
    bindings: {
        visible: '=',
        
        // options configuration
        closeButton: '<',
        closeOnEscape: '<',
        closeOnOverlayClick: '<',
        validateOnEnter: '<',

        // close behavior
        beforeClose: '&',
        onClose: '&'
    },
    controller: ScModalCtrl
};

export default ScModalComponent;