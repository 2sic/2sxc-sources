"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_data_data_component_ts"],{

/***/ 9756:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/data/data.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataComponent: () => (/* binding */ DataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content-export/services/content-export.service */ 56360);
/* harmony import */ var _dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dev-rest/go-to-dev-rest */ 10261);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_ag_grid_ag_grid_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ag-grid/ag-grid-helper */ 21183);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_rxJs_mapUntilChanged__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/rxJs/mapUntilChanged */ 48021);
/* harmony import */ var _shared_services_global_config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/global-config.service */ 39431);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/content-types.service */ 17693);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/dialog-config-app.service */ 64699);
/* harmony import */ var _data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./data-actions/data-actions.component */ 23513);
/* harmony import */ var _data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./data-fields/data-fields.component */ 93955);
/* harmony import */ var _data_items_data_items_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./data-items/data-items.component */ 82251);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);












































function DataComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", scopeOption_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", scopeOption_r1.label, " ");
  }
}
function DataComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DataComponent_Conditional_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r2.createGhost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](4, "Ghost");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
}
class DataComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_7__.BaseComponent {
  #snackBar;
  #contentTypeSvc;
  #contentExportSvc;
  #dialogConfigSvc;
  #dialogRouter;
  constructor() {
    super();
    this.isDebug = (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.inject)(_shared_services_global_config_service__WEBPACK_IMPORTED_MODULE_19__.GlobalConfigService).isDebug;
    this.#snackBar = (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBar);
    this.#contentTypeSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_20__.ContentTypesService);
    this.#contentExportSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_1__.ContentExportService);
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_21__.DialogConfigAppService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_17__.DialogRoutingService);
    this.contentTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.signal)(undefined);
    this.scope = (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.signal)(undefined);
    this.scopeOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.signal)([]);
    this.scopeSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.computed)(() => this.scopeOptions().find(s => s.name === this.scope()));
    /** Possible scopes - the ones from the backend + manually entered scopes by the current user */
    this.gridOptions = this.#buildGridOptions();
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_9__.dropdownInsertValue;
  }
  ngOnInit() {
    this.#fetchScopes();
    this.#refreshScopeOnRouteChange();
    this.#dialogRouter.doOnDialogClosed(() => this.#fetchContentTypes());
    this.#dialogConfigSvc.getCurrent$().subscribe(data => {
      this.enablePermissions = data.Context.Enable.AppPermissions;
    });
  }
  filesDropped(files) {
    const importFile = files[0];
    const ext = importFile.name.substring(importFile.name.lastIndexOf('.') + 1).toLocaleLowerCase();
    switch (ext) {
      case 'xml':
        (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_13__.toString)(files[0])).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_28__.take)(1)).subscribe(fileString => {
          const contentTypeName = fileString.split('<Entity Type="')[1]?.split('"')[0];
          const contentType = this.contentTypes().find(ct => ct.Name === contentTypeName);
          if (contentType == null) {
            const message = `Cannot find Content Type named '${contentTypeName}'. Please open Content Type Import dialog manually.`;
            this.#snackBar.open(message, null, {
              duration: 5000
            });
            return;
          }
          this.#openDataImport(contentType, files);
        });
        break;
      case 'json':
        this.importType(files);
        break;
    }
  }
  importType(files) {
    const dialogData = {
      files
    };
    this.#dialogRouter.navRelative(['import'], {
      state: dialogData
    });
  }
  urlToImportType() {
    return this.#urlTo('import');
  }
  editContentType(contentType) {
    if (!contentType) {
      this.#dialogRouter.navRelative(['add']);
    } else {
      if (contentType.EditInfo.ReadOnly) return;
      this.#dialogRouter.navRelative([`${contentType.NameId}/edit`]);
    }
  }
  #fetchContentTypes() {
    this.#contentTypeSvc.retrieveContentTypes(this.scope()).subscribe(contentTypes => {
      for (const contentType of contentTypes) {
        contentType._compareLabel = contentType.Label.replace(/\p{Emoji}/gu, 'ž');
      }
      this.contentTypes.set(contentTypes);
      if (this.scope() !== _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__.eavConstants.scopes.default.value) {
        const message = 'Warning! You are in a special scope. Changing things here could easily break functionality';
        this.#snackBar.open(message, null, {
          duration: 2000
        });
      }
    });
  }
  #fetchScopes() {
    this.#contentTypeSvc.getScopesV2().subscribe(scopeList => {
      // Merge the new scopes with the existing ones - in case there were manual scopes added
      // If old scope list had a manual scope which the server didn't send, re-add it here
      const manual = this.scopeOptions().filter(sOld => scopeList.find(sNew => sNew.name === sOld.name) == null);
      // Add a nice label to each scope containing count-information of types
      const withNiceLabel = scopeList.map(s => {
        let countInfo = !s.typesInherited ? `${s.typesTotal} types` // only not-inherited
        : s.typesInherited == s.typesTotal ? s.typesInherited + ' sys types' // only inherited
        : `${s.typesTotal} types / ${s.typesInherited} system`;
        return {
          ...s,
          label: s.name + ` - ${countInfo}`
        };
      });
      this.scopeOptions.set([...withNiceLabel, ...manual]);
    });
  }
  createGhost() {
    const sourceName = window.prompt('To create a ghost content-type enter source static name / id - this is a very advanced operation - read more about it on 2sxc.org/help?tag=ghost');
    if (!sourceName) return;
    this.#snackBar.open('Saving...');
    this.#contentTypeSvc.createGhost(sourceName).subscribe(_ => {
      this.#snackBar.open('Saved', null, {
        duration: 2000
      });
      this.#fetchContentTypes();
    });
  }
  changeScope(newScope) {
    if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_9__.dropdownInsertValue) {
      newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__.eavConstants.scopes.default.value;
    }
    this.#dialogRouter.navRelative(['..', newScope]);
  }
  /**
   * Refreshes the scope when the route changes.
   * ...also adds a scope name if the route scope is not found in the list of possible scopes.
   * This is to allow an admin to enter a custom scope.
   * Note 2024-03-04 2dm - not sure if this auto-add feature is still needed though...
   */
  #refreshScopeOnRouteChange() {
    this.subscriptions.add(this.#dialogRouter.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_29__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_30__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.map)(() => this.#dialogRouter.getParam('scope')), (0,rxjs__WEBPACK_IMPORTED_MODULE_32__.startWith)(this.#dialogRouter.getParam('scope')), (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.filter)(scope => !!scope), (0,_shared_rxJs_mapUntilChanged__WEBPACK_IMPORTED_MODULE_18__.mapUntilChanged)(m => m)).subscribe(scope => {
      this.scope.set(scope);
      // If we can't find the scope in the list of options, add it as it was entered manually
      if (!this.scopeOptions().map(option => option.name).includes(scope)) {
        const newScopeOption = {
          name: scope,
          label: scope,
          typesTotal: 0,
          typesInherited: 0,
          typesOfApp: 0
        };
        this.scopeOptions.set([...this.scopeOptions(), newScopeOption]);
      }
      this.#fetchContentTypes();
    }));
  }
  //#region Grid
  #buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.IdWithDefaultRenderer,
        cellRendererParams: _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.idFieldParamsTooltipGetter('StaticName')
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextWidePrimary,
        headerName: 'ContentType',
        field: 'Label',
        sort: 'asc',
        comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
          const contentTypeA = nodeA.data;
          const contentTypeB = nodeB.data;
          return contentTypeA._compareLabel.localeCompare(contentTypeB._compareLabel);
        },
        cellRenderer: p => _shared_ag_grid_ag_grid_helper__WEBPACK_IMPORTED_MODULE_5__.AgGridHelper.cellLink(this.#urlTo(`items/${p.data.NameId}`), p.data.Label)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.Items,
        field: 'Items',
        cellRenderer: _data_items_data_items_component__WEBPACK_IMPORTED_MODULE_24__.DataItemsComponent,
        cellRendererParams: {
          addItemUrl: ct => this.#urlTo(`edit/${this.#routeAddItem(ct)}`),
          itemsUrl: ct => this.#urlTo(`items/${ct.NameId}`)
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.Fields,
        field: 'Fields',
        cellRenderer: _data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_23__.DataFieldsComponent,
        cellRendererParams: {
          fieldsUrl: contentType => this.#urlTo(`fields/${contentType.NameId}`)
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextWideMin100,
        field: 'Name',
        cellClass: p => `${p.data.EditInfo.DisableEdit ? 'no-outline' : 'primary-action highlight'}`.split(' '),
        valueGetter: p => p.data?.Name,
        onCellClicked: p => this.editContentType(p.data)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextWideFlex3,
        field: 'Description',
        valueGetter: p => p.data?.Properties?.Description
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.ActionsPinnedRight4,
        cellRenderer: _data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_22__.DataActionsComponent,
        cellRendererParams: {
          enablePermissionsGetter: () => this.enablePermissions,
          urlTo: (verb, ct) => {
            switch (verb) {
              case 'createUpdateMetaData':
                return this.#urlTo(`edit/${this.#routeCreateOrEditMetadata(ct)}`);
              case 'openPermissions':
                return this.#urlTo(_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_4__.GoToPermissions.getUrlContentType(ct.NameId));
              case 'editContentType':
                return this.#urlTo(ct.EditInfo.ReadOnly ? '' : `${ct.NameId}/edit`);
              case 'openMetadata':
                return this.#urlTo(_metadata__WEBPACK_IMPORTED_MODULE_3__.GoToMetadata.getUrlContentType(ct.NameId, `Metadata for Content Type: ${ct.Name} (${ct.Id})`));
              case 'openRestApi':
                return this.#urlTo(_dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__.GoToDevRest.getUrlData(ct));
              case 'dataExport':
                return this.#urlTo(`export/${ct.NameId}`);
              case 'dataImport':
                return this.#urlTo(`${ct.NameId}/import`);
            }
          },
          do: (verb, ct) => {
            switch (verb) {
              case 'typeExport':
                this.#exportType(ct);
                break;
              case 'deleteContentType':
                this.#deleteContentType(ct);
                break;
            }
          }
        }
      }]
    };
    return gridOptions;
  }
  //#endregion
  //#region Actions in the grid
  #urlTo(url) {
    return '#' + this.#dialogRouter.urlSubRoute(url);
  }
  #routeAddItem(contentType) {
    return (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__.convertFormToUrl)({
      items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_15__.EditPrep.newFromType(contentType.NameId)]
    });
  }
  urlToNewContentType() {
    return this.#urlTo('add');
  }
  #routeCreateOrEditMetadata(contentType) {
    const form = {
      items: [!contentType.Properties ? {
        ..._shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_15__.EditPrep.newMetadata(contentType.NameId, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__.eavConstants.contentTypes.contentType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__.eavConstants.metadata.contentType),
        Prefill: {
          Label: contentType.Name,
          Description: contentType.Description
        }
      } : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_15__.EditPrep.editId(contentType.Properties.Id)]
    };
    return (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__.convertFormToUrl)(form);
  }
  // 2pp | not in use?
  // #createOrEditMetadata(contentType: ContentType) {
  //   this.#dialogRouter.navParentFirstChild([`edit/${this.#routeCreateOrEditMetadata(contentType)}`]);
  // }
  // #openPermissions(contentType: ContentType) {
  //   this.#dialogRouter.navParentFirstChild([GoToPermissions.getUrlContentType(contentType.NameId)]);
  // }
  // #routeMetadata(ct: ContentType) {
  //   return GoToMetadata.getUrlContentType(ct.NameId, `Metadata for Content Type: ${ct.Name} (${ct.Id})`);
  // }
  // #openMetadata(contentType: ContentType) {
  //   this.#dialogRouter.navParentFirstChild([this.#routeMetadata(contentType)]);
  // }
  // #openRestApi(contentType: ContentType) {
  //   this.#dialogRouter.navParentFirstChild([GoToDevRest.getUrlData(contentType)]);
  // }
  #exportType(contentType) {
    this.#contentExportSvc.exportJson(contentType.NameId);
  }
  #openDataImport(contentType, files) {
    this.#dialogRouter.navRelative([`${contentType.NameId}/import`], {
      state: {
        files
      }
    });
  }
  #deleteContentType(contentType) {
    if (!confirm(`Are you sure you want to delete '${contentType.Name}' (${contentType.Id})?`)) return;
    this.#snackBar.open('Deleting...');
    this.#contentTypeSvc.delete(contentType).subscribe(_ => {
      this.#snackBar.open('Deleted', null, {
        duration: 2000
      });
      this.#fetchContentTypes();
    });
  }
  static {
    this.ɵfac = function DataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
      type: DataComponent,
      selectors: [["app-data"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 9,
      consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], [1, "eav-dialog-actions"], [1, "eav-dialog-actions-div"], ["color", "accent", 1, "eav-mat-form-field", "eav-scope-dropdown"], ["name", "Scope", "panelWidth", "", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "href"], ["mat-button", "", "tippy", "Import content type", "tippyPlacement", "top", 1, "eav-button__with-icon"], [1, "eav-icon"], ["mat-button", "", "color", "accent", "tippy", "Create a ghost content type", "tippyPlacement", "top", 1, "eav-button__with-icon"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new content type", "tippyPlacement", "top", 1, "grid-fab"], ["mat-button", "", "color", "accent", "tippy", "Create a ghost content type", "tippyPlacement", "top", 1, "eav-button__with-icon", 3, "click"]],
      template: function DataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 0)(1, "ag-grid-angular", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("filesDropped", function DataComponent_Template_ag_grid_angular_filesDropped_1_listener($event) {
            return ctx.filesDropped($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "div", 3)(4, "mat-form-field", 4)(5, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("ngModelChange", function DataComponent_Template_mat_select_ngModelChange_5_listener($event) {
            return ctx.changeScope($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "mat-select-trigger")(7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrepeaterCreate"](9, DataComponent_For_10_Template, 2, 2, "mat-option", 6, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "mat-option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](12, "Scope: Other...");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "a", 7)(14, "button", 8)(15, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](16, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](18, "Content Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](19, DataComponent_Conditional_19_Template, 5, 0, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](20, "a", 7)(21, "button", 11)(22, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](23, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](24, "router-outlet");
        }
        if (rf & 2) {
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("rowData", ctx.contentTypes())("gridOptions", ctx.gridOptions)("allowedFileTypes", "xml,json");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngModel", ctx.scope());
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("Scope: ", (tmp_4_0 = ctx.scopeSelected()) == null ? null : tmp_4_0.label, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrepeater"](ctx.scopeOptions());
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", ctx.dropdownInsertValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("href", ctx.urlToImportType(), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵconditional"](ctx.isDebug() ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("href", ctx.urlToNewContentType(), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_35__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_35__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_35__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_38__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_38__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_38__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_16__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_40__.AgGridAngular, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_11__.DragAndDropDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_12__.TippyDirective],
      styles: [".eav-scope-dropdown[_ngcontent-%COMP%] {\n  margin-top: -14px;\n  width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJkYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1zY29wZS1kcm9wZG93biB7XHJcbiAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9kYXRhL2RhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNBLG9XQUFvVyIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtc2NvcGUtZHJvcGRvd24ge1xyXG4gIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 23513:
/*!************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/data/data-actions/data-actions.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataActionsComponent: () => (/* binding */ DataActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _shared_constants_guid_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/guid.constants */ 49417);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _queries_ag_actions_ag_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../queries/ag-actions/ag-actions-component */ 72620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);












function DataActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 2)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.params.urlTo("createUpdateMetaData", ctx_r0.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function DataActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DataActionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4)(1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.params.urlTo("openMetadata", ctx_r0.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matBadge", ctx_r0.contentType.Metadata.length)("matBadgeHidden", !ctx_r0.contentType.Metadata.length);
  }
}
function DataActionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matBadge", ctx_r0.contentType.Metadata.length)("matBadgeHidden", !ctx_r0.contentType.Metadata.length);
  }
}
function DataActionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5)(1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " person");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.params.urlTo("openPermissions", ctx_r0.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matBadge", ctx_r0.contentType.Permissions.Count)("matBadgeHidden", !ctx_r0.contentType.Permissions.Count);
  }
}
function DataActionsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matBadge", ctx_r0.contentType.Permissions.Count)("matBadgeHidden", !ctx_r0.contentType.Permissions.Count);
  }
}
function DataActionsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 11)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "REST API");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DataActionsComponent_ng_template_12_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.params.do("typeExport", ctx_r0.contentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Export content type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 12)(15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Export data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 12)(20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Import data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DataActionsComponent_ng_template_12_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.params.do("deleteContentType", ctx_r0.contentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.params.urlTo("editContentType", ctx_r0.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("disabled", ctx_r0.contentType.EditInfo.DisableRename);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.params.urlTo("openRestApi", ctx_r0.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.params.urlTo("dataExport", ctx_r0.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.params.urlTo("dataImport", ctx_r0.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.contentType.EditInfo.DisableDelete);
  }
}
class DataActionsComponent extends _queries_ag_actions_ag_actions_component__WEBPACK_IMPORTED_MODULE_2__.AgActionsAlwaysRefresh {
  agInit(params) {
    this.params = params;
    this.contentType = params.data;
    const enablePermissions = this.params.enablePermissionsGetter();
    this.enablePermissions = enablePermissions && (0,_shared_constants_guid_constants__WEBPACK_IMPORTED_MODULE_0__.guidRegex)().test(this.contentType.NameId);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵDataActionsComponent_BaseFactory;
      return function DataActionsComponent_Factory(__ngFactoryType__) {
        return (ɵDataActionsComponent_BaseFactory || (ɵDataActionsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DataActionsComponent)))(__ngFactoryType__ || DataActionsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DataActionsComponent,
      selectors: [["app-data-actions"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 4,
      consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Description and more", 1, "eav-grid-action-button", "default-link", "highlight", 3, "href"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "default-link", "highlight", 3, "href"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "default-link", "highlight", 3, "href"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["matBadgePosition", "below after", "matBadgeColor", "accent", "matBadgeSize", "small", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matBadgePosition", "below after", "matBadgeColor", "accent", "matBadgeSize", "small", "matBadgeDisabled", "true", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["mat-menu-item", "", 3, "href", "disabled"], ["mat-menu-item", "", 3, "href"], ["svgIcon", "code-curly"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", "disabled"]],
      template: function DataActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DataActionsComponent_Conditional_1_Template, 3, 1, "a", 2)(2, DataActionsComponent_Conditional_2_Template, 3, 0, "div", 3)(3, DataActionsComponent_Conditional_3_Template, 3, 3, "a", 4)(4, DataActionsComponent_Conditional_4_Template, 3, 2, "div", 3)(5, DataActionsComponent_Conditional_5_Template, 3, 3, "a", 5)(6, DataActionsComponent_Conditional_6_Template, 3, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "more_horiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-menu", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DataActionsComponent_ng_template_12_Template, 29, 6, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const menu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.contentType.EditInfo.DisableEdit || ctx.contentType.Properties ? 1 : 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.contentType.EditInfo.DisableMetadata ? 3 : 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.contentType.EditInfo.DisableEdit && ctx.enablePermissions ? 5 : 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", menu_r3);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadge, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 48021:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/rxJs/mapUntilChanged.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapUntilChanged: () => (/* binding */ mapUntilChanged),
/* harmony export */   mapUntilObjChanged: () => (/* binding */ mapUntilObjChanged)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 95682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/isEqual */ 92434);



/**
 * Combine map and distinctUntilChanged, as this is a very common pattern.
 * @param fn the mapping function
 * @returns
 */
function mapUntilChanged(fn) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(fn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
}
function mapUntilObjChanged(fn) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)(lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_3__["default"]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(fn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)(lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_3__["default"]));
}

/***/ }),

/***/ 82251:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/data/data-items/data-items.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataItemsComponent: () => (/* binding */ DataItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






class DataItemsComponent {
  agInit(params) {
    this.params = params;
    this.contentType = params.data;
    this.value = params.value;
  }
  refresh(params) {
    return true;
  }
  static {
    this.ɵfac = function DataItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataItemsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataItemsComponent,
      selectors: [["app-data-items"]],
      decls: 7,
      vars: 5,
      consts: [[1, "actions-component"], ["matRipple", "", 1, "eav-grid-action-button", "default-link", "highlight", 3, "tippy", "href"], [1, "text-icon"], ["matRipple", "", "tippy", "Add item", 1, "eav-grid-action-button", "default-link", "highlight", 3, "href"]],
      template: function DataItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3)(5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("tippy", "", ctx.value, " items");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.params.itemsUrl(ctx.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.params.addItemUrl(ctx.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: [".text-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 22px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border: 1px solid rgba(29, 39, 61, 0.44);\n  border-radius: 12px;\n  box-sizing: border-box;\n  background-color: #002753;\n  color: white;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.text-icon[_ngcontent-%COMP%] {\n  min-width: 24px;\n  width: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJkYXRhLWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtaWNvbiB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjksIDM5LCA2MSwgMC40NCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udGV4dC1pY29uIHtcclxuICBtaW4td2lkdGg6IDI0cHg7XHJcbiAgd2lkdGg6IGluaXRpYWw7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9kYXRhL2RhdGEtaXRlbXMvZGF0YS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUEsZ2xDQUFnbEMiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1pY29uIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyOSwgMzksIDYxLCAwLjQ0KTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc1MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0LWljb24ge1xyXG4gIG1pbi13aWR0aDogMjRweDtcclxuICB3aWR0aDogaW5pdGlhbDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 93955:
/*!**********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/data/data-fields/data-fields.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataFieldsComponent: () => (/* binding */ DataFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








class DataFieldsComponent {
  agInit(params) {
    this.params = params;
    this.contentType = params.data;
    this.value = params.value;
    this.tooltip = !this.contentType.EditInfo.ReadOnly ? 'Edit fields' : `${this.contentType.EditInfo.ReadOnlyMessage ? `${this.contentType.EditInfo.ReadOnlyMessage}\n\n` : ''}This ContentType shares the definition of #${this.contentType.SharedDefId} so you can't edit it here. Read 2sxc.org/help?tag=shared-types`;
    this.icon = !this.contentType.EditInfo.ReadOnly ? 'dns' : 'share';
  }
  refresh(params) {
    return true;
  }
  static {
    this.ɵfac = function DataFieldsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataFieldsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataFieldsComponent,
      selectors: [["app-data-fields"]],
      decls: 4,
      vars: 5,
      consts: [[1, "actions-component"], ["matRipple", "", 1, "eav-grid-action-button", "default-link", "highlight", 3, "tippy", "href"], ["matBadgePosition", "below after", "matBadgeColor", "accent", "matBadgeSize", "small", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"]],
      template: function DataFieldsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.tooltip)("href", ctx.params.fieldsUrl(ctx.contentType), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx.value)("matBadgeHidden", !ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.icon, " ");
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadge, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_data_data_component_ts.js.map