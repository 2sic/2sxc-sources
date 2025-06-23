"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_edit_dialog_footer_edit-dialog-footer_component_ts"],{

/***/ 8764:
/*!***********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/logs-config/config-editor-dialog/config-editor-dialog.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditorDialogComponent: () => (/* binding */ ConfigEditorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/clipboard */ 52352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core_transient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../core/transient */ 12938);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../..//shared/services/clipboard.service */ 25081);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../monaco-editor/monaco-editor.component */ 96581);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);













class ConfigEditorDialogComponent {
  constructor(dialog, data) {
    this.dialog = dialog;
    this.data = data;
    this.hostClass = 'dialog-component';
    this.focused = false;
    this.editorOptions = {
      theme: 'vs-light',
      language: 'json',
      readOnly: true,
      automaticLayout: true,
      minimap: {
        enabled: false
      },
      scrollBeyondLastLine: false
    };
    this.filename = 'exported-config.json';
    this.clipboard = (0,_core_transient__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_1__.ClipboardService);
    this.selectedConfig = JSON.stringify(data.configData, null, 2);
  }
  onFocused(focused) {
    this.focused = focused;
  }
  static {
    this.ɵfac = function ConfigEditorDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigEditorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ConfigEditorDialogComponent,
      selectors: [["app-monaco-editor-dialog"]],
      hostVars: 1,
      hostBindings: function ConfigEditorDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 13,
      vars: 3,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "mat-dialog-close", "", "tippy", "Close dialog"], [1, "eav-dialog-content", 2, "padding-bottom", "0"], [2, "height", "350px", "width", "100%", 3, "focused", "blurred", "filename", "value", "options"], ["mat-icon-button", "", "tippy", "Copy Config To Clipboard", 3, "click"]],
      template: function ConfigEditorDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Configs Exporter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3)(5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "app-monaco-editor", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focused", function ConfigEditorDialogComponent_Template_app_monaco_editor_focused_8_listener() {
            return ctx.onFocused(true);
          })("blurred", function ConfigEditorDialogComponent_Template_app_monaco_editor_blurred_8_listener() {
            return ctx.onFocused(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-dialog-actions")(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfigEditorDialogComponent_Template_button_click_10_listener() {
            return ctx.clipboard.copyToClipboard(ctx.selectedConfig);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "content_copy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filename", ctx.filename)("value", ctx.selectedConfig)("options", ctx.editorOptions);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_2__.MonacoEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__.ClipboardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 22754:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/formula-designer/formula-designer.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaDesignerComponent: () => (/* binding */ FormulaDesignerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _core_transient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../core/transient */ 12938);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../monaco-editor/monaco-editor.component */ 96581);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/logging */ 34435);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _shared_services_entity_edit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/entity-edit.service */ 96817);
/* harmony import */ var _form_form_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../form/form-config.service */ 8265);
/* harmony import */ var _formulas_designer_formula_designer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../formulas/designer/formula-designer.service */ 3133);
/* harmony import */ var _formulas_formula_definitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../formulas/formula-definitions */ 60827);
/* harmony import */ var _formulas_targets_formula_targets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../formulas/targets/formula-targets */ 55970);
/* harmony import */ var _shared_content_types_content_type_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/content-types/content-type.service */ 36849);
/* harmony import */ var _state_item_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../state/item.service */ 15914);
/* harmony import */ var _formula_designer_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formula-designer.models */ 40126);
/* harmony import */ var _snippet_label_size_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./snippet-label-size.pipe */ 80960);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 90852);










































const _c0 = (a0, a1) => ({
  "disabled": a0,
  "focused": a1
});
const _c1 = a0 => ({
  "disabled": a0
});
const _c2 = a0 => ({
  "has-formula": a0
});
const _forTrack0 = ($index, $item) => $item.entityGuid;
const _forTrack1 = ($index, $item) => $item.fieldName;
const _forTrack2 = ($index, $item) => $item.code;
function FormulaDesignerComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 4)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entityOption_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", entityOption_r3.entityGuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](3, _c2, entityOption_r3.hasFormula));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", entityOption_r3.label, " ");
  }
}
function FormulaDesignerComponent_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 4)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fieldOption_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", fieldOption_r4.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](3, _c2, fieldOption_r4.hasFormula));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", fieldOption_r4.fieldName, " ");
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 4)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const targetOption_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", targetOption_r6.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](3, _c2, targetOption_r6.hasFormula));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", targetOption_r6.label, " ");
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function FormulaDesignerComponent_Conditional_0_Conditional_16_Template_mat_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectedChanged(ctx_r1.SelectTargets.Target, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](1, FormulaDesignerComponent_Conditional_0_Conditional_16_For_2_Template, 3, 5, "mat-option", 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r1.state().target)("disabled", ctx_r1.state().entityGuid == null || ctx_r1.state().fieldName == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](ctx_r1.targetOptions());
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function FormulaDesignerComponent_Conditional_0_Conditional_17_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectedChanged(ctx_r1.SelectTargets.Target, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r1.state().target)("disabled", ctx_r1.state().entityGuid == null || ctx_r1.state().fieldName == null);
  }
}
function FormulaDesignerComponent_Conditional_0_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_For_32_Template_div_click_0_listener() {
      const snippet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(snippet_r9.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "snippetLabelSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", snippet_r9.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, snippet_r9.label), " ");
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "div", 17);
  }
}
function FormulaDesignerComponent_Conditional_0_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_For_35_Template_div_click_0_listener() {
      const snippet_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(snippet_r11.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "snippetLabelSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", snippet_r11.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, snippet_r11.label), " ");
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, ctx_r1.result().value));
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "undefined");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "promise(\uD83E\uDD1E\uD83C\uDFFD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_0_Conditional_0_Template, 3, 3, "span")(1, FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_0_Conditional_1_Template, 2, 0, "span", 31)(2, FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_0_Conditional_2_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](ctx_r1.result().value !== undefined ? 0 : !ctx_r1.result().isOnlyPromise ? 1 : 2);
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Calculation failed. Please check console for more info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_0_Template, 3, 1)(1, FormulaDesignerComponent_Conditional_0_Conditional_40_Conditional_1_Template, 2, 0, "span", 30);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!ctx_r1.result().isError ? 0 : 1);
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_60_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tippyDisabled", !ctx_r1.state().editMode || !((tmp_3_0 = ctx_r1.currentFormula()) == null ? null : tmp_3_0.sourceCode))("disabled", !ctx_r1.state().editMode || !((tmp_4_0 = ctx_r1.currentFormula()) == null ? null : tmp_4_0.sourceCode) || ctx_r1.saving());
  }
}
function FormulaDesignerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1)(1, "mat-form-field", 2)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Entity");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function FormulaDesignerComponent_Conditional_0_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectedChanged(ctx_r1.SelectTargets.Entity, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](5, FormulaDesignerComponent_Conditional_0_For_6_Template, 3, 5, "mat-option", 4, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "mat-form-field", 2)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function FormulaDesignerComponent_Conditional_0_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectedChanged(ctx_r1.SelectTargets.Field, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](11, FormulaDesignerComponent_Conditional_0_For_12_Template, 3, 5, "mat-option", 4, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "mat-form-field", 2)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, FormulaDesignerComponent_Conditional_0_Conditional_16_Template, 3, 2, "mat-select", 6)(17, FormulaDesignerComponent_Conditional_0_Conditional_17_Template, 1, 2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.toggleFreeText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "text_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "a", 10)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "help");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 11)(26, "div", 12)(27, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "Function");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "app-monaco-editor", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChanged", function FormulaDesignerComponent_Conditional_0_Template_app_monaco_editor_valueChanged_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.formulaChanged($event));
    })("focused", function FormulaDesignerComponent_Conditional_0_Template_app_monaco_editor_focused_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onFocused(true));
    })("blurred", function FormulaDesignerComponent_Conditional_0_Template_app_monaco_editor_blurred_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onFocused(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](31, FormulaDesignerComponent_Conditional_0_For_32_Template, 3, 4, "div", 16, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](33, FormulaDesignerComponent_Conditional_0_Conditional_33_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](34, FormulaDesignerComponent_Conditional_0_For_35_Template, 3, 4, "div", 16, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "div", 18)(37, "div", 19)(38, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "Result:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, FormulaDesignerComponent_Conditional_0_Conditional_40_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 20)(42, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.toggleEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "button", 22)(46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "mat-menu", null, 0)(50, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.deleteFormula());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](56, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](57, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](59, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](60, FormulaDesignerComponent_Conditional_0_Conditional_60_Template, 3, 2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.run());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_16_0;
    let tmp_20_0;
    let tmp_22_0;
    const menu_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](49);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r1.state().entityGuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](ctx_r1.entityOptions());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r1.state().fieldName)("disabled", ctx_r1.state().entityGuid == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](ctx_r1.fieldsOptions());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!ctx_r1.freeTextTarget ? 16 : 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.state().entityGuid == null || ctx_r1.state().fieldName == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction2"](17, _c0, !ctx_r1.state().editMode || ctx_r1.state().entityGuid == null || ctx_r1.state().fieldName == null || ctx_r1.state().target == null, ctx_r1.focused));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("filename", ctx_r1.filename)("value", (tmp_11_0 = (tmp_11_0 = ctx_r1.currentFormula()) == null ? null : tmp_11_0.sourceCode) !== null && tmp_11_0 !== undefined ? tmp_11_0 : ctx_r1.template())("jsTypings", ctx_r1.v2JsTypings())("options", ctx_r1.monacoOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](20, _c1, !ctx_r1.state().editMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](ctx_r1.v1DataSnippets());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](((tmp_16_0 = ctx_r1.v1DataSnippets()) == null ? null : tmp_16_0.length) && ctx_r1.v1ContextSnippets().length ? 33 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](ctx_r1.v1ContextSnippets());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](ctx_r1.result() != null && !ctx_r1.isDeleted() ? 40 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matMenuTriggerFor", menu_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !((tmp_20_0 = ctx_r1.currentFormula()) == null ? null : tmp_20_0.sourceCodeId));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](ctx_r1.allowSaveFormula ? 60 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r1.state().editMode || !((tmp_22_0 = ctx_r1.currentFormula()) == null ? null : tmp_22_0.sourceCode));
  }
}
class FormulaDesignerComponent {
  #designerSvc;
  #entitiesService;
  constructor(snackBar, formConfig, itemService, contentTypeService, translate) {
    this.snackBar = snackBar;
    this.formConfig = formConfig;
    this.itemService = itemService;
    this.contentTypeService = contentTypeService;
    this.translate = translate;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_4__.classLog)({
      FormulaDesignerComponent
    });
    this.#designerSvc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_formulas_designer_formula_designer_service__WEBPACK_IMPORTED_MODULE_9__.FormulaDesignerService);
    this.#entitiesService = (0,_core_transient__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_entity_edit_service__WEBPACK_IMPORTED_MODULE_7__.EntityEditService);
    this.clipboard = (0,_core_transient__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_6__.ClipboardService);
    this.SelectTargets = _formula_designer_models__WEBPACK_IMPORTED_MODULE_14__.SelectTargets;
    this.loadError = false;
    this.freeTextTarget = false;
    this.allowSaveFormula = this.formConfig.config.enableFormulaSave;
    this.isDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.signal)(false);
    this.saving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.signal)(false);
    this.monacoOptions = {
      minimap: {
        enabled: false
      },
      lineHeight: 19,
      lineNumbers: 'off',
      lineDecorationsWidth: 0,
      folding: false,
      scrollBeyondLastLine: false,
      tabSize: 2,
      fixedOverflowWidgets: true
    };
    this.filename = `formula${this.formConfig.config.formId}.js`;
    this.focused = false;
    this.state = this.#designerSvc.designerState;
    this.result = this.#designerSvc.formulaResult;
    this.targetOptions = this.#designerSvc.currentTargetOptions;
    this.entityOptions = this.#designerSvc.entityOptions;
    this.fieldsOptions = this.#designerSvc.fieldsOptions;
    this.currentFormula = this.#designerSvc.currentFormula;
    this.v2JsTypings = this.#designerSvc.v2JsTypings;
    this.v1ContextSnippets = this.#designerSvc.v1ContextSnippets;
    this.v1DataSnippets = this.#designerSvc.v1DataSnippets;
    this.template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.computed)(() => Object.values(_formulas_targets_formula_targets__WEBPACK_IMPORTED_MODULE_11__.FormulaNewPickerTargets).includes(this.state().target) ? _formulas_formula_definitions__WEBPACK_IMPORTED_MODULE_10__.defaultListItemFormula : _formulas_formula_definitions__WEBPACK_IMPORTED_MODULE_10__.defaultFormula);
  }
  ngOnInit() {
    // Make sure all necessary services have what they need, otherwise flag & exit
    // 1. Make sure the designer has access to all itemSettingsServices
    this.loadError = false;
    if (Object.keys(this.#designerSvc.itemSettingsServices).length < 1) {
      this.loadError = true;
      return;
    }
    this.#designerSvc.setDesignerOpen(true);
    this.#designerSvc.initAfterItemSettingsAreReady();
  }
  ngOnDestroy() {
    this.#designerSvc.setDesignerOpen(false);
  }
  selectedChanged(target, value) {
    const newState = {
      ...this.#designerSvc.designerState(),
      editMode: false
    };
    switch (target) {
      case _formula_designer_models__WEBPACK_IMPORTED_MODULE_14__.SelectTargets.Entity:
        newState.entityGuid = value;
        const selectedSettingsSvc = this.#designerSvc.itemSettingsServices[newState.entityGuid];
        newState.fieldName = Object.keys(selectedSettingsSvc.allProps())[0];
        break;
      case _formula_designer_models__WEBPACK_IMPORTED_MODULE_14__.SelectTargets.Field:
        newState.fieldName = value;
        break;
      case _formula_designer_models__WEBPACK_IMPORTED_MODULE_14__.SelectTargets.Target:
        newState.target = value;
        break;
    }
    this.#designerSvc.designerState.set(newState);
  }
  toggleFreeText() {
    this.freeTextTarget = !this.freeTextTarget;
  }
  formulaChanged(formula) {
    this.#designerSvc.cache.updateFormulaFromEditor(this.#designerIdentifier, formula, false);
  }
  onFocused(focused) {
    this.focused = focused;
  }
  toggleEdit() {
    const oldState = this.#designerSvc.designerState();
    const designer = {
      ...oldState,
      editMode: !oldState.editMode
    };
    this.#designerSvc.designerState.set(designer);
    if (designer.editMode && this.#designerSvc.currentFormula() == null) this.#designerSvc.cache.updateFormulaFromEditor(this.#designerIdentifier, this.template(), false);
  }
  reset() {
    const designer = {
      ...this.#designerSvc.designerState(),
      editMode: false
    };
    const identifier = this.#designerIdentifier;
    this.#designerSvc.designerState.set(designer);
    this.#designerSvc.cache.resetFormula(identifier);
    this.#designerSvc.itemSettingsServices[identifier.entityGuid].retriggerFormulas('designer-reset');
  }
  run() {
    const identifier = this.#designerIdentifier;
    const formula = this.#designerSvc.currentFormula();
    this.#designerSvc.cache.updateFormulaFromEditor(identifier, formula.sourceCode, true);
    this.#designerSvc.itemSettingsServices[identifier.entityGuid].retriggerFormulas('designer-run');
    this.isDeleted.set(false);
  }
  get #designerIdentifier() {
    const designer = this.#designerSvc.designerState();
    const id = {
      entityGuid: designer.entityGuid,
      fieldName: designer.fieldName,
      target: designer.target
    };
    return id;
  }
  //#region Save/Delete
  save() {
    this.saving.set(true);
    const formula = this.#designerSvc.currentFormula();
    if (formula.sourceCodeId == null) {
      const item = this.itemService.get(formula.entityGuid);
      const attributeDef = this.contentTypeService.getAttributeOfItem(item, formula.fieldName);
      const atAllFieldSettings = attributeDef.Metadata.find(m => m.Type.Id === '@All');
      if (!atAllFieldSettings) {
        this.snackBar.open('Field configuration is missing. Please create formula in Administration', undefined, {
          duration: 3000
        });
        this.saving.set(false);
        return;
      }
      this.#entitiesService.create(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.contentTypes.formulas, {
        Title: formula.target,
        Target: formula.target,
        Formula: formula.sourceCode,
        Enabled: true,
        ParentRelationship: _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__.EditPrep.relationship(atAllFieldSettings.Guid, 'Formulas')
      }).subscribe(savedFormula => {
        this.#designerSvc.cache.updateSaved(formula, savedFormula.Guid, savedFormula.Id);
        this.snackBar.open('Formula saved', null, {
          duration: 2000
        });
        this.saving.set(false);
      });
      return;
    }
    this.#entitiesService.update(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.contentTypes.formulas, formula.sourceCodeId, {
      Formula: formula.sourceCode
    }).subscribe(() => {
      this.#designerSvc.cache.updateSaved(formula, formula.sourceCodeGuid, formula.sourceCodeId);
      this.snackBar.open('Formula saved', null, {
        duration: 2000
      });
      this.saving.set(false);
    });
  }
  deleteFormula() {
    const designer = this.#designerSvc.designerState();
    const formula = this.#designerSvc.currentFormula();
    const id = formula.sourceCodeId;
    const title = formula.fieldName + ' - ' + formula.target;
    const confirmed = confirm(this.translate.instant('Data.Delete.Question', {
      title,
      id
    }));
    if (!confirmed) return;
    this.#entitiesService.delete(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.contentTypes.formulas, formula.sourceCodeId, true).subscribe({
      next: () => {
        this.#designerSvc.cache.delete(formula);
        this.snackBar.open(this.translate.instant('Message.Deleted'), null, {
          duration: 2000
        });
        this.isDeleted.set(true);
        if (designer.editMode) this.toggleEdit();
      },
      error: _ => {
        this.snackBar.open(this.translate.instant('Message.DeleteError'), null, {
          duration: 2000
        });
      }
    });
  }
  static {
    this.ɵfac = function FormulaDesignerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FormulaDesignerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_form_form_config_service__WEBPACK_IMPORTED_MODULE_8__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_state_item_service__WEBPACK_IMPORTED_MODULE_13__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_content_types_content_type_service__WEBPACK_IMPORTED_MODULE_12__.ContentTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: FormulaDesignerComponent,
      selectors: [["app-formula-designer"]],
      decls: 1,
      vars: 1,
      consts: [["menu", "matMenu"], [1, "formula-context-box"], ["color", "accent", 1, "eav-mat-form-field"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "ngModelChange", "ngModel", "disabled"], [3, "ngModel", "disabled"], ["matInput", "", 3, "ngModel", "disabled"], ["mat-icon-button", "", "tippy", "FreeText Target", 1, "eav-formula-button", 3, "click", "disabled"], [1, "spacer"], ["mat-icon-button", "", "tippy", "Help", "href", "https://go.2sxc.org/formulas", "target", "_blank", 1, "eav-formula-button"], [1, "formula-box"], [1, "formula-field", 3, "ngClass"], [1, "label"], [1, "editor", 3, "valueChanged", "focused", "blurred", "filename", "value", "jsTypings", "options"], [1, "formula-snippets", "fancy-scrollbar-light", 3, "ngClass"], [1, "snippet", 3, "title"], [1, "separator"], [1, "formula-footer-box"], [1, "formula-result-box", "hide-scrollbar"], [1, "formula-actions-box"], ["mat-icon-button", "", "tippy", "Edit", 3, "click"], ["mat-icon-button", "", "tippy", "Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "tippy", "Save", 3, "tippyDisabled", "disabled"], ["mat-icon-button", "", "tippy", "Run", 3, "click", "disabled"], [3, "ngClass"], ["matInput", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "snippet", 3, "click", "title"], [1, "result-error"], [1, "result-undefined"], ["mat-icon-button", "", "tippy", "Save", 3, "click", "tippyDisabled", "disabled"]],
      template: function FormulaDesignerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, FormulaDesignerComponent_Conditional_0_Template, 64, 22);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!ctx.loadError ? 0 : -1);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_23__.JsonPipe, _snippet_label_size_pipe__WEBPACK_IMPORTED_MODULE_15__.SnippetLabelSizePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-top: 1px solid lightgray;\n  padding-top: 8px;\n}\n\n.formula-context-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.formula-context-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.formula-context-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.has-formula[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.formula-box[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  overflow: hidden;\n}\n.formula-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  font-size: 14px;\n  width: 100%;\n}\n.formula-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-field[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  max-width: 200px;\n  max-height: 194px;\n  overflow: hidden auto;\n  padding-left: 2px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets.disabled[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: rgba(29, 39, 61, 0.44);\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%]:first-of-type {\n  padding-top: 0;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%]:last-of-type {\n  padding-bottom: 0;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid rgba(29, 39, 61, 0.44);\n}\n\n.formula-footer-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  height: min-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: fit-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .result-undefined[_ngcontent-%COMP%] {\n  color: red;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .result-error[_ngcontent-%COMP%] {\n  color: red;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: fit-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%]   .mdc-icon-button[_ngcontent-%COMP%] {\n  margin-left: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0px;\n  flex-shrink: 0;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%]   .mdc-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px !important;\n}\n\n.formula-field[_ngcontent-%COMP%] {\n  padding-top: 28px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding-bottom: calc(1px + 11px);\n  position: relative;\n}\n.formula-field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(0, 0, 0, 0.6);\n  cursor: default;\n  font-size: 12px;\n  transition: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.formula-field[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%]     .monaco-editor .scroll-decoration {\n  display: none;\n}\n.formula-field[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n  padding-bottom: 11px;\n}\n.formula-field.focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #002753;\n  padding-bottom: 11px;\n}\n.formula-field.focused[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #002753;\n}\n.formula-field.error[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #b00030;\n  padding-bottom: 11px;\n}\n.formula-field.error[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #b00030;\n}\n.formula-field.disabled[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-bottom: calc(2px + 11px);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 33%, transparent 0%);\n  background-position: bottom;\n  background-size: 4px 1px;\n  background-repeat: repeat-x;\n}\n.formula-field.disabled[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.formula-field.disabled[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%]     * {\n  color: rgba(0, 0, 0, 0.38);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm11bGEtZGVzaWduZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSEo7QUFLSTtFQUNFLHNCQUFBO0FBSE47QUFPRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxKO0FBUUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVFJO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQU5OO0FBU0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBOO0FBU007RUFDRSxjQUFBO0FBUFI7QUFVTTtFQUNFLGlCQUFBO0FBUlI7QUFZSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQ0FBQTtBQVZOOztBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWkY7QUFjRTtFQUdFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFFRSxnQkFBQTtBQWZOO0FBa0JJO0VBQ0UsVUFBQTtBQWhCTjtBQW1CSTtFQUNFLFVBQUE7QUFqQk47QUFxQkU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBcEJKO0FBc0JJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXBCTjtBQXNCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQXBCUjs7QUE0QkE7RUFDRSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQXpCRjtBQTJCRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQXpCSjtBQTZCSTtFQUNFLGFBQUE7QUEzQk47QUErQkU7RUFDRSwyQ0FBQTtFQUNBLG9CQTVCWTtBQURoQjtBQWdDRTtFQUNFLGdDQUFBO0VBQ0Esb0JBakNZO0FBR2hCO0FBZ0NJO0VBQ0UsY0FBQTtBQTlCTjtBQWtDRTtFQUNFLGdDQUFBO0VBQ0Esb0JBMUNZO0FBVWhCO0FBa0NJO0VBQ0UsY0N4TFE7QUR3SmQ7QUFvQ0U7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEdBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFsQ0o7QUFvQ0k7RUFDRSxvQkFBQTtBQWxDTjtBQW9DTTtFQUNFLDBCQUFBO0FBbENSIiwiZmlsZSI6ImZvcm11bGEtZGVzaWduZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcblxyXG4uZm9ybXVsYS1jb250ZXh0LWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhhcy1mb3JtdWxhIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm11bGEtYm94IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYS1maWVsZCB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIC5mb3JtdWxhLXNuaXBwZXRzIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDE5NHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCAuc25pcHBldCB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBjb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbmlwcGV0IHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VwYXJhdG9yIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcm11bGEtZm9vdGVyLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcblxyXG4gIC5mb3JtdWxhLXJlc3VsdC1ib3gge1xyXG4gICAgLy8gZmxleDogMCAxIGF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICAvLyB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAucmVzdWx0LXVuZGVmaW5lZCB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3VsdC1lcnJvciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYS1hY3Rpb25zLWJveCB7XHJcbiAgICAvLyBmbGV4OiAwIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgLm1kYy1pY29uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuJHBhZGRpbmdCb3R0b206IDExcHg7XHJcblxyXG4uZm9ybXVsYS1maWVsZCB7XHJcbiAgcGFkZGluZy10b3A6IDI4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYygxcHggKyAjeyRwYWRkaW5nQm90dG9tfSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5lZGl0b3Ige1xyXG4gICAgOjpuZy1kZWVwIC5tb25hY28tZWRpdG9yIC5zY3JvbGwtZGVjb3JhdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdCb3R0b207XHJcbiAgfVxyXG5cclxuICAmLmZvY3VzZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDI3NTM7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdCb3R0b207XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgY29sb3I6ICMwMDI3NTM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmVycm9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZXJyb3ItY29sb3I7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdCb3R0b207XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgY29sb3I6ICRlcnJvci1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDJweCArICN7JHBhZGRpbmdCb3R0b219KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMzMlLCB0cmFuc3BhcmVudCAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcblxyXG4gICAgLmVkaXRvciB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAgICAgOjpuZy1kZWVwICoge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xyXG4kYWNjZW50LWNvbG9yOiAjMDAyNzUzO1xyXG4kYmx1ZS1hY2NlbnQtY29sb3I6ICMwMDg3ZjQ7XHJcbiRlcnJvci1jb2xvcjogI2IwMDAzMDtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy13aWR0aDogMTAwdnc7XHJcbiRlZGl0LXVpLWRpYWxvZy1tYXgtd2lkdGg6IDgwMHB4O1xyXG5cclxuLy8gTWFpbiBoZWlnaHQgLSBhbGwgbW92ZWQgdG8gbWFpbiBzdHlsZXMuY3NzIHNvIGl0J3Mgbm90IGFkZGVkIG11bHRpcGxlIHRpbWVzXHJcbi8vIERlYnVnIC0gYWxsIG1vdmVkIHRvIG1haW4gc3R5bGVzLmNzcyBzbyBpdCdzIG5vdCBhZGRlZCBtdWx0aXBsZSB0aW1lc1xyXG5cclxuXHJcblxyXG5cclxuJGVkaXQtdWktZGlhbG9nLWJvcmRlci1yYWRpdXM6OHB4O1xyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1cy1tb2JpbGU6MHB4O1xyXG4kZWRpdC11aS1pbnB1dC1ib3JkZXItcmFkaXVzOjRweDtcclxuXHJcbiRzYXZlLWJ1dHRvbi1oZWlnaHQ6NDhweDtcclxuJHNhdmUtYnV0dG9uLWhlaWdodC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWNvbXBhY3Q6NDhweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWNvbXBhY3QtbW9iaWxlOjQycHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1leHRlbmRlZDoyMDBweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkLW1vYmlsZToxNzBweDtcclxuXHJcbi8vIFRoZSBtYXgtaGVpZ2h0IHNob3VsZCBhbHNvIGJlIHNldCBpbiB0aGUgZXhwYW5kYWJsZSB3cmFwcGVyIGFuaW1hdGlvbnNcclxuJGV4cGFuZGFibGUtd3JhcHBlci1tYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWVkaXQtY29udGVudC1tYXgtaGVpZ2h0LWRlZmF1bHQpICsgdmFyKC0tZWRpdC1kaWFsb2ctaGVhZGVyLWhlaWdodCkpO1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQtbW9iaWxlOiBjYWxjKHZhcigtLWVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtbW9iaWxlKSArIHZhcigtLWVkaXQtZGlhbG9nLWhlYWRlci1oZWlnaHQpKTtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMEYyO1xyXG5cclxuJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yOiAjMUQyNzNEO1xyXG4kZWRpdFVJLWRpc2FibGVkLWJhY2tncm91bmQ6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjA0KTtcclxuJGVkaXRVSS1sYWJlbC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuMjQpO1xyXG4kZWRpdFVJLWZpZWxkLWRpc2FibGVkLWNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC40NCk7XHJcblxyXG4kZWRpdC11aS1zZWxlY3RlZC1vcHRpb246IHJnYmEoIzAwMDAwMCwgMC4wNCk7XHJcblxyXG4vLyBGaWVsZCBib3JkZXJzXHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWluaXRpYWw6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taG92ZXI6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWRpc2FibGVkOnJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taW52YWxpZDogJGVycm9yLWNvbG9yO1xyXG5cclxuLy8gRHJvcHpvbmVcclxuJGRyb3B6b25lLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC40NCk7XHJcbiRkcm9wem9uZS1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAwLjg4KTtcclxuXHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9mb3JtdWxhLWRlc2lnbmVyL2Zvcm11bGEtZGVzaWduZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSEo7QUFLSTtFQUNFLHNCQUFBO0FBSE47QUFPRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxKO0FBUUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVFJO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQU5OO0FBU0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBOO0FBU007RUFDRSxjQUFBO0FBUFI7QUFVTTtFQUNFLGlCQUFBO0FBUlI7QUFZSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQ0FBQTtBQVZOOztBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWkY7QUFjRTtFQUdFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFFRSxnQkFBQTtBQWZOO0FBa0JJO0VBQ0UsVUFBQTtBQWhCTjtBQW1CSTtFQUNFLFVBQUE7QUFqQk47QUFxQkU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBcEJKO0FBc0JJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXBCTjtBQXNCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQXBCUjs7QUE0QkE7RUFDRSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQXpCRjtBQTJCRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQXpCSjtBQTZCSTtFQUNFLGFBQUE7QUEzQk47QUErQkU7RUFDRSwyQ0FBQTtFQUNBLG9CQTVCWTtBQURoQjtBQWdDRTtFQUNFLGdDQUFBO0VBQ0Esb0JBakNZO0FBR2hCO0FBZ0NJO0VBQ0UsY0FBQTtBQTlCTjtBQWtDRTtFQUNFLGdDQUFBO0VBQ0Esb0JBMUNZO0FBVWhCO0FBa0NJO0VBQ0UsY0N4TFE7QUR3SmQ7QUFvQ0U7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEdBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFsQ0o7QUFvQ0k7RUFDRSxvQkFBQTtBQWxDTjtBQW9DTTtFQUNFLDBCQUFBO0FBbENSO0FBRUEsZ2xVQUFnbFUiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcblxyXG4uZm9ybXVsYS1jb250ZXh0LWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhhcy1mb3JtdWxhIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm11bGEtYm94IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYS1maWVsZCB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIC5mb3JtdWxhLXNuaXBwZXRzIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDE5NHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCAuc25pcHBldCB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBjb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbmlwcGV0IHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VwYXJhdG9yIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcm11bGEtZm9vdGVyLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcblxyXG4gIC5mb3JtdWxhLXJlc3VsdC1ib3gge1xyXG4gICAgLy8gZmxleDogMCAxIGF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICAvLyB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAucmVzdWx0LXVuZGVmaW5lZCB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3VsdC1lcnJvciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYS1hY3Rpb25zLWJveCB7XHJcbiAgICAvLyBmbGV4OiAwIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgLm1kYy1pY29uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuJHBhZGRpbmdCb3R0b206IDExcHg7XHJcblxyXG4uZm9ybXVsYS1maWVsZCB7XHJcbiAgcGFkZGluZy10b3A6IDI4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYygxcHggKyAjeyRwYWRkaW5nQm90dG9tfSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5lZGl0b3Ige1xyXG4gICAgOjpuZy1kZWVwIC5tb25hY28tZWRpdG9yIC5zY3JvbGwtZGVjb3JhdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdCb3R0b207XHJcbiAgfVxyXG5cclxuICAmLmZvY3VzZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDI3NTM7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdCb3R0b207XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgY29sb3I6ICMwMDI3NTM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmVycm9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZXJyb3ItY29sb3I7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdCb3R0b207XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgY29sb3I6ICRlcnJvci1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDJweCArICN7JHBhZGRpbmdCb3R0b219KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMzMlLCB0cmFuc3BhcmVudCAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcblxyXG4gICAgLmVkaXRvciB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAgICAgOjpuZy1kZWVwICoge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xyXG4kYWNjZW50LWNvbG9yOiAjMDAyNzUzO1xyXG4kYmx1ZS1hY2NlbnQtY29sb3I6ICMwMDg3ZjQ7XHJcbiRlcnJvci1jb2xvcjogI2IwMDAzMDtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy13aWR0aDogMTAwdnc7XHJcbiRlZGl0LXVpLWRpYWxvZy1tYXgtd2lkdGg6IDgwMHB4O1xyXG5cclxuLy8gTWFpbiBoZWlnaHQgLSBhbGwgbW92ZWQgdG8gbWFpbiBzdHlsZXMuY3NzIHNvIGl0J3Mgbm90IGFkZGVkIG11bHRpcGxlIHRpbWVzXHJcbi8vIERlYnVnIC0gYWxsIG1vdmVkIHRvIG1haW4gc3R5bGVzLmNzcyBzbyBpdCdzIG5vdCBhZGRlZCBtdWx0aXBsZSB0aW1lc1xyXG5cclxuXHJcblxyXG5cclxuJGVkaXQtdWktZGlhbG9nLWJvcmRlci1yYWRpdXM6OHB4O1xyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1cy1tb2JpbGU6MHB4O1xyXG4kZWRpdC11aS1pbnB1dC1ib3JkZXItcmFkaXVzOjRweDtcclxuXHJcbiRzYXZlLWJ1dHRvbi1oZWlnaHQ6NDhweDtcclxuJHNhdmUtYnV0dG9uLWhlaWdodC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWNvbXBhY3Q6NDhweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWNvbXBhY3QtbW9iaWxlOjQycHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1leHRlbmRlZDoyMDBweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkLW1vYmlsZToxNzBweDtcclxuXHJcbi8vIFRoZSBtYXgtaGVpZ2h0IHNob3VsZCBhbHNvIGJlIHNldCBpbiB0aGUgZXhwYW5kYWJsZSB3cmFwcGVyIGFuaW1hdGlvbnNcclxuJGV4cGFuZGFibGUtd3JhcHBlci1tYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWVkaXQtY29udGVudC1tYXgtaGVpZ2h0LWRlZmF1bHQpICsgdmFyKC0tZWRpdC1kaWFsb2ctaGVhZGVyLWhlaWdodCkpO1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQtbW9iaWxlOiBjYWxjKHZhcigtLWVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtbW9iaWxlKSArIHZhcigtLWVkaXQtZGlhbG9nLWhlYWRlci1oZWlnaHQpKTtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMEYyO1xyXG5cclxuJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yOiAjMUQyNzNEO1xyXG4kZWRpdFVJLWRpc2FibGVkLWJhY2tncm91bmQ6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjA0KTtcclxuJGVkaXRVSS1sYWJlbC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuMjQpO1xyXG4kZWRpdFVJLWZpZWxkLWRpc2FibGVkLWNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC40NCk7XHJcblxyXG4kZWRpdC11aS1zZWxlY3RlZC1vcHRpb246IHJnYmEoIzAwMDAwMCwgMC4wNCk7XHJcblxyXG4vLyBGaWVsZCBib3JkZXJzXHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWluaXRpYWw6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taG92ZXI6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWRpc2FibGVkOnJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taW52YWxpZDogJGVycm9yLWNvbG9yO1xyXG5cclxuLy8gRHJvcHpvbmVcclxuJGRyb3B6b25lLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC40NCk7XHJcbiRkcm9wem9uZS1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAwLjg4KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 23897:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/edit-dialog-footer.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditDialogFooterComponent: () => (/* binding */ EditDialogFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/logging */ 34435);
/* harmony import */ var _shared_user_user_preferences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/user/user-preferences.service */ 78656);
/* harmony import */ var _data_dump_data_dump_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-dump/data-dump.component */ 49071);
/* harmony import */ var _edit_dialog_footer_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-dialog-footer.models */ 65450);
/* harmony import */ var _footer_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer-preferences */ 94065);
/* harmony import */ var _formula_designer_formula_designer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formula-designer/formula-designer.component */ 22754);
/* harmony import */ var _logs_dump_logs_dump_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logs-dump/logs-dump.component */ 52499);

















const _c0 = a0 => ({
  "debug-enabled": a0
});
function EditDialogFooterComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditDialogFooterComponent_Conditional_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleSize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.preferences().expanded ? "unfold_less" : "expand");
  }
}
function EditDialogFooterComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditDialogFooterComponent_Conditional_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.prefManager.toggle("pinned"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tippy", "Developer tools are only visible to developers. " + ctx_r1.pinResource("status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.pinResource("icon"));
  }
}
function EditDialogFooterComponent_Conditional_22_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-data-dump");
  }
}
function EditDialogFooterComponent_Conditional_22_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-formula-designer");
  }
}
function EditDialogFooterComponent_Conditional_22_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-logs-dump");
  }
}
function EditDialogFooterComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EditDialogFooterComponent_Conditional_22_Case_1_Template, 1, 0, "app-data-dump")(2, EditDialogFooterComponent_Conditional_22_Case_2_Template, 1, 0, "app-formula-designer")(3, EditDialogFooterComponent_Conditional_22_Case_3_Template, 1, 0, "app-logs-dump");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "size" + (ctx_r1.preferences().expanded ? "-xl" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_2_0 = ctx_r1.preferences().tab) === ctx_r1.DebugTypes.Data ? 1 : tmp_2_0 === ctx_r1.DebugTypes.Formulas ? 2 : tmp_2_0 === ctx_r1.DebugTypes.Logs ? 3 : -1);
  }
}
class EditDialogFooterComponent {
  constructor() {
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_1__.classLog)({
      EditDialogFooterComponent
    });
    this.DebugTypes = _edit_dialog_footer_models__WEBPACK_IMPORTED_MODULE_4__.DebugTypes;
    this.sxcVer = window.sxcVersion.substring(0, window.sxcVersion.lastIndexOf('.'));
    this.prefManager = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_shared_user_user_preferences_service__WEBPACK_IMPORTED_MODULE_2__.UserPreferences).part(_footer_preferences__WEBPACK_IMPORTED_MODULE_5__.footerPreferences);
    this.preferences = this.prefManager.data;
  }
  toggleDialog(type) {
    const s = this.preferences();
    const hideTab = s.tab === type;
    const tab = hideTab ? null : type;
    const expanded = hideTab ? false : s.expanded;
    const size = hideTab ? 0 : expanded ? 2 : 1;
    this.prefManager.setMany({
      tab,
      expanded,
      size
    });
  }
  toggleSize() {
    const expanded = !this.preferences().expanded;
    const size = expanded ? 2 : 1;
    this.prefManager.setMany({
      expanded,
      size
    });
  }
  pinResource(part) {
    return pinResources[`${part}-${this.preferences().pinned}`];
  }
  static {
    this.ɵfac = function EditDialogFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditDialogFooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: EditDialogFooterComponent,
      selectors: [["app-edit-dialog-footer"]],
      decls: 23,
      vars: 6,
      consts: [["appearance", "raised", 1, "mat-elevation-z4", 3, "ngClass"], [1, "debug-buttons-container"], ["mat-button", "", "tippy", "Show Data JSON", 3, "click"], ["mat-button", "", "tippy", "Show Formula Designer", 3, "click"], ["mat-button", "", "tippy", "Show Logs", 3, "click"], [1, "spacer"], ["mat-icon-button", "", "tippy", "expand/shrink"], ["mat-icon-button", "", 3, "tippy"], [1, "sxc-version"], [1, "debug-info-container", 3, "ngClass"], ["mat-icon-button", "", "tippy", "expand/shrink", 3, "click"], ["mat-icon-button", "", 3, "click", "tippy"]],
      template: function EditDialogFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditDialogFooterComponent_Template_button_click_2_listener() {
            return ctx.toggleDialog(ctx.DebugTypes.Data);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "offline_bolt");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditDialogFooterComponent_Template_button_click_7_listener() {
            return ctx.toggleDialog(ctx.DebugTypes.Formulas);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "functions");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Formulas");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditDialogFooterComponent_Template_button_click_12_listener() {
            return ctx.toggleDialog(ctx.DebugTypes.Logs);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "speed");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Logs");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, EditDialogFooterComponent_Conditional_18_Template, 3, 1, "button", 6)(19, EditDialogFooterComponent_Conditional_19_Template, 3, 2, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, EditDialogFooterComponent_Conditional_22_Template, 4, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx.preferences().tab != null));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.preferences().tab != null ? 18 : 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" 2sxc ", ctx.sxcVer, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.preferences().tab != null ? 22 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _data_dump_data_dump_component__WEBPACK_IMPORTED_MODULE_3__.DataDumpComponent, _formula_designer_formula_designer_component__WEBPACK_IMPORTED_MODULE_6__.FormulaDesignerComponent, _logs_dump_logs_dump_component__WEBPACK_IMPORTED_MODULE_7__.LogsDumpComponent, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: [".mat-mdc-card[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  height: var(--edit-footer-bar-height);\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n@media (max-width: 600px) {\n  .mat-mdc-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n\n.mat-mdc-card.debug-enabled[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.debug-buttons-container[_ngcontent-%COMP%] {\n  padding: 17px 16px 15px;\n  height: var(--edit-footer-bar-height);\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .sxc-version[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px !important;\n}\n\n.debug-info-container[_ngcontent-%COMP%] {\n  margin: var(--edit-footer-container-margin) !important;\n  margin-top: 0 !important;\n  width: calc(100% - 2 * var(--edit-footer-container-margin));\n  height: var(--edit-footer-container-height);\n  box-sizing: border-box;\n  position: relative;\n  overflow: auto;\n}\n.debug-info-container.size-xl[_ngcontent-%COMP%] {\n  height: calc(2 * var(--edit-footer-container-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZGlhbG9nLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQU1BLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQU5GO0FBSEU7RUFORjtJQU9JLGdCQUFBO0VBTUY7QUFDRjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBR0k7RUFDRSxpQkFBQTtBQUROO0FBS0U7RUFDRSxlQUFBO0FBSEo7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQUpGOztBQU9BO0VBQ0Usc0RBQUE7RUFDQSx3QkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUpGO0FBTUU7RUFDRSxxREFBQTtBQUpKIiwiZmlsZSI6ImVkaXQtZGlhbG9nLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubWF0LW1kYy1jYXJkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICBoZWlnaHQ6IHZhcigtLWVkaXQtZm9vdGVyLWJhci1oZWlnaHQpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tYXQtbWRjLWNhcmQuZGVidWctZW5hYmxlZCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZGVidWctYnV0dG9ucy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE3cHggMTZweCAxNXB4O1xyXG4gIGhlaWdodDogdmFyKC0tZWRpdC1mb290ZXItYmFyLWhlaWdodCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5tYXQtbWRjLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zeGMtdmVyc2lvbiB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlYnVnLWluZm8tY29udGFpbmVyIHtcclxuICBtYXJnaW46IHZhcigtLWVkaXQtZm9vdGVyLWNvbnRhaW5lci1tYXJnaW4pICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogdmFyKC0tZWRpdC1mb290ZXItY29udGFpbmVyLW1hcmdpbikpO1xyXG4gIGhlaWdodDogdmFyKC0tZWRpdC1mb290ZXItY29udGFpbmVyLWhlaWdodCk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICYuc2l6ZS14bCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMiAqIHZhcigtLWVkaXQtZm9vdGVyLWNvbnRhaW5lci1oZWlnaHQpKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9lZGl0LWRpYWxvZy1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFNQSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFORjtBQUhFO0VBTkY7SUFPSSxnQkFBQTtFQU1GO0FBQ0Y7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUtFO0VBQ0UsZUFBQTtBQUhKOztBQU9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFKRjs7QUFPQTtFQUNFLHNEQUFBO0VBQ0Esd0JBQUE7RUFDQSwyREFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKRjtBQU1FO0VBQ0UscURBQUE7QUFKSjtBQUNBLDRvRkFBNG9GIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tYXQtbWRjLWNhcmQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIGhlaWdodDogdmFyKC0tZWRpdC1mb290ZXItYmFyLWhlaWdodCk7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm1hdC1tZGMtY2FyZC5kZWJ1Zy1lbmFibGVkIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kZWJ1Zy1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTdweCAxNnB4IDE1cHg7XHJcbiAgaGVpZ2h0OiB2YXIoLS1lZGl0LWZvb3Rlci1iYXItaGVpZ2h0KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLm1hdC1tZGMtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN4Yy12ZXJzaW9uIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVidWctaW5mby1jb250YWluZXIge1xyXG4gIG1hcmdpbjogdmFyKC0tZWRpdC1mb290ZXItY29udGFpbmVyLW1hcmdpbikgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiB2YXIoLS1lZGl0LWZvb3Rlci1jb250YWluZXItbWFyZ2luKSk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1lZGl0LWZvb3Rlci1jb250YWluZXItaGVpZ2h0KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgJi5zaXplLXhsIHtcclxuICAgIGhlaWdodDogY2FsYygyICogdmFyKC0tZWRpdC1mb290ZXItY29udGFpbmVyLWhlaWdodCkpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}
const pinResources = {
  ['status-true']: 'pinned - will remain visible on reload',
  ['status-false']: 'not pinned - will hide on reload',
  ['icon-true']: 'keep_public',
  ['icon-false']: 'keep_off'
};

/***/ }),

/***/ 36160:
/*!*********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/logs-config/specs-editor-dialog/specs-editor-dialog.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecsEditorDialogComponent: () => (/* binding */ SpecsEditorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../monaco-editor/monaco-editor.component */ 96581);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);










class SpecsEditorDialogComponent {
  constructor(dialog, data) {
    this.dialog = dialog;
    this.data = data;
    this.hostClass = 'dialog-component';
    this.focused = false;
    this.editorOptions = {
      theme: 'vs-light',
      language: 'json',
      readOnly: false,
      automaticLayout: true,
      minimap: {
        enabled: false
      },
      scrollBeyondLastLine: false
    };
    this.filename = 'log-specs.json';
    this.logSpecs = JSON.stringify(data.logSpecs, null, 2);
  }
  onClose() {
    this.dialog.close();
  }
  onSave() {
    this.dialog.close(this.logSpecs);
  }
  onValueChanged(newValue) {
    this.logSpecs = newValue;
  }
  onFocused(focused) {
    this.focused = focused;
  }
  static {
    this.ɵfac = function SpecsEditorDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SpecsEditorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SpecsEditorDialogComponent,
      selectors: [["app-monaco-editor-dialog"]],
      hostVars: 1,
      hostBindings: function SpecsEditorDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 13,
      vars: 3,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "mat-dialog-close", "", "tippy", "Close dialog"], [1, "eav-dialog-content", 2, "padding-bottom", "0"], [2, "height", "350px", "width", "100%", 3, "valueChanged", "focused", "blurred", "filename", "value", "options"], ["mat-icon-button", "", "tippy", "Save Specs", 3, "click"]],
      template: function SpecsEditorDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Log Specs Editor");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3)(5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "app-monaco-editor", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChanged", function SpecsEditorDialogComponent_Template_app_monaco_editor_valueChanged_8_listener($event) {
            return ctx.onValueChanged($event);
          })("focused", function SpecsEditorDialogComponent_Template_app_monaco_editor_focused_8_listener() {
            return ctx.onFocused(true);
          })("blurred", function SpecsEditorDialogComponent_Template_app_monaco_editor_blurred_8_listener() {
            return ctx.onFocused(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-dialog-actions")(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpecsEditorDialogComponent_Template_button_click_10_listener() {
            return ctx.onSave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "save");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filename", ctx.filename)("value", ctx.logSpecs)("options", ctx.editorOptions);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__.MonacoEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 40126:
/*!************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/formula-designer/formula-designer.models.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectTargets: () => (/* binding */ SelectTargets)
/* harmony export */ });
const SelectTargets = {
  Entity: 'entityGuid',
  Field: 'fieldValue',
  Target: 'formulaTarget'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 49071:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/data-dump/data-dump.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataDumpComponent: () => (/* binding */ DataDumpComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _form_form_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../form/form-config.service */ 8265);
/* harmony import */ var _state_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state/item.service */ 15914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);






class DataDumpComponent {
  constructor(itemService, formConfig) {
    this.itemService = itemService;
    this.formConfig = formConfig;
    this.items = this.itemService.getManySignal(this.formConfig.config.itemGuids);
  }
  static {
    this.ɵfac = function DataDumpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataDumpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_item_service__WEBPACK_IMPORTED_MODULE_1__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_form_form_config_service__WEBPACK_IMPORTED_MODULE_0__.FormConfigService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DataDumpComponent,
      selectors: [["app-data-dump"]],
      decls: 3,
      vars: 3,
      consts: [["readonly", "", 1, "fancy-scrollbar-light"]],
      template: function DataDumpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "textarea", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.items()));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: 0px;\n  padding: 10px;\n  padding-right: 0;\n  border: 0px;\n  box-sizing: border-box;\n  resize: none;\n  outline: none;\n  background-color: rgba(29, 39, 61, 0.04);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZHVtcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0NlMkI7QURoQjdCIiwiZmlsZSI6ImRhdGEtZHVtcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWRpdFVJLWRpc2FibGVkLWJhY2tncm91bmQ7XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICNmZmZmZmY7XHJcbiRhY2NlbnQtY29sb3I6ICMwMDI3NTM7XHJcbiRibHVlLWFjY2VudC1jb2xvcjogIzAwODdmNDtcclxuJGVycm9yLWNvbG9yOiAjYjAwMDMwO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLXdpZHRoOiAxMDB2dztcclxuJGVkaXQtdWktZGlhbG9nLW1heC13aWR0aDogODAwcHg7XHJcblxyXG4vLyBNYWluIGhlaWdodCAtIGFsbCBtb3ZlZCB0byBtYWluIHN0eWxlcy5jc3Mgc28gaXQncyBub3QgYWRkZWQgbXVsdGlwbGUgdGltZXNcclxuLy8gRGVidWcgLSBhbGwgbW92ZWQgdG8gbWFpbiBzdHlsZXMuY3NzIHNvIGl0J3Mgbm90IGFkZGVkIG11bHRpcGxlIHRpbWVzXHJcblxyXG5cclxuXHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1czo4cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzLW1vYmlsZTowcHg7XHJcbiRlZGl0LXVpLWlucHV0LWJvcmRlci1yYWRpdXM6NHB4O1xyXG5cclxuJHNhdmUtYnV0dG9uLWhlaWdodDo0OHB4O1xyXG4kc2F2ZS1idXR0b24taGVpZ2h0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdDo0OHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkOjIwMHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQtbW9iaWxlOjE3MHB4O1xyXG5cclxuLy8gVGhlIG1heC1oZWlnaHQgc2hvdWxkIGFsc28gYmUgc2V0IGluIHRoZSBleHBhbmRhYmxlIHdyYXBwZXIgYW5pbWF0aW9uc1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQ6IGNhbGModmFyKC0tZWRpdC1jb250ZW50LW1heC1oZWlnaHQtZGVmYXVsdCkgKyB2YXIoLS1lZGl0LWRpYWxvZy1oZWFkZXItaGVpZ2h0KSk7XHJcbiRleHBhbmRhYmxlLXdyYXBwZXItbWF4LWhlaWdodC1tb2JpbGU6IGNhbGModmFyKC0tZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC1tb2JpbGUpICsgdmFyKC0tZWRpdC1kaWFsb2ctaGVhZGVyLWhlaWdodCkpO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLWJhY2tncm91bmQtY29sb3I6ICNFRkYwRjI7XHJcblxyXG4kZWRpdFVJLWZvcmVncm91bmQtY29sb3I6ICMxRDI3M0Q7XHJcbiRlZGl0VUktZGlzYWJsZWQtYmFja2dyb3VuZDogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuMDQpO1xyXG4kZWRpdFVJLWxhYmVsLWRpc2FibGVkLWNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC4yNCk7XHJcbiRlZGl0VUktZmllbGQtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjQ0KTtcclxuXHJcbiRlZGl0LXVpLXNlbGVjdGVkLW9wdGlvbjogcmdiYSgjMDAwMDAwLCAwLjA0KTtcclxuXHJcbi8vIEZpZWxkIGJvcmRlcnNcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taW5pdGlhbDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0tZGlzYWJsZWQ6cmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1pbnZhbGlkOiAkZXJyb3ItY29sb3I7XHJcblxyXG4vLyBEcm9wem9uZVxyXG4kZHJvcHpvbmUtYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAwLjQ0KTtcclxuJGRyb3B6b25lLWFjdGl2ZS1iYWNrZ3JvdW5kOiByZ2JhKCRhY2NlbnQtY29sb3IsIDAuODgpO1xyXG5cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9kYXRhLWR1bXAvZGF0YS1kdW1wLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vcHJvamVjdHMvZWF2LXVpL3NyYy9hcHAvZWRpdC9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQ2UyQjtBRGhCN0I7QUFDQSxnMEdBQWcwRyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWRpdFVJLWRpc2FibGVkLWJhY2tncm91bmQ7XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICNmZmZmZmY7XHJcbiRhY2NlbnQtY29sb3I6ICMwMDI3NTM7XHJcbiRibHVlLWFjY2VudC1jb2xvcjogIzAwODdmNDtcclxuJGVycm9yLWNvbG9yOiAjYjAwMDMwO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLXdpZHRoOiAxMDB2dztcclxuJGVkaXQtdWktZGlhbG9nLW1heC13aWR0aDogODAwcHg7XHJcblxyXG4vLyBNYWluIGhlaWdodCAtIGFsbCBtb3ZlZCB0byBtYWluIHN0eWxlcy5jc3Mgc28gaXQncyBub3QgYWRkZWQgbXVsdGlwbGUgdGltZXNcclxuLy8gRGVidWcgLSBhbGwgbW92ZWQgdG8gbWFpbiBzdHlsZXMuY3NzIHNvIGl0J3Mgbm90IGFkZGVkIG11bHRpcGxlIHRpbWVzXHJcblxyXG5cclxuXHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1czo4cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzLW1vYmlsZTowcHg7XHJcbiRlZGl0LXVpLWlucHV0LWJvcmRlci1yYWRpdXM6NHB4O1xyXG5cclxuJHNhdmUtYnV0dG9uLWhlaWdodDo0OHB4O1xyXG4kc2F2ZS1idXR0b24taGVpZ2h0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdDo0OHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkOjIwMHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQtbW9iaWxlOjE3MHB4O1xyXG5cclxuLy8gVGhlIG1heC1oZWlnaHQgc2hvdWxkIGFsc28gYmUgc2V0IGluIHRoZSBleHBhbmRhYmxlIHdyYXBwZXIgYW5pbWF0aW9uc1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQ6IGNhbGModmFyKC0tZWRpdC1jb250ZW50LW1heC1oZWlnaHQtZGVmYXVsdCkgKyB2YXIoLS1lZGl0LWRpYWxvZy1oZWFkZXItaGVpZ2h0KSk7XHJcbiRleHBhbmRhYmxlLXdyYXBwZXItbWF4LWhlaWdodC1tb2JpbGU6IGNhbGModmFyKC0tZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC1tb2JpbGUpICsgdmFyKC0tZWRpdC1kaWFsb2ctaGVhZGVyLWhlaWdodCkpO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLWJhY2tncm91bmQtY29sb3I6ICNFRkYwRjI7XHJcblxyXG4kZWRpdFVJLWZvcmVncm91bmQtY29sb3I6ICMxRDI3M0Q7XHJcbiRlZGl0VUktZGlzYWJsZWQtYmFja2dyb3VuZDogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuMDQpO1xyXG4kZWRpdFVJLWxhYmVsLWRpc2FibGVkLWNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC4yNCk7XHJcbiRlZGl0VUktZmllbGQtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjQ0KTtcclxuXHJcbiRlZGl0LXVpLXNlbGVjdGVkLW9wdGlvbjogcmdiYSgjMDAwMDAwLCAwLjA0KTtcclxuXHJcbi8vIEZpZWxkIGJvcmRlcnNcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taW5pdGlhbDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0tZGlzYWJsZWQ6cmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1pbnZhbGlkOiAkZXJyb3ItY29sb3I7XHJcblxyXG4vLyBEcm9wem9uZVxyXG4kZHJvcHpvbmUtYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAwLjQ0KTtcclxuJGRyb3B6b25lLWFjdGl2ZS1iYWNrZ3JvdW5kOiByZ2JhKCRhY2NlbnQtY29sb3IsIDAuODgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 52352:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/clipboard.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_COPY_TO_CLIPBOARD_CONFIG: () => (/* binding */ CDK_COPY_TO_CLIPBOARD_CONFIG),
/* harmony export */   CdkCopyToClipboard: () => (/* binding */ CdkCopyToClipboard),
/* harmony export */   Clipboard: () => (/* binding */ Clipboard),
/* harmony export */   ClipboardModule: () => (/* binding */ ClipboardModule),
/* harmony export */   PendingCopy: () => (/* binding */ PendingCopy)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);




/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a re-layout. This re-layout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * re-layout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */
class PendingCopy {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement('textarea');
    const styles = textarea.style;
    // Hide the element for display and accessibility. Set a fixed position so the page layout
    // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
    // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.
    styles.position = 'fixed';
    styles.top = styles.opacity = '0';
    styles.left = '-999em';
    textarea.setAttribute('aria-hidden', 'true');
    textarea.value = text;
    // Making the textarea `readonly` prevents the screen from jumping on iOS Safari (see #25169).
    textarea.readOnly = true;
    // The element needs to be inserted into the fullscreen container, if the page
    // is in fullscreen mode, otherwise the browser won't execute the copy command.
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      // Older browsers could throw if copy is not supported.
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand('copy');
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
      // Discard error.
      // Initial setting of {@code successful} will represent failure here.
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = undefined;
    }
  }
}

/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
  _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
  constructor() {}
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static ɵfac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Clipboard)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Clipboard,
    factory: Clipboard.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Clipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();

/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
const CDK_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
  _clipboard = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(Clipboard);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
  /** Content to be copied. */
  text = '';
  /**
   * How many times to attempt to copy the text. This may be necessary for longer text, because
   * the browser needs time to fill an intermediate textarea element and copy the content.
   */
  attempts = 1;
  /**
   * Emits when some text is copied to the clipboard. The
   * emitted value indicates whether copying was successful.
   */
  copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /** Copies that are currently being attempted. */
  _pending = new Set();
  /** Whether the directive has been destroyed. */
  _destroyed;
  /** Timeout for the current copy attempt. */
  _currentTimeout;
  constructor() {
    const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          // We use 1 for the timeout since it's more predictable when flushing in unit tests.
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach(copy => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static ɵfac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkCopyToClipboard)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkCopyToClipboard]',
      host: {
        '(click)': 'copy()'
      }
    }]
  }], () => [], {
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboard']
    }],
    attempts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboardAttempts']
    }],
    copied: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkCopyToClipboardCopied']
    }]
  });
})();
class ClipboardModule {
  static ɵfac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ClipboardModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClipboardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();


/***/ }),

/***/ 52499:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/logs-dump/logs-dump.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsDumpComponent: () => (/* binding */ LogsDumpComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/logging.service */ 87149);
/* harmony import */ var _logs_config_logs_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logs-config/logs-config.component */ 65351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);










const _c0 = (a0, a1) => ({
  "log-error": a0,
  "log-warn": a1
});
function LogsDumpComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Logs are empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LogsDumpComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LogsDumpComponent_Conditional_2_For_2_Template_span_click_6_listener() {
      const log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.logToConsole(log_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " console ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, log_r2.severity === ctx_r2.LogSeverities.Error, log_r2.severity === ctx_r2.LogSeverities.Warn));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 3, log_r2.time, "HH:mm:ss"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](log_r2.label);
  }
}
function LogsDumpComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LogsDumpComponent_Conditional_2_Conditional_0_Template, 2, 0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](1, LogsDumpComponent_Conditional_2_For_2_Template, 8, 9, "div", 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r2.logs().length === 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.logs());
  }
}
function LogsDumpComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-logs-config");
  }
}
class LogsDumpComponent {
  constructor(loggingService) {
    this.loggingService = loggingService;
    this.LogSeverities = _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_1__.LogSeverities;
    this.showSettings = true;
    this.logs = this.loggingService.getLogsSignal();
  }
  logToConsole(log) {
    switch (log.severity) {
      case _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_1__.LogSeverities.Log:
        console.log(log.label, log.error);
        break;
      case _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_1__.LogSeverities.Warn:
        console.warn(log.label, log.error);
        break;
      case _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_1__.LogSeverities.Error:
        console.error(log.label, log.error);
        break;
    }
  }
  showLogSettings(show) {
    this.showSettings = show;
  }
  static {
    this.ɵfac = function LogsDumpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogsDumpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_1__.LoggingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LogsDumpComponent,
      selectors: [["app-logs-dump"]],
      decls: 11,
      vars: 1,
      consts: [[1, "logs-box", "fancy-scrollbar-light"], [1, "logs-content"], [1, "log-button"], ["mat-icon-button", "", "tippy", "Show Logs Settings", 3, "click"], ["mat-icon-button", "", "tippy", "Show Logs Output", 3, "click"], [1, "log-entry", 3, "ngClass"], [1, "log-entry-part", "log-entry-time"], [1, "log-entry-part", "log-entry-label"], ["tippy", "Log to console", 1, "log-entry-part", "log-entry-show", 3, "click"]],
      template: function LogsDumpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LogsDumpComponent_Conditional_2_Template, 3, 1)(3, LogsDumpComponent_Conditional_3_Template, 1, 0, "app-logs-config");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LogsDumpComponent_Template_button_click_5_listener() {
            return ctx.showLogSettings(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LogsDumpComponent_Template_button_click_8_listener() {
            return ctx.showLogSettings(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "contract");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.showSettings ? 2 : 3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _logs_config_logs_config_component__WEBPACK_IMPORTED_MODULE_2__.LogsConfigComponent, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.logs-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.logs-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.log-button[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 10px;\n  background: white;\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid rgb(240, 240, 240);\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.log-entry[_ngcontent-%COMP%]   .log-entry-part[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.log-error[_ngcontent-%COMP%] {\n  color: rgb(255, 0, 0);\n  border-color: rgb(255, 214, 214);\n  background-color: rgb(255, 240, 240);\n}\n\n.log-warn[_ngcontent-%COMP%] {\n  color: rgb(92, 60, 0);\n  border-color: rgb(255, 245, 194);\n  background-color: rgb(255, 251, 229);\n}\n\n.log-entry-time[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.log-entry-label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.log-entry-show[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #06599a;\n  font-size: 12px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MtZHVtcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUhGIiwiZmlsZSI6ImxvZ3MtZHVtcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3RoZW1lL21hdGVyaWFsLWNvbG9yc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ3MtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9ncy1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9nLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nLWVudHJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuXHJcbiAgLmxvZy1lbnRyeS1wYXJ0Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2ctZXJyb3Ige1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDIxNCwgMjE0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDI0MCk7XHJcbn1cclxuXHJcbi5sb2ctd2FybiB7XHJcbiAgY29sb3I6IHJnYig5MiwgNjAsIDApO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjQ1LCAxOTQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MSwgMjI5KTtcclxufVxyXG5cclxuLmxvZy1lbnRyeS10aW1lIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxufVxyXG5cclxuLmxvZy1lbnRyeS1sYWJlbCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5sb2ctZW50cnktc2hvdyB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgY29sb3I6IG1hcF9nZXQoJG1hdC1lYXYtaXRlbS1kaWFsb2ctc2Vjb25kYXJ5LCAzMDApO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9sb2dzLWR1bXAvbG9ncy1kdW1wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNFLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBSEY7QUFDQSw0K0VBQTQrRSIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3RoZW1lL21hdGVyaWFsLWNvbG9yc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ3MtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9ncy1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9nLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nLWVudHJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuXHJcbiAgLmxvZy1lbnRyeS1wYXJ0Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2ctZXJyb3Ige1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDIxNCwgMjE0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDI0MCk7XHJcbn1cclxuXHJcbi5sb2ctd2FybiB7XHJcbiAgY29sb3I6IHJnYig5MiwgNjAsIDApO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjQ1LCAxOTQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MSwgMjI5KTtcclxufVxyXG5cclxuLmxvZy1lbnRyeS10aW1lIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxufVxyXG5cclxuLmxvZy1lbnRyeS1sYWJlbCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5sb2ctZW50cnktc2hvdyB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgY29sb3I6IG1hcF9nZXQoJG1hdC1lYXYtaXRlbS1kaWFsb2ctc2Vjb25kYXJ5LCAzMDApO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 65351:
/*!*****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/logs-config/logs-config.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsConfigComponent: () => (/* binding */ LogsConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_logging_log_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/logging/log-manager */ 5099);
/* harmony import */ var _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/logging.service */ 87149);
/* harmony import */ var _logs_config_config_editor_dialog_config_editor_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logs-config/config-editor-dialog/config-editor-dialog.component */ 8764);
/* harmony import */ var _logs_config_specs_editor_dialog_specs_editor_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logs-config/specs-editor-dialog/specs-editor-dialog.component */ 36160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


























function LogsConfigComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const config_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", config_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", config_r1, " ");
  }
}
function LogsConfigComponent_div_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LogsConfigComponent_div_30_Conditional_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const log_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.openLogSpecs(log_r3.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "data_object");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LogsConfigComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "label")(2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LogsConfigComponent_div_30_Template_input_change_2_listener() {
      const log_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggleConfig(log_r3.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LogsConfigComponent_div_30_Conditional_4_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", log_r3.key)("name", log_r3.key)("checked", ctx_r3.isChecked(log_r3.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", log_r3.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.hasLogSpecs(log_r3.key) ? 4 : -1);
  }
}
class LogsConfigComponent {
  constructor(loggingService, matDialog, snackBar) {
    this.loggingService = loggingService;
    this.matDialog = matDialog;
    this.snackBar = snackBar;
    this.LogSeverities = _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_2__.LogSeverities;
    this.logManager = _shared_logging_log_manager__WEBPACK_IMPORTED_MODULE_1__.LogManager.singleton();
    this.allLogs = this.logManager.mergeAllSpecs;
    this.configs = [];
    this.sessionPrefix = 'logSpecs';
    this.selectedConfig = null;
    this.searchTerm = '';
    this.logs = this.loggingService.getLogsSignal();
    this.loadConfigsFromStateManager();
  }
  /* Toggle Functions */
  checkAll() {
    const allChecked = Object.values(this.allLogs).every(specs => specs.enabled);
    if (allChecked) {
      // Reset all to unchecked
      for (const spec of Object.keys(this.allLogs)) {
        if (this.isChecked(spec)) {
          this.logManager.toggle(spec);
        }
      }
    } else {
      for (const spec of Object.keys(this.allLogs)) {
        if (!this.isChecked(spec)) {
          this.logManager.toggle(spec);
        }
      }
    }
    this.applyFilters();
  }
  onFilterSelected(filter) {
    this.selectedFilter = filter;
    this.applyFilters();
  }
  filterLogs(event) {
    const inputElement = event.target;
    this.searchTerm = inputElement.value.toLowerCase(); // Store the search term
    this.applyFilters();
  }
  isChecked(name) {
    return this.allLogs[name]?.enabled ?? false;
  }
  toggleConfig(name) {
    this.logManager.toggle(name);
    this.applyFilters();
  }
  /* Config Functions */
  loadConfigsFromStateManager() {
    const savedConfigs = Object.keys(this.logManager.state.cache).filter(key => key.startsWith(this.sessionPrefix));
    this.configs = savedConfigs.map(key => key.replace(`${this.sessionPrefix}.`, ''));
  }
  onConfigSelected(configName) {
    this.selectedConfig = configName;
  }
  applyFilters() {
    let filteredLogs = Object.entries(this.logManager.mergeAllSpecs); // Always start from full logs
    if (this.searchTerm) {
      filteredLogs = filteredLogs.filter(([key]) => key.toLowerCase().includes(this.searchTerm));
    }
    if (this.selectedFilter === 'activated') {
      filteredLogs = filteredLogs.filter(([, log]) => log.enabled);
    } else if (this.selectedFilter === 'deactivated') {
      filteredLogs = filteredLogs.filter(([, log]) => !log.enabled);
    }
    this.allLogs = Object.fromEntries(filteredLogs);
  }
  saveConfig() {
    const configName = prompt('Enter the config name:');
    if (configName) {
      // Save all activated logs, irrespective of the filters
      const enabledConfigs = Object.fromEntries(Object.entries(this.logManager.mergeAllSpecs).filter(([, config]) => config.enabled));
      const fullConfigKey = `${this.sessionPrefix}.${configName}`;
      this.logManager.state.add(fullConfigKey, enabledConfigs);
      this.snackBar.open(`Config "${configName}" has been saved.`, null, {
        duration: 2000
      });
      this.loadConfigsFromStateManager();
    }
  }
  exportConfig() {
    const fullConfigKey = `${this.sessionPrefix}.${this.selectedConfig}`;
    const configData = this.logManager.state.cache[fullConfigKey];
    if (configData && Object.keys(configData).length > 0) {
      this.matDialog.open(_logs_config_config_editor_dialog_config_editor_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfigEditorDialogComponent, {
        width: '800px',
        data: {
          configData
        }
      });
    } else {
      this.snackBar.open(`No active logs to export for "${this.selectedConfig}".`, null, {
        duration: 2000
      });
    }
    this.applyFilters();
  }
  /* Specs Editor Dialog Functions */
  hasLogSpecs(logKey) {
    const specs = this.allLogs[logKey]?.specs;
    return !!specs && Object.keys(specs).length > 0;
  }
  openLogSpecs(logKey) {
    let logSpecs = this.allLogs[logKey].specs;
    const dialogRef = this.matDialog.open(_logs_config_specs_editor_dialog_specs_editor_dialog_component__WEBPACK_IMPORTED_MODULE_4__.SpecsEditorDialogComponent, {
      width: '800px',
      data: {
        logSpecs: logSpecs
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedSpecs = JSON.parse(result);
        this.allLogs[logKey].specs = updatedSpecs;
        this.logManager.updateSpecs(this.allLogs);
      }
    });
  }
  static {
    this.ɵfac = function LogsConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogsConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_2__.LoggingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: LogsConfigComponent,
      selectors: [["app-logs-config"]],
      decls: 32,
      vars: 7,
      consts: [[1, "log-content", "fancy-scrollbar-light"], [1, "menu"], ["id", "search-input", "color", "accent"], ["matInput", "", "placeholder", "Search", 3, "input"], ["id", "active-filter-dropdown", "color", "accent"], [3, "valueChange", "selectionChange", "value"], ["value", ""], ["value", "activated"], ["value", "deactivated"], ["mat-icon-button", "", "tippy", "Toggle All Logs in View", 3, "click"], ["mat-icon-button", "", "tippy", "Save Configuration with all selected Logs", 3, "click"], ["mat-icon-button", "", "tippy", "Export the selected configuration from the saved Configs", 3, "click", "disabled"], ["color", "accent"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "change", "id", "name", "checked"], ["tippy", "Edit Log Specs"], ["tippy", "Edit Log Specs", 3, "click"], [1, "specs-icon"]],
      template: function LogsConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function LogsConfigComponent_Template_input_input_5_listener($event) {
            return ctx.filterLogs($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Show");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function LogsConfigComponent_Template_mat_select_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedFilter, $event) || (ctx.selectedFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function LogsConfigComponent_Template_mat_select_selectionChange_9_listener($event) {
            return ctx.onFilterSelected($event.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " All ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Activated ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Deactivated ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LogsConfigComponent_Template_button_click_16_listener() {
            return ctx.checkAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "check_box");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LogsConfigComponent_Template_button_click_19_listener() {
            return ctx.saveConfig();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "save");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LogsConfigComponent_Template_button_click_22_listener() {
            return ctx.exportConfig();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "ios_share");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-form-field", 12)(26, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Configs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function LogsConfigComponent_Template_mat_select_valueChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedConfig, $event) || (ctx.selectedConfig = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function LogsConfigComponent_Template_mat_select_selectionChange_28_listener($event) {
            return ctx.onConfigSelected($event.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, LogsConfigComponent_mat_option_29_Template, 2, 2, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LogsConfigComponent_div_30_Template, 5, 5, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.selectedFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selectedConfig === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.selectedConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.configs);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 5, ctx.allLogs));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOptionModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 0 1rem 1rem 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n}\n\n.specs-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  height: 1rem;\n  width: 1rem;\n  padding: 0;\n  margin: 0;\n}\n\n#search-input[_ngcontent-%COMP%], \n#active-filter-dropdown[_ngcontent-%COMP%] {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MtY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7O0VBRUUsWUFBQTtBQUFGIiwiZmlsZSI6ImxvZ3MtY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRW5zdXJlIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBmdWxseSB2aXNpYmxlIGFuZCBoYW5kbGVzIG92ZXJmbG93IG9uIHRoZSB5LWF4aXNcclxuOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDAgMXJlbSAxcmVtIDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BlY3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICB3aWR0aDogMXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI3NlYXJjaC1pbnB1dCxcclxuI2FjdGl2ZS1maWx0ZXItZHJvcGRvd24ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9sb2dzLWNvbmZpZy9sb2dzLWNvbmZpZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBOztFQUVFLFlBQUE7QUFBRjtBQUNBLG80Q0FBbzRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRW5zdXJlIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBmdWxseSB2aXNpYmxlIGFuZCBoYW5kbGVzIG92ZXJmbG93IG9uIHRoZSB5LWF4aXNcclxuOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDAgMXJlbSAxcmVtIDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BlY3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICB3aWR0aDogMXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI3NlYXJjaC1pbnB1dCxcclxuI2FjdGl2ZS1maWx0ZXItZHJvcGRvd24ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 65450:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/edit-dialog-footer.models.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DebugTypes: () => (/* binding */ DebugTypes)
/* harmony export */ });
const DebugTypes = {
  Data: 'data',
  Formulas: 'formulas',
  Logs: 'logs'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 80960:
/*!************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/formula-designer/snippet-label-size.pipe.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetLabelSizePipe: () => (/* binding */ SnippetLabelSizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class SnippetLabelSizePipe {
  constructor() {
    this.maxLength = 24;
  }
  transform(label) {
    if (label.length <= this.maxLength) {
      return label;
    }
    return `…${label.substring(label.length - this.maxLength)}`;
  }
  static {
    this.ɵfac = function SnippetLabelSizePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SnippetLabelSizePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "snippetLabelSize",
      type: SnippetLabelSizePipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 96817:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/entity-edit.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityEditService: () => (/* binding */ EntityEditService)
/* harmony export */ });
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.service */ 9234);
/* harmony import */ var _http_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



class EntityEditService extends _http_service_base__WEBPACK_IMPORTED_MODULE_1__.HttpServiceBase {
  create(contentType, entity) {
    return this.http.post(`app/auto/data/${contentType}`, entity, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  update(contentType, entityId, entity) {
    return this.http.post(`app/auto/data/${contentType}/${entityId}`, entity, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  delete(type, id, tryForce) {
    return this.http.delete(this.apiUrl(_entity_service__WEBPACK_IMPORTED_MODULE_0__.webApiEntityRoot + 'delete'), {
      params: {
        contentType: type,
        id: id.toString(),
        appId: this.appId,
        force: tryForce.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEntityEditService_BaseFactory;
      return function EntityEditService_Factory(__ngFactoryType__) {
        return (ɵEntityEditService_BaseFactory || (ɵEntityEditService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](EntityEditService)))(__ngFactoryType__ || EntityEditService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: EntityEditService,
      factory: EntityEditService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_edit_dialog_footer_edit-dialog-footer_component_ts.js.map