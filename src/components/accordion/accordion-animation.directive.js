/**
 * @ngdoc directive
 * @name talend.sunchoke.accordion.directive:ScAccordionAnimation
 * @description Accordion animation on open/close
 * @restrict A
 * @usage
 <talend-accordion-item sc-accordion-animation="isOpened">
     <trigger></trigger>
     <content></content>
 </talend-accordion-item>
 * @param {boolean} isOpened The flag that will trigger the slideUp/slideDown on change
 */
export default ($animate) => {
    'ngInject';
    return {
        restrict: 'A',
        link: (scope, element, attrs) => {
            function open() {
                $animate.addClass(element, 'opening', {
                        to: { height: element[0].scrollHeight + 'px' }
                    })
                    .then(() => element.removeClass('opening').addClass('open').css('height', ''));
            }

            function close() {
                $animate.addClass(element, 'closing', {
                        from: { height: element[0].scrollHeight + 'px' },
                        to: { height: '0' }
                    })
                    .then(() => element.removeClass('closing').removeClass('open'));
            }

            scope.$watch(attrs.scAccordionAnimation, (isOpened) => {
                if(isOpened) {
                    open();
                }
                else {
                    close();
                }
            })
        }
    };
}