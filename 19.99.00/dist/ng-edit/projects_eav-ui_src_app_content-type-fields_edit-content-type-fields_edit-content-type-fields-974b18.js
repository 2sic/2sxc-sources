"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-974b18"],{

/***/ 4202:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/fields/input-type-catalog.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTypeCatalog: () => (/* binding */ InputTypeCatalog)
/* harmony export */ });
const InputTypeCatalog = {
  // Boolean
  BooleanDefault: 'boolean-default',
  BooleanTristate: 'boolean-tristate',
  // Custom
  CustomDefault: 'custom-default',
  CustomGps: 'custom-gps',
  CustomJsonEditor: 'custom-json-editor',
  // Date / Time
  DateTimeDefault: 'datetime-default',
  DefaultSuffix: '-default',
  // Empty
  EmptyDefault: 'empty-default',
  EmptyEnd: 'empty-end',
  EmptyMessage: 'empty-message',
  // Entity - all pickers
  EntityContentBlocks: 'entity-content-blocks',
  EntityDefault: 'entity-default',
  EntityQuery: 'entity-query',
  // External
  ExternalWebComponent: 'external-web-component',
  // Hyperlink / File
  HyperlinkDefault: 'hyperlink-default',
  HyperlinkLibrary: 'hyperlink-library',
  // Numbers
  NumberDefault: 'number-default',
  NumberDropdown: 'number-dropdown',
  // picker
  // String
  StringDefault: 'string-default',
  StringDropdown: 'string-dropdown',
  // picker
  StringDropdownQuery: 'string-dropdown-query',
  // picker
  StringFontIconPicker: 'string-font-icon-picker',
  StringJson: 'string-json',
  StringTemplatePicker: 'string-template-picker',
  // picker
  StringUrlPath: 'string-url-path',
  StringWysiwyg: 'string-wysiwyg',
  /** New Pickers v17.x */
  EntityPicker: 'entity-picker',
  StringPicker: 'string-picker',
  NumberPicker: 'number-picker',
  /** for all situations where we need a fallback; new v16.04 */
  Unknown: 'unknown'
} /* the as const ensures that the keys/values can be strictly checked */;

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 51903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 43143);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-administration/constants/field-name.patterns */ 47703);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/fields/content-types-fields.service */ 75959);
/* harmony import */ var _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/fields/data-type-catalog */ 1726);
/* harmony import */ var _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/fields/input-type-catalog */ 4202);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content-type-fields.helpers */ 14007);
/* harmony import */ var _reserved_names_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reserved-names.directive */ 35160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);




































const _c0 = ["ngForm"];
const _c1 = ["autoFocusInputField"];
const _c2 = a0 => ({
  "eav-input-obsolete": a0
});
const _forTrack0 = ($index, $item) => $item.SortOrder;
function EditContentTypeFieldsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, " Fields ");
  }
}
function EditContentTypeFieldsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, " Add Fields ");
  }
}
function EditContentTypeFieldsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, " Edit Field ");
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-field-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isError", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.fieldNameError);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-field-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    const staticName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isError", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", staticName_r5.errors.reservedNames, " ");
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_8_Conditional_0_Template, 2, 2, "app-field-hint", 20)(1, EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_8_Conditional_1_Template, 2, 2, "app-field-hint", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const staticName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](staticName_r5.errors.pattern ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](staticName_r5.errors.reservedNames ? 1 : -1);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", dataType_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", dataType_r7.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](dataType_r7.icon);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_For_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span")(1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r8.icon);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_For_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, EditContentTypeFieldsComponent_Conditional_6_For_4_For_34_Conditional_2_Template, 3, 1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r8.inputType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](4, _c2, option_r8.isObsolete));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", option_r8.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](option_r8.icon ? 2 : -1);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "div", 11)(2, "mat-form-field", 12)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "input", 13, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function EditContentTypeFieldsComponent_Conditional_6_For_4_Template_input_ngModelChange_5_listener($event) {
      const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](field_r4.StaticName, $event) || (field_r4.StaticName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, EditContentTypeFieldsComponent_Conditional_6_For_4_Conditional_8_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 11)(10, "mat-form-field", 12)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function EditContentTypeFieldsComponent_Conditional_6_For_4_Template_mat_select_selectionChange_13_listener($event) {
      const ɵ$index_18_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3).$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.setFieldType(ɵ$index_18_r6, $event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "mat-select-trigger")(15, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](19, EditContentTypeFieldsComponent_Conditional_6_For_4_For_20_Template, 4, 3, "mat-option", 16, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 11)(24, "mat-form-field", 12)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Input Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function EditContentTypeFieldsComponent_Conditional_6_For_4_Template_mat_select_selectionChange_27_listener($event) {
      const ɵ$index_18_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3).$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.updateFieldPart(ɵ$index_18_r6, {
        InputType: $event.value
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "mat-select-trigger")(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](33, EditContentTypeFieldsComponent_Conditional_6_For_4_For_34_Template, 3, 6, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_31_0;
    let tmp_32_0;
    const field_r4 = ctx.$implicit;
    const ɵ$index_18_r6 = ctx.$index;
    const staticName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pattern", ctx_r1.fieldNamePattern)("appReservedNames", ctx_r1.reservedNames());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", field_r4.StaticName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("name", "StaticName" + ɵ$index_18_r6)("disabled", ctx_r1.editMode === "inputType");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](staticName_r5.touched && staticName_r5.errors ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", field_r4.Type)("name", "Type" + ɵ$index_18_r6)("disabled", ctx_r1.editMode != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.findIcon(field_r4.Type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.findLabel(field_r4.Type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx_r1.dataTypes());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.hints()[ɵ$index_18_r6].data);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", field_r4.InputType)("name", "InputType" + ɵ$index_18_r6)("disabled", ctx_r1.editMode === "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_31_0 = ctx_r1.getInputTypeOption(field_r4.InputType)) == null ? null : tmp_31_0.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_32_0 = ctx_r1.getInputTypeOption(field_r4.InputType)) == null ? null : tmp_32_0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx_r1.inputTypeOptions()[ɵ$index_18_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.hints()[ɵ$index_18_r6].input);
  }
}
function EditContentTypeFieldsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 5, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function EditContentTypeFieldsComponent_Conditional_6_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](3, EditContentTypeFieldsComponent_Conditional_6_For_4_Template, 37, 18, "div", 7, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditContentTypeFieldsComponent_Conditional_6_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.dialog.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ngForm_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx_r1.fields());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ngForm_r9.form.valid || ctx_r1.saving());
  }
}
class EditContentTypeFieldsComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
  #typesSvc;
  #typesFieldsSvc;
  constructor(dialog, route, snackBar) {
    super();
    this.dialog = dialog;
    this.route = route;
    this.snackBar = snackBar;
    this.hostClass = 'dialog-component';
    this.#typesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_2__.ContentTypesService);
    this.#typesFieldsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_5__.ContentTypesFieldsService);
    // External functions / constants to pass to the view
    this.fieldNamePattern = _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_1__.fieldNamePattern;
    this.fieldNameError = _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_1__.fieldNameError;
    this.findIcon = _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_9__.calculateTypeIcon;
    this.findLabel = _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_9__.calculateTypeLabel;
    /** Edit mode is either not set (new fields) or edit-name / edit-inputType */
    this.editMode = this.route.snapshot.paramMap.get('editMode');
    this.filteredInputTypeOptions = [];
    this.saving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.signal)(false);
    /** Data types such as string, number, ... */
    this.dataTypes = this.#typesFieldsSvc.dataTypes();
    this.#inputTypeOptions = this.#typesFieldsSvc.getInputTypes();
    this.#contentTypeSig = this.#typesSvc.getTypeSig(this.route.snapshot.paramMap.get('contentTypeStaticName'), null);
    // Existing fields - to setup reserved names and initialize the fields
    this.existingFieldsLazy = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_8__.computedObj)('rawFields', () => {
      const contentType = this.#contentTypeSig();
      return contentType ? this.#typesFieldsSvc.getFieldsSig(contentType.NameId) : (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.signal)([]);
    });
    this.fields = (() => {
      // Get the fields once the data is ready
      const initial = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_8__.computedObj)('fields', () => {
        const fields = this.existingFieldsLazy()();
        if (this.editMode != null) {
          if (fields.length === 0) return [];
          const routeId = this.route.snapshot.paramMap.get('id');
          const editFieldId = routeId ? parseInt(routeId, 10) : null;
          const editField = fields.find(field => field.Id === editFieldId);
          return [editField];
        } else return this.#generateNewList(fields.length);
      });
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.linkedSignal)({
        source: initial,
        computation: fields => fields
      });
    })();
    // Figure out the reserved names which should not be used as field names
    this.#reservedNamesSystem = this.#typesFieldsSvc.reservedNames();
    this.reservedNames = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_8__.computedObj)('reservedNamesAll', () => {
      // setup watchers
      const fields = this.existingFieldsLazy()();
      const reservedNames = this.#reservedNamesSystem();
      if (fields.length === 0) return reservedNames;
      const merged = _reserved_names_directive__WEBPACK_IMPORTED_MODULE_10__.ReservedNamesValidatorDirective.mergeReserved(reservedNames, fields);
      // If we're about to rename, allow the current name to be reused
      if (this.editMode === 'name') delete merged[fields[0].StaticName];
      return merged;
    });
    /** 2D array of all possible options (by field index) */
    this.inputTypeOptions = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_8__.computedObj)('inputTypeOptions', () => {
      const all = this.#inputTypeOptions();
      const fields = this.fields();
      return fields.map((field, i) => {
        return all.filter(option => option.dataType === field.Type.toLocaleLowerCase());
      });
    });
    this.hints = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_8__.computedObj)('hints', () => {
      const fields = this.fields();
      return fields.map((field, i) => {
        const dataType = this.dataTypes().find(dataType => dataType.name === field.Type);
        const inputType = this.#inputTypeOptions().find(option => option.inputType === field.InputType);
        return {
          data: dataType?.description ?? '',
          input: inputType?.isObsolete ? `OBSOLETE - ${inputType.obsoleteMessage}` : inputType?.description ?? ''
        };
      });
    });
    this.dialog.disableClose = true;
    this.subscriptions.add(this.dialog.backdropClick().subscribe(_ => {
      if (this.form.dirty) {
        const confirmed = confirm('You have unsaved changes. Are you sure you want to close this dialog?');
        if (!confirmed) return;
      }
      this.dialog.close();
    }));
  }
  #inputTypeOptions;
  #contentTypeSig;
  // Figure out the reserved names which should not be used as field names
  #reservedNamesSystem;
  ngAfterViewInit() {
    // Wait for the inputFields to be available
    // But delay execution to ensure the view is fully rendered
    if (this.autoFocusInputField) setTimeout(() => this.autoFocusInputField.first?.nativeElement?.focus(), 250);
  }
  #generateNewList(existingFieldCount) {
    return [...Array(8).keys()].map(k => ({
      Id: 0,
      Type: _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_6__.DataTypeCatalog.String,
      InputType: _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_7__.InputTypeCatalog.StringDefault,
      StaticName: '',
      // first one is title, if there were no fields before
      IsTitle: existingFieldCount === 0 && k === 0,
      SortOrder: existingFieldCount + k + 1
    }));
  }
  updateFieldPart(index, patch) {
    this.fields.update(fields => [...fields].map((f, i) => i !== index ? f : {
      ...f,
      ...patch
    }));
  }
  setFieldType(index, type) {
    // First update the field, as we'll access this again indirectly through other signals
    this.updateFieldPart(index, {
      Type: type
    });
    // Check if it has a xxx-default like string-default in the list
    const defaultInputName = type.toLocaleLowerCase() + _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_7__.InputTypeCatalog.DefaultSuffix;
    const options = this.inputTypeOptions()[index];
    const inputName = options.find(option => option.inputType === defaultInputName)?.inputType ?? options[0].inputType;
    this.updateFieldPart(index, {
      InputType: inputName
    });
  }
  getInputTypeOption(inputName) {
    return this.#inputTypeOptions().find(option => option.inputType === inputName);
  }
  save() {
    this.saving.set(true);
    this.snackBar.open('Saving...');
    // Prepare finalize-action to reuse below
    const doneAndClose = () => {
      this.saving.set(false);
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.dialog.close();
    };
    if (this.editMode != null) {
      const field = this.fields()[0];
      if (this.editMode === 'name') {
        this.#typesFieldsSvc.rename(field.Id, this.#contentTypeSig().Id, field.StaticName).subscribe(() => doneAndClose());
      } else if (this.editMode === 'inputType') {
        this.#typesFieldsSvc.updateInputType(field.Id, field.StaticName, field.InputType).subscribe(() => doneAndClose());
      }
    } else {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(...this.fields()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.filter)(field => !!field.StaticName), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.concatMap)(field => this.#typesFieldsSvc.add(field, this.#contentTypeSig().Id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(null)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.toArray)()).subscribe(() => doneAndClose());
    }
  }
  static {
    this.ɵfac = function EditContentTypeFieldsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditContentTypeFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: EditContentTypeFieldsComponent,
      selectors: [["app-edit-content-type-fields"]],
      viewQuery: function EditContentTypeFieldsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.autoFocusInputField = _t);
        }
      },
      hostVars: 1,
      hostBindings: function EditContentTypeFieldsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 4,
      consts: [["ngForm", "ngForm"], ["staticName", "ngModel", "autoFocusInputField", ""], [1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [3, "ngSubmit"], [1, "eav-dialog-content"], [1, "eav-row-container"], [1, "spacer"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "submit", "color", "accent", 3, "disabled"], [1, "eav-edit-input"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", 3, "ngModelChange", "pattern", "appReservedNames", "ngModel", "name", "disabled"], ["panelClass", "eav-type-field-type-select", "panelWidth", "", 3, "selectionChange", "ngModel", "name", "disabled"], [1, "eav-type-icon"], [3, "value"], ["panelClass", "eav-type-field-input-type-select", "panelWidth", "", 3, "selectionChange", "ngModel", "name", "disabled"], [1, "eav-input-icon"], [3, "value", "ngClass"], [3, "isError"]],
      template: function EditContentTypeFieldsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, EditContentTypeFieldsComponent_Conditional_3_Template, 1, 0)(4, EditContentTypeFieldsComponent_Conditional_4_Template, 1, 0)(5, EditContentTypeFieldsComponent_Conditional_5_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, EditContentTypeFieldsComponent_Conditional_6_Template, 11, 1, "form");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.editMode === undefined ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.editMode === null ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.editMode != null ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.fields().length ? 6 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _reserved_names_directive__WEBPACK_IMPORTED_MODULE_10__.ReservedNamesValidatorDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__.FieldHintComponent],
      styles: [".eav-row-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.eav-edit-input[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n  width: 30%;\n}\n\n.eav-type-icon[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  margin-right: 8px;\n  font-size: inherit;\n  vertical-align: top;\n  line-height: inherit;\n}\n\n.eav-input-icon[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  margin-left: 8px;\n  font-size: inherit;\n  vertical-align: top;\n  line-height: inherit;\n}\n\n.eav-input-obsolete[_ngcontent-%COMP%] {\n  -webkit-text-decoration: black line-through;\n          text-decoration: black line-through;\n  color: dimgray;\n}\n\n  .mdc-menu-surface.mat-mdc-select-panel.eav-type-field-input-type-select,   .mdc-menu-surface.mat-mdc-select-panel.eav-type-field-type-select {\n  max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY29udGVudC10eXBlLWZpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUtFO0VBQ0UsaUJBQUE7QUFGSiIsImZpbGUiOiJlZGl0LWNvbnRlbnQtdHlwZS1maWVsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXJvdy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZWF2LWVkaXQtaW5wdXQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmVhdi10eXBlLWljb24ge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmVhdi1pbnB1dC1pY29uIHtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmVhdi1pbnB1dC1vYnNvbGV0ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBibGFjayBsaW5lLXRocm91Z2g7XHJcbiAgY29sb3I6IGRpbWdyYXk7XHJcbn1cclxuXHJcbi8vIEdldCB0aGUgcGFuZWwgb2YgdGhlIHNlbGVjdGlvbiB0byBiZSBsb25nZXJcclxuLy8gc28gdGhhdCB0aGUgdXNlciBjYW4gc2VlIGFsbCBvcHRpb25zXHJcbjo6bmctZGVlcCAubWRjLW1lbnUtc3VyZmFjZS5tYXQtbWRjLXNlbGVjdC1wYW5lbCB7XHJcbiAgJi5lYXYtdHlwZS1maWVsZC1pbnB1dC10eXBlLXNlbGVjdCwgJi5lYXYtdHlwZS1maWVsZC10eXBlLXNlbGVjdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtdHlwZS1maWVsZHMvZWRpdC1jb250ZW50LXR5cGUtZmllbGRzL2VkaXQtY29udGVudC10eXBlLWZpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUtFO0VBQ0UsaUJBQUE7QUFGSjtBQUVBLDR2REFBNHZEIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1yb3ctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmVhdi1lZGl0LWlucHV0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5lYXYtdHlwZS1pY29uIHtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5lYXYtaW5wdXQtaWNvbiB7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5lYXYtaW5wdXQtb2Jzb2xldGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogYmxhY2sgbGluZS10aHJvdWdoO1xyXG4gIGNvbG9yOiBkaW1ncmF5O1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIHBhbmVsIG9mIHRoZSBzZWxlY3Rpb24gdG8gYmUgbG9uZ2VyXHJcbi8vIHNvIHRoYXQgdGhlIHVzZXIgY2FuIHNlZSBhbGwgb3B0aW9uc1xyXG46Om5nLWRlZXAgLm1kYy1tZW51LXN1cmZhY2UubWF0LW1kYy1zZWxlY3QtcGFuZWwge1xyXG4gICYuZWF2LXR5cGUtZmllbGQtaW5wdXQtdHlwZS1zZWxlY3QsICYuZWF2LXR5cGUtZmllbGQtdHlwZS1zZWxlY3Qge1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 24950);





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
    this.isError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false);
    this.isShort = true;
  }
  toggleIsShort() {
    this.isShort = !this.isShort;
  }
  static {
    this.ɵfac = function FieldHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FieldHintComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FieldHintComponent,
      selectors: [["app-field-hint"]],
      inputs: {
        isError: [1, "isError"]
      },
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_Template, 2, 1, "mat-hint")(2, FieldHintComponent_Case_2_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldHintComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isShort));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_2_0 = ctx.isError()) === false ? 1 : tmp_2_0 === true ? 2 : -1);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
      styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], \n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], \n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZWxkLWhpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTs7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQUNKO0FBR0k7O0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRE4iLCJmaWxlIjoiZmllbGQtaGludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtaGludCxcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtZXJyb3Ige1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFHSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFETjtBQUNBLG8wQkFBbzBCIiwic291cmNlc0NvbnRlbnQiOlsiLmhpbnQtYm94IHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQtaGludCxcclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJl9fc2hvcnQge1xyXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZC1oaW50LFxyXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-974b18.js.map