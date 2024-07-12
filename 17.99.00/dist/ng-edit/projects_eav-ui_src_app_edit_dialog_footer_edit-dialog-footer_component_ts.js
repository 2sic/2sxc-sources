"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_edit_dialog_footer_edit-dialog-footer_component_ts"],{

/***/ 57319:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/services/entities.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntitiesService: () => (/* binding */ EntitiesService)
/* harmony export */ });
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../edit/shared/services */ 22453);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








class EntitiesService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  create(contentType, entity) {
    return this.http.post(`app/auto/data/${contentType}`, entity, {
      params: {
        appId: this.context.appId,
        zoneId: this.context.zoneId
      }
    });
  }
  update(contentType, entityId, entity) {
    return this.http.post(`app/auto/data/${contentType}/${entityId}`, entity, {
      params: {
        appId: this.context.appId,
        zoneId: this.context.zoneId
      }
    });
  }
  delete(type, id, tryForce) {
    return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_0__.webApiEntityRoot + 'delete'), {
      params: {
        contentType: type,
        id: id.toString(),
        appId: this.context.appId.toString(),
        force: tryForce.toString()
      }
    });
  }
  static #_ = this.ɵfac = function EntitiesService_Factory(t) {
    return new (t || EntitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: EntitiesService,
    factory: EntitiesService.ɵfac
  });
}

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services */ 22453);
/* harmony import */ var _shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/store/ngrx-data */ 27521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);







function DataDumpComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "textarea", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.items));
  }
}
class DataDumpComponent {
  constructor(itemService, formConfig) {
    this.itemService = itemService;
    this.formConfig = formConfig;
  }
  ngOnInit() {
    const items$ = this.itemService.getItems$(this.formConfig.config.itemGuids);
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([items$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(([items]) => {
      const viewModel = {
        items
      };
      return viewModel;
    }));
  }
  static #_ = this.ɵfac = function DataDumpComponent_Factory(t) {
    return new (t || DataDumpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_0__.FormConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DataDumpComponent,
    selectors: [["app-data-dump"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["readonly", "", 1, "fancy-scrollbar-light"]],
    template: function DataDumpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DataDumpComponent_Conditional_0_Template, 3, 3, "textarea", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: 0px;\n  padding: 10px;\n  padding-right: 0;\n  border: 0px;\n  box-sizing: border-box;\n  resize: none;\n  outline: none;\n  background-color: rgba(29, 39, 61, 0.04);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9kYXRhLWR1bXAvZGF0YS1kdW1wLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vcHJvamVjdHMvZWF2LXVpL3NyYy9hcHAvZWRpdC9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQ3NCMkI7QUR2QjdCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBib3JkZXI6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRlZGl0VUktZGlzYWJsZWQtYmFja2dyb3VuZDtcclxufVxyXG4iLCIkcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcclxuJGFjY2VudC1jb2xvcjogIzAwMjc1MztcclxuJGJsdWUtYWNjZW50LWNvbG9yOiAjMDA4N2Y0O1xyXG4kZXJyb3ItY29sb3I6ICNiMDAwMzA7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctd2lkdGg6IDEwMHZ3O1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LXdpZHRoOiA4MDBweDtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy10b3AtcGFkZGluZzogMjRweDtcclxuJGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0OiA1MnB4O1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodDogY2FsYygxMDB2aCAtICN7JGVkaXQtdWktZGlhbG9nLXRvcC1wYWRkaW5nfSAtICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGVkaXQtdWktZGlhbG9nLXRvcC1wYWRkaW5nfSk7XHJcbiRlZGl0LXVpLWRpYWxvZy1tYXgtaGVpZ2h0LW1vYmlsZTogY2FsYygxMDB2aCAtICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSk7XHJcblxyXG4vLyBEZWJ1Z1xyXG4kZWRpdC11aS1kaWFsb2ctZGVidWctbWF4LWhlaWdodDogNTJweDtcclxuJGRlYnVnLWluZm8tY29udGFpbmVyLWhlaWdodDogMzAwcHg7XHJcbiRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1tYXJnaW46IDE2cHg7XHJcbiRkZWJ1Zy1pbmZvLWNvbnRhaW5lci10b3RhbC1oZWlnaHQ6IGNhbGMoI3skZGVidWctaW5mby1jb250YWluZXItaGVpZ2h0fSArICN7JGRlYnVnLWluZm8tY29udGFpbmVyLW1hcmdpbn0pO1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC13aXRoLWRlYnVnOiBjYWxjKDEwMHZoIC0gI3skZWRpdC11aS1kaWFsb2ctdG9wLXBhZGRpbmd9IC0gI3skZWRpdC11aS1kaWFsb2ctaGVhZGVyLW1heC1oZWlnaHR9IC0gI3skZWRpdC11aS1kaWFsb2ctZGVidWctbWF4LWhlaWdodH0gLSAjeyRlZGl0LXVpLWRpYWxvZy10b3AtcGFkZGluZ30pO1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC13aXRoLWRlYnVnLW1vYmlsZTogY2FsYygxMDB2aCAtICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGVkaXQtdWktZGlhbG9nLWRlYnVnLW1heC1oZWlnaHR9KTtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzOjhweDtcclxuJGVkaXQtdWktZGlhbG9nLWJvcmRlci1yYWRpdXMtbW9iaWxlOjBweDtcclxuJGVkaXQtdWktaW5wdXQtYm9yZGVyLXJhZGl1czo0cHg7XHJcblxyXG4kc2F2ZS1idXR0b24taGVpZ2h0OjQ4cHg7XHJcbiRzYXZlLWJ1dHRvbi1oZWlnaHQtbW9iaWxlOjQycHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1jb21wYWN0OjQ4cHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1jb21wYWN0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQ6MjAwcHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1leHRlbmRlZC1tb2JpbGU6MTcwcHg7XHJcblxyXG4vLyBUaGUgbWF4LWhlaWdodCBzaG91bGQgYWxzbyBiZSBzZXQgaW4gdGhlIGV4cGFuZGFibGUgd3JhcHBlciBhbmltYXRpb25zXHJcbiRleHBhbmRhYmxlLXdyYXBwZXItbWF4LWhlaWdodDogY2FsYygjeyRlZGl0LXVpLWRpYWxvZy1tYXgtaGVpZ2h0fSArICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSk7XHJcbiRleHBhbmRhYmxlLXdyYXBwZXItbWF4LWhlaWdodC1tb2JpbGU6IGNhbGMoI3skZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC1tb2JpbGV9ICsgI3skZWRpdC11aS1kaWFsb2ctaGVhZGVyLW1heC1oZWlnaHR9KTtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMEYyO1xyXG5cclxuJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yOiAjMUQyNzNEO1xyXG4kZWRpdFVJLWRpc2FibGVkLWJhY2tncm91bmQ6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjA0KTtcclxuJGVkaXRVSS1sYWJlbC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuMjQpO1xyXG4kZWRpdFVJLWZpZWxkLWRpc2FibGVkLWNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC40NCk7XHJcblxyXG4kZWRpdC11aS1zZWxlY3RlZC1vcHRpb246IHJnYmEoIzAwMDAwMCwgMC4wNCk7XHJcblxyXG4vLyBGaWVsZCBib3JkZXJzXHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWluaXRpYWw6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taG92ZXI6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWRpc2FibGVkOnJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taW52YWxpZDogJGVycm9yLWNvbG9yO1xyXG5cclxuLy8gRHJvcHpvbmVcclxuJGRyb3B6b25lLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC40NCk7XHJcbiRkcm9wem9uZS1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAwLjg4KTtcclxuXHJcbi8vIGhlbHBlciB0ZXh0XHJcbiRoZWxwZXItdGV4dC1wYWRkaW5nOiAwLjU0MTY2NjY3ZW0gMCAxM3B4IDA7XHJcbiRoZWxwZXItdGV4dC1wYWRkaW5nLS1uby1oaW50OiAwLjU0MTY2NjY3ZW0gMCAxM3B4IDA7XHJcbiRoZWxwZXItdGV4dC1wYWRkaW5nLS1sYXN0OiAwLjU0MTY2NjY3ZW0gMCA1cHggMDtcclxuJGhlbHBlci10ZXh0LXBhZGRpbmctLWxhc3QtLW5vLWhpbnQ6IDAuNTQxNjY2NjdlbSAwIDVweCAwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _edit_dialog_footer_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-dialog-footer.models */ 65450);
/* harmony import */ var _logs_dump_logs_dump_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs-dump/logs-dump.component */ 52499);
/* harmony import */ var _formula_designer_formula_designer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formula-designer/formula-designer.component */ 373);
/* harmony import */ var _data_dump_data_dump_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-dump/data-dump.component */ 49071);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 52913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 53777);















const _c0 = a0 => ({
  "debug-enabled": a0
});
function EditDialogFooterComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-data-dump");
  }
}
function EditDialogFooterComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-formula-designer", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formBuilderRefs", ctx_r0.formBuilderRefs);
  }
}
function EditDialogFooterComponent_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-logs-dump");
  }
}
function EditDialogFooterComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditDialogFooterComponent_Conditional_20_Conditional_1_Template, 1, 0, "app-data-dump")(2, EditDialogFooterComponent_Conditional_20_Conditional_2_Template, 1, 1, "app-formula-designer", 8)(3, EditDialogFooterComponent_Conditional_20_Conditional_3_Template, 1, 0, "app-logs-dump");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](1, ctx_r0.activeDebug === ctx_r0.DebugTypes.Data ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](2, ctx_r0.activeDebug === ctx_r0.DebugTypes.Formulas ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](3, ctx_r0.activeDebug === ctx_r0.DebugTypes.Logs ? 3 : -1);
  }
}
class EditDialogFooterComponent {
  constructor() {
    this.debugInfoOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.DebugTypes = _edit_dialog_footer_models__WEBPACK_IMPORTED_MODULE_0__.DebugTypes;
    this.sxcVer = window.sxcVersion.substring(0, window.sxcVersion.lastIndexOf('.'));
  }
  ngOnInit() {}
  toggleDebugType(type) {
    this.activeDebug = type !== this.activeDebug ? type : null;
    this.debugInfoOpened.emit(this.activeDebug != null);
  }
  static #_ = this.ɵfac = function EditDialogFooterComponent_Factory(t) {
    return new (t || EditDialogFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EditDialogFooterComponent,
    selectors: [["app-edit-dialog-footer"]],
    inputs: {
      formBuilderRefs: "formBuilderRefs"
    },
    outputs: {
      debugInfoOpened: "debugInfoOpened"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 5,
    consts: [["appearance", "raised", 1, "mat-elevation-z4", 3, "ngClass"], [1, "debug-buttons-container"], ["mat-button", "", "tippy", "Show Data JSON", 3, "click"], ["mat-button", "", "tippy", "Show Formula Designer", 3, "click"], ["mat-button", "", "tippy", "Show Logs", 3, "click"], [1, "spacer"], [1, "sxc-version"], [1, "debug-info-container"], [3, "formBuilderRefs"]],
    template: function EditDialogFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditDialogFooterComponent_Template_button_click_2_listener() {
          return ctx.toggleDebugType(ctx.DebugTypes.Data);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "offline_bolt");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditDialogFooterComponent_Template_button_click_7_listener() {
          return ctx.toggleDebugType(ctx.DebugTypes.Formulas);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Formulas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditDialogFooterComponent_Template_button_click_12_listener() {
          return ctx.toggleDebugType(ctx.DebugTypes.Logs);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, EditDialogFooterComponent_Conditional_20_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx.activeDebug != null));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("2sxc ", ctx.sxcVer, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](20, ctx.activeDebug != null ? 20 : -1);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.ExtendedModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _data_dump_data_dump_component__WEBPACK_IMPORTED_MODULE_3__.DataDumpComponent, _formula_designer_formula_designer_component__WEBPACK_IMPORTED_MODULE_2__.FormulaDesignerComponent, _logs_dump_logs_dump_component__WEBPACK_IMPORTED_MODULE_1__.LogsDumpComponent],
    styles: [".mat-mdc-card[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  height: 52px;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n@media (max-width: 600px) {\n  .mat-mdc-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n\n.mat-mdc-card.debug-enabled[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.debug-buttons-container[_ngcontent-%COMP%] {\n  padding: 17px 16px 15px;\n  height: 52px;\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.debug-buttons-container[_ngcontent-%COMP%]   .sxc-version[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px !important;\n}\n\n.debug-info-container[_ngcontent-%COMP%] {\n  margin: 16px !important;\n  margin-top: 0 !important;\n  width: calc(100% - 2 * 16px);\n  height: 300px;\n  box-sizing: border-box;\n  position: relative;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9lZGl0LWRpYWxvZy1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBTUEsWUNFZ0M7RUREaEMsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQU5GO0FBSEU7RUFORjtJQU9JLGdCQUFBO0VBTUY7QUFDRjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsWUNaZ0M7RURhaEMsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUtFO0VBQ0UsZUFBQTtBQUhKOztBQU9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFKRjs7QUFPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFDekM0QjtFRDBDNUIsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubWF0LW1kYy1jYXJkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICBoZWlnaHQ6ICRlZGl0LXVpLWRpYWxvZy1kZWJ1Zy1tYXgtaGVpZ2h0O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tYXQtbWRjLWNhcmQuZGVidWctZW5hYmxlZCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZGVidWctYnV0dG9ucy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE3cHggMTZweCAxNXB4O1xyXG4gIGhlaWdodDogJGVkaXQtdWktZGlhbG9nLWRlYnVnLW1heC1oZWlnaHQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5tYXQtbWRjLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zeGMtdmVyc2lvbiB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlYnVnLWluZm8tY29udGFpbmVyIHtcclxuICBtYXJnaW46ICRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1tYXJnaW4gIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAjeyRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1tYXJnaW59KTtcclxuICBoZWlnaHQ6ICRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1oZWlnaHQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICNmZmZmZmY7XHJcbiRhY2NlbnQtY29sb3I6ICMwMDI3NTM7XHJcbiRibHVlLWFjY2VudC1jb2xvcjogIzAwODdmNDtcclxuJGVycm9yLWNvbG9yOiAjYjAwMDMwO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLXdpZHRoOiAxMDB2dztcclxuJGVkaXQtdWktZGlhbG9nLW1heC13aWR0aDogODAwcHg7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctdG9wLXBhZGRpbmc6IDI0cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodDogNTJweDtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy10b3AtcGFkZGluZ30gLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0gLSAjeyRlZGl0LXVpLWRpYWxvZy10b3AtcGFkZGluZ30pO1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC1tb2JpbGU6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0pO1xyXG5cclxuLy8gRGVidWdcclxuJGVkaXQtdWktZGlhbG9nLWRlYnVnLW1heC1oZWlnaHQ6IDUycHg7XHJcbiRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1oZWlnaHQ6IDMwMHB4O1xyXG4kZGVidWctaW5mby1jb250YWluZXItbWFyZ2luOiAxNnB4O1xyXG4kZGVidWctaW5mby1jb250YWluZXItdG90YWwtaGVpZ2h0OiBjYWxjKCN7JGRlYnVnLWluZm8tY29udGFpbmVyLWhlaWdodH0gKyAjeyRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1tYXJnaW59KTtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtd2l0aC1kZWJ1ZzogY2FsYygxMDB2aCAtICN7JGVkaXQtdWktZGlhbG9nLXRvcC1wYWRkaW5nfSAtICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGVkaXQtdWktZGlhbG9nLWRlYnVnLW1heC1oZWlnaHR9IC0gI3skZWRpdC11aS1kaWFsb2ctdG9wLXBhZGRpbmd9KTtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtd2l0aC1kZWJ1Zy1tb2JpbGU6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0gLSAjeyRlZGl0LXVpLWRpYWxvZy1kZWJ1Zy1tYXgtaGVpZ2h0fSk7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1czo4cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzLW1vYmlsZTowcHg7XHJcbiRlZGl0LXVpLWlucHV0LWJvcmRlci1yYWRpdXM6NHB4O1xyXG5cclxuJHNhdmUtYnV0dG9uLWhlaWdodDo0OHB4O1xyXG4kc2F2ZS1idXR0b24taGVpZ2h0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdDo0OHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkOjIwMHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQtbW9iaWxlOjE3MHB4O1xyXG5cclxuLy8gVGhlIG1heC1oZWlnaHQgc2hvdWxkIGFsc28gYmUgc2V0IGluIHRoZSBleHBhbmRhYmxlIHdyYXBwZXIgYW5pbWF0aW9uc1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQ6IGNhbGMoI3skZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodH0gKyAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0pO1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQtbW9iaWxlOiBjYWxjKCN7JGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtbW9iaWxlfSArICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSk7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcjogI0VGRjBGMjtcclxuXHJcbiRlZGl0VUktZm9yZWdyb3VuZC1jb2xvcjogIzFEMjczRDtcclxuJGVkaXRVSS1kaXNhYmxlZC1iYWNrZ3JvdW5kOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC4wNCk7XHJcbiRlZGl0VUktbGFiZWwtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjI0KTtcclxuJGVkaXRVSS1maWVsZC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG5cclxuJGVkaXQtdWktc2VsZWN0ZWQtb3B0aW9uOiByZ2JhKCMwMDAwMDAsIDAuMDQpO1xyXG5cclxuLy8gRmllbGQgYm9yZGVyc1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1pbml0aWFsOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDpyZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWludmFsaWQ6ICRlcnJvci1jb2xvcjtcclxuXHJcbi8vIERyb3B6b25lXHJcbiRkcm9wem9uZS1iYWNrZ3JvdW5kOiByZ2JhKCRhY2NlbnQtY29sb3IsIDAuNDQpO1xyXG4kZHJvcHpvbmUtYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC44OCk7XHJcblxyXG4vLyBoZWxwZXIgdGV4dFxyXG4kaGVscGVyLXRleHQtcGFkZGluZzogMC41NDE2NjY2N2VtIDAgMTNweCAwO1xyXG4kaGVscGVyLXRleHQtcGFkZGluZy0tbm8taGludDogMC41NDE2NjY2N2VtIDAgMTNweCAwO1xyXG4kaGVscGVyLXRleHQtcGFkZGluZy0tbGFzdDogMC41NDE2NjY2N2VtIDAgNXB4IDA7XHJcbiRoZWxwZXItdGV4dC1wYWRkaW5nLS1sYXN0LS1uby1oaW50OiAwLjU0MTY2NjY3ZW0gMCA1cHggMDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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
};

/***/ }),

/***/ 373:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/footer/formula-designer/formula-designer.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaDesignerComponent: () => (/* binding */ FormulaDesignerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../content-items/services/entities.service */ 57319);
/* harmony import */ var _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../content-type-fields/constants/input-type.constants */ 18170);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _formulas_formula_designer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../formulas/formula-designer.service */ 98705);
/* harmony import */ var _formulas_formula_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../formulas/formula.constants */ 10059);
/* harmony import */ var _formulas_helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../formulas/helpers/formula.helpers */ 13513);
/* harmony import */ var _formulas_models_formula_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../formulas/models/formula.models */ 66231);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/helpers */ 56606);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services */ 22453);
/* harmony import */ var _shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/store/ngrx-data */ 27521);
/* harmony import */ var _formula_designer_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formula-designer.models */ 40126);
/* harmony import */ var _form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../form/fields/empty/empty-field-helpers */ 82895);
/* harmony import */ var _snippet_label_size_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./snippet-label-size.pipe */ 80960);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../monaco-editor/monaco-editor.component */ 96581);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout/extended */ 52913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 90852);















// tslint:disable-next-line:max-line-length































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
function FormulaDesignerComponent_Conditional_0_Conditional_0_For_6_Template(rf, ctx) {
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
function FormulaDesignerComponent_Conditional_0_Conditional_0_For_12_Template(rf, ctx) {
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
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_16_For_2_Template(rf, ctx) {
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
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_16_Template_mat_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectedChanged(ctx_r1.SelectTargets.Target, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](1, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_16_For_2_Template, 3, 5, "mat-option", 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", vm_r7.designer.target)("disabled", vm_r7.designer.entityGuid == null || vm_r7.designer.fieldName == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](vm_r7.targetOptions);
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_17_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectedChanged(ctx_r1.SelectTargets.Target, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", vm_r7.designer.target)("disabled", vm_r7.designer.entityGuid == null || vm_r7.designer.fieldName == null);
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_For_32_Template_div_click_0_listener() {
      const snippet_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.copyToClipboard(snippet_r10.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "snippetLabelSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", snippet_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, snippet_r10.label), " ");
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "div", 17);
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_For_35_Template_div_click_0_listener() {
      const snippet_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.copyToClipboard(snippet_r12.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "snippetLabelSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", snippet_r12.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, snippet_r12.label), " ");
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "undefined");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "promise(\uD83E\uDD1E\uD83C\uDFFD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, vm_r7.result));
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_0_Conditional_0_Template, 2, 0, "span", 31)(1, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_0_Conditional_1_Template, 2, 0, "span")(2, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_0_Conditional_2_Template, 3, 3, "span");
  }
  if (rf & 2) {
    const vm_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](0, vm_r7.result === undefined && !vm_r7.resultIsOnlyPromise ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](1, vm_r7.result === undefined && vm_r7.resultIsOnlyPromise ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](2, vm_r7.result !== undefined ? 2 : -1);
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Calculation failed. Please check logs for more info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_0_Template, 3, 3)(1, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Conditional_1_Template, 2, 0, "span", 30);
  }
  if (rf & 2) {
    const vm_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](0, !vm_r7.resultIsError ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](1, vm_r7.resultIsError ? 1 : -1);
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_60_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tippyDisabled", !vm_r7.designer.editMode || !(vm_r7.formula == null ? null : vm_r7.formula.source))("disabled", !vm_r7.designer.editMode || !(vm_r7.formula == null ? null : vm_r7.formula.source) || vm_r7.saving);
  }
}
function FormulaDesignerComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1)(1, "mat-form-field", 2)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Entity");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectedChanged(ctx_r1.SelectTargets.Entity, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](5, FormulaDesignerComponent_Conditional_0_Conditional_0_For_6_Template, 3, 5, "mat-option", 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵcomponentInstance"]().trackEntityOptions, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "mat-form-field", 2)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectedChanged(ctx_r1.SelectTargets.Field, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](11, FormulaDesignerComponent_Conditional_0_Conditional_0_For_12_Template, 3, 5, "mat-option", 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵcomponentInstance"]().trackFieldOptions, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "mat-form-field", 2)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_16_Template, 3, 2, "mat-select", 6)(17, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_17_Template, 1, 2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.toggleFreeText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "text_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.openFormulasHelp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "help");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 11)(26, "div", 12)(27, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "Function");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "app-monaco-editor", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChanged", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_app_monaco_editor_valueChanged_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.formulaChanged($event));
    })("focused", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_app_monaco_editor_focused_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onFocused());
    })("blurred", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_app_monaco_editor_blurred_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onBlurred());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](31, FormulaDesignerComponent_Conditional_0_Conditional_0_For_32_Template, 3, 4, "div", 16, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵcomponentInstance"]().trackSnippets, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](33, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_33_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](34, FormulaDesignerComponent_Conditional_0_Conditional_0_For_35_Template, 3, 4, "div", 16, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵcomponentInstance"]().trackSnippets, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "div", 18)(37, "div", 19)(38, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "Result:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_40_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 20)(42, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.toggleEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "button", 22)(46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "mat-menu", null, 0)(50, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.deleteFormula());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](56, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](57, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](59, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](60, FormulaDesignerComponent_Conditional_0_Conditional_0_Conditional_60_Template, 3, 2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function FormulaDesignerComponent_Conditional_0_Conditional_0_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.run());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const vm_r7 = ctx;
    const menu_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](49);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", vm_r7.designer.entityGuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](vm_r7.entityOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", vm_r7.designer.fieldName)("disabled", vm_r7.designer.entityGuid == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](vm_r7.fieldOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](16, !ctx_r1.freeTextTarget ? 16 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](17, ctx_r1.freeTextTarget ? 17 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", vm_r7.designer.entityGuid == null || vm_r7.designer.fieldName == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction2"](18, _c0, !vm_r7.designer.editMode || vm_r7.designer.entityGuid == null || vm_r7.designer.fieldName == null || vm_r7.designer.target == null, ctx_r1.focused));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("filename", ctx_r1.filename)("value", (tmp_14_0 = vm_r7.formula == null ? null : vm_r7.formula.source) !== null && tmp_14_0 !== undefined ? tmp_14_0 : vm_r7.template)("jsTypings", vm_r7.typings)("options", ctx_r1.monacoOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](21, _c1, !vm_r7.designer.editMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](vm_r7.dataSnippets);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](33, (vm_r7.dataSnippets == null ? null : vm_r7.dataSnippets.length) && (vm_r7.contextSnippets == null ? null : vm_r7.contextSnippets.length) ? 33 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](vm_r7.contextSnippets);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](40, vm_r7.resultExists ? 40 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matMenuTriggerFor", menu_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !(vm_r7.formula == null ? null : vm_r7.formula.sourceId));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](60, ctx_r1.allowSaveFormula ? 60 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !vm_r7.designer.editMode || !(vm_r7.formula == null ? null : vm_r7.formula.source));
  }
}
function FormulaDesignerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, FormulaDesignerComponent_Conditional_0_Conditional_0_Template, 64, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](0, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 1, ctx_r1.viewModel$)) ? 0 : -1, tmp_1_0);
  }
}
class FormulaDesignerComponent {
  constructor(formulaDesignerService, snackBar, formConfig, entitiesService, itemService, contentTypeService, translate) {
    this.formulaDesignerService = formulaDesignerService;
    this.snackBar = snackBar;
    this.formConfig = formConfig;
    this.entitiesService = entitiesService;
    this.itemService = itemService;
    this.contentTypeService = contentTypeService;
    this.translate = translate;
    this.SelectTargets = _formula_designer_models__WEBPACK_IMPORTED_MODULE_11__.SelectTargets;
    this.loadError = false;
    this.freeTextTarget = false;
    this.allowSaveFormula = this.formConfig.config.enableFormulaSave;
    this.isDeleted$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
    this.saving$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
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
  }
  ngOnInit() {
    this.loadError = false;
    if (this.formBuilderRefs == null) {
      this.loadError = true;
      return;
    }
    this.formulaDesignerService.setDesignerOpen(true);
    this.buildViewModel();
  }
  ngOnDestroy() {
    this.formulaDesignerService.setDesignerOpen(false);
    this.saving$.complete();
  }
  trackEntityOptions(index, entityOption) {
    return entityOption.entityGuid;
  }
  trackFieldOptions(index, fieldOption) {
    return fieldOption.fieldName;
  }
  trackSnippets(index, snippet) {
    return snippet.code;
  }
  selectedChanged(target, value) {
    const newState = {
      ...this.formulaDesignerService.getDesignerState(),
      editMode: false
    };
    switch (target) {
      case _formula_designer_models__WEBPACK_IMPORTED_MODULE_11__.SelectTargets.Entity:
        newState.entityGuid = value;
        const selectedFormRef = this.formBuilderRefs.find(formBuilderRef => formBuilderRef.entityGuid === newState.entityGuid);
        newState.fieldName = Object.keys(selectedFormRef.fieldsSettingsService.getFieldsProps())[0];
        break;
      case _formula_designer_models__WEBPACK_IMPORTED_MODULE_11__.SelectTargets.Field:
        newState.fieldName = value;
        break;
      case _formula_designer_models__WEBPACK_IMPORTED_MODULE_11__.SelectTargets.Target:
        newState.target = value;
        break;
    }
    this.formulaDesignerService.setDesignerState(newState);
  }
  toggleFreeText() {
    this.freeTextTarget = !this.freeTextTarget;
  }
  formulaChanged(formula) {
    const designer = this.formulaDesignerService.getDesignerState();
    this.formulaDesignerService.updateFormulaFromEditor(designer.entityGuid, designer.fieldName, designer.target, formula, false);
  }
  onFocused() {
    this.focused = true;
  }
  onBlurred() {
    this.focused = false;
  }
  copyToClipboard(text) {
    (0,_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_3__.copyToClipboard)(text);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  toggleEdit() {
    const oldState = this.formulaDesignerService.getDesignerState();
    const designer = {
      ...oldState,
      editMode: !oldState.editMode
    };
    this.formulaDesignerService.setDesignerState(designer);
    if (designer.editMode) {
      const formula = this.formulaDesignerService.getFormula(designer.entityGuid, designer.fieldName, designer.target, true);
      if (formula == null) {
        this.formulaDesignerService.updateFormulaFromEditor(designer.entityGuid, designer.fieldName, designer.target, Object.values(_formulas_models_formula_models__WEBPACK_IMPORTED_MODULE_7__.FormulaListItemTargets).includes(designer.target) ? _formulas_formula_constants__WEBPACK_IMPORTED_MODULE_5__.listItemFormulaNow : _formulas_formula_constants__WEBPACK_IMPORTED_MODULE_5__.defaultFormulaNow, false);
      }
    }
  }
  reset() {
    const designer = {
      ...this.formulaDesignerService.getDesignerState(),
      editMode: false
    };
    this.formulaDesignerService.setDesignerState(designer);
    this.formulaDesignerService.resetFormula(designer.entityGuid, designer.fieldName, designer.target);
    this.formBuilderRefs.find(formBuilderRef => formBuilderRef.entityGuid === designer.entityGuid).fieldsSettingsService.retriggerFormulas();
  }
  run() {
    const designer = this.formulaDesignerService.getDesignerState();
    const formula = this.formulaDesignerService.getFormula(designer.entityGuid, designer.fieldName, designer.target, true);
    this.formulaDesignerService.updateFormulaFromEditor(designer.entityGuid, designer.fieldName, designer.target, formula.source, true);
    this.formBuilderRefs.find(formBuilderRef => formBuilderRef.entityGuid === designer.entityGuid).fieldsSettingsService.retriggerFormulas();
    this.isDeleted$.next(false);
  }
  save() {
    this.saving$.next(true);
    const designer = this.formulaDesignerService.getDesignerState();
    const formula = this.formulaDesignerService.getFormula(designer.entityGuid, designer.fieldName, designer.target, true);
    if (formula.sourceId == null) {
      const item = this.itemService.getItem(formula.entityGuid);
      const contentTypeId = _shared_helpers__WEBPACK_IMPORTED_MODULE_8__.InputFieldHelpers.getContentTypeId(item);
      const contentType = this.contentTypeService.getContentType(contentTypeId);
      const attributeDef = contentType.Attributes.find(a => a.Name === formula.fieldName);
      const atAllFieldSettings = attributeDef.Metadata.find(m => m.Type.Id === '@All');
      if (!atAllFieldSettings) {
        this.snackBar.open('Field configuration is missing. Please create formula in Administration', undefined, {
          duration: 3000
        });
        this.saving$.next(false);
        return;
      }
      this.entitiesService.create(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.contentTypes.formulas, {
        Title: formula.target,
        Target: formula.target,
        Formula: formula.source,
        Enabled: true,
        ParentRelationship: {
          Add: null,
          EntityId: null,
          Field: 'Formulas',
          Index: 0,
          Parent: atAllFieldSettings.Guid
        }
      }).subscribe(savedFormula => {
        this.formulaDesignerService.updateSaved(formula.entityGuid, formula.fieldName, formula.target, formula.source, savedFormula.Guid, savedFormula.Id);
        this.snackBar.open('Formula saved', null, {
          duration: 2000
        });
        this.saving$.next(false);
      });
      return;
    }
    this.entitiesService.update(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.contentTypes.formulas, formula.sourceId, {
      Formula: formula.source
    }).subscribe(() => {
      this.formulaDesignerService.updateSaved(formula.entityGuid, formula.fieldName, formula.target, formula.source, formula.sourceGuid, formula.sourceId);
      this.snackBar.open('Formula saved', null, {
        duration: 2000
      });
      this.saving$.next(false);
    });
  }
  deleteFormula() {
    const designer = this.formulaDesignerService.getDesignerState();
    const formula = this.formulaDesignerService.getFormula(designer.entityGuid, designer.fieldName, designer.target, true);
    const id = formula.sourceId;
    const title = formula.fieldName + ' - ' + formula.target;
    const confirmed = confirm(this.translate.instant('Data.Delete.Question', {
      title,
      id
    }));
    if (!confirmed) {
      return;
    }
    this.entitiesService.delete(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.contentTypes.formulas, formula.sourceId, true).subscribe({
      next: () => {
        this.formulaDesignerService.delete(formula.entityGuid, formula.fieldName, formula.target);
        this.snackBar.open(this.translate.instant('Message.Deleted'), null, {
          duration: 2000
        });
        this.isDeleted$.next(true);
        if (designer.editMode) this.toggleEdit();
      },
      error: error => {
        this.snackBar.open(this.translate.instant('Message.DeleteError'), null, {
          duration: 2000
        });
      }
    });
  }
  openFormulasHelp() {
    window.open('https://go.2sxc.org/formulas', '_blank');
  }
  buildViewModel() {
    const oldState = this.formulaDesignerService.getDesignerState();
    if (oldState.entityGuid == null && oldState.fieldName == null && oldState.target == null) {
      const entityGuid = this.formBuilderRefs.first.entityGuid;
      const fieldsProps = this.formBuilderRefs.first.fieldsSettingsService.getFieldsProps();
      const fieldName = Object.keys(fieldsProps)[0];
      const target = fieldName != null ? _formulas_models_formula_models__WEBPACK_IMPORTED_MODULE_7__.FormulaTargets.Value : null;
      const newState = {
        ...oldState,
        entityGuid,
        fieldName,
        target
      };
      this.formulaDesignerService.setDesignerState(newState);
    }
    const designerState$ = this.formulaDesignerService.getDesignerState$();
    const options$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([designerState$, this.formulaDesignerService.getFormulas$()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([designer, formulas]) => {
      const entityOptions = this.formBuilderRefs.map(formBuilderRef => {
        const entity = {
          entityGuid: formBuilderRef.entityGuid,
          hasFormula: formulas.some(f => f.entityGuid === formBuilderRef.entityGuid),
          label: formBuilderRef.fieldsSettingsService.getContentTypeSettings()._itemTitle
        };
        return entity;
      });
      const fieldOptions = [];
      if (designer.entityGuid != null) {
        const selectedItem = this.formBuilderRefs.find(i => i.entityGuid === designer.entityGuid);
        const fieldsProps = selectedItem.fieldsSettingsService.getFieldsProps();
        for (const fieldName of Object.keys(fieldsProps)) {
          const field = {
            fieldName,
            hasFormula: formulas.some(f => f.entityGuid === designer.entityGuid && f.fieldName === fieldName),
            label: fieldName
          };
          fieldOptions.push(field);
        }
      }
      const targetOptions = [];
      if (designer.entityGuid != null && designer.fieldName != null) {
        // default targets
        for (const target of Object.values(_formulas_models_formula_models__WEBPACK_IMPORTED_MODULE_7__.FormulaDefaultTargets)) {
          const targetOption = {
            hasFormula: formulas.some(f => f.entityGuid === designer.entityGuid && f.fieldName === designer.fieldName && f.target === target),
            label: target.substring(target.lastIndexOf('.') + 1),
            target
          };
          targetOptions.push(targetOption);
        }
        // optional targets
        const item = this.itemService.getItem(designer.entityGuid);
        const contentTypeId = _shared_helpers__WEBPACK_IMPORTED_MODULE_8__.InputFieldHelpers.getContentTypeId(item);
        const contentType = this.contentTypeService.getContentType(contentTypeId);
        const attribute = contentType.Attributes.find(a => a.Name === designer.fieldName);
        const inputType = attribute.InputType;
        if (_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_12__.EmptyFieldHelpers.isGroupStart(inputType)) {
          for (const target of [_formulas_models_formula_models__WEBPACK_IMPORTED_MODULE_7__.FormulaOptionalTargets.Collapsed]) {
            const targetOption = {
              hasFormula: formulas.some(f => f.entityGuid === designer.entityGuid && f.fieldName === designer.fieldName && f.target === target),
              label: target.substring(target.lastIndexOf('.') + 1),
              target: target
            };
            targetOptions.push(targetOption);
          }
        }
        if (inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__.InputTypeConstants.StringDropdown || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__.InputTypeConstants.NumberDropdown) {
          for (const target of [_formulas_models_formula_models__WEBPACK_IMPORTED_MODULE_7__.FormulaOptionalTargets.DropdownValues]) {
            const targetOption = {
              hasFormula: formulas.some(f => f.entityGuid === designer.entityGuid && f.fieldName === designer.fieldName && f.target === target),
              label: target.substring(target.lastIndexOf('.') + 1),
              target: target
            };
            targetOptions.push(targetOption);
          }
        }
        if (inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__.InputTypeConstants.EntityPicker || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__.InputTypeConstants.StringPicker || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__.InputTypeConstants.NumberPicker) {
          for (const target of Object.values(_formulas_models_formula_models__WEBPACK_IMPORTED_MODULE_7__.FormulaListItemTargets)) {
            const targetOption = {
              hasFormula: formulas.some(f => f.entityGuid === designer.entityGuid && f.fieldName === designer.fieldName && f.target === target),
              label: "List Item " + target.substring(target.lastIndexOf('.') + 1),
              target: target
            };
            targetOptions.push(targetOption);
          }
        }
        /*
        TODO: @SDV
        for all picker types
        add formulas -> Field.ListItem.Label
                        Field.ListItem.Tooltip
                        Field.ListItem.Information
                        Field.ListItem.HelpLink
                        Field.ListItem.Disabled
               Template for all new type formulas
        v2((data, context, item) => {
          return data.value;
        });
               old template for all of the rest
               run formulas upon dropdowning the picker, upon each opening
        */
        // targets for formulas
        const formulasForThisField = formulas.filter(f => f.entityGuid === designer.entityGuid && f.fieldName === designer.fieldName);
        for (const formula of formulasForThisField) {
          const formulaExists = targetOptions.some(t => t.target === formula.target);
          if (formulaExists) {
            continue;
          }
          const targetOption = {
            hasFormula: true,
            label: formula.target.substring(formula.target.lastIndexOf('.') + 1),
            target: formula.target
          };
          targetOptions.push(targetOption);
        }
        // currently selected target
        const selectedExists = targetOptions.some(t => t.target === designer.target);
        if (!selectedExists) {
          const targetOption = {
            hasFormula: formulas.some(f => f.entityGuid === designer.entityGuid && f.fieldName === designer.fieldName && f.target === designer.target),
            label: designer.target.substring(designer.target.lastIndexOf('.') + 1),
            target: designer.target
          };
          targetOptions.push(targetOption);
        }
      }
      const selectOptions = {
        entityOptions,
        fieldOptions,
        targetOptions
      };
      return selectOptions;
    }));
    const formula$ = designerState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(designer => this.formulaDesignerService.getFormula$(designer.entityGuid, designer.fieldName, designer.target, true)));
    const itemHeader$ = designerState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(designer => designer.entityGuid), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(entityGuid => this.itemService.getItemHeader$(entityGuid)));
    const dataSnippets$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([options$, formula$, itemHeader$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([options, formula, itemHeader]) => formula != null && itemHeader != null ? _formulas_helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_6__.FormulaHelpers.buildDesignerSnippetsData(formula, options.fieldOptions, itemHeader.Prefill) : []));
    const contextSnippets$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([formula$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([formula]) => formula != null ? _formulas_helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_6__.FormulaHelpers.buildDesignerSnippetsContext(formula) : []));
    const typings$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([options$, formula$, itemHeader$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([options, formula, itemHeader]) => formula != null && itemHeader != null ? _formulas_helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_6__.FormulaHelpers.buildFormulaTypings(formula, options.fieldOptions, itemHeader.Prefill) : ''));
    const result$ = designerState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(designer => this.formulaDesignerService.getFormulaResult$(designer.entityGuid, designer.fieldName, designer.target)));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([options$, formula$, dataSnippets$, contextSnippets$, typings$, designerState$]), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([result$, this.saving$, this.isDeleted$])]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([[options, formula, dataSnippets, contextSnippets, typings, designer], [result, saving, isDeleted]]) => {
      const template = Object.values(_formulas_models_formula_models__WEBPACK_IMPORTED_MODULE_7__.FormulaListItemTargets).includes(designer.target) ? _formulas_formula_constants__WEBPACK_IMPORTED_MODULE_5__.listItemFormulaNow : _formulas_formula_constants__WEBPACK_IMPORTED_MODULE_5__.defaultFormulaNow;
      const viewModel = {
        entityOptions: options.entityOptions,
        fieldOptions: options.fieldOptions,
        targetOptions: options.targetOptions,
        formula,
        designer,
        dataSnippets,
        contextSnippets,
        typings,
        template,
        result: result?.value,
        resultExists: result != null && !isDeleted,
        resultIsError: result?.isError ?? false,
        resultIsOnlyPromise: result?.isOnlyPromise ?? false,
        saving
      };
      return viewModel;
    }));
  }
  static #_ = this.ɵfac = function FormulaDesignerComponent_Factory(t) {
    return new (t || FormulaDesignerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_formulas_formula_designer_service__WEBPACK_IMPORTED_MODULE_4__.FormulaDesignerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_9__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_0__.EntitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_10__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_10__.ContentTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: FormulaDesignerComponent,
    selectors: [["app-formula-designer"]],
    inputs: {
      formBuilderRefs: "formBuilderRefs"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([_content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_0__.EntitiesService]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["menu", "matMenu"], [1, "formula-context-box"], ["color", "accent", 1, "eav-mat-form-field"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "ngModelChange", "ngModel", "disabled"], [3, "ngModel", "disabled"], ["matInput", "", 3, "ngModel", "disabled"], ["mat-icon-button", "", "tippy", "FreeText Target", 1, "eav-formula-button", 3, "click", "disabled"], [1, "spacer"], ["mat-icon-button", "", "tippy", "Help", 1, "eav-formula-button", 3, "click"], [1, "formula-box"], [1, "formula-field", 3, "ngClass"], [1, "label"], [1, "editor", 3, "valueChanged", "focused", "blurred", "filename", "value", "jsTypings", "options"], [1, "formula-snippets", "fancy-scrollbar-light", 3, "ngClass"], [1, "snippet", 3, "title"], [1, "separator"], [1, "formula-footer-box"], [1, "formula-result-box", "hide-scrollbar"], [1, "formula-actions-box"], ["mat-icon-button", "", "tippy", "Edit", 1, "eav-formula-action-button", 3, "click"], ["mat-icon-button", "", "tippy", "Menu", 1, "eav-formula-action-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "tippy", "Save", 1, "eav-formula-action-button", 3, "tippyDisabled", "disabled"], ["mat-icon-button", "", "tippy", "Run", 1, "eav-formula-action-button", 3, "click", "disabled"], [3, "ngClass"], ["matInput", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "snippet", 3, "click", "title"], [1, "result-error"], [1, "result-undefined"], ["mat-icon-button", "", "tippy", "Save", 1, "eav-formula-action-button", 3, "click", "tippyDisabled", "disabled"]],
    template: function FormulaDesignerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, FormulaDesignerComponent_Conditional_0_Template, 2, 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](0, !ctx.loadError ? 0 : -1);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__.ExtendedModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__.DefaultClassDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_14__.MonacoEditorComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.JsonPipe, _snippet_label_size_pipe__WEBPACK_IMPORTED_MODULE_13__.SnippetLabelSizePipe, projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_15__.TippyDirective],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-top: 1px solid lightgray;\n  padding-top: 8px;\n}\n\n.formula-context-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.formula-context-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.formula-context-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.has-formula[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.formula-box[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  overflow: hidden;\n}\n.formula-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  font-size: 14px;\n  width: 100%;\n}\n.formula-box[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-field[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  max-width: 200px;\n  max-height: 194px;\n  overflow: hidden auto;\n  padding-left: 2px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets.disabled[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: rgba(29, 39, 61, 0.44);\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%]:first-of-type {\n  padding-top: 0;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .snippet[_ngcontent-%COMP%]:last-of-type {\n  padding-bottom: 0;\n}\n.formula-box[_ngcontent-%COMP%]   .formula-snippets[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid rgba(29, 39, 61, 0.44);\n}\n\n.formula-footer-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  height: min-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .result-undefined[_ngcontent-%COMP%] {\n  color: red;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-result-box[_ngcontent-%COMP%]   .result-error[_ngcontent-%COMP%] {\n  color: red;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%]   .mdc-icon-button[_ngcontent-%COMP%] {\n  margin-left: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0px;\n  flex-shrink: 0;\n}\n.formula-footer-box[_ngcontent-%COMP%]   .formula-actions-box[_ngcontent-%COMP%]   .mdc-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px !important;\n}\n\n.formula-field[_ngcontent-%COMP%] {\n  padding-top: 28px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding-bottom: calc(1px + 11px);\n  position: relative;\n}\n.formula-field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(0, 0, 0, 0.6);\n  cursor: default;\n  font-size: 12px;\n  transition: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.formula-field[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%]     .monaco-editor .scroll-decoration {\n  display: none;\n}\n.formula-field[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n  padding-bottom: 11px;\n}\n.formula-field.focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #002753;\n  padding-bottom: 11px;\n}\n.formula-field.focused[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #002753;\n}\n.formula-field.error[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #b00030;\n  padding-bottom: 11px;\n}\n.formula-field.error[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #b00030;\n}\n.formula-field.disabled[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-bottom: calc(2px + 11px);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 33%, transparent 0%);\n  background-position: bottom;\n  background-size: 4px 1px;\n  background-repeat: repeat-x;\n}\n.formula-field.disabled[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.formula-field.disabled[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%]     * {\n  color: rgba(0, 0, 0, 0.38);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9mb3JtdWxhLWRlc2lnbmVyL2Zvcm11bGEtZGVzaWduZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQVVBO0VBQ0UsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFQRjtBQVNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUEo7QUFTSTtFQUNFLHNCQUFBO0FBUE47QUFXRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVRKO0FBWUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVlJO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQVZOO0FBYUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVhOO0FBYU07RUFDRSxjQUFBO0FBWFI7QUFjTTtFQUNFLGlCQUFBO0FBWlI7QUFnQkk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7QUFkTjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFoQkY7QUFrQkU7RUFHRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBbEJKO0FBb0JJO0VBRUUsZ0JBQUE7QUFuQk47QUFzQkk7RUFDRSxVQUFBO0FBcEJOO0FBdUJJO0VBQ0UsVUFBQTtBQXJCTjtBQXlCRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQXhCSjtBQTBCSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUF4Qk47QUEwQk07RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUF4QlI7O0FBZ0NBO0VBQ0UsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUE3QkY7QUErQkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUE3Qko7QUFpQ0k7RUFDRSxhQUFBO0FBL0JOO0FBbUNFO0VBQ0UsMkNBQUE7RUFDQSxvQkE1Qlk7QUFMaEI7QUFvQ0U7RUFDRSxnQ0FBQTtFQUNBLG9CQWpDWTtBQURoQjtBQW9DSTtFQUNFLGNBQUE7QUFsQ047QUFzQ0U7RUFDRSxnQ0FBQTtFQUNBLG9CQTFDWTtBQU1oQjtBQXNDSTtFQUNFLGNDNUxRO0FEd0pkO0FBd0NFO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBHQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBdENKO0FBd0NJO0VBQ0Usb0JBQUE7QUF0Q047QUF3Q007RUFDRSwwQkFBQTtBQXRDUiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL192YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5mb3JtdWxhLWNvbnRleHQtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZDpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAvLyAuZWF2LWZvcm11bGEtYnV0dG9uIHtcclxuICAvLyAgIHNjYWxlOiBjYWxjKDQvNSk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4uaGFzLWZvcm11bGEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybXVsYS1ib3gge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtdWxhLWZpZWxkIHtcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm11bGEtc25pcHBldHMge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTk0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIC5zbmlwcGV0IHtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC40NCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNuaXBwZXQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZXBhcmF0b3Ige1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC40NCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybXVsYS1mb290ZXItYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuXHJcbiAgLmZvcm11bGEtcmVzdWx0LWJveCB7XHJcbiAgICAvLyBmbGV4OiAwIDEgYXV0bztcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIC8vIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXN1bHQtdW5kZWZpbmVkIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAucmVzdWx0LWVycm9yIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtdWxhLWFjdGlvbnMtYm94IHtcclxuICAgIC8vIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgICAubWRjLWljb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kcGFkZGluZ0JvdHRvbTogMTFweDtcclxuXHJcbi5mb3JtdWxhLWZpZWxkIHtcclxuICBwYWRkaW5nLXRvcDogMjhweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDFweCArICN7JHBhZGRpbmdCb3R0b219KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmVkaXRvciB7XHJcbiAgICA6Om5nLWRlZXAgLm1vbmFjby1lZGl0b3IgLnNjcm9sbC1kZWNvcmF0aW9uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ0JvdHRvbTtcclxuICB9XHJcblxyXG4gICYuZm9jdXNlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMjc1MztcclxuICAgIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ0JvdHRvbTtcclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBjb2xvcjogIzAwMjc1MztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZXJyb3Ige1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRlcnJvci1jb2xvcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ0JvdHRvbTtcclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBjb2xvcjogJGVycm9yLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMnB4ICsgI3skcGFkZGluZ0JvdHRvbX0pO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuMikgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNHB4IDFweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHJcbiAgICAuZWRpdG9yIHtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICAgICA6Om5nLWRlZXAgKiB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICNmZmZmZmY7XHJcbiRhY2NlbnQtY29sb3I6ICMwMDI3NTM7XHJcbiRibHVlLWFjY2VudC1jb2xvcjogIzAwODdmNDtcclxuJGVycm9yLWNvbG9yOiAjYjAwMDMwO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLXdpZHRoOiAxMDB2dztcclxuJGVkaXQtdWktZGlhbG9nLW1heC13aWR0aDogODAwcHg7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctdG9wLXBhZGRpbmc6IDI0cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodDogNTJweDtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy10b3AtcGFkZGluZ30gLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0gLSAjeyRlZGl0LXVpLWRpYWxvZy10b3AtcGFkZGluZ30pO1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC1tb2JpbGU6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0pO1xyXG5cclxuLy8gRGVidWdcclxuJGVkaXQtdWktZGlhbG9nLWRlYnVnLW1heC1oZWlnaHQ6IDUycHg7XHJcbiRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1oZWlnaHQ6IDMwMHB4O1xyXG4kZGVidWctaW5mby1jb250YWluZXItbWFyZ2luOiAxNnB4O1xyXG4kZGVidWctaW5mby1jb250YWluZXItdG90YWwtaGVpZ2h0OiBjYWxjKCN7JGRlYnVnLWluZm8tY29udGFpbmVyLWhlaWdodH0gKyAjeyRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1tYXJnaW59KTtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtd2l0aC1kZWJ1ZzogY2FsYygxMDB2aCAtICN7JGVkaXQtdWktZGlhbG9nLXRvcC1wYWRkaW5nfSAtICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGVkaXQtdWktZGlhbG9nLWRlYnVnLW1heC1oZWlnaHR9IC0gI3skZWRpdC11aS1kaWFsb2ctdG9wLXBhZGRpbmd9KTtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtd2l0aC1kZWJ1Zy1tb2JpbGU6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0gLSAjeyRlZGl0LXVpLWRpYWxvZy1kZWJ1Zy1tYXgtaGVpZ2h0fSk7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1czo4cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzLW1vYmlsZTowcHg7XHJcbiRlZGl0LXVpLWlucHV0LWJvcmRlci1yYWRpdXM6NHB4O1xyXG5cclxuJHNhdmUtYnV0dG9uLWhlaWdodDo0OHB4O1xyXG4kc2F2ZS1idXR0b24taGVpZ2h0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdDo0OHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkOjIwMHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQtbW9iaWxlOjE3MHB4O1xyXG5cclxuLy8gVGhlIG1heC1oZWlnaHQgc2hvdWxkIGFsc28gYmUgc2V0IGluIHRoZSBleHBhbmRhYmxlIHdyYXBwZXIgYW5pbWF0aW9uc1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQ6IGNhbGMoI3skZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodH0gKyAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0pO1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQtbW9iaWxlOiBjYWxjKCN7JGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtbW9iaWxlfSArICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSk7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcjogI0VGRjBGMjtcclxuXHJcbiRlZGl0VUktZm9yZWdyb3VuZC1jb2xvcjogIzFEMjczRDtcclxuJGVkaXRVSS1kaXNhYmxlZC1iYWNrZ3JvdW5kOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC4wNCk7XHJcbiRlZGl0VUktbGFiZWwtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjI0KTtcclxuJGVkaXRVSS1maWVsZC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG5cclxuJGVkaXQtdWktc2VsZWN0ZWQtb3B0aW9uOiByZ2JhKCMwMDAwMDAsIDAuMDQpO1xyXG5cclxuLy8gRmllbGQgYm9yZGVyc1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1pbml0aWFsOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDpyZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWludmFsaWQ6ICRlcnJvci1jb2xvcjtcclxuXHJcbi8vIERyb3B6b25lXHJcbiRkcm9wem9uZS1iYWNrZ3JvdW5kOiByZ2JhKCRhY2NlbnQtY29sb3IsIDAuNDQpO1xyXG4kZHJvcHpvbmUtYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC44OCk7XHJcblxyXG4vLyBoZWxwZXIgdGV4dFxyXG4kaGVscGVyLXRleHQtcGFkZGluZzogMC41NDE2NjY2N2VtIDAgMTNweCAwO1xyXG4kaGVscGVyLXRleHQtcGFkZGluZy0tbm8taGludDogMC41NDE2NjY2N2VtIDAgMTNweCAwO1xyXG4kaGVscGVyLXRleHQtcGFkZGluZy0tbGFzdDogMC41NDE2NjY2N2VtIDAgNXB4IDA7XHJcbiRoZWxwZXItdGV4dC1wYWRkaW5nLS1sYXN0LS1uby1oaW50OiAwLjU0MTY2NjY3ZW0gMCA1cHggMDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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
};

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
  static #_ = this.ɵfac = function SnippetLabelSizePipe_Factory(t) {
    return new (t || SnippetLabelSizePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "snippetLabelSize",
    type: SnippetLabelSizePipe,
    pure: true,
    standalone: true
  });
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models */ 6951);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services */ 22453);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 52913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);








const _c0 = (a0, a1) => ({
  "log-error": a0,
  "log-warn": a1
});
function LogsDumpComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logs are empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LogsDumpComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LogsDumpComponent_Conditional_0_For_3_Template_span_click_6_listener() {
      const log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.logToConsole(log_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " console ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c0, log_r2.severity === ctx_r2.LogSeverities.Error, log_r2.severity === ctx_r2.LogSeverities.Warn));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 3, log_r2.time, "HH:mm:ss"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](log_r2.label);
  }
}
function LogsDumpComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LogsDumpComponent_Conditional_0_Conditional_1_Template, 2, 0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](2, LogsDumpComponent_Conditional_0_For_3_Template, 8, 9, "div", 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, vm_r4.logs.length === 0 ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](vm_r4.logs);
  }
}
class LogsDumpComponent {
  constructor(loggingService) {
    this.loggingService = loggingService;
    this.LogSeverities = _shared_models__WEBPACK_IMPORTED_MODULE_0__.LogSeverities;
  }
  ngOnInit() {
    const logs$ = this.loggingService.getLogs$();
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([logs$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(([logs]) => {
      const viewModel = {
        logs
      };
      return viewModel;
    }));
  }
  logToConsole(log) {
    switch (log.severity) {
      case _shared_models__WEBPACK_IMPORTED_MODULE_0__.LogSeverities.Log:
        console.log(log.label, log.error);
        break;
      case _shared_models__WEBPACK_IMPORTED_MODULE_0__.LogSeverities.Warn:
        console.warn(log.label, log.error);
        break;
      case _shared_models__WEBPACK_IMPORTED_MODULE_0__.LogSeverities.Error:
        console.error(log.label, log.error);
        break;
    }
  }
  static #_ = this.ɵfac = function LogsDumpComponent_Factory(t) {
    return new (t || LogsDumpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__.LoggingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LogsDumpComponent,
    selectors: [["app-logs-dump"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "logs-box", "fancy-scrollbar-light"], [1, "log-entry", 3, "ngClass"], [1, "log-entry-part", "log-entry-time"], [1, "log-entry-part", "log-entry-label"], ["tippy", "Log to console", 1, "log-entry-part", "log-entry-show", 3, "click"]],
    template: function LogsDumpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LogsDumpComponent_Conditional_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.ExtendedModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.logs-box[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: auto;\n  font-size: 14px;\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid rgb(240, 240, 240);\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.log-entry[_ngcontent-%COMP%]   .log-entry-part[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.log-error[_ngcontent-%COMP%] {\n  color: rgb(255, 0, 0);\n  border-color: rgb(255, 214, 214);\n  background-color: rgb(255, 240, 240);\n}\n\n.log-warn[_ngcontent-%COMP%] {\n  color: rgb(92, 60, 0);\n  border-color: rgb(255, 245, 194);\n  background-color: rgb(255, 251, 229);\n}\n\n.log-entry-time[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.log-entry-label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.log-entry-show[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #06599a;\n  font-size: 12px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2Zvb3Rlci9sb2dzLWR1bXAvbG9ncy1kdW1wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNFLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy90aGVtZS9tYXRlcmlhbC1jb2xvcnNcIjtcclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxvZ3MtYm94IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5sb2ctZW50cnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG5cclxuICAubG9nLWVudHJ5LXBhcnQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxvZy1lcnJvciB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjE0LCAyMTQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjQwKTtcclxufVxyXG5cclxuLmxvZy13YXJuIHtcclxuICBjb2xvcjogcmdiKDkyLCA2MCwgMCk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNDUsIDE5NCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjUxLCAyMjkpO1xyXG59XHJcblxyXG4ubG9nLWVudHJ5LXRpbWUge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4ubG9nLWVudHJ5LWxhYmVsIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmxvZy1lbnRyeS1zaG93IHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBjb2xvcjogbWFwX2dldCgkbWF0LWVhdi1pdGVtLWRpYWxvZy1zZWNvbmRhcnksIDMwMCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_edit_dialog_footer_edit-dialog-footer_component_ts.js.map