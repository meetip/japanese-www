webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(196);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var catch_1 = __webpack_require__(292);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var catchError_1 = __webpack_require__(293);
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    return catchError_1.catchError(selector)(this);
}
exports._catch = _catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(52);
var subscribeToResult_1 = __webpack_require__(51);
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @name catchError
 */
function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator(selector);
        var caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
exports.catchError = catchError;
var CatchOperator = (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CatchSubscriber = (function (_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        _super.call(this, destination);
        this.selector = selector;
        this.caught = caught;
    }
    // NOTE: overriding `error` instead of `_error` because we don't want
    // to have this flag this subscriber as `isStopped`. We can mimic the
    // behavior of the RetrySubscriber (from the `retry` operator), where
    // we unsubscribe from our source chain, reset our Subscriber flags,
    // then subscribe to the selector result.
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return CatchSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, storage, http, navCtrl, loadingCtrl) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.qp = [];
        this.loginerr = false;
        this.typeS = "begin";
        this.todo = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]
        });
        // this.storage.get('name').then((name) => {
        //   console.log('Your name is', name);
        // });
        console.log("nichapat_yanwa@cmu.ac.th");
        console.log("qribbonz");
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('type').then(function (typeresult) {
            _this.typeS = typeresult;
            if (typeresult == 'student') {
                console.log('Your name is', typeresult);
                _this.navCtrl.setRoot('MenuPage');
            }
        });
        this.storage.get('id').then(function (id) {
            if (id != null) {
                _this.id = id;
            }
        });
    };
    LoginPage.prototype.logForm = function () {
        console.log(this.todo.value);
    };
    LoginPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n       <img src=\"assets/imgs/loading/lg.palette-rotating-ring-loader.gif\">     \n     "
        });
        // loading.onDidDismiss(() => {
        //   console.log('Dismissed loading');
        // });
        this.loading.present();
        this.postCall2();
    };
    LoginPage.prototype.postCall2 = function () {
        this.loginerr = false;
        this.data2 = this.postCall();
        console.log(this.data2);
        // await funct2();
        // await funct3();
    };
    LoginPage.prototype.postCall = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            params: {
                UserName: this.todo.value.title,
                Password: this.todo.value.password
            }
        };
        //same but too long
        return new Promise(function (resolve, reject) {
            _this.http.post('https://sis.cmu.ac.th/cmusis/API/User/checkUser', postParams, options)
                .toPromise()
                .then(function (response) {
                console.log('API Response : ', response.json());
                _this.data2 = response.json();
                _this.login();
                resolve(response.json());
                console.log(_this.data2);
                // this.data = JSON.stringify(response);
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                _this.postCall();
                reject(error.json());
            });
        });
        // return this.http.post('https://sis.cmu.ac.th/cmusis/API/User/checkUser',postParams,options)
        // .map(res=> res.json())
        //  .subscribe(data => {
        //  // console.log(data);
        //    if(data.data != null){
        //     this.qp.push({
        //         qp_name : data.data.FirstName,
        //         qp_last : data.data.lastName
        //     });
        // }
        //  // console.log(this.qp);
        //  },err => {
        //      console.log("error");
        //  });
        // if(this.qp == []){
        //     console.log(this.qp.length);        
        // }
    };
    ;
    LoginPage.prototype.login = function () {
        var _this = this;
        var cheackid = 0;
        if (this.data2.data == null) {
            console.log("no");
            this.loginerr = true;
            this.loading.dismiss(function () {
                console.log('Dismissed loading');
            });
        }
        else {
            //stage
            this.storage.get('stageTable').then(function (stageTable) {
                if (_this.typeS == "quest") {
                    var dataS = stageTable;
                    for (var i = 0; i < stageTable.length; i++) {
                        if (stageTable[i].id == _this.id) {
                            dataS.push({
                                id: _this.data2.data.StudentCode,
                                stage: stageTable[i].stage
                            });
                        }
                    }
                    _this.storage.set('stageTable', dataS);
                    _this.setName();
                }
                else {
                    if (stageTable != null) {
                        console.log('Your name is', stageTable);
                        for (var i = 0; i < stageTable.length; i++) {
                            if (stageTable[i].id == _this.data2.data.StudentCode) {
                                _this.setName();
                                cheackid = 1;
                            }
                        }
                        if (cheackid == 0) {
                            var data1 = stageTable;
                            data1.push({
                                id: _this.data2.data.StudentCode,
                                stage: "1-0"
                            });
                            _this.storage.set('stageTable', data1);
                            _this.setName();
                        }
                    }
                    else {
                        _this.qp.push({
                            id: _this.data2.data.StudentCode,
                            stage: "1-0"
                        });
                        _this.setName();
                        _this.storage.set('stageTable', _this.qp);
                    }
                }
            });
            //score
            cheackid = 0;
            this.storage.get('scoreTable').then(function (scoreTable) {
                if (_this.typeS == "quest") {
                    var dataQ = scoreTable;
                    for (var i = 0; i < scoreTable.length; i++) {
                        if (scoreTable[i].id == _this.id) {
                            dataQ.push({
                                id: _this.data2.data.StudentCode,
                                stage: scoreTable[i].stage,
                                substage: scoreTable[i].substage,
                                score: scoreTable[i].score
                            });
                        }
                    }
                    _this.storage.set('scoreTable', dataQ);
                }
                else {
                    if (scoreTable != null) {
                        console.log('Your name is', scoreTable);
                        for (var i = 0; i < scoreTable.length; i++) {
                            if (scoreTable[i].id == _this.data2.data.StudentCode) {
                                cheackid = 1;
                            }
                        }
                        if (cheackid == 0) {
                            var data1 = scoreTable;
                            data1.push({
                                id: _this.data2.data.StudentCode,
                                stage: 1,
                                substage: 1,
                                score: 0
                            });
                            _this.storage.set('scoreTable', data1);
                        }
                    }
                    else {
                        var scorenew = [];
                        scorenew.push({
                            id: _this.data2.data.StudentCode,
                            stage: 1,
                            substage: 1,
                            score: 0
                        });
                        _this.storage.set('scoreTable', scorenew);
                    }
                }
            });
            //item
            cheackid = 0;
            this.storage.get('itemTable').then(function (itemTable) {
                if (_this.typeS == "quest") {
                    var dataI = itemTable;
                    for (var i = 0; i < itemTable.length; i++) {
                        if (itemTable[i].id == _this.id) {
                            dataI.push({
                                id: _this.data2.data.StudentCode,
                                itemC: itemTable[i].itemC,
                                itemS: itemTable[i].itemS,
                                itemA: itemTable[i].itemA
                            });
                        }
                    }
                    _this.storage.set('itemTable', dataI);
                }
                else {
                    if (itemTable != null) {
                        console.log('Your name is', itemTable);
                        for (var i = 0; i < itemTable.length; i++) {
                            if (itemTable[i].id == _this.data2.data.StudentCode) {
                                cheackid = 1;
                            }
                        }
                        if (cheackid == 0) {
                            var data1 = itemTable;
                            data1.push({
                                id: _this.data2.data.StudentCode,
                                itemC: 2,
                                itemS: 2,
                                itemA: 2
                            });
                            _this.storage.set('itemTable', data1);
                        }
                    }
                    else {
                        var itemnew = [];
                        itemnew.push({
                            id: _this.data2.data.StudentCode,
                            itemC: 2,
                            itemS: 2,
                            itemA: 2
                        });
                        _this.storage.set('itemTable', itemnew);
                    }
                }
            });
            this.loading.dismiss(function () {
                console.log('Dismissed loading');
            });
            this.navCtrl.push('MenuPage');
        }
    };
    LoginPage.prototype.setName = function () {
        // console.log(this.data2.data.StudentCode);
        // localStorage.setItem('eiei', this.data2.data.StudentCode);
        // console.log(localStorage.getItem('eiei')); 
        this.storage.set('id', this.data2.data.StudentCode);
        this.storage.set('fullname', this.data2.data.FullName);
        this.storage.set('firstname', this.data2.data.FirstName);
        this.storage.set('lastname', this.data2.data.lastName);
        this.storage.set('type', "student");
        console.log(name);
    };
    ;
    LoginPage.prototype.setData = function () {
        this.storage.set('state', "1-0");
        this.storage.set('stageTable', this.qp);
        console.log(name);
    };
    LoginPage.prototype.getName = function () {
        this.storage.get('name').then(function (name) {
            console.log('Your name is', name);
        });
    };
    ;
    LoginPage.prototype.removeName = function () {
        this.storage.remove('name').then(function () {
            console.log('name has been removed');
        });
    };
    LoginPage.prototype.clearKeys = function () {
        this.storage.clear().then(function () {
            console.log('Keys have been cleared');
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\login\login.html"*/'<ion-content>\n\n  <ion-grid class="nopadding fixheight violet">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n\n\n        <img class="loginlogo" src="assets/imgs/chiangmai-university-logo-english.png">\n\n        <form novalidate class="formtext" [formGroup]="todo" (ngSubmit)="presentLoadingCustom()">\n\n          <ion-item class="login">\n\n            <ion-label class="textmail">CMU Mail</ion-label>\n\n            <ion-input class="textinput" type="text" formControlName="title"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="error" *ngIf="todo.get(\'title\').hasError(\'required\') && todo.get(\'title\').touched">\n\n            Please input your CMU Mail.\n\n          </ion-item>\n\n          <ion-item class="login betweenmail">\n\n            <ion-label class="textmail">Password</ion-label>\n\n            <ion-input class="textinput" type="password" formControlName="password"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="error" *ngIf="todo.get(\'password\').hasError(\'required\') && todo.get(\'password\').touched">\n\n            Please input your password.\n\n          </ion-item>\n\n          <div *ngIf="loginerr" class="err">* Email or Password is incorrect</div>\n\n          <div class="betweenB"></div>\n\n          <button ion-button class="loginB" [disabled]="todo.invalid">OK</button>\n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map