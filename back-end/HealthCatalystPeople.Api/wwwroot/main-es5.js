(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hc-navbar [appIcon]=\"''\" [brandIcon]=\"'/assets/yoda-icon.jpg'\" [routerLink]=\"[ '/people' ]\">\n  Health Catalyst People Search\n</hc-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/autocomplete-chips/autocomplete-chips.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/autocomplete-chips/autocomplete-chips.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!single\">\n    <button\n        class=\"chip\"\n        *ngFor=\"let chip of value; let index = index\"\n        [attr.aria-label]=\"'remove ' + chip.name + ' from person'\"\n        type=\"button\"\n        (click)=\"removeOption(index)\"\n        (keydown.enter)=\"$event.stopPropagation(); removeOption(index)\"\n    >\n        {{ chip.name }}\n        \n        <span>\n            &times;\n        </span>\n    </button>\n</ng-container>\n\n<div class=\"autocomplete-container\" role=\"menu\">\n    <input\n        type=\"text\"\n        #autocomplete\n        [formControl]=\"queryControl\"\n        (keydown.arrowup)=\"shiftSelectedOptionUp()\"\n        (keydown.arrowdown)=\"shiftSelectedOptionDown()\"\n        (keyup.enter)=\"handleEnter($event)\"\n        (focus)=\"showSuggestionList = true\"\n        (blur)=\"handleQueryBlur()\">\n    \n    <div class=\"autocomplete-options\" *ngIf=\"showSuggestionList\">\n        <button\n            role=\"option\"\n            *ngFor=\"let option of options\"\n            class=\"option\"\n            [class.selected]=\"selectedOption?.id == option.id\"\n            [attr.aria-label]=\"'add ' + option.name + ' to person'\"\n            [disabled]=\"isLoadingResults\"\n            type=\"button\"\n            (mousedown)=\"addOption(option); $event.preventDefault()\"\n        >\n            {{ option.name }}\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/person-card/person-card.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/person-card/person-card.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>person-card works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/person-detail/person-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/person-detail/person-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hc-progress-dots [color]=\"'light'\" *ngIf=\"loading\"></hc-progress-dots>\n\n<form [formGroup]=\"editForm\" *ngIf=\"person\">\n    <hc-tile>\n        <div class=\"img-frame\" [class.show-input]=\"editModes.picture\">\n            <img [src]=\"person.picture\" [alt]=\"person.firstName + ' ' + person.lastName\" (click)=\"!editModes.picture && editField('picture')\">\n            <input formControlName=\"picture\" type=\"url\" *ngIf=\"editModes.picture\">\n        </div>\n\n        <h2>\n            <div *ngIf=\"!editModes.firstName || !editModes.lastName\" (click)=\"editField('firstName'); editField('lastName')\" hcTextFizzle>\n                {{ person.firstName }} {{ person.lastName }}\n            </div>\n            <label *ngIf=\"editModes.firstName\">\n                First Name<br>\n                <input type=\"text\" formControlName=\"firstName\">\n            </label>\n            &nbsp;\n            <label *ngIf=\"editModes.lastName\">\n                Last Name<br>\n                <input type=\"text\" formControlName=\"lastName\">\n            </label>\n        </h2>\n\n        <div class=\"basic-info\">\n            <span>\n                Occupation: \n                <span (click)=\"editField('occupation')\" *ngIf=\"!editModes.occupation\">{{ person.occupation.name }}</span>\n                <hc-autocomplete-chips\n                    [single]=\"true\"\n                    *ngIf=\"editModes.occupation\"\n                    formControlName=\"occupation\"\n                    [options]=\"(occupationResults | async)?.results\"\n                    (queryChange)=\"getOccupations($event)\"\n                ></hc-autocomplete-chips>\n            </span>\n            |\n            <span>\n                Age:\n                <span (click)=\"editField('age')\" *ngIf=\"!editModes.age\">{{ person.age }}</span>\n                <input formControlName=\"age\" *ngIf=\"editModes.age\" type=\"number\">\n            </span>\n            |\n            <span>\n                Email:\n                <span (click)=\"editField('email')\" *ngIf=\"!editModes.email\">{{ person.email || '&lt;none>' }}</span>\n                <input formControlName=\"email\" *ngIf=\"editModes.email\" type=\"email\">\n            </span>\n        </div>\n\n        <div class=\"address\">\n            <!-- address not editable in first iteration of the project -->\n            <h3 hcTextFizzle>Address</h3>\n            <div>{{ person.address.addressLine1 }}</div>\n            <div></div>\n            <div>{{ person.address.addressLine2 }}</div>\n            <div>{{ person.address.city }}</div>\n            <div>{{ person.address.region }}</div>\n            <div>{{ person.address.planet }}</div>\n        </div>\n\n        <div class=\"interests\" >\n            <h3 hcTextFizzle>Interests</h3>\n            <ul *ngIf=\"!editModes.interests\">\n                <li class=\"interest\" (click)=\"editField('interests')\" *ngFor=\"let interest of (person.interests || [])\">{{ interest.name }}</li>\n            </ul>\n            <button *ngIf=\"!person.interests?.length && !editModes.interests\" (click)=\"editField('interests')\">No interests. Click to edit.</button>\n            <hc-autocomplete-chips\n                *ngIf=\"editModes.interests\"\n                formControlName=\"interests\"\n                [options]=\"(interestResults | async)?.results\"\n                (queryChange)=\"getInterests($event)\"\n            ></hc-autocomplete-chips>\n        </div>\n\n        <div class=\"notes\">\n            <h3 hcTextFizzle>Notes</h3>\n            <p *ngIf=\"!editModes.notes\" (click)=\"editField('notes')\">{{ person.notes }}</p>\n            <textarea formControlName=\"notes\" *ngIf=\"editModes.notes\"></textarea>\n        </div>\n\n        <div class=\"controls\">\n            <button type=\"button\" class=\"success\" (click)=\"submit()\" *ngIf=\"anyEditModesEnabled\">Save</button>\n            <button type=\"button\" class=\"plain\" (click)=\"cancelEdits()\" *ngIf=\"anyEditModesEnabled\">Cancel</button>\n            <span class=\"flex-spacer\">Click the details to edit them</span>\n            <!-- Hiding the below for the first iteration of the project -->\n            <button type=\"button\" class=\"warn\" (click)=\"delete()\" *ngIf=\"false\">Delete</button>\n        </div>\n    </hc-tile>\n</form>\n\n<a [routerLink]=\"['..']\">Return to main screen</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/person-list/person-list.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/person-list/person-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\">\n    <label>Type to search: <input type=\"text\" [formControl]=\"searchFormControl\"></label>\n</div>\n\n<ng-container *ngIf=\"!loading\">\n    <a [routerLink]=\"['/people', person.id]\"  *ngFor=\"let person of peopleResults.results\" title=\"Click for more details\">\n        <hc-tile>\n            <div class=\"img-frame\">\n                <img [src]=\"person.picture\" [alt]=\"person.firstName + ' ' + person.lastName\">\n            </div>\n\n            <h2 hcTextFizzle>{{ person.firstName }} {{ person.lastName }}</h2>\n\n            <div class=\"basic-info\">\n                Age: {{ person.age }}\n                <span>|</span> \n                Occupation: {{ person.occupation.name }}\n                <span *ngIf=\"person.email\">|</span> \n                <span class=\"email\" *ngIf=\"person.email\">\n                    Email: {{ person.email }}\n                </span>\n            </div>\n\n            <div class=\"address\">\n                <h3 hcTextFizzle>Address</h3>\n                <div>{{ person.address.addressLine1 }}</div>\n                <div>{{ person.address.addressLine2 }}</div>\n                <div>{{ person.address.city }}</div>\n                <div>{{ person.address.region }}</div>\n                <div>{{ person.address.planet }}</div>\n            </div>\n\n            <div class=\"interests\">\n                <h3 *ngIf=\"person.interests?.length\" hcTextFizzle>Interests</h3>\n                <ul>\n                    <li class=\"interest\" *ngFor=\"let interest of (person.interests || [])\">{{ interest.name }}</li>\n                </ul>\n            </div>\n        </hc-tile>\n    </a>\n    \n    <div class=\"pagination-buttons\">\n        <button *ngIf=\"peopleResults?.previousPage\" (click)=\"changePage('previous')\">Back</button>\n        &nbsp;<span *ngIf=\"peopleResults?.previousPage && peopleResults?.nextPage\">|</span>&nbsp;\n        <button *ngIf=\"peopleResults?.nextPage\" (click)=\"changePage('next')\">Next</button>\n    </div>\n</ng-container>\n\n<hc-progress-dots [color]=\"'light'\" *ngIf=\"loading\"></hc-progress-dots>\n"

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
/* harmony import */ var _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-list/person-list.component */ "./src/app/person-list/person-list.component.ts");
/* harmony import */ var _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person-detail/person-detail.component */ "./src/app/person-detail/person-detail.component.ts");





var routes = [
    {
        path: 'people',
        component: _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonListComponent"],
    },
    {
        path: 'people/:id',
        component: _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_4__["PersonDetailComponent"],
    },
    {
        path: '**',
        redirectTo: 'people',
    },
];
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hc-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _person_card_person_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./person-card/person-card.component */ "./src/app/person-card/person-card.component.ts");
/* harmony import */ var _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person-list/person-list.component */ "./src/app/person-list/person-list.component.ts");
/* harmony import */ var _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./person-detail/person-detail.component */ "./src/app/person-detail/person-detail.component.ts");
/* harmony import */ var _cashmere_cashmere_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cashmere/cashmere.module */ "./src/app/cashmere/cashmere.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _text_fizzle_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text-fizzle.directive */ "./src/app/text-fizzle.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _autocomplete_chips_autocomplete_chips_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autocomplete-chips/autocomplete-chips.component */ "./src/app/autocomplete-chips/autocomplete-chips.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _person_card_person_card_component__WEBPACK_IMPORTED_MODULE_5__["PersonCardComponent"],
                _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_6__["PersonListComponent"],
                _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_7__["PersonDetailComponent"],
                _text_fizzle_directive__WEBPACK_IMPORTED_MODULE_10__["TextFizzleDirective"],
                _autocomplete_chips_autocomplete_chips_component__WEBPACK_IMPORTED_MODULE_12__["AutocompleteChipsComponent"]
            ],
            imports: [
                _cashmere_cashmere_module__WEBPACK_IMPORTED_MODULE_8__["CashmereModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/autocomplete-chips/autocomplete-chips.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/autocomplete-chips/autocomplete-chips.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chip {\n  border-radius: 1em;\n  border-width: 2px;\n  height: 1em;\n  font-size: 0.8em;\n  box-sizing: content-box;\n  padding: 0.3em 0.5em;\n}\n.chip:not(:last-child) {\n  margin-right: 0.5em;\n}\n.autocomplete-container {\n  display: inline-block;\n  position: relative;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.autocomplete-options {\n  position: absolute;\n  top: 100%;\n  min-width: 100%;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: #090e13;\n  display: flex;\n  flex-direction: column;\n}\n.option {\n  padding: 0.7em 0.9em;\n  text-align: left;\n}\n.option:not(:last-child) {\n  border-bottom: none;\n}\n.option:not(:first-child) {\n  border-top: none;\n}\n.option.selected {\n  color: #090e13;\n  background-color: #04e78b;\n  border-color: #04e78b;\n}\n.option:hover {\n  background-color: #03bf73;\n  border-color: #03bf73;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0b2NvbXBsZXRlLWNoaXBzL0M6XFxwcm9qZWN0c1xccGVyc29uYWxcXGhlYWx0aC1jYXRhbHlzdC1wZW9wbGUtc2VhcmNoXFxmcm9udC1lbmQvc3JjXFxhcHBcXGF1dG9jb21wbGV0ZS1jaGlwc1xcYXV0b2NvbXBsZXRlLWNoaXBzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRvY29tcGxldGUtY2hpcHMvYXV0b2NvbXBsZXRlLWNoaXBzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRvY29tcGxldGUtY2hpcHMvQzpcXHByb2plY3RzXFxwZXJzb25hbFxcaGVhbHRoLWNhdGFseXN0LXBlb3BsZS1zZWFyY2hcXGZyb250LWVuZC9zcmNcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDREo7QURHSTtFQUNJLG1CQUFBO0FDRFI7QURLQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCRTFCUztFRjJCVCxhQUFBO0VBQ0Esc0JBQUE7QUNGSjtBREtBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUk7RUFDSSxtQkFBQTtBQ0ZSO0FES0k7RUFDSSxnQkFBQTtBQ0hSO0FETUk7RUFFSSxjRTdDSztFRjhDTCx5QkFGMkI7RUFHM0IscUJBSDJCO0FDRm5DO0FEUUk7RUFDSSx5QkU5Q1M7RUYrQ1QscUJFL0NTO0FEeUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1dG9jb21wbGV0ZS1jaGlwcy9hdXRvY29tcGxldGUtY2hpcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb2xvcnMnO1xyXG5cclxuLmNoaXAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgcGFkZGluZzogLjNlbSAuNWVtO1xyXG5cclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5hdXRvY29tcGxldGUtb3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ub3B0aW9uIHtcclxuICAgIHBhZGRpbmc6IC43ZW0gLjllbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgJGxpZ2h0ZW5lZC1ob2xvZ3JhbS1ncmVlbjogbGlnaHRlbigkaG9sb2dyYW0tZ3JlZW4sIDgpO1xyXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRlbmVkLWhvbG9ncmFtLWdyZWVuO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGxpZ2h0ZW5lZC1ob2xvZ3JhbS1ncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG9sb2dyYW0tZ3JlZW47XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkaG9sb2dyYW0tZ3JlZW47XHJcbiAgICB9XHJcbn1cclxuIiwiLmNoaXAge1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBoZWlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBhZGRpbmc6IDAuM2VtIDAuNWVtO1xufVxuLmNoaXA6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbi5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmF1dG9jb21wbGV0ZS1vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwZTEzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ub3B0aW9uIHtcbiAgcGFkZGluZzogMC43ZW0gMC45ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ub3B0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLm9wdGlvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4ub3B0aW9uLnNlbGVjdGVkIHtcbiAgY29sb3I6ICMwOTBlMTM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNGU3OGI7XG4gIGJvcmRlci1jb2xvcjogIzA0ZTc4Yjtcbn1cbi5vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNiZjczO1xuICBib3JkZXItY29sb3I6ICMwM2JmNzM7XG59IiwiJGJhY2tncm91bmQ6ICMwOTBlMTM7XHJcblxyXG4kaG9sb2dyYW0tYmx1ZTogIzFhYTljMjtcclxuJGRhcmstaG9sb2dyYW0tYmx1ZTogIzAwMjdjNTtcclxuXHJcbiRob2xvZ3JhbS1ncmVlbjogIzAzYmY3MztcclxuXHJcbiRob2xvZ3JhbS1yZWQ6ICNjYzE4MTg7XHJcblxyXG4kaG9sb2dyYW0td2hpdGU6ICNjY2M7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/autocomplete-chips/autocomplete-chips.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/autocomplete-chips/autocomplete-chips.component.ts ***!
  \********************************************************************/
/*! exports provided: AutocompleteChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteChipsComponent", function() { return AutocompleteChipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AutocompleteChipsComponent = /** @class */ (function () {
    function AutocompleteChipsComponent(fb) {
        this.fb = fb;
        this.value = [];
        this.options = [];
        this.single = false;
        this.queryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showSuggestionList = false;
        this.newOption = {
            name: 'New',
            id: -1,
        };
        this.onChange = function () { };
        this.onTouched = function () { };
        this.isLoadingResults = false;
        this.queryControl = this.fb.control('');
    }
    AutocompleteChipsComponent_1 = AutocompleteChipsComponent;
    AutocompleteChipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryControlSubscription = this.queryControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (v) {
            if (!v) {
                _this.options = [];
                _this.selectedOption = null;
            }
            return v;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000); })).subscribe(function (query) {
            _this.isLoadingResults = true;
            _this.queryChange.emit(query);
        });
    };
    AutocompleteChipsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.single && changes.value) {
            this.queryControl.setValue(this.value);
        }
        if (changes.options) {
            this.isLoadingResults = false;
            if (!changes.options.currentValue)
                return;
            var results = this.options
                .filter(function (option) {
                return _this.single ?
                    _this.value.name.toLowerCase() != option.name.toLowerCase() :
                    !_this.value.some(function (val) { return val.name.toLowerCase() == option.name.toLowerCase(); });
            })
                .slice(0, 5);
            if (this.single &&
                this.queryControl.value &&
                !results.some(function (option) {
                    return option.name.toLowerCase() == _this.queryControl.value.toLowerCase() ||
                        option.name.toLowerCase() == _this.value.name;
                }) &&
                this.value.name.toLowerCase() != this.queryControl.value.toLowerCase()) {
                results.push({
                    name: this.queryControl.value,
                    tagId: -1,
                });
            }
            else if (!this.single &&
                this.queryControl.value &&
                !results.some(function (option) { return option.name.toLowerCase() == _this.queryControl.value.toLowerCase(); }) &&
                (!this.value.some(function (option) { return option.name.toLowerCase() == _this.queryControl.value.toLowerCase(); }))) {
                results.push({
                    name: this.queryControl.value,
                    tagId: -1,
                });
            }
            this.selectedOption = results[0];
            this.options = results;
        }
    };
    AutocompleteChipsComponent.prototype.ngOnDestroy = function () {
        this.queryControlSubscription.unsubscribe();
    };
    AutocompleteChipsComponent.prototype.writeValue = function (value) {
        if (value === void 0) { value = []; }
        this.value = value;
        if (this.single && value) {
            this.queryControl.setValue(value.name);
        }
    };
    AutocompleteChipsComponent.prototype.registerOnChange = function (onChange) {
        this.onChange = onChange;
    };
    AutocompleteChipsComponent.prototype.registerOnTouched = function (onTouched) {
        this.onTouched = onTouched;
    };
    AutocompleteChipsComponent.prototype.removeOption = function (index) {
        this.value.splice(index, 1);
        this.onChange(this.value);
    };
    AutocompleteChipsComponent.prototype.addOption = function (option) {
        if (this.single) {
            this.value = option;
        }
        else {
            this.value.push(option);
            this.queryControl.reset('');
        }
        this.selectedOption = null;
        this.options = [];
        this.onChange(this.value);
    };
    AutocompleteChipsComponent.prototype.shiftSelectedOptionUp = function () {
        var currentIndex = this.options.indexOf(this.selectedOption);
        this.selectedOption = this.options[currentIndex - 1 > -1 ? currentIndex - 1 : this.options.length - 1];
    };
    AutocompleteChipsComponent.prototype.shiftSelectedOptionDown = function () {
        this.selectedOption = this.options[(this.options.indexOf(this.selectedOption) + 1) % this.options.length];
    };
    AutocompleteChipsComponent.prototype.handleEnter = function (event) {
        if (this.selectedOption) {
            event.stopPropagation();
            this.addOption(this.selectedOption);
        }
    };
    AutocompleteChipsComponent.prototype.handleQueryBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.showSuggestionList = false;
        });
    };
    var AutocompleteChipsComponent_1;
    AutocompleteChipsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutocompleteChipsComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutocompleteChipsComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutocompleteChipsComponent.prototype, "single", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autocomplete', { static: true })
    ], AutocompleteChipsComponent.prototype, "autocompleteInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutocompleteChipsComponent.prototype, "queryChange", void 0);
    AutocompleteChipsComponent = AutocompleteChipsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hc-autocomplete-chips',
            template: __webpack_require__(/*! raw-loader!./autocomplete-chips.component.html */ "./node_modules/raw-loader/index.js!./src/app/autocomplete-chips/autocomplete-chips.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    multi: true,
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AutocompleteChipsComponent_1; }),
                },
            ],
            host: {
                '(change)': 'onChange(value)',
            },
            styles: [__webpack_require__(/*! ./autocomplete-chips.component.scss */ "./src/app/autocomplete-chips/autocomplete-chips.component.scss")]
        })
    ], AutocompleteChipsComponent);
    return AutocompleteChipsComponent;
}());



/***/ }),

/***/ "./src/app/cashmere/cashmere.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cashmere/cashmere.module.ts ***!
  \*********************************************/
/*! exports provided: CashmereModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashmereModule", function() { return CashmereModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @healthcatalyst/cashmere */ "./node_modules/@healthcatalyst/cashmere/fesm5/healthcatalyst-cashmere.js");



var imports = [
    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_2__["TileModule"],
    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_2__["NavbarModule"],
    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_2__["ProgressIndicatorsModule"],
    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_2__["ListModule"],
];
var CashmereModule = /** @class */ (function () {
    function CashmereModule() {
    }
    CashmereModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: imports,
            exports: imports,
        })
    ], CashmereModule);
    return CashmereModule;
}());



/***/ }),

/***/ "./src/app/interest.service.ts":
/*!*************************************!*\
  !*** ./src/app/interest.service.ts ***!
  \*************************************/
/*! exports provided: InterestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestService", function() { return InterestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var InterestService = /** @class */ (function () {
    function InterestService(http) {
        this.http = http;
    }
    InterestService.prototype.getInterestsByName = function (query, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 8; }
        var params = new URLSearchParams();
        params.append('name', query);
        if (!Number.isNaN(page)) {
            params.append('page', String(page));
        }
        if (!Number.isNaN(count)) {
            params.append('count', String(count));
        }
        return this.http.get("/api/interests?" + params);
    };
    InterestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InterestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], InterestService);
    return InterestService;
}());



/***/ }),

/***/ "./src/app/occupation.service.ts":
/*!***************************************!*\
  !*** ./src/app/occupation.service.ts ***!
  \***************************************/
/*! exports provided: OccupationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationService", function() { return OccupationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OccupationService = /** @class */ (function () {
    function OccupationService(http) {
        this.http = http;
    }
    OccupationService.prototype.getOccupationByName = function (query, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 0; }
        var params = new URLSearchParams();
        params.append('name', query);
        if (!Number.isNaN(page)) {
            params.append('page', String(page));
        }
        if (!Number.isNaN(count)) {
            params.append('count', String(count));
        }
        return this.http.get("/api/occupations?" + params);
    };
    OccupationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OccupationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OccupationService);
    return OccupationService;
}());



/***/ }),

/***/ "./src/app/person-card/person-card.component.scss":
/*!********************************************************!*\
  !*** ./src/app/person-card/person-card.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1jYXJkL3BlcnNvbi1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/person-card/person-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-card/person-card.component.ts ***!
  \******************************************************/
/*! exports provided: PersonCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCardComponent", function() { return PersonCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonCardComponent = /** @class */ (function () {
    function PersonCardComponent() {
    }
    PersonCardComponent.prototype.ngOnInit = function () {
    };
    PersonCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hc-person-card',
            template: __webpack_require__(/*! raw-loader!./person-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/person-card/person-card.component.html"),
            styles: [__webpack_require__(/*! ./person-card.component.scss */ "./src/app/person-card/person-card.component.scss")]
        })
    ], PersonCardComponent);
    return PersonCardComponent;
}());



/***/ }),

/***/ "./src/app/person-detail/person-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/person-detail/person-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  max-width: 1200px;\n  width: 85%;\n  margin: 0 auto;\n}\n\nhc-tile {\n  margin-top: 53.3333333333px;\n  display: grid;\n  grid-template-columns: 186px 3fr 2fr;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n  grid-template-areas: \"img name name\" \"img basic-info basic-info\" \"img address interests\" \"img notes notes\" \"controls controls controls\";\n}\n\n.img-frame {\n  grid-area: img;\n  border-right: 2px solid #1aa9c2;\n  padding-right: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n.img-frame input {\n  position: absolute;\n  bottom: 0;\n  background-color: #090e13;\n  width: calc(100% - 40px);\n}\n\nimg {\n  width: 100%;\n}\n\nh2 {\n  grid-area: name;\n  padding-left: 40px;\n  line-height: initial;\n}\n\nlabel {\n  display: inline-flex;\n  flex-direction: column;\n}\n\nh3 {\n  color: #3b62ff;\n  margin-bottom: 8px;\n  font-size: 16px;\n}\n\n.basic-info {\n  grid-area: basic-info;\n  padding-left: 40px;\n  padding-top: 20px;\n}\n\n.address {\n  grid-area: address;\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-top: 40px;\n  border-right: 2px solid #1aa9c2;\n}\n\n.interests {\n  grid-area: interests;\n  margin-top: 40px;\n  padding-left: 40px;\n}\n\n.notes {\n  grid-area: notes;\n  border-top: 2px solid #1aa9c2;\n  padding-top: 40px;\n  margin-left: 40px;\n  margin-top: 40px;\n}\n\n.notes p {\n  width: 100%;\n  white-space: pre-wrap;\n}\n\ntextarea {\n  width: 100%;\n  height: 7.5em;\n}\n\n.controls {\n  grid-area: controls;\n  padding-top: 20px;\n  margin-top: 40px;\n  border-top: 2px solid #1aa9c2;\n  display: flex;\n  height: 71px;\n}\n\n.flex-spacer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex: 1;\n}\n\n.success {\n  margin-right: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uLWRldGFpbC9DOlxccHJvamVjdHNcXHBlcnNvbmFsXFxoZWFsdGgtY2F0YWx5c3QtcGVvcGxlLXNlYXJjaFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxwZXJzb24tZGV0YWlsXFxwZXJzb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wZXJzb24tZGV0YWlsL3BlcnNvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BlcnNvbi1kZXRhaWwvQzpcXHByb2plY3RzXFxwZXJzb25hbFxcaGVhbHRoLWNhdGFseXN0LXBlb3BsZS1zZWFyY2hcXGZyb250LWVuZC9zcmNcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQUEsK0JBQUE7RUFDQSx1SUFBQTtBQ0pKOztBRFdBO0VBQ0ksY0FBQTtFQUNBLCtCQXZCYztFQXdCZCxtQkF6Qkc7RUEwQkgsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNSSjs7QURVSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCRXRDSztFRnVDTCx3QkFBQTtBQ1JSOztBRFlBO0VBQ0ksV0FBQTtBQ1RKOztBRFlBO0VBQ0ksZUFBQTtFQUNBLGtCQS9DRztFQWdESCxvQkFBQTtBQ1RKOztBRFlBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBQ1RKOztBRFlBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1RKOztBRFlBO0VBQ0kscUJBQUE7RUFDQSxrQkFoRUc7RUFpRUgsaUJBQUE7QUNUSjs7QURZQTtFQUNJLGtCQUFBO0VBQ0Esa0JBdEVHO0VBdUVILG1CQXZFRztFQXdFSCxnQkF4RUc7RUF5RUgsK0JBeEVjO0FDK0RsQjs7QURZQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBOUVHO0VBK0VILGtCQS9FRztBQ3NFUDs7QURZQTtFQUNJLGdCQUFBO0VBQ0EsNkJBbkZjO0VBb0ZkLGlCQXJGRztFQXNGSCxpQkF0Rkc7RUF1RkgsZ0JBdkZHO0FDOEVQOztBRFdJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FDVFI7O0FEYUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ1ZKOztBRGFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQXZHRztFQXdHSCw2QkF2R2M7RUF3R2QsYUFBQTtFQUNBLFlBQUE7QUNWSjs7QURhQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQ1ZKOztBRGFBO0VBQ0ksbUJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1kZXRhaWwvcGVyc29uLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvbG9ycyc7XHJcblxyXG4kZ2FwczogNDBweDtcclxuJGhvbG9ncmFtLWJvcmRlcjogMnB4IHNvbGlkICRob2xvZ3JhbS1ibHVlO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuaGMtdGlsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAkZ2FwcyAqIDQvMztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4NnB4IDNmciAyZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2ltZyBuYW1lIG5hbWUnXHJcbiAgICAgICAgJ2ltZyBiYXNpYy1pbmZvIGJhc2ljLWluZm8nXHJcbiAgICAgICAgJ2ltZyBhZGRyZXNzIGludGVyZXN0cydcclxuICAgICAgICAnaW1nIG5vdGVzIG5vdGVzJ1xyXG4gICAgICAgICdjb250cm9scyBjb250cm9scyBjb250cm9scyc7XHJcbn1cclxuXHJcbi5pbWctZnJhbWUge1xyXG4gICAgZ3JpZC1hcmVhOiBpbWc7XHJcbiAgICBib3JkZXItcmlnaHQ6ICRob2xvZ3JhbS1ib3JkZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAkZ2FwcztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gI3skZ2Fwc30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGdyaWQtYXJlYTogbmFtZTtcclxuICAgIHBhZGRpbmctbGVmdDogJGdhcHM7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBjb2xvcjogbGlnaHRlbigkZGFyay1ob2xvZ3JhbS1ibHVlLCAyMyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5iYXNpYy1pbmZvIHtcclxuICAgIGdyaWQtYXJlYTogYmFzaWMtaW5mbztcclxuICAgIHBhZGRpbmctbGVmdDogJGdhcHM7XHJcbiAgICBwYWRkaW5nLXRvcDogJGdhcHMgLyAyO1xyXG59XHJcblxyXG4uYWRkcmVzcyB7XHJcbiAgICBncmlkLWFyZWE6IGFkZHJlc3M7XHJcbiAgICBwYWRkaW5nLWxlZnQ6ICRnYXBzO1xyXG4gICAgcGFkZGluZy1yaWdodDogJGdhcHM7XHJcbiAgICBtYXJnaW4tdG9wOiAkZ2FwcztcclxuICAgIGJvcmRlci1yaWdodDogJGhvbG9ncmFtLWJvcmRlcjtcclxufVxyXG5cclxuLmludGVyZXN0cyB7XHJcbiAgICBncmlkLWFyZWE6IGludGVyZXN0cztcclxuICAgIG1hcmdpbi10b3A6ICRnYXBzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAkZ2FwcztcclxufVxyXG5cclxuLm5vdGVzIHtcclxuICAgIGdyaWQtYXJlYTogbm90ZXM7XHJcbiAgICBib3JkZXItdG9wOiAkaG9sb2dyYW0tYm9yZGVyO1xyXG4gICAgcGFkZGluZy10b3A6ICRnYXBzO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRnYXBzO1xyXG4gICAgbWFyZ2luLXRvcDogJGdhcHM7XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIH1cclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcuNWVtO1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gICAgZ3JpZC1hcmVhOiBjb250cm9scztcclxuICAgIHBhZGRpbmctdG9wOiAkZ2FwcyAvIDI7XHJcbiAgICBtYXJnaW4tdG9wOiAkZ2FwcztcclxuICAgIGJvcmRlci10b3A6ICRob2xvZ3JhbS1ib3JkZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAzMXB4ICsgJGdhcHM7XHJcbn1cclxuXHJcbi5mbGV4LXNwYWNlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oYy10aWxlIHtcbiAgbWFyZ2luLXRvcDogNTMuMzMzMzMzMzMzM3B4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4NnB4IDNmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1nIG5hbWUgbmFtZVwiIFwiaW1nIGJhc2ljLWluZm8gYmFzaWMtaW5mb1wiIFwiaW1nIGFkZHJlc3MgaW50ZXJlc3RzXCIgXCJpbWcgbm90ZXMgbm90ZXNcIiBcImNvbnRyb2xzIGNvbnRyb2xzIGNvbnRyb2xzXCI7XG59XG5cbi5pbWctZnJhbWUge1xuICBncmlkLWFyZWE6IGltZztcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFhYTljMjtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWctZnJhbWUgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MGUxMztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDIge1xuICBncmlkLWFyZWE6IG5hbWU7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmgzIHtcbiAgY29sb3I6ICMzYjYyZmY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYmFzaWMtaW5mbyB7XG4gIGdyaWQtYXJlYTogYmFzaWMtaW5mbztcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmFkZHJlc3Mge1xuICBncmlkLWFyZWE6IGFkZHJlc3M7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFhYTljMjtcbn1cblxuLmludGVyZXN0cyB7XG4gIGdyaWQtYXJlYTogaW50ZXJlc3RzO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5ub3RlcyB7XG4gIGdyaWQtYXJlYTogbm90ZXM7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMWFhOWMyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubm90ZXMgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNy41ZW07XG59XG5cbi5jb250cm9scyB7XG4gIGdyaWQtYXJlYTogY29udHJvbHM7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzFhYTljMjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3MXB4O1xufVxuXG4uZmxleC1zcGFjZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xufVxuXG4uc3VjY2VzcyB7XG4gIG1hcmdpbi1yaWdodDogMC44ZW07XG59IiwiJGJhY2tncm91bmQ6ICMwOTBlMTM7XHJcblxyXG4kaG9sb2dyYW0tYmx1ZTogIzFhYTljMjtcclxuJGRhcmstaG9sb2dyYW0tYmx1ZTogIzAwMjdjNTtcclxuXHJcbiRob2xvZ3JhbS1ncmVlbjogIzAzYmY3MztcclxuXHJcbiRob2xvZ3JhbS1yZWQ6ICNjYzE4MTg7XHJcblxyXG4kaG9sb2dyYW0td2hpdGU6ICNjY2M7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/person-detail/person-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/person-detail/person-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailComponent", function() { return PersonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _interest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interest.service */ "./src/app/interest.service.ts");
/* harmony import */ var _occupation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../occupation.service */ "./src/app/occupation.service.ts");








var PersonDetailComponent = /** @class */ (function () {
    function PersonDetailComponent(router, route, fb, personService, interestService, occupationService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.personService = personService;
        this.interestService = interestService;
        this.occupationService = occupationService;
        this.loading = false;
        this.edit = false;
        this.editableFields = [
            'firstName',
            'lastName',
            'email',
            'picture',
            'age',
            'notes',
            'interests',
            'occupation',
            'address',
        ];
        this.handlePerson = function (person) {
            _this.person = person;
            if (!_this.editForm) {
                _this.createForm();
            }
            else {
                _this.resetForm();
            }
            _this.loading = false;
        };
        this.handleError = function (err) {
            console.warn(err);
            _this.loading = false;
        };
        this.resetEditModes();
    }
    Object.defineProperty(PersonDetailComponent.prototype, "anyEditModesEnabled", {
        get: function () {
            var _this = this;
            return this.editModes && Object.keys(this.editModes).some(function (key) { return _this.editModes[key]; });
        },
        enumerable: true,
        configurable: true
    });
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (params) {
            _this.loading = true;
            return _this.personService.getPerson(params.id);
        }))
            .subscribe(this.handlePerson, this.handleError);
    };
    PersonDetailComponent.prototype.submit = function () {
        this.resetEditModes();
        this.submitUpdate();
    };
    PersonDetailComponent.prototype.cancelEdits = function () {
        this.resetEditModes();
        this.resetForm();
    };
    PersonDetailComponent.prototype.getInterests = function (query) {
        this.interestResults = this.interestService.getInterestsByName(query, 1, 0);
    };
    PersonDetailComponent.prototype.getOccupations = function (query) {
        this.occupationResults = this.occupationService.getOccupationByName(query, 1, 0);
    };
    PersonDetailComponent.prototype.editField = function (key) {
        this.editModes[key] = true;
        this.editForm.get(key).reset(this.person[key]);
    };
    PersonDetailComponent.prototype.delete = function () {
        var _this = this;
        this.personService.deletePerson(this.person.id)
            .subscribe(function () { return _this.router.navigate(['..']); });
    };
    PersonDetailComponent.prototype.createForm = function () {
        this.editForm = this.fb.group(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: [this.person.id, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required] }, this.editableFields.reduce(function (obj, key) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, (_a = {}, _a[key] = [null], _a)));
        }, {})));
    };
    PersonDetailComponent.prototype.resetForm = function () {
        this.editForm.reset(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: this.person.id }, this.editableFields.reduce(function (obj, key) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, (_a = {}, _a[key] = null, _a)));
        }, {})));
    };
    PersonDetailComponent.prototype.resetEditModes = function () {
        this.editModes = this.editableFields.reduce(function (obj, key) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, (_a = {}, _a[key] = false, _a)));
        }, {});
    };
    PersonDetailComponent.prototype.submitUpdate = function () {
        this.loading = true;
        this.personService.updatePerson(this.editForm.value)
            .subscribe(this.handlePerson, this.handleError);
    };
    PersonDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] },
        { type: _interest_service__WEBPACK_IMPORTED_MODULE_6__["InterestService"] },
        { type: _occupation_service__WEBPACK_IMPORTED_MODULE_7__["OccupationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup.control.enter')
    ], PersonDetailComponent.prototype, "submit", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup.escape')
    ], PersonDetailComponent.prototype, "cancelEdits", null);
    PersonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hc-person-detail',
            template: __webpack_require__(/*! raw-loader!./person-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/person-detail/person-detail.component.html"),
            styles: [__webpack_require__(/*! ./person-detail.component.scss */ "./src/app/person-detail/person-detail.component.scss")]
        })
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());



/***/ }),

/***/ "./src/app/person-list/person-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/person-list/person-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  max-width: 1200px;\n  width: 85%;\n  margin: 0 auto;\n}\n\n.search-bar {\n  margin: 0 auto 30px;\n}\n\nlabel {\n  font-size: 18px;\n}\n\ninput {\n  margin-left: 0.8em;\n}\n\nhc-tile {\n  display: grid;\n  grid-template-areas: \"img name name\" \"img basic-info basic-info\" \"img address interests\";\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: repeat(2, -webkit-max-content) 1fr;\n  grid-template-rows: repeat(2, max-content) 1fr;\n  height: 349px;\n}\n\n.img-frame {\n  grid-area: img;\n  padding-right: 40px;\n  margin-right: 40px;\n  border-right: 2px solid #1aa9c2;\n  max-width: 243px;\n  display: flex;\n  align-items: center;\n}\n\nimg {\n  width: 100%;\n  max-height: 100%;\n}\n\nh2 {\n  grid-area: name;\n}\n\nh3 {\n  color: #3b62ff;\n  margin-bottom: 8px;\n  font-size: 16px;\n}\n\n.basic-info {\n  grid-area: basic-info;\n  padding: 20px 0 40px;\n  padding-top: 20px;\n  margin-top: 10px;\n  border-top: 2px solid #1aa9c2;\n  font-size: 0.7em;\n}\n\n.address {\n  grid-area: address;\n  border-right: 2px solid #1aa9c2;\n  margin-right: 40px;\n}\n\n.interests {\n  grid-area: interests;\n}\n\n.pagination-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n\nbutton {\n  font-size: inherit;\n  padding: 0.4em 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uLWxpc3QvQzpcXHByb2plY3RzXFxwZXJzb25hbFxcaGVhbHRoLWNhdGFseXN0LXBlb3BsZS1zZWFyY2hcXGZyb250LWVuZC9zcmNcXGFwcFxccGVyc29uLWxpc3RcXHBlcnNvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wZXJzb24tbGlzdC9wZXJzb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0Esd0ZBQUE7RUFHQSxrQ0FBQTtFQUNBLHNEQUFBO0VBQUEsOENBQUE7RUFDQSxhQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLG9CQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1saXN0L3BlcnNvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29sb3JzJztcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAuOGVtO1xyXG59XHJcblxyXG5oYy10aWxlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaW1nIG5hbWUgbmFtZSdcclxuICAgICAgICAnaW1nIGJhc2ljLWluZm8gYmFzaWMtaW5mbydcclxuICAgICAgICAnaW1nIGFkZHJlc3MgaW50ZXJlc3RzJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtYXgtY29udGVudCkgMWZyO1xyXG4gICAgaGVpZ2h0OiAzNDlweDtcclxufVxyXG5cclxuLmltZy1mcmFtZSB7XHJcbiAgICBncmlkLWFyZWE6IGltZztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkaG9sb2dyYW0tYmx1ZTtcclxuICAgIG1heC13aWR0aDogMjQzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBjb2xvcjogbGlnaHRlbigkZGFyay1ob2xvZ3JhbS1ibHVlLCAyMyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5iYXNpYy1pbmZvIHtcclxuICAgIGdyaWQtYXJlYTogYmFzaWMtaW5mbztcclxuICAgIHBhZGRpbmc6IDIwcHggMCA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRob2xvZ3JhbS1ibHVlO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uYWRkcmVzcyB7XHJcbiAgICBncmlkLWFyZWE6IGFkZHJlc3M7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkaG9sb2dyYW0tYmx1ZTtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuLmludGVyZXN0cyB7XHJcbiAgICBncmlkLWFyZWE6IGludGVyZXN0cztcclxufVxyXG5cclxuLnBhZ2luYXRpb24tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogLjRlbSAuOWVtO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjhlbTtcbn1cblxuaGMtdGlsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1nIG5hbWUgbmFtZVwiIFwiaW1nIGJhc2ljLWluZm8gYmFzaWMtaW5mb1wiIFwiaW1nIGFkZHJlc3MgaW50ZXJlc3RzXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1heC1jb250ZW50KSAxZnI7XG4gIGhlaWdodDogMzQ5cHg7XG59XG5cbi5pbWctZnJhbWUge1xuICBncmlkLWFyZWE6IGltZztcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMWFhOWMyO1xuICBtYXgtd2lkdGg6IDI0M3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuaDIge1xuICBncmlkLWFyZWE6IG5hbWU7XG59XG5cbmgzIHtcbiAgY29sb3I6ICMzYjYyZmY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYmFzaWMtaW5mbyB7XG4gIGdyaWQtYXJlYTogYmFzaWMtaW5mbztcbiAgcGFkZGluZzogMjBweCAwIDQwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzFhYTljMjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLmFkZHJlc3Mge1xuICBncmlkLWFyZWE6IGFkZHJlc3M7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMxYWE5YzI7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmludGVyZXN0cyB7XG4gIGdyaWQtYXJlYTogaW50ZXJlc3RzO1xufVxuXG4ucGFnaW5hdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBwYWRkaW5nOiAwLjRlbSAwLjllbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/person-list/person-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-list/person-list.component.ts ***!
  \******************************************************/
/*! exports provided: PersonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonListComponent", function() { return PersonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PersonListComponent = /** @class */ (function () {
    function PersonListComponent(personService, fb) {
        this.personService = personService;
        this.fb = fb;
        this.peopleResults = {};
        this.loading = false;
    }
    PersonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchFormControl = this.fb.control('');
        this.loading = true;
        this.personService.getPeople()
            .subscribe(function (results) {
            _this.peopleResults = results;
            _this.loading = false;
        }, function (err) {
            console.warn(err);
            _this.loading = false;
        });
        this.searchFormControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (query) {
            if (_this.searchSubscription) {
                _this.searchSubscription.unsubscribe();
            }
            _this.loading = true;
            return _this.personService.getPeople(query)
                .subscribe(function (people) {
                _this.loading = false;
                _this.peopleResults = people;
                _this.searchSubscription = null;
            });
        }))
            .subscribe(function (subscription) {
            _this.searchSubscription = subscription;
        });
    };
    PersonListComponent.prototype.ngOnDestroy = function () {
        if (this.searchSubscription)
            this.searchSubscription.unsubscribe();
    };
    PersonListComponent.prototype.changePage = function (direction) {
        var _this = this;
        var directionKey = direction + "Page";
        if (!this.peopleResults || !this.peopleResults[directionKey])
            return;
        this.loading = true;
        this.personService.getPeople(this.searchFormControl.value, this.peopleResults[directionKey], this.peopleResults.itemsPerPage)
            .subscribe(function (people) {
            _this.peopleResults = people;
            _this.loading = false;
        }, function (err) {
            console.warn(err);
            _this.loading = false;
        });
    };
    PersonListComponent.ctorParameters = function () { return [
        { type: _person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    PersonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hc-person-list',
            template: __webpack_require__(/*! raw-loader!./person-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/person-list/person-list.component.html"),
            styles: [__webpack_require__(/*! ./person-list.component.scss */ "./src/app/person-list/person-list.component.scss")]
        })
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ }),

/***/ "./src/app/person.service.ts":
/*!***********************************!*\
  !*** ./src/app/person.service.ts ***!
  \***********************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.getPeople = function (query, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 5; }
        var params = new URLSearchParams();
        if (page && typeof page == 'number') {
            params.append('page', String(page));
        }
        if (count && typeof count == 'number') {
            params.append('count', String(count));
        }
        if (query) {
            params.append('query', query);
        }
        return this.http.get("/api/people?" + params);
    };
    PersonService.prototype.getPerson = function (id) {
        return this.http.get("/api/people/" + id);
    };
    PersonService.prototype.createPerson = function (person) {
        return this.http.post("/api/people", person);
    };
    PersonService.prototype.updatePerson = function (update) {
        return this.http.patch("/api/people/" + update.id, update);
    };
    PersonService.prototype.deletePerson = function (id) {
        return this.http.delete("/api/people/" + id);
    };
    PersonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/text-fizzle.directive.ts":
/*!******************************************!*\
  !*** ./src/app/text-fizzle.directive.ts ***!
  \******************************************/
/*! exports provided: TextFizzleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFizzleDirective", function() { return TextFizzleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FIZZLE_TEXT_CLASS = 'fizzle-text';
var TextFizzleDirective = /** @class */ (function () {
    function TextFizzleDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    TextFizzleDirective.prototype.fizzleText = function () {
        var _this = this;
        this.renderer.addClass(this.element.nativeElement, FIZZLE_TEXT_CLASS);
        setTimeout(function () { return _this.renderer.removeClass(_this.element.nativeElement, FIZZLE_TEXT_CLASS); }, 2000);
    };
    TextFizzleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
    ], TextFizzleDirective.prototype, "fizzleText", null);
    TextFizzleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[hcTextFizzle]'
        })
    ], TextFizzleDirective);
    return TextFizzleDirective;
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

module.exports = __webpack_require__(/*! C:\projects\personal\health-catalyst-people-search\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map