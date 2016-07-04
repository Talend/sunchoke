/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

import ScFilterListComponent from './filter-list-component';

const MODULE_NAME = 'talend.sunchoke.filter-list';

    angular.module(MODULE_NAME, [])
        .component('scFilterList', ScFilterListComponent);

export default MODULE_NAME;
