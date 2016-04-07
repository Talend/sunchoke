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
 * @name talend.sunchoke.splitter.controller:ScDropdownCtrl
 * @description Dropdown controller
 */
export default class ScDropdownCtrl {
    constructor($scope, $element, $window, $timeout, $document) {
        'ngInject';

        this.CARRET_HEIGHT = 5;
        this.$element = $element;
        this.$scope = $scope;
        this.windowElement = angular.element($window);
        this.$timeout = $timeout;
        this.$document = $document;
    }

    $onInit() {
        this.hideMenu = this.hideMenu.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.positionMenu = this.positionMenu.bind(this);

        this.initElements();
        this.attachListeners();
    }

    $onDestroy () {
        this.body.off('mousedown', this.hideMenu);
        this.windowElement.off('scroll', this.positionMenu);
    }

    initElements() {
        this.body = this.$document.find('body').eq(0);
        this.container = angular.element(this.$element[0].querySelector('.sc-dropdown-container'));
        this.action = angular.element(this.$element[0].querySelector('.sc-dropdown-action'));
        this.menu = angular.element(this.$element[0].querySelector('.sc-dropdown-menu'));
        this.button = angular.element(this.$element[0].querySelector('.sc-dropdown-action-button'));
    }

    attachListeners() {
        //Mousedown : stop propagation not to hide dropdown
        this.menu.on('mousedown', (event) => {
            event.stopPropagation();
        });

        //ESC keydown : hide menu, set focus on dropdown action and stop propagation
        this.menu.on('keydown', (event) => {
            if (event.keyCode === 27) {
                this.hideMenu();
                event.stopPropagation();
                this.setFocusOn(this.action);
            }
        });

        //make action and menu focusable
        this.action.attr('tabindex', '1');
        this.menu.attr('tabindex', '2');

        //hide menu on body mousedown
        this.body.on('mousedown' ,this.hideMenu);
    }

    onMenuClick(event) {
        event.stopPropagation();
        if (this.closeOnSelect !== false) {
            this.hideMenu();
        }
    }

    //Set the focus on a specific element
    setFocusOn(element) {
        this.$timeout(() => {
            element[0].focus();
        }, 100, false);
    }

    //Hide every dropdown in the page
    hideAllDropDowns() {
        this.body.find('.sc-dropdown-menu').removeClass('show-menu');
    }

    //Hide current dropdown menu
    hideMenu() {
        this.menu.removeClass('show-menu');
        this.windowElement.off('scroll', this.positionMenu);
    }

    //Show current dropdown menu and set focus on it
    showMenu() {
        this.menu.addClass('show-menu');
        this.positionMenu();
        this.onOpen();
        this.windowElement.on('scroll', this.positionMenu);
        this.setFocusOn(this.menu);
    }

    positionMenu() {
        this.positionHorizontalMenu();
        this.positionVerticalMenu();
    }

    alignMenuRight(position) {
        this.menu.addClass('right');
        this.menu.css('right', '' + (this.windowElement[0].innerWidth  - position.right) + 'px');
        this.menu.css('left', 'auto');
    }

    alignMenuLeft(position) {
        this.menu.removeClass('right');
        this.menu.css('left', '' + position.left + 'px');
        this.menu.css('right', 'auto');
    }

    //Move the menu to the left if its left part is out of the window
    //Otherwise it is put to the right
    //if a side is forced by input, the position follows
    positionHorizontalMenu() {
        const position = this.button[0].getBoundingClientRect();
        switch (this.side) {
            case 'left':
                this.alignMenuLeft(position);
                break;
            case 'right':
                this.alignMenuRight(position);
                break;
            default:
                this.alignMenuRight(position);
                const menuPosition = this.menu[0].getBoundingClientRect();
                if (menuPosition.left < 0) {
                    this.alignMenuLeft(position);
                }
        }
    }

    //Move the menu to the top if its bottom is not visible (out of the window)
    //Otherwise it is put at the bottom of trigger button
    positionVerticalMenu() {
        const positionContainer = this.container[0].getBoundingClientRect();
        const positionMenu = this.menu[0].getBoundingClientRect();
        const positionAction = this.action[0].getBoundingClientRect();
        let menuTopPosition = positionAction.bottom + this.CARRET_HEIGHT;

        //when menu bottom is outside of the window, we position the menu at the top of the button
        if ((positionAction.bottom +  positionMenu.height + this.CARRET_HEIGHT)> this.windowElement[0].innerHeight) {
            menuTopPosition = positionContainer.top - this.CARRET_HEIGHT - positionMenu.height;
            this.menu.addClass('top');
        }
        else {
            this.menu.removeClass('top');
        }
        this.menu.css('top', '' + menuTopPosition + 'px');
    }

    toggleMenu() {
        const isVisible = this.menu.hasClass('show-menu');
        this.hideAllDropDowns();
        if (isVisible) {
            this.hideMenu();
        }
        else {
            this.showMenu();
        }
    }
}