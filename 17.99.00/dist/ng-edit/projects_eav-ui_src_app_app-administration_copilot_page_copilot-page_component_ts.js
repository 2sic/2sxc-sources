"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts"],{

/***/ 51802:
/*!*******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/copilot/copilot-generator.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopilotGeneratorComponent: () => (/* binding */ CopilotGeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _copilot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copilot-service */ 41461);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);






















function CopilotGeneratorComponent_Conditional_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 9)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const generator_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", generator_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", generator_r3.name, " v", generator_r3.version, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", generator_r3.description, " ");
  }
}
function CopilotGeneratorComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-hint", 10);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.descriptionHtml, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function CopilotGeneratorComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 3)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Generator");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function CopilotGeneratorComponent_Conditional_9_Template_mat_select_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.selectedGenerator, $event) || (ctx_r1.selectedGenerator = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](6, CopilotGeneratorComponent_Conditional_9_For_7_Template, 5, 4, "mat-option", 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CopilotGeneratorComponent_Conditional_9_Conditional_8_Template, 1, 1, "mat-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.selectedGenerator);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedGenerator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.sort());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](8, (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 3, ctx_r1.selectedGenerator$)) ? 8 : -1, tmp_5_0);
  }
}
function CopilotGeneratorComponent_Conditional_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 9)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const edition_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", edition_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](edition_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", edition_r5.description, ") ");
  }
}
function CopilotGeneratorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 3)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select an Edition to generate code for");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function CopilotGeneratorComponent_Conditional_12_Template_mat_select_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.selectedEdition, $event) || (ctx_r1.selectedEdition = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](4, CopilotGeneratorComponent_Conditional_12_For_5_Template, 4, 3, "mat-option", 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Editions are managed in the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "/App_Data/app.json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " file. See ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.selectedEdition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.sort());
  }
}
class CopilotGeneratorComponent {
  constructor(http, context, snackBar) {
    this.http = http;
    this.context = context;
    this.snackBar = snackBar;
    this.title = 'Copilot Generator';
    this.copilotSvc = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_copilot_service__WEBPACK_IMPORTED_MODULE_1__.CopilotService);
    this.webApiGeneratedCode = 'admin/code/generateDataModels';
    this.editions$ = this.copilotSvc.getEditions();
    this.generators$ = this.copilotSvc.getGenerators().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(gens => gens.filter(g => g.outputType === this.outputType)));
    this.selectedGenerator$ = this.generators$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(gens => gens.find(g => g.name === this.selectedGenerator)));
    this.selectedGenerator = '';
    this.selectedEdition = '';
  }
  ngOnInit() {
    this.generators$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(gens => {
      this.selectedGenerator = gens[0]?.name ?? '';
    });
    this.copilotSvc.specs.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(specs => {
      // this.selectedGenerator = specs.generators[0]?.name ?? '';
      this.selectedEdition = specs.editions.find(e => e.isDefault)?.name ?? '';
    });
  }
  autoGeneratedCode() {
    this.http.get(this.webApiGeneratedCode, {
      params: {
        appId: this.context.appId.toString(),
        edition: this.selectedEdition,
        generator: this.selectedGenerator
      }
    }).subscribe(d => {
      console.log(d);
      this.snackBar.open(d.message + `\n (this took ${d.timeTaken}ms)`, null, {
        duration: 5000
      });
    });
  }
  static #_ = this.ɵfac = function CopilotGeneratorComponent_Factory(t) {
    return new (t || CopilotGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CopilotGeneratorComponent,
    selectors: [["app-copilot-generator"]],
    inputs: {
      outputType: "outputType",
      title: "title"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 7,
    consts: [[1, "eav-cards-box"], [1, "eav-card"], [1, "eav-card-header"], ["color", "accent", 1, "eav-mat-form-field"], [1, "eav-card-space-div"], ["align", "end"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], ["required", "", 3, "valueChange", "value"], [3, "value"], [3, "innerHTML"], ["href", "https://go.2sxc.org/app-json", "target", "_blank"]],
    template: function CopilotGeneratorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "support_agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CopilotGeneratorComponent_Conditional_9_Template, 11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CopilotGeneratorComponent_Conditional_12_Template, 14, 1, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-card-actions", 5)(16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CopilotGeneratorComponent_Template_button_click_16_listener() {
          return ctx.autoGeneratedCode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Generate Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](9, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 3, ctx.generators$)) ? 9 : -1, tmp_1_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](12, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 5, ctx.editions$)) ? 12 : -1, tmp_2_0);
      }
    },
    dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 41461:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/copilot/copilot-service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopilotService: () => (/* binding */ CopilotService)
/* harmony export */ });
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/logging/eav-logger */ 6812);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);








const logThis = false;
class CopilotService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_0__.ServiceBase {
  static #_ = this.webApiEditions = 'admin/code/getEditions';
  static #_2 = this.webApiGeneratedCode = 'admin/code/generateDataModels';
  constructor(http, context) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__.EavLogger('CopilotService', logThis));
    this.http = http;
    this.context = context;
    this.specs = this.getCopilotSpecs();
  }
  getEditions() {
    return this.specs.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.editions));
  }
  getDefaultEdition() {
    return this.specs.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.editions.find(e => e.isDefault)));
  }
  getGenerators() {
    return this.specs.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.generators));
  }
  getCopilotSpecs() {
    return this.http.get(CopilotService.webApiEditions, {
      params: {
        appId: this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(data => {
      const defaultOrFirst = this.findDefaultEdition(data.editions);
      const editions = data.editions.map(d => {
        const isDefault = d == defaultOrFirst;
        return {
          ...d,
          isDefault,
          description: (d.description || "no description provided") + (isDefault ? ' ✅' : ''),
          label: `/${d.name}/AppCode/Data`.replace(/\/\//g, '/')
        };
      });
      return {
        ...data,
        editions
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
  }
  findDefaultEdition(editions) {
    return editions.find(d => d.isDefault) ?? editions.find(d => d.name === '') ?? editions[0];
  }
  static #_3 = this.ɵfac = function CopilotService_Factory(t) {
    return new (t || CopilotService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context));
  };
  static #_4 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: CopilotService,
    factory: CopilotService.ɵfac
  });
}

/***/ }),

/***/ 79630:
/*!*******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/copilot/page/copilot-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopilotPageComponent: () => (/* binding */ CopilotPageComponent)
/* harmony export */ });
/* harmony import */ var _copilot_generator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../copilot-generator.component */ 51802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);




class CopilotPageComponent {
  constructor(activatedRoute) {
    this.data = activatedRoute.snapshot.data;
  }
  static #_ = this.ɵfac = function CopilotPageComponent_Factory(t) {
    return new (t || CopilotPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CopilotPageComponent,
    selectors: [["app-data-copilot"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 4,
    consts: [[1, "outer-container"], [3, "outputType", "title"]],
    template: function CopilotPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-copilot-generator", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.intro, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("outputType", ctx.data.outputType)("title", ctx.data.title);
      }
    },
    dependencies: [_copilot_generator_component__WEBPACK_IMPORTED_MODULE_0__.CopilotGeneratorComponent],
    styles: [".outer-container[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9jb3BpbG90L3BhZ2UvY29waWxvdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts.js.map