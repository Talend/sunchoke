/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

/**
 * @ngdoc controller
 * @name talend.sunchoke.dropdown-menu.controller:ScDropdownMenuCtrl
 * @description Dropdown menu controller
 */
export default class ScDropdownMenuCtrl {
    constructor($scope, $element, $document, $timeout) {
        'ngInject';

        this.$scope = $scope;
        this.$element = $element;
        this.$timeout = $timeout;
        this.bodyElement = angular.element($document[0].body);

        this._hideMenu = this._hideMenu.bind(this);

        this.visible = false;

        if (this.visibleOnInit && this.visibleOnInit === true) {
          this.visible = true;
        }
    }

    $onInit() {
        this.bodyElement.on('mousedown', this._hideMenu);
        this.$element.on('mousedown', (e) => e.stopPropagation());
    }

    $onDestroy() {
        this.bodyElement.off('mousedown', this._hideMenu);
    }

    toggleMenu() {
        this._callOnClose();
        this.visible = !this.visible;
    }

    _hideMenu() {
        this.$timeout(() => {
          this._callOnClose();
          this.visible = false;
        });
    }

    _callOnClose() {
      if (this.visible) {
        //send the event only when the dropdown is already expanded
        this.onClose();
      }
    }
}