/* TODO To uncomment when implementing feature

 describe('Filter monitor component', function() {
 'use strict';

 var scope, createElement, element;

 beforeEach(angular.mock.module('data-prep.filter-monitor'));
 beforeEach(angular.mock.module('htmlTemplates'));
 beforeEach(angular.mock.module('pascalprecht.translate', function ($translateProvider) {
 $translateProvider.translations('en', {
 'NB_LINES_MATCHING_FILTERS': '{{percentage}}% of lines are matching your filter(s)'
 });
 $translateProvider.preferredLanguage('en');
 }));

 beforeEach(inject(function($rootScope, $compile) {
 scope = $rootScope.$new();
 scope.toogle = () => {};
 createElement = function() {
 element = angular.element('<filter-monitor ' +
 'filters="filters" ' +
 'on-toogle="toogle()" ' +
 'nb-lines="nbLines" ' +
 'nb-total-lines="nbTotalLines" ' +
 'percentage="percentage" state="state"></filter-monitor>');
 $compile(element)(scope);
 scope.$digest();
 };

 spyOn(scope,'toogle');
 }));

 afterEach(function() {
 scope.$destroy();
 element.remove();
 });

 describe('render', function() {
 it('should NOT render "remove all" icon when filters are empty', function() {
 //given
 scope.filters = [];

 //when
 createElement();

 //then
 expect(element.find('#reset-filters').length).toBe(0);
 });

 it('should render stats', function() {
 //given
 scope.percentage = 25;
 scope.nbLines = 50;
 scope.nbTotalLines = 200;

 //when
 createElement();

 //then
 var statsElement = element.find('#filters-monitor-stats').eq(0);
 expect(statsElement.attr('title')).toBe('25% of lines are matching your filter(s)');
 expect(statsElement.text().trim()).toBe('50/200');
 });
 });

 describe('actions', function() {
 it('should execute reset callback on "toogle" icon click', function() {
 //given
 scope.filters = [{}];
 createElement();

 //when
 var ngModelController = element.find('input').controller('ngModel');
 ngModelController.$setViewValue('true');

 //then
 expect(scope.toogle).toHaveBeenCalled();
 });
 });
 });

 */