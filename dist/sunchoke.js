/*!
 * ============================================================================
 * 
 *  Copyright (C) 2006-2019 Talend Inc. - www.talend.com
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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _autofocusDirective = __webpack_require__(14);
	
	var _autofocusDirective2 = _interopRequireDefault(_autofocusDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'talend.sunchoke.autofocus';
	
	_angular2.default.module(MODULE_NAME, []).directive('scAutofocus', _autofocusDirective2.default);
	
	exports.default = MODULE_NAME;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _accordionAnimation = __webpack_require__(9);
	
	var _accordionAnimation2 = _interopRequireDefault(_accordionAnimation);
	
	var _accordionItem = __webpack_require__(10);
	
	var _accordionItem2 = _interopRequireDefault(_accordionItem);
	
	var _accordion = __webpack_require__(12);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'talend.sunchoke.accordion';
	
	_angular2.default.module(MODULE_NAME, ['ngAnimate']).directive('scAccordionAnimation', _accordionAnimation2.default).component('scAccordionItem', _accordionItem2.default).component('scAccordion', _accordion2.default);
	
	exports.default = MODULE_NAME;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _dropdownMenuComponent = __webpack_require__(15);
	
	var _dropdownMenuComponent2 = _interopRequireDefault(_dropdownMenuComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'talend.sunchoke.dropdown-menu';
	
	_angular2.default.module(MODULE_NAME, []).component('scDropdownMenu', _dropdownMenuComponent2.default);
	
	exports.default = MODULE_NAME;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _dropdownComponent = __webpack_require__(17);
	
	var _dropdownComponent2 = _interopRequireDefault(_dropdownComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'talend.sunchoke.dropdown';
	
	_angular2.default.module(MODULE_NAME, []).component('scDropdown', _dropdownComponent2.default);
	
	exports.default = MODULE_NAME;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _autofocusModule = __webpack_require__(1);
	
	var _autofocusModule2 = _interopRequireDefault(_autofocusModule);
	
	var _modalComponent = __webpack_require__(19);
	
	var _modalComponent2 = _interopRequireDefault(_modalComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'talend.sunchoke.modal';
	
	_angular2.default.module(MODULE_NAME, [_autofocusModule2.default]).component('scModal', _modalComponent2.default);
	
	exports.default = MODULE_NAME;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _slidableComponent = __webpack_require__(21);
	
	var _slidableComponent2 = _interopRequireDefault(_slidableComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'talend.sunchoke.slidable';
	
	_angular2.default.module(MODULE_NAME, []).component('scSlidable', _slidableComponent2.default);
	
	exports.default = MODULE_NAME;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _splitterComponent = __webpack_require__(23);
	
	var _splitterComponent2 = _interopRequireDefault(_splitterComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'talend.sunchoke.splitter';
	
	_angular2.default.module(MODULE_NAME, []).component('scSplitter', _splitterComponent2.default);
	
	exports.default = MODULE_NAME;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _tabs = __webpack_require__(27);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tabsItem = __webpack_require__(25);
	
	var _tabsItem2 = _interopRequireDefault(_tabsItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'talend.sunchoke.tabs';
	
	_angular2.default.module(MODULE_NAME, []).component('scTabsItem', _tabsItem2.default).component('scTabs', _tabs2.default);
	
	exports.default = MODULE_NAME;

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _accordionItem = __webpack_require__(11);
	
	var _accordionItem2 = _interopRequireDefault(_accordionItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScAccordionItemComponent = {
	    template: '\n    <li class="sc-accordion" ng-class="{open: $ctrl.opened}">\n        <div class="trigger-container"\n             ng-transclude="trigger"\n             ng-click="$ctrl.toggle()"></div>\n        <div class="content-container"\n             ng-transclude="content"\n             sc-accordion-animation="$ctrl.opened"></div>\n    </li>\n    ',
	    transclude: {
	        trigger: 'trigger',
	        content: '?content'
	    },
	    bindings: {
	        onOpen: '&',
	        default: '<',
	        item: '<'
	    },
	    require: {
	        parent: '^^scAccordion'
	    },
	    controller: _accordionItem2.default
	};
	
	exports.default = ScAccordionItemComponent;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScAccordionItemCtrl = function () {
	    function ScAccordionItemCtrl() {
	        _classCallCheck(this, ScAccordionItemCtrl);
	    }
	
	    _createClass(ScAccordionItemCtrl, [{
	        key: "$onInit",
	        value: function $onInit() {
	            this.opened = false;
	            this.parent.register(this);
	
	            if (this.default) {
	                this.toggle();
	            }
	        }
	    }, {
	        key: "$onDestroy",
	        value: function $onDestroy() {
	            this.parent.unregister(this);
	        }
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            this.parent.toggle(this);
	        }
	    }, {
	        key: "open",
	        value: function open() {
	            if (this.opened) {
	                return;
	            }
	            this.opened = true;
	            this.onOpen();
	        }
	    }, {
	        key: "close",
	        value: function close() {
	            this.opened = false;
	        }
	    }]);
	
	    return ScAccordionItemCtrl;
	}();
	
	exports.default = ScAccordionItemCtrl;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _accordion = __webpack_require__(13);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScAccordionComponent = {
	    template: '<ul ng-transclude></ul>',
	    controller: _accordion2.default,
	    transclude: true,
	    bindings: {
	        onToggle: '&'
	    }
	};
	
	exports.default = ScAccordionComponent;

/***/ },
/* 13 */
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
	            this.onToggle({ item: accordion.item, active: !wasActive });
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
/* 14 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ScAutofocusDirective = function ScAutofocusDirective($timeout) {
	    'ngInject';
	
	    return {
	        restrict: 'A',
	        link: {
	            pre: function pre(scope, element) {
	                $timeout(function () {
	                    element[0].focus();
	                }, 0, false);
	            }
	        }
	    };
	};
	ScAutofocusDirective.$inject = ["$timeout"];
	
	exports.default = ScAutofocusDirective;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dropdownMenuController = __webpack_require__(16);
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScDropdownMenuCtrl = function () {
	    ScDropdownMenuCtrl.$inject = ["$element", "$document", "$timeout"];
	    function ScDropdownMenuCtrl($element, $document, $timeout) {
	        'ngInject';
	
	        _classCallCheck(this, ScDropdownMenuCtrl);
	
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
	                _this.visible = false;
	            });
	        }
	    }]);
	
	    return ScDropdownMenuCtrl;
	}();
	
	exports.default = ScDropdownMenuCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dropdownController = __webpack_require__(18);
	
	var _dropdownController2 = _interopRequireDefault(_dropdownController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScDropdownComponent = {
	    template: '\n        <div class="sc-dropdown-trigger"\n             ng-click="$ctrl.toggleMenu()"\n             ng-transclude="sc-dropdown-trigger">\n        </div>\n        <div class="sc-dropdown-content"\n             ng-click="$ctrl.onMenuClick($event)"\n             ng-transclude="sc-dropdown-content">\n        </div>\n    ',
	    bindings: {
	        closeOnSelect: '<',
	        onOpen: '&',
	        side: '@',
	        visibleOnInit: '<',
	        distanceFromBorder: '<'
	    },
	    transclude: {
	        'sc-dropdown-trigger': 'scDropdownTrigger',
	        'sc-dropdown-content': 'scDropdownContent'
	    },
	    controller: _dropdownController2.default
	};
	
	exports.default = ScDropdownComponent;

/***/ },
/* 18 */
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
	    ScDropdownCtrl.$inject = ["$window", "$element", "$document", "$timeout"];
	    function ScDropdownCtrl($window, $element, $document, $timeout) {
	        'ngInject';
	
	        _classCallCheck(this, ScDropdownCtrl);
	
	        this.$element = $element;
	        this.$timeout = $timeout;
	
	        this.body = angular.element($document[0].body);
	        this.window = angular.element($window);
	
	        this._escHideContent = this._escHideContent.bind(this);
	        this._hideContent = this._hideContent.bind(this);
	        this._showContent = this._showContent.bind(this);
	        this._positionContent = this._positionContent.bind(this);
	    }
	
	    _createClass(ScDropdownCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.offsetBorder = isNaN(this.distanceFromBorder) ? 0 : parseInt(this.distanceFromBorder, 10);
	        }
	    }, {
	        key: '$postLink',
	        value: function $postLink() {
	            var _this = this;
	
	            this.trigger = this.$element.children().eq(0);
	            this.content = this.$element.children().eq(1);
	            this.content.on('mousedown', function (e) {
	                return e.stopPropagation();
	            });
	
	            if (this.visibleOnInit) {
	
	                this.$timeout(function () {
	                    _this._showContent();
	                });
	            }
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
	            if (this.visible) {
	                this._hideContent();
	            } else {
	                this._showContent();
	            }
	        }
	    }, {
	        key: '_alignMenuRight',
	        value: function _alignMenuRight(position) {
	            this.content.addClass('right');
	            this.content.css('right', this.window[0].innerWidth - position.right + 'px');
	            this.content.css('left', 'auto');
	        }
	    }, {
	        key: '_alignMenuLeft',
	        value: function _alignMenuLeft(position) {
	            this.content.removeClass('right');
	            this.content.css('left', position.left + 'px');
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
	            var triggerPosition = this.trigger[0].getBoundingClientRect();
	            var contentPosition = this.content[0].getBoundingClientRect();
	            var windowHeight = this.window[0].innerHeight;
	
	            var freeSpace = void 0;
	            var contentTopPosition = void 0;
	
	            var offset = this.offsetBorder + CARRET_HEIGHT;
	            var topFreeSpace = triggerPosition.top - offset;
	            var bottomFreeSpace = windowHeight - triggerPosition.bottom - offset;
	            var contentHeight = contentPosition.height;
	
	            if (contentHeight < bottomFreeSpace || bottomFreeSpace > topFreeSpace) {
	                contentTopPosition = triggerPosition.bottom + CARRET_HEIGHT;
	                freeSpace = bottomFreeSpace;
	                this.content.removeClass('top');
	            } else {
	                contentTopPosition = triggerPosition.top - CARRET_HEIGHT - contentHeight;
	                if (contentTopPosition < this.offsetBorder) {
	                    contentTopPosition = this.offsetBorder;
	                }
	                freeSpace = topFreeSpace;
	                this.content.addClass('top');
	            }
	
	            if (contentHeight > freeSpace) {
	                this.content.children().css('height', freeSpace + 'px');
	            }
	
	            this.content.css('top', contentTopPosition + 'px');
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
	            this.content.children().css('height', '');
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _modalController = __webpack_require__(20);
	
	var _modalController2 = _interopRequireDefault(_modalController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScModalComponent = {
	    template: '\n        <div ng-if="$ctrl.visible"\n             class="sc-modal-overlay"\n             ng-click="::($ctrl.closeOnOverlayClick && $ctrl.close())">\n            <div class="sc-modal-inner" \n                 tabindex="-1"\n                 ng-click="::($ctrl.onInnerClick($event))"\n                 ng-keydown="::($ctrl.onInnerKeydown($event))"\n                 sc-autofocus>\n                <div class="sc-modal-header">\n                    <div class="sc-modal-title" ng-transclude="scModalHeader"></div>\n                    <label ng-if="::($ctrl.closeButton)"\n                           class="sc-modal-close-btn sc-modal-close"></label>\n                </div>\n                <div class="sc-modal-content" ng-transclude="scModalContent"></div>\n            </div>\n        </div>\n    ',
	    transclude: {
	        scModalHeader: '?scModalHeader',
	        scModalContent: 'scModalContent'
	    },
	    bindings: {
	        visible: '=',
	
	        closeButton: '<',
	        closeOnEscape: '<',
	        closeOnOverlayClick: '<',
	        validateOnEnter: '<',
	
	        beforeClose: '&',
	        onClose: '&'
	    },
	    controller: _modalController2.default
	};
	
	exports.default = ScModalComponent;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScModalCtrl = function () {
	    ScModalCtrl.$inject = ["$element", "$timeout"];
	    function ScModalCtrl($element, $timeout) {
	        'ngInject';
	
	        _classCallCheck(this, ScModalCtrl);
	
	        this.$element = $element;
	        this.$timeout = $timeout;
	    }
	
	    _createClass(ScModalCtrl, [{
	        key: 'onInnerClick',
	        value: function onInnerClick(e) {
	
	            e.stopPropagation();
	
	            if (e.target.classList.contains('sc-modal-close')) {
	                this.close();
	            }
	        }
	    }, {
	        key: 'onInnerKeydown',
	        value: function onInnerKeydown(e) {
	            switch (e.keyCode) {
	                case 13:
	
	                    if (this.validateOnEnter) {
	                        var domPrimaryElement = this.$element[0].querySelector('.sc-modal-primary');
	                        var primaryElement = angular.element(domPrimaryElement);
	                        this.$timeout(function () {
	                            primaryElement.click();
	                        }, 0, false);
	                    }
	                    break;
	
	                case 27:
	                    if (this.closeOnEscape) {
	                        this.close();
	                    }
	                    break;
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            if (this.beforeClose() === false) {
	                return;
	            }
	
	            this.visible = false;
	            this.onClose();
	        }
	    }]);
	
	    return ScModalCtrl;
	}();
	
	exports.default = ScModalCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slidableController = __webpack_require__(22);
	
	var _slidableController2 = _interopRequireDefault(_slidableController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScSlidableComponent = {
	    template: '\n    <div class="slidable flex-side"\n         ng-class="{\'slide-left\': $ctrl.side === \'left\',\n                \'slide-right\': $ctrl.side === \'right\',\n                \'slide-top\': $ctrl.side === \'top\',\n                \'slide-bottom\': $ctrl.side === \'bottom\' ,\n                \'slide-hide\': !$ctrl.visible }">\n        <div class="content">\n            <div class="content-container">\n                <ng-transclude class="fixed-content"></ng-transclude>\n            </div>\n        </div>\n        <div class="action {{::$ctrl.side}}"\n             ng-if="$ctrl.controlBar"\n             ng-click="$ctrl.toggle()" ng-switch="::($ctrl.side)">\n            <span ng-switch-when="left">\n                <span ng-show="$ctrl.visible">&#8249;</span>\n                <span ng-show="!$ctrl.visible">&#8250;</span>\n            </span>\n            <span ng-switch-when="right">\n                <span ng-show="$ctrl.visible">&#8250;</span>\n                <span ng-show="!$ctrl.visible">&#8249;</span>\n            </span>\n        </div>\n        <div class="resize-bar" ng-show="::($ctrl.resizableKey)"\n             ng-class="::{\n                \'resize-left\': $ctrl.side === \'left\',\n                \'resize-right\': $ctrl.side === \'right\'}\n        ">\n        </div>\n\n    </div>',
	    bindings: {
	        side: '@',
	        visible: '=',
	        resizableKey: '@',
	        visibleStateKey: '@',
	        controlBar: '<'
	    },
	    transclude: true,
	    controller: _slidableController2.default
	};
	
	exports.default = ScSlidableComponent;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScSlidableCtrl = function () {
	    ScSlidableCtrl.$inject = ["$window", "$element"];
	    function ScSlidableCtrl($window, $element) {
	        'ngInject';
	
	        _classCallCheck(this, ScSlidableCtrl);
	
	        this.$element = $element;
	        this.$window = $window;
	        this.window = angular.element($window);
	    }
	
	    _createClass(ScSlidableCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.drag = false;
	
	            if (this.visibleStateKey) {
	                var visibleState = this.$window.localStorage.getItem(this.visibleStateKey);
	                if (visibleState) {
	                    this.visible = JSON.parse(visibleState);
	                }
	            }
	
	            if (this.resizableKey) {
	                var width = this.$window.localStorage.getItem(this.resizableKey);
	                if (width && this.visible) {
	                    this.$element.css('flex', '0 0 ' + width + 'px');
	                }
	                this.attachListeners();
	            }
	        }
	    }, {
	        key: 'attachListeners',
	        value: function attachListeners() {
	            var _this = this;
	
	            var resizedWidth = void 0;
	            this.startDrag = function () {
	                _this.drag = true;
	            };
	            this.stopDrag = function () {
	                if (_this.drag) {
	                    _this.$window.localStorage.setItem(_this.resizableKey, resizedWidth);
	                }
	                _this.drag = false;
	            };
	
	            this.onMouseMove = function (event) {
	                if (!_this.drag || !_this.visible) {
	                    return;
	                }
	                event.preventDefault();
	                resizedWidth = event.clientX;
	                if (_this.side === 'right') {
	                    resizedWidth = _this.window[0].innerWidth - resizedWidth;
	                }
	                _this.$element.css('flex', '0 0 ' + resizedWidth + 'px');
	            };
	
	            this.resizeBar = angular.element(this.$element[0].querySelector('.resize-bar'));
	
	            this.resizeBar.on('mousedown', this.startDrag);
	            this.window.on('mouseup', this.stopDrag);
	            this.window.on('mousemove', this.onMouseMove);
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle() {
	            this.visible = !this.visible;
	
	            if (!this.visible) {
	                this.$element.css('flex', '0 0 0px');
	            } else {
	
	                var width = this.$window.localStorage.getItem(this.resizableKey);
	                if (width) {
	                    this.$element.css('flex', '0 0 ' + width + 'px');
	                }
	            }
	
	            if (this.visibleStateKey) {
	                this.$window.localStorage.setItem(this.visibleStateKey, this.visible);
	            }
	        }
	    }, {
	        key: '$onDestroy',
	        value: function $onDestroy() {
	
	            if (this.resizableKey) {
	                this.window.off('mouseup', this.stopDrag);
	                this.window.off('mousemove', this.onMouseMove);
	                this.resizeBar.off('mousemove', this.startDrag);
	            }
	        }
	    }]);
	
	    return ScSlidableCtrl;
	}();
	
	exports.default = ScSlidableCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _splitterController = __webpack_require__(24);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScSplitterCtrl = function () {
	    ScSplitterCtrl.$inject = ["$element", "$window"];
	    function ScSplitterCtrl($element, $window) {
	        'ngInject';
	
	        _classCallCheck(this, ScSplitterCtrl);
	
	        this.drag = false;
	        this.$element = $element;
	        this.window = angular.element($window);
	
	        this.startDrag = this.startDrag.bind(this);
	        this.stopDrag = this.stopDrag.bind(this);
	        this.reset = this.reset.bind(this);
	    }
	
	    _createClass(ScSplitterCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.initElements();
	            this.attachListeners();
	        }
	    }, {
	        key: '$onDestroy',
	        value: function $onDestroy() {
	            this.window.off('mouseup', this.stopDrag);
	        }
	    }, {
	        key: 'initElements',
	        value: function initElements() {
	            this.minSize = +this.minSize || 256;
	            var element = this.$element[0];
	            this.splitContainer = element.querySelector('.split-container');
	            this.firstPane = angular.element(element.querySelector('.split-first-pane'));
	            this.splitHandler = angular.element(element.querySelector('.split-handler'));
	            this.secondPane = angular.element(element.querySelector('.split-second-pane'));
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
	
	            this.splitHandler.on('mousedown', this.startDrag);
	            this.window.on('mouseup', this.stopDrag);
	            this.window.on('resize', this.reset);
	        }
	    }, {
	        key: 'startDrag',
	        value: function startDrag() {
	            this.drag = true;
	        }
	    }, {
	        key: 'stopDrag',
	        value: function stopDrag() {
	            this.drag = false;
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
	    }, {
	        key: 'reset',
	        value: function reset() {
	            if (this.orientation === 'vertical') {
	                this.firstPane.css('bottom', '');
	                this.splitHandler.css('top', '');
	                this.secondPane.css('top', '');
	            } else {
	                this.firstPane.css('right', '');
	                this.splitHandler.css('left', '');
	                this.secondPane.css('left', '');
	            }
	        }
	    }]);
	
	    return ScSplitterCtrl;
	}();
	
	exports.default = ScSplitterCtrl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tabsItem = __webpack_require__(26);
	
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
/* 26 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScTabsItemCtrl = function () {
	    function ScTabsItemCtrl() {
	        _classCallCheck(this, ScTabsItemCtrl);
	    }
	
	    _createClass(ScTabsItemCtrl, [{
	        key: "$onInit",
	        value: function $onInit() {
	            this.tabsCtrl.register(this);
	            if (this.isDefault) {
	                this.tabsCtrl.select(this);
	            }
	        }
	    }, {
	        key: "$onDestroy",
	        value: function $onDestroy() {
	            this.tabsCtrl.unregister(this);
	        }
	    }, {
	        key: "setActive",
	        value: function setActive(value) {
	            this.active = value;
	        }
	    }]);
	
	    return ScTabsItemCtrl;
	}();
	
	exports.default = ScTabsItemCtrl;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tabs = __webpack_require__(28);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScTabsComponent = {
	    template: '\n        <ul class="tabs">\n            <li class="tabs-header"\n                ng-class="{active : tab.active}"\n                ng-repeat="tab in $ctrl.tabs track by $index"\n                ng-click="$ctrl.select(tab)">\n                {{tab.tabTitle}}\n            </li>\n        </ul>\n        <ng-transclude></ng-transclude>\n    ',
	    bindings: {
	        selectedTab: '<',
	        onTabChange: '&'
	    },
	    transclude: true,
	    controller: _tabs2.default
	};
	
	exports.default = ScTabsComponent;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScTabsCtrl = function () {
	    function ScTabsCtrl() {
	        _classCallCheck(this, ScTabsCtrl);
	
	        this.tabs = [];
	    }
	
	    _createClass(ScTabsCtrl, [{
	        key: "$onChanges",
	        value: function $onChanges(changes) {
	            if (changes.selectedTab) {
	                this.setSelectedTab(changes.selectedTab.currentValue);
	            }
	        }
	    }, {
	        key: "register",
	        value: function register(tab) {
	            if (this.tabs.length === 0) {
	                tab.setActive(true);
	            }
	            this.tabs.push(tab);
	        }
	    }, {
	        key: "select",
	        value: function select(tab) {
	            this.tabs.forEach(function (tabToDeactivate) {
	                tabToDeactivate.setActive(false);
	            });
	            tab.setActive(true);
	            this.onTabChange();
	        }
	    }, {
	        key: "setSelectedTab",
	        value: function setSelectedTab(index) {
	            var tabToSelect = this.tabs[index];
	            if (tabToSelect) {
	                this.select(tabToSelect);
	            }
	        }
	    }, {
	        key: "unregister",
	        value: function unregister(tab) {
	            var index = this.tabs.indexOf(tab);
	            this.tabs.splice(index, 1);
	        }
	    }]);
	
	    return ScTabsCtrl;
	}();
	
	exports.default = ScTabsCtrl;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(0);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _accordionModule = __webpack_require__(2);
	
	var _accordionModule2 = _interopRequireDefault(_accordionModule);
	
	var _autofocusModule = __webpack_require__(1);
	
	var _autofocusModule2 = _interopRequireDefault(_autofocusModule);
	
	var _dropdownMenuModule = __webpack_require__(3);
	
	var _dropdownMenuModule2 = _interopRequireDefault(_dropdownMenuModule);
	
	var _dropdownModule = __webpack_require__(4);
	
	var _dropdownModule2 = _interopRequireDefault(_dropdownModule);
	
	var _modalModule = __webpack_require__(5);
	
	var _modalModule2 = _interopRequireDefault(_modalModule);
	
	var _slidableModule = __webpack_require__(6);
	
	var _slidableModule2 = _interopRequireDefault(_slidableModule);
	
	var _splitterModule = __webpack_require__(7);
	
	var _splitterModule2 = _interopRequireDefault(_splitterModule);
	
	var _tabsModule = __webpack_require__(8);
	
	var _tabsModule2 = _interopRequireDefault(_tabsModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SUNCHOKE_MODULE = 'talend.sunchoke';
	
	_angular2.default.module(SUNCHOKE_MODULE, [_accordionModule2.default, _autofocusModule2.default, _dropdownMenuModule2.default, _dropdownModule2.default, _modalModule2.default, _splitterModule2.default, _tabsModule2.default, _slidableModule2.default]);
	
	exports.default = SUNCHOKE_MODULE;

/***/ }
/******/ ]);