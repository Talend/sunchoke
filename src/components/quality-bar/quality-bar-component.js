/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import ScQualityBarCtrl from './quality-bar-controller.js';

const QualityBarComponent = {
    template: `

<div class="quality-bar" ng-if="$ctrl.hasMenu">
    <div ng-if="$ctrl.isTrusted">
        <div talend-dropdown
             class="valid-partition"
             ng-style="{width: $ctrl.width.valid + '%'}"
             ng-class="{'no-transition' : $ctrl.blockTransition}"
             ng-show="$ctrl.quality.valid > 0"
             title="{{ $ctrl.quality.valid }} {{::'VALID_RECORDS'}} ({{ $ctrl.percent.valid }}%)">
                <div class="dropdown-container">
                    <div class="dropdown-action quality-bar-action"></div>
                    <ul class="dropdown-menu dropdown-menu-small-top quality-bar-menu" ng-transclude="valid-quality-bar-menu" role="menu">
                    </ul>
                </div>
        </div>

        <div talend-dropdown
             class="empty-partition"
             ng-style="{width: $ctrl.width.empty + '%'}"
             ng-class="{'no-transition' : $ctrl.blockTransition}"
             ng-show="$ctrl.quality.empty > 0"
             title="{{ $ctrl.quality.empty }} {{::'EMPTY_RECORDS'}} ({{ $ctrl.percent.empty }}%)">
                <div class="dropdown-container">
                    <div class="dropdown-action quality-bar-action"></div>
                    <ul class="dropdown-menu dropdown-menu-small-top quality-bar-menu" ng-transclude="empty-quality-bar-menu" role="menu">
                    </ul>
                </div>
        </div>

        <div talend-dropdown
             class="invalid-partition"
             ng-style="{width: $ctrl.width.invalid + '%'}"
             ng-class="{'no-transition' : $ctrl.blockTransition}"
             ng-show="$ctrl.quality.invalid > 0"
             title="{{ $ctrl.quality.invalid }} {{::'INVALID_RECORDS'}} ({{ $ctrl.percent.invalid }}%)">
                <div class="dropdown-container">
                    <div class="dropdown-action quality-bar-action"></div>
                    <ul class="dropdown-menu dropdown-menu-small-top quality-bar-menu" ng-transclude="invalid-quality-bar-menu" role="menu">
                    </ul>
                </div>
        </div>
    </div>
</div>

<div class="quality-bar" ng-if="!$ctrl.hasMenu">
    <div ng-if="$ctrl.isTrusted">
        <div class="valid-partition"
             ng-style="{width: $ctrl.width.valid + '%'}"
             ng-class="{'no-transition' : $ctrl.blockTransition}"
             ng-show="$ctrl.quality.valid > 0"
             title="{{ $ctrl.quality.valid }} {{$ctrl.callTranslate('VALID_RECORDS')}} ({{ $ctrl.percent.valid }}%)"
             ng-click="$ctrl.applyValidFilter()">
        </div>

        <div class="empty-partition"
             ng-style="{width: $ctrl.width.empty + '%'}"
             ng-class="{'no-transition' : $ctrl.blockTransition}"
             ng-show="$ctrl.quality.empty > 0"
             title="{{ $ctrl.quality.empty }} {{$ctrl.callTranslate('EMPTY_RECORDS')}} ({{ $ctrl.percent.empty }}%)"
             ng-click="$ctrl.applyEmptyFilter()">
        </div>

        <div class="invalid-partition"
             ng-style="{width: $ctrl.width.invalid + '%'}"
             ng-class="{'no-transition' : $ctrl.blockTransition}"
             ng-show="$ctrl.quality.invalid > 0"
             title="{{ $ctrl.quality.invalid }} {{$ctrl.callTranslate('INVALID_RECORDS')}} ({{ $ctrl.percent.invalid }}%)"
             ng-click="$ctrl.applyInvalidFilter()">
        </div>
    </div>
</div>
<ng-transclude></ng-transclude>
`,
    bindings: {
        enterAnimation: '@',
        quality: '<',
        isTrusted: '<',
        hasMenu: '<',
        translateFn: '&',
        applyValidFilter: '&',
        applyInvalidFilter: '&',
        applyEmptyFilter: '&'
    },
    controller: ScQualityBarCtrl,
    transclude: {
        'valid-quality-bar-menu': '?validMenuItems',
        'empty-quality-bar-menu': '?emptyMenuItems',
        'invalid-quality-bar-menu': '?invalidMenuItems'
    }
};

export default QualityBarComponent;


