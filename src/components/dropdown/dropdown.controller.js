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
        if (!this.distanceFromBorder || isNaN(this.distanceFromBorder)) {
            this.offsetBorder = 0;
        }
        else {
            this.offsetBorder = parseInt(this.distanceFromBorder);
        }
    }

    $postLink() {
        this.trigger = this.$element.children().eq(0);
        this.content = this.$element.children().eq(1);
        this.content.on('mousedown', (e) => e.stopPropagation());

        if (this.visibleOnInit && this.visibleOnInit === true) {
            //time out needed cause we need to wait for caller to be initialized
            this.$timeout(()=> {
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
        this.content.css('right', '' + (this.window[0].innerWidth - position.right) + 'px');
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
            default:
            {
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
        const positionContent = this.content[0].getBoundingClientRect();
        const windowSize = this.window[0].innerHeight;

        //display the menu where there is most space top or bottom
        const freeSpaceBottom = windowSize - positionAction.bottom - this.offsetBorder;
        const freeSpaceTop = positionContent.top - this.offsetBorder;
        const heightContent = positionContent.height;

        //display menu at the bottom
        if (freeSpaceBottom > freeSpaceTop) {
            //scrollbar needed?
            if (positionContent.top + heightContent + this.offsetBorder >= windowSize) {
                const newContentSize = heightContent - ((positionContent.top + heightContent + this.offsetBorder) - windowSize );
                this.content.children().css('height', newContentSize + 'px');
            }
            this.content.removeClass('top');
        }
        //display menu at the top
        else {
            //scrollbar needed?
            if (heightContent + this.offsetBorder > positionAction.top) {
                const newContentSize = positionAction.top - this.offsetBorder - CARRET_HEIGHT;
                this.content.children().css('height', newContentSize + 'px');
                //display menu at top with offset supplied
                this.content.css('top', this.offsetBorder);
            }
            else {
                this.content.css('top', positionAction.top + 'px');
            }
            this.content.addClass('top');
        }
    }

    _positionContent() {
        this._positionHorizontalMenu();
        this._positionVerticalMenu();
    }

    _resetPositionContent() {
        this.content.children().css('height', "auto");
        this.content.css('top', 'auto');
        this.content.css('left', 'auto');
        this.content.css('right', 'auto');
    }
}