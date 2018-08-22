webpackJsonp([2],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterPageModule", function() { return ChapterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chapter__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChapterPageModule = /** @class */ (function () {
    function ChapterPageModule() {
    }
    ChapterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chapter__["a" /* ChapterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chapter__["a" /* ChapterPage */]),
            ],
        })
    ], ChapterPageModule);
    return ChapterPageModule;
}());

//# sourceMappingURL=chapter.module.js.map

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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
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
 * Generated class for the ChapterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChapterPage = /** @class */ (function () {
    function ChapterPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.url = "http://159.65.142.130/api/getLesson/";
        this.state = '1';
        this.chapterone = [
            { "color": "pink",
                "chapter": [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10'
                ]
            },
            { "color": "orange",
                "chapter": [
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20'
                ]
            }
        ];
        this.chaptertwo = [
            { "color": "yellow",
                "chapter": [
                    '21',
                    '22',
                    '23',
                    '24',
                    '25',
                    '26',
                    '27',
                    '28',
                    '29',
                    '30',
                    '31',
                    '32',
                    '33',
                    '34',
                    '35',
                    '36',
                    '37',
                    '38',
                    '39'
                ]
            },
            { "color": "green",
                "chapter": [
                    '40',
                    '41',
                    '42',
                    '43',
                    '44',
                    '45',
                    '46',
                    '47',
                    '48',
                    '49',
                    '50',
                    '51',
                    '52',
                    '53',
                    '54'
                ]
            }
        ];
        this.chapterthree = [
            { "color": "darkgreen",
                "chapter": [
                    '55',
                    '56',
                    '57',
                    '58',
                    '59',
                    '60',
                    '61',
                    '62',
                    '63',
                    '64',
                    '65',
                    '66',
                    '67',
                    '68',
                    '69',
                    '70',
                    '71',
                    '72',
                    '73'
                ]
            },
            { "color": "blue",
                "chapter": [
                    '74',
                    '75',
                    '76',
                    '77',
                    '78',
                    '79',
                    '80',
                    '81',
                    '82',
                    '83',
                    '84',
                    '85',
                    '86',
                    '87'
                ]
            }
        ];
        this.chapterfour = [
            { "color": "darkblue",
                "chapter": [
                    '88',
                    '89',
                    '90',
                    '91',
                    '92',
                    '93',
                    '94',
                    '95',
                    '96',
                    '97',
                    '98',
                    '99',
                    '100',
                    '101',
                    '102',
                    '103',
                    '104'
                ]
            },
            { "color": "violet",
                "chapter": [
                    '105',
                    '106',
                    '107',
                    '108',
                    '109',
                    '110',
                    '111',
                    '112',
                    '113',
                    '114',
                    '115',
                    '116',
                    '117',
                    '118',
                    '119'
                ]
            }
        ];
        this.datal = navParams.get('data');
        if (this.datal == 1) {
            this.lesson = this.chapterone;
        }
        else if (this.datal == 2) {
            this.lesson = this.chaptertwo;
        }
        else if (this.datal == 3) {
            this.lesson = this.chapterthree;
        }
        else if (this.datal == 4) {
            this.lesson = this.chapterfour;
        }
    }
    ChapterPage.prototype.openlesson = function () {
        this.navCtrl.pop();
    };
    ChapterPage.prototype.openmenu = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    ChapterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChapterPage');
    };
    ChapterPage.prototype.openchapter = function (lesson, color) {
        this.state = lesson;
        console.log(color);
        // this.getCall();
        //loading
        this.navCtrl.push('ChaptersubPage', {
            data: lesson,
            datacolor: color
        });
    };
    ChapterPage.prototype.openMenu = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    ChapterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chapter',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\chapter\chapter.html"*/'<ion-content>\n\n  <ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>  \n\n  <ion-grid class="gray"> \n\n    <ion-row>\n\n \n\n    <ion-col col-2 >\n\n        <img class="returnlesson" (click)="openlesson()" src="assets/imgs/return.PNG">\n\n    </ion-col>\n\n    <ion-col col-8>\n\n        <div class="stateCh">Lesson</div>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <ion-icon class="menuicon" ios="ios-menu" md="md-menu" (click)="openmenu()" ></ion-icon>\n\n    </ion-col>\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-row *ngFor="let lesson of lesson">\n\n    <ion-col col-4  *ngFor="let lesson1 of lesson.chapter">\n\n      <div class="{{lesson.color}} textlesson" (click)="openchapter(lesson1,lesson.color)">\n\n        {{lesson1}}        \n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\chapter\chapter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChapterPage);
    return ChapterPage;
}());

//# sourceMappingURL=chapter.js.map

/***/ })

});
//# sourceMappingURL=2.js.map