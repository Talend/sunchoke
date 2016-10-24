/* eslint-disable */
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
 * @name talend.sunchoke.list-editor.controller:ScListEditorCtrl
 * @description List editor controller
 */
export default class ScListEditorCtrl {
	constructor($timeout, $element) {
		'ngInject';
		this.$timeout = $timeout;
		this.$element = $element;
	}

	/**
	 * @ngdoc method
	 * @name $onInit
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @description Hook when controller is initialized
	 */
	$onInit() {
		this.editMode = false;
		this.selectedIds = [];
		if (!this.ngModel) {
			this.ngModel = {
				listTitle: this.listTitle,
				items: this.selectedIds
			};
		}
		this.api = {
			renameItem: this.renameItem,
			deleteItem: this.deleteItem,
			groups: this.groups,
			selectedIds: this.selectedIds
		}
	}

	/**
	 * @ngdoc method
	 * @name focusInput
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @description Method called on + button to focus the input
	 */
	focusInput() {
		this.$element.find("input")[0].focus();
	}

	/**
	 * @ngdoc method
	 * @name renameItem
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @description Member of the api, rename an item with a other
	 * @param oldName ancien label
	 * @param newName nouveau label
	 */
	renameItem(oldName, newName) {
		for (let i = 0; i < this.groups.length; i++) {
			for (let j = this.groups[i].items.length; j--;) {
				if (this.groups[i].items[j].label === oldName) {
					this.groups[i].items[j].label = newName;
				}
			}
		}
	}

	/**
	 * @ngdoc method
	 * @name renameItem
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @description Member of the api, rename an item with a other
	 * @param itemId the id to delete
	 */
	deleteItem(itemId) {

		for (let i = 0; i < this.groups.length; i++) {
			for (let j = this.groups[i].items.length; j--;) {
				if (this.groups[i].items[j].id == itemId) {
					this.groups[i].items.splice(j, 1);
				}
			}
		}
		for (let i = 0; i < this.selectedIds.length; i++) {
			if (this.selectedIds[i].id == itemId) {
				this.selectedIds.splice(i, 1);
			}
		}
	}

	/**
	 * @ngdoc method
	 * @name activateEdition
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @description Function called when the title is edited
	 */
	activateEdition() {
		this.editTitle = this.listTitle;
		this.editMode = true;

		this.$timeout(()=> {
			const titleInput = this.$element.find('input')[0];
			titleInput.focus();
		}, 0);
	}

	/**
	 * @ngdoc method
	 * @name validateEditon
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @description validate the title edition
	 */
	validateEditon() {
		if (this.editTitle !== '') {
			this.listTitle = this.editTitle;
			this.ngModel.listTitle = this.listTitle;
		}
		this.editMode = false;
	}

	/**
	 * @ngdoc method
	 * @name onFilterKeyDown
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @param {object} event the keydown event
	 * @description keydown on filter box
	 */
	onFilterKeyDown(event) {
		//Escape key
		if (event.keyCode === 27) {
			this.showAutocompleteBox = false;
		}
	}

	/**
	 * @ngdoc method
	 * @name editModeKeyPressed
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @param {object} event the keypressed event
	 * @description keypressed handler on title
	 */
	editModeKeyPressed(event) {
		//Enter key
		if (event.keyCode === 13) {
			this.validateEditon();
		}
		//Escape key
		if (event.keyCode === 27) {
			this.editMode = false;
		}
	}

	/**
	 * @ngdoc method
	 * @name selectItem
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @param {object} event the mousedown event
	 * @param {object} item the item in one group
	 * @description mousedown handler on item
	 */
	selectItem(event, item) {

		if (this.selectedIds.indexOf(item) === -1) {
			this.selectedIds.unshift(item);
		}
		else {
			event.preventDefault();
		}
	}

	/**
	 * @ngdoc method
	 * @name getBadgeStyle
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @param string itemId item's id
	 * @description get badge background color
	 */
	getBadgeStyle(itemId) {

		const style = {};
		for (let i = 0; i < this.groups.length; i++) {
			for (let j = 0; j < this.groups[i].items.length; j++) {
				if (this.groups[i].items[j].id === itemId) {
					const group = this.groups[i];
					if (group.badgeBackgroundColor) {
						style.backgroundColor = group.badgeBackgroundColor;
					}
				}
			}
		}
		return style;
	}

	/**
	 * @ngdoc method
	 * @name getBadgeIcon
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @param string itemId item's id
	 * @description get badge's icon
	 */
	getBadgeIcon(itemId) {

		for (let i = 0; i < this.groups.length; i++) {
			for (let j = 0; j < this.groups[i].items.length; j++) {
				if (this.groups[i].items[j].id === itemId) {
					return this.groups[i].icon;
				}
			}
		}
	}

	/**
	 * @ngdoc method
	 * @name getLabelById
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @param string itemId item's id
	 * @description get badge's label
	 */
	getLabelById(itemId) {

		for (let i = 0; i < this.groups.length; i++) {
			for (let j = 0; j < this.groups[i].items.length; j++) {
				if (this.groups[i].items[j].id === itemId) {
					return this.groups[i].items[j].label;
				}
			}
		}
	}

	/**
	 * @ngdoc method
	 * @name removeSelectedItem
	 * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
	 * @param string itemId item's id
	 * @description remove the label, triggered by click on cross
	 */
	removeSelectedItem(itemId) {
		if (this.selectedIds.indexOf(itemId) !== -1) {
			this.selectedIds.splice(this.selectedIds.indexOf(itemId), 1);
		}
	}

}