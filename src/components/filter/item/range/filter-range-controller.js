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
 * @name talend.sunchoke.filter-item-range.controller:ScFilterRangeCtrl
 * @description FilterItemRangecontroller.
 */
export default class ScFilterRangeCtrl {

    $onInit() {
        this.initInput();
    }

    /**
     * @ngdoc method
     * @name $onChanges
     * @methodOf talend.sunchoke.filter-item-range.controller:ScFilterRangeCtrl
     * @description Initialize the filter ranges
     */
    initInput() {
        this.fromValue = this.filterValue.min;
        this.fromValueSaved = this.fromValue;
        this.toValue = this.filterValue.max;
        this.toValueSaved = this.toValue;
    }

    /**
     * @ngdoc method
     * @name $onChanges
     * @methodOf talend.sunchoke.filter-item-range.controller:ScFilterRangeCtrl
     * @description Manage filter range changes
     */
    $onChanges(changes) {
        const model = changes.filterValue;
        if (model) {
            const newModel = model.currentValue;
            if (newModel || newModel === '') {
                this.initInput();
            }
        }
    }

    /**
     * @ngdoc method
     * @name $onChanges
     * @methodOf talend.sunchoke.filter-item-range.controller:ScFilterRangeCtrl
     * @description Manage keyboard action on range filter
     */
    onKeydown(event) {
        // keydown escape
        if (event && event.which === 27) {
            this.fromValue = this.fromValueSaved;
            this.toValue = this.toValueSaved;
        }
        // keydown enter
        if (event && event.which === 13) {
            this.onEdit({
                newValue: { min: this.fromValue, max: this.toValue }
            });
        }
    }
}