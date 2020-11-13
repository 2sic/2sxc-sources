(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"],{

/***/ "0adC":
/*!*******************************************************!*\
  !*** ../edit/shared/services/edit-routing.service.ts ***!
  \*******************************************************/
/*! exports provided: EditRoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoutingService", function() { return EditRoutingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _ng_dialogs_src_app_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ng-dialogs/src/app/shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _store_ngrx_data_language_instance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/ngrx-data/language-instance.service */ "ywpU");
/* harmony import */ var _edit_routing_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-routing.helpers */ "LCtb");








var EditRoutingService = /** @class */ (function () {
    function EditRoutingService(router, languageInstanceService) {
        this.router = router;
        this.languageInstanceService = languageInstanceService;
    }
    // spm TODO: ngOnDestroy only fires in services provided in component
    EditRoutingService.prototype.ngOnDestroy = function () {
        this.childFormResult$.complete();
        this.subscription.unsubscribe();
    };
    EditRoutingService.prototype.init = function (route, formId, dialogRef) {
        this.route = route;
        this.dialogRef = dialogRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.childFormResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.initHideHeader(formId);
        this.initChildFormResult();
        this.refreshOnChildVersionsClosed();
    };
    /** Tells if field with this index should be expanded */
    EditRoutingService.prototype.isExpanded = function (fieldId, entityGuid) {
        var fieldIndex = fieldId.toString();
        return this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.detailsEntityGuid === entityGuid && params.detailsFieldId === fieldIndex; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
    };
    /** Fires when child form is closed and has a result, new entity was added */
    EditRoutingService.prototype.childFormResult = function (fieldId, entityGuid) {
        return this.childFormResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (childResult) { return childResult.updateEntityGuid === entityGuid && childResult.updateFieldId === fieldId && childResult.result != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (childResult) { return childResult.result; }));
    };
    /** Fires when child form is closed */
    EditRoutingService.prototype.childFormClosed = function () {
        return this.childFormResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (childResult) { return null; }));
    };
    EditRoutingService.prototype.expand = function (expand, fieldId, entityGuid, componentTag) {
        var params = this.route.snapshot.params;
        var oldHasDetails = params.detailsEntityGuid != null && params.detailsFieldId != null;
        var oldEditUrl = "edit/" + params.items + (oldHasDetails ? "/details/" + params.detailsEntityGuid + "/" + params.detailsFieldId : '');
        var newEditUrl = "edit/" + params.items + (expand ? "/details/" + entityGuid + "/" + fieldId : '');
        var currentUrl = Object(_edit_routing_helpers__WEBPACK_IMPORTED_MODULE_7__["calculatePathFromRoot"])(this.route);
        var lastIndex = currentUrl.lastIndexOf(oldEditUrl);
        if (lastIndex <= 0) {
            return;
        }
        var newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
        this.router.navigate([newUrl], { state: componentTag && { componentTag: componentTag } });
    };
    /** Opens child dialog and stores update entityGuid and fieldId in the url, if field is not expanded already */
    EditRoutingService.prototype.open = function (fieldId, entityGuid, form) {
        var formUrl = Object(_ng_dialogs_src_app_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__["convertFormToUrl"])(form);
        var params = this.route.snapshot.params;
        var hasDetails = params.detailsEntityGuid != null && params.detailsFieldId != null;
        // if field is expanded, just open child because that info will be used for field update
        if (hasDetails) {
            this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
            return;
        }
        // otherwise add /update/:entityGuid/:fieldId to the url
        var oldEditUrl = "edit/" + params.items;
        var newEditUrl = "edit/" + params.items + "/update/" + entityGuid + "/" + fieldId + "/edit/" + formUrl;
        var currentUrl = Object(_edit_routing_helpers__WEBPACK_IMPORTED_MODULE_7__["calculatePathFromRoot"])(this.route);
        var lastIndex = currentUrl.lastIndexOf(oldEditUrl);
        if (lastIndex <= 0) {
            return;
        }
        var newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
        this.router.navigate([newUrl]);
    };
    /** Update hideHeader for the form. Fix for safari and mobile browsers */
    EditRoutingService.prototype.initHideHeader = function (formId) {
        var _this = this;
        this.subscription.add(this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.detailsEntityGuid != null && params.detailsFieldId != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (hasDetails) {
            _this.languageInstanceService.updateHideHeader(formId, hasDetails);
        }));
    };
    EditRoutingService.prototype.initChildFormResult = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var _a;
            var params = _this.route.snapshot.params;
            var hasDetails = params.detailsEntityGuid != null && params.detailsFieldId != null;
            var updateEntityGuid = hasDetails ? params.detailsEntityGuid : params.updateEntityGuid;
            var updateFieldId = hasDetails ? params.detailsFieldId : params.updateFieldId;
            var navigation = _this.router.getCurrentNavigation();
            var editResult = (_a = navigation.extras) === null || _a === void 0 ? void 0 : _a.state;
            var formResult = {
                updateEntityGuid: updateEntityGuid,
                updateFieldId: parseInt(updateFieldId, 10),
                result: editResult,
            };
            return formResult;
        })).subscribe(function (formResult) {
            // alert subscribers that child form closed
            _this.childFormResult$.next(formResult);
            // clear update ids from url (leave expanded/details)
            var params = _this.route.snapshot.params;
            var hasUpdate = params.updateEntityGuid != null && params.updateFieldId != null;
            if (!hasUpdate) {
                return;
            }
            var oldEditUrl = "edit/" + params.items + "/update/" + params.updateEntityGuid + "/" + params.updateFieldId;
            var newEditUrl = "edit/" + params.items;
            var currentUrl = Object(_edit_routing_helpers__WEBPACK_IMPORTED_MODULE_7__["calculatePathFromRoot"])(_this.route);
            var lastIndex = currentUrl.lastIndexOf(oldEditUrl);
            if (lastIndex <= 0) {
                return;
            }
            var newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
            _this.router.navigate([newUrl]);
        }));
    };
    EditRoutingService.prototype.refreshOnChildVersionsClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var _a;
            var navigation = _this.router.getCurrentNavigation();
            var versionsResult = (_a = navigation.extras) === null || _a === void 0 ? void 0 : _a.state;
            return versionsResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (versionsResult) { return (versionsResult === null || versionsResult === void 0 ? void 0 : versionsResult.refreshEdit) != null; })).subscribe(function (result) {
            if (!result.refreshEdit) {
                return;
            }
            var params = _this.route.snapshot.params;
            var oldEditUrl = "edit/" + params.items;
            var newEditUrl = "edit/refresh/" + params.items;
            var currentUrl = Object(_edit_routing_helpers__WEBPACK_IMPORTED_MODULE_7__["calculatePathFromRoot"])(_this.route);
            var lastIndex = currentUrl.lastIndexOf(oldEditUrl);
            if (lastIndex <= 0) {
                return;
            }
            var newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
            var navRes = {
                navigateUrl: newUrl,
            };
            _this.dialogRef.close(navRes);
        }));
    };
    EditRoutingService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _store_ngrx_data_language_instance_service__WEBPACK_IMPORTED_MODULE_6__["LanguageInstanceService"] }
    ]; };
    EditRoutingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _store_ngrx_data_language_instance_service__WEBPACK_IMPORTED_MODULE_6__["LanguageInstanceService"]])
    ], EditRoutingService);
    return EditRoutingService;
}());



/***/ }),

/***/ "0oHT":
/*!***************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-archive.svg ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M128 96v32h32V96zm65.9 169.6c-1.1-5.6-6-9.6-11.8-9.6H160v-32h-32v32l-19.4 97.2c-6.5 32.5 18.3 62.8 51.4 62.8s57.9-30.3 51.4-62.8zm-33.6 124.5c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zM128 160v32h32v-32zm64-96h-32v32h32zm177.9 33.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.4 2.1 7.4 4.2l83.9 83.9c2 2 3.5 4.6 4.2 7.4H256zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h79.7v32h32V32H224v104c0 13.3 10.7 24 24 24h104zM192 192h-32v32h32zm0-64h-32v32h32z\"/></svg>");

/***/ }),

/***/ "2jx7":
/*!*************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-audio.svg ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-77.6-66.6c38.5-26 61.6-69.3 61.6-115.7 0-24.7-6.5-48.9-18.9-70.1-12-20.6-29.1-37.8-49.6-50-7.1-4.2-16.3-1.9-20.6 5.2-4.2 7.1-1.9 16.3 5.2 20.6 33.1 19.7 53.7 55.8 53.7 94.3 0 36.5-18.1 70.4-48.3 90.9-6.9 4.6-8.7 14-4 20.8 2.9 4.3 7.6 6.6 12.4 6.6 3.1 0 6-.8 8.5-2.6zm-26.6-38.3c26-17.3 41.5-46.2 41.5-77.4 0-32.9-17.7-63.7-46.2-80.3-7.2-4.2-16.3-1.7-20.5 5.4-4.2 7.2-1.7 16.3 5.4 20.5 19.3 11.2 31.3 32 31.3 54.3 0 21.1-10.5 40.7-28.1 52.4-6.9 4.6-8.8 13.9-4.2 20.8 2.9 4.4 7.7 6.7 12.5 6.7 2.8.1 5.7-.7 8.3-2.4zm-27-38.2c13.7-8.5 21.8-23.1 21.8-39.2 0-17-9.3-32.5-24.2-40.6-7.3-3.9-16.4-1.2-20.3 6.1-3.9 7.3-1.2 16.4 6.1 20.3 5.2 2.8 8.5 8.3 8.5 14.2 0 5.6-2.9 10.8-7.6 13.7-7 4.4-9.2 13.6-4.8 20.7 2.8 4.6 7.7 7.1 12.8 7.1 2.5 0 5.2-.7 7.7-2.3zM138 266.7v74.7L112 322H94v-36h18l26-19.3m17.9-50.7c-2.9 0-6 1.1-8.4 3.5L104 256H76c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h28l43.5 36.5c2.4 2.4 5.4 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12V228c0-7.2-5.9-12-12.1-12z\"/></svg>");

/***/ }),

/***/ "39Ct":
/*!*****************************************************!*\
  !*** ../edit/shared/services/load-icons.service.ts ***!
  \*****************************************************/
/*! exports provided: LoadIconsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIconsService", function() { return LoadIconsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_assets_icons_2sxc_Material_Icon_Adam_48_filled_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!../../assets/icons/2sxc/Material-Icon-Adam-48-filled.svg */ "oNst");
/* harmony import */ var _raw_loader_assets_icons_2sxc_Material_Icon_Adam_48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!../../assets/icons/2sxc/Material-Icon-Adam-48.svg */ "bA4n");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_draft_branch_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/draft-branch.svg */ "XziN");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_archive_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-archive.svg */ "0oHT");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_audio_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-audio.svg */ "2jx7");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_code_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-code.svg */ "kjhN");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_excel_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-excel.svg */ "I84r");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_image_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-image.svg */ "7C3Y");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_pdf_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-pdf.svg */ "p67T");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_powerpoint_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-powerpoint.svg */ "bIEG");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_text_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-text.svg */ "F7uU");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_video_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-video.svg */ "nj3b");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_word_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file-word.svg */ "onhS");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/file.svg */ "FChG");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_folder_plus_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/folder-plus.svg */ "YOVi");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_folder_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/folder.svg */ "7tRm");
/* harmony import */ var _raw_loader_assets_icons_font_awesome_sitemap_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! raw-loader!../../assets/icons/font-awesome/sitemap.svg */ "jFY9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");





















var LoadIconsService = /** @class */ (function () {
    function LoadIconsService(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.icons = [
            { name: 'apple', html: _raw_loader_assets_icons_2sxc_Material_Icon_Adam_48_svg__WEBPACK_IMPORTED_MODULE_2__["default"] },
            { name: 'appleFilled', html: _raw_loader_assets_icons_2sxc_Material_Icon_Adam_48_filled_svg__WEBPACK_IMPORTED_MODULE_1__["default"] },
            { name: 'draft-branch', html: _raw_loader_assets_icons_font_awesome_draft_branch_svg__WEBPACK_IMPORTED_MODULE_3__["default"] },
            { name: 'file', html: _raw_loader_assets_icons_font_awesome_file_svg__WEBPACK_IMPORTED_MODULE_14__["default"] },
            { name: 'file-archive', html: _raw_loader_assets_icons_font_awesome_file_archive_svg__WEBPACK_IMPORTED_MODULE_4__["default"] },
            { name: 'file-audio', html: _raw_loader_assets_icons_font_awesome_file_audio_svg__WEBPACK_IMPORTED_MODULE_5__["default"] },
            { name: 'file-code', html: _raw_loader_assets_icons_font_awesome_file_code_svg__WEBPACK_IMPORTED_MODULE_6__["default"] },
            { name: 'file-excel', html: _raw_loader_assets_icons_font_awesome_file_excel_svg__WEBPACK_IMPORTED_MODULE_7__["default"] },
            { name: 'file-image', html: _raw_loader_assets_icons_font_awesome_file_image_svg__WEBPACK_IMPORTED_MODULE_8__["default"] },
            { name: 'file-pdf', html: _raw_loader_assets_icons_font_awesome_file_pdf_svg__WEBPACK_IMPORTED_MODULE_9__["default"] },
            { name: 'file-powerpoint', html: _raw_loader_assets_icons_font_awesome_file_powerpoint_svg__WEBPACK_IMPORTED_MODULE_10__["default"] },
            { name: 'file-text', html: _raw_loader_assets_icons_font_awesome_file_text_svg__WEBPACK_IMPORTED_MODULE_11__["default"] },
            { name: 'file-video', html: _raw_loader_assets_icons_font_awesome_file_video_svg__WEBPACK_IMPORTED_MODULE_12__["default"] },
            { name: 'file-word', html: _raw_loader_assets_icons_font_awesome_file_word_svg__WEBPACK_IMPORTED_MODULE_13__["default"] },
            { name: 'folder', html: _raw_loader_assets_icons_font_awesome_folder_svg__WEBPACK_IMPORTED_MODULE_16__["default"] },
            { name: 'folder-plus', html: _raw_loader_assets_icons_font_awesome_folder_plus_svg__WEBPACK_IMPORTED_MODULE_15__["default"] },
            { name: 'sitemap', html: _raw_loader_assets_icons_font_awesome_sitemap_svg__WEBPACK_IMPORTED_MODULE_17__["default"] },
        ];
    }
    LoadIconsService.prototype.load = function () {
        var _this = this;
        this.icons.forEach(function (icon) {
            _this.matIconRegistry.addSvgIconLiteral(icon.name, _this.domSanitizer.bypassSecurityTrustHtml(icon.html));
        });
    };
    LoadIconsService.ctorParameters = function () { return [
        { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__["DomSanitizer"] }
    ]; };
    LoadIconsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_18__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__["DomSanitizer"]])
    ], LoadIconsService);
    return LoadIconsService;
}());



/***/ }),

/***/ "6fnQ":
/*!*************************************************!*\
  !*** ../edit/shared/services/assets.service.ts ***!
  \*************************************************/
/*! exports provided: webApiAppFilesAll, webApiAppFile, webApiAppFileCreate, AssetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiAppFilesAll", function() { return webApiAppFilesAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiAppFile", function() { return webApiAppFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiAppFileCreate", function() { return webApiAppFileCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return AssetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _eav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eav.service */ "JXuk");





var webApiAppFilesRoot = 'admin/appfiles/';
var webApiAppFilesAll = webApiAppFilesRoot + 'all';
var webApiAppFile = webApiAppFilesRoot + 'asset';
var webApiAppFileCreate = webApiAppFilesRoot + 'create';
var AssetsService = /** @class */ (function () {
    function AssetsService(http, eavService, dnnContext) {
        this.http = http;
        this.eavService = eavService;
        this.dnnContext = dnnContext;
    }
    AssetsService.prototype.getAll = function (global) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiAppFilesAll), {
            params: { appId: this.eavService.eavConfig.appId.toString(), global: global.toString(), withSubfolders: 'true' },
        });
    };
    AssetsService.prototype.create = function (path, global) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiAppFileCreate), {}, {
            params: { appId: this.eavService.eavConfig.appId.toString(), global: global.toString(), path: path }
        });
    };
    AssetsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _eav_service__WEBPACK_IMPORTED_MODULE_4__["EavService"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    AssetsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _eav_service__WEBPACK_IMPORTED_MODULE_4__["EavService"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], AssetsService);
    return AssetsService;
}());



/***/ }),

/***/ "7C3Y":
/*!*************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-image.svg ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z\"/></svg>");

/***/ }),

/***/ "7tRm":
/*!*********************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/folder.svg ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M194.74 96l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V112c0-8.84 7.16-16 16-16h146.74M48 64C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48z\"/></svg>");

/***/ }),

/***/ "F7uU":
/*!************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-text.svg ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z\"/></svg>");

/***/ }),

/***/ "FChG":
/*!*******************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file.svg ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16z\"/></svg>");

/***/ }),

/***/ "I84r":
/*!*************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-excel.svg ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zM211.7 308l50.5-81.8c4.8-8-.9-18.2-10.3-18.2h-4.1c-4.1 0-7.9 2.1-10.1 5.5-31 48.5-36.4 53.5-45.7 74.5-17.2-32.2-8.4-16-45.8-74.5-2.2-3.4-6-5.5-10.1-5.5H132c-9.4 0-15.1 10.3-10.2 18.2L173 308l-59.1 89.5c-5.1 8 .6 18.5 10.1 18.5h3.5c4.1 0 7.9-2.1 10.1-5.5 37.2-58 45.3-62.5 54.4-82.5 31.5 56.7 44.3 67.2 54.4 82.6 2.2 3.4 6 5.4 10 5.4h3.6c9.5 0 15.2-10.4 10.1-18.4L211.7 308z\"/></svg>");

/***/ }),

/***/ "IMfk":
/*!****************************************************!*\
  !*** ../edit/shared/services/file-type.service.ts ***!
  \****************************************************/
/*! exports provided: FileTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTypeService", function() { return FileTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");


var FileTypeService = /** @class */ (function () {
    function FileTypeService() {
        this.defaultIcon = 'file';
        this.checkImgRegEx = /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:jpg|jpeg|gif|png))(?:\?([^#]*))?(?:#(.*))?/i;
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
            xsl: 'file-code',
        };
        this.matExtensions = {
            vcf: 'person',
        };
    }
    FileTypeService.prototype.getExtension = function (filename) {
        return filename.substr(filename.lastIndexOf('.') + 1).toLowerCase();
    };
    FileTypeService.prototype.getIconClass = function (filename) {
        var ext = this.getExtension(filename);
        return this.matExtensions[ext] || this.customExtensions[ext] || this.defaultIcon;
    };
    FileTypeService.prototype.isKnownType = function (filename) {
        return this.matExtensions[this.getExtension(filename)] != null;
    };
    FileTypeService.prototype.isImage = function (filename) {
        return this.checkImgRegEx.test(filename);
    };
    FileTypeService.ctorParameters = function () { return []; };
    FileTypeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FileTypeService);
    return FileTypeService;
}());



/***/ }),

/***/ "JXuk":
/*!**********************************************!*\
  !*** ../edit/shared/services/eav.service.ts ***!
  \**********************************************/
/*! exports provided: webApiEditRoot, EavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiEditRoot", function() { return webApiEditRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EavService", function() { return EavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ng-dialogs/src/app/shared/constants/session.constants */ "0ELX");
/* harmony import */ var _ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ng-dialogs/src/app/shared/services/context */ "Iv+g");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/item.actions */ "gZep");









var webApiEditRoot = 'cms/edit/';
var EavService = /** @class */ (function () {
    function EavService(http, store, dnnContext, 
    /** Used to fetch form data and fill up eavConfig. Do not use anywhere else */
    context) {
        this.http = http;
        this.store = store;
        this.dnnContext = dnnContext;
        this.context = context;
        /**
         * Tells subscribed custom components that they should submit their values,
         * e.g. form is going to be saved and we don't want to miss any values.
         * Custom components run outside Angular zone and we have to wait for their values to update.
         */
        this.forceConnectorSave$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Temporary solution to circumvent value not being emitted on language change. Fix language change!  */
        this.formValueChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Temporary solution to circumvent disabled not being emitted on language change. Fix language change!  */
        this.formDisabledChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    // spm TODO: ngOnDestroy only fires in services provided in component
    EavService.prototype.ngOnDestroy = function () {
        this.forceConnectorSave$.complete();
        this.formValueChange$.complete();
        this.formDisabledChange$.complete();
    };
    /** Create EavConfiguration from sessionStorage */
    EavService.prototype.setEavConfig = function (editDialogContext) {
        this.eavConfig = {
            zoneId: this.context.zoneId.toString(),
            appId: this.context.appId.toString(),
            appRoot: editDialogContext.App.Url,
            lang: editDialogContext.Language.Current,
            langPri: editDialogContext.Language.Primary,
            langs: editDialogContext.Language.All,
            moduleId: this.context.moduleId.toString(),
            partOfPage: sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__["keyPartOfPage"]),
            portalRoot: sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__["keyPortalRoot"]),
            tabId: this.context.tabId.toString(),
            systemRoot: window.location.pathname.split('/dist/')[0] + '/',
            versioningOptions: this.getVersioningOptions(sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__["keyPartOfPage"]) === 'true', sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__["keyPublishing"])),
        };
    };
    EavService.prototype.fetchFormData = function (items) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiEditRoot + 'load'), items, {
            params: { appId: this.context.appId.toString() }
        });
    };
    EavService.prototype.saveItem = function (item) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_8__["SaveItemAttributesValuesAction"](item));
    };
    EavService.prototype.saveItemSuccess = function (data) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_8__["SaveItemAttributesValuesSuccessAction"](data));
    };
    EavService.prototype.saveItemError = function (error) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_8__["SaveItemAttributesValuesErrorAction"](error));
    };
    EavService.prototype.saveFormData = function (body) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiEditRoot + 'save'), body, {
            params: { appId: this.eavConfig.appId.toString(), partOfPage: this.eavConfig.partOfPage }
        });
    };
    EavService.prototype.getVersioningOptions = function (partOfPage, publishing) {
        if (!partOfPage) {
            return { show: true, hide: true, branch: true };
        }
        var publish = publishing || '';
        switch (publish) {
            case '':
            case 'DraftOptional':
                return { show: true, hide: true, branch: true };
            case 'DraftRequired':
                return { branch: true, hide: true };
            default: {
                console.error('invalid versioning requiremenets: ' + publish);
                return {};
            }
        }
    };
    EavService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] },
        { type: _ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"] }
    ]; };
    EavService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"],
            _ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"]])
    ], EavService);
    return EavService;
}());



/***/ }),

/***/ "LCtb":
/*!*******************************************************!*\
  !*** ../edit/shared/services/edit-routing.helpers.ts ***!
  \*******************************************************/
/*! exports provided: calculatePathFromRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePathFromRoot", function() { return calculatePathFromRoot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

function calculatePathFromRoot(route) {
    var e_1, _a, e_2, _b;
    var lastChild = route;
    while (lastChild.firstChild) {
        lastChild = lastChild.firstChild;
    }
    var pathFromRoot = '';
    try {
        for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(lastChild.snapshot.pathFromRoot), _d = _c.next(); !_d.done; _d = _c.next()) {
            var path = _d.value;
            if (path.url.length <= 0) {
                continue;
            }
            try {
                for (var _e = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(path.url)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var urlSegment = _f.value;
                    if (!urlSegment.path) {
                        continue;
                    }
                    pathFromRoot += '/' + urlSegment.path;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return pathFromRoot;
}


/***/ }),

/***/ "Scw0":
/*!*********************************************************!*\
  !*** ../edit/shared/services/scripts-loader.service.ts ***!
  \*********************************************************/
/*! exports provided: FileTypeConstants, ScriptsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTypeConstants", function() { return FileTypeConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptsLoaderService", function() { return ScriptsLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/url-helper */ "4UCL");
/* harmony import */ var _eav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eav.service */ "JXuk");




var FileTypeConstants = {
    CSS: '.css',
    JS: '.js',
};
var ScriptsLoaderService = /** @class */ (function () {
    function ScriptsLoaderService(eavService) {
        this.eavService = eavService;
        this.loadedFiles = [];
    }
    /** Loads CSS and JS files in order (CSS first) and calls callback function when finished */
    ScriptsLoaderService.prototype.load = function (scripts, callback) {
        var sortedFiles = this.sortByType(scripts);
        this.insertToDom(sortedFiles, callback, 0); // async, called again and again after each script is loaded
    };
    ScriptsLoaderService.prototype.sortByType = function (scripts) {
        var _this = this;
        var cssFiles = [];
        var jsFiles = [];
        scripts.forEach(function (script) {
            var file = {
                path: _this.resolveSpecialPaths(script),
                type: null,
                loaded: false,
                domEl: null
            };
            if (file.path.endsWith(FileTypeConstants.CSS)) {
                file.type = FileTypeConstants.CSS;
                cssFiles.push(file);
            }
            else if (file.path.endsWith(FileTypeConstants.JS)) {
                file.type = FileTypeConstants.JS;
                jsFiles.push(file);
            }
        });
        return cssFiles.concat(jsFiles);
    };
    ScriptsLoaderService.prototype.insertToDom = function (files, callback, increment) {
        var _this = this;
        var file = files[increment];
        increment++;
        if (!file) {
            callback();
            return;
        }
        file.path = file.path + '?sxcver=' + sxcVersion; // break cache
        var existing = this.loadedFiles.find(function (loadedFile) { return loadedFile.path === file.path; });
        if (existing) {
            if (existing.loaded) {
                this.insertToDom(files, callback, increment);
            }
            else {
                var _listener_1 = function () {
                    file.loaded = true;
                    _this.insertToDom(files, callback, increment);
                    existing.domEl.removeEventListener('load', _listener_1);
                    existing.domEl.removeEventListener('error', _listener_1);
                };
                existing.domEl.addEventListener('load', _listener_1);
                existing.domEl.addEventListener('error', _listener_1);
            }
        }
        else {
            if (file.type === FileTypeConstants.CSS) {
                file.domEl = document.createElement('link');
                file.domEl.rel = 'stylesheet';
                file.domEl.href = file.path;
            }
            else if (file.type === FileTypeConstants.JS) {
                file.domEl = document.createElement('script');
                file.domEl.type = 'module';
                file.domEl.src = file.path;
            }
            var _listener_2 = function () {
                file.loaded = true;
                _this.insertToDom(files, callback, increment);
                file.domEl.removeEventListener('load', _listener_2);
                file.domEl.removeEventListener('error', _listener_2);
            };
            file.domEl.addEventListener('load', _listener_2);
            file.domEl.addEventListener('error', _listener_2);
            document.querySelector('head').appendChild(file.domEl);
            this.loadedFiles.push(file);
        }
    };
    ScriptsLoaderService.prototype.resolveSpecialPaths = function (url) {
        return url.replace(/\[System:Path\]/i, _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["UrlHelper"].getUrlPrefix('system', this.eavService.eavConfig))
            .replace(/\[Zone:Path\]/i, _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["UrlHelper"].getUrlPrefix('zone', this.eavService.eavConfig))
            .replace(/\[App:Path\]/i, _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["UrlHelper"].getUrlPrefix('app', this.eavService.eavConfig));
    };
    ScriptsLoaderService.ctorParameters = function () { return [
        { type: _eav_service__WEBPACK_IMPORTED_MODULE_3__["EavService"] }
    ]; };
    ScriptsLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_eav_service__WEBPACK_IMPORTED_MODULE_3__["EavService"]])
    ], ScriptsLoaderService);
    return ScriptsLoaderService;
}());



/***/ }),

/***/ "XziN":
/*!***************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/draft-branch.svg ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 39.2 28.2 71.8 65.5 78.7-.8 17.2-5 30.4-12.7 40-17.5 21.8-53.1 25.2-90.7 28.7-28.2 2.6-57.4 5.4-80.4 16.9-3.4 1.7-6.7 3.6-9.7 5.7V158.4c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4v195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-36.9-24.9-67.9-58.9-77.2 5-9.6 12.3-14.6 19-18 17.5-8.8 42.5-11.2 68.9-13.7 42.6-4 86.7-8.1 112.7-40.5 12.4-15.5 19-35.5 19.8-60.7C357.3 214 384 182.1 384 144zM32 80c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm96 352c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.4 21.4-47.9 47.8-48h.6c26.3.2 47.6 21.7 47.6 48zm187.8-241.5L304 192c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48c0 22.4-15.4 41.2-36.2 46.5z\"/></svg>");

/***/ }),

/***/ "YOVi":
/*!**************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/folder-plus.svg ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M344 272h-72v-72c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v72h-72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h72v72c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-72h72c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM194.74 96l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V112c0-8.84 7.16-16 16-16h146.74M48 64C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48z\"/></svg>");

/***/ }),

/***/ "b67o":
/*!*************************************************!*\
  !*** ../edit/shared/services/entity.service.ts ***!
  \*************************************************/
/*! exports provided: webApiEntityRoot, webApiEntityList, EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiEntityRoot", function() { return webApiEntityRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiEntityList", function() { return webApiEntityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _eav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eav.service */ "JXuk");





var webApiEntityRoot = 'admin/entity/';
var webApiEntityList = webApiEntityRoot + 'list';
var EntityService = /** @class */ (function () {
    function EntityService(http, eavService, dnnContext) {
        this.http = http;
        this.eavService = eavService;
        this.dnnContext = dnnContext;
    }
    EntityService.prototype.getAvailableEntities = function (filter, contentTypeName) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_eav_service__WEBPACK_IMPORTED_MODULE_4__["webApiEditRoot"] + 'EntityPicker'), filter, {
            params: { contentTypeName: contentTypeName, appId: this.eavService.eavConfig.appId.toString() },
        });
    };
    EntityService.prototype.delete = function (contentType, entityId, force) {
        return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(webApiEntityRoot + 'delete'), {
            params: { contentType: contentType, id: entityId, appId: this.eavService.eavConfig.appId.toString(), force: force.toString() },
        });
    };
    EntityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _eav_service__WEBPACK_IMPORTED_MODULE_4__["EavService"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    EntityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _eav_service__WEBPACK_IMPORTED_MODULE_4__["EavService"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], EntityService);
    return EntityService;
}());



/***/ }),

/***/ "bA4n":
/*!****************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/2sxc/Material-Icon-Adam-48.svg ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 48 48\" style=\"enable-background:new 0 0 48 48;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.st0{display:none;}\r\n\t.st1{display:inline;}\r\n</style>\r\n<g id=\"Layer_1\">\r\n\t<path d=\"M32,4c-6,0-10,4-10,10C28,14,32,10,32,4z\"/>\r\n</g>\r\n<g id=\"Layer_3\" class=\"st0\">\r\n</g>\r\n<g id=\"Icon\">\r\n\t<path d=\"M32,20c3.7,0,6,2.1,6,5.47C38,33.21,33.01,40,30.06,40c-0.25-0.04-0.93-0.35-1.38-0.56c-1.25-0.58-2.8-1.3-4.68-1.3\r\n\t\ts-3.43,0.72-4.68,1.3C18.87,39.65,18.19,39.97,18,40c-3.01,0-8-6.79-8-14.53C10,22.1,12.3,20,16,20c2.44,0,5.29,1.17,6.17,1.62\r\n\t\tL24,22.56l1.83-0.94C26.64,21.2,29.53,20,32,20 M32,16c-4,0-8,2.06-8,2.06S20,16,16,16c-6,0-10,4.01-10,9.47C6,34.74,12,44,18,44\r\n\t\tc2,0,4-1.85,6-1.85S28,44,30,44c6,0,12-9.26,12-18.53C42,20.01,38,16,32,16L32,16z\"/>\r\n</g>\r\n</svg>\r\n");

/***/ }),

/***/ "bIEG":
/*!******************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-powerpoint.svg ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zM204.3 208H140c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-60.4h44.3c38.7 0 67.7-27.3 67.7-69 0-38.6-23.8-66.6-67.7-66.6zm26 97.7c-7.5 7.6-17.8 11.4-31 11.4H160V233h39.7c12.9 0 23.1 3.7 30.6 11.1 15.3 15.1 15 46.5 0 61.6z\"/></svg>");

/***/ }),

/***/ "gN1p":
/*!************************************************************************************!*\
  !*** ../edit/eav-material-controls/input-types/dnn-bridge/dnn-bridge.component.ts ***!
  \************************************************************************************/
/*! exports provided: DnnBridgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DnnBridgeComponent", function() { return DnnBridgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_dnn_bridge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dnn-bridge.component.html */ "vz87");
/* harmony import */ var _dnn_bridge_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnn-bridge.component.scss */ "wX+F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _shared_services_eav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/eav.service */ "JXuk");






var DnnBridgeComponent = /** @class */ (function () {
    function DnnBridgeComponent(dialogData, eavService) {
        this.dialogData = dialogData;
        this.eavService = eavService;
    }
    DnnBridgeComponent.prototype.ngOnInit = function () {
        var e_1, _a;
        var connector = this.dialogData.connector;
        var iframeSrc = this.eavService.eavConfig.portalRoot + 'Default.aspx'
            + '?tabid=' + this.eavService.eavConfig.tabId
            + '&ctl=webformsbridge'
            + '&mid=' + this.eavService.eavConfig.moduleId
            + '&dnnprintmode=true'
            + '&SkinSrc=%5bG%5dSkins%2f_default%2fNo+Skin'
            + '&ContainerSrc=%5bG%5dContainers%2f_default%2fNo+Container'
            + '&type=' + connector.dialogType;
        var paramKeys = Object.keys(connector.params);
        try {
            for (var paramKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(paramKeys), paramKeys_1_1 = paramKeys_1.next(); !paramKeys_1_1.done; paramKeys_1_1 = paramKeys_1.next()) {
                var key = paramKeys_1_1.value;
                var value = connector.params[key];
                if (value == null || value === '') {
                    continue;
                }
                iframeSrc += "&" + key + "=" + encodeURIComponent(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (paramKeys_1_1 && !paramKeys_1_1.done && (_a = paramKeys_1.return)) _a.call(paramKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.iframeSrc = iframeSrc;
    };
    DnnBridgeComponent.prototype.iframeLoaded = function (event) {
        var iframe = event.target;
        var w = iframe.contentWindow || iframe;
        if (!w.connectBridge) {
            return alert("Can't connect to the dialog - you are probably running a new DNN(v.8 +) and didn't activate the old Telerik components. Please install these in the host > extensions to get this to work");
        }
        w.connectBridge(this.dialogData.connector);
    };
    DnnBridgeComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _shared_services_eav_service__WEBPACK_IMPORTED_MODULE_5__["EavService"] }
    ]; };
    DnnBridgeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dnn-bridge',
            template: _raw_loader_dnn_bridge_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_dnn_bridge_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _shared_services_eav_service__WEBPACK_IMPORTED_MODULE_5__["EavService"]])
    ], DnnBridgeComponent);
    return DnnBridgeComponent;
}());



/***/ }),

/***/ "gZep":
/*!****************************************************!*\
  !*** ../edit/shared/store/actions/item.actions.ts ***!
  \****************************************************/
/*! exports provided: SAVE_ITEM_ATTRIBUTES_VALUES, SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS, SAVE_ITEM_ATTRIBUTES_VALUES_ERROR, SaveItemAttributesValuesAction, SaveItemAttributesValuesSuccessAction, SaveItemAttributesValuesErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM_ATTRIBUTES_VALUES", function() { return SAVE_ITEM_ATTRIBUTES_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS", function() { return SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM_ATTRIBUTES_VALUES_ERROR", function() { return SAVE_ITEM_ATTRIBUTES_VALUES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveItemAttributesValuesAction", function() { return SaveItemAttributesValuesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveItemAttributesValuesSuccessAction", function() { return SaveItemAttributesValuesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveItemAttributesValuesErrorAction", function() { return SaveItemAttributesValuesErrorAction; });
// Item Attributes
var SAVE_ITEM_ATTRIBUTES_VALUES = '[Item] SAVE_ITEM_ATTRIBUTES_VALUES';
var SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS = '[Item] SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS';
var SAVE_ITEM_ATTRIBUTES_VALUES_ERROR = '[Item] SAVE_ITEM_ATTRIBUTES_VALUES_ERROR';
/** Save (submit) */
var SaveItemAttributesValuesAction = /** @class */ (function () {
    function SaveItemAttributesValuesAction(item) {
        this.item = item;
        this.type = SAVE_ITEM_ATTRIBUTES_VALUES;
    }
    return SaveItemAttributesValuesAction;
}());

var SaveItemAttributesValuesSuccessAction = /** @class */ (function () {
    function SaveItemAttributesValuesSuccessAction(data) {
        this.data = data;
        this.type = SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS;
    }
    return SaveItemAttributesValuesSuccessAction;
}());

var SaveItemAttributesValuesErrorAction = /** @class */ (function () {
    function SaveItemAttributesValuesErrorAction(error) {
        this.error = error;
        this.type = SAVE_ITEM_ATTRIBUTES_VALUES_ERROR;
    }
    return SaveItemAttributesValuesErrorAction;
}());



/***/ }),

/***/ "gatd":
/*!************************************************!*\
  !*** ../edit/shared/services/query.service.ts ***!
  \************************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var QueryService = /** @class */ (function () {
    function QueryService(http, dnnContext) {
        this.http = http;
        this.dnnContext = dnnContext;
    }
    QueryService.prototype.getAvailableEntities = function (queryUrl, includeGuid, params) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl("app/auto/query/" + queryUrl + "?includeGuid=" + includeGuid + (params ? "&" + params : '')));
    };
    QueryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    QueryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "iKpp":
/*!*****************************************************!*\
  !*** ../edit/shared/services/dnn-bridge.service.ts ***!
  \*****************************************************/
/*! exports provided: DnnBridgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DnnBridgeService", function() { return DnnBridgeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _eav_material_controls_input_types_dnn_bridge_dnn_bridge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../eav-material-controls/input-types/dnn-bridge/dnn-bridge.component */ "gN1p");
/* harmony import */ var _eav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eav.service */ "JXuk");







var DnnBridgeService = /** @class */ (function () {
    function DnnBridgeService(http, dnnContext, eavService, dialog) {
        this.http = http;
        this.dnnContext = dnnContext;
        this.eavService = eavService;
        this.dialog = dialog;
    }
    DnnBridgeService.prototype.open = function (dialogType, params, callback) {
        var dialogRef;
        var data = {
            connector: {
                params: params,
                valueChanged: function (value) {
                    dialogRef.close();
                    callback(value);
                },
                dialogType: dialogType,
            },
        };
        dialogRef = this.dialog.open(_eav_material_controls_input_types_dnn_bridge_dnn_bridge_component__WEBPACK_IMPORTED_MODULE_5__["DnnBridgeComponent"], {
            data: data,
            width: '650px',
        });
        return dialogRef;
    };
    DnnBridgeService.prototype.getUrlOfId = function (url, contentType, guid, field) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl('dnn/Hyperlink/ResolveHyperlink'), {
            params: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ hyperlink: url }, (guid && { guid: guid })), (contentType && { contentType: contentType })), (field && { field: field })), { appid: this.eavService.eavConfig.appId.toString() })
        });
    };
    DnnBridgeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] },
        { type: _eav_service__WEBPACK_IMPORTED_MODULE_6__["EavService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    DnnBridgeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"], _eav_service__WEBPACK_IMPORTED_MODULE_6__["EavService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], DnnBridgeService);
    return DnnBridgeService;
}());



/***/ }),

/***/ "jFY9":
/*!**********************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/sitemap.svg ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path d=\"M608 352h-32v-97.59c0-16.77-13.62-30.41-30.41-30.41H336v-64h48c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h48v64H94.41C77.62 224 64 237.64 64 254.41V352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32H96v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-32v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-480 32v96H32v-96h96zm240 0v96h-96v-96h96zM256 128V32h128v96H256zm352 352h-96v-96h96v96z\"/></svg>");

/***/ }),

/***/ "kfUh":
/*!***********************************************************!*\
  !*** ../edit/shared/services/dropzone-dragging.helper.ts ***!
  \***********************************************************/
/*! exports provided: DropzoneDraggingHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneDraggingHelper", function() { return DropzoneDraggingHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var DropzoneDraggingHelper = /** @class */ (function () {
    function DropzoneDraggingHelper(zone) {
        this.zone = zone;
        this.eventListeners = [];
    }
    /** Starts listening for dragover and drop events on a given element */
    DropzoneDraggingHelper.prototype.attach = function (htmlEl) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            htmlEl.addEventListener('dragover', dragoverListener, { passive: true });
            htmlEl.addEventListener('drop', dropListener, { passive: true });
            _this.eventListeners.push({ element: htmlEl, type: 'dragover', listener: dragoverListener }, { element: htmlEl, type: 'drop', listener: dropListener });
            function dragoverListener() {
                clearTimeouts(windowBodyTimeouts); // clear timeouts from global array of timeouts which clear draggingClass from body
                document.body.classList.add(draggingClass);
            }
            function dropListener() {
                document.body.classList.remove(draggingClass);
            }
            function clearTimeouts(timeoutsArray) {
                var e_1, _a;
                try {
                    for (var timeoutsArray_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(timeoutsArray), timeoutsArray_1_1 = timeoutsArray_1.next(); !timeoutsArray_1_1.done; timeoutsArray_1_1 = timeoutsArray_1.next()) {
                        var timeout = timeoutsArray_1_1.value;
                        clearTimeout(timeout);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (timeoutsArray_1_1 && !timeoutsArray_1_1.done && (_a = timeoutsArray_1.return)) _a.call(timeoutsArray_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                timeoutsArray.splice(0, timeoutsArray.length);
            }
        });
    };
    /** Removes event listeners from registered elements */
    DropzoneDraggingHelper.prototype.detach = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.eventListeners.forEach(function (eventListener) {
                var element = eventListener.element;
                var type = eventListener.type;
                var listener = eventListener.listener;
                element.removeEventListener(type, listener);
            });
        });
    };
    return DropzoneDraggingHelper;
}());



/***/ }),

/***/ "kjhN":
/*!************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-code.svg ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zm-22.627 22.628a15.89 15.89 0 0 1 4.195 7.431H256V32.491a15.88 15.88 0 0 1 7.431 4.195l83.883 83.883zM336 480H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h176v104c0 13.255 10.745 24 24 24h104v304c0 8.837-7.163 16-16 16zm-161.471-67.404l-25.928-7.527a5.1 5.1 0 0 1-3.476-6.32l58.027-199.869a5.1 5.1 0 0 1 6.32-3.476l25.927 7.527a5.1 5.1 0 0 1 3.476 6.32L180.849 409.12a5.1 5.1 0 0 1-6.32 3.476zm-48.446-47.674l18.492-19.724a5.101 5.101 0 0 0-.351-7.317L105.725 304l38.498-33.881a5.1 5.1 0 0 0 .351-7.317l-18.492-19.724a5.1 5.1 0 0 0-7.209-.233L57.61 300.279a5.1 5.1 0 0 0 0 7.441l61.263 57.434a5.1 5.1 0 0 0 7.21-.232zm139.043.232l61.262-57.434a5.1 5.1 0 0 0 0-7.441l-61.262-57.434a5.1 5.1 0 0 0-7.209.233l-18.492 19.724a5.101 5.101 0 0 0 .351 7.317L278.275 304l-38.499 33.881a5.1 5.1 0 0 0-.351 7.317l18.492 19.724a5.1 5.1 0 0 0 7.209.232z\"/></svg>");

/***/ }),

/***/ "nj3b":
/*!*************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-video.svg ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M224 280.593C224 267.01 212.989 256 199.407 256H88.593C75.011 256 64 267.01 64 280.593v110.815C64 404.99 75.011 416 88.593 416h110.814C212.989 416 224 404.99 224 391.407V381l27.971 27.971a23.998 23.998 0 0 0 16.97 7.029H296c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-27.059a24.003 24.003 0 0 0-16.97 7.029L224 291v-10.407zM192 384H96v-96h96v96zm80.255-96H288v96h-15.745L224 342.826v-13.652L272.255 288zm97.686-190.059l-83.883-83.882A47.996 47.996 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM256 32.491a15.888 15.888 0 0 1 7.432 4.195l83.882 83.882a15.882 15.882 0 0 1 4.195 7.431H256V32.491zM352 464c0 8.837-7.164 16-16 16H48c-8.836 0-16-7.163-16-16V48c0-8.837 7.164-16 16-16h176v104c0 13.255 10.745 24 24 24h104v304z\"/></svg>");

/***/ }),

/***/ "oNst":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/2sxc/Material-Icon-Adam-48-filled.svg ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 48 48\" style=\"enable-background:new 0 0 48 48;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.st0{display:none;}\r\n\t.st1{display:inline;}\r\n</style>\r\n<g id=\"Layer_1\">\r\n\t<path d=\"M32,4c-6,0-10,4-10,10C28,14,32,10,32,4z\"/>\r\n</g>\r\n<g id=\"Layer_3\" class=\"st0\">\r\n</g>\r\n<g id=\"Icon\">\r\n\t<path d=\"M32,16c-4,0-8,2.06-8,2.06S20,16,16,16c-6,0-10,4.01-10,9.47C6,34.74,12,44,18,44c2,0,4-1.85,6-1.85S28,44,30,44\r\n\t\tc6,0,12-9.26,12-18.53C42,20.01,38,16,32,16L32,16z\"/>\r\n</g>\r\n</svg>\r\n");

/***/ }),

/***/ "onhS":
/*!************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-word.svg ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-53.6-246.5c-6.8 32.8-32.5 139.7-33.4 150.3-5.8-29.1-.7 1.6-41.8-150.9-1.4-5.2-6.2-8.9-11.6-8.9h-6.4c-5.4 0-10.2 3.6-11.6 8.9-38.3 142.3-37.4 140.6-39.4 154.7-4.1-23.9 2.1-2.9-34.4-154.4-1.3-5.4-6.1-9.2-11.7-9.2h-7.2c-7.8 0-13.5 7.3-11.6 14.9 9.5 38 34.5 137.4 42.2 168 1.3 5.3 6.1 9.1 11.6 9.1h17c5.4 0 10.2-3.7 11.6-8.9 34.2-127.7 33.5-123.4 36.7-142.9 6.5 31.1.2 7 36.7 142.9 1.4 5.2 6.2 8.9 11.6 8.9h14c5.5 0 13.7-3.7 15.1-9l42.8-168c1.9-7.6-3.8-15-11.6-15h-6.8c-5.7 0-10.6 4-11.8 9.5z\"/></svg>");

/***/ }),

/***/ "p67T":
/*!***********************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/assets/icons/font-awesome/file-pdf.svg ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z\"/></svg>");

/***/ }),

/***/ "vz87":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!../edit/eav-material-controls/input-types/dnn-bridge/dnn-bridge.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<div class=\"modal-header\">\r\n\t\t<h3 class=\"modal-title\" translate=\"Fields.Hyperlink.PagePicker.Title\"></h3>\r\n\t</div>\r\n\t<div class=\"modal-body\" style=\"height:370px; width:600px\">\r\n\t\t<iframe style=\"width:100%; height: 350px; border: 0;\" [src]=\"iframeSrc | safeResourceUrl\"\r\n\t\t\t(load)=\"iframeLoaded($event)\">\r\n\t\t</iframe>\r\n\t</div>\r\n\t<div class=\"modal-footer\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "wX+F":
/*!**************************************************************************************!*\
  !*** ../edit/eav-material-controls/input-types/dnn-bridge/dnn-bridge.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9lZGl0L2Vhdi1tYXRlcmlhbC1jb250cm9scy9pbnB1dC10eXBlcy9kbm4tYnJpZGdlL2Rubi1icmlkZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ywpU":
/*!*******************************************************************!*\
  !*** ../edit/shared/store/ngrx-data/language-instance.service.ts ***!
  \*******************************************************************/
/*! exports provided: LanguageInstanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageInstanceService", function() { return LanguageInstanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ "t8nT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");





var LanguageInstanceService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LanguageInstanceService, _super);
    function LanguageInstanceService(serviceElementsFactory) {
        var _this = _super.call(this, 'LanguageInstance', serviceElementsFactory) || this;
        _this.localizationWrapperMenuChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.localizationWrapperMenuChange$ = _this.localizationWrapperMenuChangeSource.asObservable();
        return _this;
    }
    LanguageInstanceService.prototype.ngOnDestroy = function () {
        this.localizationWrapperMenuChangeSource.complete();
    };
    /** Add language instance to ngrx-data */
    LanguageInstanceService.prototype.addLanguageInstance = function (formId, currentLanguage, defaultLanguage, uiLanguage, hideHeader) {
        var languageInstance = { formId: formId, currentLanguage: currentLanguage, defaultLanguage: defaultLanguage, uiLanguage: uiLanguage, hideHeader: hideHeader };
        this.addOneToCache(languageInstance);
    };
    /** Get current language observable for the form with given formId */
    LanguageInstanceService.prototype.getCurrentLanguage = function (formId) {
        return this.entities$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (languageInstances) { var _a; return (_a = languageInstances.find(function (langInstance) { return langInstance.formId === formId; })) === null || _a === void 0 ? void 0 : _a.currentLanguage; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (oldLang, newLang) { return oldLang === newLang; }));
    };
    /** Get default language observable for the form with given formId */
    LanguageInstanceService.prototype.getDefaultLanguage = function (formId) {
        return this.entities$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (languageInstances) { var _a; return (_a = languageInstances.find(function (langInstance) { return langInstance.formId === formId; })) === null || _a === void 0 ? void 0 : _a.defaultLanguage; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (oldLang, newLang) { return oldLang === newLang; }));
    };
    /** Get hideHeader for the form. Fix for safari and mobile browsers */
    LanguageInstanceService.prototype.getHideHeader = function (formId) {
        return this.entities$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (languageInstances) { var _a; return (_a = languageInstances.find(function (langInstance) { return langInstance.formId === formId; })) === null || _a === void 0 ? void 0 : _a.hideHeader; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (oldHide, newHide) { return oldHide === newHide; }));
    };
    /** Updated currentLanguage for a form with given formId. If form with given id isn't found, nothing is updated */
    LanguageInstanceService.prototype.updateCurrentLanguage = function (formId, newLanguage) {
        var languageInstance = { formId: formId, currentLanguage: newLanguage };
        this.updateOneInCache(languageInstance);
    };
    /** Update hideHeader for the form. Fix for safari and mobile browsers */
    LanguageInstanceService.prototype.updateHideHeader = function (formId, hideHeader) {
        var languageInstance = { formId: formId, hideHeader: hideHeader };
        this.updateOneInCache(languageInstance);
    };
    LanguageInstanceService.prototype.removeLanguageInstance = function (formId) {
        this.removeOneFromCache(formId);
    };
    /** Trigger info message change on all form controls */
    LanguageInstanceService.prototype.triggerLocalizationWrapperMenuChange = function () {
        this.localizationWrapperMenuChangeSource.next();
    };
    LanguageInstanceService.ctorParameters = function () { return [
        { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceElementsFactory"] }
    ]; };
    LanguageInstanceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceElementsFactory"]])
    ], LanguageInstanceService);
    return LanguageInstanceService;
}(_ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceBase"]));



/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae.js.map