/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import angular from 'angular';

import ScAccordionAnimation from './accordion-animation.directive';
import ScAccordionItemComponent from './accordion-item.component';
import ScAccordionComponent from './accordion.component';

const MODULE_NAME = 'talend.sunchoke.accordion';

/**
 * @ngdoc object
 * @name talend.sunchoke.accordion
 * @description Accordion widget
 */
angular.module(MODULE_NAME, ['ngAnimate'])
    .directive('scAccordionAnimation', ScAccordionAnimation)
    .component('scAccordionItem', ScAccordionItemComponent)
    .component('scAccordion', ScAccordionComponent);

export default MODULE_NAME;