import d3 from 'd3';
import d3Tip from 'd3-tip';
d3.tip = d3Tip;

/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/
const BAR_MIN_HEIGHT = 3;

/**
 * @ngdoc controller
 * @name talend.sunchoke.vertical-barchart.controller:ScVerticalBarchartCtrl
 * @description Vertical barchart controller
 */
export default class ScVerticalBarchartCtrl {
    constructor($element, $attrs, $timeout) {
        'ngInject';

        this.$element = $element;
        this.$attrs = $attrs;
        this.$timeout = $timeout;

        this.labelTooltip = this.keyLabel;
        this.activeLimits = this.activeLimits;
        this.containerId = '#' + this.$attrs.id;
    }

    $onInit() {
        this.tooltip = d3.tip()
            .attr('class', 'vertical-barchart-cls d3-tip')
            .offset([0, -11])
            .direction('w')
            .html((primaryDatum, index) => {
                // retrieve value in primaryData
                let tooltipValuePrimary = this.primaryData[index].data;

                // Check in secondaryData if value existing
                let tooltipValueSecondary = this.secondaryData.find((obj) => {
                    return (obj.data.min === tooltipValuePrimary.min && obj.data.max === tooltipValuePrimary.max)
                });
                return this.tooltipContent({
                    keyLabel: this.keyLabel,
                    key: this._getXAxisDomain(primaryDatum),
                    primaryValue: this._getPrimaryValue(primaryDatum),
                    secondaryValue: tooltipValueSecondary ? this._getSecondaryValue(tooltipValueSecondary) : "0"
                });
            });
    }

    $onChanges(changesObj) {
        const firstVisuData = changesObj.primaryData ? changesObj.primaryData.currentValue : null;
        const secondVisuData = changesObj.secondaryData ? changesObj.secondaryData.currentValue : null;
        const firstDataHasChanged = firstVisuData !== this.oldVisuData;

        if (firstDataHasChanged && firstVisuData) {
            this.oldVisuData = firstVisuData;
            this.$element.empty();
            //because the tooltip is not a child of the vertical barchart element
            d3.selectAll('.vertical-barchart-cls.d3-tip').remove();
            //if (firstVisuData) {
                this.$timeout.cancel(this.renderPrimaryTimeout);
                this.renderPrimaryTimeout = this.$timeout(this._renderWholeVBarchart.bind(this, firstVisuData, secondVisuData), 100, false);
            //}
        }
        else if (secondVisuData) {
            this.$timeout.cancel(this.renderSecondaryTimeout);
            this.renderSecondaryTimeout = this.$timeout(this._renderSecondVBars.bind(this, secondVisuData), 100, false);
        }

        if (changesObj.activeLimits) {
            this.$timeout.cancel(this.updateLimitsTimeout);
            this.updateLimitsTimeout = this.$timeout(() => {
                //this.activeLimits = newLimits;
                this._updateBarsLookFeel();
            }, 500, false);
        }
    }

    $onDestroy() {
        //d3.selectAll('.vertical-barchart-cls.d3-tip').remove();
        this.$timeout.cancel(this.renderPrimaryTimeout);
        this.$timeout.cancel(this.renderSecondaryTimeout);
        this.$timeout.cancel(this.updateLimitsTimeout);
    }
    

    //------------------------------------------------------------------------------------------------------
    //------------------------------------------ Data adaptation -------------------------------------------
    //------------------------------------------------------------------------------------------------------
    _getXAxisDomain(data) {
        return this._getRangeLabel(data) || this._getInterval(data);
    }

    _getInterval(data) {
        const range = this._getRangeInfos(data);
        return [range.minLabel, range.maxLabel];
    }

    _getRangeInfos(data) {
        return data[this.keyField];
    }

    _getRangeLabel(data) {
        return data[this.keyField].label;
    }

    _getPrimaryValue(data) {
        return data[this.primaryValueField];
    }

    _getSecondaryValue(data) {
        return data[this.secondaryValueField];
    }

    //------------------------------------------------------------------------------------------------------
    //------------------------------------------- Chart utils ----------------------------------------------
    //------------------------------------------------------------------------------------------------------
    _initChartSizes() {
        this.margin = {
            top: 20,
            right: 20,
            bottom: this.showXAxis ? 100 : 10,
            left: 15
        };
        this.containerWidth = +this.$attrs.width;
        this.containerHeight = +this.$attrs.height + this.margin.bottom;
        this.width = this.containerWidth - this.margin.left - this.margin.right;
        this.height = this.containerHeight - this.margin.top - this.margin.bottom;
    }

    //------------------------------------------------------------------------------------------------------
    //--------------------------------------------- Bar class ----------------------------------------------
    //------------------------------------------------------------------------------------------------------
    _getPrimaryClassName() {
        return this.primaryBarClass ? this.primaryBarClass : 'bar';
    }

    _getSecondaryClassName() {
        return this.secondaryBarClass ? this.secondaryBarClass : 'blueBar';
    }

    _initScales() {
        this.xScale = d3.scale.ordinal().rangeRoundBands([0, this.width], 0.2);
        this.yScale = d3.scale.linear().range([this.height, 0]);
    }

    _configureAxisScales(statData) {
        this.xScale.domain(statData.map((data) => { return this._getXAxisDomain(data);}));
        this.yScale.domain([0, d3.max(statData, (data) => { return this._getPrimaryValue(data);})]);
    }

    _createContainer() {
        this.svg = d3.select(this.containerId)
            .append('svg')
            .attr('class', 'vertical-barchart-cls')
            .attr('width', this.containerWidth)
            .attr('height', this.containerHeight)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.svg.call(this.tooltip);
    }

    _createBarsContainers() {
        this.svg.append('g')
            .attr('class', 'primaryBar');

        this.svg.append('g')
            .attr('class', 'secondaryBar');
    }

    _adaptToMinHeight(realHeight) {
        return realHeight > 0 && realHeight < BAR_MIN_HEIGHT ? BAR_MIN_HEIGHT : realHeight;
    }

    _adaptToMinHeightYPosition(realYPosition) {
        const basePosition = this.yScale(0);
        const barHeight = this._adaptToMinHeight(basePosition - realYPosition);
        return basePosition - barHeight;
    }

    _drawBars(containerClassName, statData, getValue, barClassName) {
        const bars = this.svg.select('.' + containerClassName)
            .selectAll('.' + barClassName)
            .data(statData, (d) => {
                return '' + this._getInterval(d);
            });

        //enter
        bars.enter()
            .append('rect')
            .attr('class', barClassName)
            .attr('x', (d) => {
                return this.xScale(this._getXAxisDomain(d));
            })
            .attr('width', this.xScale.rangeBand())
            .attr('y', () => {
                return this.yScale(0);
            })
            .attr('height', 0)
            .transition().ease('cubic').delay(function (d, i) {
                return i * 10;
            })
            .attr('height', (d) => {
                const realHeight = this.height - this.yScale(getValue(d));
                return this._adaptToMinHeight(realHeight);
            })
            .attr('y', (d) => {
                const realYPosition = this.yScale(getValue(d));
                return this._adaptToMinHeightYPosition(realYPosition);
            });

        //update
        bars.transition().ease('exp').delay(function (d, i) {
            return i * 30;
        })
            .attr('height', (d) => {
                const realHeight = this.height - this.yScale(getValue(d));
                return this._adaptToMinHeight(realHeight);
            })
            .attr('y', (d) => {
                const realYPosition = this.yScale(getValue(d));
                return this._adaptToMinHeightYPosition(realYPosition);
            });
    }

    _drawXAxis() {
        this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.svg.axis()
                .scale(this.xScale)
                .orient('bottom')
                .ticks(5)
        )
            .selectAll('text')
            .attr('y', 5)
            .attr('x', -9)
            .attr('dy', '.35em')
            .style('text-anchor', 'end')
            .attr('transform', 'rotate(295)');
    }

    _drawYAxis() {
        this.svg.append('g')
            .attr('class', 'yAxis')
            .append('text')
            .attr('x', - this.height / 2)
            .attr('y', -2)
            .attr('transform', 'rotate(-90)')
            .style('text-anchor', 'middle')
            .text(this.labelTooltip);
    }

    _drawHorizontalGrid() {
        const minSizeBetweenGrid = 20;
        const ticksThreshold = Math.ceil(this.height / minSizeBetweenGrid);
        const ticksNbre = this.yScale.domain()[1] > ticksThreshold ? ticksThreshold : this.yScale.domain()[1];

        this.svg.append('g')
            .attr('class', 'grid')
            .call(d3.svg.axis()
                .scale(this.yScale  )
                .orient('right')
                .tickSize(this.width, 0, 0)
                .tickFormat(d3.format(',d'))
                .ticks(ticksNbre)
        )
            //place text
            .selectAll('.tick text')
            .attr('y', -5)
            .attr('x', this.width)
            .attr('dy', '.15em')
            .style('text-anchor', 'end');
    }

    _drawHoverBars(statData) {
        this.svg.selectAll('g.bg-rect')
            .data(statData)
            .enter()
            .append('g')
            .attr('class', 'hover')
            .attr('transform', (d) => {
                return 'translate(' + (this.xScale(this._getXAxisDomain(d)) - 2) + ', 0)';
            })
            .append('rect')
            .attr('width', this.xScale.rangeBand() + 4)
            .attr('height', this.height)
            .attr('class', 'bg-rect')
            .style('opacity', 0)
            .on('mouseenter', (d, i) => {
                d3.select(d3.selectAll('rect.bg-rect')[0][i]).style('opacity', 0.4);
                this.tooltip.show(d, i);
            })
            .on('mouseleave', (d, i) => {
                d3.select(d3.selectAll('rect.bg-rect')[0][i]).style('opacity', 0);
                this.tooltip.hide(d);
            })
            .on('click', (d) => {
                const eventKeyPressed = { ctrlPressed : false, shiftPressed : false };
                //create a new reference as the data object could be modified outside the component
                if(d3.event.ctrlKey || d3.event.metaKey) {
                    eventKeyPressed.ctrlPressed = true;
                }
                else if(d3.event.shiftKey) {
                    eventKeyPressed.shiftPressed = true;
                }
                //create a new reference as the data object could be modified outside the component
                const rangeInfo = this._getRangeInfos(d);
                this.onClick({eventObject: { eventKeyPressed: eventKeyPressed, interval: { ...rangeInfo}}});
            });
    }

    //------------------------------------------------------------------------------------------------------
    //------------------------------------------- Chart render ---------------------------------------------
    //------------------------------------------------------------------------------------------------------
    _renderWholeVBarchart(firstVisuData, secondVisuData) {
        this._initChartSizes();
        this._initScales();
        this._createContainer();
        this._configureAxisScales(firstVisuData);
        this._createBarsContainers();
        if (this.showXAxis) {
            this._drawXAxis(firstVisuData);
        }
        this._drawBars('primaryBar', firstVisuData, this._getPrimaryValue.bind(this), this._getPrimaryClassName());
        this._renderSecondVBars(secondVisuData);

        this._drawHorizontalGrid();
        this._drawYAxis();
        this._drawHoverBars(firstVisuData);
        this.buckets = d3.selectAll('rect.bar');
    }

    _renderSecondVBars(secondVisuData) {
        if (secondVisuData) {
            this._drawBars('secondaryBar', secondVisuData, this._getSecondaryValue.bind(this), this._getSecondaryClassName());
        }
    }

    _updateBarsLookFeel() {
        if (this.activeLimits) {
            this.buckets.transition()
                .delay(function (d, i) {
                    return i * 10;
                })
                .style('opacity', (d) => {
                    const range = this._getRangeInfos(d);
                    const rangeMin = range.min;
                    const rangeMax = range.max;
                    const minLimit = this.activeLimits[0];
                    const maxLimit = this.activeLimits[1];
                    return rangeMin === minLimit || (rangeMin < maxLimit && rangeMax > minLimit) ? '1' : '.4';
                });
        }
    }
}