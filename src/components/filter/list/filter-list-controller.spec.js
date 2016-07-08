/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

describe('filter list controller', function () {
    'use strict';

    var createController, scope;
    var onFilterRemoveValue, onFilterRemove;

    beforeEach(angular.mock.module('talend.sunchoke.filter-list'));

    beforeEach(inject(function ($rootScope, $componentController) {
        onFilterRemove = jasmine.createSpy('onFilterRemove');
        onFilterRemoveValue = jasmine.createSpy('onFilterRemoveValue');
        scope = $rootScope.$new();

        createController = () => {
            var ctrl = $componentController('scFilterList', {$scope: scope});
            ctrl.onFilterRemoveValue = onFilterRemoveValue;
            ctrl.onFilterRemove = onFilterRemove;
            return ctrl;
        };

    }));

    it('should call filter value remove callback', function () {
        //given
        var ctrl = createController();
        var filter = {};

        //when
        ctrl.removeFilterValue(filter);

        //then
        expect(onFilterRemoveValue).toHaveBeenCalledWith({filter, value: undefined});
    });

    it('should call filter remove callback', function () {
        //given
        var ctrl = createController();
        var filter = {
            column: '0001',
            type: 'contains',
            args: {
                value: 'toto'
            }
        };

        //when
        ctrl.removeFilter(filter);

        //then
        expect(onFilterRemove).toHaveBeenCalledWith({
            filter: filter
        });
    });

    it('should call filter change callback', function () {

        /**
         * TODO when implementing edit
         */

    });
});