"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_edit_form_form-config_service_ts-projects_eav-ui_src_app_edit-b26668"],{

/***/ 4202:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/fields/input-type-catalog.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTypeCatalog: () => (/* binding */ InputTypeCatalog)
/* harmony export */ });
const InputTypeCatalog = {
  // Boolean
  BooleanDefault: 'boolean-default',
  BooleanTristate: 'boolean-tristate',
  // Custom
  CustomDefault: 'custom-default',
  CustomGps: 'custom-gps',
  CustomJsonEditor: 'custom-json-editor',
  // Date / Time
  DateTimeDefault: 'datetime-default',
  DefaultSuffix: '-default',
  // Empty
  EmptyDefault: 'empty-default',
  EmptyEnd: 'empty-end',
  EmptyMessage: 'empty-message',
  // Entity - all pickers
  EntityContentBlocks: 'entity-content-blocks',
  EntityDefault: 'entity-default',
  EntityQuery: 'entity-query',
  // External
  ExternalWebComponent: 'external-web-component',
  // Hyperlink / File
  HyperlinkDefault: 'hyperlink-default',
  HyperlinkLibrary: 'hyperlink-library',
  // Numbers
  NumberDefault: 'number-default',
  NumberDropdown: 'number-dropdown',
  // picker
  // String
  StringDefault: 'string-default',
  StringDropdown: 'string-dropdown',
  // picker
  StringDropdownQuery: 'string-dropdown-query',
  // picker
  StringFontIconPicker: 'string-font-icon-picker',
  StringJson: 'string-json',
  StringTemplatePicker: 'string-template-picker',
  // picker
  StringUrlPath: 'string-url-path',
  StringWysiwyg: 'string-wysiwyg',
  /** New Pickers v17.x */
  EntityPicker: 'entity-picker',
  StringPicker: 'string-picker',
  NumberPicker: 'number-picker',
  /** for all situations where we need a fallback; new v16.04 */
  Unknown: 'unknown'
} /* the as const ensures that the keys/values can be strictly checked */;

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
    return array;
  }
}
// function onlyUnique<T extends unknown>(value: T, index: number, array: T[]): boolean {
//   return array.indexOf(value) === index;
// }

/***/ }),

/***/ 7796:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/fields/field-state.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldState: () => (/* binding */ FieldState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/signals/signal.utilities */ 67993);


/**
 * This is provided / injected at the fields-builder for every single field.
 * So any control or service within that field, which requests this service, will get one containing exactly that fields.
 */
class FieldState {
  constructor(/** The fields technical name to access settings etc. */
  name, /** Field configuration, incl. a lot of unchanging values and access to adam, dropzone etc. */
  config, /** The form group containing the field - rarely relevant, as you should use the control in most cases */
  group,
  // TODO: @2pp try to find out where this is used just to create a signal for a property
  /** The settings as a signal - use this for most cases */
  settings, /** The basic settings - use this for most cases as it will change less than the settings signal */
  basics,
  /**
   * The UI control (actually it's the virtual UI control), since it's a reactive form control.
   * Note: e just introduced uiValue below, which should be used in most cases
   */
  ui, /** The value of the field in the UI control as a signal */
  uiValue, translationState, /** Signal if a dialog (popup) of this field is open, like a hyperlink-dialog */
  isOpen, pickerData, featuresSvc, injectorForEffects) {
    this.name = name;
    this.config = config;
    this.group = group;
    this.settings = settings;
    this.basics = basics;
    this.ui = ui;
    this.uiValue = uiValue;
    this.translationState = translationState;
    this.isOpen = isOpen;
    // settingExt<TSet extends FieldSettings, K extends keyof TSet>(name: K): Signal<TSet[K]> {
    //   return computedObj(name as string, () => (this.settings() as unknown as TSet)[name]);
    // }
    //#region Required Features
    this.#reqFeaturesMy = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_0__.signalObj)('requiredFeatures', []);
    this.#reqFeaturesFromSettings = this.setting('requiredFeatures');
    this.requiredFeatures = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_0__.computedObj)('requiredFeatures', () => {
      const merged = [...this.#reqFeaturesMy(), ...(this.#reqFeaturesFromSettings() ?? [])];
      // make distinct
      return Array.from(new Set(merged));
    });
    this.#pickerData = pickerData;
    // Required Features Transfer
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      const reqFeaturesFromSettings = this.requiredFeatures();
      if (reqFeaturesFromSettings.length == 0) return;
      for (const feature of reqFeaturesFromSettings) featuresSvc.requireFeature(feature, `Used in field ${this.name}`);
    }, {
      injector: injectorForEffects
    });
  }
  /**
   * Picker Data - will throw an error if accessed on a field which doesn't have PickerData
   * @readonly
   * @type {PickerData}
   */
  get pickerData() {
    if (this.#pickerData) return this.#pickerData;
    throw new Error(`PickerData was not initialized for the field: ${this.name}`);
  }
  #pickerData;
  /**
   * Cool helper to just get a single value-signal from the settings.
   * It will automatically
   * - ensure that you only use valid keys
   * - return a signal with that name
   * - the signal will be correctly typed as the setting value is typed
   * @param name property name of a FieldSettings
   * @returns the signal for that property, with isEqual change detection and name
   */
  setting(name) {
    return (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_0__.computedObj)(name, () => this.settings()[name]);
  }
  settingExt(name) {
    return (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_0__.computedObj)(name, () => this.settings()[name]);
  }
  // settingExt<TSet extends FieldSettings, K extends keyof TSet>(name: K): Signal<TSet[K]> {
  //   return computedObj(name as string, () => (this.settings() as unknown as TSet)[name]);
  // }
  //#region Required Features
  #reqFeaturesMy;
  #reqFeaturesFromSettings;
  requireFeature(feature) {
    const current = this.#reqFeaturesMy();
    if (!current.includes(feature)) this.#reqFeaturesMy.set([...current, feature]);
  }
}

/***/ }),

/***/ 8265:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/form-config.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormConfigService: () => (/* binding */ FormConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _form_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-language.service */ 32093);






/**
 * Service which tell us about a single edit-form configuration.
 * It contains multiple entities.
 *
 * Things such as language, IDs shown on it, edit-settings etc.
 */
class FormConfigService {
  /** no constructor */
  constructor() {
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_1__.classLog)({
      FormConfigService
    });
    // WIP, null at first
    this.configSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    /** Used to fetch form data and fill up eavConfig. Do not use anywhere else */
    this.context = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_shared_services_context__WEBPACK_IMPORTED_MODULE_2__.Context);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_form_language_service__WEBPACK_IMPORTED_MODULE_3__.FormLanguageService);
  }
  /** Create EavConfiguration from sessionStorage */
  initFormConfig(dialogContext, formId, isParentDialog, itemGuids, createMode, isCopy, enableHistory, settings) {
    this.settings = settings;
    this.languages = {
      initial: dialogContext.Language.Current,
      primary: dialogContext.Language.Primary,
      list: dialogContext.Language.List
    };
    this.config = {
      zoneId: this.context.zoneId,
      appId: this.context.appId,
      appRoot: dialogContext.App.Url,
      appSharedRoot: dialogContext.App.SharedUrl,
      moduleId: this.context.moduleId?.toString(),
      partOfPage: sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyPartOfPage) ?? _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.partOfPageDefault,
      portalRoot: dialogContext.Site.Url,
      tabId: this.context.tabId?.toString(),
      systemRoot: window.location.pathname.split('/dist/')[0] + '/',
      versioningOptions: this.getVersioningOptions(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyPartOfPage) === 'true', sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyPublishing)),
      formId,
      isParentDialog,
      itemGuids,
      createMode,
      isCopy,
      enableHistory,
      enableFormulaSave: dialogContext.Enable.FormulaSave ?? false,
      removeEditRestrictions: dialogContext.Enable.OverrideEditRestrictions ?? false,
      dialogContext,
      settings
    };
    this.configSignal.set(this.config);
    this.language = this.languageService.getSignal(this.config.formId);
  }
  getVersioningOptions(partOfPage, publishing) {
    const allowAll = {
      show: true,
      hide: true,
      branch: true
    };
    if (!partOfPage) return allowAll;
    const publish = publishing || '';
    switch (publish) {
      case '':
      case 'DraftOptional':
        return allowAll;
      case 'DraftRequired':
        // Note: the key 'show' should not be added, as the code later picks the first property to set the default
        // Branch should also be first, as it's the preferred option
        return {
          branch: true,
          hide: true
        };
      case 'DraftForbidden':
        return {
          show: true
        };
      default:
        {
          console.error(`Invalid versioning requirements: ${publish}`);
          return {};
        }
    }
  }
  /**
   * Get the language observable for the form - it will keep track of the current language as it changes.
   * TODO: try to use the signal as much as possible
    // TODO:: @2dg Question Languages as Signal
   */
  get language$() {
    return this._language$ ??= this.languageService.getLanguage$(this.config.formId);
  }
  static {
    this.ɵfac = function FormConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FormConfigService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: FormConfigService,
      factory: FormConfigService.ɵfac
    });
  }
}

/***/ }),

/***/ 16632:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/signal-store-base.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignalStoreBase: () => (/* binding */ SignalStoreBase)
/* harmony export */ });
/* harmony import */ var _shared_signals_computed_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/signals/computed-cache */ 98503);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/logging */ 34435);



/**
 * Signal based store for any kind of data which is accessed by a key.
 * - The data type is generic.
 * - The key type can be customized.
 * - Standard get/add/remove methods exist, and can be augmented by the inheriting store.
 */
class SignalStoreBase {
  constructor(log) {
    /** Main Cache */
    this.#cache = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_1__.signalObj)('cache', {});
    /** Cached version of the list, with the latest object-values */
    this.#list = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_1__.computedObj)('list', () => Object.values(this.#cache()));
    /**
     * Function to get the key / id for storing in the cache.
     * Default is to get the 'id' property of the item.
     * This should be overriden in the inheriting class.
     */
    this.getId = item => item.id;
    this.sanitizeAdd = item => item;
    this.#itemSignalsCache = new _shared_signals_computed_cache__WEBPACK_IMPORTED_MODULE_0__.ComputedCacheHelper('item');
    this.log = log ?? (0,_shared_logging__WEBPACK_IMPORTED_MODULE_2__.classLog)({
      SignalStoreBase
    });
    this.log.a('SignalStoreBase created');
    this.name = this.log.name;
  }
  /** Main Cache */
  #cache;
  /** Cached version of the list, with the latest object-values */
  #list;
  /** Cache for the inheriting classes, but as read-only */
  get cache() {
    return this.#cache;
  }
  /** List for the inheriting classes, but as read-only */
  get list() {
    return this.#list;
  }
  //#region Add / Update / Remove / Clear Cache
  add(item) {
    const l = this.log.fn('add', {
      item
    });
    if (!item) return l.end('item is null');
    // add to signal
    this.#cache.set({
      ...this.#cache(),
      [this.getId(item)]: this.sanitizeAdd(item)
    });
    l.end('added');
  }
  addMany(items) {
    var l = this.log.fn('addMany', {
      items
    });
    if (!items || items.length == 0) return l.end('items is null or empty');
    // also add to signal, but in one go
    const result = items.reduce((acc, item) => ({
      ...acc,
      [this.getId(item)]: this.sanitizeAdd(item)
    }), {
      ...this.#cache()
    });
    this.#cache.set(result);
    l.end('added');
  }
  update(id, item) {
    const l = this.log.fn('update', {
      id,
      item
    });
    if (!id || !item) return l.end('id or item is null');
    const before = this.get(id);
    if (!before) return l.end(`Item with id ${id} not found in store`);
    // merge
    const newItem = {
      ...before,
      ...item
    };
    // add to signal
    this.#cache.set({
      ...this.#cache(),
      [id]: newItem
    });
    l.end('updated');
  }
  remove(id) {
    const l = this.log.fn('remove', {
      id
    });
    const {
      [id]: _,
      ...updatedStore
    } = this.#cache();
    this.#cache.set(updatedStore);
    l.end('removed');
  }
  clearCache() {
    const l = this.log.fn('clearCache');
    this.#cache.set({});
    l.end('cleared');
  }
  //#endregion
  //#region Now-Getters
  get(id) {
    const result = this.#cache()[id];
    this.log.a(`get(${id}) - ` + (result == null ? 'not' : '') + 'found');
    return result;
  }
  getAll() {
    const result = this.#list();
    this.log.a('getAll() - ' + `found ${result.length} items`);
    return result;
  }
  getMany(ids) {
    const l = this.log.fn('getMany', {
      ids
    });
    const result = ids.map(id => this.#cache()[id]).filter(item => item != null);
    return l.r(result, `found ${result.length} items`);
  }
  //#endregion
  //#region Signal Getters
  getSignal(id) {
    const result = this.#itemSignalsCache.getOrCreateWithInfo(id, () => this.get(id));
    this.log.a(`getSignal(${id})`, {
      isNew: result.isNew
    });
    return result.signal;
  }
  #itemSignalsCache;
  getManySignal(ids) {
    const sig = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_1__.computedObj)('getMany', () => ids.map(id => this.get(id)).filter(item => item != null));
    this.log.a('getManySignal()', {
      ids
    });
    return sig;
  }
  getAllSignal() {
    const list = this.#list;
    this.log.a(`getAllSignal() - found ${list().length} items`);
    return list;
  }
}

/***/ }),

/***/ 18957:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/input-types/input-field.helpers.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldDefaults: () => (/* binding */ FieldDefaults)
/* harmony export */ });
/* harmony import */ var _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/fields/input-type-catalog */ 4202);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/logging */ 34435);


/**
 * Get the field initial / default value, incl. the prefilled value if available.
 */
class FieldDefaults {
  constructor(name, inputType, settings, itemHeader) {
    this.name = name;
    this.inputType = inputType;
    this.settings = settings;
    this.itemHeader = itemHeader;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_1__.classLog)({
      FieldDefaults
    });
  }
  /** Include itemHeader if you need data from prefill, and set onlyPrefill if you only need parsed prefill */
  getDefaultOrPrefillValue(onlyPrefill) {
    const inputType = this.inputType;
    const name = this.name;
    const settings = this.settings;
    const itemHeader = this.itemHeader;
    const l = this.log.fn('parseDefaultValue', {
      name,
      inputType,
      settings,
      itemHeader,
      onlyPrefill
    });
    const prefillRaw = itemHeader?.Prefill?.[name];
    if (onlyPrefill && prefillRaw === undefined) return l.rNull('only prefill, but no prefill data found');
    let defaultValue = prefillRaw?.toString() ?? settings.DefaultValue;
    l.values({
      defaultValue
    });
    switch (inputType) {
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.BooleanDefault:
        return defaultValue?.toLowerCase() === 'true';
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.BooleanTristate:
        return defaultValue != null && defaultValue !== '' ? defaultValue.toLowerCase() === 'true' : null;
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.DateTimeDefault:
        return defaultValue != null && defaultValue !== '' ? new Date(defaultValue).toJSON() : null;
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.NumberDefault:
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.NumberDropdown:
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.NumberPicker:
        return defaultValue != null && defaultValue !== '' ? !isNaN(Number(defaultValue)) ? Number(defaultValue) : null : null;
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.EntityDefault:
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.EntityQuery:
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.EntityContentBlocks:
      case _shared_fields_input_type_catalog__WEBPACK_IMPORTED_MODULE_0__.InputTypeCatalog.EntityPicker:
        // Empty - return []
        if (defaultValue == null || defaultValue === '') return [];
        // string has { } characters, we must switch them to quotes for parsing below
        // 2024-06-01 2dm not sure why this is an option..., maybe some interim encoding?
        if (defaultValue.includes('{')) defaultValue = defaultValue.replace(/[\{\}]/g, '\"');
        // list but no array, add brackets
        if (defaultValue.includes(',') && !defaultValue.includes('[')) {
          const guids = defaultValue.split(',').map(guid => guid.trim());
          defaultValue = JSON.stringify(guids);
        }
        // Finally parse
        return defaultValue.startsWith('[') // an array with guid strings
        ? JSON.parse(defaultValue) // if it's a string containing an array
        : [defaultValue.replace(/"/g, '')];
      // just a guid string, but might have quotes
      default:
        return defaultValue ?? '';
    }
  }
}

/***/ }),

/***/ 21773:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/fields/page-picker/page-picker.helper.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagePicker: () => (/* binding */ PagePicker)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _page_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-picker.component */ 90557);


class PagePicker {
  static open(config, group, matDialog, viewContainerRef, changeDetectorRef, callback) {
    const dialogData = {
      config,
      group
    };
    const dialogRef = matDialog.open(_page_picker_component__WEBPACK_IMPORTED_MODULE_0__.PagePickerComponent, {
      autoFocus: false,
      data: dialogData,
      viewContainerRef,
      height: '80%',
      width: '650px'
    });
    dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(value => {
      callback(value);
    });
    changeDetectorRef.markForCheck();
  }
}

/***/ }),

/***/ 32093:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/form-language.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormLanguageService: () => (/* binding */ FormLanguageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_rxJs_mapUntilChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/rxJs/mapUntilChanged */ 48021);
/* harmony import */ var _shared_signals_computed_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/signals/computed-cache */ 98503);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ 56606);
/* harmony import */ var _shared_store_signal_store_observable_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/store/signal-store-observable-base */ 89964);
/* harmony import */ var _form_languages_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-languages.model */ 79868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);









const logSpecs = {
  getReader: false,
  getLanguage: false,
  getReaderSignal: false
};
class FormLanguageService extends _shared_store_signal_store_observable_base__WEBPACK_IMPORTED_MODULE_4__.SignalStoreObservableBase {
  constructor() {
    super((0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      FormLanguageService
    }, logSpecs));
    this.getId = item => item.formId;
    this.sanitizeAdd = item => ({
      ..._form_languages_model__WEBPACK_IMPORTED_MODULE_5__.FormLanguage.empty,
      initial: item.current,
      ...item
    });
    this.#entityReaderCache = new _shared_signals_computed_cache__WEBPACK_IMPORTED_MODULE_2__.ComputedCacheHelper('entityReader');
    this.#signalsHideHeaderCache = new _shared_signals_computed_cache__WEBPACK_IMPORTED_MODULE_2__.ComputedCacheHelper('hideHeader');
  }
  addForm(formId, primary, current, hideHeader) {
    this.add({
      formId,
      current,
      initial: current,
      primary,
      hideHeader
    });
  }
  setCurrent(formId, newLanguage) {
    this.update(formId, {
      current: newLanguage
    });
  }
  /**
   * Get an EntityReader for the current form.
   * ATM used in fields settings service.
   *
   * If the form doesn't exist, the reader returned will not have the correct languages specified.
   * This is to avoid errors when the form is not yet loaded or is being unloaded.
   */
  getEntityReader(formId) {
    const l = this.log.fnIf('getReader', {
      formId
    });
    // Place creation of the language signal here to avoid creating it multiple times
    const sig = this.#entityReaderCache.getOrCreateWithInfo(formId, () => {
      const language = this.getSignal(formId)() ?? _form_languages_model__WEBPACK_IMPORTED_MODULE_5__.FormLanguage.empty();
      const l2 = this.log.fnIf('getReaderSignal', {
        language
      });
      return new _shared_helpers__WEBPACK_IMPORTED_MODULE_3__.EntityReader(language);
    });
    return l.rSilent(sig.signal, `isNew: ${sig.isNew}`);
  }
  #entityReaderCache;
  // use in form config service for language$()
  getLanguage$(formId) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(languageInstances => languageInstances[formId]), (0,_shared_rxJs_mapUntilChanged__WEBPACK_IMPORTED_MODULE_1__.mapUntilChanged)(m => m), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
  }
  /** Get hideHeader for the form. Fix for safari and mobile browsers */
  getHideHeaderSignal(formId) {
    return this.#signalsHideHeaderCache.getOrCreate(formId, () => this.cache()[formId]?.hideHeader ?? false);
  }
  #signalsHideHeaderCache;
  /** Update hideHeader for the form. Fix for safari and mobile browsers */
  updateHideHeader(formId, hideHeader) {
    this.update(formId, {
      hideHeader
    });
  }
  static {
    this.ɵfac = function FormLanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FormLanguageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: FormLanguageService,
      factory: FormLanguageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 41573:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/field-mask.helper.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldMask: () => (/* binding */ FieldMask)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/logging */ 34435);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/service-base */ 4979);
/* harmony import */ var _fields_field_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fields/field-state */ 7796);
/* harmony import */ var _form_form_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form/form-config.service */ 8265);






const logSpecs = {
  all: false,
  initSignal: false,
  watchAllFields: true
};
const dataPrefix = 'data';
const FieldsFindNoPrefix = /\[.*?\]/ig;
const FieldsFindPrefix = /\[[a-zA-Z]+\:.*?\]/ig;
const FieldUnwrap = /[\[\]]/ig;
/**
 * Create a new FieldMask instance and access result with resolve
 * @example
 * const mask = new FieldMask("[FirstName]", formGroup.controls);
 * const maskValue = mask.resolve();
 *
 * @param mask a string like "[FirstName] [LastName]"
 * @param model usually FormGroup controls, passed into here
 * @param overloadPreCleanValues a function which will "scrub" the found field-values
 */
class FieldMask extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_1__.ServiceBase {
  #fieldState;
  #formConfig;
  constructor(injector) {
    super();
    this.injector = injector;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      FieldMask
    }, logSpecs);
    this.#fieldState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_fields_field_state__WEBPACK_IMPORTED_MODULE_2__.FieldState);
    this.#formConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_form_form_config_service__WEBPACK_IMPORTED_MODULE_3__.FormConfigService);
    /**
     * The result of the mask as a signal, for external use/subscribing.
     */
    this.result = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)('');
    this.#controls = this.#fieldState.group.controls;
    this.#fieldConfig = this.#fieldState.config;
    this.#requirePrefix = false;
    /**
     * The mask as a signal.
     * This allows us to use a simple value or a possibly runtime-changing mask.
     */
    this.#maskSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(''));
    /**
     * The final mask to use - either picking the signal or the text
     * TODO: we should be able to simplify this to just use a signal
     */
    this.#mask = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => this.#maskSignal()());
    /** Fields used in the mask */
    this.#fieldsUsedInMask = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => this.#extractFieldNames(this.#mask()));
    this.log.a('constructor');
  }
  #controls;
  #fieldConfig;
  #requirePrefix;
  /**
   * The mask as a signal.
   * This allows us to use a simple value or a possibly runtime-changing mask.
   */
  #maskSignal;
  /**
   * The final mask to use - either picking the signal or the text
   * TODO: we should be able to simplify this to just use a signal
   */
  #mask;
  /** Fields used in the mask */
  #fieldsUsedInMask;
  // #fieldValuesSignals = inject(FieldsSettingsService).fieldValues;
  // // TODO create a multi-field signal?
  // public result2 = computed(() => {
  //   // listen to all the fields for changes
  //   this.#fieldsUsedInMask().forEach(field => {
  //   });
  // });
  /**
   * Attach any processing events before the mask is resolved the first time
   */
  initPreClean(overloadPreCleanValues) {
    this.log.a('initPreClean');
    this.preClean = overloadPreCleanValues;
    return this;
  }
  init(name, mask, requirePrefix = false) {
    return this.initSignal(name, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(mask));
  }
  initSignal(name, mask) {
    this.log.extendName(`-${name}`);
    const l = this.log.fnIf('initSignal', {
      name,
      mask
    });
    this.#maskSignal.set(mask);
    this.#updateMaskFinal();
    return l.r(this, 'first result:' + this.result());
  }
  /**
   * Activate an aggressive change logger to debug what's happening.
   * Should only be used in development, as it will log a lot of data to the console.
   */
  logChanges() {
    // use logger, but if not enabled, create new just for this
    const l = this.log.enabled ? this.log : (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      FieldMask
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.effect)(() => l.a(`Mask '${this.#mask()}' value changed to: ${this.result()}`), {
      injector: this.injector
    });
    return this;
  }
  #updateMaskFinal() {
    // bind auto-watch only if needed...
    // otherwise it's just on-demand
    this.#watchAllFields();
    this.#onChange();
  }
  /**
   * Process a mask to the get the final value
   */
  #process() {
    // if no mask, exit early
    if (!hasPlaceholders(this.#mask())) return this.#mask();
    let value = lowercaseInsideSquareBrackets(this.#mask());
    // If we have form info (which we usually do), replace the placeholders
    if (this.#formConfig != null) value = value.replace('[app:appid]', this.#formConfig.config.appId.toString()).replace('[app:zoneid]', this.#formConfig.config.zoneId.toString());
    // If we have field info (which we usually do), replace the placeholders
    if (this.#fieldConfig != null) value = value.replace('[guid]', this.#fieldConfig.entityGuid).replace('[data:guid]', this.#fieldConfig.entityGuid).replace('[id]', this.#fieldConfig.entityId.toString()).replace('[data:id]', this.#fieldConfig.entityId.toString());
    const dataPlaceholders = this.#fieldsUsedInMask().data;
    if (!dataPlaceholders) return value;
    dataPlaceholders.forEach((e, i) => {
      const replaceValue = this.#controls?.[e]?.value ?? '';
      const cleaned = this.preClean(e, replaceValue);
      // New with prefix 'data:'
      value = value.replace('[data:' + e.toLowerCase() + ']', cleaned);
      // Old without prefix - only if allowed (for compatibility)
      value = value.replace('[' + e.toLowerCase() + ']', cleaned);
    });
    return value;
  }
  /** Retrieves a list of all fields used in the mask */
  #extractFieldNames(mask) {
    // exit early if mask very simple or not a mask
    if (!mask || !hasPlaceholders(mask)) return {};
    const matches = mask.match(FieldsFindNoPrefix);
    if (!matches) return {};
    const fields = matches.map(token => token.replace(FieldUnwrap, ''));
    return {
      data: fields
    };
  }
  /**
   * Default preClean function, if no other function was specified for this
   * Will be replaced if need be.
   */
  preClean(key, value) {
    return value;
  }
  /** Change-event - will only fire if it really changes */
  #onChange() {
    const maybeNew = this.#process();
    this.result.set(maybeNew);
  }
  /**
   * Add watcher and execute onChange.
   * Uses observables, since that's what angular provides on valueChanges.
   */
  #watchAllFields() {
    const l = this.log.fnIf('watchAllFields');
    const dataPlaceholders = this.#fieldsUsedInMask().data;
    if (!dataPlaceholders) return l.end('no data placeholders');
    // add a watch for each field in the field-mask
    const controls = dataPlaceholders.map(f => this.#controls[f]).filter(f => f != null);
    if (controls.length == 0) return l.end('no fields to watch');
    controls.forEach(c => this.subscriptions.add(c.valueChanges.subscribe(_ => this.#onChange())));
    l.end();
  }
  static {
    this.ɵfac = function FieldMask_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FieldMask)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: FieldMask,
      factory: FieldMask.ɵfac
    });
  }
}
function hasPlaceholders(mask) {
  return (mask ?? '').includes('[');
}
/** used for query parameters */
function lowercaseInsideSquareBrackets(value) {
  return value.replace(/\[([^\]]+)\]/g, (_, group) => `[${group.toLowerCase()}]`);
}

/***/ }),

/***/ 47314:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/localization/field-reader.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldReader: () => (/* binding */ FieldReader)
/* harmony export */ });
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _form_form_languages_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/form-languages.model */ 79868);
/* harmony import */ var _dimension_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimension-reader */ 89274);



const logSpecs = {
  all: false,
  constructor: false
};
class FieldReader {
  constructor(field, language) {
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      FieldReader
    }, logSpecs);
    this.#noData = true;
    this.log.fnIf('constructor', {
      field,
      language
    });
    this.#field = field;
    this.#language = typeof language === 'string' ? {
      current: language,
      primary: language
    } : language;
    this.#values = field?.Values ?? [];
    this.#noData = !field || !field.Values || field.Values.length === 0;
  }
  #noData;
  #field;
  /** Values - never empty for read-safety */
  #values;
  #language;
  get current() {
    return this.ofLanguage(this.#language); // first match if any is the one we're looking for
  }
  /**
   *
   * Priority:
   * 1. value for current language
   * 2. value for all languages
   * 3. value for default language
   *
   * @readonly
   * @type {EavFieldValue<T>}
   * @memberof FieldReader
   */
  get currentOrDefault() {
    if (this.#noData) return null;
    return this.current
    // note that having both languages primary will also result in checking the '*' dimension
    ?? this.ofLanguage(_form_form_languages_model__WEBPACK_IMPORTED_MODULE_1__.FormLanguage.bothPrimary(this.#language));
  }
  /**
   * Priority:
   * 1. value for current language
   * 2. value for all languages
   * 3. value for default language
   * 4. first/any value in the system
   */
  get currentOrDefaultOrAny() {
    if (this.#noData) return null;
    return this.currentOrDefault ?? this.#values[0] ?? null;
  }
  ofLanguage(language) {
    if (this.#noData) return null;
    return this.#values.filter(val => new _dimension_reader__WEBPACK_IMPORTED_MODULE_2__.DimensionReader(val.dimensions, language).hasCurrent)[0] ?? null;
  }
  /** Check if there is a value on the specified primary language or on the '*' dimension */
  get hasPrimary() {
    if (this.#noData) return false;
    const primary = this.#language.primary;
    return this.#values.filter(val => val.dimensions.find(d => d.dimCode === primary || d.dimCode === '*')).length > 0;
  }
  get hasCurrentReadonly() {
    if (this.#noData) return false;
    return this.#values.filter(val => new _dimension_reader__WEBPACK_IMPORTED_MODULE_2__.DimensionReader(val.dimensions, this.#language).hasCurrentReadOnly).length > 0;
  }
  /** A value in specified Language is editable, if assigned to current language or to '*' (but only when on default-language) */
  get hasEditableValues() {
    if (this.#noData) return false;
    return this.#valuesEditableOf().length > 0;
  }
  /** Number of editable translatable fields that */
  countEditable() {
    return this.#valuesEditableOf().length;
  }
  /** Number of editable translatable fields that have some content (not empty/null) */
  countEditableWithContents() {
    return this.#valuesEditableOf().filter(v => v.value != "" && v.value != null)?.length;
  }
  /**
   * Values of a field are for the current language,
   * if they are assigned to the current language or to '*' (but only when the current-language is also the primary-language)
   */
  #valuesEditableOf(language) {
    if (this.#noData) return [];
    language ??= this.#language;
    return this.#values.filter(val => new _dimension_reader__WEBPACK_IMPORTED_MODULE_2__.DimensionReader(val.dimensions, language).hasCurrentWrite);
  }
  /** Value of current language which is editable. `null` if not found. */
  get currentEditable() {
    if (this.#noData) return null;
    const dimension = this.#language.current;
    return this.#values.find(v => v.dimensions.find(x => x.dimCode === dimension)) ?? null;
  }
  isEditableOrReadonlyTranslationExist() {
    if (this.#noData) return false;
    return this.#valuesEditableOf().length > 0;
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

/***/ 56606:
/*!**************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeSettingsHelpers: () => (/* reexport safe */ _state_fields_settings_helpers__WEBPACK_IMPORTED_MODULE_1__.ContentTypeSettingsHelpers),
/* harmony export */   EntityReader: () => (/* reexport safe */ _entity_reader__WEBPACK_IMPORTED_MODULE_2__.EntityReader),
/* harmony export */   FieldDefaults: () => (/* reexport safe */ _input_types_input_field_helpers__WEBPACK_IMPORTED_MODULE_4__.FieldDefaults),
/* harmony export */   FieldMask: () => (/* reexport safe */ _field_mask_helper__WEBPACK_IMPORTED_MODULE_0__.FieldMask),
/* harmony export */   FileTypeHelpers: () => (/* reexport safe */ _adam_file_type_helpers__WEBPACK_IMPORTED_MODULE_3__.FileTypeHelpers),
/* harmony export */   PagePicker: () => (/* reexport safe */ _fields_page_picker_page_picker_helper__WEBPACK_IMPORTED_MODULE_5__.PagePicker),
/* harmony export */   SanitizeHelper: () => (/* reexport safe */ _sanitize_helper__WEBPACK_IMPORTED_MODULE_6__.SanitizeHelper),
/* harmony export */   UrlHelpers: () => (/* reexport safe */ _url_helpers__WEBPACK_IMPORTED_MODULE_7__.UrlHelpers)
/* harmony export */ });
/* harmony import */ var _field_mask_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-mask.helper */ 41573);
/* harmony import */ var _state_fields_settings_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/fields-settings.helpers */ 71592);
/* harmony import */ var _entity_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity-reader */ 95443);
/* harmony import */ var _adam_file_type_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adam/file-type.helpers */ 67044);
/* harmony import */ var _input_types_input_field_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-types/input-field.helpers */ 18957);
/* harmony import */ var _fields_page_picker_page_picker_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fields/page-picker/page-picker.helper */ 21773);
/* harmony import */ var _sanitize_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sanitize.helper */ 62457);
/* harmony import */ var _url_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url.helpers */ 73412);









/***/ }),

/***/ 62457:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/sanitize.helper.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SanitizeHelper: () => (/* binding */ SanitizeHelper)
/* harmony export */ });
class SanitizeHelper {
  static removeFromStart(sanitized, charToRemove) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    while (sanitized.substring(0, 1) === charToRemove) {
      sanitized = sanitized.substring(1);
    }
    return sanitized;
  }
  static removeFromEnd(sanitized, charToRemove) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    while (sanitized.substring(sanitized.length - 1, sanitized.length) === charToRemove) {
      sanitized = sanitized.substring(0, sanitized.length - 1);
    }
    return sanitized;
  }
  static cleanBadPath(sanitized) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    const goodChar = '_';
    const illegalRe = /[\?<>\\:\*\|":]/g;
    const controlRe = /[\x00-\x1f\x80-\x9f]/g;
    const reservedRe = /^\.+$/;
    const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
    const windowsTrailingRe = /[\. ]+$/;
    return sanitized.replace(illegalRe, goodChar).replace(controlRe, goodChar).replace(reservedRe, goodChar).replace(windowsReservedRe, goodChar).replace(windowsTrailingRe, goodChar);
  }
  // sanitize path
  static sanitizePath(sanitized) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    // remove slashes form start of path
    sanitized = this.removeFromStart(sanitized, '\/');
    // remove slashed form end of path
    sanitized = this.removeFromEnd(sanitized, '\/');
    // remove backslashes form start of path
    sanitized = this.removeFromStart(sanitized, '\\');
    // remove backslashes form end of path
    sanitized = this.removeFromEnd(sanitized, '\\');
    // replace bad
    sanitized = this.cleanBadPath(sanitized);
    return sanitized;
  }
  // sanitize file or folder name
  static sanitizeName(sanitized) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    // in addition to all path validation rules
    // slashes are not valid in file or folder name
    const replacement = '_';
    const illegalRe = /\//g;
    return this.sanitizePath(sanitized).replace(illegalRe, replacement);
  }
}

/***/ }),

/***/ 67044:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/adam/file-type.helpers.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileTypeHelpers: () => (/* binding */ FileTypeHelpers)
/* harmony export */ });
class FileTypeHelpers {
  static {
    this.defaultIcon = 'file';
  }
  static {
    this.customExtensions = {
      doc: 'file-word',
      docx: 'file-word',
      xls: 'file-excel',
      xlsx: 'file-excel',
      ppt: 'file-powerpoint',
      pptx: 'file-powerpoint',
      pdf: 'file-pdf',
      mp3: 'file-audio',
      avi: 'file-video',
      mpg: 'file-video',
      mpeg: 'file-video',
      mov: 'file-video',
      mp4: 'file-video',
      zip: 'file-archive',
      rar: 'file-archive',
      txt: 'file-text',
      html: 'file-code',
      css: 'file-code',
      xml: 'file-code',
      xsl: 'file-code'
    };
  }
  static {
    this.matExtensions = {
      vcf: 'person'
    };
  }
  static getExtension(filename) {
    return filename.substring(filename.lastIndexOf('.') + 1).toLocaleLowerCase();
  }
  static getIconClass(filename) {
    const ext = this.getExtension(filename);
    return this.matExtensions[ext] || this.customExtensions[ext] || this.defaultIcon;
  }
  static isKnownType(filename) {
    return this.matExtensions[this.getExtension(filename)] != null;
  }
  static isImage(filename) {
    return this.isImgRegex().test(filename);
  }
  static isImgRegex() {
    return /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:jpg|jpeg|gif|png|webp))(?:\?([^#]*))?(?:#(.*))?/i;
  }
}

/***/ }),

/***/ 71592:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/state/fields-settings.helpers.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeSettingsHelpers: () => (/* binding */ ContentTypeSettingsHelpers)
/* harmony export */ });
/* harmony import */ var _localization_field_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localization/field-reader */ 47314);

class ContentTypeSettingsHelpers {
  /**
   * Initialize the default settings of a ContentType to ensure everything is set or empty-string etc.
   * @returns
   */
  static getDefaultSettings(reader, contentType, itemHeader) {
    const metadata = reader.flatten(contentType.Metadata);
    const defaultSettings = {
      ...metadata
    };
    defaultSettings.Description ??= '';
    defaultSettings.EditInstructions ??= '';
    defaultSettings.Features ??= '';
    defaultSettings.Label ??= '';
    defaultSettings.ListInstructions ??= '';
    defaultSettings.Notes ??= '';
    defaultSettings.Icon ??= '';
    defaultSettings.Link ??= '';
    defaultSettings._itemTitle = this.getTitle(contentType, reader);
    defaultSettings._slotCanBeEmpty = itemHeader.IsEmptyAllowed ?? false;
    defaultSettings._slotIsEmpty = itemHeader.IsEmpty ?? false;
    return defaultSettings;
  }
  static getTitle(contentType, language) {
    try {
      // xx ContentType is a historic bug and should be fixed when JSONs are rechecked
      const type = contentType.Metadata.find(metadata => metadata.Type.Name === 'ContentType' || metadata.Type.Name === 'xx ContentType');
      let label = type ? new _localization_field_reader__WEBPACK_IMPORTED_MODULE_0__.FieldReader(type.Attributes.Label, language).currentOrDefault?.value : null;
      label = label || contentType.Name;
      return label;
    } catch (error) {
      return contentType.Name;
    }
  }
}

/***/ }),

/***/ 79868:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/form-languages.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormLanguage: () => (/* binding */ FormLanguage),
/* harmony export */   FormLanguageComplete: () => (/* binding */ FormLanguageComplete)
/* harmony export */ });
class FormLanguage {
  /**
   * In some cases we want both to be primary, but it's not clear why.
   * I think it's just because we want certain tests to only use one value, but the test is meant for 2 values.
   */
  static bothPrimary(original) {
    return {
      current: original.primary,
      primary: original.primary
    };
  }
  static diffCurrent(original, current) {
    return {
      current: current,
      primary: original.primary
    };
  }
  static empty() {
    return {
      current: '',
      primary: '',
      initial: ''
    };
  }
}
class FormLanguageComplete extends FormLanguage {}

/***/ }),

/***/ 89274:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/localization/dimension-reader.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DimensionReader: () => (/* binding */ DimensionReader)
/* harmony export */ });
class DimensionReader {
  constructor(dimensions, language) {
    this.dimensions = dimensions;
    this.language = language;
  }
  get hasCurrentWrite() {
    const match = this.dimensions.find(d => d.dimCode === this.language.current || this.language.current === this.language.primary && d.dimCode === '*');
    return !!match;
  }
  get hasCurrentReadOnly() {
    const currentRO = `~${this.language.current}`;
    return this.dimensions.find(d => d.dimCode === currentRO) !== undefined;
  }
  get hasCurrent() {
    const match = this.dimensions.find(d => d.dimCode === this.language.current || d.dimCode === `~${this.language.current}` || this.language.current === this.language.primary && d.dimCode === '*');
    return !!match;
  }
}

/***/ }),

/***/ 89964:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/signal-store-observable-base.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignalStoreObservableBase: () => (/* binding */ SignalStoreObservableBase)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _signal_store_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signal-store-base */ 16632);
/* harmony import */ var _shared_rxJs_mapUntilChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/rxJs/mapUntilChanged */ 48021);



class SignalStoreObservableBase extends _signal_store_base__WEBPACK_IMPORTED_MODULE_0__.SignalStoreBase {
  /** Old / existing functionality with observables */
  #cache$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toObservable)(this.cache);
  #list$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toObservable)(this.list);
  // publish only as a read-only signal
  get cache$() {
    return this.#cache$;
  }
  get list$() {
    return this.#list$;
  }
  getList$() {
    return this.list$;
  }
  getMany$(ids) {
    return this.cache$.pipe((0,_shared_rxJs_mapUntilChanged__WEBPACK_IMPORTED_MODULE_1__.mapUntilChanged)(obj => ids.map(id => obj[id]).filter(m => m != null)));
  }
}

/***/ }),

/***/ 90557:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/fields/page-picker/page-picker.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagePickerComponent: () => (/* binding */ PagePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/array.helpers */ 4981);
/* harmony import */ var _shared_services_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/query.service */ 54839);
/* harmony import */ var _page_picker_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-picker.helpers */ 91620);




















const _c0 = a0 => ({
  page: a0
});
function PagePickerComponent_Conditional_12_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function PagePickerComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PagePickerComponent_Conditional_12_For_2_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const pageAndChildren_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", pageAndChildren_r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, page_r2));
  }
}
function PagePickerComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, PagePickerComponent_Conditional_12_For_2_Template, 1, 4, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r3.tree());
  }
}
function PagePickerComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No results");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function PagePickerComponent_Conditional_13_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", page_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", page_r6.path, "\u00A0>\u00A0");
  }
}
function PagePickerComponent_Conditional_13_For_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PagePickerComponent_Conditional_13_For_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PagePickerComponent_Conditional_13_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PagePickerComponent_Conditional_13_For_3_Template_div_click_3_listener() {
      const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.select(page_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PagePickerComponent_Conditional_13_For_3_Conditional_6_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PagePickerComponent_Conditional_13_For_3_Conditional_10_Template, 2, 0, "mat-icon", 18)(11, PagePickerComponent_Conditional_13_For_3_Conditional_11_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", page_r6.id === ctx_r3.selected ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](page_r6.path ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", page_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!page_r6.isNavigation ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!page_r6.isClickable ? 11 : -1);
  }
}
function PagePickerComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PagePickerComponent_Conditional_13_Conditional_1_Template, 5, 0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](2, PagePickerComponent_Conditional_13_For_3_Template, 12, 6, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.filteredSearch().length === 0 ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r3.filteredSearch());
  }
}
function PagePickerComponent_ng_template_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 11);
  }
}
function PagePickerComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PagePickerComponent_ng_template_14_Conditional_3_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const page_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().page;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggle(page_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().page;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.toggled.includes(page_r9.id) ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
  }
}
function PagePickerComponent_ng_template_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PagePickerComponent_ng_template_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PagePickerComponent_ng_template_14_Conditional_12_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function PagePickerComponent_ng_template_14_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PagePickerComponent_ng_template_14_Conditional_12_For_2_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const child_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    const pageAndChildren_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", pageAndChildren_r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, child_r10));
  }
}
function PagePickerComponent_ng_template_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, PagePickerComponent_ng_template_14_Conditional_12_For_2_Template, 1, 4, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().page;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](page_r9.children);
  }
}
function PagePickerComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PagePickerComponent_ng_template_14_Conditional_2_Template, 1, 0, "div", 11)(3, PagePickerComponent_ng_template_14_Conditional_3_Template, 2, 1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PagePickerComponent_ng_template_14_Template_div_click_4_listener() {
      const page_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).page;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.select(page_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PagePickerComponent_ng_template_14_Conditional_10_Template, 2, 0, "mat-icon", 18)(11, PagePickerComponent_ng_template_14_Conditional_11_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PagePickerComponent_ng_template_14_Conditional_12_Template, 3, 0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r9 = ctx.page;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](page_r9.children.length === 0 ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](page_r9.children.length > 0 ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", page_r9.id === ctx_r3.selected ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!page_r9.isVisible ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!page_r9.isClickable ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](page_r9.children.length > 0 && ctx_r3.toggled.includes(page_r9.id) ? 12 : -1);
  }
}
class PagePickerComponent {
  constructor(dialogData, dialog, translate) {
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.translate = translate;
    this.filterText = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)('');
    this.searchItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)([]);
    this.tree = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)([]);
    this.filteredSearch = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => {
      const filterText = this.filterText();
      const searchItems = this.searchItems();
      return searchItems.filter(item => item.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));
    });
    this.queryService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_query_service__WEBPACK_IMPORTED_MODULE_3__.QueryService);
  }
  ngOnInit() {
    this.selected = this.parseSelectedPageId();
    this.toggled = [];
    this.fetchPages();
  }
  setFilter(filterText) {
    this.filterText.set(filterText);
  }
  select(page) {
    // filters out pages without parent (broken)
    if (page.id == null) return;
    if (!page.isClickable || !page.isNavigation) {
      const ok = window.confirm(this.translate.instant('Fields.Hyperlink.PagePicker.HiddenOrSystemPageWarning'));
      if (!ok) return;
    }
    this.closeDialog(page.id);
  }
  toggle(pageId) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(pageId, this.toggled);
  }
  closeDialog(pageId) {
    if (pageId == null) {
      this.dialog.close();
      return;
    }
    const page = this.searchItems().find(i => i.id === pageId);
    const result = {
      id: page.id.toString(),
      name: page.name
    };
    this.dialog.close(result);
  }
  fetchPages() {
    const stream = 'Default';
    const params = 'includehidden=true';
    this.queryService.getFromQuery(`System.Pages/Default`, params, null).subscribe({
      next: data => {
        if (!data) {
          console.error(this.translate.instant('Fields.Picker.QueryErrorNoData'));
          return;
        }
        if (!data[stream]) {
          console.error(this.translate.instant('Fields.Picker.QueryStreamNotFound') + ' ' + stream);
          return;
        }
        const pages = data[stream];
        const searchItems = (0,_page_picker_helpers__WEBPACK_IMPORTED_MODULE_4__.buildPageSearch)(pages);
        this.searchItems.set(searchItems);
        const tree = (0,_page_picker_helpers__WEBPACK_IMPORTED_MODULE_4__.buildPageTree)(pages);
        this.tree.set(tree);
      },
      error: error => {
        console.error(error);
        console.error(`${this.translate.instant('Fields.Picker.QueryError')} - ${error.data}`);
      }
    });
  }
  parseSelectedPageId() {
    const prefix = 'page:';
    let fieldValue = this.dialogData.group.controls[this.dialogData.config.fieldName].value;
    if (typeof fieldValue !== 'string') return;
    fieldValue = fieldValue.trim().toLocaleLowerCase();
    if (!fieldValue.startsWith(prefix)) return;
    try {
      const id = parseInt(fieldValue.split(prefix)[1], 10);
      return id;
    } catch {
      return;
    }
  }
  static {
    this.ɵfac = function PagePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PagePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PagePickerComponent,
      selectors: [["app-page-picker"]],
      decls: 17,
      vars: 6,
      consts: [["pageAndChildren", ""], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], [1, "page-search-box"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", 3, "ngModelChange", "ngModel"], [1, "page-tree-box"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-row"], [1, "no-toggle"], [1, "page-label", 3, "click", "ngClass"], [1, "page-icon-and-text"], ["svgIcon", "file", 1, "page-icon"], [1, "page-path", 3, "tippy"], [1, "page-name", 3, "tippy"], [1, "page-icons"], [1, "page-visible-clickable-icon"], [1, "page-toggle"], [1, "page-toggle", 3, "click"]],
      template: function PagePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "mat-form-field", 6)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PagePickerComponent_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.setFilter($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PagePickerComponent_Conditional_12_Template, 3, 0, "ul")(13, PagePickerComponent_Conditional_13_Template, 4, 1, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PagePickerComponent_ng_template_14_Template, 13, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "mat-dialog-actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "Fields.Hyperlink.PagePicker.Title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filterText());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.filterText() ? 12 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.filterText() ? 13 : -1);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      styles: [".page-picker-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.page-search-box[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 40%;\n}\n\n.page-tree-box[_ngcontent-%COMP%] {\n  height: 82%;\n  max-width: 100%;\n  overflow: auto;\n}\n.page-tree-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 8px;\n  margin: 0;\n}\n.page-tree-box[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.page-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.page-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n\n.no-toggle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  flex-shrink: 0;\n}\n\n.page-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.page-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  flex-shrink: 0;\n}\n\n.page-visible-clickable-icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  flex-shrink: 0;\n}\n\n.page-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px;\n  padding-left: 2px;\n  border-radius: 4px;\n  width: 100%;\n}\n.page-label[_ngcontent-%COMP%]   .page-icon-and-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.page-label[_ngcontent-%COMP%]   .page-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.page-label[_ngcontent-%COMP%]   .page-path[_ngcontent-%COMP%] {\n  color: #a2a7b1;\n  text-overflow: ellipsis;\n  max-width: 270px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 0.5em;\n}\n.page-label[_ngcontent-%COMP%]   .page-name[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  max-width: 225px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.page-label[_ngcontent-%COMP%]:hover {\n  background-color: #06599a;\n  color: #fff;\n}\n.page-label[_ngcontent-%COMP%]:hover   .page-path[_ngcontent-%COMP%] {\n  color: #c7cad0;\n}\n.page-label.selected[_ngcontent-%COMP%] {\n  background-color: #002753;\n  color: #fff;\n}\n.page-label.selected[_ngcontent-%COMP%]   .page-path[_ngcontent-%COMP%] {\n  color: #c7cad0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsU0FBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFIRjtBQUtFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFISjtBQU1FO0VBQ0UsZUFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFMRjtBQU9FO0VBQ0UsV0FqQ1E7RUFrQ1IsWUFsQ1E7RUFtQ1IsZUFuQ1E7QUE4Qlo7O0FBU0E7RUFDRSxXQXhDVTtFQXlDVixZQXpDVTtFQTBDVixxQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTkY7QUFRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBTko7QUFVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBVEo7QUFZRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVko7QUFhRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQVhKO0FBYUk7RUFDRSxjQUFBO0FBWE47QUFlRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQWJKO0FBZUk7RUFDRSxjQUFBO0FBYk4iLCJmaWxlIjoicGFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlcy90aGVtZS9tYXRlcmlhbC1jb2xvcnNcIjtcclxuXHJcbiRpY29uLXNpemU6IDIwcHg7XHJcblxyXG4ucGFnZS1waWNrZXItdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnBhZ2Utc2VhcmNoLWJveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4ucGFnZS10cmVlLWJveCB7XHJcbiAgaGVpZ2h0OiA4MiU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gID51bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAkaWNvbi1zaXplO1xyXG4gICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xyXG4gICAgZm9udC1zaXplOiAkaWNvbi1zaXplO1xyXG4gIH1cclxufVxyXG5cclxuLm5vLXRvZ2dsZSB7XHJcbiAgd2lkdGg6ICRpY29uLXNpemU7XHJcbiAgaGVpZ2h0OiAkaWNvbi1zaXplO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnBhZ2UtdG9nZ2xlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5wYWdlLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ucGFnZS12aXNpYmxlLWNsaWNrYWJsZS1pY29uIHtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ucGFnZS1sYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnBhZ2UtaWNvbi1hbmQtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgfVxyXG5cclxuICAucGFnZS1pY29ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAucGFnZS1wYXRoIHtcclxuICAgIGNvbG9yOiBtYXBfZ2V0KCRtYXQtZWF2LWl0ZW0tZGlhbG9nLWJhY2tncm91bmQsIDIwMCk7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogMjcwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2UtbmFtZSB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogMjI1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkbWF0LWVhdi1pdGVtLWRpYWxvZy1zZWNvbmRhcnksIDMwMCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAucGFnZS1wYXRoIHtcclxuICAgICAgY29sb3I6IG1hcF9nZXQoJG1hdC1lYXYtaXRlbS1kaWFsb2ctYmFja2dyb3VuZCwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkbWF0LWVhdi1pdGVtLWRpYWxvZy1zZWNvbmRhcnksIDUwMCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAucGFnZS1wYXRoIHtcclxuICAgICAgY29sb3I6IG1hcF9nZXQoJG1hdC1lYXYtaXRlbS1kaWFsb2ctYmFja2dyb3VuZCwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZmllbGRzL3BhZ2UtcGlja2VyL3BhZ2UtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsU0FBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFIRjtBQUtFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFISjtBQU1FO0VBQ0UsZUFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFMRjtBQU9FO0VBQ0UsV0FqQ1E7RUFrQ1IsWUFsQ1E7RUFtQ1IsZUFuQ1E7QUE4Qlo7O0FBU0E7RUFDRSxXQXhDVTtFQXlDVixZQXpDVTtFQTBDVixxQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTkY7QUFRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBTko7QUFVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBVEo7QUFZRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVko7QUFhRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQVhKO0FBYUk7RUFDRSxjQUFBO0FBWE47QUFlRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQWJKO0FBZUk7RUFDRSxjQUFBO0FBYk47QUFDQSw0dElBQTR0SSIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3RoZW1lL21hdGVyaWFsLWNvbG9yc1wiO1xyXG5cclxuJGljb24tc2l6ZTogMjBweDtcclxuXHJcbi5wYWdlLXBpY2tlci10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGFnZS1zZWFyY2gtYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5wYWdlLXRyZWUtYm94IHtcclxuICBoZWlnaHQ6IDgyJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgPnVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgd2lkdGg6ICRpY29uLXNpemU7XHJcbiAgICBoZWlnaHQ6ICRpY29uLXNpemU7XHJcbiAgICBmb250LXNpemU6ICRpY29uLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tdG9nZ2xlIHtcclxuICB3aWR0aDogJGljb24tc2l6ZTtcclxuICBoZWlnaHQ6ICRpY29uLXNpemU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ucGFnZS10b2dnbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnBhZ2UtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5wYWdlLXZpc2libGUtY2xpY2thYmxlLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5wYWdlLWxhYmVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAucGFnZS1pY29uLWFuZC10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICB9XHJcblxyXG4gIC5wYWdlLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC5wYWdlLXBhdGgge1xyXG4gICAgY29sb3I6IG1hcF9nZXQoJG1hdC1lYXYtaXRlbS1kaWFsb2ctYmFja2dyb3VuZCwgMjAwKTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWF4LXdpZHRoOiAyNzBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbiAgfVxyXG5cclxuICAucGFnZS1uYW1lIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRtYXQtZWF2LWl0ZW0tZGlhbG9nLXNlY29uZGFyeSwgMzAwKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC5wYWdlLXBhdGgge1xyXG4gICAgICBjb2xvcjogbWFwX2dldCgkbWF0LWVhdi1pdGVtLWRpYWxvZy1iYWNrZ3JvdW5kLCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRtYXQtZWF2LWl0ZW0tZGlhbG9nLXNlY29uZGFyeSwgNTAwKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC5wYWdlLXBhdGgge1xyXG4gICAgICBjb2xvcjogbWFwX2dldCgkbWF0LWVhdi1pdGVtLWRpYWxvZy1iYWNrZ3JvdW5kLCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 91620:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/fields/page-picker/page-picker.helpers.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPageSearch: () => (/* binding */ buildPageSearch),
/* harmony export */   buildPageTree: () => (/* binding */ buildPageTree)
/* harmony export */ });
function buildPageSearch(pages) {
  if (!pages) {
    return [];
  }
  const items = pages.map(page => {
    let path = page.Path.trim().replace(/\\/g, '/').replace(/\/\//g, '/');
    if (path.startsWith('/')) {
      path = path.substring(1);
    }
    path = path.split('/').slice(0, -1).join(' > ');
    const item = {
      id: page.Id,
      name: page.Name,
      path,
      isNavigation: page.IsNavigation,
      isClickable: page.IsClickable
    };
    return item;
  });
  return items;
}
function buildPageTree(pages) {
  if (!pages) {
    return [];
  }
  const items = pages.map(page => {
    const item = {
      children: [],
      id: page.Id,
      name: page.Name,
      parentId: page.ParentId,
      isNavigation: page.IsNavigation,
      isClickable: page.IsClickable
    };
    return item;
  });
  const tree = [];
  for (const item of items) {
    if (item.parentId === -1) {
      tree.push(item);
      continue;
    }
    const parent = items.find(i => i.id === item.parentId);
    if (!parent) {
      tree.push(item);
    } else {
      parent.children.push(item);
    }
  }
  return tree;
}

/***/ }),

/***/ 95443:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/entity-reader.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityReader: () => (/* binding */ EntityReader)
/* harmony export */ });
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/logging */ 34435);
/* harmony import */ var _localization_field_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../localization/field-reader */ 47314);


const logSpecs = {
  all: false,
  constructor: false
};
class EntityReader {
  constructor(current, primary) {
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      EntityReader
    }, logSpecs);
    this.log.fnIf('constructor', {
      current,
      primary
    });
    if (typeof current === 'string') {
      this.current = current;
      this.primary = primary;
    } else {
      this.current = current.current;
      this.primary = current.primary;
    }
  }
  // WIP - to make code clearer, this is what should be used from now on
  // But we'll probably end up calling this from the EntityReader only, so it should be straight forward
  getBestValue(attributeValues, defaultValue = null) {
    const fieldReader = new _localization_field_reader__WEBPACK_IMPORTED_MODULE_1__.FieldReader(attributeValues, this);
    return fieldReader.currentOrDefaultOrAny?.value ?? defaultValue;
    // return LocalizationHelpers.translate<T>(this, attributeValues as EavField<T>, defaultValue);
  }
  flatten(metadata) {
    if (metadata == null) return {};
    const metadataItems = Array.isArray(metadata) ? metadata : [metadata];
    if (metadataItems.length === 0 || metadataItems[0] == null) return {};
    const merged = {};
    // copy metadata settings which are not @All
    for (const item of metadataItems) {
      if (item.Type.Id === '@All') continue;
      for (const [name, values] of Object.entries(item.Attributes)) {
        const value = this.getBestValue(values);
        merged[name] = value;
      }
    }
    // copy @All metadata settings, overwriting previous settings
    for (const item of metadataItems) {
      if (item.Type.Id !== '@All') continue;
      for (const [name, values] of Object.entries(item.Attributes)) {
        const value = this.getBestValue(values);
        // do not overwrite previous settings if @All is empty
        const exists = merged[name] != null;
        const emptyAll = value == null || value === '';
        if (exists && emptyAll) continue;
        merged[name] = value;
      }
    }
    return merged;
  }
  currentValues(itemAttributes) {
    const formValues = Object.entries(itemAttributes).reduce((acc, [name, values]) => {
      acc[name] = this.getBestValue(values);
      return acc;
    }, {});
    return formValues;
  }
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_edit_form_form-config_service_ts-projects_eav-ui_src_app_edit-b26668.js.map