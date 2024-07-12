"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts"],{

/***/ 52645:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/manage-content-list/manage-content-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageContentListComponent: () => (/* binding */ ManageContentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _services_content_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/content-group.service */ 59669);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-administration/services */ 75445);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit/shared/services */ 22453);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/mousedown-stop-propagation.directive */ 23840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


























function ManageContentListComponent_Conditional_0_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_Conditional_8_Conditional_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.editHeader());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vm_r4.header.Title);
  }
}
function ManageContentListComponent_Conditional_0_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "ManageContentList.NoHeader"), " ");
  }
}
function ManageContentListComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ManageContentListComponent_Conditional_0_Conditional_8_Conditional_4_Template, 5, 1)(5, ManageContentListComponent_Conditional_0_Conditional_8_Conditional_5_Template, 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, "ManageContentList.Description"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](4, vm_r4.header.Type ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](5, !vm_r4.header.Type ? 5 : -1);
  }
}
function ManageContentListComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "ManageContentList.SortItems"), " ");
  }
}
function ManageContentListComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "ManageContentList.SortLotsOfItems"), " ");
  }
}
function ManageContentListComponent_Conditional_0_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "div", 14)(2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "drag_handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_For_13_Template_button_click_7_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.addFromExisting(item_r6.Index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "playlist_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_For_13_Template_button_click_11_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.addBelow(item_r6.Index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_For_13_Template_button_click_15_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.remove(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_For_13_Template_button_click_19_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.editItem(item_r6.Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("tippy", "", item_r6.Title, " (", item_r6.Id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", item_r6.Title, " (", item_r6.Id, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 13, "Fields.Picker.AddExistingItem"))("disabled", item_r6.Id === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 15, "Fields.Picker.AddItemBelow"))("disabled", item_r6.Id === 0 || ctx_r2.reordered);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 17, "Fields.Picker.Remove"))("disabled", ctx_r2.reordered);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 19, "Fields.Picker.Edit"))("disabled", item_r6.Id === 0);
  }
}
function ManageContentListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ManageContentListComponent_Conditional_0_Conditional_8_Template, 6, 5)(9, ManageContentListComponent_Conditional_0_Conditional_9_Template, 3, 3, "p", 5)(10, ManageContentListComponent_Conditional_0_Conditional_10_Template, 3, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkDropListDropped", function ManageContentListComponent_Conditional_0_Template_div_cdkDropListDropped_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](12, ManageContentListComponent_Conditional_0_For_13_Template, 23, 21, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcomponentInstance"]().trackByFn, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-dialog-actions", 8)(15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.saveList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.saveAndCloseList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 7, "ManageContentList.Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](8, vm_r4.header ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](9, vm_r4.items && (vm_r4.items == null ? null : vm_r4.items.length) < 25 ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](10, (vm_r4.items == null ? null : vm_r4.items.length) >= 25 ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](vm_r4.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 9, "General.Buttons.Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 11, "General.Buttons.Save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 13, "Form.Buttons.SaveAndClose"));
  }
}
class ManageContentListComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef, contentGroupService, snackBar, translate, appDialogConfigService) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.contentGroupService = contentGroupService;
    this.snackBar = snackBar;
    this.translate = translate;
    this.appDialogConfigService = appDialogConfigService;
    this.hostClass = 'dialog-component';
    this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.header$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.items$, this.header$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([items, header]) => ({
      items,
      header
    })));
    this.contentGroup = {
      id: null,
      guid: this.route.snapshot.paramMap.get('guid'),
      part: this.route.snapshot.paramMap.get('part'),
      index: parseInt(this.route.snapshot.paramMap.get('index'), 10)
    };
    this.reordered = false;
  }
  ngOnInit() {
    this.fetchList();
    this.fetchHeader();
    this.fetchDialogSettings();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchList(true);
      this.fetchHeader();
    }));
  }
  ngOnDestroy() {
    this.items$.complete();
    this.header$.complete();
    super.ngOnDestroy();
  }
  fetchDialogSettings() {
    this.appDialogConfigService.getCurrent$().subscribe(dialogSettings => {
      this.translate.setDefaultLang(dialogSettings.Context.Language.Primary.split('-')[0]);
      this.translate.use(dialogSettings.Context.Language.Current.split('-')[0]);
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  saveList() {
    this.snackBar.open('Saving...');
    this.contentGroupService.saveList(this.contentGroup, this.items$.value).subscribe(() => {
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.fetchList();
      this.fetchHeader();
    });
  }
  saveAndCloseList() {
    this.snackBar.open('Saving...');
    this.contentGroupService.saveList(this.contentGroup, this.items$.value).subscribe(() => {
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.closeDialog();
    });
  }
  editHeader() {
    const form = {
      items: [{
        Add: this.header$.value.Id === 0,
        Index: 0,
        Parent: this.contentGroup.guid,
        Field: 'listcontent'
      }, {
        Add: this.header$.value.Id === 0,
        Index: 0,
        Parent: this.contentGroup.guid,
        Field: 'listpresentation'
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_0__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  editItem(id) {
    const form = {
      items: [{
        EntityId: id
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_0__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  addFromExisting(index) {
    const queryParams = {
      add: true
    };
    this.router.navigate([`${this.contentGroup.guid}/${this.contentGroup.part}/${index + 1}/replace`], {
      relativeTo: this.route,
      queryParams
    });
  }
  addBelow(index) {
    const form = {
      items: [{
        Add: true,
        Index: index + 1,
        Parent: this.contentGroup.guid,
        Field: this.contentGroup.part
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_0__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  remove(item) {
    if (!confirm(this.translate.instant('ManageContentList.ConfirmRemove'))) {
      return;
    }
    this.snackBar.open('Removing...');
    this.contentGroupService.removeItem(this.contentGroup, item.Index).subscribe(() => {
      this.snackBar.open('Removed', null, {
        duration: 2000
      });
      this.fetchList();
    });
  }
  drop(event) {
    const items = [...this.items$.value];
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.moveItemInArray)(items, event.previousIndex, event.currentIndex);
    this.items$.next(items);
    this.reordered = true;
  }
  trackByFn(index, item) {
    // we use both Index and Id because all demo items have Id=0
    return `${item.Index}+${item.Id}`;
  }
  fetchList(keepOrder = false) {
    this.contentGroupService.getList(this.contentGroup).subscribe(items => {
      if (this.reordered) {
        const oldIds = this.items$.value.map(item => item.Id);
        const idsChanged = this.items$.value.length !== items.length || items.some(item => !oldIds.includes(item.Id));
        // for usecase where list is fetched on child closed and wasn't changed in the meantime keeps the order before child was opened
        if (!idsChanged && keepOrder) {
          const sortOrder = this.items$.value.map(item => item.Index);
          items.sort((a, b) => {
            const aIndex = sortOrder.indexOf(a.Index);
            const bIndex = sortOrder.indexOf(b.Index);
            if (aIndex === -1 || bIndex === -1) {
              return 0;
            }
            return aIndex - bIndex;
          });
        } else if (keepOrder) {
          this.snackBar.open('List was changed from somewhere else. Order of items is reset', null, {
            duration: 5000
          });
        }
      }
      this.items$.next(items);
      this.reordered = false;
    });
  }
  fetchHeader() {
    this.contentGroupService.getHeader(this.contentGroup).subscribe(header => {
      this.header$.next(header);
    });
  }
  static #_ = this.ɵfac = function ManageContentListComponent_Factory(t) {
    return new (t || ManageContentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_content_group_service__WEBPACK_IMPORTED_MODULE_1__.ContentGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_administration_services__WEBPACK_IMPORTED_MODULE_2__.AppDialogConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ManageContentListComponent,
    selectors: [["app-manage-content-list"]],
    hostVars: 1,
    hostBindings: function ManageContentListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_services_content_group_service__WEBPACK_IMPORTED_MODULE_1__.ContentGroupService, _app_administration_services__WEBPACK_IMPORTED_MODULE_2__.AppDialogConfigService, _edit_shared_services__WEBPACK_IMPORTED_MODULE_4__.FormConfigService]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], ["cdkScrollable", "", 1, "dialog-component-content", "fancy-scrollbar-light"], [1, "eav-sort-title"], ["cdkDropList", "", 1, "eav-dnd-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "eav-dnd-item"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "tippy"], [1, "eav-raised-button-icon"], ["mat-icon-button", "", "tippy", "Edit header", 3, "click"], [1, "eav-dnd-item__title"], ["tippy", "Drag to reorder the list", 1, "eav-dnd-item__title-icon"], [1, "eav-dnd-item__title-text", 3, "tippy"], ["mat-icon-button", "", "appMousedownStopPropagation", "", 3, "click", "tippy", "disabled"]],
    template: function ManageContentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ManageContentListComponent_Conditional_0_Template, 25, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__.CdkScrollable, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.CdkDrag, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective, _shared_directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_6__.MousedownStopPropagationDirective],
    styles: [".eav-sort-title[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n\n.eav-dnd-list[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.eav-dnd-item[_ngcontent-%COMP%] {\n  cursor: move;\n  height: 40px;\n  border-bottom: 1px solid #ccc;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.eav-dnd-item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.eav-dnd-item__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  max-width: 80%;\n}\n.eav-dnd-item__title-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  opacity: 0.4;\n}\n.eav-dnd-item__title-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.dnd-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dnd-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21hbmFnZS1jb250ZW50LWxpc3QvbWFuYWdlLWNvbnRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBSEY7O0FBUUE7RUFDRSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxzREFBQTtBQUxGOztBQVFBO0VBQ0Usc0RBQUE7QUFMRiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtc29ydC10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5lYXYtZG5kLWxpc3Qge1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5lYXYtZG5kLWl0ZW0ge1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlLXRleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5kbmQtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kbmQtaXRlbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts.js.map