"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-56a972"],{

/***/ 47703:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/constants/field-name.patterns.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fieldNameError: () => (/* binding */ fieldNameError),
/* harmony export */   fieldNamePattern: () => (/* binding */ fieldNamePattern)
/* harmony export */ });
const fieldNamePattern = /^[A-Za-z][A-Za-z0-9]+$/;
const fieldNameError = 'Standard letters and numbers are allowed. Must start with a letter.';

/***/ }),

/***/ 99274:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/add-sharing-fields/add-sharing-fields.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddSharingFieldsComponent: () => (/* binding */ AddSharingFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/content-types-fields.service */ 83051);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 51903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 43143);
/* harmony import */ var _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-administration/constants/field-name.patterns */ 47703);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/shared/base-feature.component */ 9006);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _edit_content_type_fields_reserved_names_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-content-type-fields/reserved-names.directive */ 35160);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _features_feature_icon_indicator_feature_icon_indicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/feature-icon-indicator/feature-icon-indicator.component */ 83703);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _features_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../features/services/feature-detail.service */ 45943);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);

































const _c0 = ["ngForm"];
function AddSharingFieldsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", field_r2.ContentType.Name, " ");
  }
}
function AddSharingFieldsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", field_r3.StaticName, " ");
  }
}
function AddSharingFieldsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", field_r4.Type, " ");
  }
}
function AddSharingFieldsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 28)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSharingFieldsComponent_td_23_Template_button_click_1_listener() {
      const field_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.selectField(field_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 29);
  }
}
function AddSharingFieldsComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 30);
  }
}
function AddSharingFieldsComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "New Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_td_32_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-field-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isError", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.fieldNameError);
  }
}
function AddSharingFieldsComponent_td_32_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-field-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    const newName_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isError", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", newName_r10.errors.reservedNames, " ");
  }
}
function AddSharingFieldsComponent_td_32_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AddSharingFieldsComponent_td_32_Conditional_6_Conditional_0_Template, 2, 2, "app-field-hint", 33)(1, AddSharingFieldsComponent_td_32_Conditional_6_Conditional_1_Template, 2, 2, "app-field-hint", 33);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const newName_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](0, newName_r10.errors.pattern ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](1, newName_r10.errors.reservedNames ? 1 : -1);
  }
}
function AddSharingFieldsComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 28)(1, "mat-form-field", 31)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "New Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 32, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function AddSharingFieldsComponent_td_32_Template_input_ngModelChange_4_listener($event) {
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](item_r9.newName, $event) || (item_r9.newName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AddSharingFieldsComponent_td_32_Conditional_6_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r11 = ctx.index;
    const newName_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pattern", ctx_r6.fieldNamePattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", item_r9.newName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", "StaticName" + i_r11)("appReservedNames", ctx_r6.reservedNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](6, newName_r10.errors ? 6 : -1);
  }
}
function AddSharingFieldsComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", item_r12.field.ContentType.Name, "/", item_r12.field.StaticName, " (", item_r12.field.Type, ") ");
  }
}
function AddSharingFieldsComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 28)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSharingFieldsComponent_td_38_Template_button_click_1_listener() {
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.removeField(item_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddSharingFieldsComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 29);
  }
}
function AddSharingFieldsComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 30);
  }
}
class AddSharingFieldsComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(dialogData, dialogRef, contentTypesFieldsService, snackBar,
  // All this is just for the feature dialog
  dialog, viewContainerRef, changeDetectorRef) {
    super();
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.contentTypesFieldsService = contentTypesFieldsService;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.hostClass = 'dialog-component';
    this.displayedShareableFieldsColumns = ['contentType', 'name', 'type', 'share'];
    this.displayedSelectedFieldsColumns = ['newName', 'source', 'remove'];
    this.shareableFields = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
    this.selectedFields = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
    this.fieldNamePattern = _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_2__.fieldNamePattern;
    this.fieldNameError = _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_2__.fieldNameError;
    this.saving$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(false);
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_3__.FeaturesService);
    this.fieldShareConfigManagement = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_4__.FeatureNames.FieldShareConfigManagement);
    this.dialogRef.disableClose = true;
    this.subscriptions.add(this.dialogRef.backdropClick().subscribe(() => {
      if (this.form.dirty || this.selectedFields.data.length > 0) {
        const confirmed = confirm('You have unsaved changes. Are you sure you want to close this dialog?');
        if (!confirmed) {
          return;
        }
      }
      this.closeDialog();
    }));
  }
  ngOnInit() {
    // TODO: @SDV Try to find a better way to do this
    this.subscriptions.add(this.contentTypesFieldsService.getShareableFields().subscribe(shareableFields => {
      this.shareableFields.data = shareableFields;
    }));
    this.subscriptions.add(this.contentTypesFieldsService.getReservedNames().subscribe(reservedNames => {
      const existingFields = {};
      this.dialogData.existingFields.forEach(field => {
        existingFields[field.StaticName] = 'Field with this name already exists';
      });
      this.reservedNames = {
        ...reservedNames,
        ...existingFields
      };
    }));
  }
  ngOnDestroy() {
    this.saving$.complete();
    super.ngOnDestroy();
  }
  // TODO: @SDV Try to find a better way to do this
  selectField(field) {
    const selectedFields = this.selectedFields.data;
    selectedFields.push({
      newName: field.StaticName,
      field
    });
    this.selectedFields.data = selectedFields;
  }
  // TODO: @SDV Try to find a better way to do this
  removeField(field) {
    const selectedFields = this.selectedFields.data;
    selectedFields.splice(selectedFields.indexOf(field), 1);
    this.selectedFields.data = selectedFields;
  }
  // When API gets created we will need to send the selected fields to the API
  save() {
    if (!this.fieldShareConfigManagement()) {
      (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_5__.openFeatureDialog)(this.dialog, _features_feature_names__WEBPACK_IMPORTED_MODULE_4__.FeatureNames.FieldShareConfigManagement, this.viewContainerRef, this.changeDetectorRef);
    } else {
      this.saving$.next(true);
      this.snackBar.open('Saving...');
      (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(...this.selectedFields.data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.filter)(inheritField => !!inheritField.newName), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.concatMap)(inheritField => this.contentTypesFieldsService.addInheritedField(this.dialogData.contentType.Id, inheritField.field.ContentType.Id, inheritField.field.Guid, inheritField.newName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(null)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.toArray)()).subscribe(responses => {
        this.saving$.next(false);
        this.snackBar.open('Saved', null, {
          duration: 2000
        });
        this.closeDialog();
      });
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function AddSharingFieldsComponent_Factory(t) {
    return new (t || AddSharingFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesFieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: AddSharingFieldsComponent,
    selectors: [["app-add-sharing-fields"]],
    viewQuery: function AddSharingFieldsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function AddSharingFieldsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_features_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_9__.FeatureDetailService]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 50,
    vars: 16,
    consts: [["ngForm", "ngForm"], ["newName", "ngModel"], [1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], [1, "eav-tables-div"], [1, "eav-table-div-left"], ["mat-table", "", 1, "eav-fields-table", 3, "dataSource"], ["matColumnDef", "contentType"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "eav-table-cell", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "type"], ["matColumnDef", "share"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "eav-table-div-right"], ["matColumnDef", "newName"], ["matColumnDef", "source"], ["mat-cell", "", "style", "word-break:break-all;", "class", "eav-table-cell", 4, "matCellDef"], ["matColumnDef", "remove"], ["align", "end"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "submit", "color", "accent", 3, "click", "disabled"], [1, "eav-button-feature"], [1, "eav-button-feature-icon", 3, "featureNameId"], ["mat-header-cell", ""], ["mat-cell", "", 1, "eav-table-cell"], ["mat-header-row", ""], ["mat-row", ""], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", 3, "ngModelChange", "pattern", "ngModel", "name", "appReservedNames"], [3, "isError"], ["mat-cell", "", 1, "eav-table-cell", 2, "word-break", "break-all"]],
    template: function AddSharingFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 6)(10, "mat-card", 7)(11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, AddSharingFieldsComponent_th_13_Template, 3, 0, "th", 10)(14, AddSharingFieldsComponent_td_14_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, AddSharingFieldsComponent_th_16_Template, 3, 0, "th", 10)(17, AddSharingFieldsComponent_td_17_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, AddSharingFieldsComponent_th_19_Template, 3, 0, "th", 10)(20, AddSharingFieldsComponent_td_20_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, AddSharingFieldsComponent_th_22_Template, 3, 0, "th", 10)(23, AddSharingFieldsComponent_td_23_Template, 3, 0, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, AddSharingFieldsComponent_tr_24_Template, 1, 0, "tr", 15)(25, AddSharingFieldsComponent_tr_25_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-card", 17)(27, "form", null, 0)(29, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](30, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, AddSharingFieldsComponent_th_31_Template, 3, 0, "th", 10)(32, AddSharingFieldsComponent_td_32_Template, 7, 5, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](33, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, AddSharingFieldsComponent_th_34_Template, 3, 0, "th", 10)(35, AddSharingFieldsComponent_td_35_Template, 2, 3, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](36, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, AddSharingFieldsComponent_th_37_Template, 3, 0, "th", 10)(38, AddSharingFieldsComponent_td_38_Template, 3, 0, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, AddSharingFieldsComponent_tr_39_Template, 1, 0, "tr", 15)(40, AddSharingFieldsComponent_tr_40_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "mat-dialog-actions", 22)(42, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSharingFieldsComponent_Template_button_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.closeDialog());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](45, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSharingFieldsComponent_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.save());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 25)(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "app-feature-icon-indicator", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const ngForm_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 10, "SharingOrInheriting.TitleAddFieldsWhichInherit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 12, "SharingOrInheriting.PickFieldsToInheritFrom"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.shareableFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedShareableFieldsColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedShareableFieldsColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.selectedFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedSelectedFieldsColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedSelectedFieldsColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ngForm_r15.form.valid || ctx.selectedFields.data.length == 0 || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](45, 14, ctx.saving$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("featureNameId", "FieldShareConfigManagement");
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _edit_content_type_fields_reserved_names_directive__WEBPACK_IMPORTED_MODULE_6__.ReservedNamesValidatorDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _features_feature_icon_indicator_feature_icon_indicator_component__WEBPACK_IMPORTED_MODULE_7__.FeatureIconIndicatorComponent, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_8__.FieldHintComponent],
    styles: [".eav-tables-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 4px;\n  padding-top: 4px;\n  height: 400px;\n}\n.eav-tables-div[_ngcontent-%COMP%]   .eav-table-div-left[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  margin-right: 4px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.eav-tables-div[_ngcontent-%COMP%]   .eav-table-div-right[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  margin-left: 4px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.eav-tables-div[_ngcontent-%COMP%]   .eav-table-div-right[_ngcontent-%COMP%]   .eav-mat-form-field[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n.eav-tables-div[_ngcontent-%COMP%]   .eav-table-cell[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.eav-tables-div[_ngcontent-%COMP%]   .mat-column-source[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.eav-button-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.eav-button-feature[_ngcontent-%COMP%]   .eav-button-feature-icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtdHlwZS1maWVsZHMvYWRkLXNoYXJpbmctZmllbGRzL2FkZC1zaGFyaW5nLWZpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQUFKO0FBR0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtBQUROO0FBS0U7RUFDRSwyQ0FBQTtBQUhKO0FBTUU7RUFDRSxnQkFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFMRjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBTEoiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXRhYmxlcy1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAuZWF2LXRhYmxlLWRpdi1sZWZ0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5cclxuICAuZWF2LXRhYmxlLWRpdi1yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgLmVhdi1tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZWF2LXRhYmxlLWNlbGwge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXNvdXJjZSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1idXR0b24tZmVhdHVyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAuZWF2LWJ1dHRvbi1mZWF0dXJlLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 15604:
/*!********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditContentTypeFieldsComponent: () => (/* binding */ EditContentTypeFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 51903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 43143);
/* harmony import */ var _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/constants/field-name.patterns */ 47703);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/data-type.constants */ 42220);
/* harmony import */ var _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/input-type.constants */ 18170);
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content-type-fields.helpers */ 14007);
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/content-types-fields.service */ 83051);
/* harmony import */ var _edit_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-content-type-fields.helpers */ 84066);
/* harmony import */ var _edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../edit/shared/store/ngrx-data */ 27521);
/* harmony import */ var _add_sharing_fields_add_sharing_fields_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-sharing-fields/add-sharing-fields.component */ 99274);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _reserved_names_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reserved-names.directive */ 35160);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/directives/toggle-debug.directive */ 95699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);









































const _c0 = ["ngForm"];
const _c1 = a0 => ({
  "eav-input-obsolete": a0
});
function EditContentTypeFieldsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, " Fields ");
  }
}
function EditContentTypeFieldsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, " Add Fields ");
  }
}
function EditContentTypeFieldsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, " Edit Field ");
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-field-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isError", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.fieldNameError);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-field-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    const staticName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isError", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", staticName_r5.errors.reservedNames, " ");
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_7_Conditional_0_Template, 2, 2, "app-field-hint", 20)(1, EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_7_Conditional_1_Template, 2, 2, "app-field-hint", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const staticName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](0, staticName_r5.errors.pattern ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](1, staticName_r5.errors.reservedNames ? 1 : -1);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 17)(1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", dataType_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dataType_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dataType_r7.label);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_For_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](option_r8.icon);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_For_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 19)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, EditContentTypeFieldsComponent_Conditional_6_For_4_For_33_Conditional_4_Template, 2, 1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r8.inputType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c1, option_r8.isObsolete));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](option_r8.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](4, option_r8.icon ? 4 : -1);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 7)(1, "div", 12)(2, "mat-form-field", 13)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "input", 14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function EditContentTypeFieldsComponent_Conditional_6_For_4_Template_input_ngModelChange_5_listener($event) {
      const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](field_r4.StaticName, $event) || (field_r4.StaticName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_7_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 12)(9, "mat-form-field", 13)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selectionChange", function EditContentTypeFieldsComponent_Conditional_6_For_4_Template_mat_select_selectionChange_12_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r1.filterInputTypeOptions(i_r6);
      ctx_r1.resetInputType(i_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.calculateHints(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function EditContentTypeFieldsComponent_Conditional_6_For_4_Template_mat_select_ngModelChange_12_listener($event) {
      const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](field_r4.Type, $event) || (field_r4.Type = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "mat-select-trigger")(14, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterCreate"](18, EditContentTypeFieldsComponent_Conditional_6_For_4_For_19_Template, 5, 3, "mat-option", 17, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 12)(23, "mat-form-field", 13)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Input Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selectionChange", function EditContentTypeFieldsComponent_Conditional_6_For_4_Template_mat_select_selectionChange_26_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.calculateHints(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function EditContentTypeFieldsComponent_Conditional_6_For_4_Template_mat_select_ngModelChange_26_listener($event) {
      const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](field_r4.InputType, $event) || (field_r4.InputType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "mat-select-trigger")(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterCreate"](32, EditContentTypeFieldsComponent_Conditional_6_For_4_For_33_Template, 5, 6, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_29_0;
    let tmp_30_0;
    const field_r4 = ctx.$implicit;
    const i_r6 = ctx.$index;
    const staticName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pattern", ctx_r1.fieldNamePattern)("appReservedNames", ctx_r1.reservedNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", field_r4.StaticName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", "StaticName" + i_r6)("disabled", ctx_r1.editMode === "inputType");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](7, staticName_r5.touched && staticName_r5.errors ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", field_r4.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", "Type" + i_r6)("disabled", ctx_r1.editMode != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.findIcon(field_r4.Type));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.findLabel(field_r4.Type));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeater"](ctx_r1.dataTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.dataTypeHints[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", field_r4.InputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", "InputType" + i_r6)("disabled", ctx_r1.editMode === "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((tmp_29_0 = ctx_r1.getInputTypeOption(field_r4.InputType)) == null ? null : tmp_29_0.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((tmp_30_0 = ctx_r1.getInputTypeOption(field_r4.InputType)) == null ? null : tmp_30_0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeater"](ctx_r1.filteredInputTypeOptions[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.inputTypeHints[i_r6]);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditContentTypeFieldsComponent_Conditional_6_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.addSharedField());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "SharingOrInheriting.AddSharedField"));
  }
}
function EditContentTypeFieldsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "form", 5, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function EditContentTypeFieldsComponent_Conditional_6_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterCreate"](3, EditContentTypeFieldsComponent_Conditional_6_For_4_Template, 36, 18, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, EditContentTypeFieldsComponent_Conditional_6_Conditional_6_Template, 3, 3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditContentTypeFieldsComponent_Conditional_6_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ngForm_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeater"](ctx_r1.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](6, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 2, ctx_r1.debugEnabled$) ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ngForm_r10.form.valid || _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 4, ctx_r1.saving$));
  }
}
class EditContentTypeFieldsComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor(dialogRef, route, contentTypesService, contentTypesFieldsService, globalConfigService, snackBar, dialog) {
    super();
    this.dialogRef = dialogRef;
    this.route = route;
    this.contentTypesService = contentTypesService;
    this.contentTypesFieldsService = contentTypesFieldsService;
    this.globalConfigService = globalConfigService;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.hostClass = 'dialog-component';
    this.fields = [];
    this.existingFields = [];
    this.filteredInputTypeOptions = [];
    this.dataTypeHints = [];
    this.inputTypeHints = [];
    this.fieldNamePattern = _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_0__.fieldNamePattern;
    this.fieldNameError = _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_0__.fieldNameError;
    this.findIcon = _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_5__.calculateTypeIcon;
    this.findLabel = _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_5__.calculateTypeLabel;
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(true);
    this.saving$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    this.debugEnabled$ = this.globalConfigService.getDebugEnabled$();
    this.dialogRef.disableClose = true;
    this.subscriptions.add(this.dialogRef.backdropClick().subscribe(event => {
      if (this.form.dirty) {
        const confirmed = confirm('You have unsaved changes. Are you sure you want to close this dialog?');
        if (!confirmed) return;
      }
      this.closeDialog();
    }));
  }
  ngOnInit() {
    this.editMode = this.route.snapshot.paramMap.get('editMode');
    const contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
    const contentType$ = this.contentTypesService.retrieveContentType(contentTypeStaticName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.share)());
    const fields$ = contentType$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.switchMap)(contentType => this.contentTypesFieldsService.getFields(contentType.StaticName)));
    const dataTypes$ = this.contentTypesFieldsService.typeListRetrieve().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(rawDataTypes => (0,_edit_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_7__.calculateDataTypes)(rawDataTypes)));
    const inputTypes$ = this.contentTypesFieldsService.getInputTypesList();
    const reservedNames$ = this.contentTypesFieldsService.getReservedNames();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([contentType$, fields$, dataTypes$, inputTypes$, reservedNames$]).subscribe(([contentType, fields, dataTypes, inputTypes, reservedNames]) => {
      this.contentType = contentType;
      this.dataTypes = dataTypes;
      this.inputTypeOptions = inputTypes;
      this.existingFields = fields;
      const existingFields = {};
      fields.forEach(field => {
        existingFields[field.StaticName] = 'Field with this name already exists';
      });
      this.reservedNames = {
        ...reservedNames,
        ...existingFields
      };
      if (this.editMode != null) {
        const editFieldId = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id'), 10) : null;
        const editField = fields.find(field => field.Id === editFieldId);
        if (this.editMode === 'name') delete this.reservedNames[editField.StaticName];
        this.fields.push(editField);
      } else {
        for (let i = 1; i <= 8; i++) {
          this.fields.push({
            Id: 0,
            Type: _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_3__.DataTypeConstants.String,
            InputType: _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_4__.InputTypeConstants.StringDefault,
            StaticName: '',
            IsTitle: fields.length === 0,
            SortOrder: fields.length + i
          });
        }
      }
      for (let i = 0; i < this.fields.length; i++) {
        this.filterInputTypeOptions(i);
        this.calculateHints(i);
      }
      this.loading$.next(false);
    });
  }
  ngOnDestroy() {
    this.loading$.complete();
    this.saving$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  filterInputTypeOptions(index) {
    this.filteredInputTypeOptions[index] = this.inputTypeOptions.filter(option => option.dataType === this.fields[index].Type.toLocaleLowerCase());
  }
  resetInputType(index) {
    let defaultInputType = this.fields[index].Type.toLocaleLowerCase() + _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_4__.InputTypeConstants.DefaultSuffix;
    const defaultExists = this.filteredInputTypeOptions[index].some(option => option.inputType === defaultInputType);
    if (!defaultExists) defaultInputType = this.filteredInputTypeOptions[index][0].inputType;
    this.fields[index].InputType = defaultInputType;
  }
  calculateHints(index) {
    const selectedDataType = this.dataTypes.find(dataType => dataType.name === this.fields[index].Type);
    const selectedInputType = this.inputTypeOptions.find(inputTypeOption => inputTypeOption.inputType === this.fields[index].InputType);
    this.dataTypeHints[index] = selectedDataType?.description ?? '';
    this.inputTypeHints[index] = selectedInputType?.isObsolete ? `OBSOLETE - ${selectedInputType.obsoleteMessage}` : selectedInputType?.description ?? '';
  }
  getInputTypeOption(inputName) {
    return this.inputTypeOptions.find(option => option.inputType === inputName);
  }
  addSharedField() {
    this.dialog.open(_add_sharing_fields_add_sharing_fields_component__WEBPACK_IMPORTED_MODULE_9__.AddSharingFieldsComponent, {
      autoFocus: false,
      width: '1600px',
      data: {
        contentType: this.contentType,
        existingFields: this.existingFields
      }
    });
  }
  save() {
    this.saving$.next(true);
    this.snackBar.open('Saving...');
    if (this.editMode != null) {
      const field = this.fields[0];
      if (this.editMode === 'name') {
        this.contentTypesFieldsService.rename(field.Id, this.contentType.Id, field.StaticName).subscribe(() => {
          this.saving$.next(false);
          this.snackBar.open('Saved', null, {
            duration: 2000
          });
          this.closeDialog();
        });
      } else if (this.editMode === 'inputType') {
        this.contentTypesFieldsService.updateInputType(field.Id, field.StaticName, field.InputType).subscribe(() => {
          this.saving$.next(false);
          this.snackBar.open('Saved', null, {
            duration: 2000
          });
          this.closeDialog();
        });
      }
    } else {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(...this.fields).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.filter)(field => !!field.StaticName), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.concatMap)(field => this.contentTypesFieldsService.add(field, this.contentType.Id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.toArray)()).subscribe(_ => {
        this.saving$.next(false);
        this.snackBar.open('Saved', null, {
          duration: 2000
        });
        this.closeDialog();
      });
    }
  }
  static #_ = this.ɵfac = function EditContentTypeFieldsComponent_Factory(t) {
    return new (t || EditContentTypeFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_6__.ContentTypesFieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.GlobalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: EditContentTypeFieldsComponent,
    selectors: [["app-edit-content-type-fields"]],
    viewQuery: function EditContentTypeFieldsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgForm);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function EditContentTypeFieldsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 6,
    consts: [["ngForm", "ngForm"], ["staticName", "ngModel"], ["appToggleDebug", "", 1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [3, "ngSubmit"], [1, "eav-dialog-content"], [1, "eav-row-container"], ["mat-raised-button", "", "type", "button"], [1, "spacer"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "submit", "color", "accent", 3, "disabled"], [1, "eav-edit-input"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", 3, "ngModelChange", "pattern", "appReservedNames", "ngModel", "name", "disabled"], [3, "selectionChange", "ngModelChange", "ngModel", "name", "disabled"], [1, "eav-type-icon"], [3, "value"], [1, "eav-input-icon"], [3, "value", "ngClass"], [3, "isError"]],
    template: function EditContentTypeFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, EditContentTypeFieldsComponent_Conditional_3_Template, 1, 0)(4, EditContentTypeFieldsComponent_Conditional_4_Template, 1, 0)(5, EditContentTypeFieldsComponent_Conditional_5_Template, 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, EditContentTypeFieldsComponent_Conditional_6_Template, 14, 6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](3, ctx.editMode === undefined ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](4, ctx.editMode === null ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](5, ctx.editMode != null ? 5 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](6, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 4, ctx.loading$) === false ? 6 : -1);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInput, _reserved_names_directive__WEBPACK_IMPORTED_MODULE_10__.ReservedNamesValidatorDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgClass, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_33__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_11__.FieldHintComponent, _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_12__.ToggleDebugDirective],
    styles: [".eav-row-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.eav-edit-input[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n  width: 30%;\n}\n\n.eav-type-icon[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  margin-right: 8px;\n  font-size: inherit;\n  vertical-align: top;\n  line-height: inherit;\n}\n\n.eav-input-icon[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  margin-left: 8px;\n  font-size: inherit;\n  vertical-align: top;\n  line-height: inherit;\n}\n\n.eav-input-obsolete[_ngcontent-%COMP%] {\n  -webkit-text-decoration: black line-through;\n          text-decoration: black line-through;\n  color: dimgray;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtdHlwZS1maWVsZHMvZWRpdC1jb250ZW50LXR5cGUtZmllbGRzL2VkaXQtY29udGVudC10eXBlLWZpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1yb3ctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmVhdi1lZGl0LWlucHV0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5lYXYtdHlwZS1pY29uIHtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5lYXYtaW5wdXQtaWNvbiB7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5lYXYtaW5wdXQtb2Jzb2xldGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogYmxhY2sgbGluZS10aHJvdWdoO1xyXG4gIGNvbG9yOiBkaW1ncmF5O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84066:
/*!******************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.helpers.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDataTypes: () => (/* binding */ calculateDataTypes)
/* harmony export */ });
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/data-type.constants */ 42220);
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-type-fields.helpers */ 14007);


const dataTypeLabels = {
  Boolean: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Boolean),
    description: 'Yes/no or true/false values'
  },
  Custom: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Custom),
    description: 'Use for things like gps-pickers (which writes into multiple fields) or for custom-data which serializes something exotic into the db like an array, a custom json or anything'
  },
  DateTime: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.DateTime),
    description: 'For date, time or combined values'
  },
  Empty: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Empty),
    description: 'Use to structure your form'
  },
  Entity: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Entity),
    description: 'One or more other content-items'
  },
  Hyperlink: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Hyperlink),
    description: 'Hyperlink or reference to a picture / file'
  },
  Number: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Number),
    description: 'Any kind of number'
  },
  String: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.String),
    description: 'Any kind of text'
  }
};
function calculateDataTypes(rawDataTypes) {
  const dataTypes = [];
  for (const rawDataType of rawDataTypes) {
    dataTypes.push({
      name: rawDataType,
      label: dataTypeLabels[rawDataType].label,
      icon: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeIcon)(rawDataType),
      description: dataTypeLabels[rawDataType].description
    });
  }
  return dataTypes;
}

/***/ }),

/***/ 35160:
/*!**********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/edit-content-type-fields/reserved-names.directive.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservedNamesValidatorDirective: () => (/* binding */ ReservedNamesValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class ReservedNamesValidatorDirective {
  constructor() {
    this.reservedNames = {};
  }
  validate(control) {
    if (!control.value) {
      return null;
    }
    const controlValue = control.value.toLocaleLowerCase();
    const reservedName = Object.keys(this.reservedNames).find(name => name.toLocaleLowerCase() === controlValue);
    return reservedName ? {
      reservedNames: this.reservedNames[reservedName]
    } : null;
  }
  static #_ = this.ɵfac = function ReservedNamesValidatorDirective_Factory(t) {
    return new (t || ReservedNamesValidatorDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ReservedNamesValidatorDirective,
    selectors: [["", "appReservedNames", ""]],
    inputs: {
      reservedNames: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "appReservedNames", "reservedNames"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: ReservedNamesValidatorDirective,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 43758:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/field-hint/field-hint.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldHintComponent: () => (/* binding */ FieldHintComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);




const _c0 = ["*"];
const _c1 = a0 => ({
  "hint-box__short": a0
});
function FieldHintComponent_Case_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_Case_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
class FieldHintComponent {
  constructor() {
    this.isError = false;
    this.isShort = true;
  }
  toggleIsShort() {
    this.isShort = !this.isShort;
  }
  static #_ = this.ɵfac = function FieldHintComponent_Factory(t) {
    return new (t || FieldHintComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FieldHintComponent,
    selectors: [["app-field-hint"]],
    inputs: {
      isError: "isError"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 4,
    consts: [["content", ""], [1, "hint-box", 3, "click", "ngClass"], [4, "ngTemplateOutlet"]],
    template: function FieldHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldHintComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleIsShort());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_Template, 2, 1)(2, FieldHintComponent_Case_2_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldHintComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isShort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, (tmp_2_0 = ctx.isError) === false ? 1 : tmp_2_0 === true ? 2 : -1);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
    styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFJSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGTiIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWVycm9yIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 70519:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/copy-to-clipboard.helper.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard)
/* harmony export */ });
/** https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f */
function copyToClipboard(str) {
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected = document.getSelection().rangeCount > 0 // Check if there is any content selected previously
  ? document.getSelection().getRangeAt(0) // Store selection if found
  : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
}

/***/ }),

/***/ 49923:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/reduce.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reduce: () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _scanInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanInternals */ 75392);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 50819);


function reduce(accumulator, seed) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((0,_scanInternals__WEBPACK_IMPORTED_MODULE_1__.scanInternals)(accumulator, seed, arguments.length >= 2, false, true));
}

/***/ }),

/***/ 43143:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/toArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reduce */ 49923);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 50819);


const arrReducer = (arr, value) => (arr.push(value), arr);
function toArray() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    (0,_reduce__WEBPACK_IMPORTED_MODULE_1__.reduce)(arrReducer, [])(source).subscribe(subscriber);
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-56a972.js.map