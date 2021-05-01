(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "/iSe":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
  \******************************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    // Assign DT properties here
                    var options = {
                        rowCallback: function (row, data, index) {
                            if (dtOptions.columns) {
                                var columns_1 = dtOptions.columns;
                                // Filter columns with pipe declared
                                var colsWithPipe = columns_1.filter(function (x) { return x.ngPipeInstance; });
                                // Iterate
                                colsWithPipe.forEach(function (el) {
                                    var pipe = el.ngPipeInstance;
                                    // find index of column using `data` attr
                                    var i = columns_1.findIndex(function (e) { return e.data == el.data; });
                                    // get <td> element which holds data using index
                                    var rowFromCol = row.childNodes.item(i);
                                    // Transform data with Pipe
                                    var rowVal = $(rowFromCol).text();
                                    var rowValAfter = pipe.transform(rowVal);
                                    // Apply transformed string to <td>
                                    $(rowFromCol).text(rowValAfter);
                                });
                            }
                            // run user specified row callback if provided.
                            if (_this.dtOptions.rowCallback) {
                                _this.dtOptions.rowCallback(row, data, index);
                            }
                        }
                    };
                    // merge user's config with ours
                    options = Object.assign({}, dtOptions, options);
                    _this.dt = $(_this.el.nativeElement).DataTable(options);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DataTableDirective.propDecorators = {
        dtOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dtTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
DataTableDirective.ɵfac = function DataTableDirective_Factory(t) { return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableDirective, selectors: [["", "datatable", ""]], inputs: { dtOptions: "dtOptions", dtTrigger: "dtTrigger" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[datatable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return DataTableDirective;
}());


//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "757a":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "EBtq":
/*!***************************************************!*\
  !*** ./src/app/layout/tables/tables.component.ts ***!
  \***************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tables.component.html */ "fEsg");
/* harmony import */ var _tables_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component.scss */ "757a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router.animations */ "ZZ88");





let TablesComponent = class TablesComponent {
    constructor() {
        this.data = [
            { name: 'test', email: 'test@gmail.com', website: 'test.com' },
            { name: 'test', email: 'test@gmail.com', website: 'test.com' },
            { name: 'test', email: 'test@gmail.com', website: 'test.com' },
            { name: 'test', email: 'test@gmail.com', website: 'test.com' },
        ];
        this.title = 'angulardatatables';
        this.dtOptions = {};
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            processing: true,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        };
    }
};
TablesComponent.ctorParameters = () => [];
TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tables',
        template: _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
        styles: [_tables_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TablesComponent);



/***/ }),

/***/ "HO/X":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
  \***************************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "/iSe");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */




var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
DataTablesModule.ɵfac = function DataTablesModule_Factory(t) { return new (t || DataTablesModule)(); };
DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTablesModule });
DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, { declarations: function () { return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
            }]
    }], function () { return []; }, null); })();
    return DataTablesModule;
}());


//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "U6FU":
/*!********************************************************!*\
  !*** ./src/app/layout/tables/tables-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables.component */ "EBtq");




const routes = [
    {
        path: '',
        component: _tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"]
    }
];
let TablesRoutingModule = class TablesRoutingModule {
};
TablesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TablesRoutingModule);



/***/ }),

/***/ "fEsg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/tables/tables.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <app-page-header [heading]=\"'Tables'\" [icon]=\"'fa-table'\"></app-page-header>\n    <div class=\"row\"><div class=\"col col-xl-12 col-lg-12\">\n        <div class=\"card \">\n            <div class=\"card-header\">\n               Data tables\n            </div>\n            <div class=\"card-body table-responsive\">\n                <table class=\"table\" datatable [dtOptions]=\"dtOptions\">\n                    <thead>\n                        <tr>\n\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let group of data\">\n                            <td>{{group.name}}</td>\n                            <td>{{group.email}}</td>\n                            <td>{{group.website}}</td>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n\n\n    </div></div>\n    <!-- <div class=\"row\">\n\n        <div class=\"col col-xl-6 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Basic example\n                </div>\n\n\n\n\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Table head options</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"thead-inverse\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <table class=\"table\">\n                        <thead class=\"thead-default\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Bordered table</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@TwBootstrap</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">4</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Small table</div>\n                <table class=\"table table-sm\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"col col-xl-6 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Inverse table</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-inverse\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Striped Rows</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-hover table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Page</th>\n                                <th>Visits</th>\n                                <th>% New Visits</th>\n                                <th>Revenue</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>/index.html</td>\n                                <td>1265</td>\n                                <td>32.3%</td>\n                                <td>$321.33</td>\n                            </tr>\n                            <tr>\n                                <td>/about.html</td>\n                                <td>261</td>\n                                <td>33.3%</td>\n                                <td>$234.12</td>\n                            </tr>\n                            <tr>\n                                <td>/sales.html</td>\n                                <td>665</td>\n                                <td>21.3%</td>\n                                <td>$16.34</td>\n                            </tr>\n                            <tr>\n                                <td>/blog.html</td>\n                                <td>9516</td>\n                                <td>89.3%</td>\n                                <td>$1644.43</td>\n                            </tr>\n                            <tr>\n                                <td>/404.html</td>\n                                <td>23</td>\n                                <td>34.3%</td>\n                                <td>$23.52</td>\n                            </tr>\n                            <tr>\n                                <td>/services.html</td>\n                                <td>421</td>\n                                <td>60.3%</td>\n                                <td>$724.32</td>\n                            </tr>\n                            <tr>\n                                <td>/blog/post.html</td>\n                                <td>1233</td>\n                                <td>93.2%</td>\n                                <td>$126.34</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Hoverable rows</div>\n                <table class=\"card-body table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Contextual classes</div>\n                <table class=\"card-body table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"table-active\">\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr class=\"table-success\">\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr class=\"table-info\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                        <tr class=\"table-warning\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                        <tr class=\"table-danger\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div> -->\n</div>\n");

/***/ }),

/***/ "njyG":
/*!***************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "/iSe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "HO/X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "q9gR":
/*!************************************************!*\
  !*** ./src/app/layout/tables/tables.module.ts ***!
  \************************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared */ "M0ag");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables-routing.module */ "U6FU");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables.component */ "EBtq");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "njyG");







let TablesModule = class TablesModule {
};
TablesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_4__["TablesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"]],
        declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_5__["TablesComponent"]]
    })
], TablesModule);



/***/ })

}]);
//# sourceMappingURL=tables-tables-module-es2015.js.map