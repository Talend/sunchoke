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
 * @name talend.sunchoke.dropdown.controller:TalendDropdownCtrl
 * @description Dropdown controller
 */
export default class TalendDropdownCtrl {
    constructor($element, $document, $timeout) {
        'ngInject';

        this.$element = $element;
        this.$timeout = $timeout;

        this.body = angular.element($document[0].body);
        this.visible = false;

        this._escHideContent = this._escHideContent.bind(this);
        this._hideContent = this._hideContent.bind(this);
        this._showContent = this._showContent.bind(this);
    }

    $postLink() {
        this.content = this.$element.children().eq(1);
        this.content.on('mousedown', (e) => e.stopPropagation());
    }

    $onDestroy () {
        this._removeListeners();
    }

    _attachListeners() {
        this.body.on('mousedown', this._hideContent);
        this.body.on('keydown', this._escHideContent);
    }

    _removeListeners() {
        this.body.off('mousedown', this._hideContent);
        this.body.off('keydown', this._escHideContent);
    }

    //------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------VISIBILITY----------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------

    _escHideContent(event) {
        if (event.keyCode === 27) {
            this._hideContent();
        }
    }

    _hideContent() {
        this.$timeout(() => this.visible = false);
        this._removeListeners();
    }

    _showContent() {
        this.visible = true;
        if (this.onOpen) {
            this.onOpen();
        }
        this._attachListeners();
    }

    onMenuClick() {
        if (this.closeOnSelect !== false) {
            this._hideContent();
        }
    }

    toggleMenu() {
        this.visible ? this._hideContent() : this._showContent();
    }

}