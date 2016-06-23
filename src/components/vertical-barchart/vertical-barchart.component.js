/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScVerticalBarchartCtrl from './vertical-barchart.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.vertical-barchart.component:ScVerticalBarchartComponent
 * @description Vertical barchart
 * @restrict E
 * @usage <sc-vertical-barchart></sc-vertical-barchart> //TODO add component usage doc
 * @param {type} name Description //TODO add component bindings doc
 */
const ScVerticalBarchartComponent = {
    bindings: {
        onClick: '&',
        activeLimits: '<',
        keyField: '@',
        keyLabel: '@',
        primaryData: '<',
        primaryValueField: '@',
        primaryBarClass: '@',
        secondaryData: '<',
        secondaryValueField: '@',
        secondaryBarClass: '@',
        showXAxis: '<',
        tooltipContent: '&'
    },
    controller: ScVerticalBarchartCtrl
};

export default ScVerticalBarchartComponent;