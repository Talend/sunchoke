/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import ScListEditorCtrl from './list-editor.controller.js';

/**
 * @ngdoc component
 * @name talend.sunchoke.list-editor.component:ScListEditorComponent
 * @description List editor
 * @restrict E
 * @usage
 * <sc-list-editor delete-handler="deleteHandler()"
                   groups="groups"
                   ng-model="ngModel"
                   placeholder="placeholderText"
                   title="defaultTitle"
                   title-placeholder="TitleInputPlaceholder"
                   title-editable="true/false"
                   removable="true/false">
    </sc-list-editor>
 *
 * @param {function} delete-handler Function called when trash button is pressed
 * @param {array} groups list of item's groups
 * @param {array} ng-model List of selected's id
 * @param {String} title default title of the list editor
 * @param {String} title-placeholder title's input placeholder
 * @param {Boolean} title-editable allow to edit the title or not
 * @param {Boolean} removable allow to remove the show the trash icon
 */
const ScListEditorComponent = {
  template: `
            <div class="list-editor">
                <div class="title-box">
                    <span class="title" ng-bind="$ctrl.title" ng-if="!$ctrl.editMode"></span>
                    <input pu-elastic-input class="edit-title" placeholder="{{$ctrl.titlePlaceholder}}"
                           ng-model="$ctrl.editTitle" ng-if="$ctrl.editMode"
                           ng-blur="$ctrl.validateEditon()" ng-keydown="$ctrl.editModeKeyPressed($event)">
                    <span class="edit-button" ng-attr-title="{{$ctrl.editButtonTitle}}" ng-if="!$ctrl.editMode && $ctrl.titleEditable !== false" ng-click="$ctrl.activateEdition()"></span>
                    <span class="validate-button" ng-attr-title="{{$ctrl.validateButtonTitle}}" ng-if="$ctrl.editMode"></span>
                    <span class="delete-button" ng-attr-title="{{$ctrl.deleteButtonTitle}}" ng-if="$ctrl.removable !== false" ng-click="$ctrl.deleteHandler()"></span>
                </div>
                <div class="choices-box">
                  <span class="search-field">
                    <span class="plus-icon"></span>
                    <input type="text" placeholder="{{$ctrl.placeholder}}"
                            ng-model="$ctrl.filter.label"
                            ng-disabled="!$ctrl.groups"
                            ng-keydown="$ctrl.onFilterKeyDown($event)"
                            ng-click="$ctrl.showAutocompleteBox = true"
                            ng-focus="$ctrl.showAutocompleteBox = true"
                            ng-blur="$ctrl.showAutocompleteBox = false">
                    <div class="white-border" ng-if="$ctrl.showAutocompleteBox === true"></div>
                    <div class="auto-complete-box" ng-if="$ctrl.showAutocompleteBox === true">
                        <div class="group" ng-repeat="group in $ctrl.groups">
                            <div class="item" ng-repeat="item in group.items|filter:$ctrl.filter:strict"
                                ng-class="{'disabled':$ctrl.selectedIds.indexOf(item.id) !== -1}"
                                ng-mousedown="$ctrl.selectItem($event, item)">
                             <span class="icon" ng-if="::group.icon" ng-include="::group.icon"></span>
                             <span class="text" ng-bind="::item.label"></span>
                            </div>
                        </div>
                    </div>
                  </span>
                  <span class="badges">
                    <span class="list-editor-badge" ng-style="$ctrl.getBadgeStyle(badgeId)" ng-repeat="badgeId in $ctrl.selectedIds">
                      <span class="icon" ng-include="$ctrl.getBadgeIcon(badgeId)"></span>
                      <span class="text" ng-bind="::$ctrl.getLabelById(badgeId)"></span>
                      <span class="remove-button" ng-click="$ctrl.removeSelectedItem(badgeId)">
                        <svg width="9px" height="9px" viewBox="400 68 9 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="cross" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(402.000000, 70.000000)" stroke-linecap="square">
                                <path d="M0,0 L5,5" id="line2" stroke-width="2"></path>
                                <path d="M5,0 L0,5" id="line1" stroke-width="2"></path>
                            </g>
                        </svg>
                      </span>
                    </span>
                  </span>
                </div>
            </div>
    `,
  bindings: {
    deleteHandler: "&",
    deleteButtonTitle:"<",
    editButtonTitle: "<",
    groups: "<",
    groupOrder: "<",
    ngModel: "=",
    placeholder: "<",
    removable: "<",
    title: "<",
    titlePlaceholder: "<",
    titleEditable: "<",
    validateButtonTitle:"<"
  },
  controller: ScListEditorCtrl
};

export default ScListEditorComponent;