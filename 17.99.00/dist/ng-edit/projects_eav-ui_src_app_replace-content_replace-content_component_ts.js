"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_replace-content_replace-content_component_ts"],{

/***/ 4513:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/replace-content/replace-content.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaceContentComponent: () => (/* binding */ ReplaceContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manage-content-list/services/content-group.service */ 59669);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);




























function ReplaceContentComponent_Conditional_0_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r3);
  }
}
function ReplaceContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Choose item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReplaceContentComponent_Conditional_0_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-autocomplete", 8, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function ReplaceContentComponent_Conditional_0_Template_mat_autocomplete_optionSelected_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.select($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "cdk-virtual-scroll-viewport", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ReplaceContentComponent_Conditional_0_mat_option_16_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReplaceContentComponent_Conditional_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.copySelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-dialog-actions", 12)(21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReplaceContentComponent_Conditional_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReplaceContentComponent_Conditional_0_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    const auto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vm_r4.isAddMode ? "Add Existing Item" : "Replace Content Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", vm_r4.isAddMode ? "Select a content-item to add to this list." : "By replacing a content-item you can make other content appear in the slot of the original content.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", auto_r5)("ngModel", vm_r4.filterText);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hideSingleSelectionIndicator", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", vm_r4.filteredOptions.length < 6 ? vm_r4.filteredOptions.length * 48 : 240, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkVirtualForOf", vm_r4.filteredOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !vm_r4.isMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !vm_r4.isMatch);
  }
}
class ReplaceContentComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_1__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef, contentGroupService, snackBar) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.contentGroupService = contentGroupService;
    this.snackBar = snackBar;
    this.hostClass = 'dialog-component';
  }
  ngOnInit() {
    this.guid = this.route.snapshot.paramMap.get('guid');
    this.part = this.route.snapshot.paramMap.get('part');
    this.index = parseInt(this.route.snapshot.paramMap.get('index'), 10);
    this.add = !!this.route.snapshot.queryParamMap.get('add');
    this.filterText$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
    this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    const filteredOptions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.filterText$, this.options$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([filterText, options]) => options.filter(option => option.label.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())).map(option => option.label)));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.filterText$, filteredOptions$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([filterText, filteredOptions]) => {
      const viewModel = {
        filterText,
        filteredOptions,
        isAddMode: this.add,
        isMatch: filteredOptions.includes(filterText)
      };
      return viewModel;
    }));
    this.fetchConfig(false, null);
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      const editResult = navigation.extras?.state;
      const cloneId = editResult?.[Object.keys(editResult)[0]];
      this.fetchConfig(true, cloneId);
    }));
  }
  ngOnDestroy() {
    this.filterText$.complete();
    this.options$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  setFilter(filterText) {
    this.filterText$.next(filterText);
  }
  select(event) {
    this.filterText$.next(event.option.value);
  }
  copySelected() {
    const contentGroup = this.buildContentGroup();
    const form = {
      items: [{
        ContentTypeName: this.contentTypeName,
        DuplicateEntity: contentGroup.id
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_2__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  save() {
    this.snackBar.open('Saving...');
    const contentGroup = this.buildContentGroup();
    this.contentGroupService.saveItem(contentGroup).subscribe(() => {
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.closeDialog();
    });
  }
  fetchConfig(isRefresh, cloneId) {
    const contentGroup = this.buildContentGroup();
    this.contentGroupService.getItems(contentGroup).subscribe(replaceConfig => {
      const options = Object.entries(replaceConfig.Items).map(([itemId, itemName]) => {
        const option = {
          id: parseInt(itemId, 10),
          label: `${itemName} (${itemId})`
        };
        return option;
      });
      this.options$.next(options);
      // don't set selected option if dialog should be in add-mode and don't change selected option on refresh unless it's cloneId
      if (!contentGroup.add && !isRefresh || cloneId != null) {
        const newId = !isRefresh ? replaceConfig.SelectedId : cloneId;
        const newFilter = this.options$.value.find(option => option.id === newId)?.label || '';
        this.filterText$.next(newFilter);
      }
      this.contentTypeName = replaceConfig.ContentTypeName;
    });
  }
  buildContentGroup() {
    const id = this.options$.value.find(option => option.label === this.filterText$.value)?.id ?? null;
    const contentGroup = {
      id,
      guid: this.guid,
      part: this.part,
      index: this.index,
      add: this.add
    };
    return contentGroup;
  }
  static #_ = this.ɵfac = function ReplaceContentComponent_Factory(t) {
    return new (t || ReplaceContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_0__.ContentGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ReplaceContentComponent,
    selectors: [["app-replace-content"]],
    hostVars: 1,
    hostBindings: function ReplaceContentComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_0__.ContentGroupService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["auto", "matAutocomplete"], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], [1, "eav-options-box"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", 3, "ngModelChange", "matAutocomplete", "ngModel"], [3, "optionSelected", "hideSingleSelectionIndicator"], ["itemSize", "48", "minBufferPx", "500", "maxBufferPx", "1000"], [3, "value", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["mat-icon-button", "", "tippy", "Copy", 3, "click", "disabled"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [3, "value"]],
    template: function ReplaceContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ReplaceContentComponent_Conditional_0_Template, 25, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkVirtualForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
    styles: [".eav-options-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3JlcGxhY2UtY29udGVudC9yZXBsYWNlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtb3B0aW9ucy1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 61735:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/base-with-child-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseWithChildDialogComponent: () => (/* binding */ BaseWithChildDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 43176);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/eav-logger */ 6812);




const logThis = false;
// 2024-06-12 2dm experimental - remove comments if all is good mid of June
// - previously had
// @Directive()   // Needs the @Directive() so the compiler allows OnDestroy to be implemented
// ...then tried this
// @Component({
//   selector: 'app-base-component-with-child',
//   template: ''
// })
// ...but then added abstract, so I think it doesn't actually need all that
// tslint:disable-next-line:directive-class-suffix
class BaseWithChildDialogComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(router, route, log) {
    super();
    this.router = router;
    this.route = route;
    this.log = log;
    this.log ??= new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger('BaseComponent', logThis);
  }
  // 2024-06-12 2dm - don't think this is needed since it's already on the base class
  // ngOnDestroy() {
  //   super.ngOnDestroy();
  // }
  // TODO @2dg not longer in use after refactoring SideNav with Routing
  // protected refreshOnChildClosedDeep() {
  //   return this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     startWith(!!this.route.snapshot.firstChild.firstChild),
  //     map(() => !!this.route.snapshot.firstChild.firstChild),
  //     pairwise(),
  //     filter(([hadChild, hasChild]) => hadChild && !hasChild),
  //   )
  // }
  childDialogClosed$() {
    return this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(([hadChildBefore, hasChildNow]) => hadChildBefore && !hasChildNow));
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_replace-content_replace-content_component_ts.js.map