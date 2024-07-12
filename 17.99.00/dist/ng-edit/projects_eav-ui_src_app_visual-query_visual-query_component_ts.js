"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_visual-query_visual-query_component_ts"],{

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

/***/ 23840:
/*!*******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/mousedown-stop-propagation.directive.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MousedownStopPropagationDirective: () => (/* binding */ MousedownStopPropagationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class MousedownStopPropagationDirective {
  onMousedown(event) {
    event.stopPropagation();
  }
  static #_ = this.ɵfac = function MousedownStopPropagationDirective_Factory(t) {
    return new (t || MousedownStopPropagationDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MousedownStopPropagationDirective,
    selectors: [["", "appMousedownStopPropagation", ""]],
    hostBindings: function MousedownStopPropagationDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MousedownStopPropagationDirective_mousedown_HostBindingHandler($event) {
          return ctx.onMousedown($event);
        });
      }
    },
    standalone: true
  });
}

/***/ }),

/***/ 58323:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/add-explorer/add-explorer.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddExplorerComponent: () => (/* binding */ AddExplorerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _plumb_editor_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plumb-editor/plumb-editor.helpers */ 19727);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/visual-query.service */ 2628);
/* harmony import */ var _add_explorer_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-explorer.helpers */ 34697);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/helpers/array.helpers */ 4981);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);














function AddExplorerComponent_Conditional_0_For_6_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddExplorerComponent_Conditional_0_For_6_Conditional_5_For_2_Template_div_click_0_listener() {
      const dataSource_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.addDataSource(dataSource_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataSource_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tippy", dataSource_r6.UiHint || dataSource_r6.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dataSource_r6.Icon || ctx_r1.guiTypes.Unknown.Icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dataSource_r6.Name);
  }
}
function AddExplorerComponent_Conditional_0_For_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](1, AddExplorerComponent_Conditional_0_For_6_Conditional_5_For_2_Template, 5, 3, "div", 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcomponentInstance"]().trackDataSources, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](group_r4.value);
  }
}
function AddExplorerComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddExplorerComponent_Conditional_0_For_6_Template_div_click_0_listener() {
      const group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleItem(group_r4.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AddExplorerComponent_Conditional_0_For_6_Conditional_5_Template, 3, 0, "div", 5);
  }
  if (rf & 2) {
    let tmp_14_0;
    const group_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tippy", ctx_r1.guiTypes[group_r4.key].UiHint || group_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.guiTypes[group_r4.key].Icon || ctx_r1.guiTypes.Unknown.Icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_14_0 = (tmp_14_0 = ctx_r1.guiTypes[group_r4.key].Label) !== null && tmp_14_0 !== undefined ? tmp_14_0 : ctx_r1.guiTypes[group_r4.key].Name) !== null && tmp_14_0 !== undefined ? tmp_14_0 : group_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](5, ctx_r1.toggledItems.includes(group_r4.key) ? 5 : -1);
  }
}
function AddExplorerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Show Advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-slide-toggle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddExplorerComponent_Conditional_0_Template_mat_slide_toggle_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleDifficulty($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](5, AddExplorerComponent_Conditional_0_For_6_Template, 6, 4, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcomponentInstance"]().trackGroups, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 0, ctx.sorted));
  }
}
class AddExplorerComponent {
  constructor(visualQueryService) {
    this.visualQueryService = visualQueryService;
    this.toggledItems = [];
    this.guiTypes = _plumb_editor_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_1__.guiTypes;
    this.difficulties = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.pipelineDesigner.dataSourceDifficulties;
    this.difficulty$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(this.difficulties.default);
  }
  ngOnInit() {
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.visualQueryService.dataSources$, this.difficulty$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([dataSources, difficulty]) => (0,_add_explorer_helpers__WEBPACK_IMPORTED_MODULE_3__.filterAndSortDataSources)(dataSources, difficulty)))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([sorted]) => ({
      sorted
    })));
  }
  ngOnDestroy() {
    this.difficulty$.complete();
  }
  toggleDifficulty(event) {
    const difficulty = event.checked ? this.difficulties.advanced : this.difficulties.default;
    this.difficulty$.next(difficulty);
  }
  addDataSource(dataSource) {
    this.visualQueryService.addDataSource(dataSource);
  }
  toggleItem(item) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_4__.ArrayHelpers.toggleInArray(item, this.toggledItems);
  }
  trackGroups(index, type) {
    return type.key;
  }
  trackDataSources(index, dataSource) {
    return dataSource.PartAssemblyAndType;
  }
  static #_ = this.ɵfac = function AddExplorerComponent_Factory(t) {
    return new (t || AddExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_2__.VisualQueryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AddExplorerComponent,
    selectors: [["app-add-explorer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "editor-active-explorer", "fancy-scrollbar-dark"], [1, "eav-show-advanced"], [1, "eav-slide-toggle-label"], ["color", "primary", 3, "change"], ["tippyShowDelay", "750", 1, "collapsible", 3, "click", "tippy"], [1, "list"], ["tippyShowDelay", "750", 1, "list-item", 3, "tippy"], ["tippyShowDelay", "750", 1, "list-item", 3, "click", "tippy"]],
    template: function AddExplorerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AddExplorerComponent_Conditional_0_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.KeyValuePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective],
    styles: [".mat-mdc-slide-toggle[_ngcontent-%COMP%] {\n  margin: 6px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.collapsible[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 3px 0;\n}\n.collapsible[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.collapsible[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  margin-left: 8px;\n  margin-right: 4px;\n}\n\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 4px 0 4px 24px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 4px;\n}\n\n.eav-show-advanced[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9hZGQtZXhwbG9yZXIvYWRkLWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsaUNBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxpQ0FBQTtBQURKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBTUE7RUFDRSxnQkFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZGMtc2xpZGUtdG9nZ2xlIHtcclxuICBtYXJnaW46IDZweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQ1LCA0Nik7XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCAubGlzdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweCAwIDRweCAyNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQ1LCA0Nik7XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LXNob3ctYWR2YW5jZWQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 34697:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/add-explorer/add-explorer.helpers.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterAndSortDataSources: () => (/* binding */ filterAndSortDataSources)
/* harmony export */ });
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/cloneDeep */ 85237);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);


function filterAndSortDataSources(dataSources, maxDifficulty) {
  if (!dataSources) {
    return;
  }
  const cloned = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSources);
  const filtered = cloned.filter(dataSource => dataSource.Difficulty <= maxDifficulty && dataSource.PartAssemblyAndType !== _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.pipelineDesigner.outDataSource.PartAssemblyAndType);
  filtered.sort((a, b) => a.Name.toLocaleLowerCase().localeCompare(b.Name.toLocaleLowerCase()));
  const sorted = {};
  for (const dataSource of filtered) {
    const type = dataSource.PrimaryType;
    if (sorted[type]) {
      sorted[type].push(dataSource);
    } else {
      sorted[type] = [dataSource];
    }
  }
  return sorted;
}

/***/ }),

/***/ 70090:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/plumb-editor/plumb-editor.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlumbEditorComponent: () => (/* binding */ PlumbEditorComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_load_scripts_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/load-scripts.helper */ 33518);
/* harmony import */ var _services_query_definition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/query-definition.service */ 55871);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/visual-query.service */ 2628);
/* harmony import */ var _plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plumb-editor.helpers */ 19727);
/* harmony import */ var _plumber_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plumber.helper */ 59117);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/helpers/json.helpers */ 4038);
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _shared_directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/directives/mousedown-stop-propagation.directive */ 23840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
// tslint:disable-next-line:max-line-length




















const _c0 = ["domRoot"];
const _c1 = ["domDataSource"];
const _c2 = (a0, a1, a2) => ({
  "top": a0,
  "left": a1,
  "min-width": a2
});
const _c3 = a0 => ({
  "show-details": a0
});
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_5_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.configureDataSource(dataSource_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_6_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.openHelp(vm_r6.typeInfos[dataSource_r3.EntityGuid].HelpLink));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " help_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_8_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.remove(dataSource_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_21_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 21)(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", config_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](config_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", config_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](config_r8.value);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "hr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](2, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_21_For_3_Template, 5, 4, "tr", 21, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](vm_r6.dataSourceConfigs[dataSource_r3.EntityId]);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 14);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 15);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3, 1)(2, "div", 4)(3, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_5_Template, 2, 0, "mat-icon", 6)(6, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_6_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_8_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Template_div_click_9_listener() {
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](vm_r6.allowEdit && ctx_r3.editName(dataSource_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Template_div_click_15_listener() {
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](vm_r6.allowEdit && ctx_r3.editDescription(dataSource_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_21_Template, 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_24_Template, 1, 0, "div", 14)(25, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_25_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataSource_r3 = ctx.$implicit;
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx_r3.dataSrcIdPrefix + dataSource_r3.EntityGuid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](15, _c2, dataSource_r3.VisualDesignerData.Top + "px", dataSource_r3.VisualDesignerData.Left + "px", dataSource_r3.VisualDesignerData.Width ? dataSource_r3.VisualDesignerData.Width + "px" : null))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c3, vm_r6.showDataSourceDetails && (vm_r6.dataSourceConfigs[dataSource_r3.EntityId] == null ? null : vm_r6.dataSourceConfigs[dataSource_r3.EntityId].length)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", vm_r6.typeInfos[dataSource_r3.EntityGuid].UiHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", vm_r6.typeInfos[dataSource_r3.EntityGuid].Icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](5, vm_r6.allowEdit && vm_r6.typeInfos[dataSource_r3.EntityGuid].EnableConfig ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](6, vm_r6.typeInfos[dataSource_r3.EntityGuid].HelpLink ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](8, vm_r6.allowEdit && !ctx_r3.isOutDataSource(dataSource_r3) ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](dataSource_r3.Name || "(no name)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](dataSource_r3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](21, vm_r6.showDataSourceDetails && (vm_r6.dataSourceConfigs[dataSource_r3.EntityId] == null ? null : vm_r6.dataSourceConfigs[dataSource_r3.EntityId].length) ? 21 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", dataSource_r3.PartAssemblyAndType);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Type: ", ctx_r3.getTypeName(dataSource_r3.PartAssemblyAndType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](24, vm_r6.allowEdit && vm_r6.typeInfos[dataSource_r3.EntityGuid].DynamicOut ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](25, vm_r6.allowEdit && vm_r6.typeInfos[dataSource_r3.EntityGuid].DynamicIn ? 25 : -1);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](0, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Template, 26, 21, "div", 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](vm_r6.pipelineDataSources);
  }
}
function PlumbEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, PlumbEditorComponent_Conditional_0_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](2, !ctx_r3.hardReset ? 2 : -1);
  }
}
const jsPlumbUrl = 'https://cdnjs.cloudflare.com/ajax/libs/jsPlumb/2.14.5/js/jsplumb.min.js';
class PlumbEditorComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(visualQueryService, queryDefinitionService, changeDetectorRef, dialog, viewContainerRef) {
    super();
    this.visualQueryService = visualQueryService;
    this.queryDefinitionService = queryDefinitionService;
    this.changeDetectorRef = changeDetectorRef;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.dataSrcIdPrefix = _plumber_helper__WEBPACK_IMPORTED_MODULE_6__.dataSrcIdPrefix;
    this.hardReset = false;
    this.scriptLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(false);
  }
  ngOnInit() {
    (0,_shared_helpers_load_scripts_helper__WEBPACK_IMPORTED_MODULE_2__.loadScripts)([{
      test: 'jsPlumb',
      src: jsPlumbUrl
    }], () => {
      this.scriptLoaded$.next(true);
    });
    this.subscriptions.add(this.visualQueryService.putEntityCountOnConnections$.subscribe(result => {
      this.plumber.putEntityCountOnConnections(result);
    }));
    const pipelineDesignerData$ = this.visualQueryService.pipelineModel$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(pipelineModel => _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_7__.JsonHelpers.tryParse(pipelineModel?.Pipeline.VisualDesignerData) ?? {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_8__.RxHelpers.objectsEqual));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.visualQueryService.pipelineModel$, this.visualQueryService.dataSources$, pipelineDesignerData$, this.visualQueryService.dataSourceConfigs$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([pipelineModel, dataSources, pipelineDesignerData, dataSourceConfigs]) => {
      if (pipelineModel == null || dataSources == null) {
        return;
      }
      // workaround for jsPlumb not working with dom elements which it initialized on previously.
      // This wipes dom entirely and gives us new elements
      this.hardReset = true;
      this.changeDetectorRef.detectChanges();
      this.hardReset = false;
      const viewModel = {
        pipelineDataSources: pipelineModel.DataSources,
        typeInfos: (0,_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_5__.calculateTypeInfos)(pipelineModel.DataSources, dataSources),
        allowEdit: pipelineModel.Pipeline.AllowEdit,
        showDataSourceDetails: pipelineDesignerData.ShowDataSourceDetails ?? false,
        dataSourceConfigs
      };
      return viewModel;
    }));
  }
  ngAfterViewInit() {
    // https://stackoverflow.com/questions/37087864/execute-a-function-when-ngfor-finished-in-angular-2/37088348#37088348
    const domDataSourcesLoaded$ = this.domDataSourcesRef.changes.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(() => true));
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.scriptLoaded$, domDataSourcesLoaded$]).subscribe(([scriptLoaded, domDataSourcesLoaded]) => {
      if (!scriptLoaded || !domDataSourcesLoaded) {
        return;
      }
      this.plumber?.destroy();
      this.plumber = new _plumber_helper__WEBPACK_IMPORTED_MODULE_6__.Plumber(this.domRootRef.nativeElement, this.visualQueryService.pipelineModel$.value, this.visualQueryService.dataSources$.value, this.onConnectionsChanged.bind(this), this.onDragend.bind(this), this.onDebugStream.bind(this), this.dialog, this.viewContainerRef, this.changeDetectorRef);
    }));
  }
  ngOnDestroy() {
    this.plumber?.destroy();
    this.scriptLoaded$.complete();
    super.ngOnDestroy();
  }
  onConnectionsChanged() {
    const connections = this.plumber.getAllConnections();
    const streamsOut = this.plumber.getStreamsOut();
    this.visualQueryService.changeConnections(connections, streamsOut);
  }
  onDragend(pipelineDataSourceGuid, position) {
    this.visualQueryService.changeDataSourcePosition(pipelineDataSourceGuid, position);
  }
  onDebugStream(stream) {
    this.visualQueryService.debugStream(stream);
  }
  configureDataSource(dataSource) {
    // ensure dataSource entity is saved
    if (dataSource.EntityGuid.includes('unsaved')) {
      this.visualQueryService.saveAndRun(true, false);
    } else {
      this.visualQueryService.editDataSource(dataSource);
    }
  }
  getTypeName(partAssemblyAndType) {
    const dataSource = this.visualQueryService.dataSources$.value.find(ds => ds.PartAssemblyAndType === partAssemblyAndType);
    return this.queryDefinitionService.typeNameFilter(dataSource?.TypeNameForUi || partAssemblyAndType, 'className');
  }
  isOutDataSource(pipelineDataSource) {
    return pipelineDataSource.PartAssemblyAndType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.pipelineDesigner.outDataSource.PartAssemblyAndType;
  }
  remove(pipelineDataSource) {
    if (!confirm(`Delete ${pipelineDataSource.Name} data source?`)) {
      return;
    }
    this.plumber.removeEndpointsOnDataSource(pipelineDataSource.EntityGuid);
    const connections = this.plumber.getAllConnections();
    const streamsOut = this.plumber.getStreamsOut();
    this.visualQueryService.removeDataSource(pipelineDataSource.EntityGuid, connections, streamsOut);
  }
  openHelp(url) {
    window.open(url, '_blank');
  }
  editName(dataSource) {
    const newName = prompt('Rename data source', dataSource.Name)?.trim();
    if (newName == null || newName === '') {
      return;
    }
    this.visualQueryService.renameDataSource(dataSource.EntityGuid, newName);
  }
  editDescription(dataSource) {
    const newDescription = prompt('Edit description', dataSource.Description)?.trim();
    if (newDescription == null) {
      return;
    }
    this.visualQueryService.changeDataSourceDescription(dataSource.EntityGuid, newDescription);
  }
  static #_ = this.ɵfac = function PlumbEditorComponent_Factory(t) {
    return new (t || PlumbEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_4__.VisualQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_query_definition_service__WEBPACK_IMPORTED_MODULE_3__.QueryDefinitionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: PlumbEditorComponent,
    selectors: [["app-plumb-editor"]],
    viewQuery: function PlumbEditorComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.domRootRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.domDataSourcesRef = _t);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["domRoot", ""], ["domDataSource", ""], ["id", "pipeline-root"], [1, "dataSource", 3, "id", "ngStyle", "ngClass"], [1, "actions", "left"], [1, "type-info", 3, "title"], ["title", "Configure data source", "appMousedownStopPropagation", "", 1, "configure"], ["title", "Help for this data source", "appMousedownStopPropagation", "", 1, "help"], [1, "actions", "right"], ["title", "Delete", "appMousedownStopPropagation", "", 1, "delete"], ["title", "Click to edit name", "appMousedownStopPropagation", "", 1, "name", 3, "click"], [1, "show-hover-inline"], ["title", "Click to edit description", "appMousedownStopPropagation", "", 1, "description", 3, "click"], [1, "typename", 3, "title"], ["title", "Drag a new Out-Connection", 1, "add-endpoint", "sourceEndpoint", "dynamic"], ["title", "This data source supports multiple In-Connections", 1, "many-in", "targetEndpoint", "dynamic"], ["title", "Configure data source", "appMousedownStopPropagation", "", 1, "configure", 3, "click"], ["title", "Help for this data source", "appMousedownStopPropagation", "", 1, "help", 3, "click"], ["title", "Delete", "appMousedownStopPropagation", "", 1, "delete", 3, "click"], [2, "margin", "0"], [1, "configs"], [1, "config"], [1, "config-name", 3, "title"], [1, "config-value", 3, "title"]],
    template: function PlumbEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, PlumbEditorComponent_Conditional_0_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _shared_directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_9__.MousedownStopPropagationDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", "[_nghost-%COMP%] { display: block; width: 100%; height: 100%; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9wbHVtYi1lZGl0b3IvcGx1bWItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 19727:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/plumb-editor/plumb-editor.helpers.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTypeInfos: () => (/* binding */ calculateTypeInfos),
/* harmony export */   guiTypes: () => (/* binding */ guiTypes)
/* harmony export */ });
const guiTypes = {
  App: {
    Name: 'App',
    Label: 'App DataSources',
    Icon: 'star',
    UiHint: 'DataSources from the current App'
  },
  Cache: {
    Name: 'Cache',
    Icon: 'history',
    UiHint: 'Caching of data'
  },
  Filter: {
    Name: 'Filter',
    Icon: 'filter_list',
    UiHint: 'Filter data - usually returning less items than came in'
  },
  Logic: {
    Name: 'Logic',
    Icon: 'share',
    UiHint: 'Logic operations - usually choosing between different streams'
  },
  Lookup: {
    Name: 'Lookup',
    Icon: 'search',
    UiHint: 'Lookup operation - usually looking for other data based on a criteria'
  },
  Modify: {
    Name: 'Modify',
    Icon: 'edit_attributes',
    UiHint: 'Modify data - usually changing, adding or removing values'
  },
  Security: {
    Name: 'Security',
    Icon: 'account_circle',
    UiHint: 'Security - usually limit what the user sees based on his identity'
  },
  Sort: {
    Name: 'Sort',
    Icon: 'sort',
    UiHint: 'Sort the items'
  },
  Source: {
    Name: 'Source',
    Icon: 'cloud_upload',
    UiHint: 'Source of new data - usually SQL, CSV or similar'
  },
  Target: {
    Name: 'Target',
    Icon: 'adjust',
    UiHint: 'Target - usually just a destination of data'
  },
  Unknown: {
    Name: 'Unknown',
    Icon: 'fiber_manual_record',
    UiHint: 'Unknown type'
  },
  Debug: {
    Name: 'Debug',
    Icon: 'bug_report',
    UiHint: 'Debugging Tools'
  },
  System: {
    Name: 'System',
    Icon: 'military_tech',
    UiHint: 'System Data'
  }
};
function calculateTypeInfos(pipelineDataSources, dataSources) {
  const typeInfos = {};
  for (const pipelineDataSource of pipelineDataSources) {
    let typeInfo;
    const dataSource = dataSources.find(ds => ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
    if (dataSource) {
      typeInfo = {
        ...(dataSource.PrimaryType ? guiTypes[dataSource.PrimaryType] : guiTypes.Unknown)
      };
      if (dataSource.Icon != null) {
        typeInfo.Icon = dataSource.Icon;
      }
      if (dataSource.DynamicIn != null) {
        typeInfo.DynamicIn = dataSource.DynamicIn;
      }
      if (dataSource.DynamicOut != null) {
        typeInfo.DynamicOut = dataSource.DynamicOut;
      }
      if (dataSource.HelpLink != null) {
        typeInfo.HelpLink = dataSource.HelpLink;
      }
      if (dataSource.EnableConfig != null) {
        typeInfo.EnableConfig = dataSource.EnableConfig;
      }
      if (dataSource.UiHint != null) {
        typeInfo.UiHint = dataSource.UiHint;
      }
    }
    if (!typeInfo) {
      typeInfo = {
        ...guiTypes.Unknown
      };
    }
    typeInfos[pipelineDataSource.EntityGuid] = typeInfo;
  }
  return typeInfos;
}

/***/ }),

/***/ 59117:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/plumb-editor/plumber.helper.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plumber: () => (/* binding */ Plumber),
/* harmony export */   dataSrcIdPrefix: () => (/* binding */ dataSrcIdPrefix)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _rename_stream_rename_stream_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rename-stream/rename-stream.component */ 12710);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/logging/eav-logger */ 6812);



const logThis = true;
const nameOfThis = 'Plumber';
const dataSrcIdPrefix = 'dataSource_';
const endPointsWhereWeRotate = 3;
class Plumber {
  constructor(jsPlumbRoot, pipelineModel, dataSources, onConnectionsChanged, onDragend, onDebugStream, dialog, viewContainerRef, changeDetectorRef) {
    this.jsPlumbRoot = jsPlumbRoot;
    this.pipelineModel = pipelineModel;
    this.dataSources = dataSources;
    this.onConnectionsChanged = onConnectionsChanged;
    this.onDragend = onDragend;
    this.onDebugStream = onDebugStream;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.log = new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__.EavLogger(nameOfThis, logThis);
    this.lineCount = 0;
    this.linePaintDefault = {
      stroke: '#61B7CF',
      strokeWidth: 4,
      outlineStroke: 'white',
      outlineWidth: 2
    };
    this.lineColors = ['#009688', '#00bcd4', '#3f51b5', '#9c27b0', '#e91e63', '#db4437', '#ff9800', '#60a917', '#60a917', '#008a00', '#00aba9', '#1ba1e2', '#0050ef', '#6a00ff', '#aa00ff', '#f472d0', '#d80073', '#a20025', '#e51400', '#fa6800', '#f0a30a', '#e3c800', '#825a2c', '#6d8764', '#647687', '#76608a', '#a0522d'];
    this.maxCols = this.lineColors.length - 1;
    this.uuidColorMap = {};
    this.bulkDelete = false;
    this.instance = window.jsPlumb.getInstance(this.getInstanceDefaults(this.jsPlumbRoot));
    this.instance.batch(() => {
      this.initDomDataSources();
      this.initWirings();
      this.bindEvents();
    });
    // spm NOTE: repaint after initial paint fixes:
    // Error: <svg> attribute width: Expected length, "-Infinity".
    this.instance.repaintEverything();
  }
  destroy() {
    this.dialogRef?.close();
    this.instance.reset();
    this.instance.unbindContainer();
  }
  removeEndpointsOnDataSource(pipelineDataSourceGuid) {
    const elementId = dataSrcIdPrefix + pipelineDataSourceGuid;
    this.bulkDelete = true;
    this.instance.batch(() => {
      this.instance.selectEndpoints({
        element: elementId
      }).delete();
    });
    this.bulkDelete = false;
  }
  getAllConnections() {
    const connectionInfos = this.instance.getAllConnections().map(connection => {
      const wire = {
        From: connection.sourceId.replace(dataSrcIdPrefix, ''),
        Out: connection.endpoints[0].getOverlay('endpointLabel').label,
        To: connection.targetId.replace(dataSrcIdPrefix, ''),
        In: connection.endpoints[1].getOverlay('endpointLabel').label
      };
      return wire;
    });
    return connectionInfos;
  }
  getStreamsOut() {
    const streamsOut = [];
    this.instance.selectEndpoints({
      target: dataSrcIdPrefix + 'Out'
    }).each(endpoint => {
      streamsOut.push(endpoint.getOverlay('endpointLabel').label);
    });
    const streamsOutStr = streamsOut.join(',');
    return streamsOutStr;
  }
  putEntityCountOnConnections(result) {
    result.Streams?.forEach(stream => {
      const sourceElementId = dataSrcIdPrefix + stream.Source;
      const outTargets = ['00000000-0000-0000-0000-000000000000', this.pipelineModel.Pipeline.EntityGuid];
      const targetElementId = outTargets.includes(stream.Target) ? dataSrcIdPrefix + 'Out' : dataSrcIdPrefix + stream.Target;
      const fromUuid = sourceElementId + '_out_' + stream.SourceOut;
      const toUuid = targetElementId + '_in_' + stream.TargetIn;
      const sEndp = this.instance.getEndpoint(fromUuid);
      sEndp?.connections?.filter(connection => connection.endpoints[1].getUuid() === toUuid)?.forEach(connection => {
        const label = !stream.Error ? stream.Count.toString() : '';
        const cssClass = 'streamEntitiesCount ' + (!stream.Error ? '' : 'streamEntitiesError');
        connection.setLabel({
          label,
          cssClass,
          events: {
            click: overlay => {
              if (!this.pipelineModel.Pipeline.AllowEdit) return;
              this.onDebugStream(stream);
            }
          }
        });
      });
    });
  }
  nextLinePaintStyle(uuid) {
    return this.uuidColorMap[uuid] || (this.uuidColorMap[uuid] = Object.assign({}, this.linePaintDefault, {
      stroke: this.lineColors[this.lineCount++ % this.maxCols]
    }));
  }
  getInstanceDefaults(container) {
    const defaults = {
      Container: container,
      Connector: ['Bezier', {
        curviness: 70
      }],
      PaintStyle: this.nextLinePaintStyle('dummy'),
      HoverPaintStyle: {
        stroke: '#216477',
        strokeWidth: 4,
        outlineStroke: 'white',
        outlineWidth: 2
      }
    };
    return defaults;
  }
  /** Create sources, targets and endpoints */
  initDomDataSources() {
    const l = this.log.fn('initDomDataSources');
    for (const pipelineDataSource of this.pipelineModel.DataSources) {
      const domDataSource = this.jsPlumbRoot.querySelector('#' + dataSrcIdPrefix + pipelineDataSource.EntityGuid);
      if (!domDataSource) continue;
      const dataSource = this.dataSources.find(ds => ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
      if (!dataSource) continue;
      if (this.pipelineModel.Pipeline.AllowEdit) {
        // WARNING! Must happen before instance.makeSource()
        this.instance.draggable(domDataSource, {
          grid: [20, 20],
          stop: event => {
            const element = event.el;
            const pipelineDataSourceGuid = element.id.replace(dataSrcIdPrefix, '');
            const position = {
              Top: event.finalPos[1],
              Left: event.finalPos[0]
            };
            setTimeout(() => {
              this.onDragend(pipelineDataSourceGuid, position);
            });
          }
        });
      }
      // Add Out-Endpoints from Definition
      const outCount = dataSource.Out?.length ?? 0;
      l.a('dataSource.Out', {
        outCount,
        out: dataSource.Out
      });
      dataSource.Out?.forEach(name => {
        this.addEndpoint(domDataSource, name, false, pipelineDataSource, outCount);
      });
      // Add In-Endpoints from Definition
      const inCount = dataSource.In?.length ?? 0;
      l.a('dataSource.In', {
        inCount,
        in: dataSource.In
      });
      dataSource.In?.forEach(name => {
        this.addEndpoint(domDataSource, name, true, pipelineDataSource, inCount);
      });
      // Make DataSource a Target for new Endpoints (if .In is an Array)
      if (dataSource.In) {
        const targetEndpointUnlimited = this.buildTargetEndpoint(pipelineDataSource.EntityGuid);
        targetEndpointUnlimited.maxConnections = -1;
        this.instance.makeTarget(domDataSource, targetEndpointUnlimited);
      }
      if (dataSource.DynamicOut) this.instance.makeSource(domDataSource, this.buildSourceEndpoint(pipelineDataSource.EntityGuid), {
        filter: '.add-endpoint'
      });
    }
    l.end();
  }
  /** Create wires */
  initWirings() {
    const l = this.log.fn('initWirings');
    this.pipelineModel.Pipeline.StreamWiring?.forEach(wire => {
      // read connections from Pipeline
      const sourceElementId = dataSrcIdPrefix + wire.From;
      const fromUuid = sourceElementId + '_out_' + wire.Out;
      const targetElementId = dataSrcIdPrefix + wire.To;
      const toUuid = targetElementId + '_in_' + wire.In;
      // Ensure In-Endpoint exist
      if (!this.instance.getEndpoint(fromUuid)) {
        const domDataSource = this.jsPlumbRoot.querySelector('#' + sourceElementId);
        if (!domDataSource) return;
        const guid = domDataSource.id.replace(dataSrcIdPrefix, '');
        const pipelineDataSource = this.pipelineModel.DataSources.find(pipeDataSource => pipeDataSource.EntityGuid === guid);
        this.addEndpoint(domDataSource, wire.Out, false, pipelineDataSource);
      }
      // Ensure Out-Endpoint exist
      if (!this.instance.getEndpoint(toUuid)) {
        const domDataSource = this.jsPlumbRoot.querySelector('#' + targetElementId);
        if (!domDataSource) return;
        const guid = domDataSource.id.replace(dataSrcIdPrefix, '');
        const pipelineDataSource = this.pipelineModel.DataSources.find(pipeDataSource => pipeDataSource.EntityGuid === guid);
        this.addEndpoint(domDataSource, wire.In, true, pipelineDataSource);
      }
      try {
        this.instance.connect({
          uuids: [fromUuid, toUuid],
          paintStyle: this.nextLinePaintStyle(fromUuid)
        });
      } catch (e) {
        console.error({
          message: 'Connection failed',
          from: fromUuid,
          to: toUuid
        });
      }
    });
    l.end();
  }
  addEndpoint(domDataSource, endpointName, isIn, pipelineDataSource, count = 0) {
    const dataSource = this.dataSources.find(d => d.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
    const isDynamic = isIn ? !dataSource.In?.some(name => this.getEndpointInfo(name, false)) : !dataSource.Out?.some(name => this.getEndpointInfo(name, false));
    const endpointInfo = this.getEndpointInfo(endpointName, isDynamic);
    let style;
    if (isDynamic) style = 'dynamic';else if (!endpointInfo.required) style = '';else {
      const wireExists = this.pipelineModel.Pipeline.StreamWiring?.some(wire => {
        const targetElementId = dataSrcIdPrefix + wire.To;
        const targetEndpointName = wire.In;
        return targetElementId === domDataSource.id && targetEndpointName === endpointInfo.name;
      });
      style = wireExists ? '' : 'required';
    }
    const uuid = domDataSource.id + (isIn ? '_in_' : '_out_') + endpointInfo.name;
    const angled = count > endPointsWhereWeRotate;
    const model = isIn ? this.buildTargetEndpoint(pipelineDataSource.EntityGuid, style, angled) : this.buildSourceEndpoint(pipelineDataSource.EntityGuid, style);
    // Endpoints on Out-DataSource must be always enabled
    const params = {
      uuid,
      enabled: this.pipelineModel.Pipeline.AllowEdit || pipelineDataSource.EntityGuid === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.pipelineDesigner.outDataSource.EntityGuid
    };
    const endpoint = this.instance.addEndpoint(domDataSource, model, params);
    const overlay = endpoint.getOverlay('endpointLabel');
    overlay.setLabel(endpointInfo.name);
    if (angled) overlay.setClass('angled');
    console.log('2dm overlay', angled, overlay);
  }
  buildSourceEndpoint(pipelineDataSourceGuid, style) {
    const isSource = true;
    const sourceEndpoint = {
      paintStyle: {
        fill: 'transparent',
        radius: 10
      },
      cssClass: 'sourceEndpoint ' + style ?? '',
      maxConnections: -1,
      isSource,
      anchor: ['Continuous', {
        faces: ['top']
      }],
      overlays: this.getEndpointOverlays(isSource),
      events: {
        click: endpointOrOverlay => {
          this.onChangeLabel(endpointOrOverlay, isSource, pipelineDataSourceGuid);
        }
      }
    };
    return sourceEndpoint;
  }
  buildTargetEndpoint(pipelineDataSourceGuid, style, angled = false) {
    const isSource = false;
    const targetEndpoint = {
      paintStyle: {
        fill: 'transparent',
        radius: 10
      },
      cssClass: 'targetEndpoint ' + (style ?? ' ') + (angled ? 'angled' : ''),
      maxConnections: 1,
      isTarget: !isSource,
      anchor: ['Continuous', {
        faces: ['bottom']
      }],
      overlays: this.getEndpointOverlays(isSource),
      dropOptions: {
        hoverClass: 'hover',
        activeClass: 'active'
      },
      events: {
        click: endpointOrOverlay => {
          this.onChangeLabel(endpointOrOverlay, isSource, pipelineDataSourceGuid);
        }
      }
    };
    return targetEndpoint;
  }
  getEndpointOverlays(isSource) {
    return [['Label', {
      id: 'endpointLabel',
      location: [0.5, isSource ? 0 : 1],
      label: 'Default',
      cssClass: isSource ? 'endpointSourceLabel' : 'endpointTargetLabel'
    }]];
  }
  onChangeLabel(endpointOrOverlay, isSource, pipelineDataSourceGuid) {
    if (!this.pipelineModel.Pipeline.AllowEdit) return;
    const overlay = endpointOrOverlay.getOverlay ? endpointOrOverlay.getOverlay('endpointLabel') : endpointOrOverlay;
    const data = {
      pipelineDataSourceGuid,
      isSource,
      label: overlay.label
    };
    this.dialogRef = this.dialog.open(_rename_stream_rename_stream_component__WEBPACK_IMPORTED_MODULE_1__.RenameStreamComponent, {
      autoFocus: false,
      data,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    this.dialogRef.afterClosed().subscribe(newLabel => {
      if (!newLabel) return;
      overlay.setLabel(newLabel);
      setTimeout(() => {
        this.onConnectionsChanged();
      });
    });
    this.changeDetectorRef.markForCheck();
  }
  bindEvents() {
    this.instance.bind('connectionDetached', info => {
      if (this.bulkDelete) return;
      const domDataSource = info.target;
      const pipelineDataSource = this.pipelineModel.DataSources.find(pipelineDS => pipelineDS.EntityGuid === domDataSource.id.replace(dataSrcIdPrefix, ''));
      const dataSource = this.dataSources.find(ds => ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
      const label = info.targetEndpoint.getOverlay('endpointLabel').label;
      const isDynamic = !dataSource.In.some(name => this.getEndpointInfo(name, false).name === label);
      if (isDynamic) {
        this.instance.deleteEndpoint(info.targetEndpoint);
        setTimeout(() => {
          this.onConnectionsChanged();
        });
      } else {
        setTimeout(() => {
          this.onConnectionsChanged();
        });
      }
    });
    this.instance.bind('connection', info => {
      if (info.sourceId === info.targetId) {
        setTimeout(() => {
          this.instance.deleteConnection(info.connection, {
            fireEvent: false
          });
          setTimeout(() => {
            this.onConnectionsChanged();
          });
        });
        return;
      }
      const endpointLabel = info.targetEndpoint.getOverlay('endpointLabel');
      const labelPrompt = endpointLabel.getLabel();
      const endpoints = this.instance.getEndpoints(info.target.id);
      const targetEndpointHasSameLabel = endpoints.some(endpoint => {
        const label = endpoint.getOverlay('endpointLabel').getLabel();
        return label === labelPrompt && info.targetEndpoint.id !== endpoint.id && endpoint.canvas.classList.contains('targetEndpoint');
      });
      if (targetEndpointHasSameLabel) {
        endpointLabel.setLabel(`PleaseRename${Math.floor(Math.random() * 99999)}`);
      }
      setTimeout(() => {
        this.onConnectionsChanged();
      });
    });
  }
  getEndpointInfo(endpointName, isDynamic) {
    let name;
    let required;
    if (isDynamic) {
      name = endpointName;
      required = false;
    } else {
      const trimmed = endpointName.trim();
      required = trimmed.endsWith('*');
      name = !required ? trimmed : trimmed.substring(0, trimmed.length - 1);
    }
    const endpointInfo = {
      name,
      required
    };
    return endpointInfo;
  }
}

/***/ }),

/***/ 12710:
/*!****************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/plumb-editor/rename-stream/rename-stream.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenameStreamComponent: () => (/* binding */ RenameStreamComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-administration/services */ 75445);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/visual-query.service */ 2628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);






























const _c0 = a0 => ({
  "active": a0
});
function RenameStreamComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You will get suggestions for out-streams after you run query ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RenameStreamComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isError", true);
  }
}
function RenameStreamComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 10)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RenameStreamComponent_Conditional_9_Conditional_4_Template, 2, 0, "app-field-hint")(5, RenameStreamComponent_Conditional_9_Conditional_5_Template, 2, 1, "app-field-hint", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](4, ctx_r0.isSource && !ctx_r0.pipelineResultExists ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](5, ctx_r0.controls.label.touched && (ctx_r0.controls.label.errors == null ? null : ctx_r0.controls.label.errors.required) ? 5 : -1);
  }
}
function RenameStreamComponent_Conditional_10_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", scopeOption_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", scopeOption_r3.name, " ");
  }
}
function RenameStreamComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 10)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](4, RenameStreamComponent_Conditional_10_Conditional_0_For_5_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", !ctx_r0.scopeOptions.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r0.scopeOptions);
  }
}
function RenameStreamComponent_Conditional_10_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const labelOption_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", labelOption_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", labelOption_r4, " ");
  }
}
function RenameStreamComponent_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](1, RenameStreamComponent_Conditional_10_Conditional_4_For_2_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", !ctx_r0.labelOptions.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r0.labelOptions);
  }
}
function RenameStreamComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 11);
  }
}
function RenameStreamComponent_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isError", true);
  }
}
function RenameStreamComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, RenameStreamComponent_Conditional_10_Conditional_0_Template, 10, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 10)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RenameStreamComponent_Conditional_10_Conditional_4_Template, 3, 1, "mat-select", 13)(5, RenameStreamComponent_Conditional_10_Conditional_5_Template, 1, 0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 14)(7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RenameStreamComponent_Conditional_10_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.toggleGuidedLabel(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RenameStreamComponent_Conditional_10_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.toggleGuidedLabel(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "text_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RenameStreamComponent_Conditional_10_Conditional_13_Template, 2, 1, "app-field-hint", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](0, ctx_r0.advancedMode && ctx_r0.guidedLabel ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](4, ctx_r0.guidedLabel ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](5, !ctx_r0.guidedLabel ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, ctx_r0.guidedLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, !ctx_r0.guidedLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](13, ctx_r0.controls.label.touched && (ctx_r0.controls.label.errors == null ? null : ctx_r0.controls.label.errors.required) ? 13 : -1);
  }
}
function RenameStreamComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-slide-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RenameStreamComponent_Conditional_13_Template_mat_slide_toggle_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.toggleAdvancedMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r0.advancedMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.advancedMode ? "Advanced" : "Simple", " ");
  }
}
class RenameStreamComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(dialogData, dialogRef, visualQueryService, contentTypesService, changeDetectorRef) {
    super();
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.visualQueryService = visualQueryService;
    this.contentTypesService = contentTypesService;
    this.changeDetectorRef = changeDetectorRef;
    this.hostClass = 'dialog-component';
    this.isSource = this.dialogData.isSource;
    this.pipelineResultExists = this.visualQueryService.pipelineResult != null;
    this.scopeOptions = [];
    this.labelOptions = [];
    this.guidedLabel = true;
    this.advancedMode = false;
  }
  ngOnInit() {
    this.buildForm();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  closeDialog(label) {
    this.dialogRef.close(label);
  }
  toggleGuidedLabel(guidedLabel) {
    this.guidedLabel = guidedLabel;
  }
  toggleAdvancedMode(event) {
    this.advancedMode = event.checked;
  }
  rename() {
    const formValue = this.form.getRawValue();
    this.closeDialog(formValue.label);
  }
  buildForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
      label: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.dialogData.label, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      scope: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.scopes.default.value)
    });
    this.controls = this.form.controls;
    if (!this.isSource || !this.pipelineResultExists) {
      return;
    }
    this.subscriptions.add(this.controls.scope.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(this.controls.scope.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(scope => {
      this.labelOptions = Object.values(this.visualQueryService.pipelineResult.Sources).find(source => source.Guid === this.dialogData.pipelineDataSourceGuid).Out.filter(out => out.Scope === scope).map(out => out.Name);
      if (!this.labelOptions.includes(this.controls.label.value) && this.controls.label.value != null) {
        this.controls.label.patchValue(null);
      }
    }));
    this.contentTypesService.getScopes().subscribe(scopes => {
      const sourceOut = Object.values(this.visualQueryService.pipelineResult.Sources).find(source => source.Guid === this.dialogData.pipelineDataSourceGuid).Out;
      const filtered = scopes.filter(s => sourceOut.some(o => o.Scope === s.value));
      this.scopeOptions = filtered;
      this.changeDetectorRef.markForCheck();
    });
  }
  static #_ = this.ɵfac = function RenameStreamComponent_Factory(t) {
    return new (t || RenameStreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_3__.VisualQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: RenameStreamComponent,
    selectors: [["app-rename-stream"]],
    hostVars: 1,
    hostBindings: function RenameStreamComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 5,
    consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content"], [3, "formGroup"], [1, "eav-dialog-actions"], ["color", "accent", 3, "checked"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", "disabled"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "type", "text", "formControlName", "label", "required", ""], [3, "isError"], ["formControlName", "label", "required", "", 3, "placeholder"], ["matTextSuffix", "", 1, "eav-selection-suffix"], ["mat-icon-button", "", "type", "button", "tippy", "Pick existing value", 1, "eav-selection-suffix-button", 3, "click", "ngClass"], [1, "eav-icon"], ["mat-icon-button", "", "type", "button", "tippy", "Manual entry", 1, "eav-selection-suffix-button", 3, "click", "ngClass"], ["formControlName", "scope", 3, "placeholder"], [3, "value"], ["href", "https://2sxc.org/help?tag=scope", "target", "_blank", "appClickStopPropagation", ""], ["color", "accent", 3, "change", "checked"]],
    template: function RenameStreamComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Rename stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RenameStreamComponent_Template_button_click_4_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4)(8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RenameStreamComponent_Conditional_9_Template, 6, 2)(10, RenameStreamComponent_Conditional_10_Template, 14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-dialog-actions", 6)(12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RenameStreamComponent_Conditional_13_Template, 2, 2, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div")(15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RenameStreamComponent_Template_button_click_15_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RenameStreamComponent_Template_button_click_17_listener() {
          return ctx.rename();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Rename ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](9, !ctx.isSource || !ctx.pipelineResultExists ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](10, ctx.isSource && ctx.pipelineResultExists ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](13, ctx.isSource && ctx.pipelineResultExists ? 13 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form.valid);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogActions, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggle, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__.ClickStopPropagationDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 60453:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/query-result/query-result.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryResultComponent: () => (/* binding */ QueryResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/visual-query.service */ 2628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);












function QueryResultComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" for Stream: \"", ctx_r0.debugStream.name, "\" on Source: \"", ctx_r0.debugStream.sourceName, "\" ");
  }
}
function QueryResultComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueryResultComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Showing All results ");
  }
}
function QueryResultComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Showing top ", ctx_r0.top, " results ");
  }
}
function QueryResultComponent_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " All ");
  }
}
function QueryResultComponent_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}
function QueryResultComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueryResultComponent_For_18_Template_button_click_0_listener() {
      const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.show(option_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QueryResultComponent_For_18_Conditional_2_Template, 1, 0)(3, QueryResultComponent_For_18_Conditional_3_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, option_r3 === 0 ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, option_r3 !== 0 ? 3 : -1);
  }
}
function QueryResultComponent_Conditional_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueryResultComponent_Conditional_22_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const param_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](param_r4);
  }
}
function QueryResultComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QueryResultComponent_Conditional_22_div_1_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](4, QueryResultComponent_Conditional_22_For_5_Template, 2, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.parameters);
  }
}
function QueryResultComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueryResultComponent_For_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const source_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](source_r5.value.Definition == null ? null : source_r5.value.Definition.Name);
  }
}
function QueryResultComponent_For_37_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](config_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](config_r6.value);
  }
}
function QueryResultComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QueryResultComponent_For_37_Conditional_2_Template, 2, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](9, QueryResultComponent_For_37_For_10_Template, 6, 2, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const source_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, (source_r5.value.Definition == null ? null : source_r5.value.Definition.Name) ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](source_r5.value.Guid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](source_r5.value.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 4, source_r5.value.Configuration));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](source_r5.value.Error);
  }
}
function QueryResultComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Streams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueryResultComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stream_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stream_r7.Source + ":" + stream_r7.SourceOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stream_r7.Target + ":" + stream_r7.TargetIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stream_r7.Count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stream_r7.Error);
  }
}
class QueryResultComponent {
  constructor(dialogData, dialogRef, visualQueryService) {
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.visualQueryService = visualQueryService;
  }
  ngOnInit() {
    const pipeline = this.visualQueryService.pipelineModel$.value.Pipeline;
    const params = (pipeline.Params?.split('\n') ?? []).filter(el => !!el);
    const testParams = (pipeline.TestParameters?.split('\n') ?? []).filter(el => !!el);
    this.parameters = [].concat(params, testParams);
    this.timeUsed = this.dialogData.result.QueryTimer.Milliseconds;
    this.ticksUsed = this.dialogData.result.QueryTimer.Ticks;
    this.top = this.dialogData.top;
    this.optionsForTop = [25, 100, 1000, 0];
    this.result = this.dialogData.result.Query;
    this.debugStream = this.dialogData.debugStream;
    this.sources = this.dialogData.result.Sources;
    this.streams = this.dialogData.result.Streams;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  show(top) {
    if (top === this.top) {
      return;
    }
    if (this.debugStream) {
      this.visualQueryService.debugStream(this.debugStream.original, top);
    } else {
      this.visualQueryService.runPipeline(top);
    }
    this.closeDialog();
  }
  static #_ = this.ɵfac = function QueryResultComponent_Factory(t) {
    return new (t || QueryResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_0__.VisualQueryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: QueryResultComponent,
    selectors: [["app-query-result"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 54,
    vars: 11,
    consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content"], ["dynamicHeight", "", "color", "accent", 1, "eav-tab-group"], ["class", "mat-tab-label-box", "tippy", "Results", 4, "matTabLabel"], [1, "eav-tab-description"], ["mat-button", ""], ["class", "mat-tab-label-box", "tippy", "Sources", 4, "matTabLabel"], ["class", "mat-tab-label-box", "tippy", "Streams", 4, "matTabLabel"], ["tippy", "Results", 1, "mat-tab-label-box"], ["mat-button", "", 3, "click"], ["class", "mat-tab-label-box", "tippy", "Parameters", 4, "matTabLabel"], ["tippy", "Parameters", 1, "mat-tab-label-box"], ["tippy", "Sources", 1, "mat-tab-label-box"], ["tippy", "Streams", 1, "mat-tab-label-box"]],
    template: function QueryResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Query Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, QueryResultComponent_Conditional_4_Template, 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueryResultComponent_Template_button_click_5_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-tab-group", 5)(12, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, QueryResultComponent_div_13_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, QueryResultComponent_Conditional_15_Template, 1, 0)(16, QueryResultComponent_Conditional_16_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](17, QueryResultComponent_For_18_Template, 4, 2, "button", 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, QueryResultComponent_Conditional_22_Template, 6, 0, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, QueryResultComponent_div_24_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "table")(27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Name and Guid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](36, QueryResultComponent_For_37_Template, 14, 6, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, QueryResultComponent_div_40_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "table")(43, "tr")(44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](52, QueryResultComponent_For_53_Template, 11, 4, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, ctx.debugStream ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" The Full result was logged to the Browser Console. Further down you'll find more debug-infos. Executed in ", ctx.timeUsed, "ms (", ctx.ticksUsed, " ticks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](15, ctx.top === 0 ? 15 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](16, ctx.top !== 0 ? 16 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.optionsForTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 7, ctx.result));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](22, (ctx.parameters == null ? null : ctx.parameters.length) ? 22 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 9, ctx.sources));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.streams);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe],
    styles: [".eav-tab-group[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.eav-tab-description[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n}\n\npre[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\ntd[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9xdWVyeS1yZXN1bHQvcXVlcnktcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXRhYi1ncm91cCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZWF2LXRhYi1kZXNjcmlwdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogOS41cHg7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 30555:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/run-explorer/run-explorer.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RunExplorerComponent: () => (/* binding */ RunExplorerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _dev_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dev-rest */ 13488);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/visual-query.service */ 2628);
/* harmony import */ var _run_explorer_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./run-explorer.helpers */ 78465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/helpers/json.helpers */ 4038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);


















function RunExplorerComponent_Conditional_0_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const param_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", param_r3, " ");
  }
}
function RunExplorerComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, RunExplorerComponent_Conditional_0_Conditional_20_For_2_Template, 2, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pipelineModel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](pipelineModel_r4.Pipeline.Params == null ? null : pipelineModel_r4.Pipeline.Params.split("\n"));
  }
}
function RunExplorerComponent_Conditional_0_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const param_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", param_r5, " ");
  }
}
function RunExplorerComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, RunExplorerComponent_Conditional_0_Conditional_24_For_2_Template, 2, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pipelineModel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](pipelineModel_r4.Pipeline.TestParameters == null ? null : pipelineModel_r4.Pipeline.TestParameters.split("\n"));
  }
}
function RunExplorerComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Show DataSource Params");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RunExplorerComponent_Conditional_0_Conditional_25_Template_mat_slide_toggle_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.showDataSourceDetails($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.ShowDataSourceDetails);
  }
}
function RunExplorerComponent_Conditional_0_Conditional_27_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "li", 16);
  }
  if (rf & 2) {
    const warning_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", warning_r7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
function RunExplorerComponent_Conditional_0_Conditional_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "div", 6)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Warnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](7, RunExplorerComponent_Conditional_0_Conditional_27_Conditional_0_For_8_Template, 1, 1, "li", 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const warnings_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](warnings_r8);
  }
}
function RunExplorerComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RunExplorerComponent_Conditional_0_Conditional_27_Conditional_0_Template, 9, 0, "div", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, ctx.length ? 0 : -1);
  }
}
function RunExplorerComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Query Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pipelineModel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](pipelineModel_r4.Pipeline.Description);
  }
}
function RunExplorerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.saveAndRunQuery(true, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Save and run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.saveAndRunQuery(false, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.saveAndRunQuery(true, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Query Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div")(14, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.editPipeline());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openParamsHelp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, RunExplorerComponent_Conditional_0_Conditional_20_Template, 3, 0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 5)(22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Test Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, RunExplorerComponent_Conditional_0_Conditional_24_Template, 3, 0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, RunExplorerComponent_Conditional_0_Conditional_25_Template, 4, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, RunExplorerComponent_Conditional_0_Conditional_27_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RunExplorerComponent_Conditional_0_Conditional_29_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 11)(31, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openRestApi());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Use in JSON / REST API");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "code_curly");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const pipelineModel_r4 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](20, (pipelineModel_r4.Pipeline.Params == null ? null : pipelineModel_r4.Pipeline.Params.length) ? 20 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](24, (pipelineModel_r4.Pipeline.TestParameters == null ? null : pipelineModel_r4.Pipeline.TestParameters.length) ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](25, (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 5, ctx_r1.visualDesignerData$)) ? 25 : -1, tmp_4_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](27, (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 7, ctx_r1.warnings$)) ? 27 : -1, tmp_5_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](29, pipelineModel_r4.Pipeline.Description ? 29 : -1);
  }
}
class RunExplorerComponent {
  constructor(router, route, context, visualQueryService) {
    this.router = router;
    this.route = route;
    this.context = context;
    this.visualQueryService = visualQueryService;
  }
  ngOnInit() {
    this.pipelineModel$ = this.visualQueryService.pipelineModel$.asObservable();
    this.warnings$ = this.visualQueryService.pipelineModel$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(pipelineModel => (0,_run_explorer_helpers__WEBPACK_IMPORTED_MODULE_3__.calculateWarnings)(pipelineModel, this.context)));
    this.visualDesignerData$ = this.visualQueryService.pipelineModel$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(pipelineModel => _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_4__.JsonHelpers.tryParse(pipelineModel.Pipeline.VisualDesignerData) ?? {}));
  }
  editPipeline() {
    this.visualQueryService.editPipelineEntity();
  }
  openParamsHelp() {
    window.open('https://go.2sxc.org/QueryParams', '_blank');
  }
  saveAndRunQuery(save, run) {
    this.visualQueryService.saveAndRun(save, run);
  }
  showDataSourceDetails(event) {
    this.visualQueryService.showDataSourceDetails(event.checked);
  }
  openRestApi() {
    const queryGuid = this.visualQueryService.pipelineModel$.value.Pipeline.EntityGuid;
    this.router.navigate([_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.getUrlQueryDialog(queryGuid)], {
      relativeTo: this.route
    });
  }
  static #_ = this.ɵfac = function RunExplorerComponent_Factory(t) {
    return new (t || RunExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_2__.VisualQueryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RunExplorerComponent,
    selectors: [["app-run-explorer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "editor-active-explorer", "fancy-scrollbar-dark"], [1, "wrapper"], [1, "actions"], ["mat-raised-button", "", "color", "accent", 1, "action", 3, "click"], ["mat-raised-button", "", 1, "action", 3, "click"], [1, "parameters"], [1, "title"], ["mat-icon-button", "", "tippy", "Edit parameters", 3, "click"], ["mat-icon-button", "", "tippy", "Query Params Docs", 3, "click"], [1, "values"], [1, "description"], [1, "footer-actions"], [1, "eav-slide-toggle-label"], ["color", "primary", 3, "change", "checked"], [1, "warnings"], [2, "color", "red"], [3, "innerHTML"]],
    template: function RunExplorerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RunExplorerComponent_Conditional_0_Template, 36, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.pipelineModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.actions[_ngcontent-%COMP%], .footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:not(:last-of-type), .footer-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-bottom: 8px;\n}\n\n.parameters[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%], .description[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.parameters[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n}\n.parameters[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.parameters[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n}\n.parameters[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1px 0;\n}\n\n.eav-slide-toggle-label[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9ydW4tZXhwbG9yZXIvcnVuLWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTs7RUFDRSxrQkFBQTtBQUVKOztBQUVBOzs7RUFHRSxjQUFBO0FBQ0Y7QUFDRTs7O0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREk7OztFQUNFLHlCQUFBO1VBQUEsaUJBQUE7QUFLTjs7QUFFRTs7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFJOztFQUNFLGNBQUE7QUFHTjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zLFxyXG4uZm9vdGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuXHJcbiAgLmFjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtZXRlcnMsXHJcbi53YXJuaW5ncyxcclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IDE2cHggMDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtZXRlcnMsXHJcbi53YXJuaW5ncyB7XHJcbiAgLnZhbHVlcyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lYXYtc2xpZGUtdG9nZ2xlLWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLy8gLmZvb3Rlci1hY3Rpb25zIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78465:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/run-explorer/run-explorer.helpers.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateWarnings: () => (/* binding */ calculateWarnings)
/* harmony export */ });
/**
 * Check if there are special warnings the developer should know.
 * Typically when the test ModuleId is different from the one we're currently working on
 */
function calculateWarnings(pipelineModel, context) {
  const warnings = [];
  try {
    const queryParams = pipelineModel.Pipeline.Params?.split(/\r?\n/) || [];
    const testParams = pipelineModel.Pipeline.TestParameters?.split(/\r?\n/) || [];
    queryParams.forEach(param => {
      param = param?.trim();
      if (!param) {
        return;
      }
      // Check if the syntax on Query Parameters is off.
      // It should contain [...]=...
      // But it's easy to forget the [ and ] brackets
      const paramSyntax = /^[a-zA-Z0-9]+=(.*)$/gmi;
      const matched = paramSyntax.test(param);
      if (!matched) {
        warnings.push(`
          A <em>Query Parameter</em> seems wrong: <br>
          <code>${param}</code> <br>
          It should use the syntax: <br>
          <code>key=value</code> <br>
          or resolve to a token like: <br>
          <code>key=[source:key]</code>
        `);
      }
    });
    testParams.forEach(param => {
      param = param?.trim();
      if (!param) {
        return;
      }
      // Check if the syntax on Test Parameters is off.
      // It should contain [...]=...
      // But it's easy to forget the [ and ] brackets
      const testParamSyntax = /^\[[a-zA-Z]+:[a-zA-Z0-9]+\]=(.*)$/gmi;
      const matched = testParamSyntax.test(param);
      if (!matched) {
        warnings.push(`
          A <em>Test Parameter</em> seems wrong: <br>
          <code>${param}</code> <br>
          It should use the syntax: <br>
          <code>[source:key]=value</code>
        `);
      }
      // Check if we should show the warning about the test ModuleId.
      // This is because in the old days, the ModuleId wasn't auto-filled, so people had to add it as a test value.
      // Now it's not necessary any more
      const midRegex = /^\[module:id\]=([0-9]*)$/gmi;
      const midMatch = midRegex.exec(param);
      if (midMatch) {
        const testMid = midMatch[1];
        const urlMid = context.moduleId?.toString();
        if (testMid !== urlMid) {
          warnings.push(`
            Your test ModuleId (${testMid}) is different from the current ModuleId (${urlMid}).<br>
            Note that 2sxc automatically provides the ModuleId - so you usually do not need to set it
          `);
        }
      }
      const oldMidRegex = /^\[module:moduleid\]=([0-9]*)$/gmi;
      const oldMidMatch = oldMidRegex.exec(param);
      if (oldMidMatch) {
        warnings.push(`
          You are using deprecated [Module:ModuleId] test parameter.<br>
          Please use [Module:Id]
        `);
      }
    });
  } catch (error) {
    console.error('Something went wrong in calculateWarnings for params', error);
  }
  return warnings;
}

/***/ }),

/***/ 55871:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/services/query-definition.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryDefinitionService: () => (/* binding */ QueryDefinitionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);








class QueryDefinitionService {
  constructor(http, context) {
    this.http = http;
    this.context = context;
  }
  fetchPipeline(pipelineEntityId, dataSources) {
    return this.http.get(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQueryGet, {
      params: {
        appId: this.context.appId.toString(),
        id: pipelineEntityId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(pipelineModel => {
      // if pipeline is new, populate it with default model
      if (!pipelineModel.DataSources.length) {
        this.buildDefaultModel(pipelineModel, dataSources);
      }
      this.fixPipelineDataSources(pipelineModel.DataSources);
      return pipelineModel;
    }));
  }
  buildDefaultModel(pipelineModel, dataSources) {
    const templateDataSources = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.pipelineDesigner.defaultPipeline.dataSources;
    for (const templateDS of templateDataSources) {
      const dataSource = dataSources.find(ds => ds.PartAssemblyAndType === templateDS.PartAssemblyAndType);
      const pipelineDataSource = {
        Description: '',
        EntityGuid: templateDS.EntityGuid,
        EntityId: undefined,
        Name: dataSource.Name,
        PartAssemblyAndType: templateDS.PartAssemblyAndType,
        VisualDesignerData: templateDS.VisualDesignerData
      };
      pipelineModel.DataSources.push(pipelineDataSource);
    }
    pipelineModel.Pipeline.StreamWiring = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.pipelineDesigner.defaultPipeline.streamWiring;
  }
  fixPipelineDataSources(pipelineDataSources) {
    const outDataSourceExists = pipelineDataSources.some(pipelineDS => pipelineDS.EntityGuid === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.pipelineDesigner.outDataSource.EntityGuid);
    if (!outDataSourceExists) {
      const outDs = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.pipelineDesigner.outDataSource;
      const outDsConst = {
        Description: outDs.Description,
        EntityGuid: outDs.EntityGuid,
        EntityId: undefined,
        Name: outDs.Name,
        PartAssemblyAndType: outDs.PartAssemblyAndType,
        VisualDesignerData: outDs.VisualDesignerData
      };
      pipelineDataSources.push(outDsConst);
    }
    for (const pipelineDataSource of pipelineDataSources) {
      pipelineDataSource.VisualDesignerData ??= {
        Top: 50,
        Left: 50
      };
    }
  }
  fetchDataSources() {
    return this.http.get(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQueryDataSources, {
      params: {
        appid: this.context.appId,
        zoneId: this.context.zoneId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(dataSources => {
      const outDs = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.pipelineDesigner.outDataSource;
      const outDsConst = {
        ContentType: undefined,
        Difficulty: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.pipelineDesigner.dataSourceDifficulties.default,
        DynamicIn: true,
        DynamicOut: false,
        EnableConfig: undefined,
        HelpLink: undefined,
        Icon: undefined,
        In: outDs.In,
        Name: outDs.Name,
        Out: undefined,
        PartAssemblyAndType: outDs.PartAssemblyAndType,
        PrimaryType: outDs.PrimaryType,
        TypeNameForUi: undefined,
        UiHint: undefined
      };
      dataSources.push(outDsConst);
      return dataSources;
    }));
  }
  typeNameFilter(input, format) {
    const globalParts = input.split(', ');
    switch (format) {
      case 'classFullName':
        const classFullName = globalParts[0];
        return classFullName;
      case 'className':
        const classFullNameParts = globalParts[0].split('.');
        const className = classFullNameParts[classFullNameParts.length - 1];
        return className;
      default:
        return input;
    }
  }
  /** Save the current query and reload entire definition as returned from server */
  savePipeline(pipelineModel) {
    const pipeline = pipelineModel.Pipeline;
    const dataSources = pipelineModel.DataSources;
    return this.http.post(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQuerySave, {
      pipeline,
      dataSources
    }, {
      params: {
        appId: this.context.appId.toString(),
        Id: pipeline.EntityId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(newPipelineModel => {
      this.fixPipelineDataSources(newPipelineModel.DataSources);
      return newPipelineModel;
    }));
  }
  /** `top` - fetch first X items */
  runPipeline(id, top) {
    return this.http.get(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQueryRun, {
      params: {
        appId: this.context.appId.toString(),
        id: id.toString(),
        top: top.toString()
      }
    });
  }
  /** `top` - fetch first X items */
  debugStream(id, source, sourceOut, top) {
    return this.http.get(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQueryDebugStream, {
      params: {
        appId: this.context.appId.toString(),
        id: id.toString(),
        from: source,
        out: sourceOut,
        top: top.toString()
      }
    });
  }
  static #_ = this.ɵfac = function QueryDefinitionService_Factory(t) {
    return new (t || QueryDefinitionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_2__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: QueryDefinitionService,
    factory: QueryDefinitionService.ɵfac
  });
}

/***/ }),

/***/ 2628:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/services/visual-query.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualQueryService: () => (/* binding */ VisualQueryService)
/* harmony export */ });
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es/cloneDeep */ 85237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../permissions/services/metadata.service */ 80401);
/* harmony import */ var _query_definition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query-definition.service */ 55871);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../query-result/query-result.component */ 60453);
/* harmony import */ var _stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stream-error-result/stream-error-result.component */ 34955);
/* harmony import */ var _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helpers/json.helpers */ 4038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
























class VisualQueryService extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__.BaseWithChildDialogComponent {
  constructor(router, route, queryDefinitionService, titleService, snackBar, dialog, viewContainerRef, zone, metadataService, contentTypesService, changeDetectorRef) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.queryDefinitionService = queryDefinitionService;
    this.titleService = titleService;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.zone = zone;
    this.metadataService = metadataService;
    this.contentTypesService = contentTypesService;
    this.changeDetectorRef = changeDetectorRef;
    this.pipelineModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this.dataSources$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this.putEntityCountOnConnections$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.dataSourceConfigs$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject({});
    this.pipelineId = parseInt(this.route.snapshot.paramMap.get('pipelineId'), 10);
    this.refreshPipeline = false;
    this.refreshDataSourceConfigs = false;
  }
  ngOnDestroy() {
    this.pipelineModel$.complete();
    this.dataSources$.complete();
    this.putEntityCountOnConnections$.complete();
    super.ngOnDestroy();
  }
  init() {
    this.fetchDataSources(() => this.fetchPipeline(true, true, false));
    this.attachKeyboardSave();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      if (this.refreshPipeline || this.refreshDataSourceConfigs) {
        this.fetchPipeline(this.refreshPipeline, this.refreshDataSourceConfigs, this.refreshPipeline);
      }
      this.refreshPipeline = false;
      this.refreshDataSourceConfigs = false;
    }));
  }
  editPipelineEntity() {
    // save Pipeline, then open Edit Dialog
    this.savePipeline(() => {
      const form = {
        items: [{
          EntityId: this.pipelineModel$.value.Pipeline.EntityId
        }]
      };
      const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__.convertFormToUrl)(form);
      this.router.navigate([`edit/${formUrl}`], {
        relativeTo: this.route
      });
      this.refreshPipeline = true;
    });
  }
  saveAndRun(save, run) {
    if (save && run) {
      this.savePipeline(() => {
        this.runPipeline();
      });
    } else if (save) {
      this.savePipeline();
    } else if (run) {
      this.runPipeline();
    }
  }
  showDataSourceDetails(showDetails) {
    const pipelineModel = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__["default"])(this.pipelineModel$.value);
    const visualDesignerData = _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_8__.JsonHelpers.tryParse(pipelineModel.Pipeline.VisualDesignerData) ?? {};
    visualDesignerData.ShowDataSourceDetails = showDetails;
    pipelineModel.Pipeline.VisualDesignerData = JSON.stringify(visualDesignerData);
    this.pipelineModel$.next(pipelineModel);
  }
  addDataSource(dataSource) {
    const pipelineModel = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__["default"])(this.pipelineModel$.value);
    const newPipelineDataSource = {
      Description: '',
      EntityGuid: 'unsaved' + (pipelineModel.DataSources.length + 1),
      EntityId: undefined,
      Name: dataSource.Name,
      PartAssemblyAndType: dataSource.PartAssemblyAndType,
      VisualDesignerData: {
        Top: 100,
        Left: 100
      }
    };
    pipelineModel.DataSources.push(newPipelineDataSource);
    this.pipelineModel$.next(pipelineModel);
    this.savePipeline();
  }
  removeDataSource(pipelineDataSourceGuid, connections, streamsOut) {
    const pipelineModel = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__["default"])(this.pipelineModel$.value);
    pipelineModel.DataSources = pipelineModel.DataSources.filter(pipelineDS => pipelineDS.EntityGuid !== pipelineDataSourceGuid);
    pipelineModel.Pipeline.StreamWiring = connections;
    pipelineModel.Pipeline.StreamsOut = streamsOut;
    this.pipelineModel$.next(pipelineModel);
  }
  renameDataSource(pipelineDataSourceGuid, name) {
    const pipelineModel = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__["default"])(this.pipelineModel$.value);
    const pipelineDataSource = pipelineModel.DataSources.find(pipelineDS => pipelineDS.EntityGuid === pipelineDataSourceGuid);
    pipelineDataSource.Name = name;
    this.pipelineModel$.next(pipelineModel);
  }
  changeDataSourceDescription(pipelineDataSourceGuid, description) {
    const pipelineModel = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__["default"])(this.pipelineModel$.value);
    const pipelineDataSource = pipelineModel.DataSources.find(pipelineDS => pipelineDS.EntityGuid === pipelineDataSourceGuid);
    pipelineDataSource.Description = description;
    this.pipelineModel$.next(pipelineModel);
  }
  changeConnections(connections, streamsOut) {
    const pipelineModel = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__["default"])(this.pipelineModel$.value);
    pipelineModel.Pipeline.StreamWiring = connections;
    pipelineModel.Pipeline.StreamsOut = streamsOut;
    this.pipelineModel$.next(pipelineModel);
  }
  changeDataSourcePosition(pipelineDataSourceGuid, position) {
    const pipelineModel = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__["default"])(this.pipelineModel$.value);
    const pipelineDataSource = pipelineModel.DataSources.find(pipelineDS => pipelineDS.EntityGuid === pipelineDataSourceGuid);
    if (!pipelineDataSource) {
      // spm NOTE: fixes problem where dataSource position can't be updated if dataSource with guid unsavedXX gets saved while dragging.
      // Can happen if dataSource is just added and user drags it and save happens.
      return;
    }
    pipelineDataSource.VisualDesignerData = {
      ...pipelineDataSource.VisualDesignerData,
      ...position
    };
    this.pipelineModel$.next(pipelineModel);
  }
  calculateDataSourceConfigs(dataSources) {
    const dataSourceConfigs = {};
    dataSources.forEach(dataSource => {
      if (dataSource.EntityId == null) {
        return;
      }
      dataSourceConfigs[dataSource.EntityId] = [];
      dataSource.Metadata?.forEach(metadataItem => {
        Object.entries(metadataItem).forEach(([attributeName, attributeValue]) => {
          if (attributeValue == null || attributeValue === '') {
            return;
          }
          if (['Created', 'Guid', 'Id', 'Modified', 'Title', '_Type'].includes(attributeName)) {
            return;
          }
          if (Array.isArray(attributeValue) && attributeValue[0]?.Title != null && attributeValue[0]?.Id != null) {
            attributeValue = `${attributeValue[0].Title} (${attributeValue[0].Id})`;
          }
          const dataSourceConfig = {
            name: attributeName,
            value: attributeValue
          };
          dataSourceConfigs[dataSource.EntityId].push(dataSourceConfig);
        });
      });
    });
    this.dataSourceConfigs$.next(dataSourceConfigs);
  }
  editDataSource(pipelineDataSource) {
    const dataSource = this.dataSources$.value.find(ds => ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
    const contentTypeName = dataSource.ContentType;
    const targetType = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.metadata.entity.targetType;
    const keyType = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.metadata.entity.keyType;
    const key = pipelineDataSource.EntityGuid;
    // query for existing Entity
    this.metadataService.getMetadata(targetType, keyType, key, contentTypeName).subscribe(metadata => {
      // edit existing Entity
      if (metadata.Items.length) {
        const form = {
          items: [{
            EntityId: metadata.Items[0].Id
          }]
        };
        const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__.convertFormToUrl)(form);
        this.router.navigate([`edit/${formUrl}`], {
          relativeTo: this.route
        });
        this.refreshDataSourceConfigs = true;
        return;
      }
      // Check if the type exists, and if yes, create new Entity
      this.contentTypesService.retrieveContentType(contentTypeName).subscribe({
        next: contentType => {
          if (contentType == null) {
            this.snackBar.open('DataSource doesn\'t have any configuration', undefined, {
              duration: 3000
            });
            return;
          }
          const form = {
            items: [{
              ContentTypeName: contentTypeName,
              For: {
                Target: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.metadata.entity.target,
                TargetType: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.metadata.entity.targetType,
                Guid: key
              }
            }]
          };
          const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__.convertFormToUrl)(form);
          this.router.navigate([`edit/${formUrl}`], {
            relativeTo: this.route
          });
          this.refreshDataSourceConfigs = true;
        },
        error: error => {
          const message = 'Server reports error - this usually means that this DataSource doesn\'t have any configuration';
          this.snackBar.open(message, undefined, {
            duration: 3000
          });
        }
      });
    });
  }
  savePipeline(callback) {
    this.snackBar.open('Saving...');
    this.queryDefinitionService.savePipeline(this.pipelineModel$.value).subscribe({
      next: pipelineModel => {
        this.snackBar.open('Saved', null, {
          duration: 2000
        });
        this.pipelineModel$.next(pipelineModel);
        if (callback != null) {
          callback();
        }
      },
      error: error => {
        this.snackBar.open('Save Pipeline failed', null, {
          duration: 2000
        });
      }
    });
  }
  runPipeline(top = 25) {
    this.snackBar.open('Running query...');
    this.queryDefinitionService.runPipeline(this.pipelineModel$.value.Pipeline.EntityId, top).subscribe({
      next: pipelineResult => {
        this.snackBar.open('Query worked', null, {
          duration: 2000
        });
        this.pipelineResult = pipelineResult;
        this.showQueryResult(pipelineResult, top);
        console.warn(pipelineResult);
        // push cloned pipelineModel to reset jsPlumb
        this.pipelineModel$.next((0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_11__["default"])(this.pipelineModel$.value));
        setTimeout(() => {
          this.putEntityCountOnConnections$.next(pipelineResult);
        });
      },
      error: error => {
        this.snackBar.open('Query failed', null, {
          duration: 2000
        });
      }
    });
  }
  debugStream(stream, top = 25) {
    if (stream.Error) {
      this.showStreamErrorResult(stream);
      return;
    }
    if (stream.Count === 0) {
      return;
    }
    this.snackBar.open('Running stream...');
    const pipelineId = this.pipelineModel$.value.Pipeline.EntityId;
    this.queryDefinitionService.debugStream(pipelineId, stream.Source, stream.SourceOut, top).subscribe({
      next: streamResult => {
        this.snackBar.open('Stream worked', null, {
          duration: 2000
        });
        const pipelineDataSource = this.pipelineModel$.value.DataSources.find(ds => ds.EntityGuid === stream.Source);
        const debugStream = {
          name: stream.SourceOut,
          source: stream.Source,
          sourceName: pipelineDataSource.Name,
          original: stream
        };
        this.showQueryResult(streamResult, top, debugStream);
        console.warn(streamResult);
      },
      error: error => {
        this.snackBar.open('Stream failed', null, {
          duration: 2000
        });
      }
    });
  }
  fetchPipeline(refreshPipeline, refreshDataSourceConfigs, showSnackBar) {
    if (showSnackBar) {
      this.snackBar.open('Reloading query, please wait...');
    }
    this.queryDefinitionService.fetchPipeline(this.pipelineId, this.dataSources$.value).subscribe(pipelineModel => {
      if (showSnackBar) {
        this.snackBar.open('Query reloaded', null, {
          duration: 2000
        });
      }
      this.titleService.setTitle(`${pipelineModel.Pipeline.Name} - Visual Query`);
      if (refreshPipeline) {
        this.pipelineModel$.next(pipelineModel);
      }
      if (refreshDataSourceConfigs) {
        this.calculateDataSourceConfigs(pipelineModel.DataSources);
      }
    });
  }
  showQueryResult(result, top, debugStream) {
    const dialogData = {
      result,
      debugStream,
      top
    };
    this.dialog.open(_query_result_query_result_component__WEBPACK_IMPORTED_MODULE_6__.QueryResultComponent, {
      autoFocus: false,
      backdropClass: 'dialog-backdrop',
      closeOnNavigation: false,
      data: dialogData,
      panelClass: ['dialog-panel', `dialog-panel-medium`, 'no-scrollbar'],
      // spm NOTE: position used to force align-items: flex-start; on cdk-global-overlay-wrapper.
      // Real top margin is overwritten in css e.g. dialog-panel-large
      position: {
        top: '0'
      },
      viewContainerRef: this.viewContainerRef
    });
    this.changeDetectorRef.markForCheck();
  }
  showStreamErrorResult(stream) {
    const dialogData = {
      errorData: stream.ErrorData
    };
    this.dialog.open(_stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_7__.StreamErrorResultComponent, {
      autoFocus: false,
      backdropClass: 'dialog-backdrop',
      closeOnNavigation: false,
      data: dialogData,
      panelClass: ['dialog-panel', `dialog-panel-medium`, 'no-scrollbar'],
      // spm NOTE: position used to force align-items: flex-start; on cdk-global-overlay-wrapper.
      // Real top margin is overwritten in css e.g. dialog-panel-large
      position: {
        top: '0'
      },
      viewContainerRef: this.viewContainerRef
    });
    this.changeDetectorRef.markForCheck();
  }
  fetchDataSources(callback) {
    this.queryDefinitionService.fetchDataSources().subscribe(dataSources => {
      this.dataSources$.next(dataSources);
      callback();
    });
  }
  attachKeyboardSave() {
    this.zone.runOutsideAngular(() => {
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(window, 'keydown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.filter)(() => !this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.filter)(event => {
        const CTRL_S = (navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey) && event.keyCode === 83;
        return CTRL_S;
      })).subscribe(event => {
        event.preventDefault();
        this.zone.run(() => {
          this.savePipeline();
        });
      }));
    });
  }
  static #_ = this.ɵfac = function VisualQueryService_Factory(t) {
    return new (t || VisualQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_query_definition_service__WEBPACK_IMPORTED_MODULE_2__.QueryDefinitionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_1__.MetadataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: VisualQueryService,
    factory: VisualQueryService.ɵfac
  });
}

/***/ }),

/***/ 34955:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/stream-error-result/stream-error-result.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StreamErrorResultComponent: () => (/* binding */ StreamErrorResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);








class StreamErrorResultComponent {
  constructor(dialogData, dialogRef) {
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
  }
  ngOnInit() {
    this.errorData = this.dialogData.errorData;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  openInsights() {
    window.open(window.$2sxc.http.apiUrl('sys/insights/logs?key=web-api-query'), '_blank');
  }
  static #_ = this.ɵfac = function StreamErrorResultComponent_Factory(t) {
    return new (t || StreamErrorResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StreamErrorResultComponent,
    selectors: [["app-stream-error-result"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 3,
    consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content"], ["align", "end"], ["mat-button", "", "tippy", "Open 2sxc Insights", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"]],
    template: function StreamErrorResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stream Error Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StreamErrorResultComponent_Template_button_click_4_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 5)(12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StreamErrorResultComponent_Template_button_click_12_listener() {
          return ctx.openInsights();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 1, ctx.errorData));
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
    styles: [".description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\npre[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9zdHJlYW0tZXJyb3ItcmVzdWx0L3N0cmVhbS1lcnJvci1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5wcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDkuNXB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 56669:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/visual-query.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualQueryComponent: () => (/* binding */ VisualQueryComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/context */ 68873);
/* harmony import */ var _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plumb-editor/plumb-editor.component */ 70090);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/visual-query.service */ 2628);
/* harmony import */ var _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-explorer/add-explorer.component */ 58323);
/* harmony import */ var _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./run-explorer/run-explorer.component */ 30555);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _services_query_definition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/query-definition.service */ 55871);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../permissions */ 4096);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-administration/services */ 75445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
















const _c0 = a0 => ({
  "active": a0
});
class VisualQueryComponent {
  constructor(context, route, visualQueryService) {
    this.context = context;
    this.route = route;
    this.visualQueryService = visualQueryService;
    this.explorer = {
      run: 'run',
      add: 'add'
    };
    this.activeExplorer = this.explorer.run;
    this.context.init(this.route);
  }
  ngOnInit() {
    this.visualQueryService.init();
  }
  toggleExplorer(explorer) {
    this.activeExplorer = this.activeExplorer === explorer ? null : explorer;
  }
  openHelp() {
    window.open('https://go.2sxc.org/visual-query', '_blank');
  }
  static #_ = this.ɵfac = function VisualQueryComponent_Factory(t) {
    return new (t || VisualQueryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_2__.VisualQueryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: VisualQueryComponent,
    selectors: [["app-visual-query"]],
    viewQuery: function VisualQueryComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_1__.PlumbEditorComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.plumbEditor = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_services_visual_query_service__WEBPACK_IMPORTED_MODULE_2__.VisualQueryService, _services_query_definition_service__WEBPACK_IMPORTED_MODULE_5__.QueryDefinitionService, _permissions__WEBPACK_IMPORTED_MODULE_6__.MetadataService, _app_administration_services__WEBPACK_IMPORTED_MODULE_7__.ContentTypesService]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 8,
    consts: [[1, "editor-root"], [1, "editor-side-toolbar"], ["tippy", "Run", 1, "button", 3, "click", "ngClass"], ["tippy", "Add", 1, "button", 3, "click", "ngClass"], [1, "spacer"], ["tippy", "Help", 1, "button", 3, "click"], [3, "hidden"]],
    template: function VisualQueryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VisualQueryComponent_Template_div_click_3_listener() {
          return ctx.toggleExplorer(ctx.explorer.run);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VisualQueryComponent_Template_div_click_6_listener() {
          return ctx.toggleExplorer(ctx.explorer.add);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VisualQueryComponent_Template_div_click_10_listener() {
          return ctx.openHelp();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-run-explorer", 6)(14, "app-add-explorer", 6)(15, "app-plumb-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx.activeExplorer === ctx.explorer.run));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, ctx.activeExplorer === ctx.explorer.add));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.activeExplorer !== ctx.explorer.run);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.activeExplorer !== ctx.explorer.add);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_4__.RunExplorerComponent, _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_3__.AddExplorerComponent, _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_1__.PlumbEditorComponent],
    styles: [".editor-side-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS92aXN1YWwtcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Itc2lkZS10b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_visual-query_visual-query_component_ts.js.map