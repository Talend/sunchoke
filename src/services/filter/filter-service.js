import FilterModelFactory from './factory/filter-model-factory.js';
import { FILTER_TYPE } from './model/filter-const.js';

/**
 * @ngdoc service
 * @name talend.sunchoke.filter:FilterService
 * @description Filter service. This service provide the entry point to manipulate filters
 */
export default class FilterService {

    constructor() {
        this.FilterModelFactory = new FilterModelFactory();
        this.filterType = FILTER_TYPE;
    }

    /**
     * @ngdoc method
     * @name updateFilter
     * @methodOf talend.sunchoke.filter.service:FilterService
     * @param actualFilter the current filter list
     * @param configuration the configuration to apply to the filter list
     * @description updates the current filter list with the given configuration
     */
    updateFilter(actualFilter, configuration /*{ type: '', options: { value: [], overwriteMode : true }, ... }*/) {
        let hasChanged = false;
        //const configuration = processConfiguration(newConfiguration/*({ filterType: '', values: [], ... }*/);
        //processing filter to look for modifications
        const result = actualFilter
            .map(filter => {
                const newFilter = filter.update(configuration);
                hasChanged = newFilter !== filter;
                return newFilter
            })
            //removing the filter which were removed
            .filter(filter => filter !== null);

        if (hasChanged) {
            return result;
        }
        else {
            //creating new filter
            const newFilter = this.FilterModelFactory.createFilter(configuration);
            return result.concat(newFilter);
        }
        //state.filters = ScFilter.fromTQL(tql);
    }

    /**
     * @ngdoc method
     * @name removeFilter
     * @methodOf talend.sunchoke.filter.service:FilterService
     * @param actualFilter the current filter list
     * @param configuration the configuration to apply to the filter list
     * @description removes the given filter of the filter list
     * @return the new filter list
     */
    removeFilter(actualFilters, configuration /*filter*/) {
        const { filter } = configuration;
        return actualFilters.filter(nextFilter => {
            return filter !== nextFilter;
        });
    }

    //-----------------------------------------------------------------------------------------------
    // values
    //-----------------------------------------------------------------------------------------------

    /**
     * @ngdoc method
     * @name addFilterValue
     * @methodOf talend.sunchoke.filter.service:FilterService
     * @param actualFilter the current filter list
     * @param configuration the configuration to apply to the filter list
     * @description add the given configuration value to the filter values
     * @return a new filter with the new filter values
     */
    addFilterValue(actualFilters, configuration /*filter, newValue*/) {
        const { filter, newValue } = configuration;
        return actualFilters.map(nextFilter => {
            if(filter === nextFilter) {
                return filter.addValue(newValue);
            }
            return nextFilter;
        }).filter(filter => filter !== null);
    }

    /**
     * @ngdoc method
     * @name updateFilterValue
     * @methodOf talend.sunchoke.filter.service:FilterService
     * @param actualFilter the current filter list
     * @param configuration the configuration to apply to the filter list
     * @description updates the current filter list with the given configuration
     * @return a new filter with the new filter values
     */
    updateFilterValue(actualFilters, configuration /*filter, oldValue, newValue*/) {
        const { filter, oldValue, newValue } = configuration;

        return actualFilters.map(nextFilter => {
            if(filter === nextFilter) {
                return filter.updateValue(oldValue, newValue);
            }
            return nextFilter;
        }).filter(filter => filter !== null);
    }

    /**
     * @ngdoc method
     * @name removeFilterValue
     * @methodOf talend.sunchoke.filter.service:FilterService
     * @param actualFilter the current filter list
     * @param configuration the configuration to apply to the filter list
     * @description remove the given configuration value from the current filter list
     * @return a new filter with the new filter values
     */
    removeFilterValue(actualFilters, configuration  /*filter, value*/) {
        const { filter, value } = configuration;

        return actualFilters.map(nextFilter => {
            if(filter === nextFilter) {
                return filter.removeValue(value);
            }
            return nextFilter;
        }).filter(filter => filter !== null);
    }

    /**
     * @ngdoc method
     * @name toggleFilterValue
     * @methodOf talend.sunchoke.filter.service:FilterService
     * @param actualFilter the current filter list
     * @param configuration the configuration to apply to the filter list
     * @description toggle the given filter
     * @return a new filter with the new filter values
     */
    toggleFilterValue(actualFilters, configuration/*filter, value*/) {
        const { filter, value } = configuration;

        return actualFilters.map(nextFilter => {
            if(filter === nextFilter) {
                return filter.toggleValue(value);
            }
            return nextFilter;
        }).filter(filter => filter !== null);
    }

    // triggered by other components
        setFilterValues(/*filter, values*/) {}
}