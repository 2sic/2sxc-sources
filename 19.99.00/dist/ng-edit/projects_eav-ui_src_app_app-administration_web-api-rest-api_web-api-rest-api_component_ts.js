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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../code-editor/services/source.service */ 79996);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);

















function WebApiRestApiComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const endpoint_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", endpoint_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", endpoint_r1.name, " ");
  }
}
function WebApiRestApiComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, WebApiRestApiComponent_Conditional_5_For_1_Template, 2, 2, "mat-option", 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.webApisTypes().sort());
  }
}
const logSpecs = {
  all: false,
  webApisTypes: true,
  syncUrl: true
};
class WebApiRestApiComponent {
  #sourceSvc;
  #dialogRouter;
  #formBuilder;
  constructor() {
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_2__.classLog)({
      WebApiRestApiComponent
    }, logSpecs);
    this.#sourceSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_1__.SourceService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_4__.DialogRoutingService);
    this.#formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
    this.#getAllWebApis = this.#sourceSvc.getWebApisSig();
    this.webApisTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => {
      const webApis = this.#getAllWebApis();
      return webApis;
    });
    this.webApiTypeForm = this.#formBuilder.group({
      webApiType: ['']
    });
    // Update form if the url changes and the item is found
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
      const l = this.log.fnIf('syncUrl');
      const webApis = this.webApisTypes();
      if (webApis.length === 0) return l.end();
      const urlPath = this.#dialogRouter.urlSegments.at(-1);
      var encodedUrlPath = urlPath.replace(/%252F/g, "/");
      const webApi = webApis.find(w => w.path === encodedUrlPath);
      l.a('status:', {
        webApis,
        webApi,
        urlPath,
        encodedUrlPath
      });
      if (webApi) this.webApiTypeForm.get('webApiType').setValue(webApi.path);
      l.end();
    });
  }
  #getAllWebApis;
  openRestApi(apiRoute) {
    if (!apiRoute) return;
    this.#dialogRouter.navRelative([encodeURIComponent(apiRoute)]);
  }
  static {
    this.ɵfac = function WebApiRestApiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebApiRestApiComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: WebApiRestApiComponent,
      selectors: [["app-web-api-rest-api"]],
      decls: 7,
      vars: 2,
      consts: [[3, "formGroup"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "webApiType", 3, "valueChange"], [3, "value"]],
      template: function WebApiRestApiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Endpoint");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function WebApiRestApiComponent_Template_mat_select_valueChange_4_listener($event) {
            return ctx.openRestApi($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, WebApiRestApiComponent_Conditional_5_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.webApiTypeForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.webApisTypes() ? 5 : -1);
        }
      },
      dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__.SxcGridModule],
      encapsulation: 2
    });
  }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);




const appFilesAll = 'admin/AppFiles/AppFiles';
const appFilesAsset = 'admin/AppFiles/asset';
const appFilesCreate = 'admin/AppFiles/create';
const apiExplorerInspect = 'admin/ApiExplorer/inspect';
const apiExplorerAppApiFiles = 'admin/ApiExplorer/AppApiFiles';
const appFilesPredefinedTemplates = 'admin/AppFiles/GetTemplates';
const appFilesPreview = 'admin/AppFiles/preview';
class SourceService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  /** ViewKey is templateId or path */
  get(viewKey, global, urlItems) {
    return this.getHttpApiUrl(appFilesAsset, {
      params: {
        appId: this.appId,
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
  // TODO: For Code Editor,
  // getSig(viewKey: string, global: boolean, urlItems: ViewOrFileIdentifier[], initial: undefined): Signal<SourceView> {
  //   // Signal für die SourceView erstellen
  //   const temp = this.getSignal<SourceView>(appFilesAsset, {
  //     params: {
  //       appId: this.appId,
  //       global,
  //       ...this.templateIdOrPath(viewKey, global, urlItems),
  //     },
  //   }, initial);
  //   return computed(() => {
  //     const result = temp();
  //     if (result && result.Type.toLocaleLowerCase() === 'auto') {
  //       switch (result.Extension.toLocaleLowerCase()) {
  //         case '.cs':
  //         case '.cshtml':
  //           result.Type = 'Razor';
  //           break;
  //         case '.html':
  //         case '.css':
  //         case '.js':
  //           result.Type = 'Token';
  //           break;
  //       }
  //     }
  //     return result;
  //   });
  // }
  /** ViewKey is templateId or path */
  save(viewKey, global, view, urlItems) {
    return this.http.post(this.apiUrl(appFilesAsset), view, {
      params: {
        appId: this.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    });
  }
  getAll(mask) {
    return this.getHttpApiUrl(appFilesAll, {
      params: {
        appId: this.appId,
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
    return this.getHttpApiUrl(apiExplorerAppApiFiles, {
      params: {
        appId: this.appId
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
  getWebApisSig() {
    // Get the signal that retrieves the API files
    const apiFilesSignal = this.getSignal(apiExplorerAppApiFiles, {
      params: {
        appId: this.appId
      }
    });
    // Use a computed signal to transform the data
    const webApisSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const files = apiFilesSignal()?.files;
      if (!files) return [];
      // Ensure the default values for `isShared` and `isCompiled`
      files.forEach(file => {
        file.isShared ??= false;
        file.isCompiled ??= false;
      });
      // Map the files to the desired WebApi format
      return files.map(file => {
        const splitIndex = file.path.lastIndexOf('/');
        const fileExtIndex = file.path.lastIndexOf('.');
        const folder = file.path.substring(0, splitIndex);
        const name = file.path.substring(splitIndex + 1, fileExtIndex);
        return {
          path: file.path,
          folder,
          name,
          isShared: file.isShared,
          endpointPath: file.endpointPath,
          isCompiled: file.isCompiled,
          edition: file.edition
        };
      });
    });
    return webApisSignal;
  }
  getWebApiDetails(apiPath) {
    return this.getHttpApiUrl(apiExplorerInspect, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId,
        path: apiPath
      }
    });
  }
  getPredefinedTemplates(purpose, type) {
    return this.getHttpApiUrl(appFilesPredefinedTemplates, {
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
    return this.getHttpApiUrl(appFilesPreview, {
      params: {
        appId: this.appId,
        path,
        templateKey,
        global
      }
    });
  }
  create(path, global, templateKey) {
    return this.http.post(this.apiUrl(appFilesCreate), {}, {
      params: {
        appId: this.appId,
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
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSourceService_BaseFactory;
      return function SourceService_Factory(__ngFactoryType__) {
        return (ɵSourceService_BaseFactory || (ɵSourceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SourceService)))(__ngFactoryType__ || SourceService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SourceService,
      factory: SourceService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_web-api-rest-api_web-api-rest-api_component_ts.js.map