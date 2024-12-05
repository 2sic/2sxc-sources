"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_web-api_web-api_component_ts"],{

/***/ 66774:
/*!*********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/web-api/web-api-actions/web-api-actions.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebApiActionsComponent: () => (/* binding */ WebApiActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dev-rest/go-to-dev-rest */ 10261);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);











function WebApiActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebApiActionsComponent_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.openCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function WebApiActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function WebApiActionsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebApiActionsComponent_ng_template_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.openRestApi());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "REST API");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class WebApiActionsComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  agInit(params) {
    this.params = params;
    this.enableCode = this.params.enableCodeGetter();
  }
  refresh(params) {
    return true;
  }
  openCode() {
    const api = this.params.data;
    this.params.onOpenCode(api);
  }
  openRestApi() {
    const api = this.params.data;
    // Get the current URL and split it into segments
    const urlSegments = this.router.url.split('/');
    // Replace the last segment with the GoToDevRest.routeWebApi (restapiwebapi)
    urlSegments[urlSegments.length - 1] = _dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeWebApi;
    // Add the path of the api to the url segments
    urlSegments.push(encodeURIComponent(api.path));
    // Join the segments back together to form the new URL
    const apiUrl = urlSegments.join('/');
    this.router.navigate([apiUrl]);
    // this.params.onOpenRestApi(api);
  }
  static {
    this.ɵfac = function WebApiActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebApiActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WebApiActionsComponent,
      selectors: [["app-web-api-actions"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 3,
      consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Code", 1, "eav-grid-action-button", "highlight"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["matRipple", "", "tippy", "Code", 1, "eav-grid-action-button", "highlight", 3, "click"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "code-curly"]],
      template: function WebApiActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WebApiActionsComponent_Conditional_1_Template, 3, 0, "div", 2)(2, WebApiActionsComponent_Conditional_2_Template, 3, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4)(4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "more_horiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WebApiActionsComponent_ng_template_8_Template, 4, 0, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.enableCode ? 1 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.enableCode ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menu_r4);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 61278:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/web-api/web-api.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebApiComponent: () => (/* binding */ WebApiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../code-editor/services/source.service */ 79996);
/* harmony import */ var _create_file_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../create-file-dialog */ 76068);
/* harmony import */ var _dev_rest_api_true_false_true_false_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dev-rest/api/true-false/true-false.component */ 72871);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/dialog.service */ 52785);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/dialog-config-app.service */ 64699);
/* harmony import */ var _web_api_actions_web_api_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-api-actions/web-api-actions.component */ 66774);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);
























class WebApiComponent {
  #dialogService;
  #sourceService;
  #refresh;
  constructor(snackBar, matDialog, viewContainerRef) {
    this.snackBar = snackBar;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.#dialogService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService);
    this.#sourceService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_1__.SourceService);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)(0);
    this.webApis = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.computed)(() => {
      const r = this.#refresh();
      return this.#sourceService.getWebApisSig();
    });
    this.gridOptions = this.buildGridOptions();
    this.dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_8__.DialogConfigAppService);
  }
  ngOnInit() {
    this.fetchWebApis();
    this.dialogConfigSvc.getCurrent$().subscribe(settings => {
      this.enableCode = settings.Context.Enable.CodeEditor;
    });
  }
  createController(global) {
    // This FileLocationDialogComponent dialog is currently never going to be opened because it has been replaced by mat-menu
    // in the web-api.component.html template. If you want to use the dialog instead of the menu, you need to remove the
    // mat-menu and replace it with a button that opens the dialog with empty parameters.
    // Dialog has been replaced by menu because from update to Angular 16 CreateFileDialogComponent wasn't opening anymore if
    // FileLocationDialogComponent dialog was used.
    // if (global == null) {
    //   const fileLocationDialogRef = this.dialog.open(FileLocationDialogComponent, {
    //     autoFocus: false,
    //     viewContainerRef: this.viewContainerRef,
    //     width: '650px',
    //   });
    //   fileLocationDialogRef.afterClosed().subscribe((isShared?: boolean) => {
    //     if (isShared == null) return;
    //     this.createController(isShared);
    //   });
    //   return;
    // }
    const createFileDialogData = {
      folder: 'api',
      global,
      purpose: 'Api'
    };
    const createFileDialogRef = this.matDialog.open(_create_file_dialog__WEBPACK_IMPORTED_MODULE_2__.CreateFileDialogComponent, {
      autoFocus: false,
      data: createFileDialogData,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    createFileDialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (result.name.endsWith('Controller.cs')) {
        const fileName = result.name.substring(result.name.lastIndexOf('/') + 1);
        if (!/^[A-Z][a-zA-Z0-9]*Controller\.cs$/g.test(fileName)) {
          const message = `"${fileName}" is invalid controller name. Should be something like "MyController.cs"`;
          this.snackBar.open(message, null, {
            duration: 5000
          });
          return;
        }
      }
      this.snackBar.open('Saving...');
      this.#sourceService.create(result.name, global, result.templateKey).subscribe(() => {
        this.snackBar.open('Saved', null, {
          duration: 2000
        });
        this.fetchWebApis();
      });
    });
  }
  fetchWebApis() {
    this.#refresh.update(value => value + 1);
  }
  enableCodeGetter() {
    return this.enableCode;
  }
  openCode(api) {
    this.#dialogService.openCodeFile(api.path, api.isShared);
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.ItemsText,
        headerName: 'Endpoint',
        field: 'endpointPath',
        flex: 2,
        minWidth: 250
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.TextWideMin100,
        headerName: 'Edition',
        field: 'edition',
        sort: 'asc'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.TextWideMin100,
        headerName: 'Forder2',
        field: 'folder',
        sort: 'asc'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.TextWide,
        headerName: 'Name',
        field: 'name'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.Boolean2,
        headerName: 'Compiled',
        field: 'isCompiled',
        cellRenderer: _dev_rest_api_true_false_true_false_component__WEBPACK_IMPORTED_MODULE_3__.TrueFalseComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.ActionsPinnedRight6,
        cellRenderer: _web_api_actions_web_api_actions_component__WEBPACK_IMPORTED_MODULE_9__.WebApiActionsComponent,
        cellRendererParams: (() => {
          const params = {
            enableCodeGetter: () => this.enableCodeGetter(),
            onOpenCode: api => this.openCode(api)
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function WebApiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: WebApiComponent,
      selectors: [["app-web-api"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 3,
      consts: [["menu", "matMenu"], [1, "grid-wrapper", "mat-tab-grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new controller", "tippyPlacement", "left", 1, "grid-fab", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]],
      template: function WebApiComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ag-grid-angular", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-dialog-actions", 3)(3, "button", 4)(4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-menu", null, 0)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WebApiComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.createController(false));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "App");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WebApiComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.createController(true));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Shared (global)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "router-outlet");
        }
        if (rf & 2) {
          const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", ctx.webApis()())("gridOptions", ctx.gridOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", menu_r2);
        }
      },
      dependencies: [_shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_13__.AgGridAngular, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_web-api_web-api_component_ts.js.map