/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import angular from 'angular';
import ScSplitterComponent from './splitter.component.js';

const MODULE_NAME = 'talend.sunchoke.splitter';

/**
 * @ngdoc object
 * @name talend.sunchoke.splitter
 * @description Splitter
 */
angular.module(MODULE_NAME, [])
    .component('scSplitter', ScSplitterComponent);

export default MODULE_NAME;
