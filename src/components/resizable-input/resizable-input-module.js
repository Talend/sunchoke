import angular from 'angular';

import ResizableInput from './resizable-input-directive.js';

const MODULE_NAME = 'talend.sunchoke.resizable-input';

/**
 * @ngdoc object
 * @name talend.sunchoke.resizable-input
 * @description resizable input directive
*/
angular.module(MODULE_NAME, [])
    .directive('resizableInput', ResizableInput)


export default MODULE_NAME;
