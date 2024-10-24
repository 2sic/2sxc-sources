"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_visual-query_visual-query_component_ts"],{

/***/ 75445:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesService: () => (/* reexport safe */ _content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService),
/* harmony export */   DialogConfigGlobalService: () => (/* reexport safe */ _dialog_config_global_service__WEBPACK_IMPORTED_MODULE_0__.DialogConfigGlobalService),
/* harmony export */   ExportAppPartsService: () => (/* reexport safe */ _export_app_parts_service__WEBPACK_IMPORTED_MODULE_2__.ExportAppPartsService),
/* harmony export */   ExportAppService: () => (/* reexport safe */ _export_app_service__WEBPACK_IMPORTED_MODULE_3__.ExportAppService),
/* harmony export */   ImportAppPartsService: () => (/* reexport safe */ _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__.ImportAppPartsService),
/* harmony export */   PipelinesService: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.PipelinesService),
/* harmony export */   ViewsService: () => (/* reexport safe */ _views_service__WEBPACK_IMPORTED_MODULE_6__.ViewsService),
/* harmony export */   webApiAppPartsRoot: () => (/* reexport safe */ _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__.webApiAppPartsRoot),
/* harmony export */   webApiQueryDataSources: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQueryDataSources),
/* harmony export */   webApiQueryDebugStream: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQueryDebugStream),
/* harmony export */   webApiQueryGet: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQueryGet),
/* harmony export */   webApiQueryRun: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQueryRun),
/* harmony export */   webApiQuerySave: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQuerySave),
/* harmony export */   webApiTypeRoot: () => (/* reexport safe */ _content_types_service__WEBPACK_IMPORTED_MODULE_1__.webApiTypeRoot)
/* harmony export */ });
/* harmony import */ var _dialog_config_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-config-global.service */ 61479);
/* harmony import */ var _content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-types.service */ 17693);
/* harmony import */ var _export_app_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-app-parts.service */ 71475);
/* harmony import */ var _export_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export-app.service */ 320);
/* harmony import */ var _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import-app-parts.service */ 58624);
/* harmony import */ var _pipelines_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipelines.service */ 74079);
/* harmony import */ var _views_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views.service */ 2570);








/***/ }),

/***/ 74079:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/pipelines.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipelinesService: () => (/* binding */ PipelinesService),
/* harmony export */   webApiQueryDataSources: () => (/* binding */ webApiQueryDataSources),
/* harmony export */   webApiQueryDebugStream: () => (/* binding */ webApiQueryDebugStream),
/* harmony export */   webApiQueryGet: () => (/* binding */ webApiQueryGet),
/* harmony export */   webApiQueryRun: () => (/* binding */ webApiQueryRun),
/* harmony export */   webApiQuerySave: () => (/* binding */ webApiQuerySave)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/entity.service */ 9234);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);





const webApiQueryImport = 'admin/query/import';
const webApiQueryClone = 'admin/query/Clone';
const webApiQueryDelete = 'admin/query/Delete';
const webApiQueryRun = 'admin/query/Run';
const webApiQueryDebugStream = 'admin/query/DebugStream';
const webApiQuerySave = 'admin/query/Save';
const webApiQueryGet = 'admin/query/Get';
const webApiQueryDataSources = 'admin/query/DataSources';
class PipelinesService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  getAll(contentType) {
    return this.getHttpApiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType
      }
    });
  }
  importQuery(file) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__.toBase64)(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(fileBase64 => {
      return this.http.post(this.apiUrl(webApiQueryImport), {
        AppId: this.appId,
        ContentBase64: fileBase64
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(success => {
      const result = {
        Success: success,
        Messages: []
      };
      return result;
    }));
  }
  clonePipeline(id) {
    return this.getHttpApiUrl(webApiQueryClone, {
      params: {
        Id: id.toString(),
        appId: this.appId
      }
    });
  }
  delete(id) {
    return this.http.delete(this.apiUrl(webApiQueryDelete), {
      params: {
        appId: this.appId,
        Id: id.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵPipelinesService_BaseFactory;
      return function PipelinesService_Factory(__ngFactoryType__) {
        return (ɵPipelinesService_BaseFactory || (ɵPipelinesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](PipelinesService)))(__ngFactoryType__ || PipelinesService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: PipelinesService,
      factory: PipelinesService.ɵfac
    });
  }
}

/***/ }),

/***/ 2570:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/views.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsService: () => (/* binding */ ViewsService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiViewRoot = 'admin/view/';
const webApiViews = webApiViewRoot + 'all';
const webApiViewDelete = webApiViewRoot + 'delete';
const webApiViewImport = webApiViewRoot + 'import';
const webApiViewPolymorph = webApiViewRoot + 'polymorphism';
const webApiViewUsage = webApiViewRoot + 'usage';
class ViewsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getAll() {
    return this.getHttpApiUrl(webApiViews, {
      params: {
        appId: this.appId
      }
    });
  }
  delete(id) {
    return this.getHttpApiUrl(webApiViewDelete, {
      params: {
        appId: this.appId,
        Id: id.toString()
      }
    });
  }
  import(file) {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.apiUrl(webApiViewImport), formData, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  export(id) {
    const url = this.apiUrl(webApiViewRoot + 'json') + '?appId=' + this.appId + '&viewId=' + id;
    window.open(url, '_blank', '');
  }
  getPolymorphism() {
    return this.getHttpApiUrl(webApiViewPolymorph, {
      params: {
        appId: this.appId
      }
    });
  }
  getUsage(guid) {
    return this.getHttpApiUrl(webApiViewUsage, {
      params: {
        appId: this.appId,
        guid
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵViewsService_BaseFactory;
      return function ViewsService_Factory(__ngFactoryType__) {
        return (ɵViewsService_BaseFactory || (ɵViewsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ViewsService)))(__ngFactoryType__ || ViewsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ViewsService,
      factory: ViewsService.ɵfac
    });
  }
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
  static {
    this.ɵfac = function MousedownStopPropagationDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MousedownStopPropagationDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
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
}

/***/ }),

/***/ 4981:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/array.helpers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayHelpers: () => (/* binding */ ArrayHelpers)
/* harmony export */ });
class ArrayHelpers {
  /**
   * Toggles an item in an array. If the item is not in the array, it is added. If it is in the array, it is removed.
   * @param item The item to toggle
   * @param array The array to toggle the item in
   */
  static toggleInArray(item, array) {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
  }
}
// function onlyUnique<T extends unknown>(value: T, index: number, array: T[]): boolean {
//   return array.indexOf(value) === index;
// }

/***/ }),

/***/ 70693:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/file-to-base64.helper.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toBase64: () => (/* binding */ toBase64),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result.split(',')[1]);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}
function toString(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = error => {
      reject(error);
    };
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/array.helpers */ 4981);
/* harmony import */ var _plumb_editor_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plumb-editor/plumb-editor.helpers */ 19727);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/visual-query.service */ 2628);
/* harmony import */ var _add_explorer_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-explorer.helpers */ 34697);














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
    let tmp_13_0;
    const group_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tippy", ctx_r1.guiTypes[group_r4.key].UiHint || group_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.guiTypes[group_r4.key].Icon || ctx_r1.guiTypes.Unknown.Icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_13_0 = (tmp_13_0 = ctx_r1.guiTypes[group_r4.key].Label) !== null && tmp_13_0 !== undefined ? tmp_13_0 : ctx_r1.guiTypes[group_r4.key].Name) !== null && tmp_13_0 !== undefined ? tmp_13_0 : group_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.toggledItems.includes(group_r4.key) ? 5 : -1);
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 0, ctx_r1.sorted()));
  }
}
class AddExplorerComponent {
  #difficulties;
  #difficulty;
  constructor(visualQueryService) {
    this.visualQueryService = visualQueryService;
    this.toggledItems = [];
    this.guiTypes = _plumb_editor_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_3__.guiTypes;
    this.#difficulties = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.pipelineDesigner.dataSourceDifficulties;
    this.#difficulty = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(this.#difficulties.default);
    this.sorted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => (0,_add_explorer_helpers__WEBPACK_IMPORTED_MODULE_5__.filterAndSortDataSources)(this.visualQueryService.dataSources(), this.#difficulty()));
  }
  toggleDifficulty(event) {
    const difficulty = event.checked ? this.#difficulties.advanced : this.#difficulties.default;
    this.#difficulty.set(difficulty);
  }
  addDataSource(dataSource) {
    this.visualQueryService.addDataSource(dataSource);
  }
  toggleItem(item) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(item, this.toggledItems);
  }
  trackGroups(index, type) {
    return type.key;
  }
  trackDataSources(index, dataSource) {
    return dataSource.PartAssemblyAndType;
  }
  static {
    this.ɵfac = function AddExplorerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_4__.VisualQueryStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AddExplorerComponent,
      selectors: [["app-add-explorer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[1, "editor-active-explorer", "fancy-scrollbar-dark"], [1, "eav-show-advanced"], [1, "eav-slide-toggle-label"], ["color", "primary", 3, "change"], ["tippyShowDelay", "750", 1, "collapsible", 3, "click", "tippy"], [1, "list"], ["tippyShowDelay", "750", 1, "list-item", 3, "tippy"], ["tippyShowDelay", "750", 1, "list-item", 3, "click", "tippy"]],
      template: function AddExplorerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AddExplorerComponent_Conditional_0_Template, 8, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.sorted() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      styles: [".mat-mdc-slide-toggle[_ngcontent-%COMP%] {\n  margin: 6px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.collapsible[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 3px 0;\n}\n.collapsible[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.collapsible[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  margin-left: 8px;\n  margin-right: 4px;\n}\n\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 4px 0 4px 24px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 4px;\n}\n\n.eav-show-advanced[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9hZGQtZXhwbG9yZXIvYWRkLWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsaUNBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxpQ0FBQTtBQURKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBTUE7RUFDRSxnQkFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZGMtc2xpZGUtdG9nZ2xlIHtcclxuICBtYXJnaW46IDZweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQ1LCA0Nik7XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCAubGlzdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweCAwIDRweCAyNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQ1LCA0Nik7XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LXNob3ctYWR2YW5jZWQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
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
  if (!dataSources) return;
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

/***/ 2630:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/plumb-editor/endpoints.helper.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointsHelper: () => (/* binding */ EndpointsHelper)
/* harmony export */ });
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/logging */ 34435);

const logSpecs = {
  all: true,
  getEndpointOverlays: true,
  getEndpointInfo: true,
  buildSourceEndpoint: true,
  buildTargetEndpoint: true
};
class EndpointsHelper {
  constructor(plumb) {
    this.plumb = plumb;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      EndpointsHelper
    }, logSpecs);
  }
  getEndpointOverlays(isSource) {
    const l = this.log.fnIf('getEndpointOverlays', {
      isSource
    });
    const result = [['Label', {
      id: 'endpointLabel',
      location: [0.5, isSource ? 0 : 1],
      label: 'Default',
      cssClass: isSource ? 'endpointSourceLabel' : 'endpointTargetLabel'
    }]];
    return l.r(result);
  }
  getEndpointInfo(endpointName, isDynamic) {
    const l = this.log.fnIf('getEndpointInfo', {
      endpointName,
      isDynamic
    });
    let name;
    let required;
    const trimmed = endpointName.trim();
    required = trimmed.endsWith('*');
    name = !required ? trimmed : trimmed.substring(0, trimmed.length - 1);
    if (isDynamic) return l.r({
      name,
      required: false
    }, 'isDynamic');
    return l.r({
      name,
      required
    }, 'notDynamic');
  }
  buildSourceEndpoint(pipelineDataSourceGuid, style) {
    const l = this.log.fnIf('buildSourceEndpoint', {
      pipelineDataSourceGuid,
      style
    });
    const isSource = true;
    const sourceEndpoint = {
      paintStyle: {
        fill: 'transparent',
        radius: 10
      },
      cssClass: 'sourceEndpoint ' + (style ?? ''),
      maxConnections: -1,
      isSource,
      anchor: ['Continuous', {
        faces: ['top']
      }],
      overlays: this.getEndpointOverlays(isSource),
      events: {
        click: endpointOrOverlay => this.plumb.onChangeLabel(endpointOrOverlay, isSource, pipelineDataSourceGuid)
      }
    };
    return l.r(sourceEndpoint);
  }
  buildTargetEndpoint(pipelineDataSourceGuid, style) {
    const l = this.log.fnIf('buildTargetEndpoint', {
      pipelineDataSourceGuid,
      style
    });
    const isSource = false;
    const targetEndpoint = {
      paintStyle: {
        fill: 'transparent',
        radius: 10
      },
      cssClass: 'targetEndpoint ' + (style ?? ' '),
      // + (angled ? 'angled' : ''),
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
        click: endpointOrOverlay => this.plumb.onChangeLabel(endpointOrOverlay, isSource, pipelineDataSourceGuid)
      }
    };
    return l.r(targetEndpoint);
  }
}

/***/ }),

/***/ 47709:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/plumb-editor/plumb-editor.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlumbEditorComponent: () => (/* binding */ PlumbEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/mousedown-stop-propagation.directive */ 23840);
/* harmony import */ var _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/helpers/json.helpers */ 4038);
/* harmony import */ var _shared_helpers_load_scripts_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/helpers/load-scripts.helper */ 33518);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _services_query_definition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/query-definition.service */ 55871);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/visual-query.service */ 2628);
/* harmony import */ var _plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plumb-editor.helpers */ 19727);
/* harmony import */ var _plumber_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plumber.helper */ 59117);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
// tslint:disable-next-line:max-line-length




















const _c0 = ["domRoot"];
const _c1 = ["domDataSource"];
const _c2 = (a0, a1, a2) => ({
  top: a0,
  left: a1,
  "min-width": a2
});
const _c3 = a0 => ({
  "show-details": a0
});
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_5_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.configureDataSource(dataSource_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_6_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.openHelp(ctx_r3.typeInfos()[dataSource_r3.EntityGuid].HelpLink));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " help_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_8_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.remove(dataSource_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_21_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 21)(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", config_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](config_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", config_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](config_r7.value);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "hr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](2, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_21_For_3_Template, 5, 4, "tr", 21, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx_r3.vsSvc.dataSourceConfigs()[dataSource_r3.EntityId]);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 14);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 15);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 3, 1)(2, "div", 4)(3, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_5_Template, 2, 0, "mat-icon", 6)(6, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_6_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_8_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Template_div_click_9_listener() {
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.vsSvc.pipelineModel().Pipeline.AllowEdit && ctx_r3.editName(dataSource_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Template_div_click_15_listener() {
      const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.vsSvc.pipelineModel().Pipeline.AllowEdit && ctx_r3.editDescription(dataSource_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_21_Template, 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_24_Template, 1, 0, "div", 14)(25, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Conditional_25_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_24_0;
    const dataSource_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx_r3.dataSrcIdPrefix + dataSource_r3.EntityGuid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](15, _c2, dataSource_r3.VisualDesignerData.Top + "px", dataSource_r3.VisualDesignerData.Left + "px", dataSource_r3.VisualDesignerData.Width ? dataSource_r3.VisualDesignerData.Width + "px" : null))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](19, _c3, ctx_r3.showDataSourceDetails() && ((tmp_16_0 = ctx_r3.vsSvc.dataSourceConfigs()[dataSource_r3.EntityId]) == null ? null : tmp_16_0.length)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx_r3.typeInfos()[dataSource_r3.EntityGuid].UiHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.typeInfos()[dataSource_r3.EntityGuid].Icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r3.vsSvc.pipelineModel().Pipeline.AllowEdit && ctx_r3.typeInfos()[dataSource_r3.EntityGuid].EnableConfig ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r3.typeInfos()[dataSource_r3.EntityGuid].HelpLink ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r3.vsSvc.pipelineModel().Pipeline.AllowEdit && !ctx_r3.isOutDataSource(dataSource_r3) ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](dataSource_r3.Name || "(no name)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](dataSource_r3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r3.showDataSourceDetails() && ((tmp_24_0 = ctx_r3.vsSvc.dataSourceConfigs()[dataSource_r3.EntityId]) == null ? null : tmp_24_0.length) ? 21 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", dataSource_r3.PartAssemblyAndType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Type: ", ctx_r3.getTypeName(dataSource_r3.PartAssemblyAndType), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r3.vsSvc.pipelineModel().Pipeline.AllowEdit && ctx_r3.typeInfos()[dataSource_r3.EntityGuid].DynamicOut ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r3.vsSvc.pipelineModel().Pipeline.AllowEdit && ctx_r3.typeInfos()[dataSource_r3.EntityGuid].DynamicIn ? 25 : -1);
  }
}
function PlumbEditorComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](0, PlumbEditorComponent_Conditional_0_Conditional_2_For_1_Template, 26, 21, "div", 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx_r3.vsSvc.pipelineModel().DataSources);
  }
}
function PlumbEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PlumbEditorComponent_Conditional_0_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](!ctx_r3.hardReset ? 2 : -1);
  }
}
const logSpecs = {
  all: false,
  ngAfterViewInit: false
};
const jsPlumbUrl = 'https://cdnjs.cloudflare.com/ajax/libs/jsPlumb/2.14.5/js/jsplumb.min.js';
class PlumbEditorComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  #plumber;
  #scriptLoaded$;
  #queryDefinitionSvc;
  constructor(vsSvc,
  // Check if this not with transient better
  changeDetectorRef, matDialog, viewContainerRef) {
    super();
    this.vsSvc = vsSvc;
    this.changeDetectorRef = changeDetectorRef;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_6__.classLog)({
      PlumbEditorComponent
    }, logSpecs);
    this.dataSrcIdPrefix = _plumber_helper__WEBPACK_IMPORTED_MODULE_10__.dataSrcIdPrefix;
    this.hardReset = false;
    this.#scriptLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(false);
    this.#queryDefinitionSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_query_definition_service__WEBPACK_IMPORTED_MODULE_7__.QueryDefinitionService);
    this.showDataSourceDetails = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.computed)(() => {
      const result = _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_4__.JsonHelpers.tryParse(this.vsSvc.pipelineModel()?.Pipeline.VisualDesignerData) ?? {};
      return result.ShowDataSourceDetails ?? false;
    });
    this.typeInfos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.computed)(() => (0,_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_9__.calculateTypeInfos)(this.vsSvc.pipelineModel()?.DataSources ?? [], this.vsSvc.dataSources()));
  }
  ngOnInit() {
    (0,_shared_helpers_load_scripts_helper__WEBPACK_IMPORTED_MODULE_5__.loadScripts)([{
      test: 'jsPlumb',
      src: jsPlumbUrl
    }], () => {
      this.#scriptLoaded$.next(true);
    });
    this.subscriptions.add(this.vsSvc.putEntityCountOnConnections$.subscribe(result => {
      this.#plumber.putEntityCountOnConnections(result);
    }));
    // this.viewModel$ = combineLatest([
    //   this.vsSvc.pipelineModel$,
    // ]).pipe(
    //   map(([pipelineModel]) => {
    //     if (pipelineModel == null) return;
    //     // workaround for jsPlumb not working with dom elements which it initialized on previously.
    //     // This wipes dom entirely and gives us new elements
    // TODO: @2dm Check with Daniel
    //     this.hardReset = true;
    //     this.changeDetectorRef.detectChanges();
    //     this.hardReset = false;
    //     const viewModel: PlumbEditorViewModel = {
    //       removed: "removeLater",
    //     };
    //     return viewModel;
    //   }),
    // );
  }
  ngAfterViewInit() {
    const l = this.log.fnIf('ngAfterViewInit');
    // https://stackoverflow.com/questions/37087864/execute-a-function-when-ngfor-finished-in-angular-2/37088348#37088348
    const domDataSourcesLoaded$ = this.domDataSourcesRef.changes.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(() => true));
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.#scriptLoaded$, domDataSourcesLoaded$]).subscribe(([scriptLoaded, domDataSourcesLoaded]) => {
      if (!scriptLoaded || !domDataSourcesLoaded) return;
      l.a('scriptLoaded and domDataSourcesLoaded', {
        scriptLoaded,
        domDataSourcesLoaded
      });
      this.#plumber?.destroy();
      this.#plumber = new _plumber_helper__WEBPACK_IMPORTED_MODULE_10__.Plumber(this.domRootRef.nativeElement, this.vsSvc.pipelineModel(), this.vsSvc.dataSources(), this.onConnectionsChanged.bind(this), this.onDragend.bind(this), this.onDebugStream.bind(this), this.matDialog, this.viewContainerRef, this.changeDetectorRef);
    }));
    l.end();
  }
  ngOnDestroy() {
    this.#plumber?.destroy();
    this.#scriptLoaded$.complete();
    super.ngOnDestroy();
  }
  onConnectionsChanged() {
    const connections = this.#plumber.getAllConnections();
    const streamsOut = this.#plumber.getStreamsOut();
    this.vsSvc.changeConnections(connections, streamsOut);
  }
  onDragend(pipelineDataSourceGuid, position) {
    this.vsSvc.changeDataSourcePosition(pipelineDataSourceGuid, position);
  }
  onDebugStream(stream) {
    this.vsSvc.debugStream(stream);
  }
  configureDataSource(dataSource) {
    // ensure dataSource entity is saved
    if (dataSource.EntityGuid.includes('unsaved')) return this.vsSvc.saveAndRun(true, false);
    this.vsSvc.editDataSource(dataSource);
  }
  getTypeName(partAssemblyAndType) {
    const dataSource = this.vsSvc.dataSources().find(ds => ds.PartAssemblyAndType === partAssemblyAndType);
    return this.#queryDefinitionSvc.typeNameFilter(dataSource?.TypeNameForUi || partAssemblyAndType, 'className');
  }
  isOutDataSource(pipelineDataSource) {
    return pipelineDataSource.PartAssemblyAndType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.pipelineDesigner.outDataSource.PartAssemblyAndType;
  }
  remove(pipelineDataSource) {
    if (!confirm(`Delete ${pipelineDataSource.Name} data source?`)) return;
    this.#plumber.removeEndpointsOnDataSource(pipelineDataSource.EntityGuid);
    const connections = this.#plumber.getAllConnections();
    const streamsOut = this.#plumber.getStreamsOut();
    this.vsSvc.removeDataSource(pipelineDataSource.EntityGuid, connections, streamsOut);
  }
  openHelp(url) {
    window.open(url, '_blank');
  }
  editName(dataSource) {
    const newName = prompt('Rename data source', dataSource.Name)?.trim();
    if (newName == null || newName === '') return;
    this.vsSvc.renameDataSource(dataSource.EntityGuid, newName);
  }
  editDescription(dataSource) {
    const newDescription = prompt('Edit description', dataSource.Description)?.trim();
    if (newDescription == null) return;
    this.vsSvc.changeDataSourceDescription(dataSource.EntityGuid, newDescription);
  }
  static {
    this.ɵfac = function PlumbEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PlumbEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_8__.VisualQueryStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: PlumbEditorComponent,
      selectors: [["app-plumb-editor"]],
      viewQuery: function PlumbEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.domRootRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.domDataSourcesRef = _t);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["domRoot", ""], ["domDataSource", ""], ["id", "pipeline-root"], [1, "dataSource", 3, "id", "ngStyle", "ngClass"], [1, "actions", "left"], [1, "type-info", 3, "title"], ["title", "Configure data source", "appMousedownStopPropagation", "", 1, "configure"], ["title", "Help for this data source", "appMousedownStopPropagation", "", 1, "help"], [1, "actions", "right"], ["title", "Delete", "appMousedownStopPropagation", "", 1, "delete"], ["title", "Click to edit name", "appMousedownStopPropagation", "", 1, "name", 3, "click"], [1, "show-hover-inline"], ["title", "Click to edit description", "appMousedownStopPropagation", "", 1, "description", 3, "click"], [1, "typename", 3, "title"], ["title", "Drag a new Out-Connection", 1, "add-endpoint", "sourceEndpoint", "dynamic"], ["title", "This data source supports multiple In-Connections", 1, "many-in", "targetEndpoint", "dynamic"], ["title", "Configure data source", "appMousedownStopPropagation", "", 1, "configure", 3, "click"], ["title", "Help for this data source", "appMousedownStopPropagation", "", 1, "help", 3, "click"], ["title", "Delete", "appMousedownStopPropagation", "", 1, "delete", 3, "click"], [2, "margin", "0"], [1, "configs"], [1, "config"], [1, "config-name", 3, "title"], [1, "config-value", 3, "title"]],
      template: function PlumbEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, PlumbEditorComponent_Conditional_0_Template, 3, 1, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.vsSvc.pipelineModel() ? 0 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _shared_directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_3__.MousedownStopPropagationDirective],
      styles: ["[_nghost-%COMP%] { display: block; width: 100%; height: 100%; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9wbHVtYi1lZGl0b3IvcGx1bWItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
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
    const ds = dataSources.find(ds => ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
    if (ds) {
      typeInfo = {
        ...(ds.PrimaryType ? guiTypes[ds.PrimaryType] : guiTypes.Unknown)
      };
      if (ds.Icon != null) {
        typeInfo.Icon = ds.Icon;
      }
      if (ds.DynamicIn != null) {
        typeInfo.DynamicIn = ds.DynamicIn;
      }
      if (ds.DynamicOut != null) {
        typeInfo.DynamicOut = ds.DynamicOut;
      }
      if (ds.HelpLink != null) {
        typeInfo.HelpLink = ds.HelpLink;
      }
      if (ds.EnableConfig != null) {
        typeInfo.EnableConfig = ds.EnableConfig;
      }
      if (ds.UiHint != null) {
        typeInfo.UiHint = ds.UiHint;
      }
    }
    if (!typeInfo) typeInfo = {
      ...guiTypes.Unknown
    };
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
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _endpoints_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoints.helper */ 2630);
/* harmony import */ var _rename_stream_rename_stream_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rename-stream/rename-stream.component */ 12710);




const logSpecs = {
  all: true,
  addEndpoint: true
};
const dataSrcIdPrefix = 'dataSource_';
const endPointsWhereWeRotate = 3;
class Plumber {
  #instance;
  #lineCount;
  #linePaintDefault;
  #lineColors;
  #maxCols;
  #uuidColorMap;
  #bulkDelete;
  #dialog;
  #endpoints;
  constructor(jsPlumbRoot, pipelineModel, dataSources, onConnectionsChanged, onDragend, onDebugStream, matDialog, viewContainerRef, changeDetectorRef) {
    this.jsPlumbRoot = jsPlumbRoot;
    this.pipelineModel = pipelineModel;
    this.dataSources = dataSources;
    this.onConnectionsChanged = onConnectionsChanged;
    this.onDragend = onDragend;
    this.onDebugStream = onDebugStream;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_1__.classLog)({
      Plumber
    }, logSpecs);
    this.#lineCount = 0;
    this.#linePaintDefault = {
      stroke: '#61B7CF',
      strokeWidth: 4,
      outlineStroke: 'white',
      outlineWidth: 2
    };
    this.#lineColors = ['#009688', '#00bcd4', '#3f51b5', '#9c27b0', '#e91e63', '#db4437', '#ff9800', '#60a917', '#60a917', '#008a00', '#00aba9', '#1ba1e2', '#0050ef', '#6a00ff', '#aa00ff', '#f472d0', '#d80073', '#a20025', '#e51400', '#fa6800', '#f0a30a', '#e3c800', '#825a2c', '#6d8764', '#647687', '#76608a', '#a0522d'];
    this.#maxCols = this.#lineColors.length - 1;
    this.#uuidColorMap = {};
    this.#bulkDelete = false;
    this.#endpoints = new _endpoints_helper__WEBPACK_IMPORTED_MODULE_2__.EndpointsHelper(this);
    this.#instance = window.jsPlumb.getInstance(this.#getInstanceDefaults(this.jsPlumbRoot));
    this.#instance.batch(() => {
      this.#initDomDataSources();
      this.#initWirings();
      this.#bindEvents();
    });
    // spm NOTE: repaint after initial paint fixes:
    // Error: <svg> attribute width: Expected length, "-Infinity".
    this.#instance.repaintEverything();
  }
  destroy() {
    this.#dialog?.close();
    this.#instance.reset();
    this.#instance.unbindContainer();
  }
  removeEndpointsOnDataSource(pipelineDataSourceGuid) {
    const elementId = dataSrcIdPrefix + pipelineDataSourceGuid;
    this.#bulkDelete = true;
    this.#instance.batch(() => {
      this.#instance.selectEndpoints({
        element: elementId
      }).delete();
    });
    this.#bulkDelete = false;
  }
  getAllConnections() {
    const connectionInfos = this.#instance.getAllConnections().map(connection => {
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
    this.#instance.selectEndpoints({
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
      const sEndp = this.#instance.getEndpoint(fromUuid);
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
  #nextLinePaintStyle(uuid) {
    return this.#uuidColorMap[uuid] || (this.#uuidColorMap[uuid] = Object.assign({}, this.#linePaintDefault, {
      stroke: this.#lineColors[this.#lineCount++ % this.#maxCols]
    }));
  }
  #getInstanceDefaults(container) {
    const defaults = {
      Container: container,
      Connector: ['Bezier', {
        curviness: 70
      }],
      PaintStyle: this.#nextLinePaintStyle('dummy'),
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
  #initDomDataSources() {
    const l = this.log.fnCond(false, 'initDomDataSources');
    for (const pipelineDataSource of this.pipelineModel.DataSources) {
      const domDataSource = this.jsPlumbRoot.querySelector('#' + dataSrcIdPrefix + pipelineDataSource.EntityGuid);
      if (!domDataSource) continue;
      const dataSource = this.dataSources.find(ds => ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
      if (!dataSource) continue;
      if (this.pipelineModel.Pipeline.AllowEdit) {
        // WARNING! Must happen before instance.makeSource()
        this.#instance.draggable(domDataSource, {
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
        this.#addEndpoint(domDataSource, name, false, pipelineDataSource, outCount);
      });
      // Add In-Endpoints from Definition
      const inCount = dataSource.In?.length ?? 0;
      l.a('dataSource.In', {
        inCount,
        in: dataSource.In
      });
      dataSource.In?.forEach(name => {
        this.#addEndpoint(domDataSource, name, true, pipelineDataSource, inCount);
      });
      // Make DataSource a Target for new Endpoints (if .In is an Array)
      if (dataSource.In) {
        const targetEndpointUnlimited = this.#endpoints.buildTargetEndpoint(pipelineDataSource.EntityGuid);
        targetEndpointUnlimited.maxConnections = -1;
        this.#instance.makeTarget(domDataSource, targetEndpointUnlimited);
      }
      if (dataSource.DynamicOut) this.#instance.makeSource(domDataSource, this.#endpoints.buildSourceEndpoint(pipelineDataSource.EntityGuid), {
        filter: '.add-endpoint'
      });
    }
    l.end();
  }
  /** Create wires */
  #initWirings() {
    const l = this.log.fn('initWirings');
    const wirings = this.pipelineModel.Pipeline.StreamWiring;
    if (!wirings) return l.end('no wirings');
    const inGroups = groupBy(wirings, wire => wire.To);
    const outGroups = groupBy(wirings, wire => wire.From);
    l.values({
      inGroups,
      outGroups
    });
    wirings.forEach(wire => {
      // read connections from Pipeline
      const sourceElementId = dataSrcIdPrefix + wire.From;
      const fromUuid = sourceElementId + '_out_' + wire.Out;
      const targetElementId = dataSrcIdPrefix + wire.To;
      const toUuid = targetElementId + '_in_' + wire.In;
      // Ensure In-Endpoint exist
      if (!this.#instance.getEndpoint(fromUuid)) {
        const domDataSource = this.jsPlumbRoot.querySelector('#' + sourceElementId);
        if (!domDataSource) return;
        const guid = domDataSource.id.replace(dataSrcIdPrefix, '');
        const dataSource = this.pipelineModel.DataSources.find(pipeDataSource => pipeDataSource.EntityGuid === guid);
        this.#addEndpoint(domDataSource, wire.Out, false, dataSource, outGroups[wire.From].length);
      }
      // Ensure Out-Endpoint exist
      if (!this.#instance.getEndpoint(toUuid)) {
        const domDataSource = this.jsPlumbRoot.querySelector('#' + targetElementId);
        if (!domDataSource) return;
        const guid = domDataSource.id.replace(dataSrcIdPrefix, '');
        const dataSource = this.pipelineModel.DataSources.find(pipeDataSource => pipeDataSource.EntityGuid === guid);
        // if (wire.In === "DEBUG") debugger;
        this.#addEndpoint(domDataSource, wire.In, true, dataSource, inGroups[wire.To].length);
      }
      try {
        this.#instance.connect({
          uuids: [fromUuid, toUuid],
          paintStyle: this.#nextLinePaintStyle(fromUuid)
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
  #addEndpoint(domDataSource, endpointName, isIn, queryDs, count = 0) {
    const l = this.log.fnIf('addEndpoint', {
      endpointName,
      isIn,
      queryDs
    });
    const dataSource = this.dataSources.find(d => d.PartAssemblyAndType === queryDs.PartAssemblyAndType);
    const connectionList = isIn ? dataSource.In : dataSource.Out;
    const hasDynamic = connectionList?.some(name => this.#endpoints.getEndpointInfo(name, false));
    // const count = connectionList?.length ?? -1;
    const endpointInfo = this.#endpoints.getEndpointInfo(endpointName, hasDynamic);
    l.a(`endpointInfo ${count}`, {
      dataSource,
      connectionList,
      isDynamic: hasDynamic,
      count,
      endpointInfo
    });
    // if (endpointName === "DEBUG") debugger;
    let style;
    if (hasDynamic) style = 'dynamic';else if (!endpointInfo.required) style = '';else {
      const wireExists = this.pipelineModel.Pipeline.StreamWiring?.some(wire => {
        const targetElementId = dataSrcIdPrefix + wire.To;
        const targetEndpointName = wire.In;
        return targetElementId === domDataSource.id && targetEndpointName === endpointInfo.name;
      });
      style = wireExists ? '' : 'required';
    }
    const uuid = domDataSource.id + (isIn ? '_in_' : '_out_') + endpointInfo.name;
    const angled = count > endPointsWhereWeRotate;
    const model = isIn ? this.#endpoints.buildTargetEndpoint(queryDs.EntityGuid, style) : this.#endpoints.buildSourceEndpoint(queryDs.EntityGuid, style);
    // Endpoints on Out-DataSource must be always enabled
    const params = {
      uuid,
      enabled: this.pipelineModel.Pipeline.AllowEdit || queryDs.EntityGuid === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.pipelineDesigner.outDataSource.EntityGuid
    };
    const endpoint = this.#instance.addEndpoint(domDataSource, model, params);
    const overlay = endpoint.getOverlay('endpointLabel');
    overlay.setLabel(endpointInfo.name);
    if (angled) overlay.addClass('angled');
    l.end("end", {
      count,
      angled,
      overlay
    });
  }
  onChangeLabel(endpointOrOverlay, isSource, pipelineDataSourceGuid) {
    if (!this.pipelineModel.Pipeline.AllowEdit) return;
    const overlay = endpointOrOverlay.getOverlay ? endpointOrOverlay.getOverlay('endpointLabel') : endpointOrOverlay;
    const data = {
      pipelineDataSourceGuid,
      isSource,
      label: overlay.label
    };
    this.#dialog = this.matDialog.open(_rename_stream_rename_stream_component__WEBPACK_IMPORTED_MODULE_3__.RenameStreamComponent, {
      autoFocus: false,
      data,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    this.#dialog.afterClosed().subscribe(newLabel => {
      if (!newLabel) return;
      overlay.setLabel(newLabel);
      setTimeout(() => this.onConnectionsChanged());
    });
    this.changeDetectorRef.markForCheck();
  }
  #bindEvents() {
    this.#instance.bind('connectionDetached', info => {
      if (this.#bulkDelete) return;
      const domDataSource = info.target;
      const pipelineDataSource = this.pipelineModel.DataSources.find(pipelineDS => pipelineDS.EntityGuid === domDataSource.id.replace(dataSrcIdPrefix, ''));
      const dataSource = this.dataSources.find(ds => ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
      const label = info.targetEndpoint.getOverlay('endpointLabel').label;
      const isDynamic = !dataSource.In.some(name => this.#endpoints.getEndpointInfo(name, false).name === label);
      if (isDynamic) this.#instance.deleteEndpoint(info.targetEndpoint);
      setTimeout(() => {
        this.onConnectionsChanged();
      });
    });
    this.#instance.bind('connection', info => {
      if (info.sourceId === info.targetId) {
        setTimeout(() => {
          this.#instance.deleteConnection(info.connection, {
            fireEvent: false
          });
          setTimeout(() => this.onConnectionsChanged());
        });
        return;
      }
      const endpointLabel = info.targetEndpoint.getOverlay('endpointLabel');
      const labelPrompt = endpointLabel.getLabel();
      const endpoints = this.#instance.getEndpoints(info.target.id);
      const targetEndpointHasSameLabel = endpoints.some(endpoint => {
        const label = endpoint.getOverlay('endpointLabel').getLabel();
        return label === labelPrompt && info.targetEndpoint.id !== endpoint.id && endpoint.canvas.classList.contains('targetEndpoint');
      });
      if (targetEndpointHasSameLabel) endpointLabel.setLabel(`PleaseRename${Math.floor(Math.random() * 99999)}`);
      setTimeout(() => {
        this.onConnectionsChanged();
      });
    });
  }
}
// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
const groupBy = (arr, key) => arr.reduce((groups, item) => {
  (groups[key(item)] ||= []).push(item);
  return groups;
}, {});

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-administration/services */ 75445);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/visual-query.service */ 2628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);






























const _c0 = a0 => ({
  "active": a0
});
function RenameStreamComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " You will get suggestions for out-streams after you run query ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RenameStreamComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-field-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isError", true);
  }
}
function RenameStreamComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 10)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RenameStreamComponent_Conditional_9_Conditional_4_Template, 2, 0, "app-field-hint")(5, RenameStreamComponent_Conditional_9_Conditional_5_Template, 2, 1, "app-field-hint", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r0.isSource && !ctx_r0.pipelineResultExists ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r0.controls.label.touched && (ctx_r0.controls.label.errors == null ? null : ctx_r0.controls.label.errors.required) ? 5 : -1);
  }
}
function RenameStreamComponent_Conditional_10_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", scopeOption_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", scopeOption_r3.name, " ");
  }
}
function RenameStreamComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 10)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](4, RenameStreamComponent_Conditional_10_Conditional_0_For_5_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", !ctx_r0.scopeOptions.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r0.scopeOptions);
  }
}
function RenameStreamComponent_Conditional_10_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const labelOption_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", labelOption_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", labelOption_r4, " ");
  }
}
function RenameStreamComponent_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](1, RenameStreamComponent_Conditional_10_Conditional_4_For_2_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", !ctx_r0.labelOptions.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r0.labelOptions);
  }
}
function RenameStreamComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 11);
  }
}
function RenameStreamComponent_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-field-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isError", true);
  }
}
function RenameStreamComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, RenameStreamComponent_Conditional_10_Conditional_0_Template, 10, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 10)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RenameStreamComponent_Conditional_10_Conditional_4_Template, 3, 1, "mat-select", 13)(5, RenameStreamComponent_Conditional_10_Conditional_5_Template, 1, 0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 14)(7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RenameStreamComponent_Conditional_10_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleGuidedLabel(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RenameStreamComponent_Conditional_10_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleGuidedLabel(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "text_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RenameStreamComponent_Conditional_10_Conditional_13_Template, 2, 1, "app-field-hint", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r0.advancedMode && ctx_r0.guidedLabel ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r0.guidedLabel ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx_r0.guidedLabel ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, ctx_r0.guidedLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c0, !ctx_r0.guidedLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r0.controls.label.touched && (ctx_r0.controls.label.errors == null ? null : ctx_r0.controls.label.errors.required) ? 13 : -1);
  }
}
function RenameStreamComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-slide-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RenameStreamComponent_Conditional_13_Template_mat_slide_toggle_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleAdvancedMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.advancedMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.advancedMode ? "Advanced" : "Simple", " ");
  }
}
class RenameStreamComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  #contentTypesSvc;
  constructor(dialogData, dialog, visualQueryService, changeDetectorRef) {
    super();
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.visualQueryService = visualQueryService;
    this.changeDetectorRef = changeDetectorRef;
    this.hostClass = 'dialog-component';
    this.isSource = this.dialogData.isSource;
    this.pipelineResultExists = this.visualQueryService.queryResult != null;
    this.scopeOptions = [];
    this.labelOptions = [];
    this.guidedLabel = true;
    this.advancedMode = false;
    this.#contentTypesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService);
  }
  ngOnInit() {
    this.#buildForm();
  }
  closeDialog(label) {
    this.dialog.close(label);
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
  #buildForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      label: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(this.dialogData.label, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      scope: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.scopes.default.value)
    });
    this.controls = this.form.controls;
    if (!this.isSource || !this.pipelineResultExists) return;
    this.subscriptions.add(this.controls.scope.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.scope.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(scope => {
      this.labelOptions = Object.values(this.visualQueryService.queryResult.Sources).find(source => source.Guid === this.dialogData.pipelineDataSourceGuid).Out.filter(out => out.Scope === scope).map(out => out.Name);
      if (!this.labelOptions.includes(this.controls.label.value) && this.controls.label.value != null) this.controls.label.patchValue(null);
    }));
    this.#contentTypesSvc.getScopes().subscribe(scopes => {
      const sourceOut = Object.values(this.visualQueryService.queryResult.Sources).find(source => source.Guid === this.dialogData.pipelineDataSourceGuid).Out;
      const filtered = scopes.filter(s => sourceOut.some(o => o.Scope === s.value));
      this.scopeOptions = filtered;
      this.changeDetectorRef.markForCheck();
    });
  }
  static {
    this.ɵfac = function RenameStreamComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RenameStreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_6__.VisualQueryStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RenameStreamComponent,
      selectors: [["app-rename-stream"]],
      hostVars: 1,
      hostBindings: function RenameStreamComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 5,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content"], [3, "formGroup"], [1, "eav-dialog-actions"], ["color", "accent", 3, "checked"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", "disabled"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "type", "text", "formControlName", "label", "required", ""], [3, "isError"], ["formControlName", "label", "required", "", 3, "placeholder"], ["matTextSuffix", "", 1, "eav-selection-suffix"], ["mat-icon-button", "", "type", "button", "tippy", "Pick existing value", 1, "eav-selection-suffix-button", 3, "click", "ngClass"], [1, "eav-icon"], ["mat-icon-button", "", "type", "button", "tippy", "Manual entry", 1, "eav-selection-suffix-button", 3, "click", "ngClass"], ["formControlName", "scope", 3, "placeholder"], [3, "value"], ["href", "https://2sxc.org/help?tag=scope", "target", "_blank", "appClickStopPropagation", ""], ["color", "accent", 3, "change", "checked"]],
      template: function RenameStreamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rename stream");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RenameStreamComponent_Template_button_click_4_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4)(8, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, RenameStreamComponent_Conditional_9_Template, 6, 2)(10, RenameStreamComponent_Conditional_10_Template, 14, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-dialog-actions", 6)(12, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RenameStreamComponent_Conditional_13_Template, 2, 2, "mat-slide-toggle", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div")(15, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RenameStreamComponent_Template_button_click_15_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RenameStreamComponent_Template_button_click_17_listener() {
            return ctx.rename();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Rename ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx.isSource || !ctx.pipelineResultExists ? 9 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.isSource && ctx.pipelineResultExists ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.isSource && ctx.pipelineResultExists ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_3__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__.ClickStopPropagationDirective],
      encapsulation: 2
    });
  }
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/visual-query.service */ 2628);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueryResultComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Showing All results ");
  }
}
function QueryResultComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Showing top ", ctx_r0.top, " results ");
  }
}
function QueryResultComponent_For_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " All ");
  }
}
function QueryResultComponent_For_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}
function QueryResultComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueryResultComponent_For_20_Template_button_click_0_listener() {
      const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.show(option_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QueryResultComponent_For_20_Conditional_2_Template, 1, 0)(3, QueryResultComponent_For_20_Conditional_3_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](option_r3 === 0 ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](option_r3 !== 0 ? 3 : -1);
  }
}
function QueryResultComponent_Conditional_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueryResultComponent_Conditional_24_For_5_Template(rf, ctx) {
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
function QueryResultComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QueryResultComponent_Conditional_24_div_1_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](4, QueryResultComponent_Conditional_24_For_5_Template, 2, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.parameters);
  }
}
function QueryResultComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueryResultComponent_For_39_Conditional_2_Template(rf, ctx) {
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
function QueryResultComponent_For_39_For_10_Template(rf, ctx) {
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
function QueryResultComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QueryResultComponent_For_39_Conditional_2_Template, 2, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](9, QueryResultComponent_For_39_For_10_Template, 6, 2, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const source_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"]((source_r5.value.Definition == null ? null : source_r5.value.Definition.Name) ? 2 : -1);
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
function QueryResultComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Streams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueryResultComponent_For_55_Template(rf, ctx) {
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
  constructor(dialogData, dialog, visualQueryService) {
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.visualQueryService = visualQueryService;
  }
  ngOnInit() {
    const pipeline = this.visualQueryService.pipelineModel().Pipeline;
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
    this.dialog.close();
  }
  show(top) {
    if (top === this.top) return;
    if (this.debugStream) {
      this.visualQueryService.debugStream(this.debugStream.original, top);
    } else {
      this.visualQueryService.runPipeline(top);
    }
    this.closeDialog();
  }
  static {
    this.ɵfac = function QueryResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QueryResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_0__.VisualQueryStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: QueryResultComponent,
      selectors: [["app-query-result"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 56,
      vars: 11,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content"], ["dynamicHeight", "", "color", "accent", 1, "eav-tab-group"], ["class", "mat-tab-label-box", "tippy", "Results", 4, "matTabLabel"], [1, "eav-tab-description"], ["mat-button", ""], [1, "eav-pre-scroll"], ["class", "mat-tab-label-box", "tippy", "Sources", 4, "matTabLabel"], [1, "eav-tab-content"], ["class", "mat-tab-label-box", "tippy", "Streams", 4, "matTabLabel"], ["tippy", "Results", 1, "mat-tab-label-box"], ["mat-button", "", 3, "click"], ["class", "mat-tab-label-box", "tippy", "Parameters", 4, "matTabLabel"], ["tippy", "Parameters", 1, "mat-tab-label-box"], ["tippy", "Sources", 1, "mat-tab-label-box"], ["tippy", "Streams", 1, "mat-tab-label-box"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, QueryResultComponent_Conditional_16_Template, 1, 0)(17, QueryResultComponent_Conditional_17_Template, 1, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](19, QueryResultComponent_For_20_Template, 4, 2, "button", 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "pre", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, QueryResultComponent_Conditional_24_Template, 6, 0, "mat-tab");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-tab");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, QueryResultComponent_div_26_Template, 3, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11)(28, "table")(29, "tr")(30, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Name and Guid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Error");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](38, QueryResultComponent_For_39_Template, 14, 6, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-tab");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, QueryResultComponent_div_42_Template, 3, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11)(44, "table")(45, "tr")(46, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Source");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Target");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Error");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](54, QueryResultComponent_For_55_Template, 11, 4, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.debugStream ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" The Full result was logged to the Browser Console. Further down you'll find more debug-infos. Executed in ", ctx.timeUsed, "ms (", ctx.ticksUsed, " ticks) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.top === 0 ? 16 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.top !== 0 ? 17 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.optionsForTop);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 7, ctx.result));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"]((ctx.parameters == null ? null : ctx.parameters.length) ? 24 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 9, ctx.sources));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.streams);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe],
      styles: [".eav-dialog[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.eav-tab-group[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.eav-tab-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 268px);\n  overflow-y: auto;\n}\n\n.eav-tab-description[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-right: 1rem;\n  padding: 1rem;\n  font-size: 16px;\n  line-height: 1.5;\n}\n\n.eav-pre-scroll[_ngcontent-%COMP%] {\n  height: calc(100vh - 268px - 80px);\n  overflow-y: auto;\n}\n\npre[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9.5px;\n  margin: 0 10px 0 0;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\ntd[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9xdWVyeS1yZXN1bHQvcXVlcnktcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWRpYWxvZyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmVhdi10YWItZ3JvdXAge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmVhdi10YWItY29udGVudCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjY4cHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5lYXYtdGFiLWRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5lYXYtcHJlLXNjcm9sbCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjY4cHggLSA4MHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxufVxyXG5cclxucHJlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiA5LjVweDtcclxuICBtYXJnaW46IDAgMTBweCAwIDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _dev_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev-rest */ 13488);
/* harmony import */ var _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/json.helpers */ 4038);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/visual-query.service */ 2628);
/* harmony import */ var _run_explorer_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./run-explorer.helpers */ 78465);

















function RunExplorerComponent_Conditional_0_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const param_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", param_r3, " ");
  }
}
function RunExplorerComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](1, RunExplorerComponent_Conditional_0_Conditional_20_For_2_Template, 2, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"]((tmp_2_0 = ctx_r1.vsSvc.pipelineModel().Pipeline.Params) == null ? null : tmp_2_0.split("\n"));
  }
}
function RunExplorerComponent_Conditional_0_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const param_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", param_r4, " ");
  }
}
function RunExplorerComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](1, RunExplorerComponent_Conditional_0_Conditional_24_For_2_Template, 2, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"]((tmp_2_0 = ctx_r1.vsSvc.pipelineModel().Pipeline.TestParameters) == null ? null : tmp_2_0.split("\n"));
  }
}
function RunExplorerComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Show DataSource Params");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RunExplorerComponent_Conditional_0_Conditional_25_Template_mat_slide_toggle_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.showDataSourceDetails($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r1.visualDesignerDataSig().ShowDataSourceDetails);
  }
}
function RunExplorerComponent_Conditional_0_Conditional_26_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "li", 16);
  }
  if (rf & 2) {
    const warning_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", warning_r6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function RunExplorerComponent_Conditional_0_Conditional_26_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14)(1, "div", 6)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Warnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](7, RunExplorerComponent_Conditional_0_Conditional_26_Conditional_0_For_8_Template, 1, 1, "li", 16, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r1.warningSig());
  }
}
function RunExplorerComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, RunExplorerComponent_Conditional_0_Conditional_26_Conditional_0_Template, 9, 0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r1.warningSig().length ? 0 : -1);
  }
}
function RunExplorerComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Query Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.vsSvc.pipelineModel().Pipeline.Description);
  }
}
function RunExplorerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.saveAndRunQuery(true, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Save and run");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.saveAndRunQuery(false, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Run");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.saveAndRunQuery(true, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Query Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div")(14, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.editPipeline());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.openParamsHelp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, RunExplorerComponent_Conditional_0_Conditional_20_Template, 3, 0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 5)(22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Test Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, RunExplorerComponent_Conditional_0_Conditional_24_Template, 3, 0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, RunExplorerComponent_Conditional_0_Conditional_25_Template, 4, 1, "div", 5)(26, RunExplorerComponent_Conditional_0_Conditional_26_Template, 1, 1)(27, RunExplorerComponent_Conditional_0_Conditional_27_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 11)(29, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RunExplorerComponent_Conditional_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.openRestApi());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Use in JSON / REST API");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "code_curly");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](((tmp_1_0 = ctx_r1.vsSvc.pipelineModel().Pipeline.Params) == null ? null : tmp_1_0.length) ? 20 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](((tmp_2_0 = ctx_r1.vsSvc.pipelineModel().Pipeline.TestParameters) == null ? null : tmp_2_0.length) ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r1.visualDesignerDataSig() ? 25 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r1.warningSig() ? 26 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r1.vsSvc.pipelineModel().Pipeline.Description ? 27 : -1);
  }
}
class RunExplorerComponent {
  #dialogRouter;
  constructor(context, vsSvc) {
    this.context = context;
    this.vsSvc = vsSvc;
    this.warningSig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)((0,_run_explorer_helpers__WEBPACK_IMPORTED_MODULE_6__.calculateWarnings)(this.vsSvc?.pipelineModel() ?? null, this.context));
    this.visualDesignerDataSig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(_shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_2__.JsonHelpers.tryParse(this.vsSvc?.pipelineModel()?.Pipeline.VisualDesignerData) ?? {});
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_3__.DialogRoutingService);
  }
  editPipeline() {
    this.vsSvc.editPipelineEntity();
  }
  openParamsHelp() {
    window.open('https://go.2sxc.org/QueryParams', '_blank');
  }
  saveAndRunQuery(save, run) {
    this.vsSvc.saveAndRun(save, run);
  }
  showDataSourceDetails(event) {
    this.vsSvc.showDataSourceDetails(event.checked);
  }
  openRestApi() {
    const queryGuid = this.vsSvc.pipelineModel().Pipeline.EntityGuid;
    this.#dialogRouter.navRelative([_dev_rest__WEBPACK_IMPORTED_MODULE_1__.GoToDevRest.getUrlQueryDialog(queryGuid)]);
  }
  static {
    this.ɵfac = function RunExplorerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RunExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_4__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_5__.VisualQueryStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RunExplorerComponent,
      selectors: [["app-run-explorer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[1, "editor-active-explorer", "fancy-scrollbar-dark"], [1, "wrapper"], [1, "actions"], ["mat-raised-button", "", "color", "accent", 1, "action", 3, "click"], ["mat-raised-button", "", 1, "action", 3, "click"], [1, "parameters"], [1, "title"], ["mat-icon-button", "", "tippy", "Edit parameters", 3, "click"], ["mat-icon-button", "", "tippy", "Query Params Docs", 3, "click"], [1, "values"], [1, "description"], [1, "footer-actions"], [1, "eav-slide-toggle-label"], ["color", "primary", 3, "change", "checked"], [1, "warnings"], [2, "color", "red"], [3, "innerHTML"]],
      template: function RunExplorerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, RunExplorerComponent_Conditional_0_Template, 34, 5, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.vsSvc.pipelineModel() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggle],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.actions[_ngcontent-%COMP%], \n.footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:not(:last-of-type), \n.footer-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-bottom: 8px;\n}\n\n.parameters[_ngcontent-%COMP%], \n.warnings[_ngcontent-%COMP%], \n.description[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.parameters[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n.warnings[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n.description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n}\n.parameters[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], \n.warnings[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], \n.description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.parameters[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%], \n.warnings[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n}\n.parameters[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.warnings[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1px 0;\n}\n\n.eav-slide-toggle-label[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS9ydW4tZXhwbG9yZXIvcnVuLWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTs7RUFDRSxrQkFBQTtBQUVKOztBQUVBOzs7RUFHRSxjQUFBO0FBQ0Y7QUFDRTs7O0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREk7OztFQUNFLHlCQUFBO1VBQUEsaUJBQUE7QUFLTjs7QUFFRTs7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFJOztFQUNFLGNBQUE7QUFHTjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zLFxyXG4uZm9vdGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuXHJcbiAgLmFjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtZXRlcnMsXHJcbi53YXJuaW5ncyxcclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IDE2cHggMDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtZXRlcnMsXHJcbi53YXJuaW5ncyB7XHJcbiAgLnZhbHVlcyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lYXYtc2xpZGUtdG9nZ2xlLWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLy8gLmZvb3Rlci1hY3Rpb25zIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
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
  if (!pipelineModel) return [];
  const warnings = [];
  try {
    const queryParams = pipelineModel.Pipeline.Params?.split(/\r?\n/) || [];
    const testParams = pipelineModel.Pipeline.TestParameters?.split(/\r?\n/) || [];
    queryParams.forEach(param => {
      param = param?.trim();
      if (!param) return;
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
      if (!param) return;
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
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





class QueryDefinitionService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  fetchPipeline(pipelineEntityId, dataSources) {
    return this.getHttp(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQueryGet, {
      params: {
        appId: this.appId,
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
    return this.getHttp(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQueryDataSources, {
      params: {
        appid: this.appId,
        zoneId: this.zoneId
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
        appId: this.appId,
        Id: pipeline.EntityId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(newPipelineModel => {
      this.fixPipelineDataSources(newPipelineModel.DataSources);
      return newPipelineModel;
    }));
  }
  /** `top` - fetch first X items */
  runPipeline(id, top) {
    return this.getHttp(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQueryRun, {
      params: {
        appId: this.appId,
        id: id.toString(),
        top: top.toString()
      }
    });
  }
  /** `top` - fetch first X items */
  debugStream(id, source, sourceOut, top) {
    return this.getHttp(_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiQueryDebugStream, {
      params: {
        appId: this.appId,
        id: id.toString(),
        from: source,
        out: sourceOut,
        top: top.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵQueryDefinitionService_BaseFactory;
      return function QueryDefinitionService_Factory(__ngFactoryType__) {
        return (ɵQueryDefinitionService_BaseFactory || (ɵQueryDefinitionService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](QueryDefinitionService)))(__ngFactoryType__ || QueryDefinitionService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: QueryDefinitionService,
      factory: QueryDefinitionService.ɵfac
    });
  }
}

/***/ }),

/***/ 2628:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/services/visual-query.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualQueryStateService: () => (/* binding */ VisualQueryStateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash-es/cloneDeep */ 85237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../permissions/services/metadata.service */ 80401);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _query_definition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query-definition.service */ 55871);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _edit_dialog_main_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../edit/dialog/main/keyboard-shortcuts */ 32760);
/* harmony import */ var _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helpers/json.helpers */ 4038);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/service-base */ 4979);
/* harmony import */ var _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../query-result/query-result.component */ 60453);
/* harmony import */ var _stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../stream-error-result/stream-error-result.component */ 34955);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 12587);












// tslint:disable-next-line:max-line-length










/**
 * Service containing the state for the visual query.
 * It's shared, so should not be used with transient(...);
 */
class VisualQueryStateService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_10__.ServiceBase {
  #contentTypesSvc;
  #metadataSvc;
  #queryDefSvc;
  #dialogRoute;
  #titleSvc;
  #pipelineId;
  #refreshPipeline;
  #refreshDataSourceConfigs;
  constructor(snackBar, matDialog, viewContainerRef, zone, changeDetectorRef) {
    super();
    this.snackBar = snackBar;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.zone = zone;
    this.changeDetectorRef = changeDetectorRef;
    this.#contentTypesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_6__.transient)(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService);
    this.#metadataSvc = (0,_core__WEBPACK_IMPORTED_MODULE_6__.transient)(_permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_1__.MetadataService);
    this.#queryDefSvc = (0,_core__WEBPACK_IMPORTED_MODULE_6__.transient)(_query_definition_service__WEBPACK_IMPORTED_MODULE_5__.QueryDefinitionService);
    this.#dialogRoute = (0,_core__WEBPACK_IMPORTED_MODULE_6__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_9__.DialogRoutingService);
    this.#titleSvc = (0,_core__WEBPACK_IMPORTED_MODULE_6__.transient)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Title);
    this.pipelineModel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.signal)(null);
    this.dataSources = (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.signal)(null);
    this.dataSourceConfigs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.signal)({});
    this.putEntityCountOnConnections$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this.#pipelineId = parseInt(this.#dialogRoute.getParam('pipelineId'), 10);
    this.#refreshPipeline = false;
    this.#refreshDataSourceConfigs = false;
  }
  ngOnDestroy() {
    this.putEntityCountOnConnections$.complete();
    super.ngOnDestroy();
  }
  init() {
    this.#fetchDataSources(() => this.#fetchPipeline(true, true, false));
    this.#attachKeyboardSave();
    this.#dialogRoute.doOnDialogClosed(() => {
      if (this.#refreshPipeline || this.#refreshDataSourceConfigs) this.#fetchPipeline(this.#refreshPipeline, this.#refreshDataSourceConfigs, this.#refreshPipeline);
      this.#refreshPipeline = false;
      this.#refreshDataSourceConfigs = false;
    });
  }
  editPipelineEntity() {
    // save Pipeline, then open Edit Dialog
    this.#savePipeline(() => {
      const form = {
        items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_4__.EditPrep.editId(this.pipelineModel().Pipeline.EntityId)]
      };
      const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_3__.convertFormToUrl)(form);
      this.#dialogRoute.navRelative([`edit/${formUrl}`]);
      this.#refreshPipeline = true;
    });
  }
  saveAndRun(save, run) {
    if (save && run) return this.#savePipeline(() => this.runPipeline());
    if (save) return this.#savePipeline();
    if (run) return this.runPipeline();
  }
  showDataSourceDetails(showDetails) {
    const query = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__["default"])(this.pipelineModel());
    const designerData = _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_8__.JsonHelpers.tryParse(query.Pipeline.VisualDesignerData) ?? {};
    designerData.ShowDataSourceDetails = showDetails;
    query.Pipeline.VisualDesignerData = JSON.stringify(designerData);
    this.pipelineModel.set(query);
  }
  addDataSource(dataSource) {
    const query = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__["default"])(this.pipelineModel());
    const newSource = {
      Description: '',
      EntityGuid: 'unsaved' + (query.DataSources.length + 1),
      EntityId: undefined,
      Name: dataSource.Name,
      PartAssemblyAndType: dataSource.PartAssemblyAndType,
      VisualDesignerData: {
        Top: 100,
        Left: 100
      }
    };
    query.DataSources.push(newSource);
    this.pipelineModel.set(query);
    this.#savePipeline();
  }
  removeDataSource(pipelineDataSourceGuid, connections, streamsOut) {
    const query = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__["default"])(this.pipelineModel());
    query.DataSources = query.DataSources.filter(pipelineDS => pipelineDS.EntityGuid !== pipelineDataSourceGuid);
    query.Pipeline.StreamWiring = connections;
    query.Pipeline.StreamsOut = streamsOut;
    this.pipelineModel.set(query);
  }
  renameDataSource(pipelineDataSourceGuid, name) {
    const query = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__["default"])(this.pipelineModel());
    const dataSource = query.DataSources.find(pipelineDS => pipelineDS.EntityGuid === pipelineDataSourceGuid);
    dataSource.Name = name;
    this.pipelineModel.set(query);
  }
  changeDataSourceDescription(pipelineDataSourceGuid, description) {
    const query = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__["default"])(this.pipelineModel());
    const dataSource = query.DataSources.find(pipelineDS => pipelineDS.EntityGuid === pipelineDataSourceGuid);
    dataSource.Description = description;
    this.pipelineModel.set(query);
  }
  changeConnections(connections, streamsOut) {
    const query = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__["default"])(this.pipelineModel());
    query.Pipeline.StreamWiring = connections;
    query.Pipeline.StreamsOut = streamsOut;
    this.pipelineModel.set(query);
  }
  changeDataSourcePosition(pipelineDataSourceGuid, position) {
    const query = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__["default"])(this.pipelineModel());
    const dataSource = query.DataSources.find(pipelineDS => pipelineDS.EntityGuid === pipelineDataSourceGuid);
    if (!dataSource) {
      // spm NOTE: fixes problem where dataSource position can't be updated if dataSource with guid unsavedXX gets saved while dragging.
      // Can happen if dataSource is just added and user drags it and save happens.
      return;
    }
    dataSource.VisualDesignerData = {
      ...dataSource.VisualDesignerData,
      ...position
    };
    this.pipelineModel.set(query);
  }
  #calculateDataSourceConfigs(dataSources) {
    const dataSourceConfigs = {};
    dataSources.forEach(dataSource => {
      if (dataSource.EntityId == null) return;
      dataSourceConfigs[dataSource.EntityId] = [];
      dataSource.Metadata?.forEach(metadataItem => {
        Object.entries(metadataItem).forEach(([attributeName, attributeValue]) => {
          if (attributeValue == null || attributeValue === '') return;
          if (['Created', 'Guid', 'Id', 'Modified', 'Title', '_Type'].includes(attributeName)) return;
          if (Array.isArray(attributeValue) && attributeValue[0]?.Title !== null && attributeValue[0]?.Id !== null) {
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
    this.dataSourceConfigs.set(dataSourceConfigs);
  }
  editDataSource(pipelineDataSource) {
    const dataSource = this.dataSources().find(ds => ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType);
    const contentTypeName = dataSource.ContentType;
    const {
      targetType,
      keyType
    } = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.metadata.entity;
    const key = pipelineDataSource.EntityGuid;
    // query for existing Entity
    this.#metadataSvc.getMetadata(targetType, keyType, key, contentTypeName).subscribe(metadata => {
      // edit existing Entity
      if (metadata.Items.length) {
        const form = {
          items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_4__.EditPrep.editId(metadata.Items[0].Id)]
        };
        const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_3__.convertFormToUrl)(form);
        this.#dialogRoute.navRelative([`edit/${formUrl}`]);
        this.#refreshDataSourceConfigs = true;
        return;
      }
      // Check if the type exists, and if yes, create new Entity
      this.#contentTypesSvc.retrieveContentType(contentTypeName).subscribe({
        next: contentType => {
          if (contentType == null) {
            this.snackBar.open('DataSource doesn\'t have any configuration', undefined, {
              duration: 3000
            });
            return;
          }
          const form = {
            items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_4__.EditPrep.newMetadata(key, contentTypeName, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.metadata.entity)]
          };
          const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_3__.convertFormToUrl)(form);
          this.#dialogRoute.navRelative([`edit/${formUrl}`]);
          this.#refreshDataSourceConfigs = true;
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
  #savePipeline(callback) {
    this.snackBar.open('Saving...');
    this.#queryDefSvc.savePipeline(this.pipelineModel()).subscribe({
      next: pipelineModel => {
        this.snackBar.open('Saved', null, {
          duration: 2000
        });
        this.pipelineModel.set(pipelineModel);
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
    this.#queryDefSvc.runPipeline(this.pipelineModel().Pipeline.EntityId, top).subscribe({
      next: pipelineResult => {
        this.snackBar.open('Query worked', null, {
          duration: 2000
        });
        this.queryResult = pipelineResult;
        this.#showQueryResult(pipelineResult, top);
        console.warn(pipelineResult);
        // push cloned pipelineModel to reset jsPlumb
        this.pipelineModel.set((0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_16__["default"])(this.pipelineModel()));
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
    if (stream.Error) return this.#showStreamErrorResult(stream);
    if (stream.Count === 0) return;
    this.snackBar.open('Running stream...');
    const pipelineId = this.pipelineModel().Pipeline.EntityId;
    this.#queryDefSvc.debugStream(pipelineId, stream.Source, stream.SourceOut, top).subscribe({
      next: streamResult => {
        this.snackBar.open('Stream worked', null, {
          duration: 2000
        });
        const pipelineDataSource = this.pipelineModel().DataSources.find(ds => ds.EntityGuid === stream.Source);
        const debugStream = {
          name: stream.SourceOut,
          source: stream.Source,
          sourceName: pipelineDataSource.Name,
          original: stream
        };
        this.#showQueryResult(streamResult, top, debugStream);
        console.warn(streamResult);
      },
      error: _ => {
        this.snackBar.open('Stream failed', null, {
          duration: 2000
        });
      }
    });
  }
  #fetchPipeline(refreshPipeline, refreshDataSourceConfigs, showSnackBar) {
    if (showSnackBar) this.snackBar.open('Reloading query, please wait...');
    this.#queryDefSvc.fetchPipeline(this.#pipelineId, this.dataSources()).subscribe(pipelineModel => {
      if (showSnackBar) this.snackBar.open('Query reloaded', null, {
        duration: 2000
      });
      this.#titleSvc.setTitle(`${pipelineModel.Pipeline.Name} - Visual Query`);
      if (refreshPipeline) this.pipelineModel.set(pipelineModel);
      if (refreshDataSourceConfigs) this.#calculateDataSourceConfigs(pipelineModel.DataSources);
    });
  }
  #showQueryResult(result, top, debugStream) {
    const dialogData = {
      result,
      debugStream,
      top
    };
    this.matDialog.open(_query_result_query_result_component__WEBPACK_IMPORTED_MODULE_11__.QueryResultComponent, {
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
  #showStreamErrorResult(stream) {
    const dialogData = {
      errorData: stream.ErrorData
    };
    this.matDialog.open(_stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_12__.StreamErrorResultComponent, {
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
  #fetchDataSources(callback) {
    this.#queryDefSvc.fetchDataSources().subscribe(dataSources => {
      this.dataSources.set(dataSources);
      callback();
    });
  }
  #attachKeyboardSave() {
    this.zone.runOutsideAngular(() => {
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(window, 'keydown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.filter)(() => !this.#dialogRoute.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.filter)(event => (0,_edit_dialog_main_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__.isCtrlS)(event))).subscribe(event => {
        event.preventDefault();
        this.zone.run(() => {
          this.#savePipeline();
        });
      }));
    });
  }
  static {
    this.ɵfac = function VisualQueryStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VisualQueryStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
      token: VisualQueryStateService,
      factory: VisualQueryStateService.ɵfac
    });
  }
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);








class StreamErrorResultComponent {
  constructor(dialogData, dialog) {
    this.dialogData = dialogData;
    this.dialog = dialog;
  }
  ngOnInit() {
    this.errorData = this.dialogData.errorData;
  }
  closeDialog() {
    this.dialog.close();
  }
  openInsights() {
    window.open(window.$2sxc.http.apiUrl('sys/insights/logs?key=web-api-query'), '_blank');
  }
  static {
    this.ɵfac = function StreamErrorResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StreamErrorResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/context */ 68873);
/* harmony import */ var _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-explorer/add-explorer.component */ 58323);
/* harmony import */ var _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plumb-editor/plumb-editor.component */ 47709);
/* harmony import */ var _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./run-explorer/run-explorer.component */ 30555);
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/visual-query.service */ 2628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);













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
  static {
    this.ɵfac = function VisualQueryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VisualQueryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_visual_query_service__WEBPACK_IMPORTED_MODULE_4__.VisualQueryStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: VisualQueryComponent,
      selectors: [["app-visual-query"]],
      viewQuery: function VisualQueryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_2__.PlumbEditorComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.plumbEditor = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_visual_query_service__WEBPACK_IMPORTED_MODULE_4__.VisualQueryStateService // Shared State for the entire Visual Query, - init run here
      ]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 8,
      consts: [[1, "editor-root"], [1, "editor-side-toolbar"], ["tippy", "Run", 1, "button", 3, "click", "ngClass"], ["tippy", "Add", 1, "button", 3, "click", "ngClass"], [1, "spacer"], ["tippy", "Help", 1, "button", 3, "click"], [3, "hidden"]],
      template: function VisualQueryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VisualQueryComponent_Template_div_click_3_listener() {
            return ctx.toggleExplorer(ctx.explorer.run);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "play_arrow");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VisualQueryComponent_Template_div_click_6_listener() {
            return ctx.toggleExplorer(ctx.explorer.add);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VisualQueryComponent_Template_div_click_10_listener() {
            return ctx.openHelp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "help_outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-run-explorer", 6)(14, "app-add-explorer", 6)(15, "app-plumb-editor");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx.activeExplorer === ctx.explorer.run));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, ctx.activeExplorer === ctx.explorer.add));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.activeExplorer !== ctx.explorer.run);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.activeExplorer !== ctx.explorer.add);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_3__.RunExplorerComponent, _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_1__.AddExplorerComponent, _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_2__.PlumbEditorComponent],
      styles: [".editor-side-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3Zpc3VhbC1xdWVyeS92aXN1YWwtcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Itc2lkZS10b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_visual-query_visual-query_component_ts.js.map