"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["common"],{

/***/ 4038:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/json.helpers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonHelpers: () => (/* binding */ JsonHelpers)
/* harmony export */ });
class JsonHelpers {
  /** Tries to parse string as JSON */
  static tryParse(input) {
    try {
      return JSON.parse(input);
    } catch {}
  }
}

/***/ }),

/***/ 6708:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields.routing.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentTypeFieldsRoutes: () => (/* binding */ contentTypeFieldsRoutes)
/* harmony export */ });
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-type-fields-dialog.config */ 36117);
/* harmony import */ var _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-content-type-fields/edit-content-type-fields-dialog.config */ 93040);






const contentTypeFieldsRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
  data: {
    dialog: _content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_4__.contentTypeFieldsDialog
  },
  children: [{
    path: 'add/:contentTypeStaticName',
    component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
    data: {
      dialog: _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_5__.editContentTypeFieldsDialog
    }
  }, {
    path: 'update/:contentTypeStaticName/:id/:editMode',
    component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
    data: {
      dialog: _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_5__.editContentTypeFieldsDialog
    }
  }, ..._metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getRoutes(), _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_0__.EditRoutes]
}];

/***/ }),

/***/ 6953:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/field-value.helpers.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldValueHelpers: () => (/* binding */ FieldValueHelpers)
/* harmony export */ });
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/rxJs/rx.helpers */ 93826);

class FieldValueHelpers {
  /** Detect if two values are equal, incl. special NaN and Array checks */
  static fieldValuesAreEqual(x, y) {
    if (x === y) return true;
    if (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)) return true;
    if (Array.isArray(x) && Array.isArray(y) && _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__.RxHelpers.arraysEqual(x, y)) return true;
    return false;
  }
  /** Searches where newValues has values different from oldValues */
  static getItemValuesChanges(oldValues, newValues) {
    const changes = {};
    for (const key of Object.keys(newValues)) {
      const newValue = newValues[key];
      const oldValue = oldValues[key];
      if (FieldValueHelpers.fieldValuesAreEqual(newValue, oldValue)) continue;
      changes[key] = newValue;
    }
    return Object.keys(changes).length === 0 ? undefined : changes;
  }
}

/***/ }),

/***/ 13998:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/import-content-item/import-content-item-dialog.config.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importContentItemDialog: () => (/* binding */ importContentItemDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importContentItemDialog = {
  name: 'IMPORT_CONTENT_ITEM_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportContentItemComponent: ImportContentItemComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-83efe3"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa"), __webpack_require__.e("projects_eav-ui_src_app_content-items_import-content-item_import-content-item_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./import-content-item.component */ 66754));
      return ImportContentItemComponent;
    })();
  }
};

/***/ }),

/***/ 24618:
/*!***********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/file-location-dialog/file-location-dialog.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileLocationDialogComponent: () => (/* binding */ FileLocationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
















function FileLocationDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-field-hint", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isError", true);
  }
}
class FileLocationDialogComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.hostClass = 'dialog-component';
  }
  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      isShared: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
    });
  }
  closeDialog(isShared) {
    this.dialog.close(isShared);
  }
  confirm() {
    const formValues = this.form.getRawValue();
    this.closeDialog(formValues.isShared);
  }
  static {
    this.ɵfac = function FileLocationDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FileLocationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FileLocationDialogComponent,
      selectors: [["app-file-location-dialog"]],
      hostVars: 1,
      hostBindings: function FileLocationDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 20,
      vars: 5,
      consts: [[3, "formGroup"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "isShared"], [3, "value"], [3, "isError"], ["align", "end"], ["mat-raised-button", "", 1, "eav-card-action-button", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "eav-card-action-button", 3, "click", "disabled"]],
      template: function FileLocationDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New file location");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content")(5, "form", 0)(6, "mat-form-field", 1)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-select", 2)(10, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "App");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Shared (global)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FileLocationDialogComponent_Conditional_14_Template, 2, 1, "app-field-hint", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-actions", 5)(16, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileLocationDialogComponent_Template_button_click_16_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileLocationDialogComponent_Template_button_click_18_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Confirm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.form.controls.isShared.touched && (ctx.form.controls.isShared.errors == null ? null : ctx.form.controls.isShared.errors.required) ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_0__.FieldHintComponent],
      styles: [".eav-card-action-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtbG9jYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJmaWxlLWxvY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtY2FyZC1hY3Rpb24tYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NyZWF0ZS1maWxlLWRpYWxvZy9maWxlLWxvY2F0aW9uLWRpYWxvZy9maWxlLWxvY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDQSxvV0FBb1ciLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWNhcmQtYWN0aW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 25709:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/import-app/import-app-dialog.config.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importAppDialog: () => (/* binding */ importAppDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importAppDialog = {
  name: 'IMPORT_APP_DIALOG',
  initContext: true,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportAppComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-83efe3"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("projects_eav-ui_src_app_import-app_import-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./import-app.component */ 60781));
      return ImportAppComponent;
    })();
  }
};

/***/ }),

/***/ 28129:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/replace-content/replace-content-dialog.config.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replaceContentDialog: () => (/* binding */ replaceContentDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const replaceContentDialog = {
  name: 'REPLACE_CONTENT_DIALOG',
  initContext: true,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ReplaceContentComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_replace-content_replace-content_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./replace-content.component */ 4513));
      return ReplaceContentComponent;
    })();
  }
};

/***/ }),

/***/ 30200:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items.routing.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentItemsRoutes: () => (/* binding */ contentItemsRoutes)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _import_content_item_import_content_item_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-content-item/import-content-item-dialog.config */ 13998);
/* harmony import */ var _content_items_dialog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-items-dialog.config */ 87449);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);





const contentItemsRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__.DialogEntryComponent,
  data: {
    dialog: _content_items_dialog_config__WEBPACK_IMPORTED_MODULE_3__.contentItemsDialog
  },
  children: [..._metadata__WEBPACK_IMPORTED_MODULE_0__.GoToMetadata.getRoutes(), {
    path: 'export/:contentTypeStaticName',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_content-export_content-export_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content-export/content-export.routing */ 47562)).then(m => m.ContentExportRoutes)
  }, {
    path: 'export/:contentTypeStaticName/:selectedIds',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_content-export_content-export_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content-export/content-export.routing */ 47562)).then(m => m.ContentExportRoutes)
  }, {
    path: 'import',
    component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__.DialogEntryComponent,
    data: {
      dialog: _import_content_item_import_content_item_dialog_config__WEBPACK_IMPORTED_MODULE_2__.importContentItemDialog
    }
  }, {
    path: ':contentTypeStaticName/import',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_content-import_content-import_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content-import/content-import.routing */ 66880)).then(m => m.contentImportRoutes),
    data: {
      title: 'Import Items'
    }
  }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_4__.EditRoutes]
}];

/***/ }),

/***/ 33518:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/load-scripts.helper.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadScripts: () => (/* binding */ loadScripts)
/* harmony export */ });
function loadScripts(scriptObjects, callback, iteration = 0) {
  const isLast = scriptObjects.length === iteration + 1;
  const newCallback = isLast ? callback : loadScripts.bind(this, scriptObjects, callback, iteration + 1);
  const scrObj = scriptObjects[iteration];
  const global = typeof scrObj.test === 'string' ? scrObj.test : null;
  const test = typeof scrObj.test === 'function' ? scrObj.test : null;
  const w = window;
  if (global != null && !!w[global]) {
    callback();
    return;
  }
  if (test != null && test()) {
    callback();
    return;
  }
  window.require([scrObj.src], exportedVar => {
    if (exportedVar && !w[global]) {
      w[global] = exportedVar;
    }
    newCallback();
  });
}

/***/ }),

/***/ 33992:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/services/features-config.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesConfigService: () => (/* binding */ FeaturesConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




const webAPiLicenseRetrieve = 'sys/license/Retrieve';
const webApiFeatSaveNew = 'admin/feature/SaveNew';
const webApiLicSummary = 'sys/license/Summary';
const webApiUpload = 'sys/license/Upload';
class FeaturesConfigService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__.HttpServiceBase {
  saveFeatures(featuresStates) {
    return this.http.post(this.apiUrl(webApiFeatSaveNew), featuresStates);
  }
  getLicenses() {
    return this.getHttpApiUrl(webApiLicSummary);
  }
  getLicensesSig() {
    return this.getSignal(webApiLicSummary);
  }
  uploadLicense(file) {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.apiUrl(webApiUpload), formData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(info => ({
      Success: info.Success,
      Messages: [{
        MessageType: info.Success ? _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.FileUploadMessageTypes.Success : _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.FileUploadMessageTypes.Error,
        Text: `License ${info.Success ? 'uploaded' : 'upload failed'}: ${info.Message}`
      }]
    })));
  }
  retrieveLicense() {
    return this.getHttpApiUrl(webAPiLicenseRetrieve);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFeaturesConfigService_BaseFactory;
      return function FeaturesConfigService_Factory(__ngFactoryType__) {
        return (ɵFeaturesConfigService_BaseFactory || (ɵFeaturesConfigService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FeaturesConfigService)))(__ngFactoryType__ || FeaturesConfigService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: FeaturesConfigService,
      factory: FeaturesConfigService.ɵfac
    });
  }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);



class ReservedNamesValidatorDirective {
  constructor() {
    this.appReservedNames = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)({});
  }
  validate(control) {
    if (!control.value) {
      return null;
    }
    const controlValue = control.value.toLocaleLowerCase();
    const reservedName = Object.keys(this.appReservedNames()).find(name => name.toLocaleLowerCase() === controlValue);
    return reservedName ? {
      reservedNames: this.appReservedNames()[reservedName]
    } : null;
  }
  static mergeReserved(reservedNames, fields) {
    const existingFields = {};
    fields.forEach(field => {
      existingFields[field.StaticName] = 'this field already exists';
    });
    return {
      ...reservedNames,
      ...existingFields
    };
  }
  static {
    this.ɵfac = function ReservedNamesValidatorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReservedNamesValidatorDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ReservedNamesValidatorDirective,
      selectors: [["", "appReservedNames", ""]],
      inputs: {
        appReservedNames: [1, "appReservedNames"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
        useExisting: ReservedNamesValidatorDirective,
        multi: true
      }])]
    });
  }
}

/***/ }),

/***/ 36117:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields-dialog.config.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentTypeFieldsDialog: () => (/* binding */ contentTypeFieldsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const contentTypeFieldsDialog = {
  name: 'CONTENT_TYPE_FIELDS_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ContentTypeFieldsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-83efe3"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa"), __webpack_require__.e("default-projects_eav-ui_src_app_features_shared_base-feature_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_services_service-base_ts-node_modules_angular_material-ffa7b3"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-icon-text_feature-icon-text_component_ts-pro-6e06e2"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts-node_modules_lod-8eb97c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-type-fields.component */ 213));
      return ContentTypeFieldsComponent;
    })();
  }
};

/***/ }),

/***/ 36740:
/*!****************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/edit-debug.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DebugFields: () => (/* binding */ DebugFields)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 66619);

/**
 * List of fields to debug across the entire application.
 *
 * Change as you need, but after debugging, best set it back to [].
 */
const DebugFields = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
// ? ['StringPicker']
// ? ['NumberInputAddUntillDevisibleBy5']
// ? ['WysiwygConfiguration']
// ? ['Items']
? ['ViewController']
// ? ['Title']
// ? [] // no fields
// ? ['*'] // all fields
: [];

/***/ }),

/***/ 41657:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/admin-shared/lightspeed-action/lightspeed-action.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightSpeedActionsComponent: () => (/* binding */ LightSpeedActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_features_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/features.service */ 9001);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);











function LightSpeedActionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LightSpeedActionsComponent_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openLightspeedFeatureInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " bolt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LightSpeedActionsComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5)(1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " bolt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "#" + ctx_r1.params().lightSpeedLink(ctx_r1.lightSpeedOwner()), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function LightSpeedActionsComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5)(1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " bolt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "#" + ctx_r1.params().lightSpeedLink(ctx_r1.lightSpeedOwner()), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function LightSpeedActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LightSpeedActionsComponent_Conditional_1_Conditional_1_Template, 3, 1, "a", 5)(2, LightSpeedActionsComponent_Conditional_1_Conditional_2_Template, 3, 1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("eav-grid-action-button ", ctx_r1.appHasLightSpeed ? "" : "disabled", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", ctx_r1.appHasLightSpeed ? ctx_r1.lightSpeed().Title : "Not yet configured for LightSpeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r1.appLightSpeedEnabled ? 1 : 2);
  }
}
/**
 * LightSpeedActionsComponent
 *
 * Specially meant to be used inside an AGGrid action, and receive the parameters from it.
 *
 */
class LightSpeedActionsComponent {
  constructor() {
    /** App needed for lightspeed checks */
    this.lightSpeedOwner = _angular_core__WEBPACK_IMPORTED_MODULE_3__.input.required();
    this.params = _angular_core__WEBPACK_IMPORTED_MODULE_3__.input.required();
    this.lightSpeed = _angular_core__WEBPACK_IMPORTED_MODULE_3__.input.required();
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_features_features_service__WEBPACK_IMPORTED_MODULE_1__.FeaturesService);
    this.lightSpeedEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_0__.FeatureNames.LightSpeed];
  }
  get appHasLightSpeed() {
    return this.lightSpeed()?.Id != null;
  }
  get appLightSpeedEnabled() {
    return this.lightSpeed()?.IsEnabled == true;
  }
  openLightspeedFeatureInfo() {
    this.params().openLightspeedFeatureInfo();
  }
  static {
    this.ɵfac = function LightSpeedActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LightSpeedActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LightSpeedActionsComponent,
      selectors: [["app-lightspeed-action"]],
      inputs: {
        lightSpeedOwner: [1, "lightSpeedOwner"],
        params: [1, "params"],
        lightSpeed: [1, "lightSpeed"]
      },
      decls: 2,
      vars: 1,
      consts: [["tippy", "Lightspeed is disabled", 1, "eav-grid-action-button", "disabled"], ["matRipple", "", 3, "class", "tippy"], ["tippy", "Lightspeed is disabled", 1, "eav-grid-action-button", "disabled", 3, "click"], ["matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false"], ["matRipple", "", 3, "tippy"], [1, "default-link", 3, "href"], ["matBadgeSize", "small", "matBadge", "\u2705", "matBadgePosition", "below after", "aria-hidden", "false"], ["matBadgeSize", "small", "matBadge", "\u26D4", "matBadgePosition", "below after", "aria-hidden", "false"]],
      template: function LightSpeedActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LightSpeedActionsComponent_Conditional_0_Template, 3, 0, "div", 0)(1, LightSpeedActionsComponent_Conditional_1_Template, 3, 5, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.lightSpeedEnabled() ? 0 : 1);
        }
      },
      dependencies: [_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple],
      encapsulation: 2
    });
  }
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

/***/ }),

/***/ 46666:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/models/dialog-context.models.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppScopes: () => (/* binding */ AppScopes)
/* harmony export */ });
const AppScopes = {
  App: 'App',
  Site: 'Site',
  Global: 'Global'
} /* the as const ensures that the keys/values can be strictly checked */;
// export interface DialogContextFeature {
//   NameId: string;
//   Enabled: boolean;
// }

/***/ }),

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

/***/ 49417:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/guid.constants.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   guidRegex: () => (/* binding */ guidRegex)
/* harmony export */ });
/**
 * Do not reuse regex:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test_on_a_regex_with_the_global_flag
 */
function guidRegex() {
  return /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
}

/***/ }),

/***/ 56360:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-export/services/content-export.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentExportService: () => (/* binding */ ContentExportService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiEntityRootDownload = 'admin/entity/Download';
const webApiEntityRootJson = 'admin/entity/Json';
const webApiTypeRootJson = 'admin/type/Json';
const webApiTypeRootJsonBundleExport = 'admin/type/JsonBundleExport';
const webApiTypeRootJsonBundleSave = 'admin/type/BundleSave';
class ContentExportService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  exportContent(values, selectedIds) {
    const selectedIdsString = selectedIds ? '&selectedids=' + selectedIds.join() : '';
    const url = this.apiUrl(webApiEntityRootDownload) + '?appId=' + this.appId + '&language=' + values.language + '&defaultLanguage=' + values.defaultLanguage + '&contentType=' + values.contentTypeStaticName + '&recordExport=' + values.recordExport + '&resourcesReferences=' + values.resourcesReferences + '&languageReferences=' + values.languageReferences + selectedIdsString;
    window.open(url, '_blank', '');
  }
  exportJson(typeName) {
    const url = this.apiUrl(webApiTypeRootJson) + '?appId=' + this.appId + '&name=' + typeName;
    window.open(url, '_blank', '');
  }
  exportEntity(id, prefix, metadata) {
    const url = this.apiUrl(webApiEntityRootJson) + '?appId=' + this.appId + '&id=' + id + '&prefix=' + prefix + '&withMetadata=' + metadata;
    window.open(url, '_blank', '');
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentExportService_BaseFactory;
      return function ContentExportService_Factory(__ngFactoryType__) {
        return (ɵContentExportService_BaseFactory || (ɵContentExportService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ContentExportService)))(__ngFactoryType__ || ContentExportService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ContentExportService,
      factory: ContentExportService.ɵfac
    });
  }
}

/***/ }),

/***/ 58275:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/validation/validation-messages.helpers.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationMsgHelper: () => (/* binding */ ValidationMsgHelper)
/* harmony export */ });
/* harmony import */ var _controls_ui_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/ui-control */ 88857);

// prefix for translation keys
const prefix = 'ValidationMessage.';
const notValid = 'ValidationMessage.NotValid';
class ValidationMsgHelper {
  static {
    this.messages = {
      required: long => long ? `${prefix}Required` : `${prefix}RequiredShort` /* short version in snackbar*/,
      min: long => long ? `${prefix}Min` : notValid,
      max: long => long ? `${prefix}Max` : notValid,
      minNoItems: long => long ? `${prefix}MinNoItems` : notValid,
      maxNoItems: long => long ? `${prefix}MaxNoItems` : notValid,
      pattern: long => long ? `${prefix}Pattern` : notValid,
      decimals: long => long ? `${prefix}Decimals` : notValid,
      jsonError: long => long ? `${prefix}JsonError` : notValid,
      formulaError: long => notValid
    };
  }
  /** Marks controls as touched to show errors beneath controls and collects error messages */
  static validateForm(form) {
    const errors = {};
    for (const [controlKey, control] of Object.entries(form.controls)) {
      _controls_ui_control__WEBPACK_IMPORTED_MODULE_0__.UiControl.markTouched(control);
      if (!control.invalid) continue;
      for (const errorKey of Object.keys(control.errors)) {
        errors[controlKey] = this.messages[errorKey]?.(false);
        if (errors[controlKey]) break;
      }
    }
    return errors;
  }
}

/***/ }),

/***/ 58362:
/*!*****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/analyze-settings.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeSettingsService: () => (/* binding */ AnalyzeSettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ 71772);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);





class AnalyzeSettingsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__.HttpServiceBase {
  // TEMP, not sure if this are correct
  getStackSig(part, key, view, stringifyValue = false) {
    const stackSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([]);
    this.getAndWrite(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'GetStack', {
      params: {
        appId: this.appId,
        part,
        ...(key && {
          key
        }),
        ...(view && {
          view
        })
      }
    }, stackSignal);
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => stringifyValue ? stackSignal().map(stackItem => ({
      ...stackItem,
      _value: JSON.stringify(stackItem.Value)
    })) : stackSignal());
  }
  getStack(part, key, view, stringifyValue = false) {
    return this.getHttp(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'GetStack', {
      params: {
        appId: this.appId,
        part,
        ...(key && {
          key
        }),
        ...(view && {
          view
        })
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(stack => {
      if (!stringifyValue) {
        return stack;
      }
      for (const stackItem of stack) {
        stackItem._value = JSON.stringify(stackItem.Value);
      }
      return stack;
    }));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵAnalyzeSettingsService_BaseFactory;
      return function AnalyzeSettingsService_Factory(__ngFactoryType__) {
        return (ɵAnalyzeSettingsService_BaseFactory || (ɵAnalyzeSettingsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](AnalyzeSettingsService)))(__ngFactoryType__ || AnalyzeSettingsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AnalyzeSettingsService,
      factory: AnalyzeSettingsService.ɵfac
    });
  }
}

/***/ }),

/***/ 58713:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-admin-helpers.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminHelpers: () => (/* binding */ AppAdminHelpers)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/edit-form.model */ 70334);


class AppAdminHelpers {
  static getLightSpeedEditParams(appId) {
    const form = {
      items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_1__.EditPrep.newMetadata(appId, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.appMetadata.LightSpeed.ContentTypeName, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app, true)]
    };
    return form;
  }
}

/***/ }),

/***/ 59532:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/import-app/import-app.routing.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importRoutes: () => (/* binding */ importRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _import_app_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-app-dialog.config */ 25709);


const importRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _import_app_dialog_config__WEBPACK_IMPORTED_MODULE_1__.importAppDialog
  }
}];

/***/ }),

/***/ 59669:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/manage-content-list/services/content-group.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentGroupService: () => (/* binding */ ContentGroupService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiContentGroup = 'cms/contentgroup/';
class ContentGroupService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getItems(item) {
    return this.getHttpApiUrl(webApiContentGroup + 'replace', {
      params: {
        appId: this.appId,
        guid: item.guid,
        part: item.part,
        index: item.index.toString()
      }
    });
  }
  saveItem(item) {
    return this.http.post(this.apiUrl(webApiContentGroup + 'replace'), {}, {
      params: {
        guid: item.guid,
        part: item.part,
        index: item.index.toString(),
        entityId: item.id.toString(),
        add: `${item.add}`
      }
    });
  }
  removeItem(contentGroup, index) {
    // note: the server checks if the part == 'content' and will automatically treat it as a pair with presentation
    return this.http.delete(this.apiUrl('cms/list/delete'), {
      params: {
        index: index,
        parent: contentGroup.guid,
        fields: contentGroup.part
      }
    });
  }
  getList(contentGroup) {
    return this.getHttpApiUrl(webApiContentGroup + 'itemlist', {
      params: {
        appId: this.appId,
        guid: contentGroup.guid,
        part: contentGroup.part
      }
    });
  }
  saveList(contentGroup, resortedList) {
    return this.http.post(this.apiUrl(webApiContentGroup + 'itemlist'), resortedList, {
      params: {
        appId: this.appId,
        guid: contentGroup.guid,
        part: contentGroup.part
      }
    });
  }
  getHeader(contentGroup, initial) {
    return this.getSignal(webApiContentGroup + 'header', {
      params: {
        appId: this.appId,
        guid: contentGroup.guid
      }
    }, initial);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentGroupService_BaseFactory;
      return function ContentGroupService_Factory(__ngFactoryType__) {
        return (ɵContentGroupService_BaseFactory || (ɵContentGroupService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ContentGroupService)))(__ngFactoryType__ || ContentGroupService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ContentGroupService,
      factory: ContentGroupService.ɵfac
    });
  }
}

/***/ }),

/***/ 67130:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/services/zone.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoneService: () => (/* binding */ ZoneService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiZoneRootGetLanguages = 'admin/zone/GetLanguages';
const webApiZoneRootSwitchLanguage = 'admin/zone/SwitchLanguage';
const webApiZoneRootGetSystemInfo = 'admin/zone/GetSystemInfo';
const webApiAppRootRootlanguages = 'admin/app/languages';
class ZoneService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getLanguage(initial) {
    return this.getSignal(webApiZoneRootGetLanguages, {}, initial);
  }
  toggleLanguage(code, enable) {
    return this.getHttpApiUrl(webApiZoneRootSwitchLanguage, {
      params: {
        cultureCode: code,
        enable: enable.toString()
      }
    });
  }
  // toggleLanguageSig(code: string, enable: boolean)  {
  //   return this.getSignal<null>(webApiZoneRootSwitchLanguage, {
  //     params: { cultureCode: code, enable: enable.toString() },
  //   });
  // }
  getSystemInfo(initial) {
    return this.getSignal(webApiZoneRootGetSystemInfo, {}, initial);
  }
  getLanguagesPermissions(initial) {
    return this.getSignal(webApiAppRootRootlanguages, {
      params: {
        appId: this.appId
      }
    }, initial);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵZoneService_BaseFactory;
      return function ZoneService_Factory(__ngFactoryType__) {
        return (ɵZoneService_BaseFactory || (ɵZoneService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ZoneService)))(__ngFactoryType__ || ZoneService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ZoneService,
      factory: ZoneService.ɵfac
    });
  }
}

/***/ }),

/***/ 71477:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/update-env-vars-from-dialog-settings.helper.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Update$2sxcEnvFromContext: () => (/* binding */ Update$2sxcEnvFromContext)
/* harmony export */ });
/**
 * This ensures that $2sxc is fully initialized with parameters which are provided later on
 * The appApi is being added in v12
 * It's important because in Oqtane the app-api root is different in from the normal admin-apis
 */
function Update$2sxcEnvFromContext(appContext) {
  try {
    const includedApiRoot = appContext?.Api;
    if (!includedApiRoot) return;
    const old2sxcHeader = window.$2sxc.env.header;
    const new2sxcHeader = {
      ...old2sxcHeader,
      appApi: includedApiRoot
    };
    window.$2sxc.env.load(new2sxcHeader);
  } catch {/* ignore */}
}

/***/ }),

/***/ 71693:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/routing/dialog-in-new-window.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogInNewWindowService: () => (/* binding */ DialogInNewWindowService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/dialog-type.constants */ 37567);
/* harmony import */ var _constants_session_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/session.constants */ 38172);
/* harmony import */ var _models_edit_form_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/edit-form.model */ 70334);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/context */ 68873);


// tslint:disable-next-line:max-line-length




/**
 * Service to open dialogs in a new window.
 */
class DialogInNewWindowService {
  constructor() {
    this.context = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_context__WEBPACK_IMPORTED_MODULE_3__.Context);
  }
  openCodeFile(path, isShared, templateId) {
    const form = {
      items: [{
        Path: path,
        ...(templateId != null && _models_edit_form_model__WEBPACK_IMPORTED_MODULE_2__.EditPrep.editId(templateId))
      }]
    };
    const hashParams = {
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDialog, _constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_0__.DialogTypeConstants.Develop),
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyIsShared, isShared.toString()),
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyItems, JSON.stringify(form.items))
    };
    const url = this.#buildFullUrl(hashParams);
    window.open(url, '_blank');
  }
  openAppAdministration(zoneId, appId, tab, scope) {
    const extras = {
      ...(tab && {
        tab
      }),
      ...(scope && {
        scope
      })
    };
    const hashParams = {
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyZoneId, zoneId.toString()),
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyAppId, appId.toString()),
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDialog, _constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_0__.DialogTypeConstants.App),
      ...(Object.keys(extras).length ? this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyExtras, JSON.stringify(extras)) : '')
    };
    const url = this.#buildFullUrl(hashParams);
    window.open(url, '_blank');
  }
  /** A lot of the link is identical when opening the admin-dialogs in a new window */
  #buildSharedHashParams() {
    const hashParams = {
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyZoneId, this.context.zoneId),
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyAppId, this.context.appId),
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyModuleId, this.context.moduleId?.toString()),
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyContentBlockId, this.context.contentBlockId?.toString()),
      ...this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyPartOfPage),
      ...(sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDebug) ? this.#buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDebug) : {})
    };
    return hashParams;
  }
  /** Encodes param if necessary */
  #buildHashParam(key, value) {
    const rawKey = key.replace(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.prefix, '');
    const valueTemp = value ?? sessionStorage.getItem(key);
    const rawValue = encodeURIComponent(valueTemp);
    const hashParam = {
      [rawKey]: rawValue
    };
    return hashParam;
  }
  /** Builds the full (ugly) url with all the hash parameters */
  #buildFullUrl(hashParams) {
    const oldHref = sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyUrl);
    const oldUrl = new URL(oldHref);
    const newHref = oldUrl.origin + oldUrl.pathname + oldUrl.search;
    const allHashParams = {
      ...this.#buildSharedHashParams(),
      ...hashParams
    };
    const hashUrl = Object.entries(allHashParams).reduce((acc, [key, value]) => `${acc}&${key}=${value}`, '').replace('&', '#');
    return newHref + hashUrl;
  }
  static {
    this.ɵfac = function DialogInNewWindowService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DialogInNewWindowService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: DialogInNewWindowService,
      factory: DialogInNewWindowService.ɵfac
    });
  }
}

/***/ }),

/***/ 72620:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/queries/ag-actions/ag-actions-component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgActionsAlwaysRefresh: () => (/* binding */ AgActionsAlwaysRefresh)
/* harmony export */ });
class AgActionsAlwaysRefresh {
  refresh(params) {
    return true;
  }
}

/***/ }),

/***/ 76068:
/*!*************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateFileDialogComponent: () => (/* reexport safe */ _create_file_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CreateFileDialogComponent),
/* harmony export */   FileLocationDialogComponent: () => (/* reexport safe */ _file_location_dialog_file_location_dialog_component__WEBPACK_IMPORTED_MODULE_0__.FileLocationDialogComponent)
/* harmony export */ });
/* harmony import */ var _file_location_dialog_file_location_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-location-dialog/file-location-dialog.component */ 24618);
/* harmony import */ var _file_location_dialog_file_location_dialog_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-location-dialog/file-location-dialog.models */ 93759);
/* harmony import */ var _create_file_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-file-dialog.component */ 47483);
/* harmony import */ var _create_file_dialog_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-file-dialog.models */ 90684);




// export * from './create-file-dialog.module';

/***/ }),

/***/ 83583:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/services/apps-list.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsListService: () => (/* binding */ AppsListService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiAppRootList = 'admin/app/list';
const webApiAppRootInheritableApps = 'admin/app/InheritableApps';
const webApiAppRootPendingApps = 'admin/app/GetPendingApps';
const webApiAppRootApp = 'admin/app/app';
const webApiAppRootInstallPendingApps = 'admin/app/InstallPendingApps';
const webApiAppRootFlushcache = 'admin/app/flushcache';
class AppsListService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getAll() {
    return this.getSignal(webApiAppRootList, {
      params: {
        zoneId: this.zoneId
      }
    });
  }
  getInheritable() {
    return this.getSignal(webApiAppRootInheritableApps, {
      params: {
        zoneId: this.zoneId
      }
    });
  }
  getPendingApps() {
    return this.getSignal(webApiAppRootPendingApps, {
      params: {
        zoneId: this.zoneId
      }
    });
  }
  create(name, inheritAppId, templateId) {
    return this.http.post(this.apiUrl(webApiAppRootApp), {}, {
      params: {
        zoneId: this.zoneId,
        name,
        ...(inheritAppId != null && {
          inheritAppId
        }),
        ...(templateId != null && {
          templateId
        })
      }
    });
  }
  installPendingApps(pendingApps) {
    return this.http.post(this.apiUrl(webApiAppRootInstallPendingApps), pendingApps, {
      params: {
        zoneId: this.zoneId
      }
    });
  }
  delete(appId) {
    return this.http.delete(this.apiUrl(webApiAppRootApp), {
      params: {
        zoneId: this.zoneId,
        appId: appId.toString()
      }
    });
  }
  flushCache(appId) {
    return this.getHttpApiUrl(webApiAppRootFlushcache, {
      params: {
        zoneId: this.zoneId,
        appId: appId.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵAppsListService_BaseFactory;
      return function AppsListService_Factory(__ngFactoryType__) {
        return (ɵAppsListService_BaseFactory || (ɵAppsListService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AppsListService)))(__ngFactoryType__ || AppsListService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppsListService,
      factory: AppsListService.ɵfac
    });
  }
}

/***/ }),

/***/ 83804:
/*!********************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/analyze-settings-value/analyze-settings-value.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeSettingsValueComponent: () => (/* binding */ AnalyzeSettingsValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _core_transient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../core/transient */ 12938);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/json.helpers */ 4038);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);







class AnalyzeSettingsValueComponent {
  constructor() {
    this.clipboard = (0,_core_transient__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_3__.ClipboardService);
  }
  agInit(params) {
    this.value = params.value;
  }
  refresh(params) {
    return true;
  }
  copy(value) {
    value = _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_2__.JsonHelpers.tryParse(value) ?? value;
    this.clipboard.copyToClipboard(value);
  }
  static {
    this.ɵfac = function AnalyzeSettingsValueComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnalyzeSettingsValueComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AnalyzeSettingsValueComponent,
      selectors: [["app-analyze-settings-value"]],
      decls: 3,
      vars: 2,
      consts: [["matRipple", "", 1, "value-box", "highlight", 3, "click", "tippy"], [1, "value"]],
      template: function AnalyzeSettingsValueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AnalyzeSettingsValueComponent_Template_div_click_0_listener() {
            return ctx.copy(ctx.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tippy", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.value);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      styles: [".value-box[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.value-box[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5emUtc2V0dGluZ3MtdmFsdWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImFuYWx5emUtc2V0dGluZ3MtdmFsdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsdWUtYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAudmFsdWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL2FuYWx5emUtc2V0dGluZ3MtdmFsdWUvYW5hbHl6ZS1zZXR0aW5ncy12YWx1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDQSw0cEJBQTRwQiIsInNvdXJjZXNDb250ZW50IjpbIi52YWx1ZS1ib3gge1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC52YWx1ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 85544:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/dialog-entry/dialog-entry.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogEntryComponent: () => (/* binding */ DialogEntryComponent)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../logging */ 34435);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);









class DialogEntryComponent {
  #dialogData;
  #dialog;
  constructor(matDialog, viewContainerRef, router, route, context, changeDetectorRef, injector) {
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.router = router;
    this.route = route;
    this.context = context;
    this.changeDetectorRef = changeDetectorRef;
    this.injector = injector;
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      DialogEntryComponent
    });
    const navigation = this.router.getCurrentNavigation();
    this.#dialogData = navigation?.extras?.state || {};
  }
  ngOnInit() {
    const l = this.log.fn('ngOnInit');
    const dialogConfig = this.route.snapshot.data.dialog;
    if (dialogConfig == null) throw new Error(`Could not find config for dialog. Did you forget to add DialogConfig to route data?`);
    l.a('Open dialog: ' + dialogConfig.name, {
      id: this.context.id,
      context: this.context
    });
    dialogConfig.getComponent(this.injector).then(component => {
      // spm Workaround for "feature" where you can't open new dialog while last one is still opening
      // https://github.com/angular/components/commit/728cf1c8ebd49e089f4bae945511bb0918972c26
      const dialog = this.matDialog;
      if (dialog._dialogAnimatingOpen && dialog._lastDialogRef) dialog._lastDialogRef.afterOpened().subscribe(() => this.openDialogComponent(dialogConfig, component));else this.openDialogComponent(dialogConfig, component);
    });
  }
  ngOnDestroy() {
    this.#dialog.close();
  }
  openDialogComponent(dialogConfig, component) {
    this.log.a(`Open dialog(initContext: ${dialogConfig.initContext})`, {
      name: dialogConfig.name,
      'Contextid:': this.context.log.svcId,
      'Context:': this.context
    });
    if (dialogConfig.initContext) this.context.init(this.route);
    this.#dialog = this.matDialog.open(component, {
      autoFocus: false,
      backdropClass: 'dialog-backdrop',
      closeOnNavigation: false,
      data: this.#dialogData,
      panelClass: ['dialog-panel', `dialog-panel-${dialogConfig.panelSize}`, dialogConfig.showScrollbar ? 'show-scrollbar' : 'no-scrollbar', ...(dialogConfig.panelClass ? dialogConfig.panelClass : [])],
      // spm NOTE: position used to force align-items: flex-start; on cdk-global-overlay-wrapper.
      // Real top margin is overwritten in css e.g. dialog-panel-large
      position: {
        top: '0'
      },
      viewContainerRef: this.viewContainerRef
    });
    this.#dialog.afterClosed().subscribe(data => {
      this.log.a('Dialog was closed - name:' + dialogConfig.name, {
        data
      });
      const navRes = data;
      if (navRes?.navigateUrl != null) {
        this.router.navigate([navRes.navigateUrl]);
        return;
      }
      if (this.route.pathFromRoot.length <= 3) {
        try {
          window.parent.$2sxc.totalPopup.close();
        } catch (error) {}
        return;
      }
      if (this.route.snapshot.url.length > 0) this.router.navigate(['./'], {
        relativeTo: this.route.parent,
        state: data
      });else this.router.navigate(['./'], {
        relativeTo: this.route.parent.parent,
        state: data
      });
    });
    this.changeDetectorRef.markForCheck();
  }
  static {
    this.ɵfac = function DialogEntryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DialogEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DialogEntryComponent,
      selectors: [["app-dialog-entry"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_context__WEBPACK_IMPORTED_MODULE_1__.Context // this is used in the dialog to get the correct App
      ])],
      decls: 0,
      vars: 0,
      template: function DialogEntryComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 87449:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items-dialog.config.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentItemsDialog: () => (/* binding */ contentItemsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const contentItemsDialog = {
  name: 'CONTENT_ITEMS_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ContentItemsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-83efe3"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_services_service-base_ts-node_modules_angular_material-ffa7b3"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_content-items_content-items_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-items.component */ 89));
      return ContentItemsComponent;
    })();
  }
};

/***/ }),

/***/ 88857:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/controls/ui-control.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiControl: () => (/* binding */ UiControl)
/* harmony export */ });
/* harmony import */ var lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/isEqual */ 92434);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/logging */ 34435);
/* harmony import */ var _edit_debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../edit-debug */ 36740);
/* harmony import */ var _helpers_field_value_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/field-value.helpers */ 6953);
/* harmony import */ var _validation_validation_messages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/validation-messages.helpers */ 58275);





const logSpecs = {
  all: true,
  constructor: false,
  markTouched: false,
  set: false,
  disable: false,
  getErrors: true,
  fields: [..._edit_debug__WEBPACK_IMPORTED_MODULE_1__.DebugFields, '*']
};
const pfx = 'ValidationMessage.';
/**
 * Provides information about the UI Control, but NOT the value.
 * It is used to simplify the logic when interacting with the Angular Virtual Form.
 */
class UiControl {
  constructor(control, name = 'unknown', moreDisabled = false) {
    this.control = control;
    this.name = name;
    this.moreDisabled = moreDisabled;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      UiControl
    }, logSpecs);
    this.#warningMessages = {
      jsonWarning: `${pfx}JsonWarning`,
      formulaWarning: `${pfx}NotValid`
    };
    // Patch control with dummy object for the nullable case where we're just creating a fake control...
    this.control ??= {
      dirty: false,
      invalid: false,
      touched: false,
      value: null,
      disabled: false
    };
    this.log.extendName(`[${name}]`);
    this.log.aIfInList('fields', this.name, {
      moreDisabled
    }, 'constructor');
  }
  static emptyControl() {
    return new UiControl({
      dirty: false,
      invalid: false,
      touched: false,
      value: null,
      disabled: false
    });
  }
  //#region simple direct properties & complex properties
  get dirty() {
    return this.control.dirty;
  }
  get invalid() {
    return this.control.invalid;
  }
  get touched() {
    return this.control.touched;
  }
  get disabled() {
    return this.control.disabled || this.moreDisabled;
  }
  get touchedAndInvalid() {
    return this.control.touched && this.control.invalid;
  }
  //#endregion
  //#region methods
  markTouched() {
    this.log.aIfInList('fields', this.name, null, 'markTouched');
    UiControl.markTouched(this.control);
  }
  setIfChanged(newValue) {
    const before = this.control.value;
    this.log.aIfInList('fields', this.name, {
      before,
      newValue
    }, 'setIfChanged');
    if ((0,lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_4__["default"])(newValue, this.control.value)) return;
    this.#set(newValue);
  }
  /** Use to update form controls value */
  #set(newValue) {
    const control = this.control;
    const before = control.value;
    this.log.aIfInList('fields', this.name, {
      before,
      newValue
    }, 'set');
    if (!control.touched) control.markAsTouched();
    if (!control.dirty && !_helpers_field_value_helpers__WEBPACK_IMPORTED_MODULE_2__.FieldValueHelpers.fieldValuesAreEqual(before, newValue)) control.markAsDirty();
    // Note: 2024-10-21 ca. 18.02 we have some timing issues, error always seems to show previous error; maybe fixed now, otherwise revisit
    // Set value must happen at the end, otherwise errors will be late by one cycle
    // for example, they could show "required" after the value was
    control.patchValue(newValue);
  }
  disable(disable) {
    this.log.aIfInList('fields', this.name, null, `disable: ${disable}`);
    UiControl.disable(this.control, disable);
  }
  //#endregion
  //#region private helpers
  /** TODO: Try to remove this by assigning controls [formControlName] in [formGroup] */
  static markTouched(control) {
    if (control.touched) return;
    control.markAsTouched();
    control.updateValueAndValidity();
  }
  /** Disables/enables control if not already disabled/enabled. Use this helper to trigger fewer events on the form */
  static disable(control, disable) {
    if (control.disabled === disable) return;
    if (disable) control.disable();else control.enable();
  }
  //#endregion
  /** Calculates error message */
  getErrors() {
    const control = this.control;
    const errors = control.errors;
    const l = this.log.fnIfInList('getErrors', 'fields', this.name, {
      control,
      name: this.name
    });
    if (!control.invalid) return l.r('', 'valid');
    if (!control.dirty && !control.touched) return l.r('', 'not dirty or touched');
    for (const errorKey of Object.keys(errors)) {
      const error = errorKey === 'formulaError' ? control.errors['formulaMessage'] ?? _validation_validation_messages_helpers__WEBPACK_IMPORTED_MODULE_3__.ValidationMsgHelper.messages[errorKey]?.(true) : _validation_validation_messages_helpers__WEBPACK_IMPORTED_MODULE_3__.ValidationMsgHelper.messages[errorKey]?.(true);
      if (error) return l.r(error, 'error found');
    }
    return l.r('', 'no error');
  }
  #warningMessages;
  getWarnings() {
    const control = this.control;
    if (control._warning == null) return '';
    if (!control.dirty && !control.touched) return '';
    let warning = '';
    for (const warningKey of Object.keys(control._warning)) {
      warning = warningKey === 'formulaWarning' ? control._warning['formulaMessage'] ?? this.#warningMessages[warningKey] : this.#warningMessages[warningKey];
      if (warning) break;
    }
    return warning;
  }
}

/***/ }),

/***/ 90684:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/create-file-dialog.models.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 93040:
/*!************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields-dialog.config.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editContentTypeFieldsDialog: () => (/* binding */ editContentTypeFieldsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const editContentTypeFieldsDialog = {
  name: 'EDIT_CONTENT_TYPE_FIELDS_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        EditContentTypeFieldsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-83efe3"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-974b18")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-content-type-fields.component */ 15604));
      return EditContentTypeFieldsComponent;
    })();
  }
};

/***/ }),

/***/ 93759:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/file-location-dialog/file-location-dialog.models.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 97440:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/replace-content/replace-content.routing.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replaceContentRoutes: () => (/* binding */ replaceContentRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _replace_content_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace-content-dialog.config */ 28129);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);



const replaceContentRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _replace_content_dialog_config__WEBPACK_IMPORTED_MODULE_1__.replaceContentDialog
  },
  children: [
  // Note 2024-07-01 2dm - not sure why it is configured without history, but to be safe I'll keep it for now
  ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__.EditRoutesNoHistory]
}];

/***/ })

}]);
//# sourceMappingURL=common.js.map