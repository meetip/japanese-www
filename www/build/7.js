webpackJsonp([7],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonPageModule", function() { return LessonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LessonPageModule = /** @class */ (function () {
    function LessonPageModule() {
    }
    LessonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lesson__["a" /* LessonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lesson__["a" /* LessonPage */]),
            ],
        })
    ], LessonPageModule);
    return LessonPageModule;
}());

//# sourceMappingURL=lesson.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonPage; });
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
 * Generated class for the LessonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LessonPage = /** @class */ (function () {
    function LessonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LessonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LessonPage');
    };
    LessonPage.prototype.openMenu = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    LessonPage.prototype.openLessonsub = function (lesson) {
        this.navCtrl.push('ChapterPage', {
            data: lesson
        });
    };
    LessonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lesson',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\lesson\lesson.html"*/'<ion-content>\n\n<ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n  <ion-grid class="nopadding fixheight"> \n\n    <ion-row class="gray borderbottom">\n\n      <ion-col>\n\n        <img class="returnlesson" (click) = "openMenu()" src="assets/imgs/return.PNG">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="orange lessonmenu borderbottom">\n\n      <ion-col>\n\n        <div class="lesson" (click) = "openLessonsub(1)">018111</div>\n\n      </ion-col>\n\n    </ion-row>\n\n     <ion-row class="yellow lessonmenu borderbottom">\n\n       <ion-col>\n\n        <div class="lesson" (click) = "openLessonsub(2)">018112</div>\n\n       </ion-col>\n\n    </ion-row>\n\n    <ion-row class="blue lessonmenu borderbottom">\n\n      <ion-col>\n\n        <div class="lesson" (click) = "openLessonsub(3)">018113</div>\n\n      </ion-col>\n\n    </ion-row>\n\n     <ion-row class="violet lessonmenu">\n\n       <ion-col>\n\n        <div class="lesson" (click) = "openLessonsub(4)">018114</div>\n\n       </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n 	      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\lesson\lesson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LessonPage);
    return LessonPage;
}());

//# sourceMappingURL=lesson.js.map

/***/ })

});
//# sourceMappingURL=7.js.map