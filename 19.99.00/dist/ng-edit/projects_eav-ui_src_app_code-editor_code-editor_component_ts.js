"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_code-editor_code-editor_component_ts"],{

/***/ 5699:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/services/snippets.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetsService: () => (/* binding */ SnippetsService),
/* harmony export */   inlineHelp: () => (/* binding */ inlineHelp)
/* harmony export */ });
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/cloneDeep */ 85237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/fields/content-types-fields.service */ 75959);
/* harmony import */ var _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/fields/data-type-catalog */ 1726);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90852);








const inlineHelp = 'admin/Code/InlineHelp';
class SnippetsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  constructor(translate) {
    super();
    this.translate = translate;
  }
  getTooltips(language) {
    return this.getHttpApiUrl(inlineHelp, {
      params: {
        language
      }
    });
  }
  getSnippets(view) {
    return this.getHttp('../ng-assets/snippets.json.js').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      const relevant = this.filterAwayNotNeededSnippetsList(res.snippets, view);
      const standardAndInputSnips = this.extractInputTypeSnippets(relevant);
      const sets = this.initSnippetsWithConfig(standardAndInputSnips.standardArray, view, standardAndInputSnips.inputTypeSnippets);
      const sorted = {
        list: standardAndInputSnips.standardArray,
        sets
      };
      return sorted;
    }));
  }
  /** Scan the list for sets starting with @ or [ and filter if not needed right now */
  filterAwayNotNeededSnippetsList(list, view) {
    const keyPrefixes = ['@', '['];
    const keyPrefixIndex = v => v.Type.indexOf('Razor') > -1 ? 0 : 1;
    const newList = [];
    for (const itm of list) {
      const setHasPrefix = keyPrefixes.indexOf(itm.set[0]);
      if (setHasPrefix === -1 || setHasPrefix === keyPrefixIndex(view)) {
        // if necessary, remove first char
        if (setHasPrefix === keyPrefixIndex(view)) {
          itm.set = itm.set.substring(1);
        }
        newList.push(itm);
      }
    }
    return newList;
  }
  extractInputTypeSnippets(list) {
    const standardArray = [];
    const inputTypeArray = [];
    for (const itm of list) {
      const systemSnippet = itm.set[0] === '\\';
      if (!systemSnippet) {
        standardArray.push(itm);
      } else {
        itm.set = itm.set.substring(1);
        inputTypeArray.push(itm);
      }
    }
    const inputTypeSnippets = this.catalogInputTypeSnippets(inputTypeArray);
    const extracted = {
      standardArray,
      inputTypeSnippets
    };
    return extracted;
  }
  catalogInputTypeSnippets(list) {
    const inputTypeList = {};
    for (const itm of list) {
      if (inputTypeList[itm.subset] === undefined) {
        inputTypeList[itm.subset] = [];
      }
      inputTypeList[itm.subset].push(itm);
    }
    return inputTypeList;
  }
  initSnippetsWithConfig(standardArray, templateConfiguration, inputTypeSnippets) {
    const sets = this.makeTree(standardArray);
    // retrieve all relevant content-types and infos
    sets.Content = Object.assign({}, sets.Content, {
      Fields: {},
      PresentationFields: {}
    });
    if (templateConfiguration.TypeContent) {
      this.loadContentType(sets.Content.Fields, templateConfiguration.TypeContent, 'Content', templateConfiguration, inputTypeSnippets);
    }
    if (templateConfiguration.TypeContentPresentation) {
      this.loadContentType(sets.Content.PresentationFields, templateConfiguration.TypeContentPresentation, 'Content.Presentation', templateConfiguration, inputTypeSnippets);
    }
    if (templateConfiguration.HasList) {
      sets.List = Object.assign({}, sets.List, {
        Fields: {},
        PresentationFields: {}
      });
      if (templateConfiguration.TypeList) {
        this.loadContentType(sets.List.Fields, templateConfiguration.TypeList, 'Header', templateConfiguration, inputTypeSnippets);
      }
      if (templateConfiguration.TypeListPresentation) {
        this.loadContentType(sets.List.PresentationFields, templateConfiguration.TypeListPresentation, 'Header.Presentation', templateConfiguration, inputTypeSnippets);
      }
    } else {
      delete sets.List;
    }
    // maybe App-infos
    if (templateConfiguration.HasApp) {
      sets.App.Resources = {};
      sets.App.Settings = {};
      this.loadContentType(sets.App.Resources, 'App-Resources', 'App.Resources', templateConfiguration, inputTypeSnippets);
      this.loadContentType(sets.App.Settings, 'App-Settings', 'App.Settings', templateConfiguration, inputTypeSnippets);
    }
    return sets;
  }
  /** Convert the list into a tree with set/subset/item */
  makeTree(list) {
    const tree = {};
    for (const o of list) {
      if (tree[o.set] === undefined) {
        tree[o.set] = {};
      }
      if (tree[o.set][o.subset] === undefined) {
        tree[o.set][o.subset] = [];
      }
      const reformatted = {
        key: o.name,
        label: this.label(o.set, o.subset, o.name),
        snip: o.content,
        help: o.help || this.help(o.set, o.subset, o.name),
        links: this.linksList(o.links)
      };
      tree[o.set][o.subset].push(reformatted);
    }
    return tree;
  }
  label(set, subset, snip) {
    const key = this.getHelpKey(set, subset, snip, '.Key');
    let result = this.translate.instant(key);
    if (result === key) {
      result = snip;
    }
    return result;
  }
  getHelpKey(set, subset, snip, addition) {
    return 'SourceEditorSnippets' + '.' + set + '.' + subset + '.' + snip + addition;
  }
  help(set, subset, snip) {
    const key = this.getHelpKey(set, subset, snip, '.Help');
    let result = this.translate.instant(key);
    if (result === key) {
      result = '';
    }
    return result;
  }
  linksList(linksString) {
    if (!linksString) {
      return null;
    }
    const links = [];
    const llist = linksString.split('\n');
    for (const l of llist) {
      const pair = l.split(':');
      if (pair.length === 3) {
        const link = {
          name: pair[0].trim(),
          url: pair[1].trim() + ':' + pair[2].trim()
        };
        links.push(link);
      }
    }
    if (links.length === 0) {
      return null;
    }
    return links;
  }
  /** spm TODO: this happens after snippets are calculated for the first time. Needs to be fixed */
  loadContentType(target, type, prefix, templateConfiguration, inputTypeSnippets) {
    this.getFields(templateConfiguration.AppId, type).subscribe(fields => {
      // first add common items if the content-type actually exists
      for (const field of fields) {
        const fieldname = field.StaticName;
        target[fieldname] = {
          key: fieldname,
          label: fieldname,
          snip: this.valuePlaceholder(prefix, fieldname, templateConfiguration),
          help: field.Metadata.merged.Notes || ' (' + field.Type.toLowerCase() + ') '
        };
        // try to add generic snippets specific to this input-type
        const snipDefaults = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_4__["default"])(target[fieldname]); // must be a copy, because target[fieldname] will grow
        this.attachSnippets(target, prefix, fieldname, field.InputType, snipDefaults, inputTypeSnippets);
      }
      if (fields.length) {
        const std = ['EntityId', 'EntityTitle', 'EntityGuid', 'EntityType', 'IsPublished', 'Modified'];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < std.length; i++) {
          target[std[i]] = {
            key: std[i],
            label: std[i],
            snip: this.valuePlaceholder(prefix, std[i], templateConfiguration),
            help: this.translate.instant('SourceEditorSnippets.StandardFields.' + std[i] + '.Help')
          };
        }
      }
    });
  }
  valuePlaceholder(obj, val, templateConfiguration) {
    return templateConfiguration.Type.indexOf('Razor') > -1 ? '@' + obj + '.' + val : '[' + obj.replace('.', ':') + ':' + val + ']';
  }
  getFields(appId, staticName) {
    return this.getHttpApiUrl(_shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__.webApiFieldsAll, {
      params: {
        appid: appId.toString(),
        staticName
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(fields => {
      fields = fields.filter(field => field.Type !== _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_1__.DataTypeCatalog.Empty);
      for (const fld of fields) {
        if (!fld.Metadata) continue;
        const md = fld.Metadata;
        const allMd = md.All;
        const typeMd = md[fld.Type];
        const inputMd = md[fld.InputType];
        md.merged = {
          ...allMd,
          ...typeMd,
          ...inputMd
        };
      }
      return fields;
    }));
  }
  attachSnippets(target, prefix, fieldname, inputType, snipDefaults, inputTypeSnippets) {
    let genericSnippet = inputTypeSnippets[inputType];
    if (inputType.indexOf('-')) {
      // if it's a sub-type, let's also get the master-type
      const fieldType = inputType.substring(0, inputType.indexOf('-'));
      if (fieldType) {
        const typeSnips = inputTypeSnippets[fieldType];
        if (typeSnips) {
          genericSnippet = genericSnippet ? genericSnippet.concat(typeSnips) : typeSnips;
        }
      }
    }
    if (!genericSnippet) return;
    if (target[fieldname].more === undefined) {
      target[fieldname].more = {};
    }
    const fieldSnips = target[fieldname].more;
    // tslint:disable-next-line:prefer-for-of
    for (let g = 0; g < genericSnippet.length; g++) {
      try {
        fieldSnips[fieldname + '-' + genericSnippet[g].name] = Object.assign({}, snipDefaults, {
          key: fieldname + ' - ' + genericSnippet[g].name,
          label: genericSnippet[g].name,
          snip: this.localizeGenericSnippet(genericSnippet[g].content, prefix, fieldname),
          collapse: true
        });
      } finally {}
    }
  }
  localizeGenericSnippet(snip, objName, fieldName) {
    snip = snip.replace(/(\$\{[0-9]+\:)var(\})/gi, '$1' + objName + '$2').replace(/(\$\{[0-9]+\:)prop(\})/gi, '$1' + fieldName + '$2');
    return snip;
  }
  static {
    this.ɵfac = function SnippetsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SnippetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: SnippetsService,
      factory: SnippetsService.ɵfac
    });
  }
}

/***/ }),

/***/ 7652:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/code-templates.models.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appSharedRoot: () => (/* binding */ appSharedRoot)
/* harmony export */ });
const appSharedRoot = '';

/***/ }),

/***/ 11561:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/code-templates.helpers.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTreeAppShared: () => (/* binding */ calculateTreeAppShared)
/* harmony export */ });
/* harmony import */ var _code_templates_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-templates.models */ 7652);

function calculateTreeAppShared(templates) {
  const tree = [{
    depth: -1,
    name: 'App Files',
    pathFromRoot: _code_templates_models__WEBPACK_IMPORTED_MODULE_0__.appSharedRoot,
    isShared: false,
    isFolder: true,
    children: calculateTree(templates.filter(f => !f.Shared))
  }, {
    depth: -1,
    name: 'Shared App Files',
    pathFromRoot: _code_templates_models__WEBPACK_IMPORTED_MODULE_0__.appSharedRoot,
    isShared: true,
    isFolder: true,
    children: calculateTree(templates.filter(f => f.Shared))
  }];
  return tree;
}
function calculateTree(templates) {
  if (!templates) {
    return [];
  }
  const tree = [];
  for (const template of templates) {
    let parent = tree;
    const paths = template.Path.split('/');
    const last = paths[paths.length - 1];
    let pathFromRoot = '';
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      pathFromRoot += i ? `/${path}` : path;
      const existing = parent.find(item => item.name === path);
      if (existing) {
        parent = existing.children;
      } else {
        const item = {
          depth: i,
          name: path,
          pathFromRoot,
          isShared: template.Shared,
          isFolder: path !== last,
          ...(path !== last && {
            children: []
          })
        };
        parent.push(item);
        parent = item.children;
      }
    }
  }
  return tree;
}

/***/ }),

/***/ 14584:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-editor-translate-loader-factory.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translateLoaderFactoryCode: () => (/* binding */ translateLoaderFactoryCode)
/* harmony export */ });
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/translation */ 86021);

function translateLoaderFactoryCode(http) {
  return new _shared_translation__WEBPACK_IMPORTED_MODULE_0__.TranslateLoaderWithErrorHandling(http, './i18n/code-editor.', `.js?${window.sxcVersion}`);
}

/***/ }),

/***/ 25838:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/monaco-editor/monaco-editor.models.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 27024:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/order-items.pipe.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortItemsPipe: () => (/* binding */ SortItemsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/** Sorts folders before files */
class SortItemsPipe {
  transform(items) {
    if (items == null) {
      return items;
    }
    items.sort((item1, item2) => {
      if (item1.isFolder < item2.isFolder) {
        return 1;
      } else if (item1.isFolder > item2.isFolder) {
        return -1;
      } else {
        return 0;
      }
    });
    return items;
  }
  static {
    this.ɵfac = function SortItemsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SortItemsPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "sortItems",
      type: SortItemsPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 29935:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-snippets/code-snippets.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeSnippetsComponent: () => (/* binding */ CodeSnippetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/array.helpers */ 4981);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _object_to_array_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object-to-array.pipe */ 59573);














function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_4_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleMore(snippet_r7.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.toggledMores.includes(snippet_r7.key) ? "more_vert" : "more_horiz", " ");
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", link_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](link_r9.name);
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](3, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_7_For_4_Template, 3, 2, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, snippet_r7.help), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](snippet_r7.links);
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_For_1_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", link_r12.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](link_r12.name);
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](3, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_For_1_Conditional_6_For_4_Template, 3, 2, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const more_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, more_r11.help), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](more_r11.links);
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_For_1_Template_div_click_2_listener() {
      const more_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.addSnippet(more_r11.snip));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_For_1_Template_mat_icon_click_4_listener() {
      const more_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleInfo(more_r11.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_For_1_Conditional_6_Template, 5, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const more_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", more_r11.snip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", more_r11.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.toggledInfos.includes(more_r11.key) ? 6 : -1);
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_For_1_Template, 7, 3, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "objectToArray");
  }
  if (rf & 2) {
    const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 0, snippet_r7.more));
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Template_div_click_2_listener() {
      const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.addSnippet(snippet_r7.snip));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_4_Template, 2, 1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Template_mat_icon_click_5_listener() {
      const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleInfo(snippet_r7.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_7_Template, 5, 3, "div", 8)(8, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Conditional_8_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", snippet_r7.snip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", snippet_r7.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](snippet_r7.more ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.toggledInfos.includes(snippet_r7.key) ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.toggledMores.includes(snippet_r7.key) ? 8 : -1);
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_For_1_Template, 9, 5, "div", 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "objectToArray");
  }
  if (rf & 2) {
    const folder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 0, folder_r5.value));
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_7_For_1_Template_div_click_1_listener() {
      const folder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleFolder(folder_r5.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CodeSnippetsComponent_For_2_Conditional_7_For_1_Conditional_7_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const folder_r5 = ctx.$implicit;
    const section_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippyTranslate", "SourceEditorSnippets." + section_r2.key + "." + folder_r5.key + ".Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.toggledFolders.includes(folder_r5.key) ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, "SourceEditorSnippets." + section_r2.key + "." + folder_r5.key + ".Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.toggledFolders.includes(folder_r5.key) ? 7 : -1);
  }
}
function CodeSnippetsComponent_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, CodeSnippetsComponent_For_2_Conditional_7_For_1_Template, 8, 6, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "keyvalue");
  }
  if (rf & 2) {
    const section_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 0, section_r2.value));
  }
}
function CodeSnippetsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Template_div_click_1_listener() {
      const section_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleSection(section_r2.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CodeSnippetsComponent_For_2_Conditional_7_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippyTranslate", "SourceEditorSnippets." + section_r2.key + ".Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.toggledSections.includes(section_r2.key) ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, "SourceEditorSnippets." + section_r2.key + ".Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.toggledSections.includes(section_r2.key) ? 7 : -1);
  }
}
class CodeSnippetsComponent {
  constructor() {
    this.snippets = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.input)();
    this.insertSnippet = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.output)();
    this.toggledSections = [];
    this.toggledFolders = [];
    this.toggledInfos = [];
    this.toggledMores = [];
  }
  addSnippet(snippet) {
    this.insertSnippet.emit(snippet);
  }
  toggleSection(key) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(key, this.toggledSections);
  }
  toggleFolder(key) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(key, this.toggledFolders);
  }
  toggleInfo(key) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(key, this.toggledInfos);
  }
  toggleMore(key) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(key, this.toggledMores);
  }
  static {
    this.ɵfac = function CodeSnippetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CodeSnippetsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CodeSnippetsComponent,
      selectors: [["app-code-snippets"]],
      inputs: {
        snippets: [1, "snippets"]
      },
      outputs: {
        insertSnippet: "insertSnippet"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "editor-active-explorer", "fancy-scrollbar-dark"], ["tippyShowDelay", "750", 1, "collapsible-header", "section", 3, "click", "tippyTranslate"], ["tippyShowDelay", "750", 1, "collapsible-header", "folder", 3, "click", "tippyTranslate"], [1, "snippet"], [1, "snippet-label"], ["matRipple", "", "tippyShowDelay", "750", 1, "text", 3, "click", "tippy"], ["tippy", "Show More", "tippyShowDelay", "750"], ["tippy", "Show Help", "tippyShowDelay", "750", "appClickStopPropagation", "", 3, "click"], [1, "snippet-help"], ["tippy", "Show More", "tippyShowDelay", "750", 3, "click"], [1, "text", 3, "innerHTML"], ["target", "_blank", 3, "href"], ["matRipple", "", "tippyShowDelay", "750", 1, "text", "text-more", 3, "click", "tippy"], [1, "snippet-help", "snippet-help-more"]],
      template: function CodeSnippetsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, CodeSnippetsComponent_For_2_Template, 8, 6, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 0, ctx.snippets()));
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _object_to_array_pipe__WEBPACK_IMPORTED_MODULE_4__.ObjectToArrayPipe, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_0__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SafeHtmlPipe],
      styles: [".collapsible-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 3px 0;\n}\n.collapsible-header.section[_ngcontent-%COMP%] {\n  background-color: rgb(56, 56, 56);\n  font-weight: 500;\n}\n.collapsible-header.folder[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.collapsible-header.folder[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.collapsible-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n\n.snippet[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n.snippet[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.snippet-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.snippet-label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 0 3px 32px;\n  flex: 1 1 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.snippet-label[_ngcontent-%COMP%]   .text-more[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.snippet-label[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.snippet-help[_ngcontent-%COMP%] {\n  padding: 3px 18px 3px 32px;\n}\n.snippet-help-more[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: oblique;\n  word-break: break-word;\n}\n.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]     p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtc25pcHBldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjtBQUVJO0VBQ0UsaUNBQUE7QUFBTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBS0U7RUFDRSxpQ0FBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFKSjtBQU1JO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpOO0FBTU07RUFDRSxrQkFBQTtBQUpSO0FBUUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTk47QUFVRTtFQUNFLDBCQUFBO0FBUko7QUFVSTtFQUNFLGtCQUFBO0FBUk47QUFXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBVE47QUFXTTtFQUNFLFNBQUE7QUFUUiIsImZpbGUiOiJjb2RlLXNuaXBwZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxhcHNpYmxlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcGFkZGluZzogM3B4IDA7XHJcblxyXG4gICYuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgJi5mb2xkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDUsIDQ2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5zbmlwcGV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0NSwgNDYpO1xyXG4gIH1cclxuXHJcbiAgJi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAzcHggMCAzcHggMzJweDtcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgJi1tb3JlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtaGVscCB7XHJcbiAgICBwYWRkaW5nOiAzcHggMThweCAzcHggMzJweDtcclxuXHJcbiAgICAmLW1vcmUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICAgICA6Om5nLWRlZXAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtc25pcHBldHMvY29kZS1zbmlwcGV0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxpQ0FBQTtBQUFOO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7QUFLRTtFQUNFLGlDQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSk47QUFNTTtFQUNFLGtCQUFBO0FBSlI7QUFRSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOTjtBQVVFO0VBQ0UsMEJBQUE7QUFSSjtBQVVJO0VBQ0Usa0JBQUE7QUFSTjtBQVdJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFUTjtBQVdNO0VBQ0UsU0FBQTtBQVRSO0FBR0EsdzNGQUF3M0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGFwc2libGUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuXHJcbiAgJi5zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmLmZvbGRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0NSwgNDYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNuaXBwZXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQ1LCA0Nik7XHJcbiAgfVxyXG5cclxuICAmLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAwIDNweCAzMnB4O1xyXG4gICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAmLW1vcmUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1oZWxwIHtcclxuICAgIHBhZGRpbmc6IDNweCAxOHB4IDNweCAzMnB4O1xyXG5cclxuICAgICYtbW9yZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHJcbiAgICAgIDo6bmctZGVlcCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 30692:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/depth-padding.pipe.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepthPaddingPipe: () => (/* binding */ DepthPaddingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);



class DepthPaddingPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(depth, isFolder) {
    let padding;
    if (isFolder) {
      padding = depth * 8;
    } else {
      padding = depth === 0 ? 8 : depth * 8 + 16;
    }
    return this.sanitizer.bypassSecurityTrustStyle(`padding-left: ${padding}px;`);
  }
  static {
    this.ɵfac = function DepthPaddingPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DepthPaddingPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "depthPadding",
      type: DepthPaddingPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 41915:
/*!********************************************************!*\
  !*** ./projects/eav-ui/src/app/monaco-editor/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonacoEditorComponent: () => (/* reexport safe */ _monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__.MonacoEditorComponent)
/* harmony export */ });
/* harmony import */ var _monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monaco-editor.component */ 96581);
/* harmony import */ var _monaco_editor_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monaco-editor.models */ 25838);


// export * from './monaco-editor.module';

/***/ }),

/***/ 45134:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-editor.models.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Explorers: () => (/* binding */ Explorers)
/* harmony export */ });
const Explorers = {
  Templates: 'Templates',
  Snippets: 'Snippets'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 58163:
/*!****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/code-templates.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeTemplatesComponent: () => (/* binding */ CodeTemplatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/array.helpers */ 4981);
/* harmony import */ var _code_templates_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-templates.helpers */ 11561);
/* harmony import */ var _code_templates_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-templates.models */ 7652);
/* harmony import */ var _depth_padding_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./depth-padding.pipe */ 30692);
/* harmony import */ var _order_items_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-items.pipe */ 27024);
















const _c0 = a0 => ({
  item: a0
});
const _c1 = a0 => ({
  "active": a0
});
const _c2 = a0 => ({
  "app-shared-root": a0
});
function CodeTemplatesComponent_For_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
function CodeTemplatesComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CodeTemplatesComponent_For_3_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const fileOrFolder_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", fileOrFolder_r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, item_r2));
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "depthPadding");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_ng_template_5_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.openTemplate(item_r5.pathFromRoot, item_r5.isShared));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 5, item_r5.depth, item_r5.isFolder));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c1, ctx_r5.isToggled(item_r5.pathFromRoot, item_r5.isShared)))("tippy", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_For_1_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const item1_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const fileOrFolder_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", fileOrFolder_r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, item1_r8));
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](0, CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_For_1_Template, 1, 4, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "sortItems");
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 0, item_r5.children));
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "depthPadding");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_ng_template_5_Conditional_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.toggleItem(item_r5.pathFromRoot, item_r5.isShared));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 10)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_ng_template_5_Conditional_1_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.addFile(item_r5.pathFromRoot, item_r5.isShared));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 7, item_r5.depth + 1, item_r5.isFolder));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c2, item_r5.depth < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tippy", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.isToggled(item_r5.pathFromRoot, item_r5.isShared) ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r5.isToggled(item_r5.pathFromRoot, item_r5.isShared) ? 11 : -1);
  }
}
function CodeTemplatesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CodeTemplatesComponent_ng_template_5_Conditional_0_Template, 3, 10, "div", 7)(1, CodeTemplatesComponent_ng_template_5_Conditional_1_Template, 12, 12, "div");
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!item_r5.isFolder ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](item_r5.isFolder ? 1 : -1);
  }
}
class CodeTemplatesComponent {
  constructor() {
    this.view = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.input)();
    this.templates = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.input)();
    this.openView = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.output)();
    this.createTemplate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.output)();
    this.toggledItemsApp = [];
    this.toggledItemsShared = [];
  }
  ngOnChanges(changes) {
    if (changes.templates != null) {
      this.tree = (0,_code_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.calculateTreeAppShared)(this.templates());
    }
    if (changes.view != null) {
      const previousView = changes.view?.previousValue;
      if (previousView) {
        this.toggleItem(previousView.FileName, previousView.IsShared);
      }
      if (this.view()) {
        this.showFileInTree(this.view().FileName, this.view().IsShared);
      }
    }
  }
  isToggled(path, isShared) {
    const toggledItems = isShared ? this.toggledItemsShared : this.toggledItemsApp;
    return toggledItems.includes(path);
  }
  openTemplate(path, isShared) {
    const viewKey = {
      key: path,
      shared: isShared
    };
    this.openView.emit(viewKey);
  }
  toggleItem(path, isShared) {
    const toggledItems = isShared ? this.toggledItemsShared : this.toggledItemsApp;
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(path, toggledItems);
  }
  addFile(folder, isShared) {
    const params = {
      folder,
      isShared
    };
    this.createTemplate.emit(params);
  }
  showFileInTree(file, isShared) {
    if (file == null) return;
    const toggledItems = isShared ? this.toggledItemsShared : this.toggledItemsApp;
    if (toggledItems.includes(file)) return;
    const paths = [_code_templates_models__WEBPACK_IMPORTED_MODULE_4__.appSharedRoot, ...file.split('/')];
    let pathFromRoot = '';
    for (const path of paths) {
      pathFromRoot = !pathFromRoot ? path : `${pathFromRoot}/${path}`;
      if (toggledItems.includes(pathFromRoot)) continue;
      this.toggleItem(pathFromRoot, isShared);
    }
  }
  static {
    this.ɵfac = function CodeTemplatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CodeTemplatesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: CodeTemplatesComponent,
      selectors: [["app-code-templates"]],
      inputs: {
        view: [1, "view"],
        templates: [1, "templates"]
      },
      outputs: {
        openView: "openView",
        createTemplate: "createTemplate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
      decls: 19,
      vars: 3,
      consts: [["fileOrFolder", ""], ["menu", "matMenu"], [1, "editor-active-explorer", "fancy-scrollbar-dark", "explorer-wrapper"], [1, "create-button-wrapper"], ["mat-icon-button", "", "tippy", "Create file", "tippyPlacement", "left", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tippyShowDelay", "750", 1, "file", 3, "style", "ngClass", "tippy"], ["tippyShowDelay", "750", 1, "file", 3, "click", "ngClass", "tippy"], [1, "folder-name-wrapper", 3, "click", "ngClass"], ["tippyShowDelay", "750", 1, "folder-name", 3, "tippy"], ["tippy", "Create file in this folder", "tippyShowDelay", "750", "appClickStopPropagation", "", 1, "add-item", 3, "click"]],
      template: function CodeTemplatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](2, CodeTemplatesComponent_For_3_Template, 1, 4, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "sortItems");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CodeTemplatesComponent_ng_template_5_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3)(8, "button", 4)(9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-menu", null, 1)(13, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.addFile("", false));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "App");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.addFile("", true));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Shared (global)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const menu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, ctx.tree));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", menu_r9);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _depth_padding_pipe__WEBPACK_IMPORTED_MODULE_5__.DepthPaddingPipe, _order_items_pipe__WEBPACK_IMPORTED_MODULE_6__.SortItemsPipe, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_0__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      styles: [".explorer-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.create-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.file[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 0 4px 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.file[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.file.active[_ngcontent-%COMP%] {\n  background-color: rgb(55, 55, 61);\n}\n\n.folder-name-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  align-items: center;\n}\n.folder-name-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.folder-name-wrapper[_ngcontent-%COMP%]   .folder-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 3px 0;\n  flex: 1 1 auto;\n}\n.folder-name-wrapper[_ngcontent-%COMP%]   .add-item[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n}\n.folder-name-wrapper.app-shared-root[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n}\n.folder-name-wrapper[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.folder-name-wrapper[_ngcontent-%COMP%]:hover   .add-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQ0FBQTtBQUNKO0FBRUU7RUFDRSxpQ0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9FO0VBQ0UsaUNBQUE7QUFMSjtBQU9JO0VBQ0UsYUFBQTtBQUxOIiwiZmlsZSI6ImNvZGUtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGxvcmVyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jcmVhdGUtYnV0dG9uLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZpbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA0cHggMCA0cHggOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQ1LCA0Nik7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDU1LCA2MSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9sZGVyLW5hbWUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvbGRlci1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1pdGVtIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcblxyXG4gICYuYXBwLXNoYXJlZC1yb290IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDUsIDQ2KTtcclxuXHJcbiAgICAuYWRkLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtdGVtcGxhdGVzL2NvZGUtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQ0FBQTtBQUNKO0FBRUU7RUFDRSxpQ0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9FO0VBQ0UsaUNBQUE7QUFMSjtBQU9JO0VBQ0UsYUFBQTtBQUxOO0FBR0Esd2tGQUF3a0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwbG9yZXItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNyZWF0ZS1idXR0b24td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmlsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweCAwIDRweCA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDUsIDQ2KTtcclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNTUsIDYxKTtcclxuICB9XHJcbn1cclxuXHJcbi5mb2xkZXItbmFtZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuZm9sZGVyLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuICAuYWRkLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gIH1cclxuXHJcbiAgJi5hcHAtc2hhcmVkLXJvb3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0NSwgNDYpO1xyXG5cclxuICAgIC5hZGQtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 59525:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-editor.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeEditorComponent: () => (/* binding */ CodeEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _create_file_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-file-dialog */ 76068);
/* harmony import */ var _edit_dialog_main_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/dialog/main/keyboard-shortcuts */ 32760);
/* harmony import */ var _monaco_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../monaco-editor */ 41915);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../monaco-editor/monaco-editor.component */ 96581);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/base.component */ 43176);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/directives/toggle-debug.directive */ 95699);
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/context */ 68873);
/* harmony import */ var _code_and_edition_warnings_code_and_edition_warnings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./code-and-edition-warnings/code-and-edition-warnings.component */ 61435);
/* harmony import */ var _code_editor_translate_loader_factory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./code-editor-translate-loader-factory */ 14584);
/* harmony import */ var _code_editor_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./code-editor.models */ 45134);
/* harmony import */ var _code_snippets_code_snippets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./code-snippets/code-snippets.component */ 29935);
/* harmony import */ var _code_templates_code_templates_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./code-templates/code-templates.component */ 58163);
/* harmony import */ var _services_snippets_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/snippets.service */ 5699);
/* harmony import */ var _services_source_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/source.service */ 79996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 12587);







































const _c0 = a0 => ({
  "sxc-dark": a0
});
const _c1 = a0 => ({
  "active": a0
});
const _c2 = (a0, a1, a2) => ({
  "active": a0,
  "modified": a1,
  "loading": a2
});
function CodeEditorComponent_Conditional_11_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CodeEditorComponent_Conditional_11_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CodeEditorComponent_Conditional_11_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "mat-spinner", 17);
  }
}
function CodeEditorComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CodeEditorComponent_Conditional_11_For_2_Template_div_click_0_listener() {
      const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r2.openView(tab_r2.viewKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, CodeEditorComponent_Conditional_11_For_2_Conditional_2_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, CodeEditorComponent_Conditional_11_For_2_Conditional_6_Template, 2, 0, "mat-icon", 16)(7, CodeEditorComponent_Conditional_11_For_2_Conditional_7_Template, 1, 0, "mat-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CodeEditorComponent_Conditional_11_For_2_Template_mat_icon_click_8_listener() {
      const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r2.closeEditor(tab_r2.viewKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction3"](6, _c2, tab_r2.isActive, tab_r2.isModified, tab_r2.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("tippy", tab_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](tab_r2.viewKey.shared ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](tab_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](tab_r2.isModified ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](tab_r2.isLoading ? 7 : -1);
  }
}
function CodeEditorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrepeaterCreate"](1, CodeEditorComponent_Conditional_11_For_2_Template, 10, 10, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrepeater"](ctx_r2.tabs());
  }
}
function CodeEditorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-monaco-editor", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("valueChanged", function CodeEditorComponent_Conditional_12_Template_app_monaco_editor_valueChanged_0_listener($event) {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r2.codeChanged($event, (tmp_2_0 = ctx_r2.active()) == null ? null : tmp_2_0.viewKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("filename", (tmp_1_0 = ctx_r2.active()) == null ? null : tmp_1_0.view.FileName)("value", (tmp_2_0 = ctx_r2.active()) == null ? null : tmp_2_0.view.Code)("options", ctx_r2.monacoOptions)("snippets", (tmp_4_0 = ctx_r2.active()) == null ? null : tmp_4_0.editorSnipps)("tooltips", (tmp_5_0 = ctx_r2.active()) == null ? null : tmp_5_0.tooltips)("autoFocus", true);
  }
}
function CodeEditorComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CodeEditorComponent_Conditional_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r2.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
class CodeEditorComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__.BaseComponent {
  #sourceSvc;
  #snippetSvc;
  #titleSvc;
  #openViews;
  #viewInfos;
  #urlItems;
  constructor(context, route, snackBar, zone, matDialog, viewContainerRef) {
    super();
    this.context = context;
    this.route = route;
    this.snackBar = snackBar;
    this.zone = zone;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.Explorers = _code_editor_models__WEBPACK_IMPORTED_MODULE_14__.Explorers;
    this.activeExplorer = _code_editor_models__WEBPACK_IMPORTED_MODULE_14__.Explorers.Templates;
    this.monacoOptions = {
      theme: '2sxc-dark',
      tabSize: 2,
      fixedOverflowWidgets: true
    };
    this.#sourceSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_source_service__WEBPACK_IMPORTED_MODULE_18__.SourceService);
    this.#snippetSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_snippets_service__WEBPACK_IMPORTED_MODULE_17__.SnippetsService);
    this.#titleSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.Title);
    this.templates = (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.signal)([]);
    this.activeView = (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.signal)(undefined);
    this.#openViews = (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.signal)([]);
    this.#viewInfos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.signal)([]);
    // Computed signal that finds the active view information from the list of viewInfos.
    // It checks if the activeView signal matches any viewKey in the viewInfos list using objectsEqual.
    this.active = (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.computed)(() => {
      const activeView = this.activeView();
      return this.#viewInfos().find(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, activeView));
    });
    // Each tab object includes the viewKey, label (file name or key), active state,
    // modified state (if the view's code differs from the saved code), and loading state.
    // It checks for matching view information in viewInfos using objectsEqual.
    this.tabs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.computed)(() => {
      const openViews = this.#openViews();
      const activeView = this.activeView();
      const viewInfos = this.#viewInfos();
      return openViews.map(viewKey => {
        const viewInfo = viewInfos.find(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, viewKey));
        return {
          viewKey,
          label: viewInfo?.view?.FileName ?? viewKey.key,
          isActive: _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(viewKey, activeView),
          isModified: viewInfo?.view?.Code !== viewInfo?.savedCode,
          isLoading: viewInfo?.view == null
        };
      });
    });
    this.context.init(this.route);
    const codeItems = JSON.parse(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__.keyItems));
    const isShared = (sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__.keyIsShared) ?? 'false') === 'true';
    codeItems.forEach(codeItem => {
      // remove leading "/" from path
      if (codeItem.Path.startsWith('/')) {
        codeItem.Path = codeItem.Path.substring(1);
      }
      codeItem.IsShared ??= isShared;
    });
    this.#urlItems = codeItems;
    // Update ViewInfo$ ongoing
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.effect)(() => {
      const templates = this.templates();
      const openViews = this.#openViews();
      // If there are no templates, exit early
      if (templates.length === 0) return;
      let viewInfos = this.#viewInfos(); // Retrieve the current viewInfos signal
      // Find the `openViews` that are not yet loaded in `viewInfos`
      const notLoaded = openViews.filter(viewKey => !viewInfos.some(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, viewKey)));
      // If all openViews are loaded, exit early
      if (notLoaded.length === 0) return;
      // Start data requests for the not yet loaded `openViews`
      (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.forkJoin)(notLoaded.map(viewKey => {
        // Mark the `viewKey` in `viewInfos` to indicate that it is being loaded
        const newViewInfo = {
          viewKey
        };
        viewInfos = [...viewInfos, newViewInfo];
        // Create observables for the view, snippets, and tooltips based on the viewKey
        const view$ = this.#sourceSvc.get(viewKey.key, viewKey.shared, this.#urlItems).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.share)());
        const snippets$ = view$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.switchMap)(view => this.#snippetSvc.getSnippets(view)));
        const tooltips$ = view$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.switchMap)(view => this.#snippetSvc.getTooltips(view.Extension.substring(1))));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)(viewKey), view$, snippets$, tooltips$]);
      })).subscribe(results => {
        let viewInfos1 = this.#viewInfos(); // Retrieve the current viewInfos signal again
        results.forEach(([viewKey, view, snippets, tooltips]) => {
          // Find the index of the corresponding viewKey in the current viewInfos
          const selectedIndex = viewInfos1.findIndex(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, viewKey));
          // If the viewKey is not found, exit early
          if (selectedIndex < 0) return;
          // Update `viewInfos` with new data for the corresponding `viewKey`
          const newViewInfo = {
            viewKey,
            view,
            explorerSnipps: snippets.sets,
            editorSnipps: snippets.list,
            tooltips,
            savedCode: view.Code
          };
          viewInfos1 = [...viewInfos1.slice(0, selectedIndex), newViewInfo, ...viewInfos1.slice(selectedIndex + 1)];
          // Show warnings or other logic based on the loaded views
          this.#showCodeAndEditionWarnings(viewKey, view, templates);
        });
        this.#viewInfos.set(viewInfos1); // Set the new `viewInfos` in the signal
      });
      this.#viewInfos.set(viewInfos); // Set the initial `viewInfos` before loading the data
    });
    // Update title ongoing
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.effect)(() => {
      const activeView = this.activeView();
      const viewInfos = this.#viewInfos();
      // Check if viewInfos exist; exit early if not
      if (!viewInfos) return;
      // Find the active view information from viewInfos based on activeView
      const active = viewInfos.find(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, activeView));
      const defaultTitle = 'Code Editor'; // Default title to use if no active view is found
      // Construct the new title based on the active view or use the default title
      const newTitle = active == null ? defaultTitle : `${active.view?.FileName} - ${defaultTitle}`;
      const oldTitle = this.#titleSvc.getTitle(); // Get the current title from the title service
      // If the new title is different from the old title, update it
      if (newTitle !== oldTitle) {
        console.log('newTitle', newTitle); // Log the new title
        this.#titleSvc.setTitle(newTitle); // Set the new title in the title service
      }
    });
  }
  ngOnInit() {
    const initialViews = this.#urlItems.map(item => {
      const viewKey = {
        key: item.EntityId?.toString() ?? item.Path,
        shared: item.IsShared
      };
      return viewKey;
    });
    this.activeView.set(initialViews[0]);
    this.#openViews.set(initialViews);
    this.#attachListeners();
    // Load templates
    this.#sourceSvc.getAll().subscribe(templates => {
      this.templates.set(templates);
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  toggleExplorer(explorer) {
    this.activeExplorer = this.activeExplorer !== explorer ? explorer : null;
  }
  createTemplate(params) {
    // This FileLocationDialogComponent dialog is currently never going to be opened because it has been replaced by mat-menu
    // in the code-templates.component.html template. If you want to use the dialog instead of the menu, you need to remove the
    // mat-menu and replace it with a button that opens the dialog with empty parameters.
    // Dialog has been replaced by menu because from update to Angular 16 CreateFileDialogComponent wasn't opening anymore if
    // FileLocationDialogComponent dialog was used.
    // if (params.isShared == null) {
    //   const fileLocationDialogRef = this.dialog.open(FileLocationDialogComponent, {
    //     autoFocus: false,
    //     viewContainerRef: this.viewContainerRef,
    //     width: '650px',
    //   });
    //   fileLocationDialogRef.afterClosed().subscribe((isShared?: boolean) => {
    //     if (isShared == null) return;
    //     params.isShared = isShared;
    //     this.createTemplate(params);
    //   });
    //   return;
    // }
    const createFileDialogData = {
      folder: params.folder,
      global: params.isShared,
      purpose: params.folder === 'api' || params.folder?.startsWith('api/') ? 'Api' : undefined
    };
    const createFileDialogRef = this.matDialog.open(_create_file_dialog__WEBPACK_IMPORTED_MODULE_1__.CreateFileDialogComponent, {
      autoFocus: false,
      data: createFileDialogData,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    createFileDialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.#sourceSvc.create(result.name, params.isShared, result.templateKey).subscribe(() => {
        this.#sourceSvc.getAll().subscribe(files => {
          this.templates.set(files);
        });
      });
    });
  }
  insertSnippet(snippet) {
    this.monacoEditorRef?.insertSnippet(snippet);
  }
  codeChanged(code, viewKey) {
    let viewInfos = this.#viewInfos();
    const selectedIndex = viewInfos.findIndex(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, viewKey));
    const selectedViewInfo = viewInfos[selectedIndex];
    const newViewInfo = {
      ...selectedViewInfo,
      view: {
        ...selectedViewInfo.view,
        Code: code
      }
    };
    viewInfos = [...viewInfos.slice(0, selectedIndex), newViewInfo, ...viewInfos.slice(selectedIndex + 1)];
    this.#viewInfos.set(viewInfos);
  }
  openView(viewKey) {
    // fix viewKey because it can be a templateId or a path, and file might already be open
    viewKey = this.#viewInfos().find(v => !_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, viewKey) && v.view?.FileName === viewKey.key && v.view?.IsShared === viewKey.shared)?.viewKey ?? viewKey;
    const oldActiveView = this.activeView();
    if (!_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(oldActiveView, viewKey)) {
      this.activeView.set(viewKey);
    }
    const oldOpenViews = this.#openViews();
    if (!oldOpenViews.some(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v, viewKey))) {
      const newOpenViews = [...oldOpenViews, viewKey];
      this.#openViews.set(newOpenViews);
    }
  }
  closeEditor(viewKey) {
    const oldOpenViews = this.#openViews();
    const newOpenViews = oldOpenViews.filter(key => !_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(key, viewKey));
    const oldActiveView = this.activeView();
    if (_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(oldActiveView, viewKey)) {
      const newActiveView = oldOpenViews[oldOpenViews.findIndex(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v, oldActiveView)) - 1] ?? newOpenViews[0];
      this.activeView.set(newActiveView);
    }
    this.#openViews.set(newOpenViews);
  }
  save(viewKey) {
    viewKey ??= this.activeView();
    const viewInfo = this.#viewInfos().find(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, viewKey));
    if (viewInfo?.view == null) return;
    this.snackBar.open('Saving...');
    const codeToSave = viewInfo.view.Code;
    this.#sourceSvc.save(viewKey.key, viewKey.shared, viewInfo.view, this.#urlItems).subscribe({
      next: res => {
        if (!res) {
          this.snackBar.open('Failed', null, {
            duration: 2000
          });
          return;
        }
        let newViewInfos = [...this.#viewInfos()];
        const selectedIndex = newViewInfos.findIndex(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual(v.viewKey, viewKey));
        if (selectedIndex < 0) return;
        const selectedViewInfo = newViewInfos[selectedIndex];
        const newViewInfo = {
          ...selectedViewInfo,
          savedCode: codeToSave
        };
        newViewInfos = [...newViewInfos.slice(0, selectedIndex), newViewInfo, ...newViewInfos.slice(selectedIndex + 1)];
        this.#viewInfos.set(newViewInfos);
        this.snackBar.open('Saved', null, {
          duration: 2000
        });
      },
      error: () => this.snackBar.open('Failed', null, {
        duration: 2000
      })
    });
  }
  /** Show info about editions if other files with the same name exist */
  #showCodeAndEditionWarnings(viewKey, view, files) {
    const pathAndName = view.FileName;
    const pathSeparator = pathAndName.indexOf('/') > -1 ? pathAndName.lastIndexOf('/') + 1 : 0;
    const pathWithSlash = pathSeparator === 0 ? '' : pathAndName.substring(0, pathSeparator);
    const fullName = pathAndName.substring(pathSeparator);
    const name = fullName.substring(0, fullName.length - view.Extension.length);
    const nameCode = name + '.code' + view.Extension;
    // find out if we also have a code file
    const codeFile = files.find(file => file.Path === pathWithSlash + nameCode && file.Shared === view.IsShared);
    const otherEditions = files.filter(file => file.Path.endsWith(fullName) && file.Shared === view.IsShared).length - 1;
    if (codeFile || otherEditions) {
      const snackBarData = {
        fileName: fullName,
        codeFile: codeFile?.Path,
        edition: this.#urlItems.find(i => i.EntityId?.toString() === viewKey.key && i.IsShared === view.IsShared && i.Path === view.FileName)?.Edition,
        otherEditions,
        openCodeBehind: false
      };
      const snackBarRef = this.snackBar.openFromComponent(_code_and_edition_warnings_code_and_edition_warnings_component__WEBPACK_IMPORTED_MODULE_12__.CodeAndEditionWarningsComponent, {
        data: snackBarData,
        duration: 10000
      });
      snackBarRef.onAction().subscribe(() => {
        if (snackBarRef.containerInstance.snackBarConfig.data.openCodeBehind) {
          const openViewKey = {
            key: codeFile?.Path,
            shared: codeFile?.Shared
          };
          this.openView(openViewKey);
        }
      });
    }
  }
  #attachListeners() {
    this.zone.runOutsideAngular(() => {
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.fromEvent)(window, 'beforeunload').subscribe(event => {
        const allSaved = !this.#viewInfos().some(v => v.view != null && v.view.Code !== v.savedCode);
        if (allSaved) return;
        event.preventDefault();
        event.returnValue = ''; // fix for Chrome
      }));
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.fromEvent)(window, 'keydown').subscribe(event => {
        if (!(0,_edit_dialog_main_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.isCtrlS)(event)) return;
        event.preventDefault();
        this.zone.run(() => this.save());
      }));
    });
  }
  static {
    this.ɵfac = function CodeEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CodeEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_11__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: CodeEditorComponent,
      selectors: [["app-code-editor"]],
      viewQuery: function CodeEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_monaco_editor__WEBPACK_IMPORTED_MODULE_3__.MonacoEditorComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.monacoEditorRef = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵProvidersFeature"]([{
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateLoader,
        useFactory: _code_editor_translate_loader_factory__WEBPACK_IMPORTED_MODULE_13__.translateLoaderFactoryCode,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClient]
      }, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateService]), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 17,
      consts: [["appToggleDebug", "", 1, "editor-root", 3, "ngClass"], [1, "editor-side-toolbar"], ["tippy", "Templates", 1, "button", 3, "click", "ngClass"], ["tippy", "Snippets", 1, "button", 3, "click", "ngClass"], [3, "openView", "createTemplate", "hidden", "view", "templates"], [3, "insertSnippet", "hidden", "snippets"], [1, "editor-group"], [1, "tabs-container", "fancy-scrollbar-dark"], [3, "filename", "value", "options", "snippets", "tooltips", "autoFocus"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Click to save or CTRL + S"], [1, "tab", 3, "ngClass"], [1, "tab", 3, "click", "ngClass"], ["tippyShowDelay", "750", 1, "tab-label-container", 3, "tippy"], [1, "icon-shared"], [1, "tab-label"], [1, "tab-actions-container"], [1, "tab-action", "icon-modified"], ["mode", "indeterminate", "diameter", "14", "color", "white", 1, "spinner"], ["tippy", "Close", "appClickStopPropagation", "", 1, "tab-action", "icon-close", 3, "click"], [3, "valueChanged", "filename", "value", "options", "snippets", "tooltips", "autoFocus"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Click to save or CTRL + S", 3, "click"]],
      template: function CodeEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CodeEditorComponent_Template_div_click_2_listener() {
            return ctx.toggleExplorer(ctx.Explorers.Templates);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "file_copy");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CodeEditorComponent_Template_div_click_5_listener() {
            return ctx.toggleExplorer(ctx.Explorers.Snippets);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "app-code-templates", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("openView", function CodeEditorComponent_Template_app_code_templates_openView_8_listener($event) {
            return ctx.openView($event);
          })("createTemplate", function CodeEditorComponent_Template_app_code_templates_createTemplate_8_listener($event) {
            return ctx.createTemplate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "app-code-snippets", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("insertSnippet", function CodeEditorComponent_Template_app_code_snippets_insertSnippet_9_listener($event) {
            return ctx.insertSnippet($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, CodeEditorComponent_Conditional_11_Template, 3, 0, "div", 7)(12, CodeEditorComponent_Conditional_12_Template, 1, 6, "app-monaco-editor", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, CodeEditorComponent_Conditional_13_Template, 3, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_7_0;
          let tmp_9_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](11, _c0, ctx.monacoOptions.theme === "2sxc-dark"));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](13, _c1, ctx.activeExplorer === ctx.Explorers.Templates));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](15, _c1, ctx.activeExplorer === ctx.Explorers.Snippets));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hidden", ctx.activeExplorer !== ctx.Explorers.Templates)("view", (tmp_4_0 = ctx.active()) == null ? null : tmp_4_0.view)("templates", ctx.templates());
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hidden", ctx.activeExplorer !== ctx.Explorers.Snippets)("snippets", (tmp_7_0 = ctx.active()) == null ? null : tmp_7_0.explorerSnipps);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](ctx.tabs().length > 0 ? 11 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](((tmp_9_0 = ctx.active()) == null ? null : tmp_9_0.view) ? 12 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](ctx.activeView() ? 13 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _code_templates_code_templates_component__WEBPACK_IMPORTED_MODULE_16__.CodeTemplatesComponent, _code_snippets_code_snippets_component__WEBPACK_IMPORTED_MODULE_15__.CodeSnippetsComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__.MatProgressSpinner, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_4__.MonacoEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatFabButton, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_7__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__.TippyDirective, _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_9__.ToggleDebugDirective, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule],
      styles: [".sxc-dark[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n}\n\n.editor-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 35px;\n  background-color: #252526;\n  overflow: hidden;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]:hover {\n  overflow-x: auto;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  cursor: pointer;\n  color: #ccc;\n  font-size: 13px;\n  padding-left: 10px;\n  border-right: 1px solid rgb(37, 37, 38);\n  background-color: #2d2d2d;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-label-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-label-container[_ngcontent-%COMP%]   .icon-shared[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  margin-right: 4px;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-actions-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  padding: 2px;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action.icon-modified[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  font-size: 10px;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(90, 93, 94, 0.31);\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  background-color: #1e1e1e;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover   .icon-close[_ngcontent-%COMP%] {\n  display: flex;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover).modified   .icon-modified[_ngcontent-%COMP%] {\n  display: flex;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover).loading   .spinner[_ngcontent-%COMP%] {\n  display: block;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover):not(.modified):not(.loading).active   .icon-close[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.mat-mdc-fab[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 48px;\n  bottom: 32px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFFSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQU47QUFFTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFWO0FBSU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRlI7QUFLTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSFI7QUFLUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhWO0FBTVE7RUFDRSx3Q0FBQTtBQUpWO0FBUU07RUFDRSxhQUFBO0FBTlI7QUFTTTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFQUjtBQVVNO0VBQ0UsYUFBQTtBQVJSO0FBWVE7RUFDRSxhQUFBO0FBVlY7QUFhUTtFQUNFLGNBQUE7QUFYVjtBQWNRO0VBQ0UsYUFBQTtBQVpWOztBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaEJGIiwiZmlsZSI6ImNvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN4Yy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG59XHJcblxyXG4uZWRpdG9yLWdyb3VwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnRhYnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI2O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGFiIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMzcsIDM3LCAzOCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgLnRhYi1sYWJlbC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5pY29uLXNoYXJlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFiLWFjdGlvbnMtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFiLWFjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgJi5pY29uLW1vZGlmaWVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwLCA5MywgOTQsIDAuMzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIgLmljb24tY2xvc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpob3Zlcikge1xyXG4gICAgICAgICYubW9kaWZpZWQgLmljb24tbW9kaWZpZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubG9hZGluZyAuc3Bpbm5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KC5tb2RpZmllZCk6bm90KC5sb2FkaW5nKS5hY3RpdmUgLmljb24tY2xvc2Uge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYXQtbWRjLWZhYiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA0OHB4O1xyXG4gIGJvdHRvbTogMzJweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFFSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQU47QUFFTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFWO0FBSU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRlI7QUFLTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSFI7QUFLUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhWO0FBTVE7RUFDRSx3Q0FBQTtBQUpWO0FBUU07RUFDRSxhQUFBO0FBTlI7QUFTTTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFQUjtBQVVNO0VBQ0UsYUFBQTtBQVJSO0FBWVE7RUFDRSxhQUFBO0FBVlY7QUFhUTtFQUNFLGNBQUE7QUFYVjtBQWNRO0VBQ0UsYUFBQTtBQVpWOztBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaEJGO0FBRUEsb3ZJQUFvdkkiLCJzb3VyY2VzQ29udGVudCI6WyIuc3hjLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbn1cclxuXHJcbi5lZGl0b3ItZ3JvdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAudGFicy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogI2NjYztcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigzNywgMzcsIDM4KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAudGFiLWxhYmVsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmljb24tc2hhcmVkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWItYWN0aW9ucy1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWItYWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAmLmljb24tbW9kaWZpZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTAsIDkzLCA5NCwgMC4zMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciAuaWNvbi1jbG9zZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmhvdmVyKSB7XHJcbiAgICAgICAgJi5tb2RpZmllZCAuaWNvbi1tb2RpZmllZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5sb2FkaW5nIC5zcGlubmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpub3QoLm1vZGlmaWVkKTpub3QoLmxvYWRpbmcpLmFjdGl2ZSAuaWNvbi1jbG9zZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1tZGMtZmFiIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDQ4cHg7XHJcbiAgYm90dG9tOiAzMnB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 59573:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-snippets/object-to-array.pipe.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectToArrayPipe: () => (/* binding */ ObjectToArrayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class ObjectToArrayPipe {
  transform(obj) {
    if (obj == null) return;
    if (Array.isArray(obj)) {
      return obj;
    }
    return Object.values(obj);
  }
  static {
    this.ɵfac = function ObjectToArrayPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ObjectToArrayPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "objectToArray",
      type: ObjectToArrayPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 61435:
/*!**************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-and-edition-warnings/code-and-edition-warnings.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeAndEditionWarningsComponent: () => (/* binding */ CodeAndEditionWarningsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





function CodeAndEditionWarningsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\"", ctx_r0.snackBarData.fileName, "\" also has a code-behind file \"", ctx_r0.snackBarData.codeFile, "\".");
  }
}
function CodeAndEditionWarningsComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You are editing \"", ctx_r0.snackBarData.edition, "\" edition. ");
  }
}
function CodeAndEditionWarningsComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " You may be editing an edition which is not the one you see. ");
  }
}
function CodeAndEditionWarningsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodeAndEditionWarningsComponent_Conditional_2_Conditional_1_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CodeAndEditionWarningsComponent_Conditional_2_Conditional_3_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " See ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r0.snackBarData.edition ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" There are ", ctx_r0.snackBarData.otherEditions, " other editions of \"", ctx_r0.snackBarData.fileName, "\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx_r0.snackBarData.edition ? 3 : -1);
  }
}
function CodeAndEditionWarningsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeAndEditionWarningsComponent_Conditional_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.openCodeBehind());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Open code-behind file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class CodeAndEditionWarningsComponent {
  constructor(snackRef, snackBarData) {
    this.snackRef = snackRef;
    this.snackBarData = snackBarData;
  }
  openCodeBehind() {
    this.snackBarData.openCodeBehind = true;
    this.snackRef.dismissWithAction();
  }
  static {
    this.ɵfac = function CodeAndEditionWarningsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CodeAndEditionWarningsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CodeAndEditionWarningsComponent,
      selectors: [["app-code-and-edition-warnings"]],
      decls: 5,
      vars: 3,
      consts: [[1, "messages"], [1, "actions"], ["mat-button", "", "color", "primary"], ["href", "https://go.2sxc.org/polymorphism", "target", "_blank"], ["mat-button", "", "color", "primary", 3, "click"]],
      template: function CodeAndEditionWarningsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodeAndEditionWarningsComponent_Conditional_1_Template, 3, 2)(2, CodeAndEditionWarningsComponent_Conditional_2_Template, 8, 4, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CodeAndEditionWarningsComponent_Conditional_4_Template, 2, 0, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.snackBarData.codeFile ? 1 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.snackBarData.otherEditions ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.snackBarData.codeFile ? 4 : -1);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
      styles: [".messages[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.messages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtYW5kLWVkaXRpb24td2FybmluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQUYiLCJmaWxlIjoiY29kZS1hbmQtZWRpdGlvbi13YXJuaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlcyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtYW5kLWVkaXRpb24td2FybmluZ3MvY29kZS1hbmQtZWRpdGlvbi13YXJuaW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUNBLHduQkFBd25CIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2VzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_code-editor_code-editor_component_ts.js.map