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
    constructor($window, $element, $scope) {
        'ngInject';

        this.$element = $element;
        this.$window = $window;
        this.window = angular.element($window);
        this.$scope = $scope;
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
                this.$element.css('flex', '0 0 ' + width);
            }
            this.attachListeners();
        }
    }

    attachListeners() {
        const startDrag = () => { this.drag = true };
        const stopDrag = (event) => {
            if (this.drag) {
                const width = event.clientX + 'px';
                this.$window.localStorage.setItem(this.resizableKey, width);
            }
            this.drag = false
        };

        const onMouseMove = (event) => {
            if (!this.drag || !this.visible) {
                return;
            }
            event.preventDefault();
            let width = event.clientX;
            if (this.side === 'right') {
                width = this.window[0].innerWidth - width;
            }
            this.$element.css('flex', '0 0' + width + 'px');
        }

        //retrieving resizeBar to add mouse down
        const resizeBar =  angular.element(this.$element[0].querySelector('.resize-bar'));

        //add events
        resizeBar.on('mousedown', startDrag);
        this.window.on('mouseup', stopDrag);
        this.window.on('mousemove', onMouseMove);

        //unbind event
        this.$scope.$on('$destroy', () => this.window.off('mouseup', stopDrag));
        this.$scope.$on('$destroy', () => this.window.off('mousemove', onMouseMove));
        this.$scope.$on('$destroy', () => resizeBar.off('mousemove', startDrag));
    }

    toggle() {
        this.visible = ! this.visible;
        //in case of resize we need to resize back the slidable when hiding it
        if (!this.visible) {
            this.$element.css('flex', '0 0 20px');
        } else {
            //else retrieve from the localstorage
            const width = this.$window.localStorage.getItem(this.resizableKey);
            if (width) {
                this.$element.css('flex', '0 0 ' + width);
            }
        }

        //set visibility in local storage
        if (this.visibleStateKey) {
            this.$window.localStorage.setItem(this.visibleStateKey, this.visible);
        }
    }
}