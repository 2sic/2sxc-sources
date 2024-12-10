"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_edit_dialog_main_keyboard-shortcuts_ts-projects_eav-ui_src_ap-c09d87"],{

/***/ 32760:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/main/keyboard-shortcuts.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCtrlS: () => (/* binding */ isCtrlS),
/* harmony export */   isEscape: () => (/* binding */ isEscape)
/* harmony export */ });
function isEscape(event) {
  return event.key === 'Escape';
}
function isCtrlS(event) {
  return (event.key === 's' || event.key === 'S') && (event.ctrlKey || event.metaKey);
}

/***/ }),

/***/ 96581:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/monaco-editor/monaco-editor.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonacoEditorComponent: () => (/* binding */ MonacoEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ 4689);
/* harmony import */ var _shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/typescript-helpers */ 43697);
/* harmony import */ var _monaco_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monaco-instance */ 94950);





const _c0 = ["editor"];
class MonacoEditorComponent {
  constructor() {
    this.filename = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.tooltips = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.snippets = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.jsonSchema = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.jsonComments = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.jsTypings = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.jsDiagnostics = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
    this.autoFocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(false);
    this.valueChanged = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.output)();
    this.focused = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.output)();
    this.blurred = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.output)();
  }
  ngAfterViewInit() {
    _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init().then(monaco => {
      this.monaco = monaco;
      this.createEditor(this.autoFocus());
    });
  }
  ngOnChanges(changes) {
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof)('filename')] != null && this.monacoInstance != null) {
      this.monacoInstance.destroy();
      this.createEditor(true);
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof)('value')] != null) {
      this.monacoInstance?.updateValue(this.value());
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof)('jsonSchema')] != null) {
      this.monacoInstance?.setJsonSchema(this.jsonSchema());
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof)('jsonComments')] != null) {
      this.monacoInstance?.setJsonComments(this.jsonComments());
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof)('snippets')] != null) {
      this.monacoInstance?.setSnippets(this.snippets());
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof)('tooltips')] != null) {
      this.monacoInstance?.setTooltips(this.tooltips());
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof)('jsTypings')] != null) {
      this.monacoInstance?.setJsTypings(this.jsTypings());
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof)('jsDiagnostics')] != null) {
      this.monacoInstance?.setJsDiagnostics(this.jsDiagnostics());
    }
  }
  insertSnippet(snippet) {
    this.monacoInstance?.insertSnippet(snippet);
    this.monacoInstance?.focus();
  }
  ngOnDestroy() {
    this.monacoInstance?.destroy();
  }
  createEditor(autoFocus) {
    this.monacoInstance = new _monaco_instance__WEBPACK_IMPORTED_MODULE_2__.MonacoInstance(this.monaco, this.filename(), this.value(), this.editorRef.nativeElement, this.options(), this.snippets(), this.tooltips());
    this.monacoInstance.setJsonSchema(this.jsonSchema());
    this.monacoInstance.setJsonComments(this.jsonComments());
    this.monacoInstance.setJsTypings(this.jsTypings());
    this.monacoInstance.setJsDiagnostics(this.jsDiagnostics());
    this.monacoInstance.onValueChange(value => {
      this.valueChanged.emit(value);
    });
    this.monacoInstance.onFocus(() => {
      this.focused.emit();
    });
    this.monacoInstance.onBlur(() => {
      this.blurred.emit();
    });
    if (autoFocus) {
      this.monacoInstance.focus();
    }
  }
  static {
    this.ɵfac = function MonacoEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MonacoEditorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MonacoEditorComponent,
      selectors: [["app-monaco-editor"]],
      viewQuery: function MonacoEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editorRef = _t.first);
        }
      },
      inputs: {
        filename: [1, "filename"],
        value: [1, "value"],
        tooltips: [1, "tooltips"],
        snippets: [1, "snippets"],
        options: [1, "options"],
        jsonSchema: [1, "jsonSchema"],
        jsonComments: [1, "jsonComments"],
        jsTypings: [1, "jsTypings"],
        jsDiagnostics: [1, "jsDiagnostics"],
        autoFocus: [1, "autoFocus"]
      },
      outputs: {
        valueChanged: "valueChanged",
        focused: "focused",
        blurred: "blurred"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      consts: [["editor", ""], [1, "editor"]],
      template: function MonacoEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 1, 0);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.editor[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5lZGl0b3Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 94950:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/monaco-editor/monaco-instance.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonacoInstance: () => (/* binding */ MonacoInstance),
/* harmony export */   voidElements: () => (/* binding */ voidElements)
/* harmony export */ });
const voidElements = 'area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr'.split(',').map(el => el.trim().toLocaleLowerCase());
class MonacoInstance {
  constructor(/** Global Monaco configuration */
  monaco, filename, value, container, options, snippets, tooltips) {
    this.monaco = monaco;
    this.filename = filename;
    this.snippets = snippets;
    this.tooltips = tooltips;
    this.globalCache = this.createGlobalCache(monaco);
    this.defineThemes(this.globalCache, this.monaco);
    this.cachedValue = value;
    this.editorInstance = this.createInstance(this.monaco, filename, value, container, options);
    this.completionItemProviders = this.addSnippets(this.monaco, this.editorInstance);
    this.resizeObserver = this.createResizeObserver(container, this.editorInstance);
    this.restoreState(this.globalCache, this.editorInstance);
    this.addEvents(this.editorInstance);
  }
  destroy() {
    this.saveState(this.globalCache, this.editorInstance);
    this.resizeObserver.disconnect();
    this.completionItemProviders.forEach(completionItemProvider => completionItemProvider.dispose());
    this.jsTypingsLib?.dispose();
    this.editorInstance.getModel().dispose();
    this.editorInstance.dispose();
  }
  updateValue(value) {
    if (this.cachedValue === value) return;
    this.cachedValue = value;
    this.editorInstance.getModel().setValue(value);
  }
  focus() {
    this.editorInstance.focus();
  }
  onValueChange(callback) {
    this.valueChangedCallback = callback;
  }
  onFocus(callback) {
    this.focusedCallback = callback;
  }
  onBlur(callback) {
    this.blurredCallback = callback;
  }
  insertSnippet(snippet) {
    const snippetController = this.editorInstance.getContribution('snippetController2');
    snippetController.insert(snippet);
  }
  setSnippets(snippets) {
    this.snippets = snippets;
  }
  setTooltips(tooltips) {
    this.tooltips = tooltips;
  }
  setJsonSchema(jsonSchema) {
    const uri = this.editorInstance.getModel().uri.toString();
    const oldJsonDiagnostics = this.monaco.languages.json.jsonDefaults.diagnosticsOptions;
    const exists = oldJsonDiagnostics.schemas?.some(schema => schema.fileMatch[0] === uri) ?? false;
    const newSchema = jsonSchema?.type === 'link' ? {
      uri: jsonSchema.value,
      fileMatch: [uri]
    } : jsonSchema?.type === 'raw' ? {
      uri,
      fileMatch: [uri],
      schema: JSON.parse(jsonSchema.value)
    } : undefined;
    if (!exists && !newSchema) return;
    const newJsonDiagnostics = {
      ...oldJsonDiagnostics,
      enableSchemaRequest: true,
      schemas: exists && !newSchema ? oldJsonDiagnostics.schemas.filter(schema => schema.fileMatch[0] !== uri) : exists ? oldJsonDiagnostics.schemas.map(schema => schema.fileMatch[0] === uri ? newSchema : schema) : [...(oldJsonDiagnostics.schemas ?? []), newSchema]
    };
    this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(newJsonDiagnostics);
  }
  setJsonComments(comments) {
    if (!comments) return;
    const jsonDiagnostics = {
      ...this.monaco.languages.json.jsonDefaults.diagnosticsOptions,
      comments
    };
    this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(jsonDiagnostics);
  }
  setJsDiagnostics(options) {
    if (!options) return;
    const javascriptDiagnostics = {
      ...this.monaco.languages.typescript.javascriptDefaults.getDiagnosticsOptions(),
      ...options
    };
    this.monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(javascriptDiagnostics);
  }
  setJsTypings(typings) {
    if (!typings) {
      this.jsTypingsLib?.dispose();
      return;
    }
    this.jsTypingsLib = this.monaco.languages.typescript.javascriptDefaults.addExtraLib(typings, `js-typings-${this.filename}`);
  }
  createGlobalCache(monaco) {
    if (monaco._2sxc == null) {
      const _2sxc = {
        themesAreDefined: false,
        savedStates: {}
      };
      monaco._2sxc = _2sxc;
    }
    return monaco._2sxc;
  }
  /** Registers our themes. Themes are global. Run before creating editor */
  defineThemes(globalCache, monaco) {
    // there is currently no official way to get defined themes from Monaco to check if some theme was already defined
    if (globalCache.themesAreDefined) return;
    globalCache.themesAreDefined = true;
    monaco.editor.defineTheme('2sxc-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [{
        token: 'metatag.cs',
        foreground: 'ffff00'
      }],
      colors: {}
    });
  }
  createInstance(monaco, filename, value, container, options) {
    const editorInstance = monaco.editor.create(container, options);
    const editorModelUri = monaco.Uri.file(filename);
    const editorModel = monaco.editor.createModel(value, undefined, editorModelUri);
    editorInstance.setModel(editorModel);
    return editorInstance;
  }
  saveState(globalCache, editorInstance) {
    const uri = editorInstance.getModel().uri.toString();
    const viewState = JSON.stringify(editorInstance.saveViewState());
    if (globalCache.savedStates[uri] == null) {
      globalCache.savedStates[uri] = {
        viewState
      };
    } else {
      globalCache.savedStates[uri].viewState = viewState;
    }
  }
  restoreState(globalCache, editorInstance) {
    const uri = editorInstance.getModel().uri.toString();
    const savedState = globalCache.savedStates[uri];
    if (savedState == null) return;
    const viewState = JSON.parse(savedState.viewState);
    editorInstance.restoreViewState(viewState);
  }
  addSnippets(monaco, editorInstance) {
    const completionItemProviders = [monaco.languages.registerCompletionItemProvider(editorInstance.getModel().getLanguageId(), {
      triggerCharacters: ['>'],
      provideCompletionItems: (model, position) => {
        if (editorInstance.getModel() !== model) {
          return {
            suggestions: []
          };
        }
        const textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });
        // sometimes trigger character is wrong
        const trigger = textUntilPosition[textUntilPosition.length - 1];
        if (trigger !== '>') {
          return {
            suggestions: []
          };
        }
        const tagStartIndex = textUntilPosition.lastIndexOf('<');
        if (tagStartIndex === -1) {
          return {
            suggestions: []
          };
        }
        const codeInTag = textUntilPosition.substring(tagStartIndex);
        // check that > is not in between quotes like in <div class="car>"
        let quotes = 0;
        Array.from(codeInTag).forEach(c => {
          if (c === '"') {
            quotes++;
          }
        });
        if (quotes % 2 !== 0) {
          return {
            suggestions: []
          };
        }
        // check that it's not a closing tag
        if (codeInTag.startsWith('</')) {
          return {
            suggestions: []
          };
        }
        // check that tag is not already closed
        if (codeInTag.indexOf('>') !== codeInTag.length - 1) {
          return {
            suggestions: []
          };
        }
        // tag name ends with space or tag is closed completely
        let tagEndIndex = codeInTag.indexOf(' ');
        if (tagEndIndex === -1) {
          tagEndIndex = codeInTag.indexOf('>');
        }
        if (tagEndIndex === -1) {
          return {
            suggestions: []
          };
        }
        const tag = codeInTag.substring(1, tagEndIndex);
        if (!tag) {
          return {
            suggestions: []
          };
        }
        if (voidElements.includes(tag.toLocaleLowerCase())) {
          return {
            suggestions: []
          };
        }
        if (!/[a-zA-Z0-9_-]/.test(tag)) {
          return {
            suggestions: []
          };
        }
        const suggestions = [{
          label: `</${tag}>`,
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `\$0</${tag}>`,
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range: {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: position.column,
            endColumn: position.column
          }
        }];
        return {
          suggestions
        };
      }
    }), monaco.languages.registerCompletionItemProvider(editorInstance.getModel().getLanguageId(), {
      provideCompletionItems: (model, position) => {
        if (this.snippets == null || editorInstance.getModel() !== model) {
          return {
            suggestions: []
          };
        }
        const word = model.getWordUntilPosition(position);
        const suggestions = this.snippets.map(snippet => {
          if (!snippet.content) return;
          const suggestion = {
            label: snippet.name,
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: `${snippet.title ?? ''}\n${snippet.help ?? ''}\n${snippet.links ?? ''}`,
            insertText: snippet.content,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: {
              startLineNumber: position.lineNumber,
              endLineNumber: position.lineNumber,
              startColumn: word.startColumn,
              endColumn: word.endColumn
            }
          };
          return suggestion;
        }).filter(suggestion => !!suggestion);
        return {
          suggestions
        };
      }
    }), monaco.languages.registerHoverProvider(editorInstance.getModel().getLanguageId(), {
      provideHover: (model, position) => {
        if (this.tooltips == null || editorInstance.getModel() !== model) return;
        const word = model.getWordAtPosition(position);
        if (!word) return;
        const tooltip = this.tooltips.find(i => i.Term === word.word);
        if (!tooltip) return;
        return {
          contents: tooltip.Help.map(value => {
            const content = {
              value
            };
            return content;
          }),
          range: {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn
          }
        };
      }
    })];
    return completionItemProviders;
  }
  createResizeObserver(container, editorInstance) {
    const resizeObserver = new ResizeObserver(() => {
      editorInstance.layout();
    });
    resizeObserver.observe(container);
    return resizeObserver;
  }
  addEvents(editorInstance) {
    editorInstance.getModel().onDidChangeContent(() => {
      const newValue = editorInstance.getModel().getValue();
      if (newValue === this.cachedValue) return;
      this.cachedValue = newValue;
      this.valueChangedCallback?.(newValue);
    });
    editorInstance.onDidFocusEditorWidget(() => {
      this.focusedCallback?.();
    });
    editorInstance.onDidBlurEditorWidget(() => {
      this.blurredCallback?.();
    });
    // this.editorInstance.onDidChangeModelDecorations(e => {
    //   const value = this.editorInstance.getModel().getValue();
    //   const markers = this.monaco.editor.getModelMarkers({}).filter(marker => marker.resource.path === `/${this.filename}`);
    //   const valid = !markers.some(
    //     marker => marker.severity === this.monaco.MarkerSeverity.Error || marker.severity === this.monaco.MarkerSeverity.Warning
    //   );
    // });
    // this.monaco.editor.onDidChangeMarkers(() => {
    //   // markers updates are async and lagging behind value updates
    //   const markers = this.monaco.editor.getModelMarkers({}).filter(marker => marker.resource.path === `/${this.filename}`);
    //   if (markers.some(marker => marker.severity === this.monaco.MarkerSeverity.Error)) {
    //     // has errors
    //   } else if (markers.some(marker => marker.severity === this.monaco.MarkerSeverity.Warning)) {
    //     // has warnings
    //   } else {
    //     // has no errors or warnings
    //   }
    // });
  }
}

/***/ }),

/***/ 95699:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/toggle-debug.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleDebugDirective: () => (/* binding */ ToggleDebugDirective)
/* harmony export */ });
/* harmony import */ var _services_global_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/global-config.service */ 39431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class ToggleDebugDirective {
  constructor(globalConfigService) {
    this.globalConfigService = globalConfigService;
  }
  onClick(event) {
    const CTRL_SHIFT_ALT_CLICK = (navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey) && event.shiftKey && event.altKey;
    if (CTRL_SHIFT_ALT_CLICK) {
      this.globalConfigService.toggleDebugEnabled();
      window.getSelection().removeAllRanges();
    }
  }
  static {
    this.ɵfac = function ToggleDebugDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToggleDebugDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_global_config_service__WEBPACK_IMPORTED_MODULE_0__.GlobalConfigService));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ToggleDebugDirective,
      selectors: [["", "appToggleDebug", ""]],
      hostBindings: function ToggleDebugDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToggleDebugDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });
  }
}

/***/ }),

/***/ 1726:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/fields/data-type-catalog.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTypeCatalog: () => (/* binding */ DataTypeCatalog)
/* harmony export */ });
const DataTypeCatalog = {
  Boolean: 'Boolean',
  Custom: 'Custom',
  DateTime: 'DateTime',
  Empty: 'Empty',
  Entity: 'Entity',
  Hyperlink: 'Hyperlink',
  Number: 'Number',
  String: 'String'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 93826:
/*!***********************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/rxJs/rx.helpers.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxHelpers: () => (/* binding */ RxHelpers)
/* harmony export */ });
class RxHelpers {
  static boolEquals(x, y) {
    return x === y;
  }
  static stringEquals(x, y) {
    return x === y;
  }
  static valueEquals(x, y) {
    return x === y;
  }
  static objectsEqual(x, y) {
    if (x == null || y == null) return x === y;
    const obj1 = x;
    const obj2 = y;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    const equal = keys1.every(key1 => {
      if (!obj2.hasOwnProperty(key1)) return false;
      return obj1[key1] === obj2[key1];
    });
    return equal;
  }
  static arraysEqual(x, y) {
    if (x == null || y == null) return x === y;
    if (x.length !== y.length) return false;
    const equal = x.every((item, index) => {
      return x[index] === y[index];
    });
    return equal;
  }
  /** used as .filter(distinct), filters array to only have distinct values */
  static distinct(value, index, array) {
    return array.indexOf(value) === index;
  }
}

/***/ }),

/***/ 43697:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/typescript-helpers/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nameof: () => (/* reexport safe */ _name_of__WEBPACK_IMPORTED_MODULE_0__.nameof)
/* harmony export */ });
/* harmony import */ var _name_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name-of */ 54254);


/***/ }),

/***/ 54254:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/typescript-helpers/name-of.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nameof: () => (/* binding */ nameof)
/* harmony export */ });
// Inspired by https://schneidenbach.gitbooks.io/typescript-cookbook/content/nameof-operator.html
const nameof = name => name;

/***/ }),

/***/ 77135:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayLikeToArray: () => (/* binding */ _arrayLikeToArray),
/* harmony export */   arrayWithHoles: () => (/* binding */ _arrayWithHoles),
/* harmony export */   defineProperty: () => (/* binding */ _defineProperty),
/* harmony export */   iterableToArrayLimit: () => (/* binding */ _iterableToArrayLimit),
/* harmony export */   nonIterableRest: () => (/* binding */ _nonIterableRest),
/* harmony export */   objectSpread2: () => (/* binding */ _objectSpread2),
/* harmony export */   objectWithoutProperties: () => (/* binding */ _objectWithoutProperties),
/* harmony export */   objectWithoutPropertiesLoose: () => (/* binding */ _objectWithoutPropertiesLoose),
/* harmony export */   slicedToArray: () => (/* binding */ _slicedToArray),
/* harmony export */   unsupportedIterableToArray: () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ 40908:
/*!*******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/config/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ 4689:
/*!************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _loader_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _loader_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/index.js */ 56925);



/***/ }),

/***/ 56925:
/*!*******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/loader/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ 77135);
/* harmony import */ var state_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state-local */ 9842);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.js */ 40908);
/* harmony import */ var _validators_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/index.js */ 21361);
/* harmony import */ var _utils_compose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/compose.js */ 54427);
/* harmony import */ var _utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/deepMerge.js */ 35753);
/* harmony import */ var _utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/makeCancelable.js */ 83079);








/** the local state of the module */

var _state$create = state_local__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    config: _config_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    isInitialized: false,
    resolve: null,
    reject: null,
    monaco: null
  }),
  _state$create2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.slicedToArray)(_state$create, 2),
  getState = _state$create2[0],
  setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */

function config(globalConfig) {
  var _validators$config = _validators_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].config(globalConfig),
    monaco = _validators$config.monaco,
    config = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectWithoutProperties)(_validators$config, ["monaco"]);
  setState(function (state) {
    return {
      config: (0,_utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.config, config),
      monaco: monaco
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */

function init() {
  var state = getState(function (_ref) {
    var monaco = _ref.monaco,
      isInitialized = _ref.isInitialized,
      resolve = _ref.resolve;
    return {
      monaco: monaco,
      isInitialized: isInitialized,
      resolve: resolve
    };
  });
  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });
    if (state.monaco) {
      state.resolve(state.monaco);
      return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
    }
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
    }
    (0,_utils_compose_js__WEBPACK_IMPORTED_MODULE_4__["default"])(injectScripts, getMonacoLoaderScript)(configureLoader);
  }
  return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */

function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */

function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */

function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
      reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function () {
    return configureLoader();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */

function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
      resolve = _ref3.resolve,
      reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;
  require.config(state.config);
  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */

function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */

function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);

/***/ }),

/***/ 54427:
/*!********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/compose.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose);

/***/ }),

/***/ 50880:
/*!******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/curry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curry);

/***/ }),

/***/ 35753:
/*!**********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ 77135);

function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)({}, target), source);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);

/***/ }),

/***/ 50884:
/*!*********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isObject(value) {
  return {}.toString.call(value).includes('Object');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);

/***/ }),

/***/ 83079:
/*!***************************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CANCELATION_MESSAGE: () => (/* binding */ CANCELATION_MESSAGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCancelable);


/***/ }),

/***/ 21361:
/*!***********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/validators/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   errorHandler: () => (/* binding */ errorHandler),
/* harmony export */   errorMessages: () => (/* binding */ errorMessages)
/* harmony export */ });
/* harmony import */ var _utils_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/curry.js */ 50880);
/* harmony import */ var _utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isObject.js */ 50884);



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!(0,_utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config)) errorHandler('configType');
  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }
  return config;
}
/**
 * logs deprecation message
 */

function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}
function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}
var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = (0,_utils_curry_js__WEBPACK_IMPORTED_MODULE_0__["default"])(throwError)(errorMessages);
var validators = {
  config: validateConfig
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validators);


/***/ }),

/***/ 9842:
/*!********************************************************!*\
  !*** ./node_modules/state-local/lib/es/state-local.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes('Object');
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === 'function';
}
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}
function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}
function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}
var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);
  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }
  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }
  return [getState, setState];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index = {
  create: create
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ 45839:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);

/***/ }),

/***/ 11878:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ 17797);


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);

/***/ }),

/***/ 49934:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 23151);


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseCreate);

/***/ }),

/***/ 17797:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 74740);

var defineProperty = function () {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);

/***/ }),

/***/ 32549:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 69093);


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_edit_dialog_main_keyboard-shortcuts_ts-projects_eav-ui_src_ap-c09d87.js.map