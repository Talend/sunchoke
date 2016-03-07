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
 * @name talend.sunchoke.splitter.controller:ScSplitterCtrl
 * @description Splitter controller
 */
export default class ScSplitterCtrl {
    constructor($scope, $element, $window) {
        'ngInject';
        this.drag = false;
        this.$element = $element;
        this.windowElement = angular.element($window);
        this.$scope = $scope;
    }

    $onInit() {
        this.initElements();
        this.attachListeners();
    }

    initElements() {
        this.minSize = +this.minSize || 256;
        this.splitContainer = this.$element[0].querySelector('.split-container');
        this.firstPane = angular.element(this.$element[0].querySelector('.split-first-pane'));
        this.splitHandler = angular.element(this.$element[0].querySelector('.split-handler'));
        this.secondPane = angular.element(this.$element[0].querySelector('.split-second-pane'));
    }

    attachListeners() {
        this.$element.on('mousemove', (event) => {
            if (!this.drag) {
                return;
            }
            event.preventDefault();
            this.updateSize(event);
        });

        this.splitHandler.on('mousedown', () => this.drag = true);

        const onmouseup = () => this.drag = false;
        this.windowElement.on('mouseup', onmouseup);

        this.$scope.$on('$destroy', () => this.windowElement.off('mouseup', onmouseup));
    }

    updateSize(event) {
        const bounds = this.splitContainer.getBoundingClientRect();

        if (this.orientation === 'vertical') {
            this.splitHandlerSize = this.splitHandlerSize || this.splitHandler[0].offsetHeight;
            const pos = event.clientY - bounds.top - this.splitHandlerSize / 2;

            if (pos < this.minSize || pos > bounds.height - this.minSize) {
                return;
            }

            this.firstPane.css('bottom', (bounds.height - pos) + 'px');
            this.splitHandler.css('top', pos + 'px');
            this.secondPane.css('top', (pos + this.splitHandlerSize) + 'px');
        }
        else {
            this.splitHandlerSize = this.splitHandlerSize || this.splitHandler[0].offsetWidth;
            const pos = event.clientX - bounds.left - this.splitHandlerSize / 2;

            if (pos < this.minSize || pos > bounds.width - this.minSize) {
                return;
            }

            this.firstPane.css('right', (bounds.width - pos) + 'px');
            this.splitHandler.css('left', pos + 'px');
            this.secondPane.css('left', (pos + this.splitHandlerSize) + 'px');
        }
    }
}