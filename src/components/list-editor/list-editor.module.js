/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import angular from 'angular';

import ScListEditorComponent from './list-editor.component.js';

const MODULE_NAME = 'talend.sunchoke.list-editor';

/**
 * @ngdoc object
 * @name talend.sunchoke.list-editor
 * @description List editor
 */
angular.module(MODULE_NAME, [])
    .component('scListEditor', ScListEditorComponent)
;

export default MODULE_NAME;
