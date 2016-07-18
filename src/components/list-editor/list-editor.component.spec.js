/*  ============================================================================

  Copyright (C) 2006-2016 Talend Inc. - www.talend.com

  This source code is available under agreement available at
  https://github.com/Talend/data-prep/blob/master/LICENSE

  You should have received a copy of the agreement
  along with this program; if not, write to Talend SA
  9 rue Pages 92150 Suresnes, France

  ============================================================================*/

describe('List editor component', () => {
    let createElement, scope, element, ctrl;

    beforeEach(angular.mock.module('talend.sunchoke.list-editor'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        createElement = (config) => {

            if( angular.isUndefined(config) ){
                config = '{}';
            }

            const template = `
                <sc-list-editor ng-model="modelValue">
                </sc-list-editor>
            `;
            element = $compile(template)(scope);
            scope.$digest();
            ctrl = element.controller('scListEditor');
        };
    }));

    afterEach(() => {

    });

    it('should test the activateEdition function', inject(($timeout) => {
        //given

        //when
        createElement();
        ctrl.title = "title1";

        ctrl.activateEdition();
        $timeout.flush();

        expect(ctrl.editMode).toBe(true);
        expect(ctrl.editTitle).toBe("title1");

    }));

    it('should test the validateEditon function', () => {

        createElement();
        ctrl.title = "title1";
        expect(ctrl.title).toBe("title1");

        ctrl.editTitle = "title2";
        ctrl.validateEditon();
        expect(ctrl.title).toBe("title2");

        ctrl.editTitle = "title3";
        ctrl.validateEditon();
        expect(ctrl.title).toBe("title3");

        ctrl.editTitle = "";
        ctrl.validateEditon();
        expect(ctrl.title).toBe("title3");

    });

    it('should test the editModeKeyPressed function', () => {

        createElement();
        ctrl.title = "title1";
        ctrl.editTitle = "title2";

        const event = {keyCode:27};
        ctrl.editModeKeyPressed(event);
        expect(ctrl.title).toBe("title1");

        event.keyCode = 13;
        ctrl.editModeKeyPressed(event);
        expect(ctrl.title).toBe("title2");

    });

    it('should test the selectItem function', () => {

        createElement();
        const event = {preventDefault:function(){}};
        spyOn(event,'preventDefault');

        const item = {id:"id1"};
        ctrl.selectItem( event, item );

        expect(ctrl.selectedIds.length).toBe(1);
        expect(ctrl.selectedIds[0]).toBe("id1");

        ctrl.selectItem( event, item );

        expect(ctrl.selectedIds.length).toBe(1);
        expect(event.preventDefault).toHaveBeenCalled();

    });


    it('should test the getBadgeStyle function', () => {

        createElement();

        ctrl.groups = [{
                icon: './test.svg',
                badgeBackgroundColor: '#266092',
                items: [{id: "id1", label: "Name 1"},{id: "id2", label: "Name 2"}]
            },{
                items: [{id: "id3", label: "Name 3"},{id: "id4", label: "test 4"}]
            }
        ];

        let style = ctrl.getBadgeStyle("id1");
        expect(style.backgroundColor).toBe("#266092");

        style = ctrl.getBadgeStyle("id3");
        expect(style.backgroundColor).toBeUndefined();

        style = ctrl.getBadgeStyle("id2");
        expect(style.backgroundColor).toBe("#266092");

    });

    it('should test the getBadgeIcon function', () => {

        createElement();

        ctrl.groups = [{
            icon: './test.svg',
            badgeBackgroundColor: '#266092',
            items: [{id: "id1", label: "Name 1"},{id: "id2", label: "Name 2"}]
        },{
            items: [{id: "id3", label: "Name 3"},{id: "id4", label: "test 4"}]
        }
        ];


        expect(ctrl.getBadgeIcon("id1")).toBe("./test.svg");
        expect(ctrl.getBadgeIcon("id3")).toBeUndefined();
        expect(ctrl.getBadgeIcon("id2")).toBe("./test.svg");

    });

    it('should test the getLabelById function', () => {

        createElement();

        ctrl.groups = [{
            icon: './test.svg',
            badgeBackgroundColor: '#266092',
            items: [{id: "id1", label: "Name 1"},{id: "id2", label: "Name 2"}]
        },{
            items: [{id: "id3", label: "Name 3"},{id: "id4", label: "test 4"}]
        }];


        expect(ctrl.getLabelById("id1")).toBe("Name 1");
        expect(ctrl.getLabelById("id3")).toBe("Name 3");
        expect(ctrl.getLabelById("id2")).toBe("Name 2");
        expect(ctrl.getLabelById("id5")).toBeUndefined();

    });

    it('should test the getLabelById function', () => {

        createElement();

        ctrl.selectedIds = ["id1","id2","id3","id4"];

        ctrl.removeSelectedItem("id1");
        expect(ctrl.selectedIds).toEqual(["id2","id3","id4"]);
        ctrl.removeSelectedItem("id5");
        expect(ctrl.selectedIds).toEqual(["id2","id3","id4"]);
        ctrl.removeSelectedItem("id3");
        expect(ctrl.selectedIds).toEqual(["id2","id4"]);

    });

    it('should test the onFilterKeyDown function', () => {

        createElement();
        ctrl.showAutocompleteBox = true;

        const event = {keyCode : 20};
        ctrl.onFilterKeyDown(event);
        expect(ctrl.showAutocompleteBox).toBeTruthy();
        event.keyCode = 27;
        ctrl.onFilterKeyDown(event);
        expect(ctrl.showAutocompleteBox).toBeFalsy();

    });

});