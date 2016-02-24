/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScAccordionCtrl from './accordion.controller';

/**
 * @ngdoc component
 * @name talend.sunchoke.accordion.component:ScAccordion
 * @description Accordions component. This is paired with accordions item component.
 * @restrict E
 * @usage
 <sc-accordion>
     <sc-accordion-item on-open='fn' default='true'></sc-accordion-item>
     <sc-accordion-item></sc-accordion-item>
     <sc-accordion-item></sc-accordion-item>
 </sc-accordion>
 */
const ScAccordionComponent = {
    template: `<ul ng-transclude></ul>`,
    controller: ScAccordionCtrl,
    transclude: true
};

export default ScAccordionComponent;