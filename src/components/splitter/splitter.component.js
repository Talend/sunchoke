/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScSplitterCtrl from './splitter.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.splitter.component:ScSplitterComponent
 * @restrict E
 * @description Slidable widget.
 * @restrict E
 * @usage
 *  <sc-splitter orientation="vertical" min-size="300">
 *      <sc-split-first-pane>
 *          My first pane
 *      </sc-split-first-pane>
 *      <sc-split-second-pane>
 *          My second pane
 *      </sc-split-second-pane>
 *  </talend-splitter>
 * @param {string} orientation The splitter orientation : horizontal | vertical
 * @param {number} minSize The panes min size
 */
const ScSplitterComponent = {
    template: `
    <div class="split-container {{::$ctrl.orientation}}">
        <div class="split-first-pane" ng-transclude="split-first-pane"></div>
        <div class="split-handler">
            <div class="split-handler-square"></div>
            <div class="split-handler-square"></div>
            <div class="split-handler-square"></div>
            <div class="split-handler-square"></div>
            <div class="split-handler-square"></div>
            <div class="split-handler-square"></div>
            <div class="split-handler-square"></div>
        </div>
        <div class="split-second-pane" ng-transclude="split-second-pane"></div>
    </div>`,
    bindings: {
        orientation: '@',
        minSize: '@'
    },
    transclude: {
        'split-first-pane': 'scSplitFirstPane',
        'split-second-pane': 'scSplitSecondPane'
    },
    controller: ScSplitterCtrl
};

export default ScSplitterComponent;