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
		"./components/dropdown-menu/dropdown-menu.module.js": 11,
		"./components/dropdown/dropdown.module.js": 14,
		"./components/splitter/splitter.module.js": 17,
		"./components/tabs/tabs.module.js": 22,
		"./sunchoke.module.js": 23
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
	
	var _dropdownMenuController = __webpack_require__(10);
	
	var _dropdownMenuController2 = _interopRequireDefault(_dropdownMenuController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScDropdownMenuComponent = {
	    template: '\n        <div class="sc-dropdown-menu-trigger"\n             ng-class="{opened:$ctrl.visible}"\n             ng-click="$ctrl.toggleMenu()"\n             ng-transclude="sc-dropdown-menu-trigger">\n        </div>\n        <div class="sc-dropdown-menu-dropdown"\n             ng-if="$ctrl.visible"\n             ng-click="$ctrl.toggleMenu()"\n             ng-transclude="sc-dropdown-menu-dropdown">\n        </div>\n    ',
	    transclude: {
	        'sc-dropdown-menu-trigger': '?scDropdownMenuTrigger',
	        'sc-dropdown-menu-dropdown': '?scDropdownMenuDropdown'
	    },
	    controller: _dropdownMenuController2.default
	};
	
	exports.default = ScDropdownMenuComponent;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScDropdownMenuCtrl = function () {
	    ScDropdownMenuCtrl.$inject = ["$scope", "$element", "$document", "$timeout"];
	    function ScDropdownMenuCtrl($scope, $element, $document, $timeout) {
	        'ngInject';
	
	        _classCallCheck(this, ScDropdownMenuCtrl);
	
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$timeout = $timeout;
	        this.bodyElement = angular.element($document[0].body);
	
	        this._hideMenu = this._hideMenu.bind(this);
	        this.visible = false;
	    }
	
	    _createClass(ScDropdownMenuCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.bodyElement.on('mousedown', this._hideMenu);
	            this.$element.on('mousedown', function (e) {
	                return e.stopPropagation();
	            });
	        }
	    }, {
	        key: '$onDestroy',
	        value: function $onDestroy() {
	            this.bodyElement.off('mousedown', this._hideMenu);
	        }
	    }, {
	        key: 'toggleMenu',
	        value: function toggleMenu() {
	            this.visible = !this.visible;
	        }
	    }, {
	        key: '_hideMenu',
	        value: function _hideMenu() {
	            var _this = this;
	
	            this.$timeout(function () {
	                return _this.visible = false;
	            });
	        }
	    }]);
	
	    return ScDropdownMenuCtrl;
	}();
	
	exports.default = ScDropdownMenuCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	var _dropdownMenuComponent = __webpack_require__(9);
	
	var _dropdownMenuComponent2 = _interopRequireDefault(_dropdownMenuComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	        angular.module('talend.sunchoke.dropdown-menu', []).component('scDropdownMenu', _dropdownMenuComponent2.default);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dropdownController = __webpack_require__(13);
	
	var _dropdownController2 = _interopRequireDefault(_dropdownController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScDropdownComponent = {
	    template: '\n        <div class="sc-dropdown-trigger"\n             ng-click="$ctrl.toggleMenu()"\n             ng-transclude="sc-dropdown-trigger">\n        </div>\n        <div class="sc-dropdown-content"\n             ng-click="$ctrl.onMenuClick($event)"\n             ng-transclude="sc-dropdown-content">\n        </div>\n    ',
	    bindings: {
	        closeOnSelect: '<',
	        onOpen: '&',
	        side: '@'
	    },
	    transclude: {
	        'sc-dropdown-trigger': 'scDropdownTrigger',
	        'sc-dropdown-content': 'scDropdownContent'
	    },
	    controller: _dropdownController2.default
	};
	
	exports.default = ScDropdownComponent;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CARRET_HEIGHT = 5;
	var VISIBILITY_CLASS = 'show';
	
	var ScDropdownCtrl = function () {
	    ScDropdownCtrl.$inject = ["$window", "$element", "$timeout", "$document"];
	    function ScDropdownCtrl($window, $element, $timeout, $document) {
	        'ngInject';
	
	        _classCallCheck(this, ScDropdownCtrl);
	
	        this.$element = $element;
	        this.$timeout = $timeout;
	
	        this.body = angular.element($document[0].body);
	        this.window = angular.element($window);
	        this.visible = false;
	
	        this._escHideContent = this._escHideContent.bind(this);
	        this._hideContent = this._hideContent.bind(this);
	        this._showContent = this._showContent.bind(this);
	        this._positionContent = this._positionContent.bind(this);
	    }
	
	    _createClass(ScDropdownCtrl, [{
	        key: '$postLink',
	        value: function $postLink() {
	            this.trigger = this.$element.children().eq(0);
	            this.content = this.$element.children().eq(1);
	            this.content.on('mousedown', function (e) {
	                return e.stopPropagation();
	            });
	        }
	    }, {
	        key: '$onDestroy',
	        value: function $onDestroy() {
	            this._removeListeners();
	        }
	    }, {
	        key: '_attachListeners',
	        value: function _attachListeners() {
	            this.body.on('mousedown', this._hideContent);
	            this.body.on('keydown', this._escHideContent);
	            this.window.on('resize', this._positionContent);
	            this.window.on('scroll', this._positionContent);
	        }
	    }, {
	        key: '_removeListeners',
	        value: function _removeListeners() {
	            this.body.off('mousedown', this._hideContent);
	            this.body.off('keydown', this._escHideContent);
	            this.window.off('resize', this._positionContent);
	            this.window.off('scroll', this._positionContent);
	        }
	    }, {
	        key: '_escHideContent',
	        value: function _escHideContent(event) {
	            if (event.keyCode === 27) {
	                this._hideContent();
	            }
	        }
	    }, {
	        key: '_hideContent',
	        value: function _hideContent() {
	            this.visible = false;
	            this.$element.removeClass(VISIBILITY_CLASS);
	            this._removeListeners();
	        }
	    }, {
	        key: '_showContent',
	        value: function _showContent() {
	            this.visible = true;
	            this.onOpen();
	            this.$element.addClass(VISIBILITY_CLASS);
	            this._positionContent();
	            this._attachListeners();
	        }
	    }, {
	        key: 'onMenuClick',
	        value: function onMenuClick() {
	            if (this.closeOnSelect !== false) {
	                this._hideContent();
	            }
	        }
	    }, {
	        key: 'toggleMenu',
	        value: function toggleMenu() {
	            this.visible ? this._hideContent() : this._showContent();
	        }
	    }, {
	        key: '_alignMenuRight',
	        value: function _alignMenuRight(position) {
	            this.content.addClass('right');
	            this.content.css('right', '' + (this.window[0].innerWidth - position.right) + 'px');
	            this.content.css('left', 'auto');
	        }
	    }, {
	        key: '_alignMenuLeft',
	        value: function _alignMenuLeft(position) {
	            this.content.removeClass('right');
	            this.content.css('left', '' + position.left + 'px');
	            this.content.css('right', 'auto');
	        }
	    }, {
	        key: '_positionHorizontalMenu',
	        value: function _positionHorizontalMenu() {
	            var position = this.$element[0].getBoundingClientRect();
	            switch (this.side) {
	                case 'left':
	                    this._alignMenuLeft(position);
	                    break;
	                case 'right':
	                    this._alignMenuRight(position);
	                    break;
	                default:
	                    {
	                        this._alignMenuRight(position);
	                        var menuPosition = this.content[0].getBoundingClientRect();
	                        if (menuPosition.left < 0) {
	                            this._alignMenuLeft(position);
	                        }
	                    }
	            }
	        }
	    }, {
	        key: '_positionVerticalMenu',
	        value: function _positionVerticalMenu() {
	            var positionAction = this.trigger[0].getBoundingClientRect();
	            var positionMenu = this.content[0].getBoundingClientRect();
	            var menuTopPosition = positionAction.bottom + CARRET_HEIGHT;
	
	            if (positionAction.bottom + positionMenu.height + CARRET_HEIGHT > this.window[0].innerHeight) {
	                menuTopPosition = positionAction.top - CARRET_HEIGHT - positionMenu.height;
	                this.content.addClass('top');
	            } else {
	                this.content.removeClass('top');
	            }
	            this.content.css('top', menuTopPosition + 'px');
	        }
	    }, {
	        key: '_positionContent',
	        value: function _positionContent() {
	            this._positionHorizontalMenu();
	            this._positionVerticalMenu();
	        }
	    }]);
	
	    return ScDropdownCtrl;
	}();
	
	exports.default = ScDropdownCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	var _dropdownComponent = __webpack_require__(12);
	
	var _dropdownComponent2 = _interopRequireDefault(_dropdownComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	        angular.module('talend.sunchoke.dropdown', []).component('scDropdown', _dropdownComponent2.default);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _splitterController = __webpack_require__(16);
	
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
/* 16 */
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
	        this.window = angular.element($window);
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
	
	            var startDrag = function startDrag() {
	                _this.drag = true;
	            };
	            var stopDrag = function stopDrag() {
	                _this.drag = false;
	            };
	
	            this.$element.on('mousemove', function (event) {
	                if (!_this.drag) {
	                    return;
	                }
	                event.preventDefault();
	                _this.updateSize(event);
	            });
	
	            this.splitHandler.on('mousedown', startDrag);
	            this.window.on('mouseup', stopDrag);
	            this.$scope.$on('$destroy', function () {
	                return _this.window.off('mouseup', stopDrag);
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
	                var _pos = event.clientX - bounds.left - this.splitHandlerSize / 2;
	
	                if (_pos < this.minSize || _pos > bounds.width - this.minSize) {
	                    return;
	                }
	
	                this.firstPane.css('right', bounds.width - _pos + 'px');
	                this.splitHandler.css('left', _pos + 'px');
	                this.secondPane.css('left', _pos + this.splitHandlerSize + 'px');
	            }
	        }
	    }]);
	
	    return ScSplitterCtrl;
	}();
	
	exports.default = ScSplitterCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	var _splitterComponent = __webpack_require__(15);
	
	var _splitterComponent2 = _interopRequireDefault(_splitterComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	        angular.module('talend.sunchoke.splitter', []).component('scSplitter', _splitterComponent2.default);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tabsItem = __webpack_require__(19);
	
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tabs = __webpack_require__(21);
	
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	var _tabs = __webpack_require__(20);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tabsItem = __webpack_require__(18);
	
	var _tabsItem2 = _interopRequireDefault(_tabsItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	        angular.module('talend.sunchoke.tabs', []).component('scTabsItem', _tabsItem2.default).component('scTabs', _tabs2.default);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	(function () {
	    angular.module('talend.sunchoke', ['talend.sunchoke.accordion', 'talend.sunchoke.dropdown', 'talend.sunchoke.dropdown-menu', 'talend.sunchoke.splitter', 'talend.sunchoke.tabs']);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzZjNjYwOTI4YzZkM2I0N2U0N2MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYyBcXC5tb2R1bGVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy53ZWJwYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24tYW5pbWF0aW9uLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NwbGl0dGVyL3NwbGl0dGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NwbGl0dGVyL3NwbGl0dGVyLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMtaXRlbS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLWl0ZW0uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1bmNob2tlLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLG9COzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FD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QixJQUN0QyxVQUFVLGNBRFgsb0JBRUMsVUFBVSxVQUZYOzs7Ozs7OztBQ0pSOztBQUFBLEVBQUMsWUFBTTtLQUNILFFBQVEsT0FBTyxtQkFBbUIsQ0FDOUIsNkJBQ0EsNEJBQ0EsaUNBQ0EsNEJBQ0EiLCJmaWxlIjoic3VuY2hva2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZTtcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZToge30sXG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZSwgbW9kdWxlLCBtb2R1bGUuZSwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5lO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3NmM2NjA5MjhjNmQzYjQ3ZTQ3Y1xuICoqLyIsIm1vZHVsZS5lID0gYW5ndWxhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUuanNcIjogOCxcblx0XCIuL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51Lm1vZHVsZS5qc1wiOiAxMSxcblx0XCIuL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmpzXCI6IDE0LFxuXHRcIi4vY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5tb2R1bGUuanNcIjogMTcsXG5cdFwiLi9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGUuanNcIjogMjIsXG5cdFwiLi9zdW5jaG9rZS5tb2R1bGUuanNcIjogMjNcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5lID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjIFxcLm1vZHVsZVxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuL3NyYycsIHRydWUsIC9cXC5tb2R1bGVcXC5qcyQvKTtcbmNvbnRleHQua2V5cygpLmZvckVhY2goY29udGV4dCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzLndlYnBhY2suanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCAoJGFuaW1hdGUpID0+IHtcbiAgICAnbmdJbmplY3QnO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgJ29wZW5pbmcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogeyBoZWlnaHQ6IGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0ICsgJ3B4JyB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ29wZW5pbmcnKS5hZGRDbGFzcygnb3BlbicpLmNzcygnaGVpZ2h0JywgJycpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgJ2Nsb3NpbmcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiB7IGhlaWdodDogZWxlbWVudFswXS5zY3JvbGxIZWlnaHQgKyAncHgnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogeyBoZWlnaHQ6ICcwJyB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Nsb3NpbmcnKS5yZW1vdmVDbGFzcygnb3BlbicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLnNjQWNjb3JkaW9uQW5pbWF0aW9uLCAoaXNPcGVuZWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihpc09wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi1hbmltYXRpb24uZGlyZWN0aXZlLmpzXG4gKiovIiwiaW1wb3J0IFNjQWNjb3JkaW9uSXRlbUN0cmwgZnJvbSAnLi9hY2NvcmRpb24taXRlbS5jb250cm9sbGVyJztcblxuY29uc3QgU2NBY2NvcmRpb25JdGVtQ29tcG9uZW50ID0ge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgPGxpIGNsYXNzPVwic2MtYWNjb3JkaW9uXCIgbmctY2xhc3M9XCJ7b3BlbjogJGN0cmwub3BlbmVkfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHJpZ2dlci1jb250YWluZXJcIiBuZy10cmFuc2NsdWRlPVwidHJpZ2dlclwiIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlKClcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCIgbmctdHJhbnNjbHVkZT1cImNvbnRlbnRcIiBzYy1hY2NvcmRpb24tYW5pbWF0aW9uPVwiJGN0cmwub3BlbmVkXCI+PC9kaXY+XG4gICAgPC9saT5cbiAgICBgLFxuICAgIHRyYW5zY2x1ZGU6IHtcbiAgICAgICAgdHJpZ2dlcjogJ3RyaWdnZXInLFxuICAgICAgICBjb250ZW50OiAnP2NvbnRlbnQnXG4gICAgfSxcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBvbk9wZW46ICcmJyxcbiAgICAgICAgZGVmYXVsdDogJzwnXG4gICAgfSxcbiAgICByZXF1aXJlOiB7XG4gICAgICAgIHBhcmVudDogJ15ec2NBY2NvcmRpb24nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBTY0FjY29yZGlvbkl0ZW1DdHJsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY0FjY29yZGlvbkl0ZW1Db21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NBY2NvcmRpb25JdGVtQ3RybCB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAkb25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgdGhpcy4kc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHRoaXMucGFyZW50LnVucmVnaXN0ZXIodGhpcykpO1xuXG4gICAgICAgIGlmKHRoaXMuZGVmYXVsdCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnRvZ2dsZSh0aGlzKTtcbiAgICB9XG5cbiAgICAgICAgb3BlbigpIHtcbiAgICAgICAgaWYodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgfVxuXG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IFNjQWNjb3JkaW9uQ3RybCBmcm9tICcuL2FjY29yZGlvbi5jb250cm9sbGVyJztcblxuY29uc3QgU2NBY2NvcmRpb25Db21wb25lbnQgPSB7XG4gICAgdGVtcGxhdGU6IGA8dWwgbmctdHJhbnNjbHVkZT48L3VsPmAsXG4gICAgY29udHJvbGxlcjogU2NBY2NvcmRpb25DdHJsLFxuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjQWNjb3JkaW9uQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY0FjY29yZGlvbkN0cmwge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25zID0gW107XG4gICAgfVxuXG4gICAgICAgIHJlZ2lzdGVyKGFjY29yZGlvbikge1xuICAgICAgICB0aGlzLmFjY29yZGlvbnMucHVzaChhY2NvcmRpb24pO1xuICAgIH1cblxuICAgICAgICB1bnJlZ2lzdGVyKGFjY29yZGlvbikge1xuICAgICAgICB0aGlzLmFjY29yZGlvbnMgPSB0aGlzLmFjY29yZGlvbnMuZmlsdGVyKChuZXh0KSA9PiBuZXh0ICE9PSBhY2NvcmRpb24pO1xuICAgIH1cblxuICAgICAgICB0b2dnbGUoYWNjb3JkaW9uKSB7XG4gICAgICAgIHZhciB3YXNBY3RpdmUgPSBhY2NvcmRpb24ub3BlbmVkO1xuICAgICAgICB0aGlzLmFjY29yZGlvbnMuZm9yRWFjaCgobmV4dCkgPT4gbmV4dC5jbG9zZSgpKTtcblxuICAgICAgICBpZiAoIXdhc0FjdGl2ZSkge1xuICAgICAgICAgICAgYWNjb3JkaW9uLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBTY0FjY29yZGlvbkFuaW1hdGlvbiBmcm9tICcuL2FjY29yZGlvbi1hbmltYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCBTY0FjY29yZGlvbkl0ZW1Db21wb25lbnQgZnJvbSAnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IFNjQWNjb3JkaW9uQ29tcG9uZW50IGZyb20gJy4vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5cbigoKSA9PiB7XG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCd0YWxlbmQuc3VuY2hva2UuYWNjb3JkaW9uJywgWyduZ0FuaW1hdGUnXSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnc2NBY2NvcmRpb25BbmltYXRpb24nLCBTY0FjY29yZGlvbkFuaW1hdGlvbilcbiAgICAgICAgLmNvbXBvbmVudCgnc2NBY2NvcmRpb25JdGVtJywgU2NBY2NvcmRpb25JdGVtQ29tcG9uZW50KVxuICAgICAgICAuY29tcG9uZW50KCdzY0FjY29yZGlvbicsIFNjQWNjb3JkaW9uQ29tcG9uZW50KTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS5qc1xuICoqLyIsImltcG9ydCBTY0Ryb3Bkb3duTWVudUN0cmwgZnJvbSAnLi9kcm9wZG93bi1tZW51LmNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBTY0Ryb3Bkb3duTWVudUNvbXBvbmVudCA9IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2MtZHJvcGRvd24tbWVudS10cmlnZ2VyXCJcbiAgICAgICAgICAgICBuZy1jbGFzcz1cIntvcGVuZWQ6JGN0cmwudmlzaWJsZX1cIlxuICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlTWVudSgpXCJcbiAgICAgICAgICAgICBuZy10cmFuc2NsdWRlPVwic2MtZHJvcGRvd24tbWVudS10cmlnZ2VyXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2MtZHJvcGRvd24tbWVudS1kcm9wZG93blwiXG4gICAgICAgICAgICAgbmctaWY9XCIkY3RybC52aXNpYmxlXCJcbiAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZU1lbnUoKVwiXG4gICAgICAgICAgICAgbmctdHJhbnNjbHVkZT1cInNjLWRyb3Bkb3duLW1lbnUtZHJvcGRvd25cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICB0cmFuc2NsdWRlOiB7XG4gICAgICAgICdzYy1kcm9wZG93bi1tZW51LXRyaWdnZXInOiAnP3NjRHJvcGRvd25NZW51VHJpZ2dlcicsXG4gICAgICAgICdzYy1kcm9wZG93bi1tZW51LWRyb3Bkb3duJzogJz9zY0Ryb3Bkb3duTWVudURyb3Bkb3duJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogU2NEcm9wZG93bk1lbnVDdHJsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY0Ryb3Bkb3duTWVudUNvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY0Ryb3Bkb3duTWVudUN0cmwge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRkb2N1bWVudCwgJHRpbWVvdXQpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuYm9keUVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoJGRvY3VtZW50WzBdLmJvZHkpO1xuXG4gICAgICAgIHRoaXMuX2hpZGVNZW51ID0gdGhpcy5faGlkZU1lbnUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5ib2R5RWxlbWVudC5vbignbW91c2Vkb3duJywgdGhpcy5faGlkZU1lbnUpO1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XG4gICAgfVxuXG4gICAgJG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ib2R5RWxlbWVudC5vZmYoJ21vdXNlZG93bicsIHRoaXMuX2hpZGVNZW51KTtcbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgIH1cblxuICAgIF9oaWRlTWVudSgpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB0aGlzLnZpc2libGUgPSBmYWxzZSk7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgU2NEcm9wZG93bk1lbnVDb21wb25lbnQgZnJvbSAnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5qcyc7XG5cbigoKSA9PiB7XG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCd0YWxlbmQuc3VuY2hva2UuZHJvcGRvd24tbWVudScsIFtdKVxuICAgICAgICAuY29tcG9uZW50KCdzY0Ryb3Bkb3duTWVudScsIFNjRHJvcGRvd25NZW51Q29tcG9uZW50KTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUubW9kdWxlLmpzXG4gKiovIiwiaW1wb3J0IFNjRHJvcGRvd25DdHJsIGZyb20gJy4vZHJvcGRvd24uY29udHJvbGxlci5qcyc7XG5cbmNvbnN0IFNjRHJvcGRvd25Db21wb25lbnQgPSB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNjLWRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlTWVudSgpXCJcbiAgICAgICAgICAgICBuZy10cmFuc2NsdWRlPVwic2MtZHJvcGRvd24tdHJpZ2dlclwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjLWRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwub25NZW51Q2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgbmctdHJhbnNjbHVkZT1cInNjLWRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBjbG9zZU9uU2VsZWN0OiAnPCcsXG4gICAgICAgIG9uT3BlbjogJyYnLFxuICAgICAgICBzaWRlOiAnQCdcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHtcbiAgICAgICAgJ3NjLWRyb3Bkb3duLXRyaWdnZXInOiAnc2NEcm9wZG93blRyaWdnZXInLFxuICAgICAgICAnc2MtZHJvcGRvd24tY29udGVudCc6ICdzY0Ryb3Bkb3duQ29udGVudCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFNjRHJvcGRvd25DdHJsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY0Ryb3Bkb3duQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LmpzXG4gKiovIiwiY29uc3QgQ0FSUkVUX0hFSUdIVCA9IDU7XG5jb25zdCBWSVNJQklMSVRZX0NMQVNTID0gJ3Nob3cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY0Ryb3Bkb3duQ3RybCB7XG4gICAgY29uc3RydWN0b3IoJHdpbmRvdywgJGVsZW1lbnQsICR0aW1lb3V0LCAkZG9jdW1lbnQpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcblxuICAgICAgICB0aGlzLmJvZHkgPSBhbmd1bGFyLmVsZW1lbnQoJGRvY3VtZW50WzBdLmJvZHkpO1xuICAgICAgICB0aGlzLndpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fZXNjSGlkZUNvbnRlbnQgPSB0aGlzLl9lc2NIaWRlQ29udGVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oaWRlQ29udGVudCA9IHRoaXMuX2hpZGVDb250ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3Nob3dDb250ZW50ID0gdGhpcy5fc2hvd0NvbnRlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25Db250ZW50ID0gdGhpcy5fcG9zaXRpb25Db250ZW50LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgJHBvc3RMaW5rKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgxKTtcbiAgICAgICAgdGhpcy5jb250ZW50Lm9uKCdtb3VzZWRvd24nLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XG4gICAgfVxuXG4gICAgJG9uRGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIF9hdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuYm9keS5vbignbW91c2Vkb3duJywgdGhpcy5faGlkZUNvbnRlbnQpO1xuICAgICAgICB0aGlzLmJvZHkub24oJ2tleWRvd24nLCB0aGlzLl9lc2NIaWRlQ29udGVudCk7XG4gICAgICAgIHRoaXMud2luZG93Lm9uKCdyZXNpemUnLCB0aGlzLl9wb3NpdGlvbkNvbnRlbnQpO1xuICAgICAgICB0aGlzLndpbmRvdy5vbignc2Nyb2xsJywgdGhpcy5fcG9zaXRpb25Db250ZW50KTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmJvZHkub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9oaWRlQ29udGVudCk7XG4gICAgICAgIHRoaXMuYm9keS5vZmYoJ2tleWRvd24nLCB0aGlzLl9lc2NIaWRlQ29udGVudCk7XG4gICAgICAgIHRoaXMud2luZG93Lm9mZigncmVzaXplJywgdGhpcy5fcG9zaXRpb25Db250ZW50KTtcbiAgICAgICAgdGhpcy53aW5kb3cub2ZmKCdzY3JvbGwnLCB0aGlzLl9wb3NpdGlvbkNvbnRlbnQpO1xuICAgIH1cblxuICAgXG4gICBcbiAgIFxuXG4gICAgX2VzY0hpZGVDb250ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5faGlkZUNvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oaWRlQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoVklTSUJJTElUWV9DTEFTUyk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIF9zaG93Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhWSVNJQklMSVRZX0NMQVNTKTtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25Db250ZW50KCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIG9uTWVudUNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZUNvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA/IHRoaXMuX2hpZGVDb250ZW50KCkgOiB0aGlzLl9zaG93Q29udGVudCgpO1xuICAgIH1cblxuICAgXG4gICBcbiAgIFxuXG4gICAgX2FsaWduTWVudVJpZ2h0KHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5hZGRDbGFzcygncmlnaHQnKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmNzcygncmlnaHQnLCAnJyArICh0aGlzLndpbmRvd1swXS5pbm5lcldpZHRoICAtIHBvc2l0aW9uLnJpZ2h0KSArICdweCcpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY3NzKCdsZWZ0JywgJ2F1dG8nKTtcbiAgICB9XG5cbiAgICBfYWxpZ25NZW51TGVmdChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgICAgIHRoaXMuY29udGVudC5jc3MoJ2xlZnQnLCAnJyArIHBvc2l0aW9uLmxlZnQgKyAncHgnKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmNzcygncmlnaHQnLCAnYXV0bycpO1xuICAgIH1cblxuICAgIF9wb3NpdGlvbkhvcml6b250YWxNZW51KCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zaWRlKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGlnbk1lbnVMZWZ0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGlnbk1lbnVSaWdodChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWxpZ25NZW51UmlnaHQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVQb3NpdGlvbiA9IHRoaXMuY29udGVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBpZiAobWVudVBvc2l0aW9uLmxlZnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FsaWduTWVudUxlZnQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3NpdGlvblZlcnRpY2FsTWVudSgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25BY3Rpb24gPSB0aGlzLnRyaWdnZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTWVudSA9IHRoaXMuY29udGVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IG1lbnVUb3BQb3NpdGlvbiA9IHBvc2l0aW9uQWN0aW9uLmJvdHRvbSArIENBUlJFVF9IRUlHSFQ7XG5cbiAgICAgICBcbiAgICAgICAgaWYgKChwb3NpdGlvbkFjdGlvbi5ib3R0b20gKyAgcG9zaXRpb25NZW51LmhlaWdodCArIENBUlJFVF9IRUlHSFQpPiB0aGlzLndpbmRvd1swXS5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgbWVudVRvcFBvc2l0aW9uID0gcG9zaXRpb25BY3Rpb24udG9wIC0gQ0FSUkVUX0hFSUdIVCAtIHBvc2l0aW9uTWVudS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2xhc3MoJ3RvcCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNsYXNzKCd0b3AnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRlbnQuY3NzKCd0b3AnLCBtZW51VG9wUG9zaXRpb24gKyAncHgnKTtcbiAgICB9XG5cbiAgICBfcG9zaXRpb25Db250ZW50KCkge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbkhvcml6b250YWxNZW51KCk7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uVmVydGljYWxNZW51KCk7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBTY0Ryb3Bkb3duQ29tcG9uZW50IGZyb20gJy4vZHJvcGRvd24uY29tcG9uZW50LmpzJztcblxuKCgpID0+IHtcbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ3RhbGVuZC5zdW5jaG9rZS5kcm9wZG93bicsIFtdKVxuICAgICAgICAuY29tcG9uZW50KCdzY0Ryb3Bkb3duJywgU2NEcm9wZG93bkNvbXBvbmVudCk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmpzXG4gKiovIiwiaW1wb3J0IFNjU3BsaXR0ZXJDdHJsIGZyb20gJy4vc3BsaXR0ZXIuY29udHJvbGxlci5qcyc7XG5cbmNvbnN0IFNjU3BsaXR0ZXJDb21wb25lbnQgPSB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic3BsaXQtY29udGFpbmVyIHt7OjokY3RybC5vcmllbnRhdGlvbn19XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1maXJzdC1wYW5lXCIgbmctdHJhbnNjbHVkZT1cInNwbGl0LWZpcnN0LXBhbmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1oYW5kbGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXItc3F1YXJlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXQtaGFuZGxlci1zcXVhcmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1oYW5kbGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXItc3F1YXJlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXQtaGFuZGxlci1zcXVhcmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1oYW5kbGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LXNlY29uZC1wYW5lXCIgbmctdHJhbnNjbHVkZT1cInNwbGl0LXNlY29uZC1wYW5lXCI+PC9kaXY+XG4gICAgPC9kaXY+YCxcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBvcmllbnRhdGlvbjogJ0AnLFxuICAgICAgICBtaW5TaXplOiAnQCdcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHtcbiAgICAgICAgJ3NwbGl0LWZpcnN0LXBhbmUnOiAnc2NTcGxpdEZpcnN0UGFuZScsXG4gICAgICAgICdzcGxpdC1zZWNvbmQtcGFuZSc6ICdzY1NwbGl0U2Vjb25kUGFuZSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFNjU3BsaXR0ZXJDdHJsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY1NwbGl0dGVyQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc3BsaXR0ZXIvc3BsaXR0ZXIuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NTcGxpdHRlckN0cmwge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICR3aW5kb3cpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcbiAgICAgICAgdGhpcy5kcmFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICAgICAgdGhpcy53aW5kb3cgPSBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdyk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIH1cblxuICAgICRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgaW5pdEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLm1pblNpemUgPSArdGhpcy5taW5TaXplIHx8IDI1NjtcbiAgICAgICAgdGhpcy5zcGxpdENvbnRhaW5lciA9IHRoaXMuJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLnNwbGl0LWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmZpcnN0UGFuZSA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJy5zcGxpdC1maXJzdC1wYW5lJykpO1xuICAgICAgICB0aGlzLnNwbGl0SGFuZGxlciA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJy5zcGxpdC1oYW5kbGVyJykpO1xuICAgICAgICB0aGlzLnNlY29uZFBhbmUgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy4kZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcuc3BsaXQtc2Vjb25kLXBhbmUnKSk7XG4gICAgfVxuXG4gICAgYXR0YWNoTGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBzdGFydERyYWcgPSAoKSA9PiB7IHRoaXMuZHJhZyA9IHRydWUgfTtcbiAgICAgICAgY29uc3Qgc3RvcERyYWcgPSAoKSA9PiB7IHRoaXMuZHJhZyA9IGZhbHNlIH07XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNwbGl0SGFuZGxlci5vbignbW91c2Vkb3duJywgc3RhcnREcmFnKTtcbiAgICAgICAgdGhpcy53aW5kb3cub24oJ21vdXNldXAnLCBzdG9wRHJhZyk7XG4gICAgICAgIHRoaXMuJHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB0aGlzLndpbmRvdy5vZmYoJ21vdXNldXAnLCBzdG9wRHJhZykpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5zcGxpdENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgdGhpcy5zcGxpdEhhbmRsZXJTaXplID0gdGhpcy5zcGxpdEhhbmRsZXJTaXplIHx8IHRoaXMuc3BsaXRIYW5kbGVyWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGV2ZW50LmNsaWVudFkgLSBib3VuZHMudG9wIC0gdGhpcy5zcGxpdEhhbmRsZXJTaXplIC8gMjtcblxuICAgICAgICAgICAgaWYgKHBvcyA8IHRoaXMubWluU2l6ZSB8fCBwb3MgPiBib3VuZHMuaGVpZ2h0IC0gdGhpcy5taW5TaXplKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZpcnN0UGFuZS5jc3MoJ2JvdHRvbScsIChib3VuZHMuaGVpZ2h0IC0gcG9zKSArICdweCcpO1xuICAgICAgICAgICAgdGhpcy5zcGxpdEhhbmRsZXIuY3NzKCd0b3AnLCBwb3MgKyAncHgnKTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kUGFuZS5jc3MoJ3RvcCcsIChwb3MgKyB0aGlzLnNwbGl0SGFuZGxlclNpemUpICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwbGl0SGFuZGxlclNpemUgPSB0aGlzLnNwbGl0SGFuZGxlclNpemUgfHwgdGhpcy5zcGxpdEhhbmRsZXJbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBldmVudC5jbGllbnRYIC0gYm91bmRzLmxlZnQgLSB0aGlzLnNwbGl0SGFuZGxlclNpemUgLyAyO1xuXG4gICAgICAgICAgICBpZiAocG9zIDwgdGhpcy5taW5TaXplIHx8IHBvcyA+IGJvdW5kcy53aWR0aCAtIHRoaXMubWluU2l6ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5maXJzdFBhbmUuY3NzKCdyaWdodCcsIChib3VuZHMud2lkdGggLSBwb3MpICsgJ3B4Jyk7XG4gICAgICAgICAgICB0aGlzLnNwbGl0SGFuZGxlci5jc3MoJ2xlZnQnLCBwb3MgKyAncHgnKTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kUGFuZS5jc3MoJ2xlZnQnLCAocG9zICsgdGhpcy5zcGxpdEhhbmRsZXJTaXplKSArICdweCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc3BsaXR0ZXIvc3BsaXR0ZXIuY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBTY1NwbGl0dGVyQ29tcG9uZW50IGZyb20gJy4vc3BsaXR0ZXIuY29tcG9uZW50LmpzJztcblxuKCgpID0+IHtcbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ3RhbGVuZC5zdW5jaG9rZS5zcGxpdHRlcicsIFtdKVxuICAgICAgICAuY29tcG9uZW50KCdzY1NwbGl0dGVyJywgU2NTcGxpdHRlckNvbXBvbmVudCk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc3BsaXR0ZXIvc3BsaXR0ZXIubW9kdWxlLmpzXG4gKiovIiwiaW1wb3J0IFNjVGFic0l0ZW1DdHJsIGZyb20gJy4vdGFicy1pdGVtLmNvbnRyb2xsZXInO1xuXG5jb25zdCBTY1RhYnNJdGVtQ29tcG9uZW50ID0ge1xuICAgIHRlbXBsYXRlOiBgPG5nLXRyYW5zY2x1ZGUgbmctaWY9XCIkY3RybC5hY3RpdmVcIj48L25nLXRyYW5zY2x1ZGU+YCxcbiAgICBiaW5kaW5nczoge1xuICAgICAgICB0YWJUaXRsZTogJ0AnLFxuICAgICAgICBpc0RlZmF1bHQ6ICc8J1xuICAgIH0sXG4gICAgcmVxdWlyZToge1xuICAgICAgICB0YWJzQ3RybDogJ15ec2NUYWJzJ1xuICAgIH0sXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICBjb250cm9sbGVyOiBTY1RhYnNJdGVtQ3RybFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NUYWJzSXRlbUNvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy1pdGVtLmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjVGFic0l0ZW1DdHJsIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50YWJzQ3RybC5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnRhYnNDdHJsLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB0aGlzLnRhYnNDdHJsLnVucmVnaXN0ZXIodGhpcykpO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy1pdGVtLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgU2NUYWJzQ3RybCBmcm9tICcuL3RhYnMuY29udHJvbGxlcic7XG5cbmNvbnN0IFNjVGFic0NvbXBvbmVudCA9IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dWwgY2xhc3M9XCJ0YWJzXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ0YWJzLWhlYWRlclwiIG5nLWNsYXNzPVwie2FjdGl2ZSA6IHRhYi5hY3RpdmV9XCIgbmctcmVwZWF0PVwidGFiIGluICRjdHJsLnRhYnMgdHJhY2sgYnkgJGluZGV4XCIgbmctY2xpY2s9XCIkY3RybC5zZWxlY3QodGFiKVwiPlxuICAgICAgICAgICAgICAgIHt7dGFiLnRhYlRpdGxlfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cbiAgICBgLFxuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHNlbGVjdGVkVGFiOiAnPCcsXG4gICAgICAgIG9uVGFiQ2hhbmdlOiAnJidcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgY29udHJvbGxlcjogU2NUYWJzQ3RybFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NUYWJzQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjVGFic0N0cmwge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcblxuICAgICAgICAgICAgICAgIHRoaXMudGFicyA9IFtdO1xuICAgIH1cblxuICAgICRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLiR3YXRjaChcbiAgICAgICAgICAgICgpID0+IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgICAgICAoaW5kZXgpID0+IHRoaXMuc2V0U2VsZWN0ZWRUYWIoaW5kZXgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgICAgIHJlZ2lzdGVyKHRhYikge1xuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YWJzLnB1c2godGFiKTtcbiAgICB9XG5cbiAgICAgICAgc2VsZWN0KHRhYikge1xuICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiVG9EZWFjdGl2YXRlKSA9PiB7XG4gICAgICAgICAgICB0YWJUb0RlYWN0aXZhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblRhYkNoYW5nZSgpO1xuICAgIH1cblxuICAgICAgICBzZXRTZWxlY3RlZFRhYihpbmRleCkge1xuICAgICAgICB2YXIgdGFiVG9TZWxlY3QgPSB0aGlzLnRhYnNbaW5kZXhdO1xuICAgICAgICBpZiAodGFiVG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRhYlRvU2VsZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICB1bnJlZ2lzdGVyKHRhYikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xuICAgICAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMuY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBTY1RhYnNDb21wb25lbnQgZnJvbSAnLi90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgU2NUYWJzSXRlbUNvbXBvbmVudCBmcm9tICcuL3RhYnMtaXRlbS5jb21wb25lbnQnO1xuXG4oKCkgPT4ge1xuICAgICAgICBhbmd1bGFyLm1vZHVsZSgndGFsZW5kLnN1bmNob2tlLnRhYnMnLCBbXSlcbiAgICAgICAgLmNvbXBvbmVudCgnc2NUYWJzSXRlbScsIFNjVGFic0l0ZW1Db21wb25lbnQpXG4gICAgICAgIC5jb21wb25lbnQoJ3NjVGFicycsIFNjVGFic0NvbXBvbmVudCk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLm1vZHVsZS5qc1xuICoqLyIsIigoKSA9PiB7XG4gICAgYW5ndWxhci5tb2R1bGUoJ3RhbGVuZC5zdW5jaG9rZScsIFtcbiAgICAgICAgJ3RhbGVuZC5zdW5jaG9rZS5hY2NvcmRpb24nLFxuICAgICAgICAndGFsZW5kLnN1bmNob2tlLmRyb3Bkb3duJyxcbiAgICAgICAgJ3RhbGVuZC5zdW5jaG9rZS5kcm9wZG93bi1tZW51JyxcbiAgICAgICAgJ3RhbGVuZC5zdW5jaG9rZS5zcGxpdHRlcicsXG4gICAgICAgICd0YWxlbmQuc3VuY2hva2UudGFicydcbiAgICBdKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3VuY2hva2UubW9kdWxlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==