describe('Horizontal barchart component controller', () => {
	let scope, element, createElement, ctrl;
	beforeEach(angular.mock.module('talend.sunchoke.horizontal-barchart'));

	beforeEach(inject(($rootScope, $compile) => {
		scope = $rootScope.$new();
		createElement = function () {
			element = angular.element('<sc-horizontal-barchart ' +
					'id="barChart" ' +
					'width="250" ' +
					'height="400"' +
					'key-field="formattedValue"' +
					'primary-data="primaryData"' +
					'primary-value-field="occurrences"' +
					'primary-bar-class="{{primaryBarClass}}"' +
					'secondary-data="secondaryData"' +
					'secondary-value-field="filteredOccurrences"' +
					'secondary-bar-class="{{secondaryBarClass}}"' +
					'></sc-horizontal-barchart>');
			$compile(element)(scope);
			scope.$digest();
			ctrl = element.controller('scHorizontalBarchart');
		};
	}));

	afterEach(inject(function () {
		scope.$destroy();
		element.remove();
	}));

	it('sanitize the data', () => {
		// given
		const primaryData = [{
			"formattedValue": {
				"value": "Masson",
				"label": "Masson"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Martinez",
				"label": "Martinez"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Gaillard",
				"label": "Gaillard"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Girard",
				"label": "Girard"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Bertrand",
				"label": "Bertrand"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Hubert",
				"label": "Hubert"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Chevalier",
				"label": "Chevalier"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Dupuis",
				"label": "Dupuis"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Boyer",
				"label": "Boyer"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Lefevre",
				"label": "Lefevre"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Joly",
				"label": "Joly"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Lacroix",
				"label": "Lacroix"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Da silva",
				"label": "Da silva"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Roche",
				"label": "Roche"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Simon",
				"label": "Simon"
			},
			"occurrences": 1
		}];

		const secondaryData = [{
			"formattedValue": {
				"value": "Roger",
				"label": "Roger"
			},
			"filteredOccurrences": 1
		}, {
			"formattedValue": {
				"value": "Masson",
				"label": "Masson"
			},
			"filteredOccurrences": 1
		}, {
			"formattedValue": {
				"value": "Chevalier",
				"label": "Chevalier"
			},
			"filteredOccurrences": 1
		}, {
			"formattedValue": {
				"value": "Andre",
				"label": "Andre"
			},
			"filteredOccurrences": 1
		}];

		scope.primaryData = primaryData;
		scope.secondaryData = secondaryData;

		// when
		createElement();
		let sanitizedSecondaryData = ctrl._sanitizedSecondaryData(secondaryData);

		// then
		expect(sanitizedSecondaryData).toEqual([{
			"formattedValue": {
				"value": "Masson",
				"label": "Masson"
			},
			"filteredOccurrences": 1
		}, {
			"formattedValue": {
				"value": "Martinez",
				"label": "Martinez"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Gaillard",
				"label": "Gaillard"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Girard",
				"label": "Girard"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Bertrand",
				"label": "Bertrand"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Hubert",
				"label": "Hubert"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Chevalier",
				"label": "Chevalier"
			},
			"filteredOccurrences": 1
		}, {
			"formattedValue": {
				"value": "Dupuis",
				"label": "Dupuis"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Boyer",
				"label": "Boyer"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Lefevre",
				"label": "Lefevre"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Joly",
				"label": "Joly"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Lacroix",
				"label": "Lacroix"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Da silva",
				"label": "Da silva"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Roche",
				"label": "Roche"
			},
			"filteredOccurrences": 0
		}, {
			"formattedValue": {
				"value": "Simon",
				"label": "Simon"
			},
			"filteredOccurrences": 0
		}]);
	});

	it('sanitize the data', () => {
		// given
		const primaryData = [{
			"formattedValue": {
				"value": "Masson",
				"label": "Masson"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Martinez",
				"label": "Martinez"
			},
			"occurrences": 1
		}];

		const secondaryData = [{
			"formattedValue": {
				"value": "Roger",
				"label": "Roger"
			},
			"filteredOccurrences": 1
		}, {
			"formattedValue": {
				"value": "Masson",
				"label": "Masson"
			},
			"filteredOccurrences": 1
		}];

		scope.primaryData = primaryData;
		scope.secondaryData = secondaryData;

		// when
		createElement();
		let sanitizedSecondaryData = ctrl._sanitizedSecondaryData(secondaryData);

		// then
		expect(primaryData).toEqual(primaryData);
		expect(sanitizedSecondaryData).toEqual([{
			"formattedValue": {
				"value": "Masson",
				"label": "Masson"
			},
			"filteredOccurrences": 1
		}, {
			"formattedValue": {
				"value": "Martinez",
				"label": "Martinez"
			},
			"filteredOccurrences": 0
		}]);
	});

	it('should sanitize the secondaryData when we change', () => {
		// given
		const primaryData = [{
			"formattedValue": {
				"value": "Masson",
				"label": "Masson"
			},
			"occurrences": 1
		}, {
			"formattedValue": {
				"value": "Martinez",
				"label": "Martinez"
			},
			"occurrences": 1
		}];

		const secondaryData = [{
			"formattedValue": {
				"value": "Roger",
				"label": "Roger"
			},
			"filteredOccurrences": 1
		}, {
			"formattedValue": {
				"value": "Masson",
				"label": "Masson"
			},
			"filteredOccurrences": 1
		}];

		scope.primaryData = primaryData;
		scope.secondaryData = primaryData;

		// when
		createElement();
		spyOn(ctrl, '_sanitizedSecondaryData');
		scope.$digest();
		scope.secondaryData = secondaryData;
		scope.$digest();


		// then
		expect(primaryData).toEqual(primaryData);
		expect(ctrl._sanitizedSecondaryData).toHaveBeenCalledWith(secondaryData);
	});

});
