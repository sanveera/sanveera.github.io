(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/OrderByPipe.ts":
/*!********************************!*\
  !*** ./src/app/OrderByPipe.ts ***!
  \********************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, orderField, orderType) {
        array.sort(function (a, b) {
            var ae = a[orderField];
            var be = b[orderField];
            if (ae == undefined && be == undefined)
                return 0;
            if (ae == undefined && be != undefined)
                return orderType ? 1 : -1;
            if (ae != undefined && be == undefined)
                return orderType ? -1 : 1;
            if (ae == be)
                return 0;
            return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
        });
        return array;
    };
    OrderByPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _export_toolbar_export_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-toolbar/export-toolbar.component */ "./src/app/export-toolbar/export-toolbar.component.ts");
/* harmony import */ var _export_toolbar_configure_dialog_configure_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export-toolbar/configure-dialog/configure-dialog.component */ "./src/app/export-toolbar/configure-dialog/configure-dialog.component.ts");
/* harmony import */ var _datacarousel_datacarousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datacarousel/datacarousel.component */ "./src/app/datacarousel/datacarousel.component.ts");
/* harmony import */ var _datacarousel_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datacarousel/config-dialog/config-dialog.component */ "./src/app/datacarousel/config-dialog/config-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _datacarousel_datacarousel_component__WEBPACK_IMPORTED_MODULE_4__["DatacarouselComponent"] },
    { path: 'exporttb', component: _export_toolbar_export_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ExportToolbarComponent"] },
    { path: 'exporttb/config', component: _export_toolbar_configure_dialog_configure_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfigureDialogComponent"] },
    //{ path: 'datacarousel', component:DatacarouselComponent},
    { path: 'datacarousel/config', component: _datacarousel_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfigDialogComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'extensions';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _export_toolbar_export_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./export-toolbar/export-toolbar.component */ "./src/app/export-toolbar/export-toolbar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _export_toolbar_configure_dialog_configure_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./export-toolbar/configure-dialog/configure-dialog.component */ "./src/app/export-toolbar/configure-dialog/configure-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _OrderByPipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OrderByPipe */ "./src/app/OrderByPipe.ts");
/* harmony import */ var _datacarousel_datacarousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datacarousel/datacarousel.component */ "./src/app/datacarousel/datacarousel.component.ts");
/* harmony import */ var _datacarousel_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datacarousel/config-dialog/config-dialog.component */ "./src/app/datacarousel/config-dialog/config-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _export_toolbar_export_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ExportToolbarComponent"], _default_default_component__WEBPACK_IMPORTED_MODULE_7__["DefaultComponent"], _export_toolbar_configure_dialog_configure_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfigureDialogComponent"], _OrderByPipe__WEBPACK_IMPORTED_MODULE_11__["OrderByPipe"], _datacarousel_datacarousel_component__WEBPACK_IMPORTED_MODULE_12__["DatacarouselComponent"], _datacarousel_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfigDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/datacarousel/config-dialog/config-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/datacarousel/config-dialog/config-dialog.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datacarousel/config-dialog/config-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/datacarousel/config-dialog/config-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  config-dialog works!\n</p>\n"

/***/ }),

/***/ "./src/app/datacarousel/config-dialog/config-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/datacarousel/config-dialog/config-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfigDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDialogComponent", function() { return ConfigDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigDialogComponent = /** @class */ (function () {
    function ConfigDialogComponent() {
    }
    ConfigDialogComponent.prototype.ngOnInit = function () {
    };
    ConfigDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-dialog',
            template: __webpack_require__(/*! ./config-dialog.component.html */ "./src/app/datacarousel/config-dialog/config-dialog.component.html"),
            styles: [__webpack_require__(/*! ./config-dialog.component.css */ "./src/app/datacarousel/config-dialog/config-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigDialogComponent);
    return ConfigDialogComponent;
}());



/***/ }),

/***/ "./src/app/datacarousel/datacarousel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/datacarousel/datacarousel.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c-control {\n    bottom: -30px;\n    text-align: center;\n    padding: 5px;\n}\n\n.control-but {\n    background-image: none;\n    color: rgb(3, 77, 126);\n    margin: 10px;\n}\n\n.carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 10px;\n    text-indent: 0;\n    cursor: pointer;\n    border: none;\n    border-radius: 50%;\n    background-color: #757588;\n    box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n.carousel-indicators .active {\n    background-color: #0bd415;\n}\n\n.carousel-indicators li:hover {\n    background-color: #d1550d;\n}\n\n.carousel-indicators ol {\n    width: 100%;\n    overflow: hidden;\n    overflow-x: auto;\n}\n\n.carousel-indicators {\n    position: fixed;\n    bottom: 0;\n    background-color: rgba(50, 115, 220, 0.3);\n}\n\n.divTile {\n    height: 90px;\n    min-width: 40%;\n    background-color: dodgerblue;\n    margin: .2em!important;\n    padding: .2em;\n    border-radius: 10px;\n}\n\n.divTile .title {\n    font-size: medium;\n    font-weight: bolder;\n    color: white;\n    padding: 2px;\n}\n\n.divTile .content {\n    font-size: medium;\n    padding: 2px;\n    word-break: break-all!important;\n    max-height: 50px;\n    overflow: auto;\n}"

/***/ }),

/***/ "./src/app/datacarousel/datacarousel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/datacarousel/datacarousel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.length > 1\" class=\"c-control\">\n  <a href=\"#datacar\" role=\"button\" data-slide=\"prev\" class=\"control-but\">\n    <i style=\"font-size: 20px\" class=\"fas fa-arrow-alt-circle-left\"></i>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a href=\"#datacar\" role=\"button\" data-slide=\"next\" class=\"control-but\">\n    <i style=\"font-size: 20px\" class=\"fas fa-arrow-alt-circle-right\"></i>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<div id=\"datacar\" name=\"datacar\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\" style=\"width: 100%;\">\n  <div class=\"carousel-inner\">\n    <div *ngFor=\"let d of data; let i = index\" class=\"carousel-item {{ (i == 0) ? 'active' : '' }}\">\n      <div style=\"display:flex; flex-wrap:wrap;\">\n        <div class=\"divTile\" *ngFor=\"let c of columns\" style=\"flex: 0 0 48%;\">\n          <div class=\"title\">\n            {{c.fieldName}}\n          </div>\n          <p class=\"content\">{{d[c.index].value}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <ol class=\"carousel-indicators\" *ngIf=\"data.length < 7\">\n    <li data-target=\"#datacar\" *ngFor=\"let d of data; index as i\" [attr.data-slide-to]='i'\n      [ngClass]=\"{'active' : i == 0}\"></li>\n  </ol>\n  -->\n</div>"

/***/ }),

/***/ "./src/app/datacarousel/datacarousel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/datacarousel/datacarousel.component.ts ***!
  \********************************************************/
/*! exports provided: DatacarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatacarouselComponent", function() { return DatacarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatacarouselComponent = /** @class */ (function () {
    function DatacarouselComponent(elRef, changeDetectorRef) {
        this.elRef = elRef;
        this.changeDetectorRef = changeDetectorRef;
        this.unregisterHandlerFunctions = [];
        this.data = [];
        this.columns = [];
        this.filterChangedHandler = function (e) {
            this.loadData();
        };
        this.loadData = function () {
            var _this_1 = this;
            var _this = this;
            var dashboard = tableau.extensions.dashboardContent.dashboard;
            var sheet = dashboard.worksheets[0];
            sheet.getSummaryDataAsync().then(function (dt) {
                _this.data = dt.data;
                _this.columns = dt.columns;
                _this_1.changeDetectorRef.detectChanges();
            });
        };
    }
    DatacarouselComponent.prototype.ngOnInit = function () {
    };
    DatacarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tableau.extensions.initializeAsync().then(function () {
            _this.unregisterHandlerFunctions.forEach(function (unregisterHandlerFunction) {
                unregisterHandlerFunction();
            });
            var dashboard = tableau.extensions.dashboardContent.dashboard;
            dashboard.worksheets.forEach(function (worksheet) {
                var unregisterHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.FilterChanged, function (filterEvent) {
                    _this.loadData();
                });
                _this.unregisterHandlerFunctions.push(unregisterHandlerFunction);
            });
            _this.loadData();
        }, function (err) {
            // Something went wrong in initialization.
            console.log('Error while Initializing: ' + err.toString());
        });
    };
    DatacarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datacarousel',
            template: __webpack_require__(/*! ./datacarousel.component.html */ "./src/app/datacarousel/datacarousel.component.html"),
            styles: [__webpack_require__(/*! ./datacarousel.component.css */ "./src/app/datacarousel/datacarousel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DatacarouselComponent);
    return DatacarouselComponent;
}());



/***/ }),

/***/ "./src/app/default/default.component.css":
/*!***********************************************!*\
  !*** ./src/app/default/default.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/default/default.component.html":
/*!************************************************!*\
  !*** ./src/app/default/default.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>List of Tableau Extensions</h4>\n<ul class=\"list-group\">\n <li class=\"list-group-item\" *ngFor=\"let ext of Extns\">{{ext}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/default/default.component.ts":
/*!**********************************************!*\
  !*** ./src/app/default/default.component.ts ***!
  \**********************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        this.Extns = ['Export Toolbar'];
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.css */ "./src/app/default/default.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/export-toolbar/configure-dialog/configure-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/export-toolbar/configure-dialog/configure-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\n    width: 30px;\n    padding-right: 5px;\n}\n.cfg-header{\n    color: #d10719;\n    font-size: 25px;\n    border-bottom: #d10719 4px solid;\n    padding: 10px 0px 5px 0px;\n}\n.cfg-sub-header{\n    color: #d10719;\n    font-size: 12px;\n    font-weight: bold;\n    border-bottom: #d10719 1px solid;\n    padding: 10px 0px 5px 0px;\n    margin-bottom: 5px;\n}\n.cfg-button{\n    width: 50px;\n    background-color:#d10719;\n    color: white;\n    border-style: none;\n    font-size: 12px;\n}\n.mat-accordion{\n    width: 100%;\n}\n.mat-expansion-panel-header{\n    color: #d10719;\n    font-weight: bolder;\n    font-size: 15px;\n}\n.cfg-table-header {\n    background-color: rgb(9, 43, 9);\n    color:white;\n    font-weight: bold;\n    height: 25px;\n}\n.cfCont{\n    padding-left: 15px;\n    padding-right: 15px;\n}"

/***/ }),

/***/ "./src/app/export-toolbar/configure-dialog/configure-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/export-toolbar/configure-dialog/configure-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"cfCont\">\n  <div class=\"row cfg-header\">\n    <div class=\"col-sm-12\">\n      <h5><img class=\"logo\" src=\"../../../assets/images/export_logo.png\" width=\"30px\"> Export Toolbar\n      </h5>\n    </div>\n  </div>\n  <div class=\"row\" style=\"padding-top: 10px;\">\n    <div class='col-sm-10'></div>\n    <div class=\"col-sm-1\"> <button color=\"primary\" class=\"cfg-button\" (click)='saveSettings()'>Save</button></div>\n    <div class=\"col-sm-1\"> <button color=\"warn\" class=\"cfg-button\" (click)='closeDialog()'>Close</button></div>\n  </div>\n  <div class=\"row\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          Workseet and Data Source\n        </mat-expansion-panel-header>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">Worksheets</div>\n          <div class=\"col-sm-9\">\n            <select name=\"worksheet\" id=\"worksheet\" [(ngModel)]='db.sheetName' (change)=\"worksheetDataSourceChange()\"\n              class=\"form-control\">\n              <option *ngFor=\"let ws of worksheets\" [ngValue]=\"ws\">{{ws}}</option>\n            </select>\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">Data</div>\n          <div class=\"col-sm-9\">\n            <select name=\"ds\" id=\"ds\" class=\"form-control\" [(ngModel)]='db.dsType' (change)='worksheetDataSourceChange()'>\n              <option *ngFor=\"let ds of datasources\" value=\"{{ds}}\">{{ds}}</option>\n            </select></div>\n        </div>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          Columns and Order\n        </mat-expansion-panel-header>\n        <div class='table'>\n          <div class=\"row cfg-table-header\">\n            <div class=\"col-sm-1\">Select</div>\n            <div class=\"col-sm-3\">Field Name</div>\n            <div class=\"col-sm-3\">Display Name</div>\n            <div class=\"col-sm-2\">Datatype</div>\n            <div class=\"col-sm-1\">Seq.</div>\n            <div class=\"col-sm-1\">Size</div>\n            <div class=\"col-sm-1\">Sort</div>\n          </div>\n          <div class=\"row\" *ngFor=\"let column of columns\">\n            <div class=\"col-sm-1\"><input type=\"checkbox\" [checked]=\"column.selected\"\n                (change)=\"column.selected = !column.selected\" /></div>\n            <div class=\"col-sm-3\">{{column.name}}</div>\n            <div class=\"col-sm-3\"><input type=\"text\" [(ngModel)]='column.caption'></div>\n            <div class=\"col-sm-2\">{{column.dataType}}</div>\n            <div class=\"col-sm-1\"><input type=\"number\" [(ngModel)]='column.seq'  min=\"0\" max=\"{{columns.length-1}}\" step=\"1\" (ngModelChange)=\"seqChange($event)\"></div>\n            <div class=\"col-sm-1\"><input type=\"number\" [(ngModel)]='column.size' min=\"0\" max=\"1\" step=\"0.1\"></div>\n            <div class=\"col-sm-1\"><input type=\"number\" [(ngModel)]='column.sortSeq' min=\"0\" max=\"{{columns.length-1}}\" step=\"1\" ></div>\n            <!--<div class=\"col-sm-1\"><input type=\"checkbox\" [checked]=\"column.asc && column.selected && column.sortSeq >=0\"\n              (change)=\"column.asc = !column.asc\" [disabled]=\"! (column.selected && column.sortSeq >=0)\"></div>-->\n          </div>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          Header Footer Settings\n        </mat-expansion-panel-header>\n        <div class=\"table\">\n          <div class=\"row  cfg-sub-header\">\n            <div class=\"col-sm-12\">Header</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-3\">Title</div>\n            <div class=\"col-sm-9\"><input class=\"form-control\" placeholder=\"Title\" [(ngModel)]=\"db.header.title\"></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-3\">SubTitle</div>\n            <div class=\"col-sm-9\">\n              <input placeholder=\"SubTitle\" class=\"form-control\" [(ngModel)]=\"db.header.subtitle\"></div>\n          </div>\n        </div>\n        <div class=\"table\">\n          <div class=\"row\">\n            <div class='col-sm-3'>Filters & Parameters Display At</div>\n            <div class='col-sm-9'>\n              <select name=\"displayat\" id=\"displayat\" class=\"form-control\" [(ngModel)]=\"db.filters.displayAt\">\n                <option value=\"pagestart\">Page Start</option>\n                <option value=\"pageend\">Page End</option>\n                <option value=\"header\">Header</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row  cfg-sub-header\">\n            <div class=\"col-sm-12\">Filter</div>\n          </div>\n\n          <div class=\"row\">\n            <div class='table'>\n              <div class=\"row cfg-table-header\">\n                <div class=\"col-sm-2\">Select</div>\n                <div class=\"col-sm-3\">Filter Name</div>\n              </div>\n              <div class=\"row\" *ngFor='let filter of sFilters'>\n                <div class=\"col-sm-2\"><input type=\"checkbox\" [checked]=\"filter.selected\"\n                    (change)=\"filter.selected = !filter.selected\" /></div>\n                <div class=\"col-sm-3\">{{filter.name}}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row  cfg-sub-header\">\n            <div class=\"col-sm-12\">Parameters</div>\n          </div>\n          <div class=\"row\">\n            <div class='table'>\n              <div class=\"row cfg-table-header\">\n                <div class=\"col-sm-2\">Select</div>\n                <div class=\"col-sm-3\">Field Name</div>\n              </div>\n              <div class=\"row\" *ngFor='let param of sParams'>\n                <div class=\"col-sm-2\"><input type=\"checkbox\" [checked]=\"param.selected\"\n                    (change)=\"param.selected = !param.selected\" /></div>\n                <div class=\"col-sm-3\">{{param.name}}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <input type=\"checkbox\" value=\"Y\" checked [(ngModel)]='db.filters.display'> Display\n            </div>\n          </div>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          Export Options\n        </mat-expansion-panel-header>\n        <ng-container *ngFor=\"let et of exportTypes\">\n          <input type=\"checkbox\" [(ngModel)]=\"et.display\"> <img src=\"{{et.icon}}\" alt=\"{{et.name}}\" class=\"tool-icons\">\n        </ng-container>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/export-toolbar/configure-dialog/configure-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/export-toolbar/configure-dialog/configure-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfigureDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureDialogComponent", function() { return ConfigureDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_ColumnsModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/ColumnsModel */ "./src/app/model/ColumnsModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigureDialogComponent = /** @class */ (function () {
    function ConfigureDialogComponent(cd) {
        this.cd = cd;
        this.db = {
            'id': 1,
            'sheetName': '',
            'dsType': 'Summary',
            'columnList': {
                'colsIndex': [],
                'colSizes': [],
                'columnHeader': [],
                'sortIndex': []
            },
            'header': {
                'title': '',
                'subtitle': ''
            },
            'filters': {
                'displayAt': '',
                'list': [],
                'display': false
            },
            'footNote': []
        };
        this.worksheets = [];
        this.columns = [];
        this.datasources = ['Summary', 'Underlying'];
        this.sWorksheet = '';
        this.sDsType = '';
        this.sParams = [];
        this.sFilters = [];
        this.exportTypes = [
            { 'name': 'CSV', 'icon': '../assets/images/csv.png', 'type': "csv", 'display': true },
            { 'name': 'Excel', 'icon': '../assets/images/excel.png', 'type': 'xls', 'display': true },
            { 'name': 'Word', 'icon': '../assets/images/word.png', 'type': 'doc', 'display': true },
            { 'name': 'PDF', 'icon': '../assets/images/pdf.png', 'type': 'pdf', 'display': true }
        ];
        this.seqChange = function (e) {
            //alert(JSON.stringify(e));
        };
        this.closeDialog = function () {
            tableau.extensions.ui.closeDialog();
        };
        this.worksheetDataSourceChange = function () {
            var _this = this;
            _this.columns = [];
            _this.sParams = [];
            _this.sFilters = [];
            _this.db.header.title = _this.db.sheetName;
            var dashboard = tableau.extensions.dashboardContent.dashboard;
            var worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
            var worksheet = worksheets.find(function (sheet) {
                if (sheet.name === _this.db.sheetName) {
                    if (_this.db.dsType === 'Summary') {
                        sheet.getSummaryDataAsync({ maxRows: 1 }).then(function (sumdata) {
                            _this.loadColumns(sumdata.columns);
                        });
                    }
                    else if (_this.db.dsType === 'Underlying') {
                        sheet.getUnderlyingDataAsync({ maxRows: 1 }).then(function (sumdata) {
                            _this.loadColumns(sumdata.columns);
                        });
                    }
                    _this.loadFiltersAndParams(sheet);
                }
            });
        };
        this.loadFiltersAndParams = function (ws) {
            var _this = this;
            ws.getFiltersAsync().then(function (filters) {
                filters.forEach(function (filter) {
                    var selected = true;
                    if (_this.db.filters.list.length > 0) {
                        var idx = _this.db.filters.list.findIndex(function (x) { return x === filter.fieldName; });
                        if (idx < 0)
                            selected = false;
                    }
                    _this.sFilters.push({ 'name': filter.fieldName, 'selected': selected });
                });
            }).then(function () {
                ws.getParametersAsync().then(function (parameters) {
                    parameters.forEach(function (param) {
                        var selected = true;
                        if (_this.db.filters.list.length > 0) {
                            var idx = _this.db.filters.list.findIndex(function (x) { return x === param.name; });
                            if (idx < 0)
                                selected = false;
                        }
                        _this.sParams.push({ 'name': param.name, 'selected': selected });
                    });
                });
            });
        };
        this.loadColumns = function (cols) {
            var _this = this;
            var i = 0;
            cols.forEach(function (v) {
                var cm = new src_app_model_ColumnsModel__WEBPACK_IMPORTED_MODULE_1__["ColumnsModel"]();
                cm.caption = v.fieldName;
                cm.name = v.fieldName;
                cm.colIndex = i++;
                cm.seq = cm.colIndex;
                cm.size = 0.1;
                cm.dataType = v.dataType;
                if (_this.db.columnList.colsIndex.length > 0) {
                    var idx = _this.db.columnList.colsIndex.findIndex(function (x) { return x === cm.colIndex; });
                    if (idx >= 0) {
                        cm.caption = _this.db.columnList.columnHeader[idx];
                        cm.size = _this.db.columnList.colSizes[idx];
                        cm.seq = idx;
                        cm.selected = true;
                        var ss = _this.db.columnList.sortIndex.findIndex(function (x) { return x == cm.colIndex; });
                        if (ss >= 0) {
                            cm.sortSeq = ss;
                        }
                    }
                    else {
                        cm.selected = false;
                    }
                }
                _this.columns.push(cm);
            });
        };
        this.buildDialog = function () {
            var _this = this;
            var dashboard = tableau.extensions.dashboardContent.dashboard;
            var worksheetName = tableau.extensions.settings.get('worksheet');
            _this.worksheets = [];
            dashboard.worksheets.forEach(function (worksheet) {
                _this.worksheets.push(worksheet.name);
            });
            var tmpDb = tableau.extensions.settings.get('et_db');
            if (tmpDb) {
                _this.db = JSON.parse(tmpDb);
                this.worksheetDataSourceChange();
            }
        };
        this.saveSettings = function () {
            var _this = this;
            tableau.extensions.settings.set('et_datatype', this.sDsType);
            this.db.columnList.colsIndex = [];
            this.db.columnList.columnHeader = [];
            this.db.columnList.colSizes = [];
            this.db.columnList.sortIndex = [];
            var colsIndex = [], colHeader = [], colsize = [], sorsq = [];
            this.columns.forEach(function (s) {
                if (s.selected) {
                    if (s.seq != null && s.seq >= 0) {
                        colsIndex.splice(s.seq, 0, s.colIndex);
                        colsize.splice(s.seq, 0, s.size);
                        colHeader.splice(s.seq, 0, s.caption);
                    }
                    if (s.sortSeq != null && s.sortSeq >= 0) {
                        sorsq.splice(s.sortSeq, 0, s.colIndex);
                    }
                    _this.db.columnList.sortIndex = sorsq;
                    _this.db.columnList.colsIndex = colsIndex;
                    _this.db.columnList.columnHeader = colHeader;
                    _this.db.columnList.colSizes = colsize;
                }
            });
            this.db.filters.list = [];
            var selectedFilter = this.sFilters.filter(function (a) { return a.selected; });
            var selectedParam = this.sParams.filter(function (a) { return a.selected; });
            selectedFilter.forEach(function (element) {
                _this.db.filters.list.push(element.name);
            });
            selectedParam.forEach(function (element) {
                _this.db.filters.list.push(element.name);
            });
            tableau.extensions.settings.set('et_disp_button', Number(this.exportTypes[0].display) + '' + Number(this.exportTypes[1].display)
                + '' + Number(this.exportTypes[2].display) + '' + Number(this.exportTypes[3].display));
            tableau.extensions.settings.set('et_db', JSON.stringify(this.db));
            tableau.extensions.settings.saveAsync().then(function (currentSettings) {
                tableau.extensions.ui.closeDialog();
            });
        };
    }
    ConfigureDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tableau.extensions.initializeDialogAsync().then(function (openPayload) {
            var dispButton = tableau.extensions.settings.get('et_disp_button');
            if (dispButton && dispButton.length > 0) {
                _this.exportTypes[0].display = Boolean(Number(dispButton[0]));
                _this.exportTypes[1].display = Boolean(Number(dispButton[1]));
                _this.exportTypes[2].display = Boolean(Number(dispButton[2]));
                _this.exportTypes[3].display = Boolean(Number(dispButton[3]));
                _this.cd.detectChanges();
            }
            _this.buildDialog();
        });
    };
    ConfigureDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configure-dialog',
            template: __webpack_require__(/*! ./configure-dialog.component.html */ "./src/app/export-toolbar/configure-dialog/configure-dialog.component.html"),
            styles: [__webpack_require__(/*! ./configure-dialog.component.css */ "./src/app/export-toolbar/configure-dialog/configure-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ConfigureDialogComponent);
    return ConfigureDialogComponent;
}());



/***/ }),

/***/ "./src/app/export-toolbar/export-toolbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/export-toolbar/export-toolbar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tool-icons{\n    width: 30px;\n    padding: 5px;\n}\n.toolbar {\n    background-color: rgba(245,245,245,.85);\n    position: fixed;\n    margin-top: 2px;\n    width: 100vw;\n    border-bottom: #d07b82 1px solid;\n}\n.nav-custom:hover{\n    background-color: #d10719;\n    color: white!important;\n}"

/***/ }),

/***/ "./src/app/export-toolbar/export-toolbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/export-toolbar/export-toolbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"../assets/js/tableau-extensions-1.latest.js\"></script>\n<div class=\"justify-content-end\">\n  <ng-container *ngFor=\"let et of exportTypes\">\n    <img src=\"{{et.icon}}\" alt=\"{{et.name}}\" class=\"tool-icons\" (click)=\"export(et.type)\" *ngIf=\"et.display\"\n      alt=\"{{db.sheetName}}\">\n  </ng-container>\n  <div id=\"hl\"></div>\n</div>\n\n<!--<mat-progress-bar class=\"example-margin\" color=\"warn\" mode=\"indeterminate\" *ngIf=\"pbshow\"></mat-progress-bar>-->\n"

/***/ }),

/***/ "./src/app/export-toolbar/export-toolbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/export-toolbar/export-toolbar.component.ts ***!
  \************************************************************/
/*! exports provided: ExportToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportToolbarComponent", function() { return ExportToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_ext_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab-ext.service */ "./src/app/tab-ext.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExportToolbarComponent = /** @class */ (function () {
    function ExportToolbarComponent(_tabservice, cd) {
        this._tabservice = _tabservice;
        this.cd = cd;
        this.unregisterSettingsEventListener = null;
        this.loadingGif = '<img src="../assets/images/load.gif" alt="" *ngIf="pbshow">';
        this.exportTypes = [
            { 'name': 'CSV', 'icon': '../assets/images/csv.png', 'type': "csv", 'display': false },
            { 'name': 'Excel', 'icon': '../assets/images/excel.png', 'type': 'xls', 'display': false },
            { 'name': 'Word', 'icon': '../assets/images/word.png', 'type': 'doc', 'display': false },
            { 'name': 'PDF', 'icon': '../assets/images/pdf.png', 'type': 'pdf', 'display': false }
        ];
        this.pbshow = false;
        this.db = {
            'id': 1,
            'sheetName': '',
            'dsType': 'Summary',
            'columnList': {
                'colsIndex': [],
                'colSizes': [],
                'columnHeader': [],
                'sortIndex': []
            },
            'header': {
                'title': '',
                'subtitle': ''
            },
            'filters': {
                'displayAt': '',
                'list': []
            },
            'parameters': {
                'display': false,
                'list': []
            },
            'footNote': []
        };
        this.updateButtons = function () {
            var _this = this;
            var dispButton = tableau.extensions.settings.get('et_disp_button');
            if (dispButton.length > 0) {
                _this.exportTypes[0].display = Boolean(Number(dispButton[0]));
                _this.exportTypes[1].display = Boolean(Number(dispButton[1]));
                _this.exportTypes[2].display = Boolean(Number(dispButton[2]));
                _this.exportTypes[3].display = Boolean(Number(dispButton[3]));
                this.cd.detectChanges();
            }
        };
        this.sortData = function (dt, _cols) {
            dt.sort(function (a, b) {
                var aConcat = a['property1'] + a['property2'];
                var bConcat = b['property1'] + b['property2'];
                if (aConcat > bConcat) {
                    return 1;
                }
                else if (aConcat < bConcat) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        };
        this.callRest = function (input, _this, type) {
            console.log(input);
            _this.pbshow = true;
            _this._tabservice.exportPDF(input).subscribe(function (resultBlob) {
                _this.pbshow = true;
                var fileName = input.dashboard.sheetName + '.' + type;
                if (input.exportType === 'pdf') {
                    _this.saveData(resultBlob, fileName, _this);
                }
                else if (input.exportType === 'xls') {
                    var bl = new Blob([resultBlob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;' });
                    _this.saveData(bl, fileName, _this);
                }
                else if (input.exportType === 'doc') {
                    var bl = new Blob([resultBlob], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8;' });
                    _this.saveData(bl, fileName, _this);
                }
                _this.pbshow = false;
            });
        };
        this.export = function (type) {
            var _this = this;
            var dashboard = tableau.extensions.dashboardContent.dashboard;
            var tmpDb = tableau.extensions.settings.get('et_db');
            if (tmpDb) {
                _this.db = JSON.parse(tmpDb);
            }
            if (type == 'csv') {
                //_this.viz.showExportCrossTabDialog();
                //return;
            }
            var data = [];
            var finalFilters = {};
            dashboard.worksheets.find(function (sheet) {
                if (sheet.name === _this.db.sheetName) {
                    if (_this.db.dsType === 'Summary') {
                        sheet.getSummaryDataAsync().then(function (dt) {
                            data = dt.data;
                            sheet.getFiltersAsync().then(function (filters) {
                                filters.forEach(function (filter) {
                                    var fname = filter._fieldName;
                                    var fvalues = [];
                                    if (filter._filterType === 'range') {
                                        fvalues.push(filter._min._formattedValue + ' to ' + filter._max._formattedValue);
                                    }
                                    else if (filter._filterType === 'relative-date') { }
                                    else {
                                        filter._appliedValues.forEach(function (element) {
                                            fvalues.push(element._formattedValue);
                                        });
                                    }
                                    finalFilters[fname] = fvalues.toString();
                                });
                            }).then(function () {
                                sheet.getParametersAsync().then(function (parameters) {
                                    parameters.forEach(function (param) {
                                        finalFilters[param.name] = param.currentValue._formattedValue;
                                    });
                                }).then(function (ts) {
                                    var columns = [];
                                    Promise.all([dt.columns.forEach(function (element) {
                                            columns.push({ "fieldName": element._fieldName, "dataType": element._dataType });
                                        })]).then(function () {
                                        var input = {
                                            'exportType': type,
                                            'columns': columns,
                                            'dashboard': _this.db,
                                            'dataValues': data,
                                            'filters': finalFilters,
                                            'from': 'T'
                                        };
                                        _this.callRest(input, _this, type);
                                    });
                                });
                            });
                        });
                    }
                    else {
                        sheet.getUnderlyingDataAsync().then(function (dt) { _this.callRest(null, _this, type); });
                    }
                }
            });
        };
        this.saveData = function (bl, fileName, _this) {
            _this.pbshow = true;
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(bl);
            a.href = url;
            a.download = fileName;
            a.innerHTML = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
            _this.pbshow = false;
        };
        this.configure = function (_s) {
            var _this = this;
            var popupUrl = window.location.origin + "/exporttb/config";
            var input = '';
            tableau.extensions.ui.displayDialogAsync(popupUrl, input, { height: 700, width: 900 }).then(function (_closePayload) {
                _this.updateButtons();
            }).catch(function (error) {
                switch (error.errorCode) {
                    case tableau.ErrorCodes.DialogClosedByUser:
                        console.log('Dialog was closed by user');
                        break;
                    default:
                        console.error(error.message);
                }
            });
        };
    }
    ExportToolbarComponent.prototype.ngOnInit = function () {
    };
    ExportToolbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tableau.extensions.initializeAsync({ 'configure': this.configure }).then(function () {
            var dataSourceFetchPromises = [];
            _this.updateButtons();
            _this.unregisterSettingsEventListener = tableau.extensions.settings.addEventListener(tableau.TableauEventType.SettingsChanged, function (_settingsEvent) {
                _this.updateButtons();
            });
            var dashboard = tableau.extensions.dashboardContent.dashboard;
            dashboard.worksheets.forEach(function (worksheet) {
                dataSourceFetchPromises.push(worksheet.getDataSourcesAsync());
            });
        }, function (err) {
            // Something went wrong in initialization.
            console.log('Error while Initializing: ' + err.toString());
        });
    };
    ExportToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-toolbar',
            template: __webpack_require__(/*! ./export-toolbar.component.html */ "./src/app/export-toolbar/export-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./export-toolbar.component.css */ "./src/app/export-toolbar/export-toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_tab_ext_service__WEBPACK_IMPORTED_MODULE_1__["TabExtService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ExportToolbarComponent);
    return ExportToolbarComponent;
}());



/***/ }),

/***/ "./src/app/model/ColumnsModel.ts":
/*!***************************************!*\
  !*** ./src/app/model/ColumnsModel.ts ***!
  \***************************************/
/*! exports provided: ColumnsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsModel", function() { return ColumnsModel; });
var ColumnsModel = /** @class */ (function () {
    function ColumnsModel() {
        this.selected = true;
        this.asc = true;
    }
    return ColumnsModel;
}());



/***/ }),

/***/ "./src/app/tab-ext.service.ts":
/*!************************************!*\
  !*** ./src/app/tab-ext.service.ts ***!
  \************************************/
/*! exports provided: TabExtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabExtService", function() { return TabExtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabExtService = /** @class */ (function () {
    function TabExtService(_http) {
        var _this = this;
        this._http = _http;
        this.regServ = [];
        this.getServiceUrl = function (type) {
            return this.regServ[type];
        };
        this.getRegisteredServices().subscribe(function (s) {
            _this.regServ = s;
        });
    }
    TabExtService.prototype.exportPDF = function (exportInput) {
        return this._http.post(this.getServiceUrl('export') + 'api/export', exportInput, {
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("Content-Type", "application/json")
        });
    };
    TabExtService.prototype.getJSON = function (_jsonURL) {
        return this._http.get(_jsonURL);
    };
    TabExtService.prototype.getRegisteredServices = function () {
        return this._http.get('/api/registeredServices');
    };
    TabExtService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TabExtService);
    return TabExtService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sankarveeraiyan/Documents/CTS/POC/JNJ/tabportal/extensions/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map