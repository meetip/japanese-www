webpackJsonp([11],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaptersubPageModule", function() { return ChaptersubPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chaptersub__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChaptersubPageModule = /** @class */ (function () {
    function ChaptersubPageModule() {
    }
    ChaptersubPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chaptersub__["a" /* ChaptersubPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chaptersub__["a" /* ChaptersubPage */]),
            ],
        })
    ], ChaptersubPageModule);
    return ChaptersubPageModule;
}());

//# sourceMappingURL=chaptersub.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChaptersubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(106);
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
 * Generated class for the ChaptersubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChaptersubPage = /** @class */ (function () {
    function ChaptersubPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["b" /* SERVER */] + "/api/getLesson/";
        this.state = '1';
        this.readych = false;
        this.lesson = navParams.get('data');
        this.color = navParams.get('datacolor');
        if (this.lesson !== undefined) {
            this.state = this.lesson;
        }
        this.getCall();
    }
    ChaptersubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChaptervocabPage');
    };
    ChaptersubPage.prototype.openchapter = function () {
        this.navCtrl.pop();
    };
    ChaptersubPage.prototype.openmenu = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    ChaptersubPage.prototype.openvocab = function (vocab) {
        console.log(vocab);
        this.navCtrl.push('VocabPage', {
            data: vocab,
            color: this.color
        });
    };
    ChaptersubPage.prototype.getCall = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + _this.lesson, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.vocab = data;
                _this.readych = true;
                resolve(data);
            }, function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    ChaptersubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chaptersub',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\chaptersub\chaptersub.html"*/'<ion-content>\n\n  <ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6> \n\n    <ion-grid class="gray"> \n\n    <ion-row>\n\n \n\n    <ion-col col-2>\n\n        <img class="returnlesson" (click)="openchapter()" src="assets/imgs/return.PNG">\n\n    </ion-col>\n\n    <ion-col col-8>\n\n        <div class="stateCh">Vocaburary</div>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <ion-icon class="menuicon" ios="ios-menu" md="md-menu" (click)="openmenu()" ></ion-icon>\n\n    </ion-col>\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n<div *ngIf = "readych;else ready">\n\n  <ion-row>\n\n    <ion-col col-12 *ngFor="let vocab of vocab">\n\n      <div class="{{color}} textchapter" (click)="openvocab(vocab)" >{{vocab.n.hiragana}}</div>\n\n    </ion-col>\n\n  </ion-row>\n\n</div>\n\n\n\n<ng-template #ready>\n\n    <img class="readyload" src="assets/imgs/loading/lg.palette-rotating-ring-loader.gif">\n\n</ng-template>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\chaptersub\chaptersub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChaptersubPage);
    return ChaptersubPage;
}());

//# sourceMappingURL=chaptersub.js.map

/***/ })

});
//# sourceMappingURL=11.js.map