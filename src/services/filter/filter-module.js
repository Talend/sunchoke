/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import angular from 'angular';

import FilterService from './filter-service.js';

const MODULE_NAME = 'talend.sunchoke.services.filter';

/**
 * @ngdoc object
 * @name talend.sunchoke.services.filter
 * @description Filter service
 */
angular.module(MODULE_NAME, [])
    .service('FilterService', FilterService);

export default MODULE_NAME;
