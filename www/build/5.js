webpackJsonp([5],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPageModule", function() { return LostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lost__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LostPageModule = /** @class */ (function () {
    function LostPageModule() {
    }
    LostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lost__["a" /* LostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lost__["a" /* LostPage */]),
            ],
        })
    ], LostPageModule);
    return LostPageModule;
}());

//# sourceMappingURL=lost.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_call_api_call_api__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the LostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LostPage = /** @class */ (function () {
    function LostPage(navCtrl, navParams, CallApiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CallApiProvider = CallApiProvider;
        this.staticForSave = navParams.get('static');
        this.typeForSave = navParams.get('type');
        //static save    
        if (this.staticForSave !== undefined && this.staticForSave.length > 0) {
            var staticVocab_1 = [{
                    "type": this.typeForSave,
                    "mistake": this.staticForSave
                }];
            var callback = function (result) {
                console.log("saveStaticInDatabase: ", staticVocab_1);
            };
            this.CallApiProvider.getCallStaticSave(callback, staticVocab_1);
        }
    }
    LostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LostPage');
    };
    LostPage.prototype.openMap = function () {
        this.navCtrl.setRoot('MapPage');
    };
    LostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-lost',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\lost\lost.html"*/'<ion-content class="gray">\n\n\n\n  <ion-grid class="fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n        <img class="piccorrect" src="assets/imgs/gameover.PNG">\n\n        <p class="textcorrect">LOST</p>\n\n        <button ion-button class="buttonpopup" (click)="openMap()">\n\n          OK\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\lost\lost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_call_api_call_api__["a" /* CallApiProvider */]])
    ], LostPage);
    return LostPage;
}());

//# sourceMappingURL=lost.js.map

/***/ })

});
//# sourceMappingURL=5.js.map