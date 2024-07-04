"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"],{

/***/ 55630:
/*!*****************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/dev-rest-urls-and-code/dev-rest-urls-and-code.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestUrlsAndCodeComponent: () => (/* binding */ DevRestUrlsAndCodeComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info-box/info-box.component */ 89512);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);















function DevRestUrlsAndCodeComponent_For_2_Conditional_22_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " (for the demo to work it will add context parameters) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DevRestUrlsAndCodeComponent_For_2_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Open in Browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DevRestUrlsAndCodeComponent_For_2_Conditional_22_Conditional_3_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const apiCall_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", apiCall_r2.browseUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](3, ctx_r2.data.scenario.useVirtual ? 3 : -1);
  }
}
function DevRestUrlsAndCodeComponent_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p")(1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DevRestUrlsAndCodeComponent_For_2_Conditional_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const apiCall_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.callApiGet(apiCall_r2.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Call and Output to Console");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DevRestUrlsAndCodeComponent_For_2_Conditional_22_Conditional_3_Template, 4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const apiCall_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](3, apiCall_r2.browseUrl ? 3 : -1);
  }
}
function DevRestUrlsAndCodeComponent_For_2_For_24_For_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-info-box", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hint_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", hint_r6.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", hint_r6.message, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function DevRestUrlsAndCodeComponent_For_2_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5)(5, "pre", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DevRestUrlsAndCodeComponent_For_2_For_24_Template_button_click_7_listener() {
      const code_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.copyCode(code_r5.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](10, DevRestUrlsAndCodeComponent_For_2_For_24_For_11_Template, 2, 2, "app-info-box", 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const code_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](code_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](code_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](code_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](code_r5.hints);
  }
}
function DevRestUrlsAndCodeComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "div", 1)(4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-panel-description", 2)(12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " HTTP Verb: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DevRestUrlsAndCodeComponent_For_2_Conditional_22_Template, 4, 1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](23, DevRestUrlsAndCodeComponent_For_2_For_24_Template, 12, 3, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const apiCall_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](apiCall_r2.verb);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](apiCall_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0to ", apiCall_r2.teaser, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](apiCall_r2.instructions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](apiCall_r2.verb);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.data.scenario.useVirtual ? "Virtual" : "Absolute", " Url: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](apiCall_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](22, apiCall_r2.enableButton ? 22 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](apiCall_r2.code);
  }
}
class DevRestUrlsAndCodeComponent {
  constructor(snackBar, http) {
    this.snackBar = snackBar;
    this.http = http;
  }
  callApiGet(url) {
    this.http.get(url).subscribe(res => {
      console.log(`Called ${url} and got this:`, res);
      this.openSnackBar(`Called ${url}. You can see the full result in the F12 console`, 'API call returned');
    });
    this.openSnackBar(`Calling ${url}. You can see the full result in the F12 console`, 'API call sent');
  }
  copyCode(text) {
    (0,_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)(text);
    this.openSnackBar('Copied to clipboard');
  }
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
  static #_ = this.ɵfac = function DevRestUrlsAndCodeComponent_Factory(t) {
    return new (t || DevRestUrlsAndCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DevRestUrlsAndCodeComponent,
    selectors: [["app-dev-rest-urls-and-code"]],
    inputs: {
      data: "data"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [["multi", "", 1, "rest-urls-accordion"], [1, "rest-urls-title"], [2, "display", "block"], ["mat-raised-button", "", 3, "click"], ["target", "_blank", 3, "href"], [1, "code-example"], [1, "code-example__text"], ["mat-icon-button", "", "tippy", "Copy to clipboard", 1, "code-example__copy", 3, "click"], [3, "type"], [3, "innerHtml"]],
    template: function DevRestUrlsAndCodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](1, DevRestUrlsAndCodeComponent_For_2_Template, 25, 8, "mat-expansion-panel", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.data.apiCalls);
      }
    },
    dependencies: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelDescription, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_2__.InfoBoxComponent],
    styles: ["[_nghost-%COMP%]     code, code[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\n.rest-urls-accordion[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px;\n}\n\n.rest-urls-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.code-example[_ngcontent-%COMP%] {\n  position: relative;\n}\n.code-example__text[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n.code-example__copy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.params-form[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 600px;\n}\n.params-form[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.form-with-textarea[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2Rldi1yZXN0L2Rldi1yZXN0LWFsbC5zY3NzIiwid2VicGFjazovLy4vcHJvamVjdHMvZWF2LXVpL3NyYy9hcHAvZGV2LXJlc3QvZGV2LXJlc3QtdXJscy1hbmQtY29kZS9kZXYtcmVzdC11cmxzLWFuZC1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7RUFHRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FESUU7RUFDRSxnQkFBQTtBQ0ZKOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZSBmaXJzdCBvbmUgaXMgbmVlZGVkIHNvIDxjb2RlPiBjb2xvcmluZyB3b3JrcyBpbiBkeW5hbWljIGluamVjdGVkIGh0bWwgKHRpcHMgZXRjLilcclxuOmhvc3QgOjpuZy1kZWVwIGNvZGUsXHJcbmNvZGUsXHJcbnByZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG59XHJcblxyXG4ucmVzdC11cmxzLWFjY29yZGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5yZXN0LXVybHMtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvZGUtZXhhbXBsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX190ZXh0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAmX19jb3B5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtcy1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0td2l0aC10ZXh0YXJlYSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuXHJcbiIsIjpob3N0IDo6bmctZGVlcCBjb2RlLFxuY29kZSxcbnByZSB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbnByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG59XG5cbi5yZXN0LXVybHMtYWNjb3JkaW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4ucmVzdC11cmxzLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvZGUtZXhhbXBsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb2RlLWV4YW1wbGVfX3RleHQge1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuLmNvZGUtZXhhbXBsZV9fY29weSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cblxuLnBhcmFtcy1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cbi5wYXJhbXMtZm9ybSAubWF0LW1kYy1mb3JtLWZpZWxkOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZm9ybS13aXRoLXRleHRhcmVhIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 89512:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/info-box/info-box.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoBoxComponent: () => (/* binding */ InfoBoxComponent)
/* harmony export */ });
/* harmony import */ var _hint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hint */ 99852);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const _c0 = ["*"];
function InfoBoxComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "strong", 0)(1, "br");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
class InfoBoxComponent {
  constructor() {}
  getIcon() {
    return _hint__WEBPACK_IMPORTED_MODULE_0__.infoBoxIconMap[this.type];
  }
  static #_ = this.ɵfac = function InfoBoxComponent_Factory(t) {
    return new (t || InfoBoxComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InfoBoxComponent,
    selectors: [["app-info-box"]],
    inputs: {
      type: "type",
      title: "title"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 5,
    consts: [[3, "innerHTML"]],
    template: function InfoBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InfoBoxComponent_Conditional_3_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon-box ", ctx.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getIcon());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, ctx.title ? 3 : -1);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: ["p.warning[_ngcontent-%COMP%] {\n  background-color: lightcoral;\n}\n\np.alert[_ngcontent-%COMP%] {\n  background-color: lightyellow;\n}\n\np.tip[_ngcontent-%COMP%] {\n  background-color: rgb(170, 218, 248);\n}\n\np.info[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n}\n\np.icon-box[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 60px;\n  margin: 5px;\n}\n\np.icon-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: -40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2Rldi1yZXN0L2luZm8tYm94L2luZm8tYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5wLndhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbn1cclxuXHJcbnAuYWxlcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xyXG59XHJcblxyXG5wLnRpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMjE4LCAyNDgpO1xyXG59XHJcblxyXG5wLmluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbnAuaWNvbi1ib3gge1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDYwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbnAuaWNvbi1ib3ggbWF0LWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 22422:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/tab-examples/tab-examples.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestTabExamplesComponent: () => (/* binding */ DevRestTabExamplesComponent)
/* harmony export */ });
/* harmony import */ var _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../info-box/info-box.component */ 89512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


function DevRestTabExamplesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-info-box", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Virtual REST URLs are short. They will be resolved internally to the full length (based on the dnn-version, current portal, etc.) thanks to $2sxc JS API. This happens when you use the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " $2sxc(");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "id-or-htmlnode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, ").webApi.get(...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " or if you use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " sxc-angular (npm package) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " (which also passes url-resolving through $2sxc). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DevRestTabExamplesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-info-box", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To use the REST API from external, you usually will want to set some permissions for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Anonymous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ". As of now, no such permissions are configured. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DevRestTabExamplesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-info-box", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " It seems that you have some permissions configured for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Anonymous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ". This is correct if you plan on using the REST endpoints from externally. Please make sure that they are the ones you need, and that you don't accidentally open up too much. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DevRestTabExamplesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " The code also looked up an item of this type and will use it's ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " in the examples. ");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.itemId);
  }
}
class DevRestTabExamplesComponent {
  constructor() {}
  static #_ = this.ɵfac = function DevRestTabExamplesComponent_Factory(t) {
    return new (t || DevRestTabExamplesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DevRestTabExamplesComponent,
    selectors: [["app-dev-rest-tab-examples-intro"]],
    inputs: {
      data: "data"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 15,
    vars: 7,
    consts: [["type", "info"], ["type", "warning"], ["type", "alert"], ["href", "https://docs.2sxc.org/specs/js/sxcewebapi.html", "target", "_blank"], ["href", "https://go.2sxc.org/js-angular", "target", "_blank"]],
    template: function DevRestTabExamplesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DevRestTabExamplesComponent_Conditional_0_Template, 11, 0, "app-info-box", 0)(1, DevRestTabExamplesComponent_Conditional_1_Template, 5, 0, "app-info-box", 1)(2, DevRestTabExamplesComponent_Conditional_2_Template, 5, 0, "app-info-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " The examples below use real values to make it easier to get started. The values used are the current content-type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ", the current Module ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " and the folder of the current App folder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " (where needed). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DevRestTabExamplesComponent_Conditional_14_Template, 4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.data.scenario.useVirtual ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx.data.scenario.needsAnonymous && !ctx.data.permissionsHasAnonymous ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx.data.scenario.needsAnonymous && ctx.data.permissionsHasAnonymous ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.moduleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.folder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](14, ctx.data.itemId ? 14 : -1);
      }
    },
    dependencies: [_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_0__.InfoBoxComponent],
    styles: ["[_nghost-%COMP%]     code, code[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\n.rest-urls-accordion[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px;\n}\n\n.rest-urls-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.code-example[_ngcontent-%COMP%] {\n  position: relative;\n}\n.code-example__text[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n.code-example__copy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.params-form[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 600px;\n}\n.params-form[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.form-with-textarea[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2Rldi1yZXN0L2Rldi1yZXN0LWFsbC5zY3NzIiwid2VicGFjazovLy4vcHJvamVjdHMvZWF2LXVpL3NyYy9hcHAvZGV2LXJlc3QvdGFiLWV4YW1wbGVzL3RhYi1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7O0VBR0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDREo7O0FES0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBRElFO0VBQ0UsZ0JBQUE7QUNGSjs7QURNQTtFQUNFLGdCQUFBO0FDSEYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGUgZmlyc3Qgb25lIGlzIG5lZWRlZCBzbyA8Y29kZT4gY29sb3Jpbmcgd29ya3MgaW4gZHluYW1pYyBpbmplY3RlZCBodG1sICh0aXBzIGV0Yy4pXHJcbjpob3N0IDo6bmctZGVlcCBjb2RlLFxyXG5jb2RlLFxyXG5wcmUge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxufVxyXG5cclxuLnJlc3QtdXJscy1hY2NvcmRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcblxyXG4ucmVzdC11cmxzLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2RlLWV4YW1wbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fdGV4dCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY29weSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXJhbXMtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXdpdGgtdGV4dGFyZWEge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcblxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgY29kZSxcbmNvZGUsXG5wcmUge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG5wcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xufVxuXG4ucmVzdC11cmxzLWFjY29yZGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDhweDtcbn1cblxuLnJlc3QtdXJscy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2RlLWV4YW1wbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29kZS1leGFtcGxlX190ZXh0IHtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cbi5jb2RlLWV4YW1wbGVfX2NvcHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wYXJhbXMtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG4ucGFyYW1zLWZvcm0gLm1hdC1tZGMtZm9ybS1maWVsZDpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmZvcm0td2l0aC10ZXh0YXJlYSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 53966:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/tab-headers/tab-headers.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestHttpHeadersComponent: () => (/* binding */ DevRestHttpHeadersComponent)
/* harmony export */ });
/* harmony import */ var _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../info-box/info-box.component */ 89512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class DevRestHttpHeadersComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function DevRestHttpHeadersComponent_Factory(t) {
    return new (t || DevRestHttpHeadersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DevRestHttpHeadersComponent,
    selectors: [["app-dev-rest-tab-headers"]],
    inputs: {
      data: "data"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 182,
    vars: 1,
    consts: [["type", "tip"], ["type", "info", "title", "Site & Language are <em>not</em> part of the Context."]],
    template: function DevRestHttpHeadersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HTTP Headers, Security and Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " HTTP headers and url-parameters are used for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ". We'll explain the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " part further below, and start with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ". When you work with WebApi endpoints, there are two distinct scenarios:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Using WebApi with Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " In this case the endpoint knows what ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " and what ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "module");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " the request is for. This ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " is then used to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "auto-detect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " the app (so you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "/auto/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " in the url). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " It can also be used for for security checks - so you can set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Allow READ If the user may see the module");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "app-info-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " TIP: In the case of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Queries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " can also provide parameters which were configured in the module.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Using WebApi without Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " If the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " is not known, the endpoint cannot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "auto-detect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " the the app, so instead of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "/auto/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " you must supply the correct app-name in the url, in this case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " You also must specify more specific ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Allow READ if user is in group Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Allow READ for all ANONYMOUS users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "app-info-box", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Technically the context needs more information than we just talked about, like what ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " are we on and what ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " is being used. This information is already in the URL. So the root (before any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "/api/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, ") paths already contains that information.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "How to get the Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "How the Context is Defined");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " The context always requires a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "PageId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " (in DNN it is hisorically called the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "TabId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, ") and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "ModuleId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, ". This lets the system look up the configuration for this module and figure out everything else.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Supplying Context in HTTP Headers (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " The standard behavior is to include the Context information in hidden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "HTTP headers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, ". This requires a bit more JavaScript code to attach the headers, but most of the APIs like the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "$2sxc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " will do this automatically when used from within a 2sxc-App. These are the context headers provided by $2sxc:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "ul")(115, "li")(116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "PageId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " - this is the page we're on (number). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "this header is new in v11.11");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li")(122, "s")(123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "TabId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " this is also the page id (number). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "just but for backward compatibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li")(132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "ModuleId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " - this is the module id (number) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "ContentBlockId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " - this in an internal ID for working in inner-content (number). You will usually not care about this. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Supplying Context as URL Parameters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "?PageId=...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " The headers above (");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "PageId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "ModuleId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, ") can also be added to the URL and will have the same effect.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Security Headers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " In addition to context headers, a request can also include ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " headers:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "ol")(159, "li")(160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "RequestVerificationToken");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " - this is a crypto key to prove that the request originated from the same site. It's only included in POST/PUT/DELETE but not GET requests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " These are only used on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "PUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " etc. but not on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "GET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " requests.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "app-info-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " This header is only usefull to verify that the request came from a real DNN page. The 2sxc-api ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "$2sxc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " will add this automatically for you, so you don't need to do anything if you use that.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.folder);
      }
    },
    dependencies: [_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_0__.InfoBoxComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 16768:
/*!*****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/tab-introduction/tab-introduction.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestTabIntroductionComponent: () => (/* binding */ DevRestTabIntroductionComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


function DevRestTabIntroductionComponent_For_31_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const scenario_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", scenario_r1.notes, " ");
  }
}
function DevRestTabIntroductionComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DevRestTabIntroductionComponent_For_31_Conditional_4_Template, 3, 1, "p");
  }
  if (rf & 2) {
    const scenario_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Scenario: ", scenario_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", scenario_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, scenario_r1.notes ? 4 : -1);
  }
}
class DevRestTabIntroductionComponent {
  constructor() {
    /** List of scenarios */
    this.scenarios = ___WEBPACK_IMPORTED_MODULE_0__.AllScenarios;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function DevRestTabIntroductionComponent_Factory(t) {
    return new (t || DevRestTabIntroductionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DevRestTabIntroductionComponent,
    selectors: [["app-dev-rest-tab-introduction"]],
    inputs: {
      data: "data"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 32,
    vars: 1,
    consts: [["href", "https://docs.2sxc.org/web-api/index.html", "target", "_blank"], ["href", "https://docs.2sxc.org/web-api/headless/index.html", "target", "_blank"]],
    template: function DevRestTabIntroductionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " All data can be used in JavaScript, SPAs or anywhere with the REST API (see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "). Use this for things like:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "WebAPI in 2sxc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Using DNN/2sxc as a headless CMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Create SPAs in DNN/2sxc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Get data for mobile apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Share data to other platforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Just set off HTTP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "GET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " requests or similar to the endpoint like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ". You can find the full list with example code in the next tabs. Make sure you also read about permissions and HTTP headers.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Scenarios Explained (dropdown on top)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " The examples / code / permission infos will change based on the scenario you choose.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](30, DevRestTabIntroductionComponent_For_31_Template, 5, 3, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.root);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.scenarios);
      }
    },
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a.js.map