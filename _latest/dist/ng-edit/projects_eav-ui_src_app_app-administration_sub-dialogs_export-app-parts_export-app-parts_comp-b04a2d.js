"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_export-app-parts_export-app-parts_comp-b04a2d"],{

/***/ 33695:
/*!***************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/export-app-parts/export-app-parts.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAppPartsComponent: () => (/* binding */ ExportAppPartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/content-types.service */ 17693);
/* harmony import */ var _services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/export-app-parts.service */ 71475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);



























function ExportAppPartsComponent_Conditional_0_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", scopeOption_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", scopeOption_r3.name, " ");
  }
}
function ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 17)(1, "div", 18)(2, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_5_For_4_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const template_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](template_r7._export, $event) || (template_r7._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const template_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", template_r7._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", template_r7.Name, " (", template_r7.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 21)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](3, ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_5_For_4_Template, 5, 3, "li", 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](contentType_r5.Templates);
  }
}
function ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 17)(1, "div", 18)(2, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_6_For_4_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const entity_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](entity_r9._export, $event) || (entity_r9._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const entity_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", entity_r9._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", entity_r9.Title, " (", entity_r9.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 21)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Entities");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](3, ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_6_For_4_Template, 5, 3, "li", 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](contentType_r5.Entities);
  }
}
function ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 17)(1, "div", 18)(2, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const contentType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](contentType_r5._export, $event) || (contentType_r5._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_5_Template, 5, 0, "ul", 21)(6, ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Conditional_6_Template, 5, 0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", contentType_r5._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", contentType_r5.Name, " (", contentType_r5.Id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](5, contentType_r5.Templates.length > 0 ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](6, contentType_r5.Entities.length > 0 ? 6 : -1);
  }
}
function ExportAppPartsComponent_Conditional_0_Conditional_26_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 17)(1, "div", 18)(2, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_0_Conditional_26_For_10_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const template_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](template_r11._export, $event) || (template_r11._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const template_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", template_r11._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", template_r11.Name, " (", template_r11.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "ul", 15)(2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Content Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](4, ExportAppPartsComponent_Conditional_0_Conditional_26_For_5_Template, 7, 5, "li", 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ul", 15)(7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Templates Without Content Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](9, ExportAppPartsComponent_Conditional_0_Conditional_26_For_10_Template, 5, 3, "li", 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.contentInfo.ContentTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.contentInfo.TemplatesWithoutContentTypes);
  }
}
function ExportAppPartsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Export Content and Templates from this App");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " This is an advanced feature to export parts of the app. The export will create an xml file which can be imported into another site or app. To export the entire content of the app (for example when duplicating the entire site), go to the app export. For further help visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "2sxc Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 5)(11, "mat-form-field", 6)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ExportAppPartsComponent_Conditional_0_Template_mat_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.changeScope($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](15, ExportAppPartsComponent_Conditional_0_For_16_Template, 2, 2, "mat-option", 8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Other...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 9)(20, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExportAppPartsComponent_Conditional_0_Template_mat_icon_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.unlockScope());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, ExportAppPartsComponent_Conditional_0_Conditional_26_Template, 11, 0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-dialog-actions", 12)(28, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExportAppPartsComponent_Conditional_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExportAppPartsComponent_Conditional_0_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.exportAppParts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r12 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.exportScope)("disabled", ctx_r1.lockScope);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.scopeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.dropdownInsertValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tippy", ctx_r1.lockScope ? "Unlock" : "Lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lockScope ? "lock" : "lock_open", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](26, ctx_r1.contentInfo ? 26 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", vm_r12.loading || vm_r12.isExporting);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", vm_r12.loading || vm_r12.isExporting);
  }
}
class ExportAppPartsComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.hostClass = 'dialog-component';
    this.exportAppPartsService = (0,_core__WEBPACK_IMPORTED_MODULE_7__.transient)(_services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_3__.ExportAppPartsService);
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_7__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_2__.ContentTypesService);
    this.exportScope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.scopes.default.value;
    this.lockScope = true;
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_0__.dropdownInsertValue;
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.isExporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.loading$, this.isExporting$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([loading, isExporting]) => ({
      loading,
      isExporting
    })));
  }
  ngOnInit() {
    this.fetchScopes();
    this.fetchContentInfo();
  }
  ngOnDestroy() {
    this.loading$.complete();
    this.isExporting$.complete();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  exportAppParts() {
    this.isExporting$.next(true);
    // spm TODO: maybe optimize these functions to not loop content types and entities multiple times for no reason
    // spm TODO: figure out how to capture window loading to disable export button
    const contentTypeIds = this.selectedContentTypes().map(contentType => contentType.Id);
    const templateIds = this.selectedTemplates().map(template => template.Id);
    let entityIds = this.selectedEntities().map(entity => entity.Id);
    entityIds = entityIds.concat(templateIds);
    this.exportAppPartsService.exportParts(contentTypeIds, entityIds, templateIds);
    this.isExporting$.next(false);
  }
  changeScope(newScope) {
    if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_0__.dropdownInsertValue) {
      newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.scopes.default.value;
      if (!this.scopeOptions.find(option => option.value === newScope)) {
        const newScopeOption = {
          name: newScope,
          value: newScope
        };
        this.scopeOptions.unshift(newScopeOption);
      }
    }
    this.exportScope = newScope;
    this.fetchContentInfo();
  }
  unlockScope() {
    this.lockScope = !this.lockScope;
    if (this.lockScope) {
      this.exportScope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.scopes.default.value;
      this.fetchContentInfo();
    }
  }
  fetchScopes() {
    this.loading$.next(true);
    this.contentTypesService.getScopes().subscribe(scopes => {
      this.scopeOptions = scopes;
      this.loading$.next(false);
    });
  }
  fetchContentInfo() {
    this.loading$.next(true);
    this.exportAppPartsService.getContentInfo(this.exportScope).subscribe(contentInfo => {
      this.contentInfo = contentInfo;
      this.loading$.next(false);
    });
  }
  selectedContentTypes() {
    return this.contentInfo.ContentTypes.filter(contentType => contentType._export);
  }
  selectedEntities() {
    let entities = [];
    for (const contentType of this.contentInfo.ContentTypes) {
      entities = entities.concat(contentType.Entities.filter(entity => entity._export));
    }
    return entities;
  }
  selectedTemplates() {
    let templates = [];
    // The ones with...
    for (const contentType of this.contentInfo.ContentTypes) {
      templates = templates.concat(contentType.Templates.filter(template => template._export));
    }
    // ...and without content types
    templates = templates.concat(this.contentInfo.TemplatesWithoutContentTypes.filter(template => template._export));
    return templates;
  }
  static #_ = this.ɵfac = function ExportAppPartsComponent_Factory(t) {
    return new (t || ExportAppPartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ExportAppPartsComponent,
    selectors: [["app-export-app-parts"]],
    hostVars: 1,
    hostBindings: function ExportAppPartsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], ["href", "https://2sxc.org/en/help?tag=export", "target", "_blank"], [1, "eav-edit-input"], ["color", "accent", 1, "eav-mat-form-field"], ["name", "Scope", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["mat-icon-button", "", "matTextSuffix", "", 3, "tippy"], ["appClickStopPropagation", "", 3, "click"], ["appClickStopPropagation", "", "href", "https://2sxc.org/help?tag=scope", "target", "_blank"], ["align", "end"], ["mat-raised-button", "", 3, "click", "disabled"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "eav-content-info__list", "eav-content-info__base"], [1, "eav-content-info__title"], [1, "eav-content-info__item"], [1, "eav-option-box"], [3, "ngModelChange", "ngModel"], [1, "eav-option-box__text"], [1, "eav-content-info__list"], [1, "eav-content-info__subtitle"]],
    template: function ExportAppPartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ExportAppPartsComponent_Conditional_0_Template, 32, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_6__.TippyDirective],
    styles: [".eav-edit-input[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.eav-content-info__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.eav-content-info__subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.eav-content-info__list[_ngcontent-%COMP%] {\n  font-size: 14px;\n  list-style-type: none;\n}\n.eav-content-info__base[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.eav-content-info__item[_ngcontent-%COMP%] {\n  border-top: 1px solid #DDD;\n  padding: 2px;\n}\n\n.eav-option-box[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.eav-option-box__text[_ngcontent-%COMP%] {\n  white-space: normal;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9leHBvcnQtYXBwLXBhcnRzL2V4cG9ydC1hcHAtcGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtFO0VBQ0UsVUFBQTtBQUhKO0FBTUU7RUFDRSwwQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7QUFMRjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBTEoiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWVkaXQtaW5wdXQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5lYXYtY29udGVudC1pbmZvIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX3N1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19iYXNlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREREO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1vcHRpb24tYm94IHtcclxuICBtYXJnaW46IDhweCAwO1xyXG5cclxuICAmX190ZXh0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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

/***/ 39333:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/click-stop-propagation.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickStopPropagationDirective: () => (/* binding */ ClickStopPropagationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const logThis = false;
class ClickStopPropagationDirective {
  constructor() {
    if (logThis) console.log('ClickStopPropagationDirective.constructor');
  }
  onClick(event) {
    if (logThis) console.log('ClickStopPropagationDirective.onClick', event);
    event.stopPropagation();
  }
  static #_ = this.ɵfac = function ClickStopPropagationDirective_Factory(t) {
    return new (t || ClickStopPropagationDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ClickStopPropagationDirective,
    selectors: [["", "appClickStopPropagation", ""]],
    hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: true
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_export-app-parts_export-app-parts_comp-b04a2d.js.map