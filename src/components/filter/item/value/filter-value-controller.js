/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

/**
 * @ngdoc controller
 * @name talend.sunchoke.filter-item-value.controller:ScFilterValueCtrl
 * @description FilterItemValue controller.
 */
export default class ScFilterValueCtrl {
    constructor($element) {
        'ngInject';
        this.$element = $element;
    }

    $onInit() {
        this.valueToDisplay = this.renderValueFn({
            value: this.filterValue
        });
    }

    /**
     * @ngdoc method
     * @name removeEmptyValue
     * @methodOf talend.sunchoke.filter-item-value.controller:checkEmpty
     * @description Remove 'empty' when editing null value
     */
    removeEmptyValue() {
        if (this.valueToDisplay === 'empty') {
            this.valueToDisplay = '';
        }
    }

    /**
     * @ngdoc method
     * @name $onChanges
     * @methodOf talend.sunchoke.filter-item-value.controller:ScFilterValueCtrl
     * @description Manage filter values changes
     */
    $onChanges(changes) {
        const model = changes.filterValue;
        if (model) {
            const newModel = model.currentValue;
            if (newModel || newModel === '') {
                this.valueToDisplay = this.renderValueFn({
                    value: newModel
                });
            }
        }
    }

    /**
     * @ngdoc method
     * @name $onChanges
     * @methodOf talend.sunchoke.filter-item-value.controller:ScFilterValueCtrl
     * @description Manage keyboard action on normal filter (not range)
     */
    onKeydown(event) {
        // keydown escape
        if (event && event.which === 27) {
            this.valueToDisplay = this.filterValue;
        }

        // keydown enter
        if (event && event.which === 13) {
            this.onEdit({
                newValue: this.valueToDisplay
            });

            //Blur input to hide edit mode
            this.$element.find('input').blur();
        }
    }
}