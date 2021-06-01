(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~item-history-item-history-module~ng-dialogs-src-app-item-history-item-history-module"],{

/***/ "06F4":
/*!*************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/item-history/item-history.module.ts ***!
  \*************************************************************************/
/*! exports provided: ItemHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemHistoryModule", function() { return ItemHistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _item_history_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./item-history-routing.module */ "s5xt");
/* harmony import */ var _item_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./item-history.component */ "dMuk");
/* harmony import */ var _services_versions_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/versions.service */ "0zO3");


















var ItemHistoryModule = /** @class */ (function () {
    function ItemHistoryModule() {
    }
    ItemHistoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _item_history_component__WEBPACK_IMPORTED_MODULE_16__["ItemHistoryComponent"],
            ],
            entryComponents: [
                _item_history_component__WEBPACK_IMPORTED_MODULE_16__["ItemHistoryComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _item_history_routing_module__WEBPACK_IMPORTED_MODULE_15__["ItemHistoryRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_14__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_13__["Context"],
                _services_versions_service__WEBPACK_IMPORTED_MODULE_17__["VersionsService"],
            ]
        })
    ], ItemHistoryModule);
    return ItemHistoryModule;
}());



/***/ }),

/***/ "0zO3":
/*!*******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/item-history/services/versions.service.ts ***!
  \*******************************************************************************/
/*! exports provided: VersionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsService", function() { return VersionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");





var webApiVersions = 'cms/history/';
var VersionsService = /** @class */ (function () {
    function VersionsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    VersionsService.prototype.fetchVersions = function (entityId) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiVersions + 'get'), { entityId: entityId }, {
            params: { appId: this.context.appId.toString() },
        });
    };
    VersionsService.prototype.restore = function (entityId, changeId) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiVersions + 'restore'), { entityId: entityId }, {
            params: { appId: this.context.appId.toString(), changeId: changeId.toString() },
        });
    };
    VersionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    VersionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], VersionsService);
    return VersionsService;
}());



/***/ }),

/***/ "1bNM":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/item-history/item-history.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateVars$ | async as data\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Item History</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <p class=\"dialog-description\">Check version history for this item and restore the version you need.</p>\r\n\r\n  <div *ngIf=\"data.historyItems?.length > 0\" class=\"compare-box\">\r\n    <mat-form-field appearance=\"standard\" color=\"accent\" class=\"compare-box__dropdown\">\r\n      <mat-select [value]=\"data.compareWith\" name=\"Scope\" (selectionChange)=\"compareChange($event.value)\">\r\n        <mat-option value=\"previous\">Compare with: Previous</mat-option>\r\n        <mat-option value=\"live\">Compare with: Live</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light\">\r\n    <div *ngIf=\"data.historyItems === null\">Loading...</div>\r\n    <div *ngIf=\"data.historyItems?.length === 0\">No previous versions of this item found</div>\r\n\r\n    <mat-accordion multi *ngIf=\"data.historyItems?.length > 0\" class=\"history-tables\">\r\n      <mat-expansion-panel *ngFor=\"let historyItem of data.historyItems\"\r\n        [expanded]=\"expandedPanels[historyItem.versionNumber]\"\r\n        (expandedChange)=\"panelExpandedChange($event, historyItem.versionNumber)\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Version {{ historyItem.versionNumber }}</mat-panel-title>\r\n          <mat-panel-description>{{ historyItem.timeStamp | date:'yyyy-MM-dd hh:mm' }}</mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <ng-container *ngIf=\"expandedPanels[historyItem.versionNumber]\">\r\n          <div class=\"table-row\" *ngFor=\"let attribute of historyItem.attributes\">\r\n            <div class=\"table-row__main row-main\"\r\n              (click)=\"attributeExpandedToggle(historyItem.versionNumber, attribute.name)\">\r\n              <div class=\"row-main__label history-{{ attribute.change }}\">\r\n                {{ attribute.name }}\r\n              </div>\r\n              <div class=\"row-main__value history-{{ attribute.change }}\">\r\n                <ng-container *ngIf=\"!expandedAttributes[historyItem.versionNumber + attribute.name]\">\r\n                  {{ attribute.values[0]?.value }}\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"row-main__type\">\r\n                <i>[{{ attribute.dataType }}]</i>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"table-row__details\" *ngIf=\"expandedAttributes[historyItem.versionNumber + attribute.name]\">\r\n              <div class=\"detail-row\" *ngFor=\"let value of attribute.values\">\r\n                <div class=\"detail-row__label history-{{ value.change }}\">{{ value.langKey }}:</div>\r\n                <div class=\"detail-row__value\">\r\n                  <div class=\"history-{{ value.change }}\" *ngIf=\"value.change !== 'changed'\">\r\n                    {{ value.change === 'deleted' ? value.oldValue : value.value }}\r\n                  </div>\r\n                  <ng-container *ngIf=\"value.change === 'changed'\">\r\n                    <div class=\"history-new\">{{ value.value }}</div>\r\n                    <div class=\"history-deleted history-deleted__value\">{{ value.oldValue }}</div>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row-actions\">\r\n            <button mat-raised-button color=\"accent\" *ngIf=\"!historyItem.isLastVersion\"\r\n              (click)=\"restore(historyItem.changeSetId)\">\r\n              Restore\r\n            </button>\r\n          </div>\r\n        </ng-container>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n\r\n  <mat-paginator color=\"accent\" showFirstLastButtons=\"true\" [length]=\"data.length\" [pageSize]=\"data.pageSize\"\r\n    [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" *ngIf=\"data.historyItems?.length > 0\">\r\n  </mat-paginator>\r\n</ng-container>\r\n");

/***/ }),

/***/ "IOLJ":
/*!********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/item-history/item-history-dialog.config.ts ***!
  \********************************************************************************/
/*! exports provided: itemHistoryDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemHistoryDialog", function() { return itemHistoryDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var itemHistoryDialog = {
    name: 'ITEM_HISTORY_DIALOG',
    initContext: true,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ItemHistoryComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./item-history.component */ "dMuk"))];
                    case 1:
                        ItemHistoryComponent = (_a.sent()).ItemHistoryComponent;
                        return [2 /*return*/, ItemHistoryComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "M9IT":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
  \***************************************************************************/
/*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent, _MatPaginatorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function() { return MAT_PAGINATOR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function() { return MAT_PAGINATOR_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function() { return MAT_PAGINATOR_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function() { return MatPaginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function() { return MatPaginatorIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return MatPaginatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function() { return PageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatPaginatorBase", function() { return _MatPaginatorBase; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */









function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pageSizeOption_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", pageSizeOption_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
  }
}

function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r7._changePageSize($event.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appearance", ctx_r3._formFieldAppearance)("color", ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
  }
}

function MatPaginator_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.pageSize);
  }
}

function MatPaginator_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 6, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
  }
}

function MatPaginator_button_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r9.firstPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
  }
}

function MatPaginator_button_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r11.lastPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
  }
}

var MatPaginatorIntl = function MatPaginatorIntl() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorIntl);

  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
  /** A label for the page size selector. */

  this.itemsPerPageLabel = 'Items per page:';
  /** A label for the button that increments the current page. */

  this.nextPageLabel = 'Next page';
  /** A label for the button that decrements the current page. */

  this.previousPageLabel = 'Previous page';
  /** A label for the button that moves to the first page. */

  this.firstPageLabel = 'First page';
  /** A label for the button that moves to the last page. */

  this.lastPageLabel = 'Last page';
  /** A label for the range of items within the current page and the length of the whole list. */

  this.getRangeLabel = function (page, pageSize, length) {
    if (length == 0 || pageSize == 0) {
      return "0 of ".concat(length);
    }

    length = Math.max(length, 0);
    var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

    var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
  };
};

MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
  return new (t || MatPaginatorIntl)();
};

MatPaginatorIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"])({
  factory: function MatPaginatorIntl_Factory() {
    return new MatPaginatorIntl();
  },
  token: MatPaginatorIntl,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatPaginatorIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/** @docs-private */


function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */


var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_5__["SkipSelf"](), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The default page size if there is no page size and there are no provided page size options. */

var DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */

var PageEvent = function PageEvent() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PageEvent);
};
/** Injection token that can be used to provide the default options for the paginator module. */


var MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to _MatPaginatorBase.

/** @docs-private */

var MatPaginatorMixinBase = function MatPaginatorMixinBase() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorMixinBase);
};

var _MatPaginatorMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinInitialized"])(MatPaginatorMixinBase));
/**
 * Base class with all of the `MatPaginator` functionality.
 * @docs-private
 */


var _MatPaginatorBase = /*#__PURE__*/function (_MatPaginatorMixinBas) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatPaginatorBase, _MatPaginatorMixinBas);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(_MatPaginatorBase);

  function _MatPaginatorBase(_intl, _changeDetectorRef, defaults) {
    var _this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _MatPaginatorBase);

    _this = _super.call(this);
    _this._intl = _intl;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._pageIndex = 0;
    _this._length = 0;
    _this._pageSizeOptions = [];
    _this._hidePageSize = false;
    _this._showFirstLastButtons = false;
    /** Event emitted when the paginator changes the page size or page index. */

    _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    _this._intlChanges = _intl.changes.subscribe(function () {
      return _this._changeDetectorRef.markForCheck();
    });

    if (defaults) {
      var pageSize = defaults.pageSize,
          pageSizeOptions = defaults.pageSizeOptions,
          hidePageSize = defaults.hidePageSize,
          showFirstLastButtons = defaults.showFirstLastButtons;

      if (pageSize != null) {
        _this._pageSize = pageSize;
      }

      if (pageSizeOptions != null) {
        _this._pageSizeOptions = pageSizeOptions;
      }

      if (hidePageSize != null) {
        _this._hidePageSize = hidePageSize;
      }

      if (showFirstLastButtons != null) {
        _this._showFirstLastButtons = showFirstLastButtons;
      }
    }

    return _this;
  }
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_MatPaginatorBase, [{
    key: "pageIndex",
    get: function get() {
      return this._pageIndex;
    },
    set: function set(value) {
      this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceNumberProperty"])(value), 0);

      this._changeDetectorRef.markForCheck();
    }
    /** The length of the total number of items that are being paginated. Defaulted to 0. */

  }, {
    key: "length",
    get: function get() {
      return this._length;
    },
    set: function set(value) {
      this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceNumberProperty"])(value);

      this._changeDetectorRef.markForCheck();
    }
    /** Number of items to display on a page. By default set to 50. */

  }, {
    key: "pageSize",
    get: function get() {
      return this._pageSize;
    },
    set: function set(value) {
      this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceNumberProperty"])(value), 0);

      this._updateDisplayedPageSizeOptions();
    }
    /** The set of provided page size options to display to the user. */

  }, {
    key: "pageSizeOptions",
    get: function get() {
      return this._pageSizeOptions;
    },
    set: function set(value) {
      this._pageSizeOptions = (value || []).map(function (p) {
        return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceNumberProperty"])(p);
      });

      this._updateDisplayedPageSizeOptions();
    }
    /** Whether to hide the page size selection UI from the user. */

  }, {
    key: "hidePageSize",
    get: function get() {
      return this._hidePageSize;
    },
    set: function set(value) {
      this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
    }
    /** Whether to show the first/last buttons UI to the user. */

  }, {
    key: "showFirstLastButtons",
    get: function get() {
      return this._showFirstLastButtons;
    },
    set: function set(value) {
      this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._initialized = true;

      this._updateDisplayedPageSizeOptions();

      this._markInitialized();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._intlChanges.unsubscribe();
    }
    /** Advances to the next page if it exists. */

  }, {
    key: "nextPage",
    value: function nextPage() {
      if (!this.hasNextPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex++;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move back to the previous page if it exists. */

  }, {
    key: "previousPage",
    value: function previousPage() {
      if (!this.hasPreviousPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex--;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move to the first page if not already there. */

  }, {
    key: "firstPage",
    value: function firstPage() {
      // hasPreviousPage being false implies at the start
      if (!this.hasPreviousPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex = 0;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move to the last page if not already there. */

  }, {
    key: "lastPage",
    value: function lastPage() {
      // hasNextPage being false implies at the end
      if (!this.hasNextPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex = this.getNumberOfPages() - 1;

      this._emitPageEvent(previousPageIndex);
    }
    /** Whether there is a previous page. */

  }, {
    key: "hasPreviousPage",
    value: function hasPreviousPage() {
      return this.pageIndex >= 1 && this.pageSize != 0;
    }
    /** Whether there is a next page. */

  }, {
    key: "hasNextPage",
    value: function hasNextPage() {
      var maxPageIndex = this.getNumberOfPages() - 1;
      return this.pageIndex < maxPageIndex && this.pageSize != 0;
    }
    /** Calculate the number of pages */

  }, {
    key: "getNumberOfPages",
    value: function getNumberOfPages() {
      if (!this.pageSize) {
        return 0;
      }

      return Math.ceil(this.length / this.pageSize);
    }
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */

  }, {
    key: "_changePageSize",
    value: function _changePageSize(pageSize) {
      // Current page needs to be updated to reflect the new page size. Navigate to the page
      // containing the previous page's first item.
      var startIndex = this.pageIndex * this.pageSize;
      var previousPageIndex = this.pageIndex;
      this.pageIndex = Math.floor(startIndex / pageSize) || 0;
      this.pageSize = pageSize;

      this._emitPageEvent(previousPageIndex);
    }
    /** Checks whether the buttons for going forwards should be disabled. */

  }, {
    key: "_nextButtonsDisabled",
    value: function _nextButtonsDisabled() {
      return this.disabled || !this.hasNextPage();
    }
    /** Checks whether the buttons for going backwards should be disabled. */

  }, {
    key: "_previousButtonsDisabled",
    value: function _previousButtonsDisabled() {
      return this.disabled || !this.hasPreviousPage();
    }
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     */

  }, {
    key: "_updateDisplayedPageSizeOptions",
    value: function _updateDisplayedPageSizeOptions() {
      if (!this._initialized) {
        return;
      } // If no page size is provided, use the first page size option or the default page size.


      if (!this.pageSize) {
        this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
      }

      this._displayedPageSizeOptions = this.pageSizeOptions.slice();

      if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
        this._displayedPageSizeOptions.push(this.pageSize);
      } // Sort the numbers using a number-specific sort function.


      this._displayedPageSizeOptions.sort(function (a, b) {
        return a - b;
      });

      this._changeDetectorRef.markForCheck();
    }
    /** Emits an event notifying that a change of the paginator's properties has been triggered. */

  }, {
    key: "_emitPageEvent",
    value: function _emitPageEvent(previousPageIndex) {
      this.page.emit({
        previousPageIndex: previousPageIndex,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        length: this.length
      });
    }
  }]);

  return _MatPaginatorBase;
}(_MatPaginatorMixinBase);

_MatPaginatorBase.ɵfac = function _MatPaginatorBase_Factory(t) {
  return new (t || _MatPaginatorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](undefined));
};

_MatPaginatorBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: _MatPaginatorBase,
  inputs: {
    pageIndex: "pageIndex",
    length: "length",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions",
    hidePageSize: "hidePageSize",
    showFirstLastButtons: "showFirstLastButtons",
    color: "color"
  },
  outputs: {
    page: "page"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]]
});

_MatPaginatorBase.ctorParameters = function () {
  return [{
    type: MatPaginatorIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
  }, {
    type: undefined
  }];
};

_MatPaginatorBase.propDecorators = {
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  length: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageSizeOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  hidePageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  showFirstLastButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](_MatPaginatorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"]
  }], function () {
    return [{
      type: MatPaginatorIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
    }, {
      type: undefined
    }];
  }, {
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    pageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    length: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    pageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    hidePageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    showFirstLastButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }]
  });
})();
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */


var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatPaginator, _MatPaginatorBase2);

  var _super2 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatPaginator);

  function MatPaginator(intl, changeDetectorRef, defaults) {
    var _this2;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginator);

    _this2 = _super2.call(this, intl, changeDetectorRef, defaults);

    if (defaults && defaults.formFieldAppearance != null) {
      _this2._formFieldAppearance = defaults.formFieldAppearance;
    }

    return _this2;
  }

  return MatPaginator;
}(_MatPaginatorBase);

MatPaginator.ɵfac = function MatPaginator_Factory(t) {
  return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
};

MatPaginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MatPaginator,
  selectors: [["mat-paginator"]],
  hostAttrs: ["role", "group", 1, "mat-paginator"],
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["matPaginator"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 14,
  vars: 14,
  consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "appearance", "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "appearance", "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
  template: function MatPaginator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
        return ctx.previousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]],
  styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatPaginator.ctorParameters = function () {
  return [{
    type: MatPaginatorIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatPaginator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
    args: [{
      selector: 'mat-paginator',
      exportAs: 'matPaginator',
      template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [appearance]=\"_formFieldAppearance!\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
      inputs: ['disabled'],
      host: {
        'class': 'mat-paginator',
        'role': 'group'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
      styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
    }]
  }], function () {
    return [{
      type: MatPaginatorIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatPaginatorModule = function MatPaginatorModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorModule);
};

MatPaginatorModule.ɵfac = function MatPaginatorModule_Factory(t) {
  return new (t || MatPaginatorModule)();
};

MatPaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MatPaginatorModule
});
MatPaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [MAT_PAGINATOR_INTL_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatPaginatorModule, {
    declarations: function declarations() {
      return [MatPaginator];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatPaginator];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatPaginatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
      exports: [MatPaginator],
      declarations: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=paginator.js.map

/***/ }),

/***/ "dMuk":
/*!****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/item-history/item-history.component.ts ***!
  \****************************************************************************/
/*! exports provided: ItemHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemHistoryComponent", function() { return ItemHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-history.component.html */ "1bNM");
/* harmony import */ var _item_history_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-history.component.scss */ "vgoA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _item_history_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-history.helpers */ "y8xB");
/* harmony import */ var _services_versions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/versions.service */ "0zO3");











var ItemHistoryComponent = /** @class */ (function () {
    function ItemHistoryComponent(dialogRef, route, versionsService, snackBar) {
        this.dialogRef = dialogRef;
        this.route = route;
        this.versionsService = versionsService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.pageSizeOptions = [10, 20, 50];
        this.expandedPanels = {};
        this.expandedAttributes = {};
        this.itemId = parseInt(this.route.snapshot.paramMap.get('itemId'), 10);
        this.versions$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.page$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](1);
        this.pageSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this.pageSizeOptions[0]);
        this.compareWith$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('live');
        this.historyItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.versions$, this.page$, this.pageSize$, this.compareWith$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 4), versions = _b[0], page = _b[1], pageSize = _b[2], compareWith = _b[3];
            return Object(_item_history_helpers__WEBPACK_IMPORTED_MODULE_9__["getHistoryItems"])(versions, page, pageSize, compareWith);
        }));
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.versions$, this.historyItems$, this.pageSize$, this.compareWith$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 4), versions = _b[0], historyItems = _b[1], pageSize = _b[2], compareWith = _b[3];
            return ({
                length: versions === null || versions === void 0 ? void 0 : versions.length,
                historyItems: historyItems,
                pageSize: pageSize,
                compareWith: compareWith,
            });
        }));
    }
    ItemHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.versionsService.fetchVersions(this.itemId).subscribe(function (versions) {
            _this.versions$.next(versions);
        });
    };
    ItemHistoryComponent.prototype.ngOnDestroy = function () {
        this.versions$.complete();
        this.page$.complete();
        this.pageSize$.complete();
        this.compareWith$.complete();
    };
    ItemHistoryComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ItemHistoryComponent.prototype.compareChange = function (newCompareWith) {
        this.compareWith$.next(newCompareWith);
    };
    ItemHistoryComponent.prototype.panelExpandedChange = function (expand, versionNumber) {
        this.expandedPanels[versionNumber] = expand;
    };
    ItemHistoryComponent.prototype.attributeExpandedToggle = function (versionNumber, name) {
        this.expandedAttributes[versionNumber + name] = !this.expandedAttributes[versionNumber + name];
    };
    ItemHistoryComponent.prototype.pageChange = function (event) {
        var newPage = event.pageIndex + 1;
        if (newPage !== this.page$.value) {
            this.expandedPanels = {};
            this.expandedAttributes = {};
            this.page$.next(newPage);
        }
        var newPageSize = event.pageSize;
        if (newPageSize !== this.pageSize$.value) {
            this.pageSize$.next(newPageSize);
        }
    };
    ItemHistoryComponent.prototype.restore = function (changeId) {
        var _this = this;
        this.snackBar.open('Restoring previous version...');
        this.versionsService.restore(this.itemId, changeId).subscribe(function (res) {
            _this.snackBar.open('Previous version restored. Will reload edit dialog', null, { duration: 3000 });
            var result = {
                refreshEdit: true,
            };
            _this.dialogRef.close(result);
        });
    };
    ItemHistoryComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_versions_service__WEBPACK_IMPORTED_MODULE_10__["VersionsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ItemHistoryComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ItemHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-item-history',
            template: _raw_loader_item_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_item_history_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_versions_service__WEBPACK_IMPORTED_MODULE_10__["VersionsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ItemHistoryComponent);
    return ItemHistoryComponent;
}());



/***/ }),

/***/ "s5xt":
/*!*********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/item-history/item-history-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ItemHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemHistoryRoutingModule", function() { return ItemHistoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _item_history_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-history-dialog.config */ "IOLJ");





var routes = [
    { path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__["DialogEntryComponent"], data: { dialog: _item_history_dialog_config__WEBPACK_IMPORTED_MODULE_4__["itemHistoryDialog"], title: 'Item History' } },
];
var ItemHistoryRoutingModule = /** @class */ (function () {
    function ItemHistoryRoutingModule() {
    }
    ItemHistoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ItemHistoryRoutingModule);
    return ItemHistoryRoutingModule;
}());



/***/ }),

/***/ "vgoA":
/*!******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/item-history/item-history.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".compare-box {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  height: 40px;\n}\n.compare-box__dropdown {\n  width: 192px;\n  margin-top: -14px;\n  font-size: 14px;\n  height: auto;\n}\n.mat-accordion {\n  display: block;\n  padding: 4px 0;\n}\n.mat-expansion-panel-header {\n  font-size: 14px;\n}\n.table-row {\n  font-size: 14px;\n}\n.table-row__main {\n  display: flex;\n}\n.table-row__details {\n  display: block;\n}\n.row-main {\n  cursor: pointer;\n  padding: 4px 0;\n}\n.row-main__label {\n  width: 160px;\n  flex: 0 0 auto;\n}\n.row-main__value {\n  flex: 1 1 auto;\n}\n.row-main__type {\n  flex: 0 0 auto;\n  font-size: 12px;\n}\n.row-main__type i:not(:last-of-type) {\n  margin-right: 2px;\n}\n.detail-row {\n  display: flex;\n  padding-bottom: 4px;\n  cursor: default;\n}\n.detail-row__label {\n  width: 160px;\n  flex: 0 0 auto;\n}\n.detail-row__value {\n  flex: 1 1 auto;\n}\n.row-actions {\n  margin-top: 16px;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXRlbS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFGRjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUhKO0FBTUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUpKO0FBTUk7RUFDRSxpQkFBQTtBQUpOO0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkY7QUFRRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBTko7QUFTRTtFQUNFLGNBQUE7QUFQSjtBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFSRiIsImZpbGUiOiJpdGVtLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFyZS1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAmX19kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTkycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtYWNjb3JkaW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiA0cHggMDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50YWJsZS1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgJl9fbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJl9fZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3ctbWFpbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX3ZhbHVlIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fdHlwZSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICBpOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fdmFsdWUge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ucm93LWFjdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "y8xB":
/*!**************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/item-history/item-history.helpers.ts ***!
  \**************************************************************************/
/*! exports provided: getHistoryItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryItems", function() { return getHistoryItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function getHistoryItems(versions, page, pageSize, compareWith) {
    if (versions == null || page == null || pageSize == null || compareWith == null) {
        return null;
    }
    var filtered = versions.slice((page - 1) * pageSize, page * pageSize);
    var historyItems = calcHistoryItems(filtered, versions, compareWith);
    return historyItems;
}
function calcHistoryItems(filteredVersions, versions, compareWith) {
    return filteredVersions.map(function (version) {
        var historyItem = {
            changeSetId: version.ChangeSetId,
            attributes: calcHistoryAttributes(version, versions, compareWith),
            historyId: version.HistoryId,
            timeStamp: version.TimeStamp,
            user: version.User,
            versionNumber: version.VersionNumber,
            isLastVersion: !versions.some(function (v) { return v.VersionNumber === version.VersionNumber + 1; }),
        };
        return historyItem;
    });
}
function calcHistoryAttributes(version, versions, compareWith) {
    var currentDataTypes = JSON.parse(version.Json).Entity.Attributes;
    var previousItem = compareWith === 'live' ? findLive(versions) : versions.find(function (v) { return v.VersionNumber === version.VersionNumber - 1; });
    var previousDataTypes = previousItem ? JSON.parse(previousItem.Json).Entity.Attributes : null;
    var allAttributes = [];
    if (currentDataTypes != null) {
        Object.entries(currentDataTypes).forEach(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), dataType = _b[0], attributes = _b[1];
            Object.keys(attributes).forEach(function (attributeName) {
                if (allAttributes.find(function (a) { return a.name === attributeName && a.dataType === dataType; }) != null) {
                    return;
                }
                allAttributes.push({ name: attributeName, dataType: dataType });
            });
        });
    }
    if (previousDataTypes != null) {
        Object.entries(previousDataTypes).forEach(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), dataType = _b[0], attributes = _b[1];
            Object.keys(attributes).forEach(function (attributeName) {
                if (allAttributes.find(function (a) { return a.name === attributeName && a.dataType === dataType; }) != null) {
                    return;
                }
                allAttributes.push({ name: attributeName, dataType: dataType });
            });
        });
    }
    var historyAttributes = allAttributes.map(function (attribute) {
        var _a, _b;
        var currentValues = (_a = currentDataTypes === null || currentDataTypes === void 0 ? void 0 : currentDataTypes[attribute.dataType]) === null || _a === void 0 ? void 0 : _a[attribute.name];
        var previousValues = (_b = previousDataTypes === null || previousDataTypes === void 0 ? void 0 : previousDataTypes[attribute.dataType]) === null || _b === void 0 ? void 0 : _b[attribute.name];
        var historyAttribute = {
            name: attribute.name,
            dataType: attribute.dataType,
            change: calcChangeType(currentValues, previousValues, true),
            values: calcHistoryValues(currentValues, previousValues),
        };
        return historyAttribute;
    });
    return historyAttributes;
}
function findLive(versions) {
    var e_1, _a;
    var liveVersion = versions[0];
    try {
        for (var versions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(versions), versions_1_1 = versions_1.next(); !versions_1_1.done; versions_1_1 = versions_1.next()) {
            var version = versions_1_1.value;
            if (version.VersionNumber <= liveVersion.VersionNumber) {
                continue;
            }
            liveVersion = version;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (versions_1_1 && !versions_1_1.done && (_a = versions_1.return)) _a.call(versions_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return liveVersion;
}
function calcHistoryValues(values, previousValues) {
    var allLangKeys = [];
    if (values != null) {
        Object.keys(values).forEach(function (lang) {
            if (allLangKeys.includes(lang)) {
                return;
            }
            allLangKeys.push(lang);
        });
    }
    if (previousValues != null) {
        Object.keys(previousValues).forEach(function (lang) {
            if (allLangKeys.includes(lang)) {
                return;
            }
            allLangKeys.push(lang);
        });
    }
    var historyValues = allLangKeys.map(function (langKey) {
        var currentValue = values === null || values === void 0 ? void 0 : values[langKey];
        var previousValue = previousValues === null || previousValues === void 0 ? void 0 : previousValues[langKey];
        var historyValue = {
            langKey: langKey,
            value: currentValue,
            oldValue: previousValue,
            change: calcChangeType(currentValue, previousValue),
        };
        return historyValue;
    });
    return historyValues;
}
function calcChangeType(currentValue, previousValue, sortObjectKeys) {
    if (sortObjectKeys === void 0) { sortObjectKeys = false; }
    var change;
    if (sortObjectKeys) {
        if (typeof currentValue === 'object') {
            currentValue = sortKeysAlphabetically(currentValue);
        }
        if (typeof previousValue === 'object') {
            previousValue = sortKeysAlphabetically(previousValue);
        }
    }
    if (currentValue != null && previousValue != null) {
        if (JSON.stringify(currentValue) !== JSON.stringify(previousValue)) {
            change = 'changed';
        }
        else {
            change = 'none';
        }
    }
    else if (currentValue != null) {
        change = 'new';
    }
    else {
        change = 'deleted';
    }
    return change;
}
function sortKeysAlphabetically(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    return Object.keys(obj).sort().reduce(function (acc, key) {
        var _a;
        return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, acc), (_a = {}, _a[key] = obj[key], _a)));
    }, {});
}


/***/ })

}]);
//# sourceMappingURL=default~item-history-item-history-module~ng-dialogs-src-app-item-history-item-history-module.js.map