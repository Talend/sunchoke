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
    constructor($window, $element, $document, $timeout) {
        'ngInject';

        this.$element = $element;
        this.$timeout = $timeout;

        this.body = angular.element($document[0].body);
        this.window = angular.element($window);

        this._escHideContent = this._escHideContent.bind(this);
        this._hideContent = this._hideContent.bind(this);
        this._showContent = this._showContent.bind(this);
        this._positionContent = this._positionContent.bind(this);
    }

    $onInit() {
        this.offsetBorder = isNaN(this.distanceFromBorder) ?
            0 :
            parseInt(this.distanceFromBorder, 10);
    }

    $postLink() {
        this.trigger = this.$element.children().eq(0);
        this.content = this.$element.children().eq(1);
        this.content.on('mousedown', (e) => e.stopPropagation());

        if (this.visibleOnInit) {
            // time out needed cause we need to wait for caller to be initialized
            this.$timeout(() => {
                this._showContent();
            });
        }
    }

    $onDestroy() {
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

    // --------------------------------------------------------------------------------------------
    // -------------------------------------------VISIBILITY---------------------------------------
    // --------------------------------------------------------------------------------------------

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
        if (this.visible) {
            this._hideContent();
        }
        else {
            this._showContent();
        }
    }

    // --------------------------------------------------------------------------------------------
    // ----------------------------------------POSITION--------------------------------------------
    // --------------------------------------------------------------------------------------------

    _alignMenuRight(position) {
        this.content.addClass('right');
        this.content.css('right', `${this.window[0].innerWidth - position.right}px`);
        this.content.css('left', 'auto');
    }

    _alignMenuLeft(position) {
        this.content.removeClass('right');
        this.content.css('left', `${position.left}px`);
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
        const triggerPosition = this.trigger[0].getBoundingClientRect();
        const contentPosition = this.content[0].getBoundingClientRect();
        const windowHeight = this.window[0].innerHeight;

        let freeSpace;
        let contentTopPosition;

        // calculate free spaces on top/bottom of the trigger
        const offset = this.offsetBorder + CARRET_HEIGHT;
        const topFreeSpace = triggerPosition.top - offset;
        const bottomFreeSpace = windowHeight - triggerPosition.bottom - offset;
        const contentHeight = contentPosition.height;

        // display menu at the bottom
        // if there is enough space or more space than top
        if (contentHeight < bottomFreeSpace || bottomFreeSpace > topFreeSpace) {
            contentTopPosition = triggerPosition.bottom + CARRET_HEIGHT;
            freeSpace = bottomFreeSpace;
            this.content.removeClass('top');
        }

        // display menu at the top
        // if there is not enough space at the bottom and more space on top
        else {
            contentTopPosition = triggerPosition.top - CARRET_HEIGHT - contentHeight;
            if (contentTopPosition < this.offsetBorder) {
                contentTopPosition = this.offsetBorder;
            }
            freeSpace = topFreeSpace;
            this.content.addClass('top');
        }

        // scrollbar needed
        // if the content is bigger than the available free space
        if (contentHeight > freeSpace) {
            this.content.children().css('height', `${freeSpace}px`);
        }

        this.content.css('top', `${contentTopPosition}px`);
    }

    _positionContent() {
        this._positionHorizontalMenu();
        this._positionVerticalMenu();
    }

    _resetPositionContent() {
        this.content.children().css('height', '');
        this.content.css('top', 'auto');
        this.content.css('left', 'auto');
        this.content.css('right', 'auto');
    }
}
