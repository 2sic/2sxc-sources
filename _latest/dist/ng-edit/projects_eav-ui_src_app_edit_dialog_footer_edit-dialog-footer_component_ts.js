"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_edit_dialog_footer_edit-dialog-footer_component_ts"],{

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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
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
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: 0px;\n  padding: 10px;\n  padding-right: 0;\n  border: 0px;\n  box-sizing: border-box;\n  resize: none;\n  outline: none;\n  background-color: rgba(29, 39, 61, 0.04);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9kYXRhLWR1bXAvZGF0YS1kdW1wLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vcHJvamVjdHMvZWF2LXVpL3NyYy9hcHAvZWRpdC9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQ2UyQjtBRGhCN0IiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGVkaXRVSS1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xyXG4kYWNjZW50LWNvbG9yOiAjMDAyNzUzO1xyXG4kYmx1ZS1hY2NlbnQtY29sb3I6ICMwMDg3ZjQ7XHJcbiRlcnJvci1jb2xvcjogI2IwMDAzMDtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy13aWR0aDogMTAwdnc7XHJcbiRlZGl0LXVpLWRpYWxvZy1tYXgtd2lkdGg6IDgwMHB4O1xyXG5cclxuLy8gTWFpbiBoZWlnaHQgLSBhbGwgbW92ZWQgdG8gbWFpbiBzdHlsZXMuY3NzIHNvIGl0J3Mgbm90IGFkZGVkIG11bHRpcGxlIHRpbWVzXHJcbi8vIERlYnVnIC0gYWxsIG1vdmVkIHRvIG1haW4gc3R5bGVzLmNzcyBzbyBpdCdzIG5vdCBhZGRlZCBtdWx0aXBsZSB0aW1lc1xyXG5cclxuXHJcblxyXG5cclxuJGVkaXQtdWktZGlhbG9nLWJvcmRlci1yYWRpdXM6OHB4O1xyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1cy1tb2JpbGU6MHB4O1xyXG4kZWRpdC11aS1pbnB1dC1ib3JkZXItcmFkaXVzOjRweDtcclxuXHJcbiRzYXZlLWJ1dHRvbi1oZWlnaHQ6NDhweDtcclxuJHNhdmUtYnV0dG9uLWhlaWdodC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWNvbXBhY3Q6NDhweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWNvbXBhY3QtbW9iaWxlOjQycHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1leHRlbmRlZDoyMDBweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkLW1vYmlsZToxNzBweDtcclxuXHJcbi8vIFRoZSBtYXgtaGVpZ2h0IHNob3VsZCBhbHNvIGJlIHNldCBpbiB0aGUgZXhwYW5kYWJsZSB3cmFwcGVyIGFuaW1hdGlvbnNcclxuJGV4cGFuZGFibGUtd3JhcHBlci1tYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWVkaXQtY29udGVudC1tYXgtaGVpZ2h0LWRlZmF1bHQpICsgdmFyKC0tZWRpdC1kaWFsb2ctaGVhZGVyLWhlaWdodCkpO1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQtbW9iaWxlOiBjYWxjKHZhcigtLWVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtbW9iaWxlKSArIHZhcigtLWVkaXQtZGlhbG9nLWhlYWRlci1oZWlnaHQpKTtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMEYyO1xyXG5cclxuJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yOiAjMUQyNzNEO1xyXG4kZWRpdFVJLWRpc2FibGVkLWJhY2tncm91bmQ6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjA0KTtcclxuJGVkaXRVSS1sYWJlbC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuMjQpO1xyXG4kZWRpdFVJLWZpZWxkLWRpc2FibGVkLWNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC40NCk7XHJcblxyXG4kZWRpdC11aS1zZWxlY3RlZC1vcHRpb246IHJnYmEoIzAwMDAwMCwgMC4wNCk7XHJcblxyXG4vLyBGaWVsZCBib3JkZXJzXHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWluaXRpYWw6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taG92ZXI6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWRpc2FibGVkOnJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taW52YWxpZDogJGVycm9yLWNvbG9yO1xyXG5cclxuLy8gRHJvcHpvbmVcclxuJGRyb3B6b25lLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC40NCk7XHJcbiRkcm9wem9uZS1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAwLjg4KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
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
      styles: [".mat-mdc-card[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  height: var(--edit-footer-bar-height);\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n@media (max-width: 600px) {\n  .mat-mdc-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n\n.mat-mdc-card.debug-enabled[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.debug-buttons-container[_ngcontent-%COMP%] {\n  padding: 17px 16px 15px;\n  height: var(--edit-footer-bar-height);\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .sxc-version[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px !important;\n}\n\n.debug-info-container[_ngcontent-%COMP%] {\n  margin: var(--edit-footer-container-margin) !important;\n  margin-top: 0 !important;\n  width: calc(100% - 2 * var(--edit-footer-container-margin));\n  height: var(--edit-footer-container-height);\n  box-sizing: border-box;\n  position: relative;\n  overflow: auto;\n}\n.debug-info-container.size-xl[_ngcontent-%COMP%] {\n  height: calc(2 * var(--edit-footer-container-height));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9lZGl0LWRpYWxvZy1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFNQSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFORjtBQUhFO0VBTkY7SUFPSSxnQkFBQTtFQU1GO0FBQ0Y7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUtFO0VBQ0UsZUFBQTtBQUhKOztBQU9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFKRjs7QUFPQTtFQUNFLHNEQUFBO0VBQ0Esd0JBQUE7RUFDQSwyREFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKRjtBQU1FO0VBQ0UscURBQUE7QUFKSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubWF0LW1kYy1jYXJkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICBoZWlnaHQ6IHZhcigtLWVkaXQtZm9vdGVyLWJhci1oZWlnaHQpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tYXQtbWRjLWNhcmQuZGVidWctZW5hYmxlZCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZGVidWctYnV0dG9ucy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE3cHggMTZweCAxNXB4O1xyXG4gIGhlaWdodDogdmFyKC0tZWRpdC1mb290ZXItYmFyLWhlaWdodCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5tYXQtbWRjLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zeGMtdmVyc2lvbiB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlYnVnLWluZm8tY29udGFpbmVyIHtcclxuICBtYXJnaW46IHZhcigtLWVkaXQtZm9vdGVyLWNvbnRhaW5lci1tYXJnaW4pICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogdmFyKC0tZWRpdC1mb290ZXItY29udGFpbmVyLW1hcmdpbikpO1xyXG4gIGhlaWdodDogdmFyKC0tZWRpdC1mb290ZXItY29udGFpbmVyLWhlaWdodCk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICYuc2l6ZS14bCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMiAqIHZhcigtLWVkaXQtZm9vdGVyLWNvbnRhaW5lci1oZWlnaHQpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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










































const _forTrack0 = ($index, $item) => $item.entityGuid;
const _forTrack1 = ($index, $item) => $item.fieldName;
const _forTrack2 = ($index, $item) => $item.code;
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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
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
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-top: 1px solid lightgray;\n  padding-top: 8px;\n}\n\n.formula-context-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.formula-context-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.formula-context-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.has-formula[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.formula-box[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  overflow: hidden;\n}\n.formula-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  font-size: 14px;\n  width: 100%;\n}\n.formula-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-field[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  max-width: 200px;\n  max-height: 194px;\n  overflow: hidden auto;\n  padding-left: 2px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets.disabled[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: rgba(29, 39, 61, 0.44);\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%]:first-of-type {\n  padding-top: 0;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%]:last-of-type {\n  padding-bottom: 0;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid rgba(29, 39, 61, 0.44);\n}\n\n.formula-footer-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  height: min-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: fit-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .result-undefined[_ngcontent-%COMP%] {\n  color: red;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .result-error[_ngcontent-%COMP%] {\n  color: red;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: fit-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%]   .mdc-icon-button[_ngcontent-%COMP%] {\n  margin-left: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0px;\n  flex-shrink: 0;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%]   .mdc-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px !important;\n}\n\n.formula-field[_ngcontent-%COMP%] {\n  padding-top: 28px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding-bottom: calc(1px + 11px);\n  position: relative;\n}\n.formula-field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(0, 0, 0, 0.6);\n  cursor: default;\n  font-size: 12px;\n  transition: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.formula-field[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%]     .monaco-editor .scroll-decoration {\n  display: none;\n}\n.formula-field[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n  padding-bottom: 11px;\n}\n.formula-field.focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #002753;\n  padding-bottom: 11px;\n}\n.formula-field.focused[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #002753;\n}\n.formula-field.error[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #b00030;\n  padding-bottom: 11px;\n}\n.formula-field.error[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #b00030;\n}\n.formula-field.disabled[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-bottom: calc(2px + 11px);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 33%, transparent 0%);\n  background-position: bottom;\n  background-size: 4px 1px;\n  background-repeat: repeat-x;\n}\n.formula-field.disabled[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.formula-field.disabled[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%]     * {\n  color: rgba(0, 0, 0, 0.38);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9mb3JtdWxhLWRlc2lnbmVyL2Zvcm11bGEtZGVzaWduZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSEo7QUFLSTtFQUNFLHNCQUFBO0FBSE47QUFPRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxKO0FBUUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVFJO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQU5OO0FBU0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBOO0FBU007RUFDRSxjQUFBO0FBUFI7QUFVTTtFQUNFLGlCQUFBO0FBUlI7QUFZSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQ0FBQTtBQVZOOztBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWkY7QUFjRTtFQUdFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFFRSxnQkFBQTtBQWZOO0FBa0JJO0VBQ0UsVUFBQTtBQWhCTjtBQW1CSTtFQUNFLFVBQUE7QUFqQk47QUFxQkU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBcEJKO0FBc0JJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXBCTjtBQXNCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQXBCUjs7QUE0QkE7RUFDRSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQXpCRjtBQTJCRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQXpCSjtBQTZCSTtFQUNFLGFBQUE7QUEzQk47QUErQkU7RUFDRSwyQ0FBQTtFQUNBLG9CQTVCWTtBQURoQjtBQWdDRTtFQUNFLGdDQUFBO0VBQ0Esb0JBakNZO0FBR2hCO0FBZ0NJO0VBQ0UsY0FBQTtBQTlCTjtBQWtDRTtFQUNFLGdDQUFBO0VBQ0Esb0JBMUNZO0FBVWhCO0FBa0NJO0VBQ0UsY0N4TFE7QUR3SmQ7QUFvQ0U7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEdBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFsQ0o7QUFvQ0k7RUFDRSxvQkFBQTtBQWxDTjtBQW9DTTtFQUNFLDBCQUFBO0FBbENSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG5cclxuLmZvcm11bGEtY29udGV4dC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5oYXMtZm9ybXVsYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtdWxhLWJveCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm11bGEtZmllbGQge1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYS1zbmlwcGV0cyB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOTRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQgLnNuaXBwZXQge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjQ0KTtcclxuICAgIH1cclxuXHJcbiAgICAuc25pcHBldCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcGFyYXRvciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjQ0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtdWxhLWZvb3Rlci1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG5cclxuICAuZm9ybXVsYS1yZXN1bHQtYm94IHtcclxuICAgIC8vIGZsZXg6IDAgMSBhdXRvO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgLy8gdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3VsdC11bmRlZmluZWQge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXN1bHQtZXJyb3Ige1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm11bGEtYWN0aW9ucy1ib3gge1xyXG4gICAgLy8gZmxleDogMCAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG5cclxuICAgIC5tZGMtaWNvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgICAubWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiRwYWRkaW5nQm90dG9tOiAxMXB4O1xyXG5cclxuLmZvcm11bGEtZmllbGQge1xyXG4gIHBhZGRpbmctdG9wOiAyOHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMXB4ICsgI3skcGFkZGluZ0JvdHRvbX0pO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZWRpdG9yIHtcclxuICAgIDo6bmctZGVlcCAubW9uYWNvLWVkaXRvciAuc2Nyb2xsLWRlY29yYXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nQm90dG9tO1xyXG4gIH1cclxuXHJcbiAgJi5mb2N1c2VkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAyNzUzO1xyXG4gICAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nQm90dG9tO1xyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjMDAyNzUzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5lcnJvciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGVycm9yLWNvbG9yO1xyXG4gICAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nQm90dG9tO1xyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAkZXJyb3ItY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmRpc2FibGVkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygycHggKyAjeyRwYWRkaW5nQm90dG9tfSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC4yKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0cHggMXB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cclxuICAgIC5lZGl0b3Ige1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICAgIDo6bmctZGVlcCAqIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcclxuJGFjY2VudC1jb2xvcjogIzAwMjc1MztcclxuJGJsdWUtYWNjZW50LWNvbG9yOiAjMDA4N2Y0O1xyXG4kZXJyb3ItY29sb3I6ICNiMDAwMzA7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctd2lkdGg6IDEwMHZ3O1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LXdpZHRoOiA4MDBweDtcclxuXHJcbi8vIE1haW4gaGVpZ2h0IC0gYWxsIG1vdmVkIHRvIG1haW4gc3R5bGVzLmNzcyBzbyBpdCdzIG5vdCBhZGRlZCBtdWx0aXBsZSB0aW1lc1xyXG4vLyBEZWJ1ZyAtIGFsbCBtb3ZlZCB0byBtYWluIHN0eWxlcy5jc3Mgc28gaXQncyBub3QgYWRkZWQgbXVsdGlwbGUgdGltZXNcclxuXHJcblxyXG5cclxuXHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzOjhweDtcclxuJGVkaXQtdWktZGlhbG9nLWJvcmRlci1yYWRpdXMtbW9iaWxlOjBweDtcclxuJGVkaXQtdWktaW5wdXQtYm9yZGVyLXJhZGl1czo0cHg7XHJcblxyXG4kc2F2ZS1idXR0b24taGVpZ2h0OjQ4cHg7XHJcbiRzYXZlLWJ1dHRvbi1oZWlnaHQtbW9iaWxlOjQycHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1jb21wYWN0OjQ4cHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1jb21wYWN0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQ6MjAwcHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1leHRlbmRlZC1tb2JpbGU6MTcwcHg7XHJcblxyXG4vLyBUaGUgbWF4LWhlaWdodCBzaG91bGQgYWxzbyBiZSBzZXQgaW4gdGhlIGV4cGFuZGFibGUgd3JhcHBlciBhbmltYXRpb25zXHJcbiRleHBhbmRhYmxlLXdyYXBwZXItbWF4LWhlaWdodDogY2FsYyh2YXIoLS1lZGl0LWNvbnRlbnQtbWF4LWhlaWdodC1kZWZhdWx0KSArIHZhcigtLWVkaXQtZGlhbG9nLWhlYWRlci1oZWlnaHQpKTtcclxuJGV4cGFuZGFibGUtd3JhcHBlci1tYXgtaGVpZ2h0LW1vYmlsZTogY2FsYyh2YXIoLS1lZGl0LXVpLWRpYWxvZy1tYXgtaGVpZ2h0LW1vYmlsZSkgKyB2YXIoLS1lZGl0LWRpYWxvZy1oZWFkZXItaGVpZ2h0KSk7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcjogI0VGRjBGMjtcclxuXHJcbiRlZGl0VUktZm9yZWdyb3VuZC1jb2xvcjogIzFEMjczRDtcclxuJGVkaXRVSS1kaXNhYmxlZC1iYWNrZ3JvdW5kOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC4wNCk7XHJcbiRlZGl0VUktbGFiZWwtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjI0KTtcclxuJGVkaXRVSS1maWVsZC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG5cclxuJGVkaXQtdWktc2VsZWN0ZWQtb3B0aW9uOiByZ2JhKCMwMDAwMDAsIDAuMDQpO1xyXG5cclxuLy8gRmllbGQgYm9yZGVyc1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1pbml0aWFsOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDpyZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWludmFsaWQ6ICRlcnJvci1jb2xvcjtcclxuXHJcbi8vIERyb3B6b25lXHJcbiRkcm9wem9uZS1iYWNrZ3JvdW5kOiByZ2JhKCRhY2NlbnQtY29sb3IsIDAuNDQpO1xyXG4kZHJvcHpvbmUtYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC44OCk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 3,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], [2, "height", "300px", "width", "100%", 3, "focused", "blurred", "filename", "value", "options"], ["mat-button", "", "mat-dialog-close", ""], ["mat-icon-button", "", "tippy", "Copy Config To Clipboard", 3, "click"]],
      template: function ConfigEditorDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Configs Exporter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "app-monaco-editor", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focused", function ConfigEditorDialogComponent_Template_app_monaco_editor_focused_5_listener() {
            return ctx.onFocused(true);
          })("blurred", function ConfigEditorDialogComponent_Template_app_monaco_editor_blurred_5_listener() {
            return ctx.onFocused(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-dialog-actions")(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfigEditorDialogComponent_Template_button_click_9_listener() {
            return ctx.clipboard.copyToClipboard(ctx.selectedConfig);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "content_copy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filename", ctx.filename)("value", ctx.selectedConfig)("options", ctx.editorOptions);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_2__.MonacoEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__.ClipboardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective],
      encapsulation: 2
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

























function LogsConfigComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 9);
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
function LogsConfigComponent_div_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LogsConfigComponent_div_16_Conditional_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const log_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.openLogSpecs(log_r3.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "data_object");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LogsConfigComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "label")(2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LogsConfigComponent_div_16_Template_input_change_2_listener() {
      const log_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggleConfig(log_r3.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LogsConfigComponent_div_16_Conditional_4_Template, 3, 0, "button", 11);
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
    this.selectedConfig = null;
    this.sessionPrefix = 'logSpecs';
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
          this.toggleConfig(spec);
        }
      }
    } else {
      for (const spec of Object.keys(this.allLogs)) {
        if (!this.isChecked(spec)) {
          this.toggleConfig(spec);
        }
      }
    }
    this.allLogs = this.logManager.mergeAllSpecs;
  }
  isChecked(name) {
    return this.allLogs[name]?.enabled ?? false;
  }
  toggleConfig(name) {
    this.logManager.toggle(name);
    this.allLogs = this.logManager.mergeAllSpecs;
  }
  /* Config Functions */
  loadConfigsFromStateManager() {
    const savedConfigs = Object.keys(this.logManager.state.cache).filter(key => key.startsWith(this.sessionPrefix));
    this.configs = savedConfigs.map(key => key.replace(`${this.sessionPrefix}.`, ''));
  }
  onConfigSelected(configName) {
    if (configName) {
      Object.keys(this.allLogs).forEach(logKey => {
        if (this.isChecked(logKey)) {
          this.toggleConfig(logKey);
        }
      });
      const fullConfigKey = `${this.sessionPrefix}.${configName}`;
      const configData = this.logManager.state.cache[fullConfigKey];
      if (configData) {
        Object.keys(configData).forEach(logKey => {
          const shouldEnable = configData[logKey]?.enabled ?? false;
          if (shouldEnable) {
            if (!this.isChecked(logKey)) {
              this.toggleConfig(logKey);
            }
          }
        });
        this.allLogs = this.logManager.mergeAllSpecs;
      }
    }
  }
  saveConfig() {
    const configName = prompt('Enter the config name:');
    if (configName) {
      const enabledConfigs = Object.fromEntries(Object.entries(this.allLogs).filter(([, config]) => config.enabled));
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
    if (configData) {
      this.matDialog.open(_logs_config_config_editor_dialog_config_editor_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfigEditorDialogComponent, {
        width: '800px',
        data: {
          configData
        }
      });
    } else {
      this.snackBar.open(`Config "${this.selectedConfig}" not found.`, null, {
        duration: 2000
      });
    }
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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 6,
      consts: [[1, "log-content", "fancy-scrollbar-light"], [1, "menu"], ["mat-button", "", "tippy", "Toggles All Logs", 3, "click"], ["mat-icon-button", "", "tippy", "Save Configuration", 3, "click"], ["mat-icon-button", "", "tippy", "Export configuration", 3, "click", "disabled"], ["color", "accent"], [3, "valueChange", "selectionChange", "value"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "change", "id", "name", "checked"], ["tippy", "Edit Log Specs"], ["tippy", "Edit Log Specs", 3, "click"], [1, "specs-icon"]],
      template: function LogsConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LogsConfigComponent_Template_button_click_2_listener() {
            return ctx.checkAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Toggle All ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LogsConfigComponent_Template_button_click_5_listener() {
            return ctx.saveConfig();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "save");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LogsConfigComponent_Template_button_click_8_listener() {
            return ctx.exportConfig();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "ios_share");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 5)(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Configurations");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function LogsConfigComponent_Template_mat_select_valueChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedConfig, $event) || (ctx.selectedConfig = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function LogsConfigComponent_Template_mat_select_selectionChange_14_listener($event) {
            return ctx.onConfigSelected($event.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, LogsConfigComponent_mat_option_15_Template, 2, 2, "mat-option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LogsConfigComponent_div_16_Template, 5, 5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selectedConfig === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.selectedConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.configs);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 4, ctx.allLogs));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOptionModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  justify-content: space-between;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n}\n\n.specs-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  height: 1rem;\n  width: 1rem;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9sb2dzLWNvbmZpZy9sb2dzLWNvbmZpZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRW5zdXJlIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBmdWxseSB2aXNpYmxlIGFuZCBoYW5kbGVzIG92ZXJmbG93IG9uIHRoZSB5LWF4aXNcclxuOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BlY3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICB3aWR0aDogMXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 3,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], [2, "height", "300px", "width", "100%", 3, "valueChanged", "focused", "blurred", "filename", "value", "options"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "tippy", "Save Specs", 3, "click"]],
      template: function SpecsEditorDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Log Specs Editor");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "app-monaco-editor", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChanged", function SpecsEditorDialogComponent_Template_app_monaco_editor_valueChanged_5_listener($event) {
            return ctx.onValueChanged($event);
          })("focused", function SpecsEditorDialogComponent_Template_app_monaco_editor_focused_5_listener() {
            return ctx.onFocused(true);
          })("blurred", function SpecsEditorDialogComponent_Template_app_monaco_editor_blurred_5_listener() {
            return ctx.onFocused(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-dialog-actions")(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpecsEditorDialogComponent_Template_button_click_7_listener() {
            return ctx.onClose();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpecsEditorDialogComponent_Template_button_click_9_listener() {
            return ctx.onSave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "save");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filename", ctx.filename)("value", ctx.logSpecs)("options", ctx.editorOptions);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__.MonacoEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      encapsulation: 2
    });
  }
}

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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 7);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](1, LogsDumpComponent_Conditional_2_For_2_Template, 8, 9, "div", 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
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
    this.showSettings = false;
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
  toggleDialog() {
    this.showSettings = !this.showSettings;
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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 1,
      consts: [[1, "logs-box", "fancy-scrollbar-light"], [1, "logs-content"], [1, "log-button"], ["mat-icon-button", "", "tippy", "Enable Logs UI", 3, "click"], [1, "log-entry", 3, "ngClass"], [1, "log-entry-part", "log-entry-time"], [1, "log-entry-part", "log-entry-label"], ["tippy", "Log to console", 1, "log-entry-part", "log-entry-show", 3, "click"]],
      template: function LogsDumpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LogsDumpComponent_Conditional_2_Template, 3, 1)(3, LogsDumpComponent_Conditional_3_Template, 1, 0, "app-logs-config");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LogsDumpComponent_Template_button_click_5_listener() {
            return ctx.toggleDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.showSettings ? 2 : 3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _logs_config_logs_config_component__WEBPACK_IMPORTED_MODULE_2__.LogsConfigComponent, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.logs-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.logs-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.log-button[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 10px;\n  background: white;\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid rgb(240, 240, 240);\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.log-entry[_ngcontent-%COMP%]   .log-entry-part[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.log-error[_ngcontent-%COMP%] {\n  color: rgb(255, 0, 0);\n  border-color: rgb(255, 214, 214);\n  background-color: rgb(255, 240, 240);\n}\n\n.log-warn[_ngcontent-%COMP%] {\n  color: rgb(92, 60, 0);\n  border-color: rgb(255, 245, 194);\n  background-color: rgb(255, 251, 229);\n}\n\n.log-entry-time[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.log-entry-label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.log-entry-show[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #06599a;\n  font-size: 12px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9sb2dzLWR1bXAvbG9ncy1kdW1wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNFLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy90aGVtZS9tYXRlcmlhbC1jb2xvcnNcIjtcclxuXHJcbjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dzLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxvZ3MtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvZy1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZy1lbnRyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcblxyXG4gIC5sb2ctZW50cnktcGFydDpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nLWVycm9yIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyMTQsIDIxNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyNDApO1xyXG59XHJcblxyXG4ubG9nLXdhcm4ge1xyXG4gIGNvbG9yOiByZ2IoOTIsIDYwLCAwKTtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI0NSwgMTk0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTEsIDIyOSk7XHJcbn1cclxuXHJcbi5sb2ctZW50cnktdGltZSB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbn1cclxuXHJcbi5sb2ctZW50cnktbGFiZWwge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubG9nLWVudHJ5LXNob3cge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGNvbG9yOiBtYXBfZ2V0KCRtYXQtZWF2LWl0ZW0tZGlhbG9nLXNlY29uZGFyeSwgMzAwKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
  constructor(document) {
    this._document = document;
  }
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
  static {
    this.ɵfac = function Clipboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Clipboard,
      factory: Clipboard.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Clipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
const CDK_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    /** Content to be copied. */
    this.text = '';
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     */
    this.attempts = 1;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     */
    this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Copies that are currently being attempted. */
    this._pending = new Set();
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
  static {
    this.ɵfac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
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
      },
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkCopyToClipboard]',
      host: {
        '(click)': 'copy()'
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
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
  static {
    this.ɵfac = function ClipboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClipboardModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClipboardModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
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

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_edit_dialog_footer_edit-dialog-footer_component_ts.js.map