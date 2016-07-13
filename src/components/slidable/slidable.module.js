/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import angular from 'angular';

import ScSlidableComponent from './slidable.component.js';

const MODULE_NAME = 'talend.sunchoke.slidable';

/**
 * @ngdoc object
 * @name talend.sunchoke.slidable
 * @description Slidable
 */
angular.module(MODULE_NAME, [])
    .component('scSlidable', ScSlidableComponent);

export default MODULE_NAME;
