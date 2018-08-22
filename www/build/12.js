webpackJsonp([12],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryPageModule", function() { return DictionaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dictionary__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DictionaryPageModule = /** @class */ (function () {
    function DictionaryPageModule() {
    }
    DictionaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dictionary__["a" /* DictionaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dictionary__["a" /* DictionaryPage */]),
            ],
        })
    ], DictionaryPageModule);
    return DictionaryPageModule;
}());

//# sourceMappingURL=dictionary.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the DictionaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DictionaryPage = /** @class */ (function () {
    function DictionaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DictionaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DictionaryPage');
    };
    DictionaryPage.prototype.openMenu = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    DictionaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dictionary',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\dictionary\dictionary.html"*/'<ion-content class="darkgreen">\n\n <ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n  <ion-grid class="nopadding fixheight"> \n\n    <ion-row class="gray">\n\n      <ion-col>\n\n        <img class="return" (click) = "openMenu()" src="assets/imgs/return.PNG">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div class="cicleDic">\n\n    <img class="book" src="assets/imgs/book.PNG">\n\n  </div>\n\n  <p class="dic">DICTIONARY</p>\n\n\n\n  <ion-item class="darkgreen textdic">\n\n    <ion-label>\n\n    <ion-icon class="searchicon" ios="ios-search" md="md-search"></ion-icon>\n\n    </ion-label>\n\n     <ion-input class="inputtext" type="text"></ion-input> \n\n  </ion-item>\n\n    <button ion-button class="DicB">Search</button> \n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\dictionary\dictionary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DictionaryPage);
    return DictionaryPage;
}());

//# sourceMappingURL=dictionary.js.map

/***/ })

});
//# sourceMappingURL=12.js.map