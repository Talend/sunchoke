/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/
const BAR_MIN_WIDTH = 3;
/**
 * @ngdoc controller
 * @name talend.sunchoke.horizontal-barchart.controller:ScHorizontalBarchartCtrl
 * @description Horizontal barchart controller
 */

import d3 from 'd3';
import tip from 'd3-tip';
d3.tip = tip;

export default class ScHorizontalBarchartCtrl {
    constructor($timeout, $attrs, $element) {
        'ngInject';
        this.$timeout = $timeout
        this.$attrs = $attrs
        this.$element = $element
        this.containerId = '#' + this.$attrs.id;
    }

    $onInit() {

        this.margin = {top: 15, right: 20, bottom: 10, left: 10};
        this.containerWidth = +this.$attrs.width;
        this.tooltip = d3.tip()
            .attr('class', 'horizontal-barchart-cls d3-tip')
            .offset([-10, 0])
            .html((primaryDatum, index) => {
                // retrieve value in primaryData
                let tooltipValue = this.primaryData[index].formattedValue;

                // Check in secondaryData if value existing
                let toolTipFounded = this.secondaryData.find((obj) => {
                    return obj.formattedValue === tooltipValue
                });

                return this.tooltipContent({
                    keyLabel: this.keyLabel,
                    key: this._getKey(primaryDatum),
                    primaryValue: this._getPrimaryValue(primaryDatum),
                    secondaryValue: toolTipFounded ? this._getSecondaryValue(toolTipFounded) : "0"
                });
            });
    }

    $onChanges(changesObj) {
        var firstVisuData = changesObj.primaryData ? changesObj.primaryData.currentValue : null;
        var secondVisuData = changesObj.secondaryData ? changesObj.secondaryData.currentValue : null;
        var firstDataHasChanged = firstVisuData !== this.oldVisuData;
        if (firstDataHasChanged && firstVisuData) {
            this.oldVisuData = firstVisuData;
            this.$element.empty();
            //because the tooltip is not a child of the horizontal barchart element
            d3.selectAll('.horizontal-barchart-cls.d3-tip').remove();
            this.$timeout.cancel(this.renderPrimaryTimeout);
            this.renderPrimaryTimeout = this.$timeout(this._renderWholeHBarchart.bind(this, firstVisuData, secondVisuData), 100, false);
        }

        else if (secondVisuData) {
            this.$timeout.cancel(this.renderSecondaryTimeout);
            this.renderSecondaryTimeout = this.$timeout(this._renderSecondaryBars.bind(this, secondVisuData), 100, false);
        }

    }

    //------------------------------------------------------------------------------------------------------
    //---------------------------------------- Data manipulation -------------------------------------------
    //------------------------------------------------------------------------------------------------------
    _getKey(data) {
        // return the true value
        return data[this.keyField].value;
    }

    _getLabel(data) {
        //return the formated value
        return data[this.keyField].label;
    }

    _getPrimaryValue(data) {
        return data[this.primaryValueField];
    }

    _getSecondaryValue(data) {
        return data[this.secondaryValueField];
    }

    //------------------------------------------------------------------------------------------------------
    //--------------------------------------------- Bar class ----------------------------------------------
    //------------------------------------------------------------------------------------------------------
    _getPrimaryClassName() {
        return this.primaryBarClass ? this.primaryBarClass : 'transparentBar';
    }

    _getSecondaryClassName() {
        return this.secondaryBarClass ? this.secondaryBarClass : 'blueBar';
    }

    _initScales(width, height) {
        this.xScale = d3.scale.linear().range([0, width]);
        this.yScale = d3.scale.ordinal().rangeBands([0, height], 0.18);
    }

    _configureScales(statData) {
        this.xScale.domain([0, d3.max(statData, (data) => {
            return this._getPrimaryValue(data);
        })]);
        this.yScale.domain(statData.map((data) => {
            return this._getKey(data);
        }));
    }

    _initAxes(height) {
        var ticksThreshold;
        if (this.xScale.domain()[1] >= 1e9) {
            ticksThreshold = 2;
        }
        else if (this.xScale.domain()[1] < 1e9 && this.xScale.domain()[1] >= 1e6) {
            ticksThreshold = 3;
        }
        else if (this.xScale.domain()[1] < 1e6 && this.xScale.domain()[1] >= 1e3) {
            ticksThreshold = 5;
        }
        else {
            ticksThreshold = 7;
        }
        var ticksNbre = this.xScale.domain()[1] > ticksThreshold ? ticksThreshold : this.xScale.domain()[1];

        this.xAxis = d3.svg.axis()
            .scale(this.xScale)
            .tickFormat(d3.format(',d'))
            .orient('top')
            .tickSize(-height)
            .ticks(ticksNbre);
    }

    _createContainer(width, height) {
        this.svg = d3.select(this.containerId)
            .append('svg')
            .attr('class', 'horizontal-barchart-cls')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.svg.call(this.tooltip);
    }

    _drawGrid() {
        this.svg.append('g')
            .attr('class', 'grid')
            .call(this.xAxis)
            .selectAll('.tick text')
            .style('text-anchor', 'middle');
    }

    _createBarsContainers() {
        this.svg.append('g')
            .attr('class', 'primaryBar');

        this.svg.append('g')
            .attr('class', 'secondaryBar');
    }

    _adaptToMinHeight(realWidth) {
        return realWidth > 0 && realWidth < BAR_MIN_WIDTH ? BAR_MIN_WIDTH : realWidth;
    }

    _drawBars(containerClassName, statData, getValue, barClassName) {
        var bars = this.svg.select('.' + containerClassName)
            .selectAll('.' + barClassName)
            .data(statData, (d) => {
                return this._getKey(d);
            });

        //enter
        bars.enter()
            .append('rect')
            .attr('class', barClassName)
            .attr('transform', (d) => {
                return 'translate(0,' + this.yScale(this._getKey(d)) + ')';
            })
            .attr('height', this.yScale.rangeBand())
            .attr('width', this.xScale(0))
            .transition().delay(function (d, i) {
                return i * 30;
            })
            .attr('width', (d) => {
                var realWidth = this.xScale(getValue(d));
                return this._adaptToMinHeight(realWidth);
            });

        //update
        bars.transition()
            .ease('exp')
            .delay(function (d, i) {
                return i * 30;
            })
            .attr('width', (d) => {
                var realWidth = this.xScale(getValue(d));
                return this._adaptToMinHeight(realWidth);
            });
    }

    _drawKeysLabels(statData, width) {

        this.svg.append('g')
            .attr('class', 'labels')
            .selectAll('label')
            .data(statData)
            .enter()

            //label container
            .append('foreignObject')
            .attr('width', width)
            .attr('height', this.yScale.rangeBand())
            .attr('transform', (d) => {
                return 'translate(0,' + this.yScale(this._getKey(d)) + ')';
            })

            //label
            .append('xhtml:div')
            .attr('class', 'label ' + this._getSecondaryClassName())
            .html((d) => {
                const value = this._getLabel(d);
                return value || value === false ? value : '(EMPTY)';
            });
    }

    _drawHoverBars(statData, width) {
        this.svg.selectAll('g.bg-rect')
            .data(statData)
            .enter()
            .append('g')
            .attr('class', 'hover')
            .attr('transform', (d)=> {
                return 'translate(0, ' + (this.yScale(this._getKey(d)) - 2) + ')';
            })
            .append('rect')
            .attr('width', () => {
                return width;
            })
            .attr('height', this.yScale.rangeBand() + 4)
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
                const eventKeyPressed = {ctrlPressed: false, shiftPressed: false};
                //create a new reference as the data object could be modified outside the component
                if (d3.event.ctrlKey || d3.event.metaKey) {
                    eventKeyPressed.ctrlPressed = true;
                }
                else if (d3.event.shiftKey) {
                    eventKeyPressed.shiftPressed = true;
                }
                //create a new reference as the data object could be modified outside the component
                this.onClick({eventObject: {eventKeyPressed: eventKeyPressed, item: {...d}}});
            });
    }

    _renderWholeHBarchart(firstVisuData, secondVisuData) {
        // Chart sizes dynamically computed (it depends on the bars number)
        var containerHeight = Math.ceil(((+this.$attrs.height) / 15) * (firstVisuData.length + 1));
        var width = this.containerWidth - this.margin.left - this.margin.right;
        var height = containerHeight - this.margin.top - this.margin.bottom;
        this._initScales(width, height);
        this._configureScales(firstVisuData);
        this._initAxes(height);
        this._createContainer(this.containerWidth, containerHeight);
        this._drawGrid();
        this._createBarsContainers();
        this._drawBars('primaryBar', firstVisuData, this._getPrimaryValue.bind(this), this._getPrimaryClassName());
        this._renderSecondaryBars(secondVisuData);
        this._drawKeysLabels(firstVisuData, width);
        this._drawHoverBars(firstVisuData, width);
    }

    _renderSecondaryBars(secondVisuData) {
        if (secondVisuData) {
            this._drawBars('secondaryBar', secondVisuData, this._getSecondaryValue.bind(this), this._getSecondaryClassName());
        }
    }

    $onDestroy() {
        d3.selectAll('.horizontal-barchart-cls.d3-tip').remove();
        this.$timeout.cancel(this.renderPrimaryTimeout);
        this.$timeout.cancel(this.renderSecondaryTimeout);
    }

}
