"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_web-api-rest-api_web-api-rest-api_component_ts"],{

/***/ 79262:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/web-api-rest-api/web-api-rest-api.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebApiRestApiComponent: () => (/* binding */ WebApiRestApiComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../code-editor/services/source.service */ 79996);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);

















function WebApiRestApiComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const endpoint_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", endpoint_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", endpoint_r1.name, " ");
  }
}
function WebApiRestApiComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, WebApiRestApiComponent_Conditional_5_For_1_Template, 2, 2, "mat-option", 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.sort());
  }
}
class WebApiRestApiComponent {
  constructor(fb, router, route) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.sourceService = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_0__.SourceService);
    this.webApis$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
  }
  ngOnInit() {
    this.fetchWebApis();
    this.webApiTypeForm = this.fb.group({
      webApiType: ['']
    });
  }
  fetchWebApis() {
    this.sourceService.getWebApis().subscribe(webApis => {
      this.webApis$.next(webApis);
      // When Route are reload and have some Guid in the Route
      const urlSegments = this.router.url.split('/');
      const urlPath = urlSegments[urlSegments.length - 1];
      // var encodedUrlPath = decodeURIComponent(urlPath) // not Working 2dg
      var encodedUrlPath = urlPath.replace("%252F", "/");
      const selectedContentType = webApis.find(webApi => webApi.path === encodedUrlPath);
      if (selectedContentType) this.webApiTypeForm.get('webApiType').setValue(selectedContentType.path);
    });
  }
  openRestApi(apiRoute) {
    if (!apiRoute) return;
    this.router.navigate([encodeURIComponent(apiRoute)], {
      relativeTo: this.route.parent.firstChild
    });
  }
  static #_ = this.ɵfac = function WebApiRestApiComponent_Factory(t) {
    return new (t || WebApiRestApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WebApiRestApiComponent,
    selectors: [["app-web-api-rest-api"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 4,
    consts: [[3, "formGroup"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "webApiType", 3, "valueChange"], [3, "value"]],
    template: function WebApiRestApiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Endpoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function WebApiRestApiComponent_Template_mat_select_valueChange_4_listener($event) {
          return ctx.openRestApi($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, WebApiRestApiComponent_Conditional_5_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "router-outlet");
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.webApiTypeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](5, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, ctx.webApis$)) ? 5 : -1, tmp_1_0);
      }
    },
    dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_1__.SxcGridModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 79996:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/services/source.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceService: () => (/* binding */ SourceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








const appFilesAll = 'admin/AppFiles/AppFiles';
const appFilesAsset = 'admin/AppFiles/asset';
const appFilesCreate = 'admin/AppFiles/create';
const apiExplorerInspect = 'admin/ApiExplorer/inspect';
const apiExplorerAppApiFiles = 'admin/ApiExplorer/AppApiFiles';
const appFilesPredefinedTemplates = 'admin/AppFiles/GetTemplates';
const appFilesPreview = 'admin/AppFiles/preview';
class SourceService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  /** ViewKey is templateId or path */
  get(viewKey, global, urlItems) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(appFilesAsset), {
      params: {
        appId: this.context.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(view => {
      if (view.Type.toLocaleLowerCase() === 'auto') {
        switch (view.Extension.toLocaleLowerCase()) {
          case '.cs':
          case '.cshtml':
            view.Type = 'Razor';
            break;
          case '.html':
          case '.css':
          case '.js':
            view.Type = 'Token';
            break;
        }
      }
      return view;
    }));
  }
  /** ViewKey is templateId or path */
  save(viewKey, global, view, urlItems) {
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(appFilesAsset), view, {
      params: {
        appId: this.context.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    });
  }
  getAll(mask) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(appFilesAll), {
      params: {
        appId: this.context.appId,
        ...(mask && {
          mask
        })
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      Files
    }) => {
      Files.forEach(file => {
        file.Shared ??= false;
      });
      return Files;
    }));
  }
  getWebApis() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(apiExplorerAppApiFiles), {
      params: {
        appId: this.context.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      files
    }) => {
      files.forEach(file => {
        file.isShared ??= false;
        file.isCompiled ??= false;
      });
      return files;
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(files => {
      const webApis = files.map(file => {
        const splitIndex = file.path.lastIndexOf('/');
        const fileExtIndex = file.path.lastIndexOf('.');
        const folder = file.path.substring(0, splitIndex);
        const name = file.path.substring(splitIndex + 1, fileExtIndex);
        const webApi = {
          path: file.path,
          folder,
          name,
          isShared: file.isShared,
          endpointPath: file.endpointPath,
          isCompiled: file.isCompiled,
          edition: file.edition
        };
        return webApi;
      });
      return webApis;
    }));
  }
  getWebApiDetails(apiPath) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(apiExplorerInspect), {
      params: {
        appId: this.context.appId,
        zoneId: this.context.zoneId,
        path: apiPath
      }
    });
  }
  getPredefinedTemplates(purpose, type) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(appFilesPredefinedTemplates), {
      params: {
        ...(purpose && {
          purpose
        }),
        ...(type && {
          type
        })
      }
    });
  }
  getPreview(path, global, templateKey) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(appFilesPreview), {
      params: {
        appId: this.context.appId,
        path,
        templateKey,
        global
      }
    });
  }
  create(path, global, templateKey) {
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(appFilesCreate), {}, {
      params: {
        appId: this.context.appId,
        global,
        purpose: 'auto',
        path,
        templateKey
      }
    });
  }
  templateIdOrPath(viewKey, global, urlItems) {
    if (/^[0-9]*$/g.test(viewKey)) {
      const path = urlItems.find(i => i.EntityId?.toString() === viewKey && i.IsShared === global)?.Path;
      return {
        templateId: viewKey,
        ...(path != null && {
          path
        })
      };
    } else {
      return {
        path: viewKey
      };
    }
  }
  static #_ = this.ɵfac = function SourceService_Factory(t) {
    return new (t || SourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SourceService,
    factory: SourceService.ɵfac
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_web-api-rest-api_web-api-rest-api_component_ts.js.map