/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

const CARRET_HEIGHT = 5;
const VISIBILITY_CLASS = 'show';
const CLOSE_CLASS = 'sc-dropdown-close';

/**
 * @ngdoc controller
 * @name talend.sunchoke.dropdown.controller:ScDropdownCtrl
 * @description Dropdown controller
 */
export default class ScDropdownCtrl {
    constructor($window, $element, $timeout, $document) {
        'ngInject';

        this.$element = $element;
        this.$timeout = $timeout;

        this.body = angular.element($document[0].body);
        this.window = angular.element($window);
        this.visible = false;

        this._escHideContent = this._escHideContent.bind(this);
        this._hideContent = this._hideContent.bind(this);
        this._showContent = this._showContent.bind(this);
        this._positionContent = this._positionContent.bind(this);
    }

    $postLink() {
        this.trigger = this.$element.children().eq(0);
        this.content = this.$element.children().eq(1);
        this.content.on('mousedown', (e) => e.stopPropagation());
    }

    $onDestroy () {
        this._removeListeners();
    }

    _attachListeners() {
        this.body.on('mousedown', this._hideContent);
        this.body.on('keydown', this._escHideContent);
        this.window.on('resize', this._hideContent);
        this.window.on('scroll', this._positionContent);
    }

    _removeListeners() {
        this.body.off('mousedown', this._hideContent);
        this.body.off('keydown', this._escHideContent);
        this.window.off('resize', this._hideContent);
        this.window.off('scroll', this._positionContent);
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
        this.visible = false;
        this.$element.removeClass(VISIBILITY_CLASS);
        this._resetPositionContent();
        this._removeListeners();
    }

    _showContent() {
        this.visible = true;
        this.onOpen();
        this.$element.addClass(VISIBILITY_CLASS);
        this._positionContent();
        this._attachListeners();
    }

    onMenuClick(event) {
        if (this.closeOnSelect !== false || event.target.classList.contains(CLOSE_CLASS)) {
            this._hideContent();
        }
    }

    toggleMenu() {
        this.visible ? this._hideContent() : this._showContent();
    }

    //------------------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------POSITION-----------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------

    _alignMenuRight(position) {
        this.content.addClass('right');
        this.content.css('right', '' + (this.window[0].innerWidth  - position.right) + 'px');
        this.content.css('left', 'auto');
    }

    _alignMenuLeft(position) {
        this.content.removeClass('right');
        this.content.css('left', '' + position.left + 'px');
        this.content.css('right', 'auto');
    }

    _positionHorizontalMenu() {
        const position = this.$element[0].getBoundingClientRect();
        switch (this.side) {
            case 'left':
                this._alignMenuLeft(position);
                break;
            case 'right':
                this._alignMenuRight(position);
                break;
            default: {
                this._alignMenuRight(position);
                const menuPosition = this.content[0].getBoundingClientRect();
                if (menuPosition.left < 0) {
                    this._alignMenuLeft(position);
                }
            }
        }
    }

    _positionVerticalMenu() {
        const positionAction = this.trigger[0].getBoundingClientRect();
        const positionMenu = this.content[0].getBoundingClientRect();
        let menuTopPosition = positionAction.bottom + CARRET_HEIGHT;

        //when menu bottom is outside of the window, we position the menu at the top of the button
        if ((positionAction.bottom +  positionMenu.height + CARRET_HEIGHT)> this.window[0].innerHeight) {
            menuTopPosition = positionAction.top - CARRET_HEIGHT - positionMenu.height;
            this.content.addClass('top');
        }
        else {
            this.content.removeClass('top');
        }
        this.content.css('top', menuTopPosition + 'px');
    }

    _positionContent() {
        this._positionHorizontalMenu();
        this._positionVerticalMenu();
    }

    _resetPositionContent() {
        this.content.css('top', 'auto');
        this.content.css('left', 'auto');
        this.content.css('right', 'auto');
    }
}