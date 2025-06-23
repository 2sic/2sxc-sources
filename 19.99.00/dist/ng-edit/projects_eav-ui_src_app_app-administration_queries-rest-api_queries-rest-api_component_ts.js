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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ 75445);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);


















function QueriesRestApiComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", contentType_r1.Guid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", contentType_r1.Name, " ");
  }
}
function QueriesRestApiComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](0, QueriesRestApiComponent_Conditional_5_For_1_Template, 2, 2, "mat-option", 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.queryTypes().sort());
  }
}
const logSpecs = {
  all: false,
  queryTypes: true
};
class QueriesRestApiComponent {
  #pipelinesSvc;
  #dialogRouter;
  #formBuilder;
  constructor() {
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_2__.classLog)({
      QueriesRestApiComponent
    }, logSpecs);
    this.#pipelinesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services__WEBPACK_IMPORTED_MODULE_5__.PipelinesService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_4__.DialogRoutingService);
    this.#formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder);
    this.#getAllQueryTypes = this.#pipelinesSvc.getAllRes(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.contentTypes.query, []);
    this.queryTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => {
      const l = this.log.fnIf('queryTypes');
      const queries = this.#getAllQueryTypes.value();
      return l.r(queries || []);
    }, {});
    this.queryTypeForm = this.#formBuilder.group({
      queryType: ['']
    });
    // Update form if the url changes and the item is found
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.effect)(() => {
      const queryTypes = this.queryTypes();
      if (queryTypes.length === 0) return;
      const urlGuidName = this.#dialogRouter.urlSegments.at(-1);
      const selectedContentType = queryTypes.find(q => q.Guid === urlGuidName);
      if (selectedContentType) this.queryTypeForm.get('queryType').setValue(selectedContentType.Guid);
    });
  }
  #getAllQueryTypes;
  openRestApi(event) {
    if (!event) return;
    this.#dialogRouter.navRelative([`${event}`]);
  }
  static {
    this.ɵfac = function QueriesRestApiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QueriesRestApiComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: QueriesRestApiComponent,
      selectors: [["app-web-api-rest-api"]],
      decls: 7,
      vars: 2,
      consts: [[3, "formGroup"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "queryType", 3, "valueChange"], [3, "value"]],
      template: function QueriesRestApiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Query");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function QueriesRestApiComponent_Template_mat_select_valueChange_4_listener($event) {
            return ctx.openRestApi($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QueriesRestApiComponent_Conditional_5_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.queryTypeForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.queryTypes() ? 5 : -1);
        }
      },
      dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__.SxcGridModule],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_queries-rest-api_queries-rest-api_component_ts.js.map