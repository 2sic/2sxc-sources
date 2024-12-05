"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts-projects_eav-ui_-8d5b99"],{

/***/ 52645:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/manage-content-list/manage-content-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageContentListComponent: () => (/* binding */ ManageContentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-administration/services/dialog-config-app.service */ 64699);
/* harmony import */ var _shared_directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/directives/mousedown-stop-propagation.directive */ 23840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _services_content_group_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/content-group.service */ 59669);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
























const _forTrack0 = ($index, $item) => $item.Index + "+" + $item.Id;
function ManageContentListComponent_Conditional_0_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_Conditional_8_Conditional_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.editHeader());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.header()().Title);
  }
}
function ManageContentListComponent_Conditional_0_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, "ManageContentList.NoHeader"), " ");
  }
}
function ManageContentListComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ManageContentListComponent_Conditional_0_Conditional_8_Conditional_4_Template, 5, 1)(5, ManageContentListComponent_Conditional_0_Conditional_8_Conditional_5_Template, 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "ManageContentList.Description"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r2.header()().Type ? 4 : 5);
  }
}
function ManageContentListComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "ManageContentList." + (ctx_r2.reordered() ? "ListHasBeenReordered" : ((tmp_2_0 = ctx_r2.items()) == null ? null : tmp_2_0.length) < 25 ? "SortItems" : "SortLotsOfItems")), " ");
  }
}
function ManageContentListComponent_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 7)(1, "div", 14)(2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "drag_handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div")(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_For_12_Template_button_click_7_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.addFromExisting(item_r5.Index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "playlist_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_For_12_Template_button_click_10_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.addBelow(item_r5.Index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_For_12_Template_button_click_13_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.remove(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_For_12_Template_button_click_16_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.editItem(item_r5.Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate2"]("tippy", "", item_r5.Title, " (", item_r5.Id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", item_r5.Title, " (", item_r5.Id, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", item_r5.Id === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", item_r5.Id === 0 || ctx_r2.reordered());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.reordered());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", item_r5.Id === 0);
  }
}
function ManageContentListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ManageContentListComponent_Conditional_0_Conditional_8_Template, 6, 4)(9, ManageContentListComponent_Conditional_0_Conditional_9_Template, 3, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cdkDropListDropped", function ManageContentListComponent_Conditional_0_Template_div_cdkDropListDropped_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](11, ManageContentListComponent_Conditional_0_For_12_Template, 19, 9, "div", 7, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-dialog-actions", 8)(14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.saveList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ManageContentListComponent_Conditional_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.saveAndCloseList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 5, "ManageContentList.Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r2.header()() ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r2.items() ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r2.items());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 7, "General.Buttons.Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 9, "General.Buttons.Save"));
  }
}
class ManageContentListComponent {
  #dialogRoutes;
  #contentGroupSvc;
  #dialogConfigSvc;
  constructor(dialog, snackBar, translate) {
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.translate = translate;
    this.hostClass = 'dialog-component';
    this.#dialogRoutes = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_6__.DialogRoutingService);
    this.#contentGroupSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_group_service__WEBPACK_IMPORTED_MODULE_8__.ContentGroupService);
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_1__.DialogConfigAppService);
    this.items = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__.signalObj)('items', null);
    this.#contentGroup = (0,_core__WEBPACK_IMPORTED_MODULE_0__.convert)(this.#dialogRoutes.getParams(['guid', 'part', 'index']), p => ({
      id: null,
      guid: p.guid,
      part: p.part,
      index: parseInt(p.index, 10)
    }));
    this.refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(0);
    this.header = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.computed)(() => {
      const r = this.refresh();
      return this.#contentGroupSvc.getHeader(this.#contentGroup, undefined);
    });
    this.reordered = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__.signalObj)('reordered', false);
  }
  #contentGroup;
  ngOnInit() {
    this.#fetchList();
    this.#fetchDialogSettings();
    this.#dialogRoutes.doOnDialogClosed(() => {
      this.#fetchList(true);
      this.#fetchHeader();
    });
  }
  #fetchDialogSettings() {
    this.#dialogConfigSvc.getCurrent$().subscribe(dialogSettings => {
      this.translate.setDefaultLang(dialogSettings.Context.Language.Primary.split('-')[0]);
      this.translate.use(dialogSettings.Context.Language.Current.split('-')[0]);
    });
  }
  closeDialog() {
    this.dialog.close();
  }
  saveList() {
    this.snackBar.open('Saving...');
    this.#contentGroupSvc.saveList(this.#contentGroup, this.items()).subscribe(() => {
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.#fetchList();
      this.#fetchHeader();
    });
  }
  saveAndCloseList() {
    this.snackBar.open('Saving...');
    this.#contentGroupSvc.saveList(this.#contentGroup, this.items()).subscribe(() => {
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.closeDialog();
    });
  }
  editHeader() {
    const form = {
      items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__.EditPrep.relationship(this.#contentGroup.guid, 'listcontent', 0, this.header()().Id === 0), _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__.EditPrep.relationship(this.#contentGroup.guid, 'listpresentation', 0, this.header()().Id === 0)]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__.convertFormToUrl)(form);
    this.#dialogRoutes.navRelative([`edit/${formUrl}`]);
  }
  editItem(id) {
    const form = {
      items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__.EditPrep.editId(id)]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__.convertFormToUrl)(form);
    this.#dialogRoutes.navRelative([`edit/${formUrl}`]);
  }
  addFromExisting(index) {
    const queryParams = {
      add: true
    };
    this.#dialogRoutes.navRelative([`${this.#contentGroup.guid}/${this.#contentGroup.part}/${index + 1}/replace`], {
      queryParams
    });
  }
  addBelow(index) {
    const form = {
      items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__.EditPrep.relationship(this.#contentGroup.guid, this.#contentGroup.part, index + 1, true)]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__.convertFormToUrl)(form);
    this.#dialogRoutes.navRelative([`edit/${formUrl}`]);
  }
  remove(item) {
    if (!confirm(this.translate.instant('ManageContentList.ConfirmRemove'))) return;
    this.snackBar.open('Removing...');
    this.#contentGroupSvc.removeItem(this.#contentGroup, item.Index).subscribe(() => {
      this.snackBar.open('Removed', null, {
        duration: 2000
      });
      this.#fetchList();
    });
  }
  drop(event) {
    const items = [...this.items()];
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.moveItemInArray)(items, event.previousIndex, event.currentIndex);
    this.items.set(items);
    this.reordered.set(true);
  }
  #fetchList(keepOrder = false) {
    this.#contentGroupSvc.getList(this.#contentGroup).subscribe(items => {
      if (this.reordered()) {
        const oldIds = this.items().map(item => item.Id);
        const idsChanged = this.items().length !== items.length || items.some(item => !oldIds.includes(item.Id));
        // for usecase where list is fetched on child closed and wasn't changed in the meantime keeps the order before child was opened
        if (!idsChanged && keepOrder) {
          const sortOrder = this.items().map(item => item.Index);
          items.sort((a, b) => {
            const aIndex = sortOrder.indexOf(a.Index);
            const bIndex = sortOrder.indexOf(b.Index);
            if (aIndex === -1 || bIndex === -1) {
              return 0;
            }
            return aIndex - bIndex;
          });
        } else if (keepOrder) this.snackBar.open('List was changed from somewhere else. Order of items is reset', null, {
          duration: 5000
        });
      }
      this.items.set(items);
      this.reordered.set(false);
    });
  }
  #fetchHeader() {
    this.refresh.set(this.refresh() + 1);
  }
  static {
    this.ɵfac = function ManageContentListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ManageContentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ManageContentListComponent,
      selectors: [["app-manage-content-list"]],
      hostVars: 1,
      hostBindings: function ManageContentListComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], ["cdkScrollable", "", 1, "dialog-component-content", "fancy-scrollbar-light"], [1, "eav-sort-title"], ["cdkDropList", "", 1, "eav-dnd-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "eav-dnd-item"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "accent", "tippyTranslate", "Form.Buttons.SaveAndClose", 3, "click"], [1, "eav-raised-button-icon"], ["mat-icon-button", "", "tippy", "Edit header", 3, "click"], [1, "eav-dnd-item__title"], ["tippy", "Drag to reorder the list", 1, "eav-dnd-item__title-icon"], [1, "eav-dnd-item__title-text", 3, "tippy"], ["mat-icon-button", "", "tippyTranslate", "Fields.Picker.AddExistingItem", "appMousedownStopPropagation", "", 3, "click", "disabled"], ["mat-icon-button", "", "tippyTranslate", "Fields.Picker.AddItemBelow", "appMousedownStopPropagation", "", 3, "click", "disabled"], ["mat-icon-button", "", "tippyTranslate", "Fields.Picker.Remove", "appMousedownStopPropagation", "", 3, "click", "disabled"], ["mat-icon-button", "", "tippyTranslate", "Fields.Picker.Edit", "appMousedownStopPropagation", "", 3, "click", "disabled"]],
      template: function ManageContentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ManageContentListComponent_Conditional_0_Template, 23, 11, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.header() && ctx.items() ? 0 : -1);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkScrollable, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDrag, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective, _shared_directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_2__.MousedownStopPropagationDirective],
      styles: [".eav-sort-title[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n\n.eav-dnd-list[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.eav-dnd-item[_ngcontent-%COMP%] {\n  cursor: move;\n  height: 40px;\n  border-bottom: 1px solid #ccc;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.eav-dnd-item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.eav-dnd-item__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  max-width: 80%;\n}\n.eav-dnd-item__title-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  opacity: 0.4;\n}\n.eav-dnd-item__title-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.dnd-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dnd-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21hbmFnZS1jb250ZW50LWxpc3QvbWFuYWdlLWNvbnRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUNFO0FBSko7O0FBU0E7RUFDRSxVQUFBO0FBTkY7O0FBU0E7RUFDRSxzREFBQTtBQU5GOztBQVNBO0VBQ0Usc0RBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtc29ydC10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5lYXYtZG5kLWxpc3Qge1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5lYXYtZG5kLWl0ZW0ge1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlLXRleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZG5kLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZG5kLWl0ZW06bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4979:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/service-base.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceBase: () => (/* binding */ ServiceBase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


/**
 * Base class for services - just to standardize use of subscriptions.
 * Has @Injectable() just to allow it ot use the standard OnDestroy interface.
 */
class ServiceBase {
  constructor() {
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnDestroy() {
    this.destroy();
  }
  // TODO: TRY TO GET RID OF THIS. AFAIK it's just used in the mask, which should switch over to signals.
  destroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ServiceBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceBase)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ServiceBase,
      factory: ServiceBase.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts-projects_eav-ui_-8d5b99.js.map