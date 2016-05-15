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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

	var _accordionAnimation = __webpack_require__(6);

	var _accordionAnimation2 = _interopRequireDefault(_accordionAnimation);

	var _accordionItem = __webpack_require__(7);

	var _accordionItem2 = _interopRequireDefault(_accordionItem);

	var _accordion = __webpack_require__(9);

	var _accordion2 = _interopRequireDefault(_accordion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MODULE_NAME = 'talend.sunchoke.accordion';

	_angular2.default.module(MODULE_NAME, ['ngAnimate']).directive('scAccordionAnimation', _accordionAnimation2.default).component('scAccordionItem', _accordionItem2.default).component('scAccordion', _accordion2.default);

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

	var _dropdownMenuComponent = __webpack_require__(11);

	var _dropdownMenuComponent2 = _interopRequireDefault(_dropdownMenuComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MODULE_NAME = 'talend.sunchoke.dropdown-menu';

	_angular2.default.module(MODULE_NAME, []).component('scDropdownMenu', _dropdownMenuComponent2.default);

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

	var _dropdownComponent = __webpack_require__(13);

	var _dropdownComponent2 = _interopRequireDefault(_dropdownComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MODULE_NAME = 'talend.sunchoke.dropdown';

	_angular2.default.module(MODULE_NAME, []).component('scDropdown', _dropdownComponent2.default);

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

	var _splitterComponent = __webpack_require__(15);

	var _splitterComponent2 = _interopRequireDefault(_splitterComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MODULE_NAME = 'talend.sunchoke.splitter';

	_angular2.default.module(MODULE_NAME, []).component('scSplitter', _splitterComponent2.default);

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

	var _tabs = __webpack_require__(19);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _tabsItem = __webpack_require__(17);

	var _tabsItem2 = _interopRequireDefault(_tabsItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MODULE_NAME = 'talend.sunchoke.tabs';

	_angular2.default.module(MODULE_NAME, []).component('scTabsItem', _tabsItem2.default).component('scTabs', _tabs2.default);

	exports.default = MODULE_NAME;

/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _accordionItem = __webpack_require__(8);

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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _accordion = __webpack_require__(10);

	var _accordion2 = _interopRequireDefault(_accordion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScAccordionComponent = {
	    template: '<ul ng-transclude></ul>',
	    controller: _accordion2.default,
	    transclude: true
	};

	exports.default = ScAccordionComponent;

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dropdownMenuController = __webpack_require__(12);

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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dropdownController = __webpack_require__(14);

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
/* 14 */
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
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tabsItem = __webpack_require__(18);

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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tabs = __webpack_require__(20);

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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(0);

	var _angular2 = _interopRequireDefault(_angular);

	var _accordionModule = __webpack_require__(1);

	var _accordionModule2 = _interopRequireDefault(_accordionModule);

	var _dropdownModule = __webpack_require__(3);

	var _dropdownModule2 = _interopRequireDefault(_dropdownModule);

	var _dropdownMenuModule = __webpack_require__(2);

	var _dropdownMenuModule2 = _interopRequireDefault(_dropdownMenuModule);

	var _splitterModule = __webpack_require__(4);

	var _splitterModule2 = _interopRequireDefault(_splitterModule);

	var _tabsModule = __webpack_require__(5);

	var _tabsModule2 = _interopRequireDefault(_tabsModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SUNCHOKE_MODULE = 'talend.sunchoke';

	_angular2.default.module(SUNCHOKE_MODULE, [_accordionModule2.default, _dropdownModule2.default, _dropdownMenuModule2.default, _splitterModule2.default, _tabsModule2.default]);

	exports.default = SUNCHOKE_MODULE;

/***/ }
/******/ ]);