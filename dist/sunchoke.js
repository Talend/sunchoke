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
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
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

	module.exports = angular;

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
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	var context = __webpack_require__(1);
	context.keys().forEach(context);

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CARRET_HEIGHT = 5;
	var VISIBILITY_CLASS = 'show';
	var CLOSE_CLASS = 'sc-dropdown-close';
	
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
	            this.window.on('resize', this._hideContent);
	            this.window.on('scroll', this._positionContent);
	        }
	    }, {
	        key: '_removeListeners',
	        value: function _removeListeners() {
	            this.body.off('mousedown', this._hideContent);
	            this.body.off('keydown', this._escHideContent);
	            this.window.off('resize', this._hideContent);
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
	            this._resetPositionContent();
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
	        value: function onMenuClick(event) {
	            if (this.closeOnSelect !== false || event.target.classList.contains(CLOSE_CLASS)) {
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
	    }, {
	        key: '_resetPositionContent',
	        value: function _resetPositionContent() {
	            this.content.css('top', 'auto');
	            this.content.css('left', 'auto');
	            this.content.css('right', 'auto');
	        }
	    }]);
	
	    return ScDropdownCtrl;
	}();
	
	exports.default = ScDropdownCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
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

	"use strict";
	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	(function () {
	    angular.module('talend.sunchoke', ['talend.sunchoke.accordion', 'talend.sunchoke.dropdown', 'talend.sunchoke.dropdown-menu', 'talend.sunchoke.splitter', 'talend.sunchoke.tabs']);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2I0ZTY3YjMzNjAwMDdiMDdjNzYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYyBcXC5tb2R1bGVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy53ZWJwYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24tYW5pbWF0aW9uLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NwbGl0dGVyL3NwbGl0dGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NwbGl0dGVyL3NwbGl0dGVyLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMtaXRlbS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLWl0ZW0uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1bmNob2tlLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLDBCOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTs7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RXJCLFNBQVEsVUFBVSxXOzs7Ozs7O0FDcEVsQjs7QUFBQTs7QUFJQSxLQUFJLFNBQVMsdUJBQXVCOztBQUhwQzs7QUFPQSxLQUFJLGFBQWEsdUJBQXVCOztBQUV4QyxVQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUzs7QUFQdkYsRUFBQyxZQUFNO1NBQ0MsUUFBUSxPQUFPLHdCQUF3QixJQUN0QyxVQUFVLGNBRFgsb0JBRUMsVUFBVSxVQUZYOzs7Ozs7Ozs7QUNKUjs7QUFBQSxFQUFDLFlBQU07S0FDSCxRQUFRLE9BQU8sbUJBQW1CLENBQzlCLDZCQUNBLDRCQUNBLGlDQUNBLDRCQUNBIiwiZmlsZSI6InN1bmNob2tlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgN2I0ZTY3YjMzNjAwMDdiMDdjNzZcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLmpzXCI6IDgsXG5cdFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5tb2R1bGUuanNcIjogMTEsXG5cdFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS5qc1wiOiAxNCxcblx0XCIuL2NvbXBvbmVudHMvc3BsaXR0ZXIvc3BsaXR0ZXIubW9kdWxlLmpzXCI6IDE3LFxuXHRcIi4vY29tcG9uZW50cy90YWJzL3RhYnMubW9kdWxlLmpzXCI6IDIyLFxuXHRcIi4vc3VuY2hva2UubW9kdWxlLmpzXCI6IDIzXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYyBcXC5tb2R1bGVcXC5qcyRcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi9zcmMnLCB0cnVlLCAvXFwubW9kdWxlXFwuanMkLyk7XG5jb250ZXh0LmtleXMoKS5mb3JFYWNoKGNvbnRleHQpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy53ZWJwYWNrLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgKCRhbmltYXRlKSA9PiB7XG4gICAgJ25nSW5qZWN0JztcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICAgICAgICAgICRhbmltYXRlLmFkZENsYXNzKGVsZW1lbnQsICdvcGVuaW5nJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgaGVpZ2h0OiBlbGVtZW50WzBdLnNjcm9sbEhlaWdodCArICdweCcgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBlbGVtZW50LnJlbW92ZUNsYXNzKCdvcGVuaW5nJykuYWRkQ2xhc3MoJ29wZW4nKS5jc3MoJ2hlaWdodCcsICcnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICAgICAgICAgICRhbmltYXRlLmFkZENsYXNzKGVsZW1lbnQsICdjbG9zaW5nJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogeyBoZWlnaHQ6IGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0ICsgJ3B4JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgaGVpZ2h0OiAnMCcgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBlbGVtZW50LnJlbW92ZUNsYXNzKCdjbG9zaW5nJykucmVtb3ZlQ2xhc3MoJ29wZW4nKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy5zY0FjY29yZGlvbkFuaW1hdGlvbiwgKGlzT3BlbmVkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaXNPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24tYW5pbWF0aW9uLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCBTY0FjY29yZGlvbkl0ZW1DdHJsIGZyb20gJy4vYWNjb3JkaW9uLWl0ZW0uY29udHJvbGxlcic7XG5cbmNvbnN0IFNjQWNjb3JkaW9uSXRlbUNvbXBvbmVudCA9IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxsaSBjbGFzcz1cInNjLWFjY29yZGlvblwiIG5nLWNsYXNzPVwie29wZW46ICRjdHJsLm9wZW5lZH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRyaWdnZXItY29udGFpbmVyXCIgbmctdHJhbnNjbHVkZT1cInRyaWdnZXJcIiBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZSgpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiIG5nLXRyYW5zY2x1ZGU9XCJjb250ZW50XCIgc2MtYWNjb3JkaW9uLWFuaW1hdGlvbj1cIiRjdHJsLm9wZW5lZFwiPjwvZGl2PlxuICAgIDwvbGk+XG4gICAgYCxcbiAgICB0cmFuc2NsdWRlOiB7XG4gICAgICAgIHRyaWdnZXI6ICd0cmlnZ2VyJyxcbiAgICAgICAgY29udGVudDogJz9jb250ZW50J1xuICAgIH0sXG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgb25PcGVuOiAnJicsXG4gICAgICAgIGRlZmF1bHQ6ICc8J1xuICAgIH0sXG4gICAgcmVxdWlyZToge1xuICAgICAgICBwYXJlbnQ6ICdeXnNjQWNjb3JkaW9uJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogU2NBY2NvcmRpb25JdGVtQ3RybFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NBY2NvcmRpb25JdGVtQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjQWNjb3JkaW9uSXRlbUN0cmwge1xuXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMuJHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB0aGlzLnBhcmVudC51bnJlZ2lzdGVyKHRoaXMpKTtcblxuICAgICAgICBpZih0aGlzLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnBhcmVudC50b2dnbGUodGhpcyk7XG4gICAgfVxuXG4gICAgICAgIG9wZW4oKSB7XG4gICAgICAgIGlmKHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uT3BlbigpO1xuICAgIH1cblxuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0uY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBTY0FjY29yZGlvbkN0cmwgZnJvbSAnLi9hY2NvcmRpb24uY29udHJvbGxlcic7XG5cbmNvbnN0IFNjQWNjb3JkaW9uQ29tcG9uZW50ID0ge1xuICAgIHRlbXBsYXRlOiBgPHVsIG5nLXRyYW5zY2x1ZGU+PC91bD5gLFxuICAgIGNvbnRyb2xsZXI6IFNjQWNjb3JkaW9uQ3RybCxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY0FjY29yZGlvbkNvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NBY2NvcmRpb25DdHJsIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9ucyA9IFtdO1xuICAgIH1cblxuICAgICAgICByZWdpc3RlcihhY2NvcmRpb24pIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25zLnB1c2goYWNjb3JkaW9uKTtcbiAgICB9XG5cbiAgICAgICAgdW5yZWdpc3RlcihhY2NvcmRpb24pIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25zID0gdGhpcy5hY2NvcmRpb25zLmZpbHRlcigobmV4dCkgPT4gbmV4dCAhPT0gYWNjb3JkaW9uKTtcbiAgICB9XG5cbiAgICAgICAgdG9nZ2xlKGFjY29yZGlvbikge1xuICAgICAgICB2YXIgd2FzQWN0aXZlID0gYWNjb3JkaW9uLm9wZW5lZDtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25zLmZvckVhY2goKG5leHQpID0+IG5leHQuY2xvc2UoKSk7XG5cbiAgICAgICAgaWYgKCF3YXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGFjY29yZGlvbi5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgU2NBY2NvcmRpb25BbmltYXRpb24gZnJvbSAnLi9hY2NvcmRpb24tYW5pbWF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgU2NBY2NvcmRpb25JdGVtQ29tcG9uZW50IGZyb20gJy4vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCBTY0FjY29yZGlvbkNvbXBvbmVudCBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xuXG4oKCkgPT4ge1xuICAgICAgICBhbmd1bGFyLm1vZHVsZSgndGFsZW5kLnN1bmNob2tlLmFjY29yZGlvbicsIFsnbmdBbmltYXRlJ10pXG4gICAgICAgIC5kaXJlY3RpdmUoJ3NjQWNjb3JkaW9uQW5pbWF0aW9uJywgU2NBY2NvcmRpb25BbmltYXRpb24pXG4gICAgICAgIC5jb21wb25lbnQoJ3NjQWNjb3JkaW9uSXRlbScsIFNjQWNjb3JkaW9uSXRlbUNvbXBvbmVudClcbiAgICAgICAgLmNvbXBvbmVudCgnc2NBY2NvcmRpb24nLCBTY0FjY29yZGlvbkNvbXBvbmVudCk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUuanNcbiAqKi8iLCJpbXBvcnQgU2NEcm9wZG93bk1lbnVDdHJsIGZyb20gJy4vZHJvcGRvd24tbWVudS5jb250cm9sbGVyLmpzJztcblxuY29uc3QgU2NEcm9wZG93bk1lbnVDb21wb25lbnQgPSB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNjLWRyb3Bkb3duLW1lbnUtdHJpZ2dlclwiXG4gICAgICAgICAgICAgbmctY2xhc3M9XCJ7b3BlbmVkOiRjdHJsLnZpc2libGV9XCJcbiAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZU1lbnUoKVwiXG4gICAgICAgICAgICAgbmctdHJhbnNjbHVkZT1cInNjLWRyb3Bkb3duLW1lbnUtdHJpZ2dlclwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjLWRyb3Bkb3duLW1lbnUtZHJvcGRvd25cIlxuICAgICAgICAgICAgIG5nLWlmPVwiJGN0cmwudmlzaWJsZVwiXG4gICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC50b2dnbGVNZW51KClcIlxuICAgICAgICAgICAgIG5nLXRyYW5zY2x1ZGU9XCJzYy1kcm9wZG93bi1tZW51LWRyb3Bkb3duXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgdHJhbnNjbHVkZToge1xuICAgICAgICAnc2MtZHJvcGRvd24tbWVudS10cmlnZ2VyJzogJz9zY0Ryb3Bkb3duTWVudVRyaWdnZXInLFxuICAgICAgICAnc2MtZHJvcGRvd24tbWVudS1kcm9wZG93bic6ICc/c2NEcm9wZG93bk1lbnVEcm9wZG93bidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFNjRHJvcGRvd25NZW51Q3RybFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NEcm9wZG93bk1lbnVDb21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NEcm9wZG93bk1lbnVDdHJsIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkZG9jdW1lbnQsICR0aW1lb3V0KSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLmJvZHlFbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KCRkb2N1bWVudFswXS5ib2R5KTtcblxuICAgICAgICB0aGlzLl9oaWRlTWVudSA9IHRoaXMuX2hpZGVNZW51LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgICRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYm9keUVsZW1lbnQub24oJ21vdXNlZG93bicsIHRoaXMuX2hpZGVNZW51KTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignbW91c2Vkb3duJywgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICAgIH1cblxuICAgICRvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYm9keUVsZW1lbnQub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9oaWRlTWVudSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgICB9XG5cbiAgICBfaGlkZU1lbnUoKSB7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4gdGhpcy52aXNpYmxlID0gZmFsc2UpO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IFNjRHJvcGRvd25NZW51Q29tcG9uZW50IGZyb20gJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMnO1xuXG4oKCkgPT4ge1xuICAgICAgICBhbmd1bGFyLm1vZHVsZSgndGFsZW5kLnN1bmNob2tlLmRyb3Bkb3duLW1lbnUnLCBbXSlcbiAgICAgICAgLmNvbXBvbmVudCgnc2NEcm9wZG93bk1lbnUnLCBTY0Ryb3Bkb3duTWVudUNvbXBvbmVudCk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51Lm1vZHVsZS5qc1xuICoqLyIsImltcG9ydCBTY0Ryb3Bkb3duQ3RybCBmcm9tICcuL2Ryb3Bkb3duLmNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBTY0Ryb3Bkb3duQ29tcG9uZW50ID0ge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYy1kcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZU1lbnUoKVwiXG4gICAgICAgICAgICAgbmctdHJhbnNjbHVkZT1cInNjLWRyb3Bkb3duLXRyaWdnZXJcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYy1kcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLm9uTWVudUNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgIG5nLXRyYW5zY2x1ZGU9XCJzYy1kcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgY2xvc2VPblNlbGVjdDogJzwnLFxuICAgICAgICBvbk9wZW46ICcmJyxcbiAgICAgICAgc2lkZTogJ0AnXG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB7XG4gICAgICAgICdzYy1kcm9wZG93bi10cmlnZ2VyJzogJ3NjRHJvcGRvd25UcmlnZ2VyJyxcbiAgICAgICAgJ3NjLWRyb3Bkb3duLWNvbnRlbnQnOiAnc2NEcm9wZG93bkNvbnRlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBTY0Ryb3Bkb3duQ3RybFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NEcm9wZG93bkNvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5qc1xuICoqLyIsImNvbnN0IENBUlJFVF9IRUlHSFQgPSA1O1xuY29uc3QgVklTSUJJTElUWV9DTEFTUyA9ICdzaG93JztcbmNvbnN0IENMT1NFX0NMQVNTID0gJ3NjLWRyb3Bkb3duLWNsb3NlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NEcm9wZG93bkN0cmwge1xuICAgIGNvbnN0cnVjdG9yKCR3aW5kb3csICRlbGVtZW50LCAkdGltZW91dCwgJGRvY3VtZW50KSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG5cbiAgICAgICAgdGhpcy5ib2R5ID0gYW5ndWxhci5lbGVtZW50KCRkb2N1bWVudFswXS5ib2R5KTtcbiAgICAgICAgdGhpcy53aW5kb3cgPSBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdyk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX2VzY0hpZGVDb250ZW50ID0gdGhpcy5fZXNjSGlkZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGlkZUNvbnRlbnQgPSB0aGlzLl9oaWRlQ29udGVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9zaG93Q29udGVudCA9IHRoaXMuX3Nob3dDb250ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uQ29udGVudCA9IHRoaXMuX3Bvc2l0aW9uQ29udGVudC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgICRwb3N0TGluaygpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbigpLmVxKDApO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMSk7XG4gICAgICAgIHRoaXMuY29udGVudC5vbignbW91c2Vkb3duJywgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICAgIH1cblxuICAgICRvbkRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBfYXR0YWNoTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmJvZHkub24oJ21vdXNlZG93bicsIHRoaXMuX2hpZGVDb250ZW50KTtcbiAgICAgICAgdGhpcy5ib2R5Lm9uKCdrZXlkb3duJywgdGhpcy5fZXNjSGlkZUNvbnRlbnQpO1xuICAgICAgICB0aGlzLndpbmRvdy5vbigncmVzaXplJywgdGhpcy5faGlkZUNvbnRlbnQpO1xuICAgICAgICB0aGlzLndpbmRvdy5vbignc2Nyb2xsJywgdGhpcy5fcG9zaXRpb25Db250ZW50KTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmJvZHkub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9oaWRlQ29udGVudCk7XG4gICAgICAgIHRoaXMuYm9keS5vZmYoJ2tleWRvd24nLCB0aGlzLl9lc2NIaWRlQ29udGVudCk7XG4gICAgICAgIHRoaXMud2luZG93Lm9mZigncmVzaXplJywgdGhpcy5faGlkZUNvbnRlbnQpO1xuICAgICAgICB0aGlzLndpbmRvdy5vZmYoJ3Njcm9sbCcsIHRoaXMuX3Bvc2l0aW9uQ29udGVudCk7XG4gICAgfVxuXG4gICBcbiAgIFxuICAgXG5cbiAgICBfZXNjSGlkZUNvbnRlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVDb250ZW50KCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhWSVNJQklMSVRZX0NMQVNTKTtcbiAgICAgICAgdGhpcy5fcmVzZXRQb3NpdGlvbkNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgX3Nob3dDb250ZW50KCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uT3BlbigpO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKFZJU0lCSUxJVFlfQ0xBU1MpO1xuICAgICAgICB0aGlzLl9wb3NpdGlvbkNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgb25NZW51Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCAhPT0gZmFsc2UgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTE9TRV9DTEFTUykpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVDb250ZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPyB0aGlzLl9oaWRlQ29udGVudCgpIDogdGhpcy5fc2hvd0NvbnRlbnQoKTtcbiAgICB9XG5cbiAgIFxuICAgXG4gICBcblxuICAgIF9hbGlnbk1lbnVSaWdodChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgICAgIHRoaXMuY29udGVudC5jc3MoJ3JpZ2h0JywgJycgKyAodGhpcy53aW5kb3dbMF0uaW5uZXJXaWR0aCAgLSBwb3NpdGlvbi5yaWdodCkgKyAncHgnKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmNzcygnbGVmdCcsICdhdXRvJyk7XG4gICAgfVxuXG4gICAgX2FsaWduTWVudUxlZnQocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNsYXNzKCdyaWdodCcpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY3NzKCdsZWZ0JywgJycgKyBwb3NpdGlvbi5sZWZ0ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMuY29udGVudC5jc3MoJ3JpZ2h0JywgJ2F1dG8nKTtcbiAgICB9XG5cbiAgICBfcG9zaXRpb25Ib3Jpem9udGFsTWVudSgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2lkZSkge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fYWxpZ25NZW51TGVmdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fYWxpZ25NZW51UmlnaHQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FsaWduTWVudVJpZ2h0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51UG9zaXRpb24gPSB0aGlzLmNvbnRlbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lbnVQb3NpdGlvbi5sZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbGlnbk1lbnVMZWZ0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9zaXRpb25WZXJ0aWNhbE1lbnUoKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uQWN0aW9uID0gdGhpcy50cmlnZ2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbk1lbnUgPSB0aGlzLmNvbnRlbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBtZW51VG9wUG9zaXRpb24gPSBwb3NpdGlvbkFjdGlvbi5ib3R0b20gKyBDQVJSRVRfSEVJR0hUO1xuXG4gICAgICAgXG4gICAgICAgIGlmICgocG9zaXRpb25BY3Rpb24uYm90dG9tICsgIHBvc2l0aW9uTWVudS5oZWlnaHQgKyBDQVJSRVRfSEVJR0hUKT4gdGhpcy53aW5kb3dbMF0uaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIG1lbnVUb3BQb3NpdGlvbiA9IHBvc2l0aW9uQWN0aW9uLnRvcCAtIENBUlJFVF9IRUlHSFQgLSBwb3NpdGlvbk1lbnUuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENsYXNzKCd0b3AnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVDbGFzcygndG9wJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZW50LmNzcygndG9wJywgbWVudVRvcFBvc2l0aW9uICsgJ3B4Jyk7XG4gICAgfVxuXG4gICAgX3Bvc2l0aW9uQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25Ib3Jpem9udGFsTWVudSgpO1xuICAgICAgICB0aGlzLl9wb3NpdGlvblZlcnRpY2FsTWVudSgpO1xuICAgIH1cblxuICAgIF9yZXNldFBvc2l0aW9uQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmNzcygndG9wJywgJ2F1dG8nKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmNzcygnbGVmdCcsICdhdXRvJyk7XG4gICAgICAgIHRoaXMuY29udGVudC5jc3MoJ3JpZ2h0JywgJ2F1dG8nKTtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IFNjRHJvcGRvd25Db21wb25lbnQgZnJvbSAnLi9kcm9wZG93bi5jb21wb25lbnQuanMnO1xuXG4oKCkgPT4ge1xuICAgICAgICBhbmd1bGFyLm1vZHVsZSgndGFsZW5kLnN1bmNob2tlLmRyb3Bkb3duJywgW10pXG4gICAgICAgIC5jb21wb25lbnQoJ3NjRHJvcGRvd24nLCBTY0Ryb3Bkb3duQ29tcG9uZW50KTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUuanNcbiAqKi8iLCJpbXBvcnQgU2NTcGxpdHRlckN0cmwgZnJvbSAnLi9zcGxpdHRlci5jb250cm9sbGVyLmpzJztcblxuY29uc3QgU2NTcGxpdHRlckNvbXBvbmVudCA9IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1jb250YWluZXIge3s6OiRjdHJsLm9yaWVudGF0aW9ufX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWZpcnN0LXBhbmVcIiBuZy10cmFuc2NsdWRlPVwic3BsaXQtZmlyc3QtcGFuZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXQtaGFuZGxlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXItc3F1YXJlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXQtaGFuZGxlci1zcXVhcmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1oYW5kbGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXItc3F1YXJlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXQtaGFuZGxlci1zcXVhcmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdC1oYW5kbGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGl0LWhhbmRsZXItc3F1YXJlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXQtc2Vjb25kLXBhbmVcIiBuZy10cmFuc2NsdWRlPVwic3BsaXQtc2Vjb25kLXBhbmVcIj48L2Rpdj5cbiAgICA8L2Rpdj5gLFxuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIG9yaWVudGF0aW9uOiAnQCcsXG4gICAgICAgIG1pblNpemU6ICdAJ1xuICAgIH0sXG4gICAgdHJhbnNjbHVkZToge1xuICAgICAgICAnc3BsaXQtZmlyc3QtcGFuZSc6ICdzY1NwbGl0Rmlyc3RQYW5lJyxcbiAgICAgICAgJ3NwbGl0LXNlY29uZC1wYW5lJzogJ3NjU3BsaXRTZWNvbmRQYW5lJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogU2NTcGxpdHRlckN0cmxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjU3BsaXR0ZXJDb21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY1NwbGl0dGVyQ3RybCB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJHdpbmRvdykge1xuICAgICAgICAnbmdJbmplY3QnO1xuICAgICAgICB0aGlzLmRyYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgICAgICB0aGlzLndpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0RWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5hdHRhY2hMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBpbml0RWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMubWluU2l6ZSA9ICt0aGlzLm1pblNpemUgfHwgMjU2O1xuICAgICAgICB0aGlzLnNwbGl0Q29udGFpbmVyID0gdGhpcy4kZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcuc3BsaXQtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuZmlyc3RQYW5lID0gYW5ndWxhci5lbGVtZW50KHRoaXMuJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLnNwbGl0LWZpcnN0LXBhbmUnKSk7XG4gICAgICAgIHRoaXMuc3BsaXRIYW5kbGVyID0gYW5ndWxhci5lbGVtZW50KHRoaXMuJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLnNwbGl0LWhhbmRsZXInKSk7XG4gICAgICAgIHRoaXMuc2Vjb25kUGFuZSA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJy5zcGxpdC1zZWNvbmQtcGFuZScpKTtcbiAgICB9XG5cbiAgICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0RHJhZyA9ICgpID0+IHsgdGhpcy5kcmFnID0gdHJ1ZSB9O1xuICAgICAgICBjb25zdCBzdG9wRHJhZyA9ICgpID0+IHsgdGhpcy5kcmFnID0gZmFsc2UgfTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3BsaXRIYW5kbGVyLm9uKCdtb3VzZWRvd24nLCBzdGFydERyYWcpO1xuICAgICAgICB0aGlzLndpbmRvdy5vbignbW91c2V1cCcsIHN0b3BEcmFnKTtcbiAgICAgICAgdGhpcy4kc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHRoaXMud2luZG93Lm9mZignbW91c2V1cCcsIHN0b3BEcmFnKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2l6ZShldmVudCkge1xuICAgICAgICBjb25zdCBib3VuZHMgPSB0aGlzLnNwbGl0Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGl0SGFuZGxlclNpemUgPSB0aGlzLnNwbGl0SGFuZGxlclNpemUgfHwgdGhpcy5zcGxpdEhhbmRsZXJbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgcG9zID0gZXZlbnQuY2xpZW50WSAtIGJvdW5kcy50b3AgLSB0aGlzLnNwbGl0SGFuZGxlclNpemUgLyAyO1xuXG4gICAgICAgICAgICBpZiAocG9zIDwgdGhpcy5taW5TaXplIHx8IHBvcyA+IGJvdW5kcy5oZWlnaHQgLSB0aGlzLm1pblNpemUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZmlyc3RQYW5lLmNzcygnYm90dG9tJywgKGJvdW5kcy5oZWlnaHQgLSBwb3MpICsgJ3B4Jyk7XG4gICAgICAgICAgICB0aGlzLnNwbGl0SGFuZGxlci5jc3MoJ3RvcCcsIHBvcyArICdweCcpO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRQYW5lLmNzcygndG9wJywgKHBvcyArIHRoaXMuc3BsaXRIYW5kbGVyU2l6ZSkgKyAncHgnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRIYW5kbGVyU2l6ZSA9IHRoaXMuc3BsaXRIYW5kbGVyU2l6ZSB8fCB0aGlzLnNwbGl0SGFuZGxlclswXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGV2ZW50LmNsaWVudFggLSBib3VuZHMubGVmdCAtIHRoaXMuc3BsaXRIYW5kbGVyU2l6ZSAvIDI7XG5cbiAgICAgICAgICAgIGlmIChwb3MgPCB0aGlzLm1pblNpemUgfHwgcG9zID4gYm91bmRzLndpZHRoIC0gdGhpcy5taW5TaXplKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZpcnN0UGFuZS5jc3MoJ3JpZ2h0JywgKGJvdW5kcy53aWR0aCAtIHBvcykgKyAncHgnKTtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRIYW5kbGVyLmNzcygnbGVmdCcsIHBvcyArICdweCcpO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRQYW5lLmNzcygnbGVmdCcsIChwb3MgKyB0aGlzLnNwbGl0SGFuZGxlclNpemUpICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IFNjU3BsaXR0ZXJDb21wb25lbnQgZnJvbSAnLi9zcGxpdHRlci5jb21wb25lbnQuanMnO1xuXG4oKCkgPT4ge1xuICAgICAgICBhbmd1bGFyLm1vZHVsZSgndGFsZW5kLnN1bmNob2tlLnNwbGl0dGVyJywgW10pXG4gICAgICAgIC5jb21wb25lbnQoJ3NjU3BsaXR0ZXInLCBTY1NwbGl0dGVyQ29tcG9uZW50KTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5tb2R1bGUuanNcbiAqKi8iLCJpbXBvcnQgU2NUYWJzSXRlbUN0cmwgZnJvbSAnLi90YWJzLWl0ZW0uY29udHJvbGxlcic7XG5cbmNvbnN0IFNjVGFic0l0ZW1Db21wb25lbnQgPSB7XG4gICAgdGVtcGxhdGU6IGA8bmctdHJhbnNjbHVkZSBuZy1pZj1cIiRjdHJsLmFjdGl2ZVwiPjwvbmctdHJhbnNjbHVkZT5gLFxuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHRhYlRpdGxlOiAnQCcsXG4gICAgICAgIGlzRGVmYXVsdDogJzwnXG4gICAgfSxcbiAgICByZXF1aXJlOiB7XG4gICAgICAgIHRhYnNDdHJsOiAnXl5zY1RhYnMnXG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIGNvbnRyb2xsZXI6IFNjVGFic0l0ZW1DdHJsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY1RhYnNJdGVtQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLWl0ZW0uY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NUYWJzSXRlbUN0cmwge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB9XG5cbiAgICAkb25Jbml0KCkge1xuICAgICAgICB0aGlzLnRhYnNDdHJsLnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudGFic0N0cmwuc2VsZWN0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHRoaXMudGFic0N0cmwudW5yZWdpc3Rlcih0aGlzKSk7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLWl0ZW0uY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBTY1RhYnNDdHJsIGZyb20gJy4vdGFicy5jb250cm9sbGVyJztcblxuY29uc3QgU2NUYWJzQ29tcG9uZW50ID0ge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx1bCBjbGFzcz1cInRhYnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInRhYnMtaGVhZGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlIDogdGFiLmFjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJ0YWIgaW4gJGN0cmwudGFicyB0cmFjayBieSAkaW5kZXhcIiBuZy1jbGljaz1cIiRjdHJsLnNlbGVjdCh0YWIpXCI+XG4gICAgICAgICAgICAgICAge3t0YWIudGFiVGl0bGV9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxuICAgIGAsXG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgc2VsZWN0ZWRUYWI6ICc8JyxcbiAgICAgICAgb25UYWJDaGFuZ2U6ICcmJ1xuICAgIH0sXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICBjb250cm9sbGVyOiBTY1RhYnNDdHJsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY1RhYnNDb21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NUYWJzQ3RybCB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50YWJzID0gW107XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUuJHdhdGNoKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIChpbmRleCkgPT4gdGhpcy5zZXRTZWxlY3RlZFRhYihpbmRleClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXIodGFiKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgIH1cblxuICAgICAgICBzZWxlY3QodGFiKSB7XG4gICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWJUb0RlYWN0aXZhdGUpID0+IHtcbiAgICAgICAgICAgIHRhYlRvRGVhY3RpdmF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgICAgIHNldFNlbGVjdGVkVGFiKGluZGV4KSB7XG4gICAgICAgIHZhciB0YWJUb1NlbGVjdCA9IHRoaXMudGFic1tpbmRleF07XG4gICAgICAgIGlmICh0YWJUb1NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QodGFiVG9TZWxlY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAgIHVucmVnaXN0ZXIodGFiKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudGFicy5pbmRleE9mKHRhYik7XG4gICAgICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IFNjVGFic0NvbXBvbmVudCBmcm9tICcuL3RhYnMuY29tcG9uZW50JztcbmltcG9ydCBTY1RhYnNJdGVtQ29tcG9uZW50IGZyb20gJy4vdGFicy1pdGVtLmNvbXBvbmVudCc7XG5cbigoKSA9PiB7XG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCd0YWxlbmQuc3VuY2hva2UudGFicycsIFtdKVxuICAgICAgICAuY29tcG9uZW50KCdzY1RhYnNJdGVtJywgU2NUYWJzSXRlbUNvbXBvbmVudClcbiAgICAgICAgLmNvbXBvbmVudCgnc2NUYWJzJywgU2NUYWJzQ29tcG9uZW50KTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy90YWJzL3RhYnMubW9kdWxlLmpzXG4gKiovIiwiKCgpID0+IHtcbiAgICBhbmd1bGFyLm1vZHVsZSgndGFsZW5kLnN1bmNob2tlJywgW1xuICAgICAgICAndGFsZW5kLnN1bmNob2tlLmFjY29yZGlvbicsXG4gICAgICAgICd0YWxlbmQuc3VuY2hva2UuZHJvcGRvd24nLFxuICAgICAgICAndGFsZW5kLnN1bmNob2tlLmRyb3Bkb3duLW1lbnUnLFxuICAgICAgICAndGFsZW5kLnN1bmNob2tlLnNwbGl0dGVyJyxcbiAgICAgICAgJ3RhbGVuZC5zdW5jaG9rZS50YWJzJ1xuICAgIF0pO1xufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdW5jaG9rZS5tb2R1bGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9