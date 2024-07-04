"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_queries-rest-api_queries-rest-api_component_ts"],{

/***/ 73960:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/queries-rest-api/queries-rest-api.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueriesRestApiComponent: () => (/* binding */ QueriesRestApiComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 75445);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);


















function QueriesRestApiComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", contentType_r1.Guid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", contentType_r1.Name, " ");
  }
}
function QueriesRestApiComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, QueriesRestApiComponent_Conditional_5_For_1_Template, 2, 2, "mat-option", 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.sort());
  }
}
class QueriesRestApiComponent {
  constructor(fb, router, route) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.pipelinesService = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_services__WEBPACK_IMPORTED_MODULE_0__.PipelinesService);
    this.queryTypes$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(undefined);
  }
  ngOnInit() {
    this.fetchQueries();
    this.queryTypeForm = this.fb.group({
      queryType: ['']
    });
  }
  fetchQueries() {
    this.pipelinesService.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.contentTypes.query).subscribe(queries => {
      this.queryTypes$.next(queries);
      // When Route are reload and have some Guid in the Route
      const urlSegments = this.router.url.split('/');
      const urlGuidName = urlSegments[urlSegments.length - 1];
      const selectedContentType = queries.find(query => query.Guid === urlGuidName);
      if (selectedContentType) this.queryTypeForm.get('queryType').setValue(selectedContentType.Guid);
    });
  }
  openRestApi(event) {
    if (!event) return;
    this.router.navigate([`${event}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  static #_ = this.ɵfac = function QueriesRestApiComponent_Factory(t) {
    return new (t || QueriesRestApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: QueriesRestApiComponent,
    selectors: [["app-web-api-rest-api"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 4,
    consts: [[3, "formGroup"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "queryType", 3, "valueChange"], [3, "value"]],
    template: function QueriesRestApiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function QueriesRestApiComponent_Template_mat_select_valueChange_4_listener($event) {
          return ctx.openRestApi($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, QueriesRestApiComponent_Conditional_5_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "router-outlet");
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.queryTypeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](5, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 2, ctx.queryTypes$)) ? 5 : -1, tmp_1_0);
      }
    },
    dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__.SxcGridModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_queries-rest-api_queries-rest-api_component_ts.js.map