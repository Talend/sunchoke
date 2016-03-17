/*!
 * ============================================================================
 * 
 *  Copyright (C) 2006-2016 Talend Inc. - www.talend.com
 * 
 *  This source code is available under agreement available at
 *  https://github.com/Talend/data-prep/blob/master/LICENSE
 * 
 *  You should have received a copy of the agreement
 *  along with this program; if not, write to Talend SA
 *  9 rue Pages 92150 Suresnes, France
 * 
 *  ============================================================================
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].e;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			e: {},
/******/ 			i: moduleId,
/******/ 			l: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.e, module, module.e, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.e;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.e = angular;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./components/accordion/accordion.module.js": 8,
		"./components/splitter/splitter.module.js": 11,
		"./components/tabs/tabs.module.js": 16,
		"./sunchoke.module.js": 17
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		var id = map[req];
		if(!(id + 1)) // check for number
			throw new Error("Cannot find module '" + req + "'.");
		return id;
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.e = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var context = __webpack_require__(1);
	context.keys().forEach(context);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = ["$animate", function ($animate) {
	    'ngInject';
	
	    return {
	        restrict: 'A',
	        link: function link(scope, element, attrs) {
	            function open() {
	                $animate.addClass(element, 'opening', {
	                    to: { height: element[0].scrollHeight + 'px' }
	                }).then(function () {
	                    return element.removeClass('opening').addClass('open').css('height', '');
	                });
	            }
	
	            function close() {
	                $animate.addClass(element, 'closing', {
	                    from: { height: element[0].scrollHeight + 'px' },
	                    to: { height: '0' }
	                }).then(function () {
	                    return element.removeClass('closing').removeClass('open');
	                });
	            }
	
	            scope.$watch(attrs.scAccordionAnimation, function (isOpened) {
	                if (isOpened) {
	                    open();
	                } else {
	                    close();
	                }
	            });
	        }
	    };
	}];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _accordionItem = __webpack_require__(5);
	
	var _accordionItem2 = _interopRequireDefault(_accordionItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScAccordionItemComponent = {
	    template: '\n    <li class="sc-accordion" ng-class="{open: $ctrl.opened}">\n        <div class="trigger-container" ng-transclude="trigger" ng-click="$ctrl.toggle()"></div>\n        <div class="content-container" ng-transclude="content" sc-accordion-animation="$ctrl.opened"></div>\n    </li>\n    ',
	    transclude: {
	        trigger: 'trigger',
	        content: '?content'
	    },
	    bindings: {
	        onOpen: '&',
	        default: '<'
	    },
	    require: {
	        parent: '^^scAccordion'
	    },
	    controller: _accordionItem2.default
	};
	
	exports.default = ScAccordionItemComponent;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScAccordionItemCtrl = function () {
	    ScAccordionItemCtrl.$inject = ["$scope"];
	    function ScAccordionItemCtrl($scope) {
	        'ngInject';
	
	        _classCallCheck(this, ScAccordionItemCtrl);
	
	        this.$scope = $scope;
	        this.opened = false;
	    }
	
	    _createClass(ScAccordionItemCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var _this = this;
	
	            this.parent.register(this);
	            this.$scope.$on('$destroy', function () {
	                return _this.parent.unregister(_this);
	            });
	
	            if (this.default) {
	                this.toggle();
	            }
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle() {
	            this.parent.toggle(this);
	        }
	    }, {
	        key: 'open',
	        value: function open() {
	            if (this.opened) {
	                return;
	            }
	            this.opened = true;
	            this.onOpen();
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.opened = false;
	        }
	    }]);
	
	    return ScAccordionItemCtrl;
	}();
	
	exports.default = ScAccordionItemCtrl;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _accordion = __webpack_require__(7);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScAccordionComponent = {
	    template: '<ul ng-transclude></ul>',
	    controller: _accordion2.default,
	    transclude: true
	};
	
	exports.default = ScAccordionComponent;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScAccordionCtrl = function () {
	    function ScAccordionCtrl() {
	        _classCallCheck(this, ScAccordionCtrl);
	
	        this.accordions = [];
	    }
	
	    _createClass(ScAccordionCtrl, [{
	        key: "register",
	        value: function register(accordion) {
	            this.accordions.push(accordion);
	        }
	    }, {
	        key: "unregister",
	        value: function unregister(accordion) {
	            this.accordions = this.accordions.filter(function (next) {
	                return next !== accordion;
	            });
	        }
	    }, {
	        key: "toggle",
	        value: function toggle(accordion) {
	            var wasActive = accordion.opened;
	            this.accordions.forEach(function (next) {
	                return next.close();
	            });
	
	            if (!wasActive) {
	                accordion.open();
	            }
	        }
	    }]);
	
	    return ScAccordionCtrl;
	}();
	
	exports.default = ScAccordionCtrl;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	var _accordionAnimation = __webpack_require__(3);
	
	var _accordionAnimation2 = _interopRequireDefault(_accordionAnimation);
	
	var _accordionItem = __webpack_require__(4);
	
	var _accordionItem2 = _interopRequireDefault(_accordionItem);
	
	var _accordion = __webpack_require__(6);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	        angular.module('talend.sunchoke.accordion', ['ngAnimate']).directive('scAccordionAnimation', _accordionAnimation2.default).component('scAccordionItem', _accordionItem2.default).component('scAccordion', _accordion2.default);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _splitterController = __webpack_require__(10);
	
	var _splitterController2 = _interopRequireDefault(_splitterController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScSplitterComponent = {
	    template: '\n    <div class="split-container {{::$ctrl.orientation}}">\n        <div class="split-first-pane" ng-transclude="split-first-pane"></div>\n        <div class="split-handler">\n            <div class="split-handler-square"></div>\n            <div class="split-handler-square"></div>\n            <div class="split-handler-square"></div>\n            <div class="split-handler-square"></div>\n            <div class="split-handler-square"></div>\n            <div class="split-handler-square"></div>\n            <div class="split-handler-square"></div>\n        </div>\n        <div class="split-second-pane" ng-transclude="split-second-pane"></div>\n    </div>',
	    bindings: {
	        orientation: '@',
	        minSize: '@'
	    },
	    transclude: {
	        'split-first-pane': 'scSplitFirstPane',
	        'split-second-pane': 'scSplitSecondPane'
	    },
	    controller: _splitterController2.default
	};
	
	exports.default = ScSplitterComponent;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScSplitterCtrl = function () {
	    ScSplitterCtrl.$inject = ["$scope", "$element", "$window"];
	    function ScSplitterCtrl($scope, $element, $window) {
	        'ngInject';
	
	        _classCallCheck(this, ScSplitterCtrl);
	
	        this.drag = false;
	        this.$element = $element;
	        this.windowElement = angular.element($window);
	        this.$scope = $scope;
	    }
	
	    _createClass(ScSplitterCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.initElements();
	            this.attachListeners();
	        }
	    }, {
	        key: 'initElements',
	        value: function initElements() {
	            this.minSize = +this.minSize || 256;
	            this.splitContainer = this.$element[0].querySelector('.split-container');
	            this.firstPane = angular.element(this.$element[0].querySelector('.split-first-pane'));
	            this.splitHandler = angular.element(this.$element[0].querySelector('.split-handler'));
	            this.secondPane = angular.element(this.$element[0].querySelector('.split-second-pane'));
	        }
	    }, {
	        key: 'attachListeners',
	        value: function attachListeners() {
	            var _this = this;
	
	            this.$element.on('mousemove', function (event) {
	                if (!_this.drag) {
	                    return;
	                }
	                event.preventDefault();
	                _this.updateSize(event);
	            });
	
	            this.splitHandler.on('mousedown', function () {
	                return _this.drag = true;
	            });
	
	            var onmouseup = function onmouseup() {
	                return _this.drag = false;
	            };
	            this.windowElement.on('mouseup', onmouseup);
	
	            this.$scope.$on('$destroy', function () {
	                return _this.windowElement.off('mouseup', onmouseup);
	            });
	        }
	    }, {
	        key: 'updateSize',
	        value: function updateSize(event) {
	            var bounds = this.splitContainer.getBoundingClientRect();
	
	            if (this.orientation === 'vertical') {
	                this.splitHandlerSize = this.splitHandlerSize || this.splitHandler[0].offsetHeight;
	                var pos = event.clientY - bounds.top - this.splitHandlerSize / 2;
	
	                if (pos < this.minSize || pos > bounds.height - this.minSize) {
	                    return;
	                }
	
	                this.firstPane.css('bottom', bounds.height - pos + 'px');
	                this.splitHandler.css('top', pos + 'px');
	                this.secondPane.css('top', pos + this.splitHandlerSize + 'px');
	            } else {
	                this.splitHandlerSize = this.splitHandlerSize || this.splitHandler[0].offsetWidth;
	                var pos = event.clientX - bounds.left - this.splitHandlerSize / 2;
	
	                if (pos < this.minSize || pos > bounds.width - this.minSize) {
	                    return;
	                }
	
	                this.firstPane.css('right', bounds.width - pos + 'px');
	                this.splitHandler.css('left', pos + 'px');
	                this.secondPane.css('left', pos + this.splitHandlerSize + 'px');
	            }
	        }
	    }]);
	
	    return ScSplitterCtrl;
	}();
	
	exports.default = ScSplitterCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	var _splitterComponent = __webpack_require__(9);
	
	var _splitterComponent2 = _interopRequireDefault(_splitterComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	        angular.module('talend.sunchoke.splitter', []).component('scSplitter', _splitterComponent2.default);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tabsItem = __webpack_require__(13);
	
	var _tabsItem2 = _interopRequireDefault(_tabsItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScTabsItemComponent = {
	    template: '<ng-transclude ng-if="$ctrl.active"></ng-transclude>',
	    bindings: {
	        tabTitle: '@',
	        isDefault: '<'
	    },
	    require: {
	        tabsCtrl: '^^scTabs'
	    },
	    transclude: true,
	    controller: _tabsItem2.default
	};
	
	exports.default = ScTabsItemComponent;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScTabsItemCtrl = function () {
	    ScTabsItemCtrl.$inject = ["$scope"];
	    function ScTabsItemCtrl($scope) {
	        'ngInject';
	
	        _classCallCheck(this, ScTabsItemCtrl);
	
	        this.$scope = $scope;
	    }
	
	    _createClass(ScTabsItemCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var _this = this;
	
	            this.tabsCtrl.register(this);
	            if (this.isDefault) {
	                this.tabsCtrl.select(this);
	            }
	
	            this.$scope.$on('$destroy', function () {
	                return _this.tabsCtrl.unregister(_this);
	            });
	        }
	    }]);
	
	    return ScTabsItemCtrl;
	}();
	
	exports.default = ScTabsItemCtrl;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tabs = __webpack_require__(15);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScTabsComponent = {
	    template: '\n        <ul class="tabs">\n            <li class="tabs-header" ng-class="{active : tab.active}" ng-repeat="tab in $ctrl.tabs track by $index" ng-click="$ctrl.select(tab)">\n                {{tab.tabTitle}}\n            </li>\n        </ul>\n        <ng-transclude></ng-transclude>\n    ',
	    bindings: {
	        selectedTab: '<',
	        onTabChange: '&'
	    },
	    transclude: true,
	    controller: _tabs2.default
	};
	
	exports.default = ScTabsComponent;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScTabsCtrl = function () {
	    ScTabsCtrl.$inject = ["$scope"];
	    function ScTabsCtrl($scope) {
	        'ngInject';
	
	        _classCallCheck(this, ScTabsCtrl);
	
	        this.$scope = $scope;
	
	        this.tabs = [];
	    }
	
	    _createClass(ScTabsCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var _this = this;
	
	            this.$scope.$watch(function () {
	                return _this.selectedTab;
	            }, function (index) {
	                return _this.setSelectedTab(index);
	            });
	        }
	    }, {
	        key: 'register',
	        value: function register(tab) {
	            if (this.tabs.length === 0) {
	                tab.active = true;
	            }
	            this.tabs.push(tab);
	        }
	    }, {
	        key: 'select',
	        value: function select(tab) {
	            this.tabs.forEach(function (tabToDeactivate) {
	                tabToDeactivate.active = false;
	            });
	            tab.active = true;
	            this.onTabChange();
	        }
	    }, {
	        key: 'setSelectedTab',
	        value: function setSelectedTab(index) {
	            var tabToSelect = this.tabs[index];
	            if (tabToSelect) {
	                this.select(tabToSelect);
	            }
	        }
	    }, {
	        key: 'unregister',
	        value: function unregister(tab) {
	            var index = this.tabs.indexOf(tab);
	            this.tabs.splice(index, 1);
	        }
	    }]);
	
	    return ScTabsCtrl;
	}();
	
	exports.default = ScTabsCtrl;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	var _tabs = __webpack_require__(14);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tabsItem = __webpack_require__(12);
	
	var _tabsItem2 = _interopRequireDefault(_tabsItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	        angular.module('talend.sunchoke.tabs', []).component('scTabsItem', _tabsItem2.default).component('scTabs', _tabs2.default);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	(function () {
	    angular.module('talend.sunchoke', ['talend.sunchoke.accordion', 'talend.sunchoke.splitter', 'talend.sunchoke.tabs']);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTQxNDViYmQ4MzhkNzZlNjUyMmIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYyBcXC5tb2R1bGVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy53ZWJwYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24tYW5pbWF0aW9uLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3BsaXR0ZXIvc3BsaXR0ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLWl0ZW0uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy1pdGVtLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdW5jaG9rZS5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxvQjs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEJBOztBQUFBLEtBQUksVUFBVSxzQkFBK0I7QUFDN0MsU0FBUSxPQUFPLFFBQVEsUzs7Ozs7O0FDRHZCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7S0FDekMsT0FBTzs7O0FBR1gsU0FBUSx1QkFOTyxVQUFDLFVBQWE7S0FDekI7O0tBQ0EsT0FBTztTQUNILFVBQVU7U0FDVixNQUFNLGNBQUMsT0FBTyxTQUFTLE9BQVU7YUFDN0IsU0FBUyxPQUFPO2lCQUNaLFNBQVMsU0FBUyxTQUFTLFdBQVc7cUJBQzlCLElBQUksRUFBRSxRQUFRLFFBQVEsR0FBRyxlQUFlO29CQUUzQyxLQUFLO3FCQU9OLE9BUFksUUFBUSxZQUFZLFdBQVcsU0FBUyxRQUFRLElBQUksVUFBVTs7OzthQUdsRixTQUFTLFFBQVE7aUJBQ2IsU0FBUyxTQUFTLFNBQVMsV0FBVztxQkFDOUIsTUFBTSxFQUFFLFFBQVEsUUFBUSxHQUFHLGVBQWU7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SSxTQUFTOzthQUVqQixLQUFLLEtBQUssS0FBSzs7UUFxQmhCO1NBQ0MsS0FBSztTQUNMLE9BQU8sU0FBUyxPQXBCVCxLQUFLO2FBQ1osS0FBSyxLQUFLLFFBQVEsVUFBQyxpQkFBb0I7aUJBQ25DLGdCQUFnQixTQUFTOzthQUU3QixJQUFJLFNBQVM7YUFDYixLQUFLOztRQXNCTjtTQUNDLEtBQUs7U0FDTCxPQUFPLFNBQVMsZUFyQkQsT0FBTzthQUN0QixJQUFJLGNBQWMsS0FBSyxLQUFLO2FBQzVCLElBQUksYUFBYTtpQkFDYixLQUFLLE9BQU87OztRQXdCakI7U0FDQyxLQUFLO1NBQ0wsT0FBTyxTQUFTLFdBdEJMLEtBQUs7YUFDaEIsSUFBSSxRQUFRLEtBQUssS0FBSyxRQUFRO2FBQzlCLEtBQUssS0FBSyxPQUFPLE9BQU87Ozs7S0EwQjVCLE9BakVpQjs7O0FBb0VyQixTQUFRLFVBQVUsVzs7Ozs7O0FDcEVsQjs7QUFFQSxLQUFJLFFBQVEsb0JBQVE7O0FBRXBCLEtBQUksU0FBUyx1QkFBdUI7O0FBRXBDLEtBQUksWUFBWSxvQkFBUTs7QUFFeEIsS0FBSSxhQUFhLHVCQUF1Qjs7QUFFeEMsVUFBUyx1QkFBdUIsS0FBSyxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVM7O0FBUHZGLEVBQUMsWUFBTTtTQUNDLFFBQVEsT0FBTyx3QkFBd0IsSUFDdEMsVUFBVSxjQURYLG9CQUVDLFVBQVUsVUFGWDs7Ozs7Ozs7QUNKUjs7QUFBQSxFQUFDLFlBQU07S0FDSCxRQUFRLE9BQU8sbUJBQW1CLENBQzlCLDZCQUNBLDRCQUNBIiwiZmlsZSI6InN1bmNob2tlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmU7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGU6IHt9LFxuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmUsIG1vZHVsZSwgbW9kdWxlLmUsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZTtcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZTQxNDViYmQ4MzhkNzZlNjUyMmJcbiAqKi8iLCJtb2R1bGUuZSA9IGFuZ3VsYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLmpzXCI6IDgsXG5cdFwiLi9jb21wb25lbnRzL3NwbGl0dGVyL3NwbGl0dGVyLm1vZHVsZS5qc1wiOiAxMSxcblx0XCIuL2NvbXBvbmVudHMvdGFicy90YWJzLm1vZHVsZS5qc1wiOiAxNixcblx0XCIuL3N1bmNob2tlLm1vZHVsZS5qc1wiOiAxN1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmUgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMgXFwubW9kdWxlXFwuanMkXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4vc3JjJywgdHJ1ZSwgL1xcLm1vZHVsZVxcLmpzJC8pO1xuY29udGV4dC5rZXlzKCkuZm9yRWFjaChjb250ZXh0KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMud2VicGFjay5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0ICgkYW5pbWF0ZSkgPT4ge1xuICAgICduZ0luamVjdCc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuICAgICAgICAgICAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgICAgICAgICAkYW5pbWF0ZS5hZGRDbGFzcyhlbGVtZW50LCAnb3BlbmluZycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IGhlaWdodDogZWxlbWVudFswXS5zY3JvbGxIZWlnaHQgKyAncHgnIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gZWxlbWVudC5yZW1vdmVDbGFzcygnb3BlbmluZycpLmFkZENsYXNzKCdvcGVuJykuY3NzKCdoZWlnaHQnLCAnJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgICAgICAgICAkYW5pbWF0ZS5hZGRDbGFzcyhlbGVtZW50LCAnY2xvc2luZycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHsgaGVpZ2h0OiBlbGVtZW50WzBdLnNjcm9sbEhlaWdodCArICdweCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IGhlaWdodDogJzAnIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gZWxlbWVudC5yZW1vdmVDbGFzcygnY2xvc2luZycpLnJlbW92ZUNsYXNzKCdvcGVuJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuc2NBY2NvcmRpb25BbmltYXRpb24sIChpc09wZW5lZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGlzT3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLWFuaW1hdGlvbi5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgU2NBY2NvcmRpb25JdGVtQ3RybCBmcm9tICcuL2FjY29yZGlvbi1pdGVtLmNvbnRyb2xsZXInO1xuXG5jb25zdCBTY0FjY29yZGlvbkl0ZW1Db21wb25lbnQgPSB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICA8bGkgY2xhc3M9XCJzYy1hY2NvcmRpb25cIiBuZy1jbGFzcz1cIntvcGVuOiAkY3RybC5vcGVuZWR9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmlnZ2VyLWNvbnRhaW5lclwiIG5nLXRyYW5zY2x1ZGU9XCJ0cmlnZ2VyXCIgbmctY2xpY2s9XCIkY3RybC50b2dnbGUoKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIiBuZy10cmFuc2NsdWRlPVwiY29udGVudFwiIHNjLWFjY29yZGlvbi1hbmltYXRpb249XCIkY3RybC5vcGVuZWRcIj48L2Rpdj5cbiAgICA8L2xpPlxuICAgIGAsXG4gICAgdHJhbnNjbHVkZToge1xuICAgICAgICB0cmlnZ2VyOiAndHJpZ2dlcicsXG4gICAgICAgIGNvbnRlbnQ6ICc/Y29udGVudCdcbiAgICB9LFxuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIG9uT3BlbjogJyYnLFxuICAgICAgICBkZWZhdWx0OiAnPCdcbiAgICB9LFxuICAgIHJlcXVpcmU6IHtcbiAgICAgICAgcGFyZW50OiAnXl5zY0FjY29yZGlvbidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFNjQWNjb3JkaW9uSXRlbUN0cmxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjQWNjb3JkaW9uSXRlbUNvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY0FjY29yZGlvbkl0ZW1DdHJsIHtcblxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgICRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICB0aGlzLiRzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4gdGhpcy5wYXJlbnQudW5yZWdpc3Rlcih0aGlzKSk7XG5cbiAgICAgICAgaWYodGhpcy5kZWZhdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQudG9nZ2xlKHRoaXMpO1xuICAgIH1cblxuICAgICAgICBvcGVuKCkge1xuICAgICAgICBpZih0aGlzLm9wZW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICB9XG5cbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi1pdGVtLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgU2NBY2NvcmRpb25DdHJsIGZyb20gJy4vYWNjb3JkaW9uLmNvbnRyb2xsZXInO1xuXG5jb25zdCBTY0FjY29yZGlvbkNvbXBvbmVudCA9IHtcbiAgICB0ZW1wbGF0ZTogYDx1bCBuZy10cmFuc2NsdWRlPjwvdWw+YCxcbiAgICBjb250cm9sbGVyOiBTY0FjY29yZGlvbkN0cmwsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NBY2NvcmRpb25Db21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjQWNjb3JkaW9uQ3RybCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXIoYWNjb3JkaW9uKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9ucy5wdXNoKGFjY29yZGlvbik7XG4gICAgfVxuXG4gICAgICAgIHVucmVnaXN0ZXIoYWNjb3JkaW9uKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9ucyA9IHRoaXMuYWNjb3JkaW9ucy5maWx0ZXIoKG5leHQpID0+IG5leHQgIT09IGFjY29yZGlvbik7XG4gICAgfVxuXG4gICAgICAgIHRvZ2dsZShhY2NvcmRpb24pIHtcbiAgICAgICAgdmFyIHdhc0FjdGl2ZSA9IGFjY29yZGlvbi5vcGVuZWQ7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9ucy5mb3JFYWNoKChuZXh0KSA9PiBuZXh0LmNsb3NlKCkpO1xuXG4gICAgICAgIGlmICghd2FzQWN0aXZlKSB7XG4gICAgICAgICAgICBhY2NvcmRpb24ub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IFNjQWNjb3JkaW9uQW5pbWF0aW9uIGZyb20gJy4vYWNjb3JkaW9uLWFuaW1hdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IFNjQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBmcm9tICcuL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgU2NBY2NvcmRpb25Db21wb25lbnQgZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcblxuKCgpID0+IHtcbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ3RhbGVuZC5zdW5jaG9rZS5hY2NvcmRpb24nLCBbJ25nQW5pbWF0ZSddKVxuICAgICAgICAuZGlyZWN0aXZlKCdzY0FjY29yZGlvbkFuaW1hdGlvbicsIFNjQWNjb3JkaW9uQW5pbWF0aW9uKVxuICAgICAgICAuY29tcG9uZW50KCdzY0FjY29yZGlvbkl0ZW0nLCBTY0FjY29yZGlvbkl0ZW1Db21wb25lbnQpXG4gICAgICAgIC5jb21wb25lbnQoJ3NjQWNjb3JkaW9uJywgU2NBY2NvcmRpb25Db21wb25lbnQpO1xufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLmpzXG4gKiovIiwiaW1wb3J0IFNjU3BsaXR0ZXJDdHJsIGZyb20gJy4vc3BsaXR0ZXIuY29udHJvbGxlci5qcyc7XG5cbmNvbnN0IFNjU3BsaXR0ZXJDb21wb25lbnQgPSB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic3BsaXQtY29udGFpbmVyIHt7OjokY3RybC5vcmllbnRhdGlvbn19XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1maXJzdC1wYW5lXCIgbmctdHJhbnNjbHVkZT1cInNwbGl0LWZpcnN0LXBhbmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1oYW5kbGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXItc3F1YXJlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXQtaGFuZGxlci1zcXVhcmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1oYW5kbGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXItc3F1YXJlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXQtaGFuZGxlci1zcXVhcmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1oYW5kbGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LXNlY29uZC1wYW5lXCIgbmctdHJhbnNjbHVkZT1cInNwbGl0LXNlY29uZC1wYW5lXCI+PC9kaXY+XG4gICAgPC9kaXY+YCxcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBvcmllbnRhdGlvbjogJ0AnLFxuICAgICAgICBtaW5TaXplOiAnQCdcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHtcbiAgICAgICAgJ3NwbGl0LWZpcnN0LXBhbmUnOiAnc2NTcGxpdEZpcnN0UGFuZScsXG4gICAgICAgICdzcGxpdC1zZWNvbmQtcGFuZSc6ICdzY1NwbGl0U2Vjb25kUGFuZSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFNjU3BsaXR0ZXJDdHJsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY1NwbGl0dGVyQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc3BsaXR0ZXIvc3BsaXR0ZXIuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NTcGxpdHRlckN0cmwge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICR3aW5kb3cpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcbiAgICAgICAgdGhpcy5kcmFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB9XG5cbiAgICAkb25Jbml0KCkge1xuICAgICAgICB0aGlzLmluaXRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmF0dGFjaExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGluaXRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5taW5TaXplID0gK3RoaXMubWluU2l6ZSB8fCAyNTY7XG4gICAgICAgIHRoaXMuc3BsaXRDb250YWluZXIgPSB0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJy5zcGxpdC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5maXJzdFBhbmUgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy4kZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcuc3BsaXQtZmlyc3QtcGFuZScpKTtcbiAgICAgICAgdGhpcy5zcGxpdEhhbmRsZXIgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy4kZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcuc3BsaXQtaGFuZGxlcicpKTtcbiAgICAgICAgdGhpcy5zZWNvbmRQYW5lID0gYW5ndWxhci5lbGVtZW50KHRoaXMuJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLnNwbGl0LXNlY29uZC1wYW5lJykpO1xuICAgIH1cblxuICAgIGF0dGFjaExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNwbGl0SGFuZGxlci5vbignbW91c2Vkb3duJywgKCkgPT4gdGhpcy5kcmFnID0gdHJ1ZSk7XG5cbiAgICAgICAgY29uc3Qgb25tb3VzZXVwID0gKCkgPT4gdGhpcy5kcmFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2luZG93RWxlbWVudC5vbignbW91c2V1cCcsIG9ubW91c2V1cCk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHRoaXMud2luZG93RWxlbWVudC5vZmYoJ21vdXNldXAnLCBvbm1vdXNldXApKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaXplKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuc3BsaXRDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRIYW5kbGVyU2l6ZSA9IHRoaXMuc3BsaXRIYW5kbGVyU2l6ZSB8fCB0aGlzLnNwbGl0SGFuZGxlclswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBldmVudC5jbGllbnRZIC0gYm91bmRzLnRvcCAtIHRoaXMuc3BsaXRIYW5kbGVyU2l6ZSAvIDI7XG5cbiAgICAgICAgICAgIGlmIChwb3MgPCB0aGlzLm1pblNpemUgfHwgcG9zID4gYm91bmRzLmhlaWdodCAtIHRoaXMubWluU2l6ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5maXJzdFBhbmUuY3NzKCdib3R0b20nLCAoYm91bmRzLmhlaWdodCAtIHBvcykgKyAncHgnKTtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRIYW5kbGVyLmNzcygndG9wJywgcG9zICsgJ3B4Jyk7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFBhbmUuY3NzKCd0b3AnLCAocG9zICsgdGhpcy5zcGxpdEhhbmRsZXJTaXplKSArICdweCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGxpdEhhbmRsZXJTaXplID0gdGhpcy5zcGxpdEhhbmRsZXJTaXplIHx8IHRoaXMuc3BsaXRIYW5kbGVyWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gZXZlbnQuY2xpZW50WCAtIGJvdW5kcy5sZWZ0IC0gdGhpcy5zcGxpdEhhbmRsZXJTaXplIC8gMjtcblxuICAgICAgICAgICAgaWYgKHBvcyA8IHRoaXMubWluU2l6ZSB8fCBwb3MgPiBib3VuZHMud2lkdGggLSB0aGlzLm1pblNpemUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZmlyc3RQYW5lLmNzcygncmlnaHQnLCAoYm91bmRzLndpZHRoIC0gcG9zKSArICdweCcpO1xuICAgICAgICAgICAgdGhpcy5zcGxpdEhhbmRsZXIuY3NzKCdsZWZ0JywgcG9zICsgJ3B4Jyk7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFBhbmUuY3NzKCdsZWZ0JywgKHBvcyArIHRoaXMuc3BsaXRIYW5kbGVyU2l6ZSkgKyAncHgnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NwbGl0dGVyL3NwbGl0dGVyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgU2NTcGxpdHRlckNvbXBvbmVudCBmcm9tICcuL3NwbGl0dGVyLmNvbXBvbmVudC5qcyc7XG5cbigoKSA9PiB7XG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCd0YWxlbmQuc3VuY2hva2Uuc3BsaXR0ZXInLCBbXSlcbiAgICAgICAgLmNvbXBvbmVudCgnc2NTcGxpdHRlcicsIFNjU3BsaXR0ZXJDb21wb25lbnQpO1xufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NwbGl0dGVyL3NwbGl0dGVyLm1vZHVsZS5qc1xuICoqLyIsImltcG9ydCBTY1RhYnNJdGVtQ3RybCBmcm9tICcuL3RhYnMtaXRlbS5jb250cm9sbGVyJztcblxuY29uc3QgU2NUYWJzSXRlbUNvbXBvbmVudCA9IHtcbiAgICB0ZW1wbGF0ZTogYDxuZy10cmFuc2NsdWRlIG5nLWlmPVwiJGN0cmwuYWN0aXZlXCI+PC9uZy10cmFuc2NsdWRlPmAsXG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgdGFiVGl0bGU6ICdAJyxcbiAgICAgICAgaXNEZWZhdWx0OiAnPCdcbiAgICB9LFxuICAgIHJlcXVpcmU6IHtcbiAgICAgICAgdGFic0N0cmw6ICdeXnNjVGFicydcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgY29udHJvbGxlcjogU2NUYWJzSXRlbUN0cmxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjVGFic0l0ZW1Db21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMtaXRlbS5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY1RhYnNJdGVtQ3RybCB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIH1cblxuICAgICRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGFic0N0cmwucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCkge1xuICAgICAgICAgICAgdGhpcy50YWJzQ3RybC5zZWxlY3QodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4gdGhpcy50YWJzQ3RybC51bnJlZ2lzdGVyKHRoaXMpKTtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMtaXRlbS5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IFNjVGFic0N0cmwgZnJvbSAnLi90YWJzLmNvbnRyb2xsZXInO1xuXG5jb25zdCBTY1RhYnNDb21wb25lbnQgPSB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsIGNsYXNzPVwidGFic1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwidGFicy1oZWFkZXJcIiBuZy1jbGFzcz1cInthY3RpdmUgOiB0YWIuYWN0aXZlfVwiIG5nLXJlcGVhdD1cInRhYiBpbiAkY3RybC50YWJzIHRyYWNrIGJ5ICRpbmRleFwiIG5nLWNsaWNrPVwiJGN0cmwuc2VsZWN0KHRhYilcIj5cbiAgICAgICAgICAgICAgICB7e3RhYi50YWJUaXRsZX19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG4gICAgYCxcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBzZWxlY3RlZFRhYjogJzwnLFxuICAgICAgICBvblRhYkNoYW5nZTogJyYnXG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIGNvbnRyb2xsZXI6IFNjVGFic0N0cmxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjVGFic0NvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY1RhYnNDdHJsIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMgPSBbXTtcbiAgICB9XG5cbiAgICAkb25Jbml0KCkge1xuICAgICAgICB0aGlzLiRzY29wZS4kd2F0Y2goXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICAgICAgKGluZGV4KSA9PiB0aGlzLnNldFNlbGVjdGVkVGFiKGluZGV4KVxuICAgICAgICApO1xuICAgIH1cblxuICAgICAgICByZWdpc3Rlcih0YWIpIHtcbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgfVxuXG4gICAgICAgIHNlbGVjdCh0YWIpIHtcbiAgICAgICAgdGhpcy50YWJzLmZvckVhY2goKHRhYlRvRGVhY3RpdmF0ZSkgPT4ge1xuICAgICAgICAgICAgdGFiVG9EZWFjdGl2YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMub25UYWJDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRUYWIoaW5kZXgpIHtcbiAgICAgICAgdmFyIHRhYlRvU2VsZWN0ID0gdGhpcy50YWJzW2luZGV4XTtcbiAgICAgICAgaWYgKHRhYlRvU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdCh0YWJUb1NlbGVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgdW5yZWdpc3Rlcih0YWIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICAgICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgU2NUYWJzQ29tcG9uZW50IGZyb20gJy4vdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IFNjVGFic0l0ZW1Db21wb25lbnQgZnJvbSAnLi90YWJzLWl0ZW0uY29tcG9uZW50JztcblxuKCgpID0+IHtcbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ3RhbGVuZC5zdW5jaG9rZS50YWJzJywgW10pXG4gICAgICAgIC5jb21wb25lbnQoJ3NjVGFic0l0ZW0nLCBTY1RhYnNJdGVtQ29tcG9uZW50KVxuICAgICAgICAuY29tcG9uZW50KCdzY1RhYnMnLCBTY1RhYnNDb21wb25lbnQpO1xufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGUuanNcbiAqKi8iLCIoKCkgPT4ge1xuICAgIGFuZ3VsYXIubW9kdWxlKCd0YWxlbmQuc3VuY2hva2UnLCBbXG4gICAgICAgICd0YWxlbmQuc3VuY2hva2UuYWNjb3JkaW9uJyxcbiAgICAgICAgJ3RhbGVuZC5zdW5jaG9rZS5zcGxpdHRlcicsXG4gICAgICAgICd0YWxlbmQuc3VuY2hva2UudGFicydcbiAgICBdKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3VuY2hva2UubW9kdWxlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==