webpackJsonp([12],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterPageModule", function() { return ChapterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chapter__ = __webpack_require__(304);
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

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpClient } from "@angular/common/http";





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
        this.url = __WEBPACK_IMPORTED_MODULE_6__app_app_config__["b" /* SERVER */] + "/api/getLesson/";
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
            selector: 'page-chapter',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\chapter\chapter.html"*/'<ion-content>\n\n  <ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>  \n\n  <ion-grid class="gray"> \n\n    <ion-row>\n\n \n\n    <ion-col col-2 >\n\n        <img class="returnlesson" (click)="openlesson()" src="assets/imgs/return.PNG">\n\n    </ion-col>\n\n    <ion-col col-8>\n\n        <div class="stateCh">Chapter</div>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <ion-icon class="menuicon" ios="ios-menu" md="md-menu" (click)="openmenu()" ></ion-icon>\n\n    </ion-col>\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-row *ngFor="let lesson of lesson">\n\n    <ion-col col-4  *ngFor="let lesson1 of lesson.chapter">\n\n      <div class="{{lesson.color}} textlesson" (click)="openchapter(lesson1,lesson.color)">\n\n        {{lesson1}}        \n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\chapter\chapter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChapterPage);
    return ChapterPage;
}());

//# sourceMappingURL=chapter.js.map

/***/ })

});
//# sourceMappingURL=12.js.map