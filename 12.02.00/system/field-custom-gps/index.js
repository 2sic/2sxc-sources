/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./projects/edit/shared/helpers/field-mask.helper.ts":
/*!***********************************************************!*\
  !*** ./projects/edit/shared/helpers/field-mask.helper.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMask = void 0;
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
var FieldMask = /** @class */ (function () {
    function FieldMask(mask, model, changeEvent, overloadPreCleanValues, eavConfig) {
        this.changeEvent = changeEvent;
        this.eavConfig = eavConfig;
        this.fields = [];
        this.findFields = /\[.*?\]/ig;
        this.unwrapField = /[\[\]]/ig;
        this.subscriptions = [];
        this.mask = mask;
        this.model = model;
        this.fields = this.fieldList();
        if (overloadPreCleanValues) {
            this.preClean = overloadPreCleanValues;
        }
        // bind auto-watch only if needed...
        if (model && changeEvent) {
            this.watchAllFields();
        }
    }
    /** Resolves a mask to the final value */
    FieldMask.prototype.resolve = function () {
        var _this = this;
        var value = this.mask;
        if (this.eavConfig != null && value != null) {
            value = value.replace('[App:AppId]', this.eavConfig.appId);
            value = value.replace('[App:ZoneId]', this.eavConfig.zoneId);
        }
        this.fields.forEach(function (e, i) {
            var replaceValue = _this.model.hasOwnProperty(e) && _this.model[e] && _this.model[e].value ? _this.model[e].value : '';
            var cleaned = _this.preClean(e, replaceValue);
            value = value.replace('[' + e + ']', cleaned);
        });
        return value;
    };
    /** Retrieves a list of all fields used in the mask */
    FieldMask.prototype.fieldList = function () {
        var _this = this;
        var result = [];
        if (!this.mask) {
            return result;
        }
        var matches = this.mask.match(this.findFields);
        if (matches) {
            matches.forEach(function (e, i) {
                var staticName = e.replace(_this.unwrapField, '');
                result.push(staticName);
            });
        }
        else { // TODO: ask is this good
            result.push(this.mask);
        }
        return result;
    };
    /** Default preClean function */
    FieldMask.prototype.preClean = function (key, value) {
        return value;
    };
    /** Change-event - will only fire if it really changes */
    FieldMask.prototype.onChange = function () {
        var maybeNew = this.resolve();
        if (this.value !== maybeNew) {
            this.changeEvent(maybeNew);
        }
        this.value = maybeNew;
    };
    /** Add watcher and execute onChange */
    FieldMask.prototype.watchAllFields = function () {
        var _this = this;
        // add a watch for each field in the field-mask
        this.fields.forEach(function (field) {
            if (!_this.model[field]) {
                return;
            }
            var valueSub = _this.model[field].valueChanges.subscribe(function (value) { return _this.onChange(); });
            _this.subscriptions.push(valueSub);
        });
    };
    FieldMask.prototype.destroy = function () {
        this.subscriptions.forEach(function (subscription) { subscription.unsubscribe(); });
    };
    return FieldMask;
}());
exports.FieldMask = FieldMask;


/***/ }),

/***/ "./projects/field-custom-gps/src/assets/icons/font-awesome/map-marker-alt-solid.svg":
/*!******************************************************************************************!*\
  !*** ./projects/field-custom-gps/src/assets/icons/font-awesome/map-marker-alt-solid.svg ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"map-marker-alt\" class=\"svg-inline--fa fa-map-marker-alt fa-w-12\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path fill=\"currentColor\" d=\"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z\"></path></svg>");

/***/ }),

/***/ "./projects/field-custom-gps/src/main/main.html":
/*!******************************************************!*\
  !*** ./projects/field-custom-gps/src/main/main.html ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-gps-container\">\r\n  <div class=\"map-info\">\r\n    <div class=\"input-component\">\r\n      <label for=\"lat\">Lat:</label>\r\n      <input id=\"lat\" type=\"number\" step=\"0.001\" />\r\n    </div>\r\n    &nbsp;\r\n    <div class=\"input-component\">\r\n      <label for=\"lng\">Lng:</label>\r\n      <input id=\"lng\" type=\"number\" step=\"0.001\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"address-mask-container\" class=\"map-info address-mask-container hidden\">\r\n    <a id=\"icon-search\" class=\"btn\">\r\n      <i class=\"material-icons-outlined\">search</i>\r\n    </a>\r\n    <span id=\"formatted-address-container\"></span>\r\n  </div>\r\n\r\n  <div id=\"map\" class=\"map-info__map\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./projects/field-custom-gps/src/main/main.scss":
/*!******************************************************!*\
  !*** ./projects/field-custom-gps/src/main/main.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-gps-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.map-info {\n  flex: 0 0 32px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 4px;\n  padding-left: 14px;\n  border-bottom: 1px solid #e1e1e1;\n  background: white;\n}\n.map-info label,\n.map-info #icon-search {\n  margin-right: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 4px;\n}\n.map-info #icon-search i {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  font-weight: bold;\n}\n.map-info input {\n  margin-right: 8px;\n  padding: 4px 16px;\n  border: none;\n  background: transparent;\n  outline: none !important;\n}\n\n.address-mask-container {\n  flex-wrap: nowrap;\n}\n\n.map-info__map {\n  flex: 1 1 auto;\n  width: 100%;\n  display: block;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn {\n  border: 1px solid silver;\n  border-radius: 4px;\n}\n.btn:hover {\n  background-color: rgba(69, 79, 99, 0.08);\n  cursor: pointer;\n}\n\n.input-component {\n  display: flex;\n  background-color: rgba(69, 79, 99, 0.08);\n  padding: 4px;\n  border-radius: 4px 4px 0 0;\n  border-bottom: 1px solid silver;\n  margin: 8px 0;\n}\n.input-component:hover {\n  border-bottom: 1px solid #002753;\n}");

/***/ }),

/***/ "./projects/field-custom-gps/src/main/main.ts":
/*!****************************************************!*\
  !*** ./projects/field-custom-gps/src/main/main.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var field_mask_helper_1 = __webpack_require__(/*! ../../../edit/shared/helpers/field-mask.helper */ "./projects/edit/shared/helpers/field-mask.helper.ts");
var console_log_webpack_helper_1 = __webpack_require__(/*! ../shared/console-log-webpack.helper */ "./projects/field-custom-gps/src/shared/console-log-webpack.helper.ts");
var constants_1 = __webpack_require__(/*! ../shared/constants */ "./projects/field-custom-gps/src/shared/constants.ts");
var helpers_1 = __webpack_require__(/*! ../shared/helpers */ "./projects/field-custom-gps/src/shared/helpers.ts");
var template = __webpack_require__(/*! ./main.html */ "./projects/field-custom-gps/src/main/main.html");
var styles = __webpack_require__(/*! ./main.scss */ "./projects/field-custom-gps/src/main/main.scss");
var gpsDialogTag = 'field-custom-gps-dialog';
var FieldCustomGpsDialog = /** @class */ (function (_super) {
    __extends(FieldCustomGpsDialog, _super);
    function FieldCustomGpsDialog() {
        var _this = _super.call(this) || this;
        console_log_webpack_helper_1.consoleLogWebpack(gpsDialogTag + " constructor called");
        _this.fieldInitialized = false;
        return _this;
    }
    FieldCustomGpsDialog.prototype.connectedCallback = function () {
        var _this = this;
        if (this.fieldInitialized) {
            return;
        }
        this.fieldInitialized = true;
        console_log_webpack_helper_1.consoleLogWebpack(gpsDialogTag + " connectedCallback called");
        this.eventListeners = [];
        this.mapApiUrl = constants_1.mapsApiUrl();
        this.innerHTML = helpers_1.buildTemplate(template.default, styles.default);
        this.latInput = this.querySelector('#lat');
        this.lngInput = this.querySelector('#lng');
        var addressMaskContainer = this.querySelector('#address-mask-container');
        this.iconSearch = this.querySelector('#icon-search');
        var formattedAddressContainer = this.querySelector('#formatted-address-container');
        this.mapContainer = this.querySelector('#map');
        var allInputNames = this.connector._experimental.allInputTypeNames.map(function (inputType) { return inputType.name; });
        if (allInputNames.includes(this.connector.field.settings.LatField)) {
            this.latFieldName = this.connector.field.settings.LatField;
        }
        if (allInputNames.includes(this.connector.field.settings.LongField)) {
            this.lngFieldName = this.connector.field.settings.LongField;
        }
        var addressMaskSetting = this.connector.field.settings.AddressMask || this.connector.field.settings['Address Mask'];
        this.addressMask = new field_mask_helper_1.FieldMask(addressMaskSetting, this.connector._experimental.formGroup.controls, null, null);
        console_log_webpack_helper_1.consoleLogWebpack(gpsDialogTag + " addressMask:", addressMaskSetting);
        if (addressMaskSetting) {
            addressMaskContainer.classList.remove('hidden');
            formattedAddressContainer.innerText = this.addressMask.resolve();
        }
        this.connector.loadScript('google', this.mapApiUrl, function () { _this.mapScriptLoaded(); });
    };
    FieldCustomGpsDialog.prototype.mapScriptLoaded = function () {
        var _this = this;
        console_log_webpack_helper_1.consoleLogWebpack(gpsDialogTag + " mapScriptLoaded called");
        this.map = new google.maps.Map(this.mapContainer, { zoom: 15, center: constants_1.defaultCoordinates, gestureHandling: 'greedy' });
        this.marker = new google.maps.Marker({ position: constants_1.defaultCoordinates, map: this.map, draggable: true });
        this.geocoder = new google.maps.Geocoder();
        // set initial values
        if (!this.connector.data.value) {
            this.updateHtml(constants_1.defaultCoordinates);
        }
        else {
            this.updateHtml(helpers_1.parseLatLng(this.connector.data.value));
        }
        // listen to inputs, iconSearch and marker. Update inputs, map, marker and form
        var onLatLngInputChange = function () { _this.onLatLngInputChange(); };
        this.latInput.addEventListener('change', onLatLngInputChange);
        this.lngInput.addEventListener('change', onLatLngInputChange);
        var autoSelect = function () { _this.autoSelect(); };
        this.iconSearch.addEventListener('click', autoSelect);
        this.eventListeners.push({ element: this.latInput, type: 'change', listener: onLatLngInputChange }, { element: this.lngInput, type: 'change', listener: onLatLngInputChange }, { element: this.iconSearch, type: 'click', listener: autoSelect });
        this.marker.addListener('dragend', function (event) {
            _this.onMarkerDragend(event);
        });
    };
    FieldCustomGpsDialog.prototype.updateHtml = function (latLng) {
        var _a, _b, _c, _d;
        this.latInput.value = (_b = (_a = latLng.lat) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
        this.lngInput.value = (_d = (_c = latLng.lng) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
        this.map.setCenter(latLng);
        this.marker.setPosition(latLng);
    };
    FieldCustomGpsDialog.prototype.updateForm = function (latLng) {
        this.connector.data.update(helpers_1.stringifyLatLng(latLng));
        if (this.latFieldName) {
            this.connector._experimental.updateField(this.latFieldName, latLng.lat);
        }
        if (this.lngFieldName) {
            this.connector._experimental.updateField(this.lngFieldName, latLng.lng);
        }
    };
    FieldCustomGpsDialog.prototype.onLatLngInputChange = function () {
        console_log_webpack_helper_1.consoleLogWebpack(gpsDialogTag + " input changed");
        var latLng = {
            lat: this.latInput.value.length > 0 ? parseFloat(this.latInput.value) : null,
            lng: this.lngInput.value.length > 0 ? parseFloat(this.lngInput.value) : null,
        };
        this.updateHtml(latLng);
        this.updateForm(latLng);
    };
    FieldCustomGpsDialog.prototype.autoSelect = function () {
        var _this = this;
        console_log_webpack_helper_1.consoleLogWebpack(gpsDialogTag + " geocoder called");
        var address = this.addressMask.resolve();
        this.geocoder.geocode({
            address: address,
        }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var result = results[0].geometry.location;
                var latLng = {
                    lat: result.lat(),
                    lng: result.lng(),
                };
                _this.updateHtml(latLng);
                _this.updateForm(latLng);
            }
            else {
                alert("Could not locate address: " + address);
            }
        });
    };
    FieldCustomGpsDialog.prototype.onMarkerDragend = function (event) {
        console_log_webpack_helper_1.consoleLogWebpack(gpsDialogTag + " marker changed");
        var latLng = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };
        this.updateHtml(latLng);
        this.updateForm(latLng);
    };
    FieldCustomGpsDialog.prototype.disconnectedCallback = function () {
        console_log_webpack_helper_1.consoleLogWebpack(gpsDialogTag + " disconnectedCallback called");
        google === null || google === void 0 ? void 0 : google.maps.event.clearInstanceListeners(this.marker);
        google === null || google === void 0 ? void 0 : google.maps.event.clearInstanceListeners(this.map);
        this.eventListeners.forEach(function (_a) {
            var element = _a.element, type = _a.type, listener = _a.listener;
            element.removeEventListener(type, listener);
        });
        this.addressMask.destroy();
    };
    return FieldCustomGpsDialog;
}(HTMLElement));
if (!customElements.get(gpsDialogTag)) {
    customElements.define(gpsDialogTag, FieldCustomGpsDialog);
}


/***/ }),

/***/ "./projects/field-custom-gps/src/preview/preview.html":
/*!************************************************************!*\
  !*** ./projects/field-custom-gps/src/preview/preview.html ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-gps-preview\">\r\n  <div class=\"custom-gps-preview__text\">\r\n    Lat: <span id=\"lat-container\"></span>, Lng: <span id=\"lng-container\"></span>\r\n  </div>\r\n  <div class=\"custom-gps-preview__spacer\"></div>\r\n  <div id=\"map-icon-container\" class=\"custom-gps-preview__map-icon\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./projects/field-custom-gps/src/preview/preview.scss":
/*!************************************************************!*\
  !*** ./projects/field-custom-gps/src/preview/preview.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-gps-preview {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  font-size: 16px;\n  line-height: 20px;\n  margin-bottom: -2px;\n  cursor: pointer;\n}\n.custom-gps-preview__text {\n  flex-shrink: 0;\n  max-width: 80%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.custom-gps-preview__spacer {\n  flex-grow: 1;\n}\n.custom-gps-preview__map-icon {\n  flex-shrink: 0;\n  margin-right: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-gps-preview__map-icon svg {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n}");

/***/ }),

/***/ "./projects/field-custom-gps/src/preview/preview.ts":
/*!**********************************************************!*\
  !*** ./projects/field-custom-gps/src/preview/preview.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var console_log_webpack_helper_1 = __webpack_require__(/*! ../shared/console-log-webpack.helper */ "./projects/field-custom-gps/src/shared/console-log-webpack.helper.ts");
var constants_1 = __webpack_require__(/*! ../shared/constants */ "./projects/field-custom-gps/src/shared/constants.ts");
var helpers_1 = __webpack_require__(/*! ../shared/helpers */ "./projects/field-custom-gps/src/shared/helpers.ts");
var template = __webpack_require__(/*! ./preview.html */ "./projects/field-custom-gps/src/preview/preview.html");
var styles = __webpack_require__(/*! ./preview.scss */ "./projects/field-custom-gps/src/preview/preview.scss");
var gpsTag = 'field-custom-gps';
var FieldCustomGps = /** @class */ (function (_super) {
    __extends(FieldCustomGps, _super);
    function FieldCustomGps() {
        var _this = _super.call(this) || this;
        console_log_webpack_helper_1.consoleLogWebpack(gpsTag + " constructor called");
        _this.fieldInitialized = false;
        return _this;
    }
    FieldCustomGps.prototype.connectedCallback = function () {
        var _this = this;
        if (this.fieldInitialized) {
            return;
        }
        this.fieldInitialized = true;
        console_log_webpack_helper_1.consoleLogWebpack(gpsTag + " connectedCallback called");
        this.innerHTML = helpers_1.buildTemplate(template.default, styles.default);
        var mapIconContainer = this.querySelector('#map-icon-container');
        mapIconContainer.innerHTML = helpers_1.customGpsIcons.mapMarker;
        this.latContainer = this.querySelector('#lat-container');
        this.lngContainer = this.querySelector('#lng-container');
        this.eventListeners = [];
        var expand = function () { _this.expand(); };
        this.addEventListener('click', expand);
        this.eventListeners.push({ element: this, type: 'click', listener: expand });
        // set initial value
        if (!this.connector.data.value) {
            this.updateHtml(constants_1.defaultCoordinates);
        }
        else {
            this.updateHtml(helpers_1.parseLatLng(this.connector.data.value));
        }
        // update on value change
        this.connector.data.onValueChange(function (value) {
            if (!value) {
                _this.updateHtml(constants_1.defaultCoordinates);
            }
            else {
                var latLng = helpers_1.parseLatLng(value);
                _this.updateHtml(latLng);
            }
        });
    };
    FieldCustomGps.prototype.updateHtml = function (latLng) {
        var _a, _b, _c, _d;
        this.latContainer.innerText = (_b = (_a = latLng.lat) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
        this.lngContainer.innerText = (_d = (_c = latLng.lng) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
    };
    FieldCustomGps.prototype.expand = function () {
        this.connector.dialog.open();
    };
    FieldCustomGps.prototype.disconnectedCallback = function () {
        console_log_webpack_helper_1.consoleLogWebpack(gpsTag + " disconnectedCallback called");
        this.eventListeners.forEach(function (_a) {
            var element = _a.element, type = _a.type, listener = _a.listener;
            element.removeEventListener(type, listener);
        });
    };
    return FieldCustomGps;
}(HTMLElement));
if (!customElements.get(gpsTag)) {
    customElements.define(gpsTag, FieldCustomGps);
}


/***/ }),

/***/ "./projects/field-custom-gps/src/shared/console-log-webpack.helper.ts":
/*!****************************************************************************!*\
  !*** ./projects/field-custom-gps/src/shared/console-log-webpack.helper.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleLogWebpack = void 0;
/** Console log that doesn't show in Webpack production mode */
function consoleLogWebpack(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (false) {}
    console.groupCollapsed.apply(console, __spreadArrays([message], optionalParams));
    // tslint:disable-next-line:no-console
    console.trace();
    console.groupEnd();
}
exports.consoleLogWebpack = consoleLogWebpack;


/***/ }),

/***/ "./projects/field-custom-gps/src/shared/constants.ts":
/*!***********************************************************!*\
  !*** ./projects/field-custom-gps/src/shared/constants.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mapsApiUrl = exports.defaultCoordinates = void 0;
exports.defaultCoordinates = {
    lat: 47.17465989999999,
    lng: 9.469142499999975,
};
var mapApiKeyPart1 = 'AIzaSyDPhn';
var mapApiKeyPart2 = 'NKpEg8FmY8nooE7Zwnue6SusxEnHE';
/** Special helper to assemble the url for the maps */
function mapsApiUrl() {
    var url = 'https://maps.googleapis.com/maps/api/js?key=';
    // note: don't use `${...}` here, because that's probably combined at compile time, and we want to keep
    // the key parts separate so the google console doesn't complain about the key being public
    // add some fake condition, to prevent compiler optimization from pre-connecting the strings
    if (url) {
        url += mapApiKeyPart1;
    }
    if (!!url) {
        url += mapApiKeyPart2;
    }
    return url;
}
exports.mapsApiUrl = mapsApiUrl;


/***/ }),

/***/ "./projects/field-custom-gps/src/shared/helpers.ts":
/*!*********************************************************!*\
  !*** ./projects/field-custom-gps/src/shared/helpers.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyLatLng = exports.parseLatLng = exports.buildTemplate = exports.customGpsIcons = void 0;
var mapMarker = __webpack_require__(/*! ../assets/icons/font-awesome/map-marker-alt-solid.svg */ "./projects/field-custom-gps/src/assets/icons/font-awesome/map-marker-alt-solid.svg");
exports.customGpsIcons = {
    mapMarker: mapMarker.default,
};
function buildTemplate(template, styles) {
    return template + "<style>\n" + styles + "\n</style>";
}
exports.buildTemplate = buildTemplate;
function parseLatLng(value) {
    var latLng = JSON.parse(value.replace('latitude', 'lat').replace('longitude', 'lng'));
    return latLng;
}
exports.parseLatLng = parseLatLng;
function stringifyLatLng(latLng) {
    var value = JSON.stringify(latLng).replace('lat', 'latitude').replace('lng', 'longitude');
    return value;
}
exports.stringifyLatLng = stringifyLatLng;


/***/ }),

/***/ 0:
/*!*************************************************************************************************************!*\
  !*** multi ./projects/field-custom-gps/src/main/main.ts ./projects/field-custom-gps/src/preview/preview.ts ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./projects/field-custom-gps/src/main/main.ts */"./projects/field-custom-gps/src/main/main.ts");
module.exports = __webpack_require__(/*! ./projects/field-custom-gps/src/preview/preview.ts */"./projects/field-custom-gps/src/preview/preview.ts");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map