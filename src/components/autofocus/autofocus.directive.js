/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

/**
 * @ngdoc component
 * @name talend.sunchoke.modal.component:ScAutofocusDirective
 * @description Autofocus
 * @restrict E
 * @usage
 * <input autofocus />
 */
const ScAutofocusDirective = ($timeout) => {
    'ngInject';

    return {
        restrict: 'A',
        link: {
            pre: (scope, element) => {
                $timeout(() => {
                    element[0].focus();
                }, 0, false);
            }
        }
    }
};

export default ScAutofocusDirective;