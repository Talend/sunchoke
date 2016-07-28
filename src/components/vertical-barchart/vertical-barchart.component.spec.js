/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

describe('Vertical barchart component', () => {
    let createElement, scope, element, statsData, secondaryStatsData, ctrl;
    const flushAllD3Transitions = () => {
        var now = Date.now;
        Date.now = function () {
            return Infinity;
        };
        d3.timer.flush();
        Date.now = now;
    };
    beforeEach(angular.mock.module('talend.sunchoke.vertical-barchart'));

    beforeEach(inject(($rootScope, $compile) => {

        statsData = [
            {'data': {min: 0, max: 5, minLabel: 0, maxLabel: 5}, 'occurrences': 9},
            {'data': {min: 5, max: 10, minLabel: 5, maxLabel: 10}, 'occurrences': 8},
            {'data': {min: 10, max: 15, minLabel: 10, maxLabel: 15}, 'occurrences': 6},
            {'data': {min: 15, max: 20, minLabel: 15, maxLabel: 20}, 'occurrences': 5}
        ];
        secondaryStatsData = [
            {'data': {min: 0, max: 5, minLabel: 0, maxLabel: 5}, 'filteredOccurrences': 9},
            {'data': {min: 5, max: 10, minLabel: 5, maxLabel: 10}, 'filteredOccurrences': 8},
            {'data': {min: 10, max: 15, minLabel: 10, maxLabel: 15}, 'filteredOccurrences': 6},
            {'data': {min: 15, max: 20, minLabel: 15, maxLabel: 20}, 'filteredOccurrences': 5}
        ];


        scope = $rootScope.$new();

        createElement = () => {
            scope.onClick = jasmine.createSpy('onClick');

            const template = `
                <sc-vertical-barchart id="barChart" width="250" height="400"
                    show-x-axis="showXAxis"
                    on-click="onClick(interval)"
                    key-field="data"
                    key-label="Occurrences"
                    primary-data="primaryData"
                    primary-value-field="occurrences"
                    secondary-data="secondaryData"
                    secondary-value-field="filteredOccurrences"
                    active-limits="activeLimits"
                ></sc-vertical-barchart>
            `;
            element = $compile(template)(scope);

            angular.element('body').append(element);
            scope.$digest();

            ctrl = element.controller('scVerticalBarchart');
        };
    }));

    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();

        scope.$destroy();
        element.remove();
    });

    describe('render', () => {
        it('should render y axis after a 100ms delay', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);

            //then
            expect(element.find('.yAxis > text').length).toBe(1);
            expect(element.find('.yAxis > text').text()).toBe('Occurrences');
        }));

        it('should render grid after a 100ms delay', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);

            //then
            expect(element.find('.grid > .tick').length).toBe(10);
            expect(element.find('.grid > .tick').eq(0).text()).toBe('0');
            expect(element.find('.grid > .tick').eq(1).text()).toBe('1');
            expect(element.find('.grid > .tick').eq(2).text()).toBe('2');
            expect(element.find('.grid > .tick').eq(3).text()).toBe('3');
            expect(element.find('.grid > .tick').eq(4).text()).toBe('4');
            expect(element.find('.grid > .tick').eq(5).text()).toBe('5');
            expect(element.find('.grid > .tick').eq(6).text()).toBe('6');
            expect(element.find('.grid > .tick').eq(7).text()).toBe('7');
            expect(element.find('.grid > .tick').eq(8).text()).toBe('8');
            expect(element.find('.grid > .tick').eq(9).text()).toBe('9');
        }));

        it('should render hover bars after a 100ms delay', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);

            //then
            expect(element.find('.bg-rect').length).toBe(statsData.length);
        }));

        it('should render primary bars after a 100ms delay', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);

            //then
            expect(element.find('.primaryBar > rect').length).toBe(statsData.length);
            expect(element.find('.secondaryBar > rect').length).toBe(0);
            expect(element.find('.grid').length).toBe(1);
            expect(element.find('.bg-rect').length).toBe(statsData.length);
        }));

        it('should render x-axis', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = statsData;
            scope.secondaryData = secondaryStatsData;
            scope.showXAxis = true;
            scope.$digest();
            $timeout.flush(100);

            //then
            expect(element.find('.x.axis').length).toBe(1);
        }));

        it('should NOT render x-axis', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = statsData;
            scope.secondaryData = secondaryStatsData;
            scope.dataType = false;
            scope.$digest();
            $timeout.flush(100);

            //then
            expect(element.find('.x.axis').length).toBe(0);
        }));

        it('should render primary and secondary bars after a 100ms delay', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = statsData;
            scope.secondaryData = secondaryStatsData;
            scope.$digest();
            $timeout.flush(100);
            //then
            expect(element.find('.primaryBar > rect').length).toBe(statsData.length);
            expect(element.find('.secondaryBar > rect').length).toBe(secondaryStatsData.length);
        }));

        it('should render secondary bars after a 100ms delay', inject(($timeout) => {
            //given
            createElement();

            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);

            expect(element.find('.secondaryBar > rect').length).toBe(0);
            //when
            scope.secondaryData = secondaryStatsData;
            scope.$digest();
            $timeout.flush(100);

            //then
            expect(element.find('.secondaryBar > rect').length).toBe(secondaryStatsData.length);
        }));

        it('should render tiny bars with a 3px height bar', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = [
                {'data': {min: 0, max: 5, minLabel: 0, maxLabel: 5}, 'occurrences': 9000000},
                {'data': {min: 5, max: 10, minLabel: 5, maxLabel: 10}, 'occurrences': 0},
                {'data': {min: 10, max: 15, minLabel: 10, maxLabel: 15}, 'occurrences': 1}
            ];
            scope.$digest();
            $timeout.flush(100);
            flushAllD3Transitions();

            //then
            //400: passed chart height, 20: top margin to which the svg was translated, 3: the default tiny bar value
            expect(element.find('.primaryBar > rect').eq(0).attr('height')).toBe('380'); // 400 - 20px margin
            expect(element.find('.primaryBar > rect').eq(1).attr('height')).toBe('0');
            expect(element.find('.primaryBar > rect').eq(2).attr('height')).toBe('3');
            expect(element.find('.primaryBar > rect').eq(0).attr('y')).toBe('0');
            expect(element.find('.primaryBar > rect').eq(1).attr('y')).toBe('380'); // 400 - 20px margin
            expect(element.find('.primaryBar > rect').eq(2).attr('y')).toBe('377'); // 400 - 20px margin - 3px bar height
        }));
    });

    describe('active bars', () => {
        it('should set the initial bars to full opacity', inject(($timeout) => {
            //given
            createElement();

            //when
            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);

            //then
            ctrl.buckets[0].forEach((bucket) => {
                expect(d3.select(bucket).style('opacity')).toBe('1');
            });
        }));

        it('should set the bars to inactive opacity = 0.4', inject(($timeout) => {
            //given
            createElement();

            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);
            flushAllD3Transitions();

            //when
            scope.activeLimits = [105, 200];
            scope.$digest();
            $timeout.flush(500);
            flushAllD3Transitions();

            //then
            ctrl.buckets[0].forEach(function (bucket) {
                var opacity = Number(d3.select(bucket).style('opacity')).toFixed(1);
                expect(opacity).toBe('0.4');
            });
        }));

        it('should update the bars opacity depending on the active limits', inject(($timeout) => {
            //given
            createElement();

            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);
            flushAllD3Transitions();

            //when
            scope.activeLimits = [15, 20];
            scope.$digest();
            $timeout.flush(600);
            flushAllD3Transitions();

            //then
            var expectedOpacities = ['0.4', '0.4', '0.4', '1.0'];

            ctrl.buckets[0].forEach( (bucket, index) => {
                var opacity = Number(d3.select(bucket).style('opacity')).toFixed(1);
                expect(opacity).toBe(expectedOpacities[index]);
            });
        }));

        it('should set bars opacity to full opacity when it is in the intersection or a limit', inject(($timeout) => {
            //given
            createElement();

            scope.primaryData = statsData;
            scope.$digest();
            $timeout.flush(100);
            flushAllD3Transitions();

            //when
            scope.activeLimits = [13, 20];
            scope.$digest();
            $timeout.flush(600);

            flushAllD3Transitions();

            //then
            var expectedOpacities = ['0.4', '0.4', '1.0', '1.0'];

            ctrl.buckets[0].forEach((bucket, index) => {
                var opacity = Number(d3.select(bucket).style('opacity')).toFixed(1);
                expect(opacity).toBe(expectedOpacities[index]);
            });
        }));
    });
});