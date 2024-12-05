"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"],{

/***/ 64572:
/*!******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/file-upload-dialog/file-upload-dialog.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploadDialogComponent: () => (/* binding */ FileUploadDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/safe-html.pipe */ 69914);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/context */ 68873);
/* harmony import */ var _services_getting_started_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getting-started.service */ 12987);
/* harmony import */ var _services_installer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/installer.service */ 14147);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base.component */ 43176);
/* harmony import */ var _file_upload_dialog_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-upload-dialog.models */ 99601);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 80436);























const _c0 = ["installerWindow"];
const _c1 = (a0, a1, a2) => ({
  "sxc-message-warning": a0,
  "sxc-message-success": a1,
  "sxc-message-error": a2
});
function FileUploadDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-spinner", 6);
  }
}
function FileUploadDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Select or drop file");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FileUploadDialogComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r3.name);
  }
}
function FileUploadDialogComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FileUploadDialogComponent_Conditional_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.toggleShowAppCatalog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Get recommended Apps from Catalog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r4.uploading());
  }
}
function FileUploadDialogComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Upload succeeded. See the messages below for more information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FileUploadDialogComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Upload failed. See the messages below for more information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FileUploadDialogComponent_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](2, _c1, message_r6.MessageType === ctx_r4.FileUploadMessageTypes.Warning, message_r6.MessageType === ctx_r4.FileUploadMessageTypes.Success, message_r6.MessageType === ctx_r4.FileUploadMessageTypes.Error));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", message_r6.Text, " ");
  }
}
function FileUploadDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FileUploadDialogComponent_Conditional_16_Conditional_1_Template, 2, 0, "div", 15)(2, FileUploadDialogComponent_Conditional_16_Conditional_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](3, FileUploadDialogComponent_Conditional_16_For_4_Template, 2, 6, "div", 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r4.result().Success ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](!ctx_r4.result().Success ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r4.result().Messages);
  }
}
function FileUploadDialogComponent_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "iframe", 18, 1);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r4.remoteInstallerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeResourceUrl"]);
  }
}
function FileUploadDialogComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-progress-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mode", "indeterminate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Installing ", ctx_r4.currentPackage == null ? null : ctx_r4.currentPackage.displayName, "..");
  }
}
function FileUploadDialogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FileUploadDialogComponent_Conditional_17_Conditional_0_Template, 2, 1, "iframe", 18)(1, FileUploadDialogComponent_Conditional_17_Conditional_1_Template, 4, 2, "div", 19);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r4.ready ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r4.showProgress ? 1 : -1);
  }
}
function FileUploadDialogComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FileUploadDialogComponent_Conditional_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FileUploadDialogComponent_Conditional_19_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.upload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r4.files().length || ctx_r4.uploading() || !!ctx_r4.result());
  }
}
function FileUploadDialogComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FileUploadDialogComponent_Conditional_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.closeDialog(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
class FileUploadDialogComponent extends _base_component__WEBPACK_IMPORTED_MODULE_6__.BaseComponent {
  constructor(dialogData, dialog, snackBar, sanitizer, context, changeDetectorRef) {
    super();
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.sanitizer = sanitizer;
    this.context = context;
    this.changeDetectorRef = changeDetectorRef;
    this.hostClass = 'dialog-component';
    this.uploadType = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.input)();
    this.uploading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(false);
    this.showAppCatalog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(false);
    this.result = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(undefined);
    this.files = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)([]);
    this.FileUploadMessageTypes = _file_upload_dialog_models__WEBPACK_IMPORTED_MODULE_7__.FileUploadMessageTypes;
    this.UploadTypes = _file_upload_dialog_models__WEBPACK_IMPORTED_MODULE_7__.UploadTypes;
    this.showProgress = false;
    this.remoteInstallerUrl = '';
    this.ready = false;
    this.installerService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_installer_service__WEBPACK_IMPORTED_MODULE_5__.InstallerService);
    this.installSettingsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_getting_started_service__WEBPACK_IMPORTED_MODULE_4__.AppInstallSettingsService);
    this.alreadyProcessing = false;
    // copied from 2sxc-ui app/installer
    // Initial Observable to monitor messages
    this.messages$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(window, 'message').pipe(
    // Ensure only one installation is processed.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(() => !this.alreadyProcessing), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(evt => evt.origin === "https://2sxc.org"),
    // Get data from event.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(evt => {
      try {
        return JSON.parse(evt.data);
      } catch (e) {
        console.error('error procesing message. Message was ' + evt.data, e);
        return void 0;
      }
    }),
    // Check if data is valid and the moduleID matches
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(data => data && Number(data.moduleId) === this.context.moduleId));
    // TODO: @2dg Check with Daniel subscriptions
    // TODO: Old Code
    //  this.subscriptions.add(
    //   this.files$.subscribe(() => {
    //     console.log('files changed');
    //     if (this.result() !== undefined)
    //       this.result.set(undefined);
    //   }),
    // );
    // copied from 2sxc-ui app/installer
    this.subscriptions.add(this.installSettingsService.settings$.subscribe(settings => {
      this.settings = settings;
      this.remoteInstallerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(settings.remoteUrl);
      this.ready = true;
    }));
  }
  ngOnInit() {
    if (this.dialogData.files != null) this.filesDropped(this.dialogData.files);
    // copied from 2sxc-ui
    this.installSettingsService.loadGettingStarted(false); // Passed as input from 2sxc-ui
    // copied from 2sxc-ui app/installer
    this.subscriptions.add(this.messages$.pipe(
    // Verify it's for this action
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(data => data.action === 'specs'),
    // Send message to iframe
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
      const winFrame = this.installerWindow.nativeElement;
      const specsMsg = {
        action: 'specs',
        data: {
          //currently not used
          installedApps: this.settings.installedApps,
          //.map(app => ((app as InstalledApp).guid)),
          //currently used to forbid already installed apps
          rules: this.settings.installedApps.map(app => ({
            target: 'guid',
            appGuid: app.guid,
            mode: 'f',
            url: ''
          })) //this.settings.rules,
        }
      };
      const specsJson = JSON.stringify(specsMsg);
      winFrame.contentWindow.postMessage(specsJson, '*');
      console.log('debug: just sent specs message:' + specsJson, specsMsg, winFrame);
    })).subscribe());
    // copied from 2sxc-ui app/installer
    // Subscription to listen to 'install' messages
    this.subscriptions.add(this.messages$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(data => data.action === 'install'),
    // Get packages from data.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(data => Object.values(data.packages)),
    // Show confirm dialog.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(packages => {
      const packagesDisplayNames = packages.reduce((t, c) => `${t} - ${c.displayName}\n`, '');
      const msg = `Do you want to install these packages?

${packagesDisplayNames}
This takes about 10 seconds per package. Don't reload the page while it's installing.`;
      return confirm(msg);
    }),
    // Install the packages one at a time
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)(packages => {
      this.alreadyProcessing = true;
      this.showProgress = true;
      this.changeDetectorRef.detectChanges(); //without this spinner is not shown
      return this.installerService.installPackages(packages, p => this.currentPackage = p);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
      this.showProgress = false;
      this.changeDetectorRef.detectChanges(); //without this spinner is not removed (though window reload will remove it anyway) so maybe unnecessary
      alert('Installation complete 👍');
      window.top.location.reload();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
      console.error('Error: ', error);
      this.showProgress = false;
      this.alreadyProcessing = false;
      this.changeDetectorRef.detectChanges(); //without this spinner is not removed
      const errorMsg = `An error occurred: Package ${this.currentPackage.displayName}

${error.error?.Message ?? error.error?.message ?? ''}

${error.message}

Please try again later or check how to manually install content-templates: https://azing.org/2sxc/r/0O4OymoA`;
      alert(errorMsg);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(error);
    })).subscribe());
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  closeDialog(refresh) {
    this.dialog.close(refresh);
  }
  filesDropped(files) {
    this.setFiles(files);
    this.upload();
  }
  filesChanged(event) {
    const fileList = event.target.files;
    const files = Array.from(fileList);
    this.setFiles(files);
  }
  upload() {
    this.uploading.set(true);
    this.subscriptions.add(this.dialogData.upload$(this.files()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe({
      next: result => {
        this.uploading.set(false);
        this.result.set(result);
      },
      error: () => {
        this.uploading.set(false);
        this.result.set(undefined);
        this.snackBar.open('Upload failed. Please check console for more information', undefined, {
          duration: 3000
        });
      }
    }));
  }
  toggleShowAppCatalog() {
    this.showAppCatalog.set(!this.showAppCatalog());
  }
  setFiles(files) {
    if (!this.dialogData.multiple) {
      files = files.slice(0, 1);
    }
    this.files.set(files);
  }
  static {
    this.ɵfac = function FileUploadDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FileUploadDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_context__WEBPACK_IMPORTED_MODULE_3__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: FileUploadDialogComponent,
      selectors: [["app-file-upload-dialog"]],
      viewQuery: function FileUploadDialogComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.installerWindow = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function FileUploadDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      inputs: {
        uploadType: [1, "uploadType"]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 21,
      vars: 15,
      consts: [["fileInput", ""], ["installerWindow", ""], ["appDragAndDrop", "", 1, "eav-dialog", 3, "filesDropped", "allowedFileTypes"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title", 3, "innerHtml"], [1, "eav-dialog-content"], ["mode", "indeterminate", "diameter", "20", "color", "accent"], [3, "innerHtml"], ["mat-raised-button", "", "tippy", "Open file browser", 3, "click", "disabled"], ["type", "file", "multiple", "", 1, "hide", 3, "change"], ["mat-raised-button", "", "tippy", "Open app catalog", 1, "eav-app-catalog-button", 3, "disabled"], [1, "eav-result-container"], ["align", "end"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "tippy", "Open app catalog", 1, "eav-app-catalog-button", 3, "click", "disabled"], [1, "sxc-message", "sxc-message-info"], [1, "sxc-message", "sxc-message-error"], [1, "sxc-message", 3, "ngClass"], [1, "eav-app-catalog-iframe", 3, "src"], [1, "eav-progress"], [3, "mode"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
      template: function FileUploadDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filesDropped", function FileUploadDialogComponent_Template_div_filesDropped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.filesDropped($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, FileUploadDialogComponent_Conditional_5_Template, 1, 0, "mat-spinner", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FileUploadDialogComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](fileInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FileUploadDialogComponent_Conditional_10_Template, 2, 0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](11, FileUploadDialogComponent_For_12_Template, 2, 1, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 9, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function FileUploadDialogComponent_Template_input_change_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.filesChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, FileUploadDialogComponent_Conditional_15_Template, 2, 1, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, FileUploadDialogComponent_Conditional_16_Template, 5, 2, "div", 11)(17, FileUploadDialogComponent_Conditional_17_Template, 2, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-dialog-actions", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, FileUploadDialogComponent_Conditional_19_Template, 4, 1)(20, FileUploadDialogComponent_Conditional_20_Template, 2, 0, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("allowedFileTypes", ctx.dialogData.allowedFileTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 11, ctx.dialogData.title), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.uploading() ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 13, ctx.dialogData.description), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.uploading());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](!ctx.files().length ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.files());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.uploadType() == ctx.UploadTypes.App ? 15 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.result() ? 16 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.uploadType() == ctx.UploadTypes.App && ctx.showAppCatalog() ? 17 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](!((tmp_11_0 = ctx.result()) == null ? null : tmp_11_0.Success) ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](((tmp_12_0 = ctx.result()) == null ? null : tmp_12_0.Success) ? 20 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogActions, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinner, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe, _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_1__.DragAndDropDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton],
      styles: [".eav-result-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.eav-app-catalog-button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.eav-app-catalog-iframe[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n  height: 500px;\n  border: none;\n}\n\n.eav-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.eav-progress[_ngcontent-%COMP%]   mat-progress-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.eav-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbGUtdXBsb2FkLWRpYWxvZy9maWxlLXVwbG9hZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1yZXN1bHQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uZWF2LWFwcC1jYXRhbG9nLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5lYXYtYXBwLWNhdGFsb2ctaWZyYW1lIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZWF2LXByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 99601:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/file-upload-dialog/file-upload-dialog.models.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploadMessageTypes: () => (/* binding */ FileUploadMessageTypes),
/* harmony export */   UploadTypes: () => (/* binding */ UploadTypes)
/* harmony export */ });
const FileUploadMessageTypes = {
  Warning: 0,
  Success: 1,
  Error: 2
} /* the as const ensures that the keys/values can be strictly checked */;
const UploadTypes = {
  App: 0,
  AppPart: 1,
  ContentType: 2,
  ContentItem: 3,
  Query: 4,
  View: 5
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 34616:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/file-upload-dialog/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploadDialogComponent: () => (/* reexport safe */ _file_upload_dialog_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadDialogComponent),
/* harmony export */   FileUploadMessageTypes: () => (/* reexport safe */ _file_upload_dialog_models__WEBPACK_IMPORTED_MODULE_1__.FileUploadMessageTypes),
/* harmony export */   UploadTypes: () => (/* reexport safe */ _file_upload_dialog_models__WEBPACK_IMPORTED_MODULE_1__.UploadTypes)
/* harmony export */ });
/* harmony import */ var _file_upload_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload-dialog.component */ 64572);
/* harmony import */ var _file_upload_dialog_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload-dialog.models */ 99601);



/***/ }),

/***/ 34575:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/drag-and-drop.directive.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragAndDropDirective: () => (/* binding */ DragAndDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var _base_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.directive */ 3140);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);






class DragAndDropDirective extends _base_directive__WEBPACK_IMPORTED_MODULE_0__.BaseDirective {
  constructor(elementRef, zone, snackBar) {
    super();
    this.zone = zone;
    this.snackBar = snackBar;
    this.markStyle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)('outline');
    /** Comma separated file types, e.g. 'txt,doc,docx' */
    this.allowedFileTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)('');
    this.filesDropped = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    this.dropAreaClass = 'eav-droparea';
    this.markStyleClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.dragClass = 'eav-dragover';
    this.timeouts = [];
    this.element = elementRef.nativeElement;
  }
  ngOnInit() {
    this.markStyleClass.set(`eav-droparea-${this.markStyle()}`);
    this.element.classList.add(this.dropAreaClass, this.markStyleClass());
    this.zone.runOutsideAngular(() => {
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.element, 'dragover').subscribe(event => {
        event.preventDefault();
        event.stopPropagation();
        this.clearTimeouts();
        this.element.classList.add(this.dragClass);
      }));
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.element, 'dragleave').subscribe(event => {
        event.preventDefault();
        event.stopPropagation();
        this.timeouts.push(window.setTimeout(() => {
          this.element.classList.remove(this.dragClass);
        }, 50));
      }));
    });
  }
  ngOnDestroy() {
    this.clearTimeouts();
    this.element.classList.remove(this.dropAreaClass, this.markStyleClass(), this.dragClass);
    super.ngOnDestroy();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clearTimeouts();
    this.element.classList.remove(this.dragClass);
    const fileList = event.dataTransfer.files;
    let files = Array.from(fileList);
    files = this.filterTypes(files, this.allowedFileTypes());
    if (files.length > 0) {
      this.filesDropped.emit(files);
    }
  }
  clearTimeouts() {
    for (const timeout of this.timeouts) {
      clearTimeout(timeout);
    }
    this.timeouts = [];
  }
  filterTypes(files, allowedFileTypes) {
    if (allowedFileTypes === '') {
      return files;
    }
    const allowedTypes = allowedFileTypes.split(',').map(type => type.toLocaleLowerCase());
    const filtered = files.filter(file => {
      const extIndex = file.name.lastIndexOf('.');
      if (extIndex <= 0) {
        return false;
      }
      const ext = file.name.substring(extIndex + 1).toLocaleLowerCase();
      const allowed = allowedTypes.includes(ext);
      return allowed;
    });
    if (files.length !== filtered.length) {
      const allowedTypesString = this.allowedFileTypes().replace(/\,/g, ', ');
      const message = filtered.length ? 'Some files were filtered out. This drop location only accepts file types: ' + allowedTypesString : 'This drop location only accepts file types: ' + allowedTypesString;
      this.snackBar.open(message, null, {
        duration: 5000
      });
    }
    return filtered;
  }
  static {
    this.ɵfac = function DragAndDropDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragAndDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DragAndDropDirective,
      selectors: [["", "appDragAndDrop", ""]],
      hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function DragAndDropDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        markStyle: [1, "markStyle"],
        allowedFileTypes: [1, "allowedFileTypes"]
      },
      outputs: {
        filesDropped: "filesDropped"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
}

/***/ }),

/***/ 12987:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/getting-started.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInstallSettingsService: () => (/* binding */ AppInstallSettingsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);





// copied from 2sxc-ui app/installer
class AppInstallSettingsService {
  constructor(http) {
    this.http = http;
    this.installSettingsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.settings$ = this.installSettingsSubject.asObservable();
    const ready$ = this.settings$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(false));
    ready$.subscribe();
  }
  loadGettingStarted(isContentApp) {
    this.http.get(`sys/install/InstallSettings?isContentApp=${isContentApp}`).subscribe(json => this.installSettingsSubject.next(json));
  }
  static {
    this.ɵfac = function AppInstallSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppInstallSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AppInstallSettingsService,
      factory: AppInstallSettingsService.ɵfac
    });
  }
}

/***/ }),

/***/ 14147:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/installer.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallerService: () => (/* binding */ InstallerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);




// copied from 2sxc-ui app/installer
class InstallerService {
  constructor(http) {
    this.http = http;
  }
  installPackages(packages, step) {
    return packages.reduce((t, c) => t.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => {
      if (!c.url) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
      step(c);
      return this.http.post(`sys/install/RemotePackage?packageUrl=${c.url}`, {});
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true));
  }
  static {
    this.ɵfac = function InstallerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstallerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: InstallerService,
      factory: InstallerService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts.js.map