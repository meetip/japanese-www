webpackJsonp([0],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabPageModule", function() { return VocabPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vocab__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VocabPageModule = /** @class */ (function () {
    function VocabPageModule() {
    }
    VocabPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vocab__["a" /* VocabPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vocab__["a" /* VocabPage */]),
            ],
        })
    ], VocabPageModule);
    return VocabPageModule;
}());

//# sourceMappingURL=vocab.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VocabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the VocabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VocabPage = /** @class */ (function () {
    function VocabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.readyvo = false;
        this.vocab = navParams.get('data');
        this.color = navParams.get('color');
        this.readyvo = true;
        console.log(this.vocab);
    }
    VocabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VocabPage');
    };
    VocabPage.prototype.openchapter = function () {
        this.navCtrl.pop();
    };
    VocabPage.prototype.openmenu = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    VocabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vocab',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\vocab\vocab.html"*/'<ion-content class="{{color}}">\n\n<ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n<ion-grid class="gray"> \n\n    <ion-row>\n\n \n\n    <ion-col col-2>\n\n        <img class="returnlesson" (click)="openchapter()" src="assets/imgs/return.PNG">\n\n    </ion-col>\n\n    <ion-col col-8>\n\n        \n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <ion-icon class="menuicon" ios="ios-menu" md="md-menu" (click)="openmenu()" ></ion-icon>\n\n    </ion-col>\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n  <div *ngIf = "readyvo;else ready">  \n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <!-- <div class="pink textchapter">{{vocab.n.hiragana}}</div> -->\n\n      <div class="textchapterhi">{{vocab.n.hiragana}}</div>\n\n      <div class="textchapterro">[{{vocab.n.romanji}}]</div>\n\n      <div class="textchapterth">{{vocab.n.thai}}</div>\n\n    </ion-col>\n\n  </ion-row>\n\n  </div>  \n\n\n\n<ng-template #ready>\n\n    <img class="readyload" src="assets/imgs/loading/lg.colorful-progress-loader.gif">\n\n</ng-template>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\vocab\vocab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VocabPage);
    return VocabPage;
}());

//# sourceMappingURL=vocab.js.map

/***/ })

});
//# sourceMappingURL=0.js.map