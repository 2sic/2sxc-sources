"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_item-history_item-history_component_ts"],{

/***/ 24624:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/paginator.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_PAGINATOR_DEFAULT_OPTIONS: () => (/* binding */ MAT_PAGINATOR_DEFAULT_OPTIONS),
/* harmony export */   MAT_PAGINATOR_INTL_PROVIDER: () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER),
/* harmony export */   MAT_PAGINATOR_INTL_PROVIDER_FACTORY: () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER_FACTORY),
/* harmony export */   MatPaginator: () => (/* binding */ MatPaginator),
/* harmony export */   MatPaginatorIntl: () => (/* binding */ MatPaginatorIntl),
/* harmony export */   MatPaginatorModule: () => (/* binding */ MatPaginatorModule),
/* harmony export */   PageEvent: () => (/* binding */ PageEvent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 56042);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 24950);










/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pageSizeOption_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 14)(1, "mat-select", 16, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._changePageSize($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const selectRef_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](selectRef_r4.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled)("aria-labelledby", ctx_r1._pageSizeLabelId)("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14)(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1._pageSizeLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1._intl.itemsPerPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._buttonClicked(0, ctx_r1._previousButtonsDisabled()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("disabled", ctx_r1._previousButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._buttonClicked(ctx_r1.getNumberOfPages() - 1, ctx_r1._nextButtonsDisabled()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("disabled", ctx_r1._nextButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
class MatPaginatorIntl {
  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /** A label for the page size selector. */
  itemsPerPageLabel = 'Items per page:';
  /** A label for the button that increments the current page. */
  nextPageLabel = 'Next page';
  /** A label for the button that decrements the current page. */
  previousPageLabel = 'Previous page';
  /** A label for the button that moves to the first page. */
  firstPageLabel = 'First page';
  /** A label for the button that moves to the last page. */
  lastPageLabel = 'Last page';
  /** A label for the range of items within the current page and the length of the whole list. */
  getRangeLabel = (page, pageSize, length) => {
    if (length == 0 || pageSize == 0) {
      return `0 of ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} – ${endIndex} of ${length}`;
  };
  static ɵfac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatPaginatorIntl)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MatPaginatorIntl,
    factory: MatPaginatorIntl.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatorIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};

/** The default page size if there is no page size and there are no provided page size options. */
const DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
class PageEvent {
  /** The current page index. */
  pageIndex;
  /**
   * Index of the page that was selected previously.
   * @breaking-change 8.0.0 To be made into a required property.
   */
  previousPageIndex;
  /** The current page size. */
  pageSize;
  /** The current total number of items being paged. */
  length;
}
/** Injection token that can be used to provide the default options for the paginator module. */
const MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_PAGINATOR_DEFAULT_OPTIONS');
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
class MatPaginator {
  _intl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MatPaginatorIntl);
  _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  /** If set, styles the "page size" form field with the designated style. */
  _formFieldAppearance;
  /** ID for the DOM node containing the paginator's items per page label. */
  _pageSizeLabelId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__._IdGenerator).getId('mat-paginator-page-size-label-');
  _intlChanges;
  _isInitialized = false;
  _initializedStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
  /**
   * Theme color of the underlying form controls. This API is supported in M2
   * themes only,it has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/paginator/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  _pageIndex = 0;
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  _length = 0;
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  _pageSize;
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map(p => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  _pageSizeOptions = [];
  /** Whether to hide the page size selection UI from the user. */
  hidePageSize = false;
  /** Whether to show the first/last buttons UI to the user. */
  showFirstLastButtons = false;
  /** Used to configure the underlying `MatSelect` inside the paginator. */
  selectConfig = {};
  /** Whether the paginator is disabled. */
  disabled = false;
  /** Event emitted when the paginator changes the page size or page index. */
  page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /** Displayed set of page size options. Will be sorted and include current page size. */
  _displayedPageSizeOptions;
  /** Emits when the paginator is initialized. */
  initialized = this._initializedStream;
  constructor() {
    const _intl = this._intl;
    const defaults = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_PAGINATOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || 'outline';
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (this.hasNextPage()) {
      this._navigate(this.pageIndex + 1);
    }
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (this.hasPreviousPage()) {
      this._navigate(this.pageIndex - 1);
    }
  }
  /** Move to the first page if not already there. */
  firstPage() {
    // hasPreviousPage being false implies at the start
    if (this.hasPreviousPage()) {
      this._navigate(0);
    }
  }
  /** Move to the last page if not already there. */
  lastPage() {
    // hasNextPage being false implies at the end
    if (this.hasNextPage()) {
      this._navigate(this.getNumberOfPages() - 1);
    }
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
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
  _changePageSize(pageSize) {
    // Current page needs to be updated to reflect the new page size. Navigate to the page
    // containing the previous page's first item.
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    // If no page size is provided, use the first page size option or the default page size.
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    // Sort the numbers using a number-specific sort function.
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  /** Navigates to a specific page index. */
  _navigate(index) {
    const previousIndex = this.pageIndex;
    if (index !== previousIndex) {
      this.pageIndex = index;
      this._emitPageEvent(previousIndex);
    }
  }
  /**
   * Callback invoked when one of the navigation buttons is called.
   * @param targetIndex Index to which the paginator should navigate.
   * @param isDisabled Whether the button is disabled.
   */
  _buttonClicked(targetIndex, isDisabled) {
    // Note that normally disabled buttons won't dispatch the click event, but the paginator ones
    // do, because we're using `disabledInteractive` to allow them to be focusable. We need to
    // check here to avoid the navigation.
    if (!isDisabled) {
      this._navigate(targetIndex);
    }
  }
  static ɵfac = function MatPaginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatPaginator)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatPaginator,
    selectors: [["mat-paginator"]],
    hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
    inputs: {
      color: "color",
      pageIndex: [2, "pageIndex", "pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      length: [2, "length", "length", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      pageSize: [2, "pageSize", "pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      pageSizeOptions: "pageSizeOptions",
      hidePageSize: [2, "hidePageSize", "hidePageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectConfig: "selectConfig",
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      page: "page"
    },
    exportAs: ["matPaginator"],
    decls: 14,
    vars: 12,
    consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "disabled"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "disabled"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "disabled"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "disabled"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
    template: function MatPaginator_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatPaginator_Conditional_6_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
          return ctx._buttonClicked(ctx.pageIndex - 1, ctx._previousButtonsDisabled());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
          return ctx._buttonClicked(ctx.pageIndex + 1, ctx._nextButtonsDisabled());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatPaginator_Conditional_13_Template, 3, 4, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.hidePageSize ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showFirstLastButtons ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("disabled", ctx._previousButtonsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("disabled", ctx._nextButtonsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showFirstLastButtons ? 13 : -1);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
    styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-paginator',
      exportAs: 'matPaginator',
      host: {
        'class': 'mat-mdc-paginator',
        'role': 'group'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
      template: "<div class=\"mat-mdc-paginator-outer-container\">\n  <div class=\"mat-mdc-paginator-container\">\n    @if (!hidePageSize) {\n      <div class=\"mat-mdc-paginator-page-size\">\n        <div class=\"mat-mdc-paginator-page-size-label\" [attr.id]=\"_pageSizeLabelId\">\n          {{_intl.itemsPerPageLabel}}\n        </div>\n\n        @if (_displayedPageSizeOptions.length > 1) {\n          <mat-form-field\n            [appearance]=\"_formFieldAppearance!\"\n            [color]=\"color\"\n            class=\"mat-mdc-paginator-page-size-select\">\n            <mat-select\n              #selectRef\n              [value]=\"pageSize\"\n              [disabled]=\"disabled\"\n              [aria-labelledby]=\"_pageSizeLabelId\"\n              [panelClass]=\"selectConfig.panelClass || ''\"\n              [disableOptionCentering]=\"selectConfig.disableOptionCentering\"\n              (selectionChange)=\"_changePageSize($event.value)\"\n              hideSingleSelectionIndicator>\n              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {\n                <mat-option [value]=\"pageSizeOption\">\n                  {{pageSizeOption}}\n                </mat-option>\n              }\n            </mat-select>\n          <div class=\"mat-mdc-paginator-touch-target\" (click)=\"selectRef.open()\"></div>\n          </mat-form-field>\n        }\n\n        @if (_displayedPageSizeOptions.length <= 1) {\n          <div class=\"mat-mdc-paginator-page-size-value\">{{pageSize}}</div>\n        }\n      </div>\n    }\n\n    <div class=\"mat-mdc-paginator-range-actions\">\n      <div class=\"mat-mdc-paginator-range-label\" aria-live=\"polite\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      @if (showFirstLastButtons) {\n        <button mat-icon-button type=\"button\"\n                class=\"mat-mdc-paginator-navigation-first\"\n                (click)=\"_buttonClicked(0, _previousButtonsDisabled())\"\n                [attr.aria-label]=\"_intl.firstPageLabel\"\n                [matTooltip]=\"_intl.firstPageLabel\"\n                [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n                matTooltipPosition=\"above\"\n                [disabled]=\"_previousButtonsDisabled()\"\n                disabledInteractive>\n          <svg class=\"mat-mdc-paginator-icon\"\n              viewBox=\"0 0 24 24\"\n              focusable=\"false\"\n              aria-hidden=\"true\">\n            <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n          </svg>\n        </button>\n      }\n      <button mat-icon-button type=\"button\"\n              class=\"mat-mdc-paginator-navigation-previous\"\n              (click)=\"_buttonClicked(pageIndex - 1, _previousButtonsDisabled())\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              matTooltipPosition=\"above\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              disabledInteractive>\n        <svg class=\"mat-mdc-paginator-icon\"\n             viewBox=\"0 0 24 24\"\n             focusable=\"false\"\n             aria-hidden=\"true\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-mdc-paginator-navigation-next\"\n              (click)=\"_buttonClicked(pageIndex + 1, _nextButtonsDisabled())\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              matTooltipPosition=\"above\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              disabledInteractive>\n        <svg class=\"mat-mdc-paginator-icon\"\n             viewBox=\"0 0 24 24\"\n             focusable=\"false\"\n             aria-hidden=\"true\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      @if (showFirstLastButtons) {\n        <button mat-icon-button type=\"button\"\n                class=\"mat-mdc-paginator-navigation-last\"\n                (click)=\"_buttonClicked(getNumberOfPages() - 1, _nextButtonsDisabled())\"\n                [attr.aria-label]=\"_intl.lastPageLabel\"\n                [matTooltip]=\"_intl.lastPageLabel\"\n                [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n                matTooltipPosition=\"above\"\n                [disabled]=\"_nextButtonsDisabled()\"\n                disabledInteractive>\n          <svg class=\"mat-mdc-paginator-icon\"\n              viewBox=\"0 0 24 24\"\n              focusable=\"false\"\n              aria-hidden=\"true\">\n            <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n          </svg>\n        </button>\n      }\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"]
    }]
  }], () => [], {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    length: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hidePageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class MatPaginatorModule {
  static ɵfac = function MatPaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatPaginatorModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatPaginatorModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [MAT_PAGINATOR_INTL_PROVIDER],
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, MatPaginator]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();


/***/ }),

/***/ 60323:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/item-history/item-history.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemHistoryComponent: () => (/* binding */ ItemHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _item_history_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-history.helpers */ 76857);
/* harmony import */ var _services_versions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/versions.service */ 91211);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);




























function ItemHistoryComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "mat-form-field", 8)(2, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ItemHistoryComponent_Conditional_10_Template_mat_select_selectionChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.compareChange($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Compare with: Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Compare with: Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.compareWith());
  }
}
function ItemHistoryComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ItemHistoryComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No previous versions of this item found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const attribute_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", attribute_r6.values[0] == null ? null : attribute_r6.values[0].value, " ");
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_9_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("eav-history-", value_r7.change, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r7.change === "deleted" ? value_r7.oldValue : value_r7.value, " ");
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_9_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r7.oldValue);
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_9_For_2_Conditional_4_Template, 2, 4, "div", 23)(5, ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_9_For_2_Conditional_5_Template, 4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("eav-detail-row__label eav-history-", value_r7.change, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", value_r7.langKey, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](value_r7.change !== "changed" ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](value_r7.change === "changed" ? 5 : -1);
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_9_For_2_Template, 6, 6, "div", 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const attribute_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](attribute_r6.values);
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Template_div_click_1_listener() {
      const attribute_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const historyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.attributeExpandedToggle(historyItem_r4.versionNumber, attribute_r6.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_5_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 19)(7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Conditional_9_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const attribute_r6 = ctx.$implicit;
    const historyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("eav-row-main__label eav-history-", attribute_r6.change, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", attribute_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("eav-row-main__value eav-history-", attribute_r6.change, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx_r1.expandedAttributes[historyItem_r4.versionNumber + attribute_r6.name] ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("[", attribute_r6.dataType, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.expandedAttributes[historyItem_r4.versionNumber + attribute_r6.name] ? 9 : -1);
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_Conditional_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const historyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.restore(historyItem_r4.changeSetId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Restore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, ItemHistoryComponent_Conditional_14_For_2_Conditional_8_For_1_Template, 10, 10, "div", 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ItemHistoryComponent_Conditional_14_For_2_Conditional_8_Conditional_3_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const historyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](historyItem_r4.attributes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!historyItem_r4.isLastVersion ? 3 : -1);
  }
}
function ItemHistoryComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("expandedChange", function ItemHistoryComponent_Conditional_14_For_2_Template_mat_expansion_panel_expandedChange_0_listener($event) {
      const historyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.panelExpandedChange($event, historyItem_r4.versionNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-panel-description", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ItemHistoryComponent_Conditional_14_For_2_Conditional_8_Template, 4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const historyItem_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx_r1.expandedPanels[historyItem_r4.versionNumber]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Version ", historyItem_r4.versionNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](5, 5, historyItem_r4.timeStamp, "yyyy-MM-dd hh:mm UTC", "UTC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 9, ctx_r1.getLocalDate(historyItem_r4.timeStamp), "yyyy-MM-dd hh:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.expandedPanels[historyItem_r4.versionNumber] ? 8 : -1);
  }
}
function ItemHistoryComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-accordion", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, ItemHistoryComponent_Conditional_14_For_2_Template, 9, 12, "mat-expansion-panel", 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.historyItems());
  }
}
function ItemHistoryComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-paginator", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function ItemHistoryComponent_Conditional_15_Template_mat_paginator_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx_r1.version().length)("pageSize", ctx_r1.pageSize())("pageSizeOptions", ctx_r1.pageSizeOptions);
  }
}
class ItemHistoryComponent {
  #versionsService;
  constructor(dialog, route, snackBar) {
    this.dialog = dialog;
    this.route = route;
    this.snackBar = snackBar;
    this.hostClass = 'dialog-component';
    this.#versionsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_versions_service__WEBPACK_IMPORTED_MODULE_4__.VersionsService);
    this.#itemId = parseInt(this.route.snapshot.paramMap.get('itemId'), 10);
    this.version = this.#versionsService.fetchVersions(this.#itemId);
    this.pageSizeOptions = [10, 20, 50];
    this.expandedPanels = {};
    this.expandedAttributes = {};
    this.#page = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(1);
    this.pageSize = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_2__.signalObj)('pageSize', this.pageSizeOptions[0]);
    this.compareWith = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)('live');
    this.historyItems = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_2__.computedObj)('historyItems', () => (0,_item_history_helpers__WEBPACK_IMPORTED_MODULE_3__.getHistoryItems)(this.version(), this.#page(), this.pageSize(), this.compareWith()));
  }
  #itemId;
  #page;
  compareChange(newCompareWith) {
    this.compareWith.set(newCompareWith);
  }
  panelExpandedChange(expand, versionNumber) {
    this.expandedPanels[versionNumber] = expand;
  }
  attributeExpandedToggle(versionNumber, name) {
    this.expandedAttributes[versionNumber + name] = !this.expandedAttributes[versionNumber + name];
  }
  getLocalDate(date) {
    return new Date(date);
  }
  pageChange(event) {
    const newPage = event.pageIndex + 1;
    if (newPage !== this.#page()) {
      this.expandedPanels = {};
      this.expandedAttributes = {};
      this.#page.set(newPage);
    }
    this.pageSize.set(event.pageSize);
  }
  restore(changeId) {
    this.snackBar.open('Restoring previous version...');
    this.#versionsService.restore(this.#itemId, changeId).subscribe(_ => {
      this.snackBar.open('Previous version restored. Will reload edit dialog', null, {
        duration: 3000
      });
      this.dialog.close({
        refreshEdit: true
      });
    });
  }
  static {
    this.ɵfac = function ItemHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ItemHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ItemHistoryComponent,
      selectors: [["app-item-history"]],
      hostVars: 1,
      hostBindings: function ItemHistoryComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 16,
      vars: 5,
      consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content"], [1, "eav-compare-box"], ["multi", "", 1, "eav-history-tables"], ["color", "accent", "showFirstLastButtons", "true", 3, "length", "pageSize", "pageSizeOptions"], ["color", "accent", 1, "eav-mat-form-field", "eav-compare-box__dropdown"], ["name", "Scope", 3, "selectionChange", "value"], ["value", "previous"], ["value", "live"], [3, "expanded"], [3, "expandedChange", "expanded"], [3, "tippy"], [1, "eav-table-row"], [1, "eav-row-actions"], ["mat-raised-button", "", "color", "accent"], [1, "eav-table-row__main", "eav-row-main", 3, "click"], [1, "eav-row-main__type"], [1, "eav-table-row__details"], [1, "eav-detail-row"], [1, "eav-detail-row__value"], [3, "class"], [1, "eav-history-new"], [1, "eav-history-deleted", "eav-history-deleted__value"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["color", "accent", "showFirstLastButtons", "true", 3, "page", "length", "pageSize", "pageSizeOptions"]],
      template: function ItemHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Item History");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemHistoryComponent_Template_button_click_4_listener() {
            return ctx.dialog.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Check version history for this item and restore the version you need.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ItemHistoryComponent_Conditional_10_Template, 7, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ItemHistoryComponent_Conditional_12_Template, 2, 0, "div")(13, ItemHistoryComponent_Conditional_13_Template, 2, 0, "div")(14, ItemHistoryComponent_Conditional_14_Template, 3, 0, "mat-accordion", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ItemHistoryComponent_Conditional_15_Template, 1, 3, "mat-paginator", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_0_0 = ctx.historyItems()) == null ? null : tmp_0_0.length) > 0 ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.historyItems() === null ? 12 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_2_0 = ctx.historyItems()) == null ? null : tmp_2_0.length) === 0 ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_3_0 = ctx.historyItems()) == null ? null : tmp_3_0.length) > 0 ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_4_0 = ctx.historyItems()) == null ? null : tmp_4_0.length) > 0 ? 15 : -1);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOptionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelDescription, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      styles: [".eav-compare-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  height: 40px;\n}\n.eav-compare-box__dropdown[_ngcontent-%COMP%] {\n  width: 220px;\n  margin-top: -14px;\n  font-size: 14px;\n  height: auto;\n}\n\n.eav-accordion[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px 0;\n}\n\n.eav-expansion-panel-header[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.eav-table-row[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.eav-table-row__main[_ngcontent-%COMP%] {\n  display: flex;\n}\n.eav-table-row__details[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.eav-row-main[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 0;\n}\n.eav-row-main__label[_ngcontent-%COMP%] {\n  width: 160px;\n  flex: 0 0 auto;\n}\n.eav-row-main__value[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.eav-row-main__type[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 12px;\n}\n.eav-row-main__type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 2px;\n}\n\n.eav-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 4px;\n  cursor: default;\n}\n.eav-detail-row__label[_ngcontent-%COMP%] {\n  width: 160px;\n  flex: 0 0 auto;\n}\n.eav-detail-row__value[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.eav-row-actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0taGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0FBREo7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZGO0FBSUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSko7QUFNSTtFQUNFLGlCQUFBO0FBSk47O0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkY7QUFRRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBTko7QUFTRTtFQUNFLGNBQUE7QUFQSjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBUkYiLCJmaWxlIjoiaXRlbS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jb21wYXJlLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICZfX2Ryb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1hY2NvcmRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG59XHJcblxyXG4uZWF2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmVhdi10YWJsZS1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgJl9fbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJl9fZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5lYXYtcm93LW1haW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA0cHggMDtcclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAmX192YWx1ZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gICZfX3R5cGUge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lYXYtZGV0YWlsLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAmX192YWx1ZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5lYXYtcm93LWFjdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2l0ZW0taGlzdG9yeS9pdGVtLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtBQURKOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFGRjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUhKO0FBTUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUpKO0FBTUk7RUFDRSxpQkFBQTtBQUpOOztBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5GO0FBUUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQU5KO0FBU0U7RUFDRSxjQUFBO0FBUEo7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQVJGO0FBQ0EsNDZFQUE0NkUiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWNvbXBhcmUtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGhlaWdodDogNDBweDtcclxuXHJcbiAgJl9fZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LWFjY29yZGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbn1cclxuXHJcbi5lYXYtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZWF2LXRhYmxlLXJvdyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAmX19tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAmX19kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1yb3ctbWFpbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX3ZhbHVlIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fdHlwZSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICBpOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmVhdi1kZXRhaWwtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX3ZhbHVlIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1yb3ctYWN0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 76857:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/item-history/item-history.helpers.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHistoryItems: () => (/* binding */ getHistoryItems)
/* harmony export */ });
function getHistoryItems(versions, page, pageSize, compareWith) {
  if (versions == null || page == null || pageSize == null || compareWith == null) return null;
  const filtered = versions.slice((page - 1) * pageSize, page * pageSize);
  const historyItems = calcHistoryItems(filtered, versions, compareWith);
  return historyItems;
}
function calcHistoryItems(filteredVersions, versions, compareWith) {
  return filteredVersions.map(version => ({
    changeSetId: version.ChangeSetId,
    attributes: calcHistoryAttributes(version, versions, compareWith),
    historyId: version.HistoryId,
    timeStamp: version.TimeStamp,
    user: version.User,
    versionNumber: version.VersionNumber,
    isLastVersion: !versions.some(v => v.VersionNumber === version.VersionNumber + 1)
  }));
}
function calcHistoryAttributes(version, versions, compareWith) {
  const currentDataTypes = JSON.parse(version.Json).Entity.Attributes;
  const previousItem = compareWith === 'live' ? findLive(versions) : versions.find(v => v.VersionNumber === version.VersionNumber - 1);
  const previousDataTypes = previousItem ? JSON.parse(previousItem.Json).Entity.Attributes : null;
  const allAttributes = [];
  if (currentDataTypes != null) {
    Object.entries(currentDataTypes).forEach(([dataType, attributes]) => {
      Object.keys(attributes).forEach(attributeName => {
        if (allAttributes.find(a => a.name === attributeName && a.dataType === dataType) != null) return;
        allAttributes.push({
          name: attributeName,
          dataType
        });
      });
    });
  }
  if (previousDataTypes != null) {
    Object.entries(previousDataTypes).forEach(([dataType, attributes]) => {
      Object.keys(attributes).forEach(attributeName => {
        if (allAttributes.find(a => a.name === attributeName && a.dataType === dataType) != null) return;
        allAttributes.push({
          name: attributeName,
          dataType
        });
      });
    });
  }
  const historyAttributes = allAttributes.map(attribute => {
    const currentValues = currentDataTypes?.[attribute.dataType]?.[attribute.name];
    const previousValues = previousDataTypes?.[attribute.dataType]?.[attribute.name];
    return {
      name: attribute.name,
      dataType: attribute.dataType,
      change: calcChangeType(currentValues, previousValues, true),
      values: calcHistoryValues(currentValues, previousValues)
    };
  });
  return historyAttributes;
}
function findLive(versions) {
  let liveVersion = versions[0];
  for (const version of versions) {
    if (version.VersionNumber <= liveVersion.VersionNumber) continue;
    liveVersion = version;
  }
  return liveVersion;
}
function calcHistoryValues(values, previousValues) {
  const allLangKeys = [];
  if (values != null) {
    Object.keys(values).forEach(lang => {
      if (allLangKeys.includes(lang)) return;
      allLangKeys.push(lang);
    });
  }
  if (previousValues != null) {
    Object.keys(previousValues).forEach(lang => {
      if (allLangKeys.includes(lang)) return;
      allLangKeys.push(lang);
    });
  }
  const historyValues = allLangKeys.map(langKey => {
    const currentValue = values?.[langKey];
    const previousValue = previousValues?.[langKey];
    return {
      langKey,
      value: currentValue,
      oldValue: previousValue,
      change: calcChangeType(currentValue, previousValue)
    };
  });
  return historyValues;
}
function calcChangeType(currentValue, previousValue, sortObjectKeys = false) {
  let change;
  if (sortObjectKeys) {
    if (typeof currentValue === 'object') {
      currentValue = sortKeysAlphabetically(currentValue);
    }
    if (typeof previousValue === 'object') {
      previousValue = sortKeysAlphabetically(previousValue);
    }
  }
  change = currentValue != null && previousValue != null ? JSON.stringify(currentValue) !== JSON.stringify(previousValue) ? 'changed' : 'none' : currentValue != null ? 'new' : 'deleted';
  return change;
}
function sortKeysAlphabetically(obj) {
  if (typeof obj !== 'object') return obj;
  return Object.keys(obj).sort().reduce((acc, key) => ({
    ...acc,
    [key]: obj[key]
  }), {});
}

/***/ }),

/***/ 80640:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/tooltip.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_TOOLTIP_DEFAULT_OPTIONS: () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS),
/* harmony export */   MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MatTooltip: () => (/* binding */ MatTooltip),
/* harmony export */   MatTooltipModule: () => (/* binding */ MatTooltipModule),
/* harmony export */   SCROLL_THROTTLE_MS: () => (/* binding */ SCROLL_THROTTLE_MS),
/* harmony export */   TOOLTIP_PANEL_CLASS: () => (/* binding */ TOOLTIP_PANEL_CLASS),
/* harmony export */   TooltipComponent: () => (/* binding */ TooltipComponent),
/* harmony export */   getMatTooltipInvalidPositionError: () => (/* binding */ getMatTooltipInvalidPositionError),
/* harmony export */   matTooltipAnimations: () => (/* binding */ matTooltipAnimations)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 81570);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);















/** Time in ms to throttle repositioning after scroll events. */
const _c0 = ["tooltip"];
const SCROLL_THROTTLE_MS = 20;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
/** Injection token that determines the scroll handling while a tooltip is visible. */
const MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-tooltip-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay);
    return () => overlay.scrollStrategies.reposition({
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
/** Injection token to be used to override the default options for `matTooltip`. */
const MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-tooltip-default-options', {
  providedIn: 'root',
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/**
 * CSS class that will be attached to the overlay panel.
 * @deprecated
 * @breaking-change 13.0.0 remove this variable
 */
const TOOLTIP_PANEL_CLASS = 'mat-mdc-tooltip-panel';
const PANEL_CLASS = 'tooltip-panel';
/** Options used to bind passive event listeners. */
const passiveListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});
// These constants were taken from MDC's `numbers` object. We can't import them from MDC,
// because they have some top-level references to `window` which break during SSR.
const MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
const UNBOUNDED_ANCHOR_GAP = 8;
const MIN_HEIGHT = 24;
const MAX_WIDTH = 200;
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
class MatTooltip {
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
  _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
  _ariaDescriber = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.AriaDescriber);
  _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor);
  _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality);
  _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
  _defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_TOOLTIP_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef;
  _tooltipInstance;
  _portal;
  _position = 'below';
  _positionAtOrigin = false;
  _disabled = false;
  _tooltipClass;
  _viewInitialized = false;
  _pointerExitEventsInitialized = false;
  _tooltipComponent = TooltipComponent;
  _viewportMargin = 8;
  _currentPosition;
  _cssClassPrefix = 'mat-mdc';
  _ariaDescriptionPending;
  _dirSubscribed = false;
  /** Allows the user to define the position of the tooltip relative to the parent element */
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  /**
   * Whether tooltip should be relative to the click or touch origin
   * instead of outside the element bounding box.
   */
  get positionAtOrigin() {
    return this._positionAtOrigin;
  }
  set positionAtOrigin(value) {
    this._positionAtOrigin = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
    this._detach();
    this._overlayRef = null;
  }
  /** Disables the display of the tooltip. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const isDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
    if (this._disabled !== isDisabled) {
      this._disabled = isDisabled;
      // If tooltip is disabled, hide immediately.
      if (isDisabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
      this._syncAriaDescription(this.message);
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(value);
  }
  _showDelay;
  /** The default delay in ms before hiding the tooltip after hide is called */
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  _hideDelay;
  /**
   * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
   * uses a long press gesture to show and hide, however it can conflict with the native browser
   * gestures. To work around the conflict, Angular Material disables native gestures on the
   * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
   * elements). The different values for this option configure the touch event handling as follows:
   * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
   *   browser gestures on particular elements. In particular, it allows text selection on inputs
   *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
   * - `on` - Enables touch gestures for all elements and disables native
   *   browser gestures with no exceptions.
   * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
   *   showing on touch devices.
   */
  touchGestures = 'auto';
  /** The message to be displayed in the tooltip */
  get message() {
    return this._message;
  }
  set message(value) {
    const oldMessage = this._message;
    // If the message is not a string (e.g. number), convert it to a string and trim it.
    // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
    // away the string-conversion: https://github.com/angular/components/issues/20684
    this._message = value != null ? String(value).trim() : '';
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
    }
    this._syncAriaDescription(oldMessage);
  }
  _message = '';
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  /** Manually-bound passive event listeners. */
  _passiveListeners = [];
  /** Timer started at the last `touchstart` event. */
  _touchstartTimeout = null;
  /** Emits when the component is destroyed. */
  _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  /** Whether ngOnDestroyed has been called. */
  _isDestroyed = false;
  constructor() {
    const defaultOptions = this._defaultOptions;
    if (defaultOptions) {
      this._showDelay = defaultOptions.showDelay;
      this._hideDelay = defaultOptions.hideDelay;
      if (defaultOptions.position) {
        this.position = defaultOptions.position;
      }
      if (defaultOptions.positionAtOrigin) {
        this.positionAtOrigin = defaultOptions.positionAtOrigin;
      }
      if (defaultOptions.touchGestures) {
        this.touchGestures = defaultOptions.touchGestures;
      }
      if (defaultOptions.tooltipClass) {
        this.tooltipClass = defaultOptions.tooltipClass;
      }
    }
    this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
  }
  ngAfterViewInit() {
    // This needs to happen after view init so the initial values for all inputs have been set.
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(origin => {
      // Note that the focus monitor runs outside the Angular zone.
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === 'keyboard') {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    // Optimization: Do not call clearTimeout unless there is an active timer.
    if (this._touchstartTimeout) {
      clearTimeout(this._touchstartTimeout);
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    // Clean up the event listeners set in the constructor
    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });
    this._passiveListeners.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
    this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
  show(delay = this.showDelay, origin) {
    if (this.disabled || !this.message || this._isTooltipVisible()) {
      this._tooltipInstance?._cancelPendingAnimations();
      return;
    }
    const overlayRef = this._createOverlay(origin);
    this._detach();
    this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
  hide(delay = this.hideDelay) {
    const instance = this._tooltipInstance;
    if (instance) {
      if (instance.isVisible()) {
        instance.hide(delay);
      } else {
        instance._cancelPendingAnimations();
        this._detach();
      }
    }
  }
  /** Shows/hides the tooltip */
  toggle(origin) {
    this._isTooltipVisible() ? this.hide() : this.show(undefined, origin);
  }
  /** Returns true if the tooltip is currently visible to the user */
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */
  _createOverlay(origin) {
    if (this._overlayRef) {
      const existingStrategy = this._overlayRef.getConfig().positionStrategy;
      if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
        return this._overlayRef;
      }
      this._detach();
    }
    const scrollableAncestors = this._injector.get(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
    const overlay = this._injector.get(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay);
    // Create connected position strategy that listens for scroll events to reposition.
    const strategy = overlay.position().flexibleConnectedTo(this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
    strategy.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(change => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          // After position changes occur and the overlay is clipped by
          // a parent scrollable then close the tooltip.
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = overlay.create({
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: `${this._cssClassPrefix}-${PANEL_CLASS}`,
      scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)()
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(event => {
      if (this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.hasModifierKey)(event)) {
        event.preventDefault();
        event.stopPropagation();
        this._ngZone.run(() => this.hide(0));
      }
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    if (!this._dirSubscribed) {
      this._dirSubscribed = true;
      this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
        }
      });
    }
    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset({
      ...origin.main,
      ...overlay.main
    }), this._addOffset({
      ...origin.fallback,
      ...overlay.fallback
    })]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */
  _addOffset(position) {
    const offset = UNBOUNDED_ANCHOR_GAP;
    const isLtr = !this._dir || this._dir.value == 'ltr';
    if (position.originY === 'top') {
      position.offsetY = -offset;
    } else if (position.originY === 'bottom') {
      position.offsetY = offset;
    } else if (position.originX === 'start') {
      position.offsetX = isLtr ? -offset : offset;
    } else if (position.originX === 'end') {
      position.offsetX = isLtr ? offset : -offset;
    }
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == 'ltr';
    const position = this.position;
    let originPosition;
    if (position == 'above' || position == 'below') {
      originPosition = {
        originX: 'center',
        originY: position == 'above' ? 'top' : 'bottom'
      };
    } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
      originPosition = {
        originX: 'start',
        originY: 'center'
      };
    } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
      originPosition = {
        originX: 'end',
        originY: 'center'
      };
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == 'ltr';
    const position = this.position;
    let overlayPosition;
    if (position == 'above') {
      overlayPosition = {
        overlayX: 'center',
        overlayY: 'bottom'
      };
    } else if (position == 'below') {
      overlayPosition = {
        overlayX: 'center',
        overlayY: 'top'
      };
    } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
      overlayPosition = {
        overlayX: 'end',
        overlayY: 'center'
      };
    } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
      overlayPosition = {
        overlayX: 'start',
        overlayY: 'center'
      };
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */
  _updateTooltipMessage() {
    // Must wait for the message to be painted to the tooltip so that the overlay can properly
    // calculate the correct positioning based on the size of the text.
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      }, {
        injector: this._injector
      });
    }
  }
  /** Updates the tooltip class */
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */
  _invertPosition(x, y) {
    if (this.position === 'above' || this.position === 'below') {
      if (y === 'top') {
        y = 'bottom';
      } else if (y === 'bottom') {
        y = 'top';
      }
    } else {
      if (x === 'end') {
        x = 'start';
      } else if (x === 'start') {
        x = 'end';
      }
    }
    return {
      x,
      y
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    // If the overlay is in the middle along the Y axis,
    // it means that it's either before or after.
    if (overlayY === 'center') {
      // Note that since this information is used for styling, we want to
      // resolve `start` and `end` to their real values, otherwise consumers
      // would have to remember to do it themselves on each consumption.
      if (this._dir && this._dir.value === 'rtl') {
        newPosition = originX === 'end' ? 'left' : 'right';
      } else {
        newPosition = originX === 'start' ? 'left' : 'right';
      }
    } else {
      newPosition = overlayY === 'bottom' && originY === 'top' ? 'above' : 'below';
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */
  _setupPointerEnterEventsIfNeeded() {
    // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    }
    // The mouse events shouldn't be bound on mobile devices, because they can prevent the
    // first tap from firing its click event or can cause the tooltip to open for clicks.
    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(['mouseenter', event => {
        this._setupPointerExitEventsIfNeeded();
        let point = undefined;
        if (event.x !== undefined && event.y !== undefined) {
          point = event;
        }
        this.show(undefined, point);
      }]);
    } else if (this.touchGestures !== 'off') {
      this._disableNativeGesturesIfNecessary();
      this._passiveListeners.push(['touchstart', event => {
        const touch = event.targetTouches?.[0];
        const origin = touch ? {
          x: touch.clientX,
          y: touch.clientY
        } : undefined;
        // Note that it's important that we don't `preventDefault` here,
        // because it can prevent click events from firing on the element.
        this._setupPointerExitEventsIfNeeded();
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        const DEFAULT_LONGPRESS_DELAY = 500;
        this._touchstartTimeout = setTimeout(() => {
          this._touchstartTimeout = null;
          this.show(undefined, origin);
        }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
      }]);
    }
    this._addListeners(this._passiveListeners);
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    const exitListeners = [];
    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(['mouseleave', event => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      }], ['wheel', event => this._wheelListener(event)]);
    } else if (this.touchGestures !== 'off') {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = () => {
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        this.hide(this._defaultOptions?.touchendHideDelay);
      };
      exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
    }
    this._addListeners(exitListeners);
    this._passiveListeners.push(...exitListeners);
  }
  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }
  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */
  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT).elementFromPoint(event.clientX, event.clientY);
      const element = this._elementRef.nativeElement;
      // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
      // won't fire if the user scrolls away using the wheel without moving their cursor. We
      // work around it by finding the element under the user's cursor and closing the tooltip
      // if it's not the trigger.
      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== 'off') {
      const element = this._elementRef.nativeElement;
      const style = element.style;
      // If gestures are set to `auto`, we don't disable text selection on inputs and
      // textareas, because it prevents the user from typing into them on iOS Safari.
      if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
        style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = 'none';
      }
      // If we have `auto` gestures and the element uses native HTML dragging,
      // we don't set `-webkit-user-drag` because it prevents the native behavior.
      if (gestures === 'on' || !element.draggable) {
        style.webkitUserDrag = 'none';
      }
      style.touchAction = 'none';
      style.webkitTapHighlightColor = 'transparent';
    }
  }
  /** Updates the tooltip's ARIA description based on it current state. */
  _syncAriaDescription(oldMessage) {
    if (this._ariaDescriptionPending) {
      return;
    }
    this._ariaDescriptionPending = true;
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, 'tooltip');
    // The `AriaDescriber` has some functionality that avoids adding a description if it's the
    // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
    // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
    // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
    if (!this._isDestroyed) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)({
        write: () => {
          this._ariaDescriptionPending = false;
          if (this.message && !this.disabled) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, 'tooltip');
          }
        }
      }, {
        injector: this._injector
      });
    }
  }
  static ɵfac = function MatTooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTooltip)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTooltip,
    selectors: [["", "matTooltip", ""]],
    hostAttrs: [1, "mat-mdc-tooltip-trigger"],
    hostVars: 2,
    hostBindings: function MatTooltip_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tooltip-disabled", ctx.disabled);
      }
    },
    inputs: {
      position: [0, "matTooltipPosition", "position"],
      positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
      disabled: [0, "matTooltipDisabled", "disabled"],
      showDelay: [0, "matTooltipShowDelay", "showDelay"],
      hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
      touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
      message: [0, "matTooltip", "message"],
      tooltipClass: [0, "matTooltipClass", "tooltipClass"]
    },
    exportAs: ["matTooltip"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTooltip]',
      exportAs: 'matTooltip',
      host: {
        'class': 'mat-mdc-tooltip-trigger',
        '[class.mat-mdc-tooltip-disabled]': 'disabled'
      }
    }]
  }], () => [], {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipPosition']
    }],
    positionAtOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipPositionAtOrigin']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipDisabled']
    }],
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipShowDelay']
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipHideDelay']
    }],
    touchGestures: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipTouchGestures']
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltip']
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipClass']
    }]
  });
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
class TooltipComponent {
  _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
  /* Whether the tooltip text overflows to multiple lines */
  _isMultiline = false;
  /** Message to display in the tooltip */
  message;
  /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
  tooltipClass;
  /** The timeout ID of any current timer set to show the tooltip */
  _showTimeoutId;
  /** The timeout ID of any current timer set to hide the tooltip */
  _hideTimeoutId;
  /** Element that caused the tooltip to open. */
  _triggerElement;
  /** Amount of milliseconds to delay the closing sequence. */
  _mouseLeaveHideDelay;
  /** Whether animations are currently disabled. */
  _animationsDisabled;
  /** Reference to the internal tooltip element. */
  _tooltip;
  /** Whether interactions on the page should close the tooltip */
  _closeOnInteraction = false;
  /** Whether the tooltip is currently visible. */
  _isVisible = false;
  /** Subject for notifying that the tooltip has been hidden from the view */
  _onHide = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  /** Name of the show animation and the class that toggles it. */
  _showAnimation = 'mat-mdc-tooltip-show';
  /** Name of the hide animation and the class that toggles it. */
  _hideAnimation = 'mat-mdc-tooltip-hide';
  constructor() {
    const animationMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._animationsDisabled = animationMode === 'NoopAnimations';
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */
  show(delay) {
    // Cancel the delayed hide if it is scheduled
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = undefined;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */
  hide(delay) {
    // Cancel the delayed show if it is scheduled
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = undefined;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */
  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    this._cancelPendingAnimations();
    this._onHide.complete();
    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      if (this.isVisible()) {
        this.hide(this._mouseLeaveHideDelay);
      } else {
        this._finalizeAnimation(false);
      }
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */
  _onShow() {
    this._isMultiline = this._isTooltipMultiline();
    this._markForCheck();
  }
  /** Whether the tooltip text has overflown to the next line */
  _isTooltipMultiline() {
    const rect = this._elementRef.nativeElement.getBoundingClientRect();
    return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
  }
  /** Event listener dispatched when an animation on the tooltip finishes. */
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Cancels any pending animation sequences. */
  _cancelPendingAnimations() {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = this._hideTimeoutId = undefined;
  }
  /** Handles the cleanup after an animation has finished. */
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */
  _toggleVisibility(isVisible) {
    // We set the classes directly here ourselves so that toggling the tooltip state
    // isn't bound by change detection. This allows us to hide it even if the
    // view ref has been detached from the CD tree.
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    if (this._isVisible !== isVisible) {
      this._isVisible = isVisible;
      this._changeDetectorRef.markForCheck();
    }
    // It's common for internal apps to disable animations using `* { animation: none !important }`
    // which can break the opening sequence. Try to detect such cases and work around them.
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === 'function') {
      const styles = getComputedStyle(tooltip);
      // Use `getPropertyValue` to avoid issues with property renaming.
      if (styles.getPropertyValue('animation-duration') === '0s' || styles.getPropertyValue('animation-name') === 'none') {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add('_mat-animation-noopable');
      this._finalizeAnimation(isVisible);
    }
  }
  static ɵfac = function TooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TooltipComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TooltipComponent,
    selectors: [["mat-tooltip-component"]],
    viewQuery: function TooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tooltip = _t.first);
      }
    },
    hostAttrs: ["aria-hidden", "true"],
    hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
          return ctx._handleMouseLeave($event);
        });
      }
    },
    decls: 4,
    vars: 4,
    consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
    template: function TooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleAnimationEnd($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-tooltip--multiline", ctx._isMultiline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.tooltipClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass],
    styles: [".mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:\"\";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tooltip-component',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        '(mouseleave)': '_handleMouseLeave($event)',
        'aria-hidden': 'true'
      },
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass],
      template: "<div\n  #tooltip\n  class=\"mdc-tooltip mat-mdc-tooltip\"\n  [ngClass]=\"tooltipClass\"\n  (animationend)=\"_handleAnimationEnd($event)\"\n  [class.mdc-tooltip--multiline]=\"_isMultiline\">\n  <div class=\"mat-mdc-tooltip-surface mdc-tooltip__surface\">{{message}}</div>\n</div>\n",
      styles: [".mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:\"\";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}"]
    }]
  }], () => [], {
    _tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tooltip', {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();

/**
 * Animations used by MatTooltip.
 * @docs-private
 * @deprecated No longer being used, to be removed.
 * @breaking-change 21.0.0
 */
const matTooltipAnimations = {
  // Represents:
  // trigger('state', [
  //   state('initial, void, hidden', style({opacity: 0, transform: 'scale(0.8)'})),
  //   state('visible', style({transform: 'scale(1)'})),
  //   transition('* => visible', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
  //   transition('* => hidden', animate('75ms cubic-bezier(0.4, 0, 1, 1)')),
  // ])
  /** Animation that transitions a tooltip in and out. */
  tooltipState: {
    type: 7,
    name: 'state',
    definitions: [{
      type: 0,
      name: 'initial, void, hidden',
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: 'scale(0.8)'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'visible',
      styles: {
        type: 6,
        styles: {
          transform: 'scale(1)'
        },
        offset: null
      }
    }, {
      type: 1,
      expr: '* => visible',
      animation: {
        type: 4,
        styles: null,
        timings: '150ms cubic-bezier(0, 0, 0.2, 1)'
      },
      options: null
    }, {
      type: 1,
      expr: '* => hidden',
      animation: {
        type: 4,
        styles: null,
        timings: '75ms cubic-bezier(0.4, 0, 1, 1)'
      },
      options: null
    }],
    options: {}
  }
};
class MatTooltipModule {
  static ɵfac = function MatTooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTooltipModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatTooltipModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.CdkScrollableModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.CdkScrollableModule],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();


/***/ }),

/***/ 91211:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/item-history/services/versions.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionsService: () => (/* binding */ VersionsService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiVersionsGet = 'cms/history/get';
const webApiVersionsRestore = 'cms/history/restore';
class VersionsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  fetchVersions(entityId, initial = null) {
    return this.postSignal(webApiVersionsGet, {
      entityId
    }, {
      params: {
        appId: this.appId
      }
    }, initial);
  }
  restore(entityId, changeId) {
    return this.http.post(this.apiUrl(webApiVersionsRestore), {
      entityId
    }, {
      params: {
        appId: this.appId,
        changeId: changeId.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵVersionsService_BaseFactory;
      return function VersionsService_Factory(__ngFactoryType__) {
        return (ɵVersionsService_BaseFactory || (ɵVersionsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](VersionsService)))(__ngFactoryType__ || VersionsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VersionsService,
      factory: VersionsService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_item-history_item-history_component_ts.js.map