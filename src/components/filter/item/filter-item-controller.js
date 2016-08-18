/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
import { FILTER_TYPE } from '../../../services/filter/model/filter-const.js';

export default class ScFilterItemCtrl {

    $onInit() {
        this.filterValues = this.filter.options.values;
        this.badgeClass = this.filter.options.badgeClass;
        this._setSign();
    }

    $onChanges(changes) {
        const model = changes.filter;
        if (model) {
            const newModel = model.currentValue;
            if (newModel) {
                this.filter = newModel;
                this._setSign();
                this.filterValues = newModel.options.values;
                this.badgeClass = newModel.options.badgeClass;
            }
        }
    }

    /**
     * @ngdoc method
     * @name renderValue
     * @methodOf talend.sunchoke.filter-item-value.controller:ScFilterItemCtrl
     * @description This method render formatted value of the filter depending on its type
     */
    renderValue(value) {
        let formattedValue = this.renderValueFn({ colId: this.filter.fieldId, value: value });
        //calling the filter getLabel function with the formatted value
        return this.filter.getLabel(formattedValue);
    }

    /**
     * @ngdoc method
     * @name _setSign
     * @methodOf talend.sunchoke.filter-item-value.controller:ScFilterItemCtrl
     * @description This method sets operator
     */
    _setSign() {
        if (this.filter) {
            switch (this.filter.sign) {
            case 'in':
                this.sign = ' ≅ ';
                break;
            case '=':
                this.sign = ' = ';
                break;
            case FILTER_TYPE.INSIDE_RANGE:
                this.sign = ' in ';
                break;
            default:
                this.sign = ' : '; // TODO to put in constants via translateprovider
            }
        }
    }

    /**
     * @ngdoc method
     * @name edit
     * @methodOf talend.sunchoke.filter-item-value.controller:ScFilterItemCtrl
     * @description This method manage edit action on filter
     */
    edit(index, newValue) {

        // Manage incorrect values for range filter
        if (newValue.min && (isNaN(newValue.min) || isNaN(newValue.max))) {
            return;
        }

        //If only one value for range, set max too (only min has been set)
        const oldValue = this.filterValues[index];
        if (oldValue.min && oldValue.min === oldValue.max) {
            newValue.max = newValue.min;
        }

        //Min > max : do nothing
        if (newValue.min && newValue.min > newValue.max) {
            return;
        }

        //same value : do nothing for normal value
        if (!newValue.min && newValue == oldValue) {
            return;
        }
        // for range
        if (newValue.min && newValue.min == oldValue.min && newValue.max == oldValue.max) {
            return;
        }

        // Call callback function to update filter value
        this.onEdit({
            filter: this.filter,
            newValue: newValue,
            oldValue: oldValue
        });
    }

    /**
     * @ngdoc method
     * @name remove
     * @methodOf talend.sunchoke.filter-item-value.controller:ScFilterItemCtrl
     * @description Remove criterion from a multi-valued filter
     * @param indexToRemove Position into the multi-valued list
     */
    remove(indexToRemove) {
        const valueToDelete = this.filterValues.filter((value, index) => index === indexToRemove)[0];
        this.onRemoveValue({
            filter: this.filter,
            value: valueToDelete
        });
    }

    /**
     * @ngdoc method
     * @name close
     * @methodOf data-prep.filter-item:FilterItemCtrl
     * @description Trigger the close callback
     */
    close() {
        this.onRemove({
            filter: this.filter
        });
    }
}