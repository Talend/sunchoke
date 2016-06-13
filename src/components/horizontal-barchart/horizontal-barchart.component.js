/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScHorizontalBarchartCtrl from './horizontal-barchart.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.horizontal-barchart.component:ScHorizontalBarchartComponent
 * @description Horizontal barchart
 * @restrict E
 * @usage <sc-horizontal-barchart></sc-horizontal-barchart> //TODO add component usage doc
 * @param {type} name Description //TODO add component bindings doc
 */
const ScHorizontalBarchartComponent = {
    bindings: {
        onClick: '&',
        keyField: '@',
        keyLabel: '@',
        primaryData: '<',
        primaryValueField: '@',
        primaryBarClass: '@',
        secondaryData: '<',
        secondaryValueField: '@',
        secondaryBarClass: '@',
        tooltipContent: '&'
    },
    controller: ScHorizontalBarchartCtrl
};

export default ScHorizontalBarchartComponent;