/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

describe('Date picker component', () => {
    let createElement, scope, element, ctrl;

    beforeEach(angular.mock.module('talend.sunchoke.date-picker'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        createElement = (config) => {

            if( angular.isUndefined(config) ){
                config = '{}';
            }

            const template = `
                <sc-date-picker ng-model="modelValue" config='${config}'></sc-date-picker>
            `;

            element = $compile(template)(scope);
            //$document provide not the same data
            /* eslint-disable angular/document-service */
            element.appendTo(document.body);
            /* eslint-enable angular/document-service */
            scope.$digest();
            ctrl = element.controller('scDatePicker');
        };
    }));

    afterEach(() => {
        scope.$destroy();
        element.remove();
    });

    it('should get the focus', () => {
        //given
        createElement();

        //when
        element.find('input')[0].focus();
        scope.$digest();

        //then
        expect(ctrl.focusState).toBeTruthy();
        expect(angular.element(element.find('.calendar-icon')[0]).hasClass('active')).toBeTruthy();
    });

    it('should show the calendar', inject(($document) => {
        //given
        createElement();

        const pikaSingleElement = angular.element($document.find(".pika-single")[0]);
        expect(pikaSingleElement.hasClass('is-hidden')).toBeTruthy();

        //when
        element.find('input')[0].focus();
        scope.$digest();

        //Then
        expect(pikaSingleElement.hasClass('is-hidden')).toBeFalsy();
    }));

    describe('should test the ghost button', () => {

        it('should test the non presence of the ghost button', inject(($document) => {
            //given
            const configuration = '{\"noneButton\":false}';
            createElement(configuration);

            //when
            element.find('input')[0].focus();
            scope.$digest();

            const ghostButton = angular.element($document.find(".ghost-button")[0]);
            expect(Object.keys(ghostButton).length).toBe(0);

        }));

        it('should test the presence of the ghost button', inject(($document) => {
            //given
            const configuration = '{\"noneButton\":true}';
            createElement(configuration);

            //when
            element.find('input')[0].focus();
            scope.$digest();

            const ghostButton = angular.element($document.find(".ghost-button")[0]);
            expect(Object.keys(ghostButton).length).not.toBe(0);

        }));
    });

    describe('should test the constructor', () => {

        it('should test the non presence of the ghost button', () => {
            //given
            const configuration = '{\"noneButton\":false, \"field\":\"testValue\", \"controller\":\"testController\"}';
            createElement(configuration);

            //when
            element.find('input')[0].focus();
            scope.$digest();

            expect(ctrl.pikaday.controller).not.toBe("testController");
            expect(ctrl.pikaday.field).not.toBe("testValue");
            expect(ctrl.ngModel).toBeUndefined();
        });

        it('should test the timestamp initilisation', () => {
            //given
            const configuration = '{\"noneButton\":false, \"field\":\"testValue\", \"controller\":\"testController\", \"defaultTimeStamp\":1464818400000}';
            createElement(configuration);

            //when
            element.find('input')[0].focus();
            scope.$digest();

            expect(ctrl.ngModel).toBe(1464818400000);
        });

    });

    describe('should test the datepicker graphic component', () => {

        it('should test select a date',  function(done) {

            inject(($document) => {
                //given
                const configuration = '{\"noneButton\":true}';
                createElement(configuration);

                //when
                element.find('input')[0].focus();
                scope.$digest();

                //because take the first may be out of the current month
                const randomDay = angular.element($document.find(".pika-day")[10]);
                const date = new Date(randomDay.data('pika-year'), randomDay.data('pika-month'), randomDay.data('pika-day') );
                randomDay[0].dispatchEvent(new Event('mousedown'));


                //Test setTimeout Third part library
                /* eslint-disable angular/timeout-service */
                setTimeout(function(){
                    expect(ctrl.ngModel).toBe(date.getTime());
                    done();
                },101);
                /* eslint-enable angular/timeout-service */


            })
        });

        it('should test the none button',  function(done) {

            inject(($document) => {
                //given
                const configuration = '{\"noneButton\":true}';
                createElement(configuration);

                //when
                element.find('input')[0].focus();
                scope.$digest();

                //because take the first may be out of the current month
                const randomDay = angular.element($document.find(".pika-day")[10]);
                const date = new Date(randomDay.data('pika-year'), randomDay.data('pika-month'), randomDay.data('pika-day') );
                randomDay[0].dispatchEvent(new Event('mousedown'));

                //Test setTimeout Third part library
                /* eslint-disable angular/timeout-service */
                setTimeout(function(){
                    expect(ctrl.ngModel).toBe(date.getTime());

                    element.find('input')[0].focus();
                    const noneButton = angular.element($document.find(".ghost-button")[0]);
                    noneButton[0].dispatchEvent(new Event('mousedown'));
                    //Test setTimeout Third part library
                    /* eslint-disable angular/timeout-service */
                    setTimeout(function(){
                        expect(ctrl.ngModel).toBeNull();
                        done();
                    },101);
                    /* eslint-enable angular/timeout-service */
                },101);
                /* eslint-enable angular/timeout-service */

            })
        });

    });

});