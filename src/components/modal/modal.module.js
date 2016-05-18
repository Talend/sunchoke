/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import angular from 'angular';

import AUTOFOCUS_MODULE from '../autofocus/autofocus.module.js';
import ScModalComponent from './modal.component.js';

const MODULE_NAME = 'talend.sunchoke.modal';

/**
 * @ngdoc object
 * @name talend.sunchoke.modal
 * @description Modal
 */
angular.module(MODULE_NAME, [AUTOFOCUS_MODULE])
    .component('scModal', ScModalComponent);

export default MODULE_NAME;
