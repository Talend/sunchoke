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
 * @name talend.sunchoke.slidable.controller:ScSlidableCtrl
 * @description Slidable controller
 */
export default class ScSlidableCtrl {
    constructor($window, $element) {
        'ngInject';

        this.$element = $element;
        this.$window = $window;
        this.window = angular.element($window);
    }

    $onInit() {
        this.actionCssClass = this.side;
        this.drag = false;

        //manage visibility based on localStorage
        if (this.visibleStateKey) {
            const visibleState = this.$window.localStorage.getItem(this.visibleStateKey);
            if (visibleState) {
                this.visible = JSON.parse(visibleState);
            }
        }

        //manage resize on panel based on localStorage
        if (this.resizableKey) {
            const width = this.$window.localStorage.getItem(this.resizableKey);
            if (width && this.visible) {
                this.$element.css('flex', '0 0 ' + width + "px");
            }
            this.attachListeners();
        }
    }

    attachListeners() {
        let resizedWidth;
        this.startDrag = () => {
            this.drag = true
        };
        this.stopDrag = () => {
            if (this.drag) {
                //let width = event.clientX + 'px';
                this.$window.localStorage.setItem(this.resizableKey, resizedWidth);
            }
            this.drag = false
        };

        this.onMouseMove = (event) => {
            if (!this.drag || !this.visible) {
                return;
            }
            event.preventDefault();
            resizedWidth = event.clientX;
            if (this.side === 'right') {
                resizedWidth = this.window[0].innerWidth - resizedWidth;
            }
            this.$element.css('flex', '0 0' + resizedWidth + 'px');
        }

        //retrieving resizeBar to add mouse down
        this.resizeBar = angular.element(this.$element[0].querySelector('.resize-bar'));

        //add events
        this.resizeBar.on('mousedown', this.startDrag);
        this.window.on('mouseup', this.stopDrag);
        this.window.on('mousemove', this.onMouseMove);
    }

    toggle() {
        this.visible = !this.visible;
        //in case of resize we need to resize back the slidable when hiding it
        if (!this.visible) {
            this.$element.css('flex', '0 0 0px');
        } else {
            //else retrieve from the localstorage
            const width = this.$window.localStorage.getItem(this.resizableKey);
            if (width) {
                this.$element.css('flex', '0 0 ' + width + "px");
            }
        }

        //set visibility in local storage
        if (this.visibleStateKey) {
            this.$window.localStorage.setItem(this.visibleStateKey, this.visible);
        }
    }

    $onDestroy() {
        //unbind event
        if (this.resizableKey) {
            this.window.off('mouseup', this.stopDrag);
            this.window.off('mousemove', this.onMouseMove);
            this.resizeBar.off('mousemove', this.startDrag);
        }
    }
}