/*  ============================================================================

 Copyright (C) 2006-2016 Talend Inc. - www.talend.com

 This source code is available under agreement available at
 https://github.com/Talend/data-prep/blob/master/LICENSE

 You should have received a copy of the agreement
 along with this program; if not, write to Talend SA
 9 rue Pages 92150 Suresnes, France

 ============================================================================*/

import Pikaday from "./pikaday-override";

/**
 * @ngdoc controller
 * @name talend.sunchoke.date-picker.controller:ScDatePickerCtrl
 * @description Date picker controller
 */
export default class ScDatePickerCtrl {
  constructor( $element ) {
    'ngInject';
    this.$element = $element;
    this.focusState = false;
  }


  /**
   * @ngdoc method
   * @name $onInit
   * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
   * @description Hook when controller is initialized
   */
  $onInit() {
    //Get the input in the element dom
    const input = this.$element.find('input')[0];
    //Config object for pikaday
    const config ={
      showDaysInNextAndPreviousMonths: true,
      controller: this,
      field : input,
      onClose : this.onCloseHandler,
      i18n: {
        previousMonth : 'Previous Month',
        nextMonth     : 'Next Month',
        months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
        weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        none: "None"
      },
      firstDay:0,
      noneButton: false,
      format: 'MMM D, YYYY'
    };

    //Get all specific configuration
    for ( const configKey in this.config ){
      //protect controller & field parameters
      if( configKey !== 'controller' && configKey !== 'field'){
        config[configKey] = this.config[configKey];
      }
    }

    this.pikaday = new Pikaday( config );
  }

  /**
   * @ngdoc method
   * @name $onDestroy
   * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
   * @description Method called when the controller is destroyed
   */
  $onDestroy() {
    this.pikaday.destroy();
  }

  /**
   * @ngdoc method
   * @name onCloseHandler
   * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
   * @description This method is called when datepicker value changed ( onClose )
   */
  onCloseHandler(){

    //if there is a controller
    if( this._o && this._o.controller ){
      //get the controller
      const actualController = this._o.controller;
      //if there is a date
      if( this._d ){
        //get the date timestamp
        actualController.ngModel = this._d.getTime();
      }
      //if there is no date, the value may be reset
      else{
        //set null to ngmodel
        actualController.ngModel = null;
      }
    }
  }

  /**
   * @ngdoc method
   * @name setFocus
   * @methodOf talend.sunchoke.date-picker.controller:ScDatePickerCtrl
   * @description This method is called when gain or loose focus
   */
  setFocus( focusState ){
    this.focusState = focusState;
  }

}