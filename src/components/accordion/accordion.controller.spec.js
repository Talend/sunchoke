describe('Accordion component controller', () => {
    let scope, createController;

    beforeEach(angular.mock.module('talend.sunchoke.accordion'));

    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();

        createController = () => {
            return $componentController('scAccordion', {$scope: scope});
        };
    }));

    describe('init', () => {
        it('should init accordions list', () => {
            //when
            const ctrl = createController();

            //then
            expect(ctrl.accordions).toEqual([]);
        });
    });

    describe('accordion item registration', () => {
        it('should register new accordion', () => {
            //given
            const ctrl = createController();
            expect(ctrl.accordions.length).toBe(0);

            const accordion1 = {opened: false, open: () => {}, close: () => {}};
            const accordion2 = {opened: false, open: () => {}, close: () => {}};

            //when
            ctrl.register(accordion1);
            ctrl.register(accordion2);

            //then
            expect(ctrl.accordions.indexOf(accordion1)).toBe(0);
            expect(ctrl.accordions.indexOf(accordion2)).toBe(1);
        });

        it('should unregister new accordion', () => {
            //given
            const ctrl = createController();

            const accordion1 = {opened: false, open: () => {}, close: () => {}};
            const accordion2 = {opened: false, open: () => {}, close: () => {}};
            const accordion3 = {opened: false, open: () => {}, close: () => {}};
            ctrl.accordions = [accordion1, accordion2, accordion3];

            //when
            ctrl.unregister(accordion2);

            //then
            expect(ctrl.accordions.indexOf(accordion1)).toBe(0);
            expect(ctrl.accordions.indexOf(accordion2)).toBe(-1);
            expect(ctrl.accordions.indexOf(accordion3)).toBe(1);
        });
    });

    describe('accordion item toggle', () => {
        it('should close all other items', () => {
            //given
            const ctrl = createController();

            const accordion1 = {opened: false, open: jasmine.createSpy('open-accordion-1'), close: jasmine.createSpy('close-accordion-1')};
            const accordion2 = {opened: false, open: jasmine.createSpy('open-accordion-2'), close: jasmine.createSpy('close-accordion-2')};
            const accordion3 = {opened: false, open: jasmine.createSpy('open-accordion-3'), close: jasmine.createSpy('close-accordion-3')};
            ctrl.accordions = [accordion1, accordion2, accordion3];

            //when
            ctrl.toggle(accordion2);

            //then
            expect(accordion1.close).toHaveBeenCalled();
            expect(accordion3.close).toHaveBeenCalled();
        });

        it('should open the item when it is closed', () => {
            //given
            const ctrl = createController();

            const accordion1 = {opened: false, open: jasmine.createSpy('open-accordion-1'), close: jasmine.createSpy('close-accordion-1')};
            const accordion2 = {opened: false, open: jasmine.createSpy('open-accordion-2'), close: jasmine.createSpy('close-accordion-2')};
            const accordion3 = {opened: false, open: jasmine.createSpy('open-accordion-3'), close: jasmine.createSpy('close-accordion-3')};
            ctrl.accordions = [accordion1, accordion2, accordion3];

            //when
            ctrl.toggle(accordion2);

            //then
            expect(accordion2.open).toHaveBeenCalled();
        });

        it('should close the item when it is opened', () => {
            //given
            const ctrl = createController();

            const accordion1 = {opened: false, open: jasmine.createSpy('open-accordion-1'), close: jasmine.createSpy('close-accordion-1')};
            const accordion2 = {opened: true, open: jasmine.createSpy('open-accordion-2'), close: jasmine.createSpy('close-accordion-2')};
            const accordion3 = {opened: false, open: jasmine.createSpy('open-accordion-3'), close: jasmine.createSpy('close-accordion-3')};
            ctrl.accordions = [accordion1, accordion2, accordion3];

            //when
            ctrl.toggle(accordion2);

            //then
            expect(accordion2.close).toHaveBeenCalled();
            expect(accordion2.open).not.toHaveBeenCalled();
        });
    });
});