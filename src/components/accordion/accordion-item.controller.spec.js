describe('Accordion item component controller', () => {
    let scope;
    let createController;

    // controller require/bindings
    let parent;
    let onOpen;
    let isDefaultItem;

    beforeEach(angular.mock.module('talend.sunchoke.accordion'));

    beforeEach(inject(($rootScope, $componentController) => {
        // init controller require/bindings
        parent = {
            register: jasmine.createSpy('parent register'),
            unregister: jasmine.createSpy('parent unregister'),
            toggle: jasmine.createSpy('parent toggle'),
        };
        onOpen = jasmine.createSpy('on open');
        isDefaultItem = false;

        // init scope and controller creation
        scope = $rootScope.$new();
        createController = () => $componentController(
            'scAccordionItem',
            { $scope: scope },
            { parent, onOpen, default: isDefaultItem }
        );
    }));

    describe('init', () => {
        it('should init "opened" flag', () => {
            // given
            const ctrl = createController();

            // when
            ctrl.$onInit();

            // then
            expect(ctrl.opened).toBe(false);
        });

        it('should register itself to its accordion parent', () => {
            // given
            const ctrl = createController();

            // when
            ctrl.$onInit();

            // then
            expect(parent.register).toHaveBeenCalledWith(ctrl);
        });

        it('should NOT toggle when it is NOT the default item', () => {
            // when
            isDefaultItem = false;
            const ctrl = createController();
            ctrl.$onInit();

            // then
            expect(parent.toggle).not.toHaveBeenCalled();
        });

        it('should toggle when it is the default item', () => {
            // when
            isDefaultItem = true;
            const ctrl = createController();
            ctrl.$onInit();

            // then
            expect(parent.toggle).toHaveBeenCalledWith(ctrl);
        });
    });

    describe('toggle', () => {
        it('should toggle through its parent', () => {
            // given
            const ctrl = createController();
            expect(parent.toggle).not.toHaveBeenCalled();

            // when
            ctrl.toggle();

            // then
            expect(parent.toggle).toHaveBeenCalledWith(ctrl);
        });
    });

    describe('open', () => {
        it('should do nothing when item is already opened', () => {
            // given
            const ctrl = createController();
            ctrl.opened = true;

            // when
            ctrl.open();

            // then
            expect(ctrl.opened).toBe(true);
            expect(onOpen).not.toHaveBeenCalled();
        });

        it('should set "opened" flag to true when the component is closed', () => {
            // given
            const ctrl = createController();
            ctrl.opened = false;

            // when
            ctrl.open();

            // then
            expect(ctrl.opened).toBe(true);
        });

        it('should call "onOpen" callback when the component is closed', () => {
            // given
            const ctrl = createController();
            ctrl.opened = false;
            expect(onOpen).not.toHaveBeenCalled();

            // when
            ctrl.open();

            // then
            expect(onOpen).toHaveBeenCalled();
        });
    });

    describe('close', () => {
        it('should set "opened" flag to false', () => {
            // given
            const ctrl = createController();
            ctrl.opened = true;

            // when
            ctrl.close();

            // then
            expect(ctrl.opened).toBe(false);
        });
    });

    describe('destroy', () => {
        it('should unregister on component destroy', () => {
            // given
            const ctrl = createController();
            ctrl.$onInit();
            expect(parent.unregister).not.toHaveBeenCalled();

            // when
            ctrl.$onDestroy();

            // then
            expect(parent.unregister).toHaveBeenCalledWith(ctrl);
        });
    });
});
