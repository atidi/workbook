webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_workbook_service__ = __webpack_require__("./src/app/service/workbook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_workplace_service__ = __webpack_require__("./src/app/service/workplace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__workbook_workbook_component__ = __webpack_require__("./src/app/workbook/workbook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__workbook_create_workbook_create_component__ = __webpack_require__("./src/app/workbook-create/workbook-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workbook_edit_workbook_edit_component__ = __webpack_require__("./src/app/workbook-edit/workbook-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workbook_view_workbook_view_component__ = __webpack_require__("./src/app/workbook-view/workbook-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: 'workbook',
        component: __WEBPACK_IMPORTED_MODULE_7__workbook_workbook_component__["a" /* WorkbookComponent */],
        data: { title: 'Workbook List' }
    },
    {
        path: 'workbook-create',
        component: __WEBPACK_IMPORTED_MODULE_8__workbook_create_workbook_create_component__["a" /* WorkbookCreateComponent */],
        data: { title: 'Workbook create' }
    },
    {
        path: 'workbook-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__workbook_edit_workbook_edit_component__["a" /* WorkbookEditComponent */],
        data: { title: 'Workbook edit' }
    },
    {
        path: 'workbook-view/:id',
        component: __WEBPACK_IMPORTED_MODULE_11__workbook_view_workbook_view_component__["a" /* WorkbookViewComponent */],
        data: { title: 'Workbook view' }
    },
    { path: '',
        redirectTo: '/workbook',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__workbook_workbook_component__["a" /* WorkbookComponent */],
                __WEBPACK_IMPORTED_MODULE_8__workbook_create_workbook_create_component__["a" /* WorkbookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__workbook_edit_workbook_edit_component__["a" /* WorkbookEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__workbook_view_workbook_view_component__["a" /* WorkbookViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                    useHash: true
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_workbook_service__["a" /* WorkbookService */], __WEBPACK_IMPORTED_MODULE_5__service_workplace_service__["a" /* WorkplaceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/workbook.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workbook; });
var Workbook = /** @class */ (function () {
    function Workbook() {
        this.workplaces = [];
    }
    return Workbook;
}());



/***/ }),

/***/ "./src/app/service/workbook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkbookService = /** @class */ (function () {
    function WorkbookService(http) {
        this.http = http;
        this.ROOT = '//localhost:8085/api/';
        this.API = this.ROOT + 'workbook/';
    }
    WorkbookService.prototype.getAll = function () {
        return this.http.get(this.ROOT + 'workbooks/');
    };
    WorkbookService.prototype.get = function (id) {
        return this.http.get(this.API + id);
    };
    WorkbookService.prototype.save = function (workbook) {
        return this.http.post(this.API, workbook);
    };
    WorkbookService.prototype.update = function (workbook) {
        return this.http.put(this.API, workbook);
    };
    WorkbookService.prototype.delete = function (id) {
        return this.http.delete(this.API + id);
    };
    WorkbookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WorkbookService);
    return WorkbookService;
}());



/***/ }),

/***/ "./src/app/service/workplace.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkplaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkplaceService = /** @class */ (function () {
    function WorkplaceService(http) {
        this.http = http;
        this.API = '//localhost:8085/api/workplace/';
    }
    WorkplaceService.prototype.delete = function (id) {
        return this.http.delete(this.API + id);
    };
    WorkplaceService.prototype.deleteList = function (list) {
        return this.http.post(this.API + "delete/", list);
    };
    WorkplaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WorkplaceService);
    return WorkplaceService;
}());



/***/ }),

/***/ "./src/app/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils(router) {
        this.router = router;
        this.rout = router;
    }
    Utils.prototype.backToList = function () {
        this.rout.navigate(["/workbook"]);
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/workbook-create/workbook-create.component.css":
/***/ (function(module, exports) {

module.exports = ".help-bpx{\r\n  color: red;\r\n}\r\n.form-group.required .control-label:after {\r\n  content:\"*\";\r\n  color:red;\r\n}\r\n.required-label:after{\r\n  content:\"*\";\r\n  color:red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/workbook-create/workbook-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Workbook</h1>\n\n\n  <form (ngSubmit)=\"saveWorkbook()\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group required\">\n          <label for=\"firstName\" class=\"control-label\">First Name</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"workbook.firstName\" name=\"firstName\" id=\"firstName\"\n                 required>\n          <span class=\"help-bpx\" *ngIf=\"errorMessages.get('firstName')\">{{errorMessages.get('firstName')}}</span>\n        </div>\n        <div class=\"form-group required\">\n          <label for=\"lastName\" class=\"control-label\">Last Name</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"workbook.lastName\" name=\"lastName\" id=\"lastName\"\n                 required>\n          <span class=\"help-bpx\" *ngIf=\"errorMessages.get('lastName')\">{{errorMessages.get('lastName')}}</span>\n        </div>\n        <div class=\"form-group \">\n          <label for=\"dateOfBirth\" class=\"control-label\">Date of Birth</label>\n          <input type=\"date\" class=\"form-control \" [(ngModel)]=\"workbook.dateOfBirth\" name=\"dateOfBirth\"\n                 id=\"dateOfBirth\">\n        </div>\n        <div class=\"form-group \">\n          <label for=\"age\" class=\"control-label\">Age</label>\n          <input type=\"number\" class=\"form-control \" min=\"1\" [(ngModel)]=\"workbook.age\" name=\"age\" id=\"age\">\n        </div>\n        <div class=\"form-group \">\n          <label for=\"passportNumber\" class=\"control-label\">Passport Number</label>\n          <input type=\"text\" class=\"form-control \" min=\"1\" [(ngModel)]=\"workbook.passportNumber\" name=\"passportNumber\"\n                 id=\"passportNumber\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" [formGroup]=\"invoiceForm\">\n      <h2>Add Workplace</h2>\n      <table class=\"table \" formArrayName=\"itemRows\">\n        <thead>\n        <tr>\n          <th><span class=\"required-label\">Company</span></th>\n          <th><span class=\"required-label\">Country</span></th>\n          <th><span class=\"required-label\">Start Date</span></th>\n          <th>End Date</th>\n          <th>Current</th>\n          <th></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let workplace of invoiceForm.controls.itemRows.controls; let i = index \" [formGroupName]=\"i\">\n\n          <td>\n            <div class=\"form-group required\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"company\" name=\"company\" required>\n              <span class=\"help-bpx\" *ngIf=\"errorMessages.get('workplaces['+i+'].company')\">{{errorMessages.get('workplaces['+i+'].company')}}</span>\n            </div>\n          </td>\n          <td>\n            <div class=\"form-group required\">\n              <input type=\"text\" class=\"form-control\" name=\"country\" formControlName=\"country\" required>\n              <span class=\"help-bpx\" *ngIf=\"errorMessages.get('workplaces['+i+'].country')\">{{errorMessages.get('workplaces['+i+'].country')}}</span>\n            </div>\n          </td>\n          <td>\n            <div class=\"form-group required\">\n              <input type=\"date\" class=\"form-control\" name=\"startDate\" formControlName=\"startDate\" required>\n              <span class=\"help-bpx\" *ngIf=\"errorMessages.get('workplaces['+i+'].startDate')\">{{errorMessages.get('workplaces['+i+'].startDate')}}</span>\n            </div>\n          </td>\n          <td><input type=\"date\" class=\"form-control\" name=\"endDate\" formControlName=\"endDate\"></td>\n          <td><input type=\"radio\" class=\"form-control\" name=\"current\" formControlName=\"current\" (click)=\"setVal(i)\">\n          </td>\n          <td><a (click)=\"deleteRow(i)\"><span class=\"glyphicon glyphicon-remove\"></span></a></td>\n        </tr>\n        </tbody>\n        <a (click)=\"addWorkplace()\" class=\"btn btn-default\">\n          Add\n        </a>\n      </table>\n    </div>\n\n    <div class=\"btn-group pull-right\" role=\"group\">\n      <button type=\"submit\" role=\"group\" class=\"btn btn-default\">SaveAndClose</button>\n      <!--[disabled]=\"!projectForm.form.valid\"-->\n      <a (click)=\"util.backToList()\" role=\"group\" class=\"btn btn-default\">\n        Cancel\n      </a>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/workbook-create/workbook-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbookCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_workbook_service__ = __webpack_require__("./src/app/service/workbook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_workbook__ = __webpack_require__("./src/app/model/workbook.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkbookCreateComponent = /** @class */ (function () {
    function WorkbookCreateComponent(workbookService, router, formBuilder) {
        this.workbookService = workbookService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.util = new __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */](this.router);
        this.errorMessages = new Map();
        this.invoiceForm = this.formBuilder.group({
            itemRows: this.formBuilder.array([this.initItemRows()])
        });
        this.workbook = new __WEBPACK_IMPORTED_MODULE_3__model_workbook__["a" /* Workbook */]();
    }
    WorkbookCreateComponent.prototype.ngOnInit = function () {
    };
    WorkbookCreateComponent.prototype.initItemRows = function () {
        return this.formBuilder.group({
            company: [''],
            country: [''],
            startDate: [''],
            endDate: [''],
            current: ['']
        });
    };
    WorkbookCreateComponent.prototype.addWorkplace = function () {
        var control = this.invoiceForm.controls['itemRows'];
        control.push(this.initItemRows());
    };
    WorkbookCreateComponent.prototype.saveWorkbook = function () {
        var _this = this;
        var control = this.invoiceForm.controls['itemRows'];
        this.workbook.workplaces = control.getRawValue();
        if (this.current != undefined) {
            for (var i = 0; i < this.workbook.workplaces.length; i++) {
                if (this.equals(this.workbook.workplaces[i], this.current)) {
                    this.workbook.workplaces[i].current = true;
                }
                else {
                    this.workbook.workplaces[i].current = false;
                }
            }
        }
        console.log(this.workbook);
        this.workbookService.save(this.workbook).subscribe(function (res) {
            _this.router.navigate(['/workbook']);
        }, function (err) {
            console.log(err.error);
            var er = err.error.fieldError;
            if (er) {
                _this.errorMessages = _this.convertToMap(er);
            }
            console.log(_this.errorMessages);
        });
    };
    WorkbookCreateComponent.prototype.equals = function (workplace, workplace1) {
        return workplace.company == workplace1.company && workplace.country == workplace1.country
            && workplace.startDate == workplace1.startDate && workplace.endDate == workplace1.endDate;
    };
    WorkbookCreateComponent.prototype.deleteRow = function (index) {
        var control = this.invoiceForm.controls['itemRows'];
        control.removeAt(index);
    };
    WorkbookCreateComponent.prototype.setVal = function (index) {
        var control = this.invoiceForm.controls['itemRows'];
        this.current = control.at(index).value;
    };
    WorkbookCreateComponent.prototype.convertToMap = function (arr) {
        var map = new Map();
        arr.forEach(function (value) {
            var st = value.split(":");
            map.set(st[0], st[1]);
        });
        return map;
    };
    WorkbookCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workbook-create',
            template: __webpack_require__("./src/app/workbook-create/workbook-create.component.html"),
            styles: [__webpack_require__("./src/app/workbook-create/workbook-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_workbook_service__["a" /* WorkbookService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], WorkbookCreateComponent);
    return WorkbookCreateComponent;
}());



/***/ }),

/***/ "./src/app/workbook-edit/workbook-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".help-bpx{\r\n  color: red;\r\n}\r\n.form-group.required .control-label:after {\r\n  content:\"*\";\r\n  color:red;\r\n}\r\n.required-label:after{\r\n  content:\"*\";\r\n  color:red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/workbook-edit/workbook-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Workbook</h1>\n\n\n  <form (ngSubmit)=\"updateWorkbook()\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <input type=\"hidden\" class=\"form-control\" [(ngModel)]=\"workbook.id\" name=\"id\">\n        </div>\n        <div class=\"form-group required\">\n          <label for=\"firstName\" class=\"control-label \">First Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workbook.firstName\" name=\"firstName\" id=\"firstName\"\n                 required>\n          <span class=\"help-bpx\" *ngIf=\"errorMessages.get('firstName')\">{{errorMessages.get('firstName')}}</span>\n        </div>\n        <div class=\"form-group required\">\n          <label for=\"lastName\" class=\"control-label \">Last Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workbook.lastName\" name=\"lastName\" id=\"lastName\"\n                 required>\n          <span class=\"help-bpx\" *ngIf=\"errorMessages.get('lastName')\">{{errorMessages.get('lastName')}}</span>\n        </div>\n        <div class=\"form-group \">\n          <label for=\"dateOfBirth\" class=\"control-label\">Date of Birth</label>\n          <input type=\"date\" class=\"form-control \" [(ngModel)]=\"workbook.dateOfBirth\" name=\"dateOfBirth\"\n                 id=\"dateOfBirth\">\n        </div>\n        <div class=\"form-group \">\n          <label for=\"age\" class=\"control-label\">Age</label>\n          <input type=\"number\" class=\"form-control \" min=\"1\" [(ngModel)]=\"workbook.age\" name=\"age\" id=\"age\">\n        </div>\n        <div class=\"form-group \">\n          <label for=\"passportNumber\" class=\"control-label\">Passport Number</label>\n          <input type=\"text\" class=\"form-control \" min=\"1\" [(ngModel)]=\"workbook.passportNumber\" name=\"passportNumber\"\n                 id=\"passportNumber\">\n        </div>\n      </div>\n    </div>\n    <h2>Edit Workplaces</h2>\n    <div class=\"row\" [formGroup]=\"invoiceForm\">\n      <table class=\"table\" formArrayName=\"itemRows\">\n\n        <thead>\n        <tr>\n          <th></th>\n          <th><span class=\"required-label\">Company</span></th>\n          <th><span class=\"required-label\">Country</span></th>\n          <th><span class=\"required-label\">Start Date</span></th>\n          <th>End Date</th>\n          <th>Current</th>\n          <th></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let workplace of invoiceForm.controls.itemRows.controls; let i = index \" [formGroupName]=\"i\">\n\n          <td><input type=\"hidden\" class=\"form-control\" formControlName=\"id\" name=\"id\"></td>\n          <td>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"company\" name=\"company\" required>\n              <span class=\"help-bpx\" *ngIf=\"errorMessages.get('workplaces['+i+'].company')\">{{errorMessages.get('workplaces['+i+'].company')}}</span>\n            </div>\n          </td>\n          <td>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" name=\"country\" formControlName=\"country\" required>\n              <span class=\"help-bpx\" *ngIf=\"errorMessages.get('workplaces['+i+'].country')\">{{errorMessages.get('workplaces['+i+'].country')}}</span>\n            </div>\n          </td>\n          <td>\n            <div class=\"form-group required\">\n              <input type=\"date\" class=\"form-control\" name=\"startDate\" formControlName=\"startDate\" required>\n              <span class=\"help-bpx\" *ngIf=\"errorMessages.get('workplaces['+i+'].startDate')\">{{errorMessages.get('workplaces['+i+'].startDate')}}</span>\n            </div>\n          </td>\n          <td><input type=\"date\" class=\"form-control\" name=\"endDate\" formControlName=\"endDate\"></td>\n          <td><input type=\"radio\" class=\"form-control\" name=\"current\" formControlName=\"current\"\n                     [checked]=\"workplace.value.current == true\" (click)=\"setVal(i)\"></td>\n          <td><a (click)=\"deleteRow(i)\"><span class=\"glyphicon glyphicon-remove\"></span></a></td>\n        </tr>\n        </tbody>\n        <a (click)=\"addWorkplace()\" class=\"btn btn-default\">\n          Add\n        </a>\n      </table>\n    </div>\n\n    <div class=\"btn-group pull-right\" role=\"group\">\n      <button type=\"submit\" role=\"group\" class=\"btn btn-default\">SaveAndClose</button>\n      <a (click)=\"util.backToList()\" role=\"group\" class=\"btn btn-default\">\n        Cancel\n      </a>\n    </div>\n\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/workbook-edit/workbook-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbookEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_workbook_service__ = __webpack_require__("./src/app/service/workbook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_workplace_service__ = __webpack_require__("./src/app/service/workplace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_workbook__ = __webpack_require__("./src/app/model/workbook.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WorkbookEditComponent = /** @class */ (function () {
    function WorkbookEditComponent(route, router, workbookService, workplaceService, formBuilder) {
        this.route = route;
        this.router = router;
        this.workbookService = workbookService;
        this.workplaceService = workplaceService;
        this.formBuilder = formBuilder;
        this.workbook = new __WEBPACK_IMPORTED_MODULE_6__model_workbook__["a" /* Workbook */]();
        this.util = new __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */](this.router);
        this.errorMessages = new Map();
        this.deletedWorkplaces = [];
        this.invoiceForm = this.formBuilder.group({
            itemRows: this.formBuilder.array([this.initItemRows()])
        });
    }
    WorkbookEditComponent.prototype.ngOnInit = function () {
        this.getWorkbook(this.route.snapshot.params['id']);
    };
    WorkbookEditComponent.prototype.initItemRows = function () {
        return this.formBuilder.group({
            id: [''],
            company: [''],
            country: [''],
            startDate: [''],
            endDate: [''],
            current: ['']
        });
    };
    WorkbookEditComponent.prototype.getWorkbook = function (id) {
        var _this = this;
        this.workbookService.get(id).subscribe(function (res) {
            console.log(res);
            _this.workbook = res;
            _this.pipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]('en-US');
            _this.workbook.dateOfBirth = _this.pipe.transform(_this.workbook.dateOfBirth, 'yyyy-MM-dd');
            // this.workbook.dateOfBirth = new Date(this.workbook.dateOfBirth).toISOString().slice(0, -1);
            var control = _this.invoiceForm.controls['itemRows'];
            control.removeAt(0);
            for (var i = 0; i < _this.workbook.workplaces.length; i++) {
                _this.workbook.workplaces[i].startDate = _this.pipe.transform(_this.workbook.workplaces[i].startDate, 'yyyy-MM-dd');
                _this.workbook.workplaces[i].endDate = _this.pipe.transform(_this.workbook.workplaces[i].endDate, 'yyyy-MM-dd');
                control.push(_this.initItemRows());
            }
            control.setValue(_this.workbook.workplaces);
            console.log(control);
        });
    };
    WorkbookEditComponent.prototype.updateWorkbook = function () {
        var _this = this;
        var control = this.invoiceForm.controls['itemRows'];
        this.workbook.workplaces = control.getRawValue();
        if (this.currentId != undefined) {
            for (var i = 0; i < this.workbook.workplaces.length; i++) {
                if (this.workbook.workplaces[i].id == this.currentId) {
                    this.workbook.workplaces[i].current = true;
                }
                else {
                    this.workbook.workplaces[i].current = false;
                }
            }
        }
        this.workbookService.update(this.workbook).subscribe(function (res) {
            _this.workplaceService.deleteList(_this.deletedWorkplaces).subscribe(function (res) {
            }, function (error2) {
            });
            _this.router.navigate(['/workbook']);
        }, function (err) {
            console.log(err.error);
            var er = err.error.fieldError;
            if (er) {
                _this.errorMessages = _this.convertToMap(er);
            }
            console.log(_this.errorMessages);
        });
    };
    WorkbookEditComponent.prototype.deleteRow = function (index) {
        var control = this.invoiceForm.controls['itemRows'];
        if (control.at(index).value.id) {
            this.deletedWorkplaces.push(control.at(index).value);
        }
        control.removeAt(index);
    };
    WorkbookEditComponent.prototype.setVal = function (index) {
        var control = this.invoiceForm.controls['itemRows'];
        this.currentId = control.at(index).value.id;
    };
    WorkbookEditComponent.prototype.addWorkplace = function () {
        var control = this.invoiceForm.controls['itemRows'];
        control.push(this.initItemRows());
    };
    WorkbookEditComponent.prototype.convertToMap = function (arr) {
        var map = new Map();
        arr.forEach(function (value) {
            var st = value.split(":");
            map.set(st[0], st[1]);
        });
        return map;
    };
    WorkbookEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workbook-edit',
            template: __webpack_require__("./src/app/workbook-edit/workbook-edit.component.html"),
            styles: [__webpack_require__("./src/app/workbook-edit/workbook-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_workbook_service__["a" /* WorkbookService */],
            __WEBPACK_IMPORTED_MODULE_4__service_workplace_service__["a" /* WorkplaceService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], WorkbookEditComponent);
    return WorkbookEditComponent;
}());



/***/ }),

/***/ "./src/app/workbook-view/workbook-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/workbook-view/workbook-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Workplace View</h1>\n  <table class=\"table table-bordered\">\n    <thead>\n    <tr>\n      <th><p class=\"text-center\">Company</p></th>\n      <th><p class=\"text-center\">Country</p></th>\n      <th><p class=\"text-center\">Start Date</p></th>\n      <th><p class=\"text-center\">End Date</p></th>\n      <th><p class=\"text-center\">Current</p></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let workplace of workbook.workplaces\">\n\n      <td>{{ workplace.company }}</td>\n      <td>{{ workplace.country }}</td>\n      <td>{{ workplace.startDate | date: 'dd/MM/yyyy'}}</td>\n      <td>{{ workplace.endDate | date: 'dd/MM/yyyy' }}</td>\n      <td>{{ workplace.current }}</td>\n    </tr>\n    </tbody>\n  </table>\n  <a (click)=\"util.backToList()\" role=\"group\" class=\"btn btn-default\">\n    Cancel\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/workbook-view/workbook-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbookViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_workbook_service__ = __webpack_require__("./src/app/service/workbook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_workbook__ = __webpack_require__("./src/app/model/workbook.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkbookViewComponent = /** @class */ (function () {
    function WorkbookViewComponent(route, router, workbookService) {
        this.route = route;
        this.router = router;
        this.workbookService = workbookService;
        this.util = new __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */](this.router);
        this.workbook = new __WEBPACK_IMPORTED_MODULE_4__model_workbook__["a" /* Workbook */]();
    }
    WorkbookViewComponent.prototype.ngOnInit = function () {
        this.getWorkbook(this.route.snapshot.params['id']);
    };
    WorkbookViewComponent.prototype.getWorkbook = function (id) {
        var _this = this;
        this.workbookService.get(id).subscribe(function (res) {
            console.log(res);
            _this.workbook = res;
        });
    };
    WorkbookViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workbook-view',
            template: __webpack_require__("./src/app/workbook-view/workbook-view.component.html"),
            styles: [__webpack_require__("./src/app/workbook-view/workbook-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_workbook_service__["a" /* WorkbookService */]])
    ], WorkbookViewComponent);
    return WorkbookViewComponent;
}());



/***/ }),

/***/ "./src/app/workbook/workbook.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/workbook/workbook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Workbook List</h1>\n  <table class=\"table table-bordered\">\n    <thead>\n    <tr>\n\n      <th><p class=\"text-center\">First Name</p></th>\n      <th><p class=\"text-center\">Last Name</p></th>\n      <th><p class=\"text-center\">Date of Birth</p></th>\n      <th><p class=\"text-center\">Age</p></th>\n      <th><p class=\"text-center\">Passport Number</p></th>\n      <th></th>\n      <th></th>\n      <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let workbook of workbooks\">\n\n      <td>{{ workbook.firstName }}</td>\n      <td>{{ workbook.lastName }}</td>\n      <td>{{ workbook.dateOfBirth | date: 'dd/MM/yyyy'}}</td>\n      <td>{{ workbook.age }}</td>\n      <td>{{ workbook.passportNumber }}</td>\n      <td><a [routerLink]=\"['/workbook-view', workbook.id]\"><span class=\"glyphicon glyphicon-check\"></span></a></td>\n      <td><a [routerLink]=\"['/workbook-edit', workbook.id]\"><span class=\"glyphicon glyphicon-edit\"></span></a></td>\n      <td><a (click)=\"remove(workbook)\"><span class=\"glyphicon glyphicon-remove\"></span></a></td>\n    </tr>\n    </tbody>\n  </table>\n  <a [routerLink]=\"['/workbook-create']\" class=\"btn btn-default\">\n    Add\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/workbook/workbook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_workbook_service__ = __webpack_require__("./src/app/service/workbook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkbookComponent = /** @class */ (function () {
    function WorkbookComponent(workbookService) {
        this.workbookService = workbookService;
    }
    WorkbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workbookService.getAll().subscribe(function (data) {
            _this.workbooks = data;
        });
    };
    WorkbookComponent.prototype.remove = function (workbook) {
        var _this = this;
        this.workbookService.delete(workbook.id).subscribe(function (res) {
            var index = _this.workbooks.indexOf(workbook);
            if (index !== -1) {
                _this.workbooks.splice(index, 1);
            }
        }, function (error2) {
            console.log(error2);
        });
    };
    WorkbookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("./src/app/workbook/workbook.component.html"),
            styles: [__webpack_require__("./src/app/workbook/workbook.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_workbook_service__["a" /* WorkbookService */]])
    ], WorkbookComponent);
    return WorkbookComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map