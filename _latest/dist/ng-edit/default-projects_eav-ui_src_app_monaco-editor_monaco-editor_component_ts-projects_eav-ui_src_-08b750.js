"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_monaco-editor_monaco-editor_component_ts-projects_eav-ui_src_-08b750"],{

/***/ 96581:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/monaco-editor/monaco-editor.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonacoEditorComponent: () => (/* binding */ MonacoEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/typescript-helpers */ 43697);
/* harmony import */ var _monaco_instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monaco-instance */ 94950);




const _c0 = ["editor"];
class MonacoEditorComponent {
  constructor() {
    this.autoFocus = false;
    this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.focused = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.blurred = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngAfterViewInit() {
    window.require.config({
      paths: {
        vs: ['https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.46.0/min/vs']
      }
    });
    window.require(['vs/editor/editor.main'], monaco => {
      this.monaco = monaco;
      this.createEditor(this.autoFocus);
    });
  }
  ngOnChanges(changes) {
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)('filename')] != null && this.monacoInstance != null) {
      this.monacoInstance.destroy();
      this.createEditor(true);
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)('value')] != null) {
      this.monacoInstance?.updateValue(this.value);
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)('jsonSchema')] != null) {
      this.monacoInstance?.setJsonSchema(this.jsonSchema);
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)('jsonComments')] != null) {
      this.monacoInstance?.setJsonComments(this.jsonComments);
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)('snippets')] != null) {
      this.monacoInstance?.setSnippets(this.snippets);
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)('tooltips')] != null) {
      this.monacoInstance?.setTooltips(this.tooltips);
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)('jsTypings')] != null) {
      this.monacoInstance?.setJsTypings(this.jsTypings);
    }
    if (changes[(0,_shared_typescript_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)('jsDiagnostics')] != null) {
      this.monacoInstance?.setJsDiagnostics(this.jsDiagnostics);
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
    this.monacoInstance = new _monaco_instance__WEBPACK_IMPORTED_MODULE_1__.MonacoInstance(this.monaco, this.filename, this.value, this.editorRef.nativeElement, this.options, this.snippets, this.tooltips);
    this.monacoInstance.setJsonSchema(this.jsonSchema);
    this.monacoInstance.setJsonComments(this.jsonComments);
    this.monacoInstance.setJsTypings(this.jsTypings);
    this.monacoInstance.setJsDiagnostics(this.jsDiagnostics);
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
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MonacoEditorComponent,
      selectors: [["app-monaco-editor"]],
      viewQuery: function MonacoEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.editorRef = _t.first);
        }
      },
      inputs: {
        filename: "filename",
        value: "value",
        snippets: "snippets",
        tooltips: "tooltips",
        options: "options",
        jsonSchema: "jsonSchema",
        jsonComments: "jsonComments",
        jsTypings: "jsTypings",
        jsDiagnostics: "jsDiagnostics",
        autoFocus: "autoFocus"
      },
      outputs: {
        valueChanged: "valueChanged",
        focused: "focused",
        blurred: "blurred"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [["editor", ""], [1, "editor"]],
      template: function MonacoEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 1, 0);
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
  constructor( /** Global Monaco configuration */
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

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_monaco-editor_monaco-editor_component_ts-projects_eav-ui_src_-08b750.js.map