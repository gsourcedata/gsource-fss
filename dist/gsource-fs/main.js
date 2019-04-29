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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "a{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div id=\"navbar-main\">\n      <ul class=\"nav navbar-nav\">\n        <li>GSOURCE-FILE-SYSTEM</li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!auth.isLoggedIn()\"><a routerLink=\"/login\">Sign In</a></li> \n        <li *ngIf=\"auth.isLoggedIn() && userReg == 'admin'\"><a routerLink=\"/register\">register</a></li>\n        <li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/profile\">{{ auth.getUserDetails()?.name }}({{ userReg }})</a></li>\n        <li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/profile\"></a></li>\n        <li *ngIf=\"auth.isLoggedIn()\"><a (click)=\"auth.logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</div> -->\n<!-- <div class=\"fluid-container\">\n<nav class=\"navbar navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\">GSOURCE-FILE-SYSTEM</a>\n\n  <div id=\"navbar-main\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"auth.isLoggedIn() && userReg == 'admin'\"><a routerLink=\"/register\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>Register</a></li>\n        <li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/profile\"> <i class=\"fa fa-user-circle-o\"></i>{{ auth.getUserDetails()?.name }}({{ userReg }})</a></li>\n        <li *ngIf=\"auth.isLoggedIn()\"><a (click)=\"auth.logout()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>Logout</a></li>\n      </ul>\n    </div>\n</nav>\n</div> -->\n\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">GSOURCE-File Sharing System</a>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"auth.isLoggedIn() && userReg == 'admin'\"><a routerLink=\"/register\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>Register</a></li>\n          <li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/profile\"> <i class=\"fa fa-user-circle-o\"></i>{{ auth.getUserDetails()?.name }}({{ userReg }})</a></li>\n          <li *ngIf=\"auth.isLoggedIn()\"><a (click)=\"auth.logout()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n\n\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'gsource-fs';
        this.userReg = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.userReg = user.roles;
            console.log('appcomponrt Userrrrrrrrrrrr111', _this.userReg);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var angular_material_fileupload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-material-fileupload */ "./node_modules/angular-material-fileupload/matFileUpload.esm.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _users_foldermodule_foldermodule_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./users/foldermodule/foldermodule.component */ "./src/app/users/foldermodule/foldermodule.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/file.service */ "./src/app/service/file.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _file_upload_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./file-upload/new-folder-dialog/new-folder-dialog.component */ "./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.ts");
/* harmony import */ var _file_upload_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./file-upload/rename-dialog/rename-dialog.component */ "./src/app/file-upload/rename-dialog/rename-dialog.component.ts");
/* harmony import */ var _users_file_removed_dialog_file_removed_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./users/file-removed-dialog/file-removed-dialog.component */ "./src/app/users/file-removed-dialog/file-removed-dialog.component.ts");
/* harmony import */ var _users_modals_folder_added_alertmodal_folder_added_alertmodal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./users/modals/folder-added-alertmodal/folder-added-alertmodal.component */ "./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.ts");
































//import { FileRemovedDialogComponent } from './users/file-removed-dialog/file-removed-dialog.component';
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"] },
    { path: 'file-upload', component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_26__["FileUploadComponent"] },
    { path: 'profile', component: _users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_23__["AuthGuardService"]] },
    { path: '**', component: _users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_26__["FileUploadComponent"],
                _users_foldermodule_foldermodule_component__WEBPACK_IMPORTED_MODULE_21__["FoldermoduleComponent"],
                _file_upload_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_28__["NewFolderDialogComponent"],
                _file_upload_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_29__["RenameDialogComponent"],
                _users_file_removed_dialog_file_removed_dialog_component__WEBPACK_IMPORTED_MODULE_30__["FileRemovedDialogComponent"],
                _users_modals_folder_added_alertmodal_folder_added_alertmodal_component__WEBPACK_IMPORTED_MODULE_31__["FolderAddedAlertmodalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_8__["ConfirmationPopoverModule"].forRoot(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]),
                angular_particle__WEBPACK_IMPORTED_MODULE_15__["ParticlesModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({}),
                angular_tree_component__WEBPACK_IMPORTED_MODULE_11__["TreeModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot(),
                _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                angular_material_fileupload__WEBPACK_IMPORTED_MODULE_16__["MatFileUploadModule"]
            ],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_22__["AuthenticationService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_23__["AuthGuardService"],
                _service_file_service__WEBPACK_IMPORTED_MODULE_24__["FileService"],
                _users_service__WEBPACK_IMPORTED_MODULE_25__["UsersService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            entryComponents: [
                _users_foldermodule_foldermodule_component__WEBPACK_IMPORTED_MODULE_21__["FoldermoduleComponent"],
                _file_upload_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_28__["NewFolderDialogComponent"],
                _file_upload_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_29__["RenameDialogComponent"],
                _users_file_removed_dialog_file_removed_dialog_component__WEBPACK_IMPORTED_MODULE_30__["FileRemovedDialogComponent"],
                _users_modals_folder_added_alertmodal_folder_added_alertmodal_component__WEBPACK_IMPORTED_MODULE_31__["FolderAddedAlertmodalComponent"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, user);
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.getuser = function () {
        return this.request('get', 'getuser');
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.css":
/*!*******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  .file-or-folder {\n    padding: 8px;\n    overflow: hidden;\n  }\n  \n  /* .container{\n    overflow: hidden;\n  } */\n  \n  .file-or-folder-icon {\n    width: 50px;\n    height: 50px;\n    font-size: 50px;\n  }\n  \n  .folder-icon{\n    color: dodgerblue;\n  }\n  \n  .pointer {\n    cursor: pointer;\n  }\n  \n  .spacer {\n    flex: 1 1 auto;\n  }\n  \n  .create-file-icon{\n    color: dodgerblue;\n    font-size: 40px;\n  }\n  \n  .mat-tool{\n    margin-top: 55px;\n  }\n  \n  .input-btn{\n    background: #3638ff5c;\n    padding: 5px 42px 5px 13px;\n    border-radius: 6px;\n  }\n  \n  .uploadList{\n    padding: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n  \n  .btn-file {\n  position: relative;\n  overflow: hidden;\n}\n  \n  .btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  outline: none;   \n  cursor: inherit;\n  display: block;\n}\n  \n  .progress {height: 10px !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFFekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBOztLQUVHOztFQUVIO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztFQUNBLFdBQVcsdUJBQXVCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICAuZmlsZS1vci1mb2xkZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAvKiAuY29udGFpbmVye1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH0gKi9cbiAgXG4gIC5maWxlLW9yLWZvbGRlci1pY29uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIC5mb2xkZXItaWNvbntcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgfVxuICBcbiAgLnBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbiAgXG4gIC5jcmVhdGUtZmlsZS1pY29ue1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuXG4gIC5tYXQtdG9vbHtcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xuICB9XG5cbiAgLmlucHV0LWJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjMzYzOGZmNWM7XG4gICAgcGFkZGluZzogNXB4IDQycHggNXB4IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgLnVwbG9hZExpc3R7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idG4tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5idG4tZmlsZSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG9wYWNpdHk6IDA7XG4gIG91dGxpbmU6IG5vbmU7ICAgXG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJvZ3Jlc3Mge2hlaWdodDogMTBweCAhaW1wb3J0YW50O30iXX0= */"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.html":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n\n<mat-toolbar class=\"mat-tool\">\n    <mat-icon *ngIf=\"canNavigateUp\" class=\"pointer\" (click)=\"navigateUp()\">arrow_back</mat-icon>\n    <span style=\"margin-left: 8px\">{{path || 'Files'}}</span>\n    <span class=\"spacer\"></span>\n    <button class=\"btn btn-primary\" (click)=\"openNewFolderDialog()\"><i class=\"fa fa-folder\" aria-hidden=\"true\"></i> &nbsp;New Folder</button>\n   \n  </mat-toolbar>\n\n  \n\n\n  <div class=\"fluid-container\">\n    <div class=\"col-md-8\">\n      <div class=\"row card\">\n          <div class=\"col-sm-12\">\n              <h4>Upload Section</h4>\n              <div id=\"fileSelector\">\n                  <!-- <button (click)=\"fileInput.click()\" class=\"input-btn\">\n                       <span>Choose Files</span>\n                     \n                    <input #fileInput  type=\"file\" name=\"fileUplaod\" id=\"fileUpload\" (change)=\"onFileInput($event)\" style=\"display:none;\" style=\"display:none;\"\n                  multiple ng2FileSelect [uploader]=\"uploader\">\n                    </button> -->\n                    <span class=\"btn btn-primary btn-file\">\n                      <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Upload Files  <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\n                      multiple ng2FileSelect [uploader]=\"uploader\">\n                  </span>\n                 \n              </div>\n              <div class='uploadsec' *ngIf=\"uploadCard\">\n                  <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                      <div class=\"col-sm-2\">{{item.file.name}}</div>\n                      <div class=\"col-sm-4\">\n                          <div class=\"progress\">\n                              <div class=\"progress-bar bg-success\" \n                              [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                              <button type=\"button\" class=\"btn btn-dark  btn-sm\" (click)=\"item.upload()\" [disabled]=\"item.progress > 0\">Upload</button>\n                              <span>&nbsp;</span>\n                              <button type=\"button\" class=\"btn btn-danger  btn-sm\" (click)=\"item.remove()\">Cancel</button>\n                      </div>\n                \n                  </div>\n                  <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\n                      <div class=\"col-sm-1\" >\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"uploader?.queue?.length > 0\" (click)=\"hide()\">Done</button>\n                      </div>\n                      <div class=\"col-sm-1\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                      </div>\n                  </div>   \n              </div>\n              \n              \n          </div>                \n      </div>\n\n  <div class=\"row card\">\n       \n  </div>\n  <div class=\"col-md-2\"></div>\n</div>\n  </div>\n  \n\n  <!-- <label for=\"singleFile\">Upload file</label>\n  <input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n  <br>\n   \n  <mat-file-upload-queue #fileUploadQueue\n      [fileAlias]=\"'file'\"\n      [httpUrl]=\"'http://localhost:8180/jax-rs-jersey-application-sample'\">\n   \n      <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n  </mat-file-upload-queue> -->  \n\n\n\n  <div class=\"container\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n    <div class=\"content\" fxFlex fxLayout=\"row\">\n      <mat-grid-list cols=\"4\" rowHeight=\"100px\" fxFlex>\n        <mat-grid-tile *ngFor=\"let element of fileElements\" class=file-or-folder>\n          <span [matMenuTriggerFor]=\"rootMenu\" [matMenuTriggerData]=\"{element: element}\" #menuTrigger=\"matMenuTrigger\"></span>\n          <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" (click)=\"navigate(element)\" (contextmenu)=\"openMenu($event,element, menuTrigger)\">\n            <mat-icon color=\"warn\" class=\"file-or-folder-icon pointer folder-icon\" *ngIf=\"element.isFolder\">folder_open</mat-icon>\n            <mat-icon class=\"file-or-folder-icon pointer \" *ngIf=\"!element.isFolder && element.Ext != '.png' && element.Ext != '.svg' && element.Ext != '.jpeg'\">description</mat-icon>\n            <mat-icon class=\"file-or-folder-icon pointer\" *ngIf=\"!element.isFolder && element.Ext == '.png' || element.Ext == '.svg' ||element.Ext == '.jpeg' \">photo</mat-icon>\n            <!-- <i class =\"fa\" [class]=\"extensionsMap.zip\"  *ngIf=\"!element.isFolder\" style=\"font-size:48px;\"></i> -->\n            <span>{{element.name}}</span>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </div>\n\n  <mat-grid-list *ngIf=\"!fileElements?.length > 0\" cols=\"4\" rowHeight=\"100px\" fxFlex>\n      <div class=\"jumbotron text-center\">\n          <h1>This Folder is empty</h1> \n        </div>\n  </mat-grid-list>\n  \n\n  \n  \n  <mat-menu #rootMenu=\"matMenu\" [overlapTrigger]=\"false\">\n    <ng-template matMenuContent let-element=\"element\">\n      <button mat-menu-item (click)=\"downloadFile(element)\">\n            <mat-icon>get_app</mat-icon>\n            <span>Download</span>\n      </button>\n      <button mat-menu-item [matMenuTriggerFor]=\"moveToMenu\" [matMenuTriggerData]=\"{self: element}\">\n        <mat-icon>open_with</mat-icon>\n        <span>Move To</span>\n      </button>\n      <button mat-menu-item (click)=\"openRenameDialog(element)\">\n        <mat-icon>edit</mat-icon>\n        <span>Rename</span>\n      </button>\n      <button mat-menu-item (click)=\"deleteElement(element)\">\n        <mat-icon>delete</mat-icon>\n        <span>Delete</span>\n      </button>\n    </ng-template>\n  </mat-menu>\n  \n  <mat-menu #moveToMenu=\"matMenu\">\n    <ng-template matMenuContent let-self=\"self\">\n      <ng-container *ngFor=\"let element of fileElements\">\n        <button *ngIf=\"element.isFolder && element.id !== self.id\" mat-menu-item (click)=\"moveElement(self, element)\">{{element.name}}</button>\n      </ng-container>\n    </ng-template>\n  </mat-menu>"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-folder-dialog/new-folder-dialog.component */ "./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.ts");
/* harmony import */ var _rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rename-dialog/rename-dialog.component */ "./src/app/file-upload/rename-dialog/rename-dialog.component.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _users_file_removed_dialog_file_removed_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../users/file-removed-dialog/file-removed-dialog.component */ "./src/app/users/file-removed-dialog/file-removed-dialog.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);










var uri = 'http://localhost:3000/api/upload';
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(auth, dialog, _fileService) {
        var _this = this;
        this.auth = auth;
        this.dialog = dialog;
        this._fileService = _fileService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        this.uploadCard = true;
        this.doneBut = false;
        this.userData = [];
        this.folderAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementRenamed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.navigatedDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.navigatedUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.fileElements.push(JSON.parse(response));
            console.log('connnnsssstttrrruuuccctttooorrrr', response);
        };
    }
    FileUploadComponent.prototype.ngOnChanges = function (changes) { };
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('uploaddddddddddderrrrrrrrrrrrr', this.uploader);
        this.auth.profile().subscribe(function (user) {
            console.log('Usercomponent : userDetails ', user);
            _this.user = user.roles;
        }, function (err) {
            console.error(err);
        });
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._fileService.getAll().subscribe(function (data) {
            console.log("data from the getall", data);
            // for(let entry of data)
            _this.userData = data;
            console.log(_this.userData);
            console.log("file element in thwe geteALL () Dartat _+_+_+_+_+_", _this.fileElements);
            //this.userData = Array.of(this.userData);
            _this.fileElements.forEach(function (element) {
                if (element.isFolder) {
                    _this.userData.forEach(function (user) {
                        // console.log('userdata', user)
                        if (element.name == user._id) {
                            // element.name = user.name
                        }
                    });
                }
            });
        }, function (error) {
            console.error(error);
        });
    };
    FileUploadComponent.prototype.hide = function () {
        this.uploadCard = false;
    };
    FileUploadComponent.prototype.downloadFile = function (element) {
        console.log('donwload funcrion is working', element);
        //var filename = this.attachmentList[index].uploadname;
        var filename = element;
        this._fileService.downloadFile(filename)
            .subscribe(function (data) {
            console.log('data>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data);
            console.log('filename', filename);
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(data, filename.name);
        }, function (error) { return console.error(error); });
    };
    FileUploadComponent.prototype.deleteElement = function (element) {
        console.log('delete element', element);
        this.elementRemoved.emit(element);
    };
    FileUploadComponent.prototype.navigate = function (element) {
        console.log('_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+__+++_+_+_=', element);
        if (element.isFolder) {
            this.navigatedDown.emit(element);
        }
    };
    FileUploadComponent.prototype.navigateUp = function () {
        this.navigatedUp.emit();
    };
    FileUploadComponent.prototype.moveElement = function (element, moveTo) {
        this.elementMoved.emit({ element: element, moveTo: moveTo });
    };
    FileUploadComponent.prototype.openNewFolderDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NewFolderDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.folderAdded.emit({ name: res });
                console.log('folder added ', res);
            }
        });
    };
    FileUploadComponent.prototype.openRenameDialog = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RenameDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                element.name = res;
                _this.elementRenamed.emit(element);
            }
        });
    };
    FileUploadComponent.prototype.openFileRemovedDialog = function () {
        this.dialog.open(_users_file_removed_dialog_file_removed_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FileRemovedDialogComponent"]);
        /* dialogRef.afterClosed().subscribe(res => {
          if (res) {
            element.name = res;
            this.elementRenamed.emit(element);
          }
        }); */
    };
    FileUploadComponent.prototype.openMenu = function (event, element, viewChild) {
        event.preventDefault();
        viewChild.openMenu();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FileUploadComponent.prototype, "fileElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUploadComponent.prototype, "canNavigateUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUploadComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "folderAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "elementRemoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "elementRenamed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "navigatedDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "elementMoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "navigatedUp", void 0);
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/file-upload/file-upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-button-raised{\n    width: 200px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS11cGxvYWQvbmV3LWZvbGRlci1kaWFsb2cvbmV3LWZvbGRlci1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkL25ldy1mb2xkZXItZGlhbG9nL25ldy1mb2xkZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJ1dHRvbi1yYWlzZWR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create a new folder</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Folder Name\" [(ngModel)]=\"folderName\">\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewFolderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFolderDialogComponent", function() { return NewFolderDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var NewFolderDialogComponent = /** @class */ (function () {
    function NewFolderDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NewFolderDialogComponent.prototype.ngOnInit = function () {
    };
    NewFolderDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-folder-dialog',
            template: __webpack_require__(/*! ./new-folder-dialog.component.html */ "./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-folder-dialog.component.css */ "./src/app/file-upload/new-folder-dialog/new-folder-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], NewFolderDialogComponent);
    return NewFolderDialogComponent;
}());



/***/ }),

/***/ "./src/app/file-upload/rename-dialog/rename-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/file-upload/rename-dialog/rename-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkL3JlbmFtZS1kaWFsb2cvcmVuYW1lLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/file-upload/rename-dialog/rename-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/file-upload/rename-dialog/rename-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Rename Element</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Folder Name\" [(ngModel)]=\"folderName\">\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/file-upload/rename-dialog/rename-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/file-upload/rename-dialog/rename-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: RenameDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameDialogComponent", function() { return RenameDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var RenameDialogComponent = /** @class */ (function () {
    function RenameDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    RenameDialogComponent.prototype.ngOnInit = function () {
    };
    RenameDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rename-dialog',
            template: __webpack_require__(/*! ./rename-dialog.component.html */ "./src/app/file-upload/rename-dialog/rename-dialog.component.html"),
            styles: [__webpack_require__(/*! ./rename-dialog.component.css */ "./src/app/file-upload/rename-dialog/rename-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], RenameDialogComponent);
    return RenameDialogComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat\");\n\n:host {\n    display: flex;\n    justify-content: center;\n    margin: 100px 0px;\n  }\n\n.mat-form-field {\n    width: 100%;\n    min-width: 300px;\n    color: white !important;\n  }\n\nmat-card-title,\n  mat-card-content {\n    display: flex;\n    justify-content: center;\n  }\n\n.button {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n.mat-card-image {\n    width: calc(54% + 32px) !important;\n    margin: 41px 16px 36px 56px !important;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n    box-shadow: 0 2px 25px 14px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 0 15px 0 rgba(0,0,0,.12) !important;\n}\n\n.mat-card{\n    position: absolute;\n    width: 387px !important;\n    border-radius: 8px !important;\n    z-index: 100;\n    background: #faebd700 !important;\n}\n\ncard-title:not(:first-child){\n  color: white;\n}\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: white !important;\n  color: white !important\n}\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n    color: white;\n}\n\n.selectDisable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsaUVBQWlFOztBQUVqRTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7O0FBRUE7O0lBRUUsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7QUFJQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsc0NBQXNDO0FBQzFDOztBQUdBO0lBQ0ksOEdBQThHO0FBQ2xIOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGtDQUFrQztFQUNsQztBQUNGOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUV6QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHFCQUFpQjtNQUFqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0XCIpO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIG1hdC1jYXJkLXRpdGxlLFxuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cblxuXG4gIC5idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICBcbiAgLm1hdC1jYXJkLWltYWdlIHtcbiAgICB3aWR0aDogY2FsYyg1NCUgKyAzMnB4KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNDFweCAxNnB4IDM2cHggNTZweCAhaW1wb3J0YW50O1xufVxuXG5cbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gICAgYm94LXNoYWRvdzogMCAycHggMjVweCAxNHB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMCAxNXB4IDAgcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2FyZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM4N3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJhY2tncm91bmQ6ICNmYWViZDcwMCAhaW1wb3J0YW50O1xufVxuXG5jYXJkLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnRcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VsZWN0RGlzYWJsZSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form (submit)=\"login()\">\n    <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-2 col-form-label\">Email address</label>\n        <div class=\"col-sm-6\">\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n          <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n          <div class=\"col-sm-6\">\n              <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n          </div>\n      </div>\n  <button type=\"submit\" class=\"btn btn-default\">Sign In</button>\n</form> -->\n\n\n  \n\n<!-- <mat-card class=\"example-card\">\n    <img mat-card-image src=\"assets/logo-new.png\" alt=\"logo gsource\">\n    <mat-card-content>\n      <form (submit)=\"login()\">\n          <div class=\"example-container\">\n          <mat-form-field>\n              <input matInput type=\"email\" name=\"email\" placeholder=\"Enter your email\" [formControl]=\"email\"  [(ngModel)]=\"credentials.email\"  required>\n              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"password\" name=\"password\" placeholder=\"Enter your password\"  [type]=\"hide ? 'password' : 'text'\"  [(ngModel)]=\"credentials.password\">\n                <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </button>\n            </mat-form-field>\n            </div>\n            <button mat-button type=\"submit\">LOG IN</button>\n      </form>\n    </mat-card-content>\n</mat-card> -->\n<particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\n\n\n\n    <mat-card>\n        <img class=\"selectDisable\" mat-card-image src=\"assets/gs_logo_white.png\" alt=\"logo gsource\">\n        <mat-card-title style=\"color: white;\">FILE SHARING SYSTEM</mat-card-title>\n    <mat-card-content>\n    <form  (submit)=\"login()\">\n      <p>\n        <mat-form-field [color]=\"warn\">\n            <input matInput type=\"email\" name=\"email\" placeholder=\"Enter your email\" [formControl]=\"email\" [(ngModel)]=\"credentials.email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </p>\n    \n      <p>\n        <mat-form-field [color]=\"warn\">\n            <input matInput type=\"password\" name=\"password\" placeholder=\"Enter your password\" [(ngModel)]=\"credentials.password\" required>\n        </mat-form-field>\n      </p>\n    \n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n    \n      <div class=\"button\">\n        <button type=\"submit\" mat-raised-button>Login</button>\n      </div>\n    \n    </form>\n    </mat-card-content>\n    </mat-card>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.credentials = {
            email: '',
            password: ''
        };
        this.hide = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
            'background-color': '#010013'
        };
        this.myParams = {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function (response) {
            console.log('user data', response);
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




//import {MatPaginatorModule} from '@angular/material/paginator';
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".regbox{\n    margin-top:100px;\n}\ntable {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdib3h7XG4gICAgbWFyZ2luLXRvcDoxMDBweDtcbn1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6 regbox col-md-offset-3\">\n      <h1>Client Registration</h1>\n      <form (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Client name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter client name\" [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <div class=\"form-group text-center\">\n            <button type=\"submit\" class=\"btn btn-default \">Register!</button>\n        </div>\n        \n      </form>\n    </div>\n    <div class=\"col-md-12\">\n      <hr>\n    </div>\n    <div class=\"col-md-12\">\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n            <!--- Note that these columns can be defined in any order.\n                  The actual rendered columns are set as a property on the row definition\" -->\n          \n            <!-- Position Column -->\n          \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"Name\">\n              <th mat-header-cell *matHeaderCellDef> Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n          \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"Email\">\n              <th mat-header-cell *matHeaderCellDef>Email</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n            </ng-container>\n          \n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"Role\">\n              <th mat-header-cell *matHeaderCellDef> Role</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.roles}} </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");





var ELEMENT_DATA = [];
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router, _fileService) {
        this.auth = auth;
        this.router = router;
        this._fileService = _fileService;
        this.userData = [];
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
        this.displayedColumns = ['Name', 'Email', 'Role'];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._fileService.getAll().subscribe(function (data) {
            console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', ELEMENT_DATA);
            _this.userData = data;
            _this.dataSource = _this.userData;
            console.log('allllllllll user data', _this.userData);
            _this.userData.forEach(function (element) {
                console.log('elememememememem', element);
            });
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/file.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/file.service.ts ***!
  \*****************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");





var FileService = /** @class */ (function () {
    function FileService(_http) {
        this._http = _http;
        this.map = new Map();
        this.count = 0;
    }
    FileService.prototype.createFolder = function (folderName) {
        // folderName.id = v4();
        folderName.id = folderName.name;
        this.map.set(folderName.id, this.clone(folderName));
        var body = { newfoldername: folderName };
        console.log('get files body', body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        //console.log('file data for deletion', filedata)
        return this._http.post('http://localhost:3000/api/createfolder', JSON.stringify(body), {
            headers: headers
        });
        /* var body = {newfoldername:folderName};
    console.log('createFolder added to map ', body)
    return this._http.post('http://localhost:3000/api/createfolder', body, {
    responseType :  'blob',
    headers:new HttpHeaders().append('Content-Type','application/json')
}) */
    };
    FileService.prototype.add = function (fileElement) {
        console.log('count ++_______', this.count++);
        console.log('fileeemelmet: fileservice ', fileElement);
        console.log('mapppppppppppppppppp1111111111', this.map.get(fileElement.Path));
        console.log('-=-=-==-=--=-=-=-=-=-=-=--=mapppp', this.map.has(fileElement.Path));
        if (!this.map.has(fileElement.Path)) {
            console.log('fileElement path', fileElement.Path);
            // var _id = v4();
            fileElement.id = fileElement.name;
            this.map.set(fileElement.id, this.clone(fileElement));
            console.log('fileeemelmet: fileservice : return', fileElement);
        }
        return fileElement;
    };
    FileService.prototype.delete = function (element) {
        console.log('delete: fileService: id ', element);
        this.map.delete(element.id);
        var body = { filename: element };
        console.log('get files body', body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/removefile', JSON.stringify(body), {
            headers: headers
        });
    };
    FileService.prototype.update = function (id, update) {
        var element = this.map.get(id);
        element = Object.assign(element, update);
        this.map.set(element.id, element);
    };
    FileService.prototype.queryInFolder = function (folderId) {
        var _this = this;
        //console.log('queryInfolder: folderID', folderId)
        var result = [];
        this.map.forEach(function (element) {
            //  console.log('queryInfolder: this.map: elemnt', element)
            if (element.parent === folderId) {
                result.push(_this.clone(element));
            }
        });
        if (!this.querySubject) {
            this.querySubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](result);
        }
        else {
            this.querySubject.next(result);
        }
        console.log('queryInfolder: this.query subject ', this.querySubject.asObservable());
        return this.querySubject.asObservable();
    };
    FileService.prototype.get = function (id) {
        return this.map.get(id);
    };
    FileService.prototype.clone = function (element) {
        return JSON.parse(JSON.stringify(element));
    };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");




//import {Observable} from 'rxjs';
var UsersService = /** @class */ (function () {
    function UsersService(_http) {
        this._http = _http;
    }
    UsersService.prototype.uploadFile = function (filepath) {
        console.log('file path************************************', filepath);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        console.log('file data for deletion', filepath);
        return this._http.post('http://localhost:3000/api/fileUpload', JSON.stringify(filepath), {
            headers: headers
        });
    };
    UsersService.prototype.downloadFile = function (file) {
        var body = { filename: file };
        console.log('donwload path ', body.filename.Path);
        return this._http.post('http://localhost:3000/api/download', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UsersService.prototype.getFiles = function (files) {
        var body = { filename: files };
        console.log('get files body', body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/files', JSON.stringify(body), {
            headers: headers
        });
    };
    UsersService.prototype.deleteFile = function (filedata) {
        var body = { filename: filedata };
        console.log('get files body', body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        console.log('file data for deletion', filedata);
        return this._http.post('http://localhost:3000/api/removefile', JSON.stringify(body), {
            headers: headers
        });
    };
    /*   createFolder(folderName:String){
          var body = {newfoldername:folderName};
              console.log('createFolder', body)
              return this._http.post('http://localhost:3000/api/createfolder', body, {
              responseType :  'blob',
              headers:new HttpHeaders().append('Content-Type','application/json')
          })
      }    */
    UsersService.prototype.getAll = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/getall', {
            headers: headers
        });
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/users/file-removed-dialog/file-removed-dialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/users/file-removed-dialog/file-removed-dialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2ZpbGUtcmVtb3ZlZC1kaWFsb2cvZmlsZS1yZW1vdmVkLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/file-removed-dialog/file-removed-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/users/file-removed-dialog/file-removed-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-dialog-content>\n  <p style=\"color:lime;\"><span style=\"font-size:20px;\"><i>'File : {{data.animal.file}}'</i>&nbsp; Deleted Sucessfully ! </span><i class=\"fa fa-check-circle-o fa-2x\" style=\"color:lime;\" aria-hidden=\"true\"></i></p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-stroked-button mat-dialog-close color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/users/file-removed-dialog/file-removed-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/users/file-removed-dialog/file-removed-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: FileRemovedDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRemovedDialogComponent", function() { return FileRemovedDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var FileRemovedDialogComponent = /** @class */ (function () {
    function FileRemovedDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    FileRemovedDialogComponent.prototype.ngOnInit = function () {
    };
    FileRemovedDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-removed-dialog',
            template: __webpack_require__(/*! ./file-removed-dialog.component.html */ "./src/app/users/file-removed-dialog/file-removed-dialog.component.html"),
            styles: [__webpack_require__(/*! ./file-removed-dialog.component.css */ "./src/app/users/file-removed-dialog/file-removed-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], FileRemovedDialogComponent);
    return FileRemovedDialogComponent;
}());



/***/ }),

/***/ "./src/app/users/foldermodule/foldermodule.component.css":
/*!***************************************************************!*\
  !*** ./src/app/users/foldermodule/foldermodule.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2ZvbGRlcm1vZHVsZS9mb2xkZXJtb2R1bGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/users/foldermodule/foldermodule.component.html":
/*!****************************************************************!*\
  !*** ./src/app/users/foldermodule/foldermodule.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create New Folder</h1>\n<div mat-dialog-content>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Enter Folder Name\" value=\"Sushi\" matInput [(ngModel)]=\"data\">\n      </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Create</button>\n</div>\n"

/***/ }),

/***/ "./src/app/users/foldermodule/foldermodule.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/foldermodule/foldermodule.component.ts ***!
  \**************************************************************/
/*! exports provided: FoldermoduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldermoduleComponent", function() { return FoldermoduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var FoldermoduleComponent = /** @class */ (function () {
    function FoldermoduleComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FoldermoduleComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FoldermoduleComponent.prototype.ngOnInit = function () {
    };
    FoldermoduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foldermodule',
            template: __webpack_require__(/*! ./foldermodule.component.html */ "./src/app/users/foldermodule/foldermodule.component.html"),
            styles: [__webpack_require__(/*! ./foldermodule.component.css */ "./src/app/users/foldermodule/foldermodule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], FoldermoduleComponent);
    return FoldermoduleComponent;
}());



/***/ }),

/***/ "./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL21vZGFscy9mb2xkZXItYWRkZWQtYWxlcnRtb2RhbC9mb2xkZXItYWRkZWQtYWxlcnRtb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <p style=\"font-size:18px\">{{data.addFolder.folder}}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-stroked-button mat-dialog-close color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FolderAddedAlertmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderAddedAlertmodalComponent", function() { return FolderAddedAlertmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var FolderAddedAlertmodalComponent = /** @class */ (function () {
    function FolderAddedAlertmodalComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    FolderAddedAlertmodalComponent.prototype.ngOnInit = function () {
    };
    FolderAddedAlertmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-folder-added-alertmodal',
            template: __webpack_require__(/*! ./folder-added-alertmodal.component.html */ "./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.html"),
            styles: [__webpack_require__(/*! ./folder-added-alertmodal.component.css */ "./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], FolderAddedAlertmodalComponent);
    return FolderAddedAlertmodalComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* .header-section{\n    height: 80px;\n    line-height: 80px;\n    color: beige;\n    background-color: rgb(46, 43, 43);\n    font-size: 24px;\n    padding-left: 20px;\n}\n\n.card{\n    background-color: white;\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n    color:black;\n    margin: 20px;\n    padding: 10px;\n}\n\n.uploadList{\n    padding: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n} */\n\n.fileUploadView{\n    height: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRzs7QUFFSDtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiAuaGVhZGVyLXNlY3Rpb257XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiBiZWlnZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQzLCA0Myk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnVwbG9hZExpc3R7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59ICovXG5cbi5maWxlVXBsb2FkVmlld3tcbiAgICBoZWlnaHQ6IDEwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">Full name</label>\n    <p class=\"form-control-static\">{{ details?.name }}</p>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">Email</label>\n    <p class=\"form-control-static\">{{ details?.email }}</p>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-md-2\">\n           \n      </div>\n      <div class=\"col-md-8\">\n          <div class=\"row card\">\n              <div class=\"col-sm-12\">\n                  <h4>Upload Section</h4>\n                  <div id=\"fileSelector\">\n                      <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\n                      multiple ng2FileSelect [uploader]=\"uploader\">\n                  </div>\n                  <div>\n                      <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                          <div class=\"col-sm-4\">{{item.file.name}}</div>\n                          <div class=\"col-sm-4\">\n                              <div class=\"progress\">\n                                  <div class=\"progress-bar bg-success\" \n                                  [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                              </div>\n                          </div>\n                          <div class=\"col-sm-4\">\n                                  <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                          </div>\n                      </div>                        \n                  </div>\n                  <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                  </div>\n              </div>                \n          </div>\n\n          \n      <div class=\"row card\">\n           \n      </div>\n      <div class=\"col-md-2\"></div>\n  </div>\n</div> -->\n\n\n\n\n<div style=\"height: 100%; box-sizing: border-box;\">\n        <mat-card style=\"height: 100%; box-sizing: border-box; padding:0\">\n          <app-file-upload class=\"fileUploadView\" [fileElements]=\"fileElements | async\" [path]=\"currentPath\" [canNavigateUp]=\"canNavigateUp\" (folderAdded)=\"addFolder($event)\"\n            (elementRemoved)=\"removeElement($event)\" (navigatedDown)=\"navigateToFolder($event)\" (navigatedUp)=\"navigateUp()\" (elementRenamed)=\"renameElement($event)\"\n            (elementMoved)=\"moveElement($event)\">\n          </app-file-upload>\n        </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/file.service */ "./src/app/service/file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _file_removed_dialog_file_removed_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file-removed-dialog/file-removed-dialog.component */ "./src/app/users/file-removed-dialog/file-removed-dialog.component.ts");
/* harmony import */ var _modals_folder_added_alertmodal_folder_added_alertmodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/folder-added-alertmodal/folder-added-alertmodal.component */ "./src/app/users/modals/folder-added-alertmodal/folder-added-alertmodal.component.ts");













var uri = 'http://localhost:3000/api/upload';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(auth, http, _fileService, router, dialog, fileService) {
        var _this = this;
        this.auth = auth;
        this.http = http;
        this._fileService = _fileService;
        this.router = router;
        this.dialog = dialog;
        this.fileService = fileService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        this.allData = [];
        this.canNavigateUp = false;
        this.filespath = '';
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
        };
    }
    UsersComponent.prototype.getFile = function (path) {
        var _this = this;
        this._fileService.getFiles(path)
            .subscribe(function (data) {
            console.log('data', data);
            _this.allData = data;
            console.log('1111111111111111111alldata', _this.allData);
            _this.allData = Array.of(_this.allData);
            for (var i = 0; i < _this.allData.length; i++) {
                for (var j = 0; j < _this.allData[i].length; j++) {
                    console.log(_this.allData[i][j]);
                    console.log(_this.allData[i][j].isFolder);
                    _this.fileService.add(_this.allData[i][j]);
                    _this.updateFileElementQuery();
                }
            }
        }, function (error) { return console.error(error); });
    };
    ;
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getuser().subscribe(function (user) {
            console.log(user);
            _this.details = user;
            console.log('get user details', _this.details);
            _this.updateFileElementQuery();
        }, function (err) {
            console.error(err);
        });
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
            console.log('Usercomponent : userDetails ', _this.details);
            _this.updateFileElementQuery();
        }, function (err) {
            console.error(err);
        });
        //get files 
        this.getFile({ parent: this.currentRoot ? this.currentRoot.id : 'root', path: this.currentPath });
        // file upload root 
        //--------------------------------------------------
        // const folderA = this.fileService.add({ name: 'Folder A', isFolder: true, parent: 'root' });
        /*this.fileService.add({ name: 'Folder B', isFolder: true, parent: 'root', path: 'root' });
        this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' , path: 'root'});
         this.fileService.add({ name: 'Folder C', isFolder: true, parent: folderA.id });
        this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' });
        this.fileService.add({ name: 'File B', isFolder: false, parent: 'root' }); */
        console.log('this,fileservice ', this.fileService);
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.download = function (index) {
        var filename = this.attachmentList[index].uploadname;
        this._fileService.downloadFile(filename)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(data, filename); }, function (error) { return console.error(error); });
    };
    UsersComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_file_removed_dialog_file_removed_dialog_component__WEBPACK_IMPORTED_MODULE_11__["FileRemovedDialogComponent"], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('results', result);
        });
    };
    //new folders ngular version 
    UsersComponent.prototype.addFolder = function (folder) {
        var _this = this;
        console.log('adding folder to the aservice for the ui');
        console.log('addfolder ', this.currentRoot ? this.currentRoot.id : 'root');
        this.fileService.createFolder({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root', path: this.currentPath })
            .subscribe(function (data) {
            console.log('the folder added successfully ', data);
            _this.dialog.open(_modals_folder_added_alertmodal_folder_added_alertmodal_component__WEBPACK_IMPORTED_MODULE_12__["FolderAddedAlertmodalComponent"], {
                width: '400px',
                data: { addFolder: data },
            });
        }, function (error) {
            console.log('error while addning the fils and folder');
            console.error('Error while creting the new folder', error);
        });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.updateFileElementQuery = function () {
        this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
        console.log('updateFileElementQuery', this.fileElements);
    };
    UsersComponent.prototype.removeElement = function (element) {
        var _this = this;
        console.log('UserComponent : remove element : emelent ', element);
        this.fileService.delete(element).subscribe(function (data) {
            console.log('file remove data ', data);
            _this.dialog.open(_file_removed_dialog_file_removed_dialog_component__WEBPACK_IMPORTED_MODULE_11__["FileRemovedDialogComponent"], {
                width: '600px',
                data: { animal: data }
            });
        }, function (error) {
            console.log('file remove data ERROR!', error);
        });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.navigateToFolder = function (element) {
        this.currentRoot = element;
        this.currentPath = this.pushToPath(this.currentPath, element.name);
        console.log('this current path: navigateToFolder  ', element);
        this.canNavigateUp = true;
        this.getFile({ parent: this.currentRoot ? this.currentRoot.id : 'root', path: this.currentPath });
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        this._fileService.uploadFile({ parent: this.currentRoot ? this.currentRoot.id : 'root', path: this.currentPath }).subscribe(function (data) {
            console.log('file upload data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data);
        });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.navigateUp = function () {
        console.log('nevigat eup funcrion is called ');
        if (this.currentRoot && this.currentRoot.parent === 'root') {
            this.currentRoot = null;
            this.canNavigateUp = false;
            this.updateFileElementQuery();
        }
        else {
            this.currentRoot = this.fileService.get(this.currentRoot.parent);
            this.updateFileElementQuery();
        }
        this.currentPath = this.popFromPath(this.currentPath);
    };
    UsersComponent.prototype.moveElement = function (event) {
        this.fileService.update(event.element.id, { parent: event.moveTo.id });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.renameElement = function (element) {
        console.log(element);
        this.fileService.update(element.id, { name: element.name });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.pushToPath = function (path, folderName) {
        var p = path ? path : '';
        p += folderName + "/";
        console.log('pushToPath : p ; ', p);
        return p;
    };
    UsersComponent.prototype.popFromPath = function (path) {
        var p = path ? path : '';
        var split = p.split('/');
        split.splice(split.length - 2, 1);
        p = split.join('/');
        console.log('popFromPath : p ; ', p);
        return p;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            providers: [_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]],
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _service_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"]])
    ], UsersComponent);
    return UsersComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gsource/gsource-fs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map