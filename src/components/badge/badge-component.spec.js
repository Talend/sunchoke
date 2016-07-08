describe('Talend Badge Component', () => {

    let scope, createElement, element;

    beforeEach(angular.mock.module('talend.sunchoke.badge'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        scope.onRemove = jasmine.createSpy('onRemove');
        scope.removable = false;

        createElement = () => {
            const template = `<sc-talend-badge removable="removable" on-remove="onRemove()" ></sc-talend-badge>`;
            element = $compile(template)(scope);
            scope.$digest();
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });


    describe('not removable', () => {
        it('should not render a close button', () => {
            //given
            createElement();

            //then
            expect(element.find('.badge-btn-close').length).toBe(0);
        });
    });

    describe('removable', () => {
        beforeEach(() => {
            scope.removable = true;
        });

        it('should render a close button', () => {
            //given
            createElement();

            //then
            expect(element.find('.badge-btn-close').length).toBe(1);
        });

        it('should call onRemove method when badge close button is clicked', () => {
            //given
            createElement();

            //when
            element.find('.badge-btn-close').eq(0).click();

            //then
            expect(scope.onRemove).toHaveBeenCalled();
        });
    });
});