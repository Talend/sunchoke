/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScSlidableCtrl from './slidable.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.slidable.component:ScSlidableComponent
 * @description Slidable
 * @restrict E
 * @usage <sc-slidable></sc-slidable>
 * @param {boolean} visible Controle the slidable visibility
 * @param {string} side `left` (default) | right.
 *                  This defines the action bar and the resize bar position
 * @param {string} resizableKey Pass unique ID that will be used to store custom size in storage
*                  (key = {data-prep-' + resizable_namespace + '-width}).<br/>
 * @param {string} controlBar If 'false', the action bar will not been displayed.<br/>
 * @param {string} visibleStateKey Pass unique ID that will be used to store visibility in storage
*                  (key = {data-prep-' + visibility_namespace}).<br/>
 * Resize feature is disabled by default and enabled if the attribute si set
 */
const ScSlidableComponent = {
    template: `
    <div class="slidable flex-side"
         ng-class="{'slide-left': $ctrl.side === 'left',
                'slide-right': $ctrl.side === 'right',
                'slide-top': $ctrl.side === 'top',
                'slide-bottom': $ctrl.side === 'bottom' ,
                'slide-hide': !$ctrl.visible }">
        <div class="content">
            <div class="content-container">
                <ng-transclude class="fixed-content"></ng-transclude>
            </div>
        </div>
        <div class="action {{::$ctrl.side}}"
             ng-if="$ctrl.controlBar"
             ng-click="$ctrl.toggle()" ng-switch="::($ctrl.side)">
            <span ng-switch-when="left">
                <span ng-show="$ctrl.visible">&#8249;</span>
                <span ng-show="!$ctrl.visible">&#8250;</span>
            </span>
            <span ng-switch-when="right">
                <span ng-show="$ctrl.visible">&#8250;</span>
                <span ng-show="!$ctrl.visible">&#8249;</span>
            </span>
        </div>
        <div class="resize-bar" ng-show="::($ctrl.resizableKey)"
             ng-class="::{
                'resize-left': $ctrl.side === 'left',
                'resize-right': $ctrl.side === 'right'}
        ">
        </div>

    </div>`,
    bindings: {
        side: '@',
        visible: '=',
        resizableKey: '@',
        visibleStateKey: '@',
        controlBar: '<',
    },
    transclude: true,
    controller: ScSlidableCtrl,
};

export default ScSlidableComponent;
