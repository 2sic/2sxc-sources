"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_views-usage_views-usage_component_ts"],{

/***/ 1128:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/views-usage/views-usage-grid.helpers.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockIdValueGetter: () => (/* binding */ blockIdValueGetter),
/* harmony export */   moduleIdClassGetter: () => (/* binding */ moduleIdClassGetter),
/* harmony export */   moduleIdValueGetter: () => (/* binding */ moduleIdValueGetter),
/* harmony export */   nameClassGetter: () => (/* binding */ nameClassGetter),
/* harmony export */   onNameClicked: () => (/* binding */ onNameClicked),
/* harmony export */   pageIdClassGetter: () => (/* binding */ pageIdClassGetter),
/* harmony export */   pageIdValueGetter: () => (/* binding */ pageIdValueGetter),
/* harmony export */   statusCellRenderer: () => (/* binding */ statusCellRenderer)
/* harmony export */ });
function blockIdValueGetter(params) {
  const data = params.data;
  return `ID: ${data.Block.Id}\nGUID: ${data.Block.Guid}`;
}
function moduleIdValueGetter(params) {
  const data = params.data;
  if (data.Module == null) return;
  return `ID: ${data.Module.Id}\nUsageId: ${data.Module.UsageId}\nTitle: ${data.Module.Title}`;
}
function moduleIdClassGetter(params) {
  return `${params.value != null ? 'id-action no-padding' : ''} no-outline`.split(' ');
}
function pageIdValueGetter(params) {
  const data = params.data;
  if (data.PageId == null) return;
  return `ID: ${data.PageId}`;
}
function pageIdClassGetter(params) {
  return `${params.value != null ? 'id-action no-padding' : ''} no-outline`.split(' ');
}
function nameClassGetter(params) {
  return `${params.value != null ? 'primary-action highlight' : 'no-outline'}`.split(' ');
}
function onNameClicked(params) {
  if (params.value == null) return;
  const data = params.data;
  window.open(data.Url, '_blank');
}
function statusCellRenderer(params) {
  const status = params.value;
  if (status == null) return;
  return `
    <div style="height: 100%;display: flex;align-items: center;">
      ${status.IsVisible ? '<span class="material-symbols-outlined">visibility</span>' : '<span class="material-symbols-outlined">visibility_off</span>'}
      ${status.IsDeleted ? '<span style="margin-left: 8px;" class="material-symbols-outlined">delete</span>' : ''}
    </div>
  `;
}

/***/ }),

/***/ 3045:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/views-usage/views-usage.helpers.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildData: () => (/* binding */ buildData)
/* harmony export */ });
function buildData(viewUsage) {
  const data = [];
  for (const block of viewUsage.Blocks) {
    if (block.Modules.length === 0) {
      data.push({
        Block: {
          Id: block.Id,
          Guid: block.Guid
        }
      });
    }
    for (const module of block.Modules) {
      data.push({
        Block: {
          Id: block.Id,
          Guid: block.Guid
        },
        Module: module,
        PageId: module.Page.Id,
        Name: module.Page.Name,
        Url: module.Page.Url,
        Language: module.Page.CultureCode,
        Status: {
          IsVisible: module.Page.Visible,
          IsDeleted: module.IsDeleted
        }
      });
    }
  }
  return data;
}

/***/ }),

/***/ 24244:
/*!*********************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/views-usage/views-usage-status-filter/views-usage-status-filter.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsUsageStatusFilterComponent: () => (/* binding */ ViewsUsageStatusFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





class ViewsUsageStatusFilterComponent {
  constructor() {
    this.isVisible = '';
    this.isDeleted = '';
  }
  agInit(params) {
    this.filterParams = params;
  }
  isFilterActive() {
    return this.isVisible !== '' || this.isDeleted !== '';
  }
  doesFilterPass(params) {
    let visiblePassed = false;
    let deletedPassed = false;
    const valueGetterParams = {
      api: this.filterParams.api,
      colDef: this.filterParams.colDef,
      column: this.filterParams.column,
      columnApi: this.filterParams.columnApi,
      context: this.filterParams.context,
      data: params.node.data,
      getValue: field => params.node.data[field],
      node: params.node
    };
    const value = this.filterParams.valueGetter(valueGetterParams);
    if (value == null) {
      return false;
    }
    if (this.isVisible !== '') {
      visiblePassed = value.IsVisible == null ? false : value.IsVisible.toString() === this.isVisible;
    } else {
      visiblePassed = true;
    }
    if (this.isDeleted !== '') {
      deletedPassed = value.IsDeleted == null ? false : value.IsDeleted.toString() === this.isDeleted;
    } else {
      deletedPassed = true;
    }
    return visiblePassed && deletedPassed;
  }
  getModel() {
    if (!this.isFilterActive()) return;
    return {
      filterType: 'views-usage-status',
      isVisible: this.isVisible,
      isDeleted: this.isDeleted
    };
  }
  setModel(model) {
    this.isVisible = model ? model.isVisible : '';
    this.isDeleted = model ? model.isDeleted : '';
  }
  afterGuiAttached(params) {}
  filterChanged() {
    this.filterParams.filterChangedCallback();
  }
  static {
    this.ɵfac = function ViewsUsageStatusFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewsUsageStatusFilterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewsUsageStatusFilterComponent,
      selectors: [["app-views-usage-status-filter"]],
      decls: 18,
      vars: 2,
      consts: [[1, "title"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "true"], ["value", "false"]],
      template: function ViewsUsageStatusFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visible");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-group", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ViewsUsageStatusFilterComponent_Template_mat_radio_group_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.isVisible, $event) || (ctx.isVisible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsUsageStatusFilterComponent_Template_mat_radio_group_ngModelChange_2_listener() {
            return ctx.filterChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Visible");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hidden");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Deleted");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-group", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ViewsUsageStatusFilterComponent_Template_mat_radio_group_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.isDeleted, $event) || (ctx.isDeleted = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsUsageStatusFilterComponent_Template_mat_radio_group_ngModelChange_11_listener() {
            return ctx.filterChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Is deleted");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-radio-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Is not deleted");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.isVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.isDeleted);
        }
      },
      dependencies: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_1__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".title[_ngcontent-%COMP%] {\n  padding: 12px 12px 0;\n}\n\n.mat-mdc-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 12px;\n  width: 160px;\n  height: 104px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzLXVzYWdlLXN0YXR1cy1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InZpZXdzLXVzYWdlLXN0YXR1cy1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAwO1xyXG59XHJcblxyXG4ubWF0LW1kYy1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy92aWV3cy11c2FnZS92aWV3cy11c2FnZS1zdGF0dXMtZmlsdGVyL3ZpZXdzLXVzYWdlLXN0YXR1cy1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0Esb3VCQUFvdUIiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAwO1xyXG59XHJcblxyXG4ubWF0LW1kYy1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39903:
/*!*****************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/views-usage/views-usage.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsUsageComponent: () => (/* binding */ ViewsUsageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _services_views_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/views.service */ 2570);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views-usage-grid.helpers */ 1128);
/* harmony import */ var _views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views-usage-id/views-usage-id.component */ 66490);
/* harmony import */ var _views_usage_status_filter_views_usage_status_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views-usage-status-filter/views-usage-status-filter.component */ 24244);
/* harmony import */ var _views_usage_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views-usage.helpers */ 3045);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);





// tslint:disable-next-line:max-line-length
















class ViewsUsageComponent {
  constructor(dialog, route) {
    this.dialog = dialog;
    this.route = route;
    this.gridOptions = this.buildGridOptions();
    this.viewsService = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_services_views_service__WEBPACK_IMPORTED_MODULE_1__.ViewsService);
    this.viewGuid = this.route.snapshot.paramMap.get('guid');
    this.#usage = this.viewsService.getUsage(this.viewGuid);
    this.view = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.computed)(() => {
      const usage = this.#usage();
      if (usage === undefined) return undefined;
      return {
        viewUsageName: usage[0]?.Name,
        viewTooltip: `ID: ${usage[0].Id}\nGUID: ${usage[0].Guid}`,
        data: (0,_views_usage_helpers__WEBPACK_IMPORTED_MODULE_9__.buildData)(usage[0])
      };
    });
  }
  #usage;
  closeDialog() {
    this.dialog.close();
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_0__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.Id,
        field: 'Block',
        valueGetter: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__.blockIdValueGetter,
        cellRenderer: _views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_7__.ViewsUsageIdComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.Number,
        field: 'Module',
        width: 80,
        valueGetter: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__.moduleIdValueGetter,
        cellClass: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__.moduleIdClassGetter,
        cellRenderer: _views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_7__.ViewsUsageIdComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.Number,
        field: 'Page',
        valueGetter: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__.pageIdValueGetter,
        cellClass: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__.pageIdClassGetter,
        cellRenderer: _views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_7__.ViewsUsageIdComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.TextWide,
        field: 'Name',
        sort: 'asc',
        cellClass: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__.nameClassGetter,
        onCellClicked: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__.onNameClicked
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.ItemsText,
        field: 'Language',
        width: 90
      }, {
        field: 'Status',
        width: 80,
        cellClass: 'icon no-outline'.split(' '),
        filter: _views_usage_status_filter_views_usage_status_filter_component__WEBPACK_IMPORTED_MODULE_8__.ViewsUsageStatusFilterComponent,
        cellRenderer: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_6__.statusCellRenderer
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function ViewsUsageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewsUsageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ViewsUsageComponent,
      selectors: [["app-views-usage"]],
      decls: 20,
      vars: 4,
      consts: [[1, "nav-component-wrapper"], ["mat-mdc-dialog-title", ""], [1, "dialog-title-box"], [3, "tippy"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [2, "overflow", "hidden", "color", "black"], [1, "dialog-description"], ["href", "https://go.2sxc.org/content-in-dnn", "target", "_blank"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], [1, "grid-more-actions-box"]],
      template: function ViewsUsageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewsUsageComponent_Template_button_click_5_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-dialog-content", 5)(9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " This shows where this view is being used. Read about the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "connections between DNN and 2sxc Views");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " to make good decisions if you're doing clean-up or just want to better know what this is all about. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Before you get confused about some things you see here, do read the FAQ on that page.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "ag-grid-angular", 9)(19, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tippy", (tmp_0_0 = ctx.view()) == null ? null : tmp_0_0.viewTooltip);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("View: ", (tmp_1_0 = ctx.view()) == null ? null : tmp_1_0.viewUsageName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", (tmp_2_0 = ctx.view()) == null ? null : tmp_2_0.data)("gridOptions", ctx.gridOptions);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_5__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_15__.AgGridAngular, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_4__.TippyDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogContent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 66490:
/*!***********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/views-usage/views-usage-id/views-usage-id.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsUsageIdComponent: () => (/* binding */ ViewsUsageIdComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core_transient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../core/transient */ 12938);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);








function ViewsUsageIdComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewsUsageIdComponent_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.tooltip));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", ctx_r1.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.id);
  }
}
class ViewsUsageIdComponent {
  constructor() {
    this.clipboard = (0,_core_transient__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_2__.ClipboardService);
  }
  agInit(params) {
    this.tooltip = params.value;
    if (this.tooltip == null) return;
    const idPart = this.tooltip.split('\n')[0];
    this.id = idPart.split(' ')[1];
  }
  refresh(params) {
    return true;
  }
  static {
    this.ɵfac = function ViewsUsageIdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewsUsageIdComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ViewsUsageIdComponent,
      selectors: [["app-views-usage-id"]],
      decls: 1,
      vars: 1,
      consts: [["matRipple", "", 1, "id-box", "highlight", 3, "tippy"], ["matRipple", "", 1, "id-box", "highlight", 3, "click", "tippy"], [1, "id"], [1, "icon"]],
      template: function ViewsUsageIdComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ViewsUsageIdComponent_Conditional_0_Template, 5, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.id ? 0 : -1);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      styles: [".id-box[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  text-align: end;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.id-box[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%] {\n  display: none;\n}\n.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzLXVzYWdlLWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtBQUFOO0FBS0k7RUFDRSxhQUFBO0FBSE4iLCJmaWxlIjoidmlld3MtdXNhZ2UtaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWQtYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAuaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgLmlkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bm90KDpob3Zlcikge1xyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy92aWV3cy11c2FnZS92aWV3cy11c2FnZS1pZC92aWV3cy11c2FnZS1pZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7QUFBTjtBQUtJO0VBQ0UsYUFBQTtBQUhOO0FBQ0EsZ2pDQUFnakMiLCJzb3VyY2VzQ29udGVudCI6WyIuaWQtYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAuaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgLmlkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bm90KDpob3Zlcikge1xyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_views-usage_views-usage_component_ts.js.map