/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScAccordionItemCtrl from './accordion-item.controller';

/**
 * @ngdoc component
 * @name talend.sunchoke.accordion.controller:ScAccordionItem
 * @description Accordion item directive. This MUST be used with accordion directive.
 * @restrict E
 * @usage
 <sc-accordion>
     <talend-accordion-item on-open='fn' default='true'>
         <trigger></trigger>
         <content></content>
     </talend-accordion-item>
     <talend-accordion-item>
         <trigger></trigger>
         <content></content>
     </talend-accordion-item>
     <talend-accordion-item>
         <trigger></trigger>
         <content></content>
     </talend-accordion-item>
 </sc-accordion>
 * @param {div} trigger The trigger element that will be injected in the trigger transclusion point
 * @param {div} content The content element that is shown/hidden
 * @param {function} on-open The function to execute on accordion item open
 * @param {boolean} default The default accordion to open
 */
const ScAccordionItemComponent = {
    template: `
    <li class="sc-accordion" ng-class="{open: $ctrl.opened}">
        <div class="trigger-container" ng-transclude="trigger" ng-click="$ctrl.toggle()"></div>
        <div class="content-container" ng-transclude="content" sc-accordion-animation="$ctrl.opened"></div>
    </li>
    `,
    transclude: {
        trigger: 'trigger',
        content: '?content'
    },
    bindings: {
        onOpen: '&',
        default: '<'
    },
    require: {
        parent: '^^scAccordion'
    },
    controller: ScAccordionItemCtrl
};

export default ScAccordionItemComponent;