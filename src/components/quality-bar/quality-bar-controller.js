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
 * @name talend.sunchoke.quality-bar:ScQualityBarCtrl
 * @description Quality bar controller
 */
export default class ScQualityBarCtrl {

    constructor($timeout) {
        'ngInject';
        this.MIN_QUALITY_WIDTH = 10;
        this.$timeout = $timeout;
    }

    $onInit() {
        this.refreshBars();
    }

    $onChanges(changes) {
        if (changes.hashQuality) {
            this.refreshBars();
        }
    }

    /**
     * @ngdoc method
     * @name enableTransition
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @description Enable animation
     */
    enableTransition() {
        this.blockTransition = false;
    }

    /**
     * @ngdoc method
     * @name refreshBarsWithAnimation
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @description Block animation, reset width to 0 and calculate the new width with animation enabling
     */
    refreshBarsWithAnimation() {
        this.width = {
            invalid: 0,
            empty: 0,
            valid: 0
        };

        this.enableTransition();

        this.$timeout(() => {
            this.computePercent();
            this.computeQualityWidth();
        }, 300);
    }

    /**
     * @ngdoc method
     * @name refreshBars
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @description Refresh the quality bars infos (percent and width)
     * When enterAnimation === 'false', we do NOT animate on first render
     */
    refreshBars() {
        // Do NOT animate on first values and enterAnimation is false
        if (this.enterAnimation === 'false') {
            this.blockTransition = true;
            this.computePercent();
            this.computeQualityWidth();
        }
        else {
            this.refreshBarsWithAnimation();
        }
    }

    /**
     * @ngdoc method
     * @name getMinimalPercent
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @param {string} type The bar type
     * @description Return the adapted width to have a min value if the real value is greater than 0
     */
    getMinimalPercent(type) {
        if (this.quality[type] <= 0) {
            return 0;
        }

        const percent = this.percent[type];
        if (percent < this.MIN_QUALITY_WIDTH) {
            return this.MIN_QUALITY_WIDTH;
        }

        return percent;
    }

    /**
     * @ngdoc method
     * @name reduce
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @param {object} widthObject Object containing the 3 bars width
     * @description Return the modifiable object keys sorted by object value desc.
     * An entry is modifiable if the value is greater than the minimum width
     */
    getOrderedModifiableKeys(widthObject) {
        return (Object.keys(widthObject))
            .filter((key) => {
                return widthObject[key] > this.MIN_QUALITY_WIDTH;
            })
            .sort(function (a, b) {
                if (widthObject[a] > widthObject[b]) {
                    return -1;
                }
                if (widthObject[a] < widthObject[b]) {
                    return 1;
                }
                return 0;
            });
    }

    /**
     * @ngdoc method
     * @name callTranslate
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @param {string} qualityValue The value to translate : VALID_RECORDS, INVALID_RECORDS, EMPTY_RECORD
     * @description Execute the callback function to get the translation
     */
    callTranslate(qualityValue) {
        var res = this.translateFn({ quality: qualityValue });
        return res;
    }

    /**
     * @ngdoc method
     * @name reduce
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @param {object} widthObject Object containing the 3 bars width
     * @param {number} amount The amount to remove from the bars
     * @description Reduce the bars width to fit 100%. The amount value is removed.
     */
    reduce(widthObject, amount) {

        if (amount <= 0) {
            return;
        }

        const orderedKeys = this.getOrderedModifiableKeys(widthObject);
        if (amount <= 2) {
            widthObject[orderedKeys[0]] -= amount;
            return;
        }

        const bigAmountKey = orderedKeys[0];
        const smallAmountKey = orderedKeys.length > 1 ? orderedKeys[1] : orderedKeys[0];
        widthObject[bigAmountKey] -= 2;
        widthObject[smallAmountKey] -= 1;

        this.reduce(widthObject, amount - 3);
    }

    /**
     * @ngdoc method
     * @name computeWidth
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @description  Compute quality bars width
     * WARNING : the percentages must be computed before this function call
     */

    computeQualityWidth() {
        const widthObject = {
            invalid: this.getMinimalPercent('invalid'),
            empty: this.getMinimalPercent('empty'),
            valid: this.getMinimalPercent('valid')
        };

        const diff = (widthObject.invalid + widthObject.empty + widthObject.valid) - 100;
        if (diff > 0) {
            this.reduce(widthObject, diff);
        }

        this.width = widthObject;
    }

    /**
     * @ngdoc method
     * @name computePercent
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @description Compute quality bars percentage
     */

    computePercent() {
        const total = this.quality.empty + this.quality.invalid + this.quality.valid;

        this.percent = {
            invalid: this.quality.invalid <= 0 ? 0 : Math.round(this.quality.invalid * 100 / total),
            empty: this.quality.empty <= 0 ? 0 : Math.round(this.quality.empty * 100 / total),
            valid: this.quality.valid <= 0 ? 0 : Math.round(this.quality.valid * 100 / total)
        };
    }

    /**
     * @ngdoc method
     * @name hashQuality
     * @methodOf talend.sunchoke.quality-bar:ScQualityBarCtrl
     * @description Calculate a simple hash from concatenating values
     */
    hashQuality() {
        return this.quality.empty + '' + this.quality.invalid + '' + this.quality.valid;
    }
}
