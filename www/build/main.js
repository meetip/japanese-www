webpackJsonp([15],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.cheackS = false;
        this.cheackQ = false;
        this.storage.get('id').then(function (id) {
            if (id != null) {
                _this.cheackS = true;
                _this.cheackQ = true;
            }
        });
        // this.storage.get('name').then((name) => {
        //   if(name != null){   
        //     this.cheackQ = true; 
        //   }
        // });
    }
    HomePage.prototype.openMenu = function () {
        var _this = this;
        if (!this.cheackS) {
            this.storage.get('id').then(function (id) {
                if (id == null) {
                    console.log('Your name is', id);
                    _this.navCtrl.push('LoginGuestPage');
                }
                else {
                    console.log('Your name is', id);
                    _this.navCtrl.push('MenuPage');
                }
            });
        }
        else {
            this.navCtrl.push('MenuPage');
        }
        // this.navCtrl.setRoot(LoginGuestPage);
    };
    //
    HomePage.prototype.openlogin = function () {
        var _this = this;
        if (!this.cheackQ) {
            this.storage.get('id').then(function (id) {
                console.log('Your name is', id);
                if (id == null) {
                    console.log('Your name is', id);
                    _this.navCtrl.push('LoginPage');
                }
                else {
                    console.log('Your name is', id);
                    _this.navCtrl.push('MenuPage');
                }
            });
        }
        else {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\home\home.html"*/'<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-lg-1 col-xl-3>\n\n\n\n      </ion-col>\n\n      <ion-col col-12 col-lg-10 col-xl-6>\n\n      <div class="fixheight">\n\n        <img class="logoone" src="assets/imgs/logomake.png">\n\n        <div class="title">Japanese-Thai\n\n          <br /> Vocabulary\n\n          <br /> Matching\n\n          <br /> Game </div>\n\n        <div class="homeB" (click)="openMenu()">Touch to Start</div>\n\n        <div class="or"> or </div>\n\n        <img class="homelogoCMU" src="assets/imgs/chiangmai-university-logo-english-w.png">\n\n        <div class="homeB2" (click)="openlogin()">Login with CMU mail</div>\n\n        <img class="onepic" src="assets/imgs/homepic.jpg">\n\n        <img class="twopic" src="assets/imgs/0557d23fcc27c3b.jpg">\n\n        <img class="logotwo" src="assets/imgs/logow.jpg">\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-lg-1 col-xl-3>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chapter/chapter.module": [
		276,
		2
	],
	"../pages/chaptersub/chaptersub.module": [
		275,
		3
	],
	"../pages/credit/credit.module": [
		277,
		13
	],
	"../pages/dictionary/dictionary.module": [
		278,
		12
	],
	"../pages/endone/endone.module": [
		279,
		14
	],
	"../pages/endsubone/endsubone.module": [
		280,
		11
	],
	"../pages/lesson/lesson.module": [
		281,
		10
	],
	"../pages/login-guest/login-guest.module": [
		282,
		9
	],
	"../pages/login/login.module": [
		283,
		1
	],
	"../pages/lost/lost.module": [
		284,
		8
	],
	"../pages/map/map.module": [
		285,
		7
	],
	"../pages/menu/menu.module": [
		286,
		6
	],
	"../pages/playgame/playgame.module": [
		287,
		0
	],
	"../pages/profile/profile.module": [
		288,
		5
	],
	"../pages/vocab/vocab.module": [
		289,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndonePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalContentPageskip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalContentPageAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
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
 * Generated class for the EndonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EndonePage = /** @class */ (function () {
    function EndonePage(navCtrl, modal, storage, navParams) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.storage = storage;
        this.navParams = navParams;
        this.totalscore = 0;
        this.state = 1;
        this.substate = 3;
        this.textclear = " がんばりましょう。";
        this.readyend = false;
        this.checkgetitem = false;
        this.state = navParams.get('state');
        this.lastStage = navParams.get('lastStage');
    }
    EndonePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('id').then(function (id) {
            _this.idCode = id;
        });
        this.storage.get('itemTable').then(function (itemTable) {
            if (itemTable != null) {
                var data1 = itemTable;
                for (var i = 0; i < data1.length; i++) {
                    if (data1[i].id == _this.idCode) {
                        _this.itemcutnum = data1[i].itemC;
                        _this.itemskipnum = data1[i].itemS;
                        _this.itemaddnum = data1[i].itemA;
                    }
                }
            }
        });
        this.storage.get('scoreTable').then(function (scoreTable) {
            for (var i = 0; i < scoreTable.length; i++) {
                if (scoreTable[i].id == _this.idCode) {
                    if (scoreTable[i].stage == _this.state) {
                        _this.totalscore = _this.totalscore + scoreTable[i].score;
                    }
                }
            }
            if (_this.totalscore > 55) {
                _this.textclear = " " + "たいへん よく できました。";
            }
            else if (_this.totalscore > 50) {
                _this.textclear = " " + "よく できました。";
            }
            else {
                _this.textclear = " " + "がんばりましょう。";
            }
        });
        this.readyend = true;
    };
    EndonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EndonePage');
    };
    EndonePage.prototype.getitem = function () {
        var _this = this;
        this.checkgetitem = true;
        var ran = Math.floor(Math.random() * 3);
        if (ran == 1) {
            this.itemcutnum++;
            this.storage.get('itemTable').then(function (itemTable) {
                if (itemTable != null) {
                    var data1 = itemTable;
                    for (var i = 0; i < data1.length; i++) {
                        if (data1[i].id == _this.idCode) {
                            data1[i].itemC = _this.itemcutnum;
                        }
                    }
                    _this.storage.set('itemTable', data1);
                }
            });
            this.openModalItemcut();
        }
        else if (ran == 2) {
            this.itemaddnum++;
            this.storage.get('itemTable').then(function (itemTable) {
                if (itemTable != null) {
                    var data1 = itemTable;
                    for (var i = 0; i < data1.length; i++) {
                        if (data1[i].id == _this.idCode) {
                            data1[i].itemA = _this.itemaddnum;
                        }
                    }
                    _this.storage.set('itemTable', data1);
                }
            });
            this.openModalItemsAdd();
        }
        else {
            this.itemskipnum++;
            this.storage.get('itemTable').then(function (itemTable) {
                if (itemTable != null) {
                    var data1 = itemTable;
                    for (var i = 0; i < data1.length; i++) {
                        if (data1[i].id == _this.idCode) {
                            data1[i].itemS = _this.itemskipnum;
                        }
                    }
                    _this.storage.set('itemTable', data1);
                }
            });
            this.openModalItemskip();
        }
    };
    EndonePage.prototype.openmap = function () {
        this.checkoption = "map";
        if (this.checkgetitem) {
            this.navCtrl.setRoot('MapPage');
        }
        else {
            this.getitem();
        }
    };
    EndonePage.prototype.openmenu = function () {
        this.checkoption = "menu";
        if (this.checkgetitem) {
            this.navCtrl.setRoot('MenuPage');
        }
        else {
            this.getitem();
        }
    };
    EndonePage.prototype.openModalItemcut = function () {
        var _this = this;
        var Mymodal = this.modal.create(ModalContentPage, { enableBackdropDismiss: false, itemcutnum: this.itemcutnum });
        Mymodal.present();
        Mymodal.onDidDismiss(function () {
            if (_this.checkoption == "menu") {
                _this.navCtrl.setRoot('MenuPage');
            }
            else {
                _this.navCtrl.setRoot('MapPage');
            }
        });
    };
    EndonePage.prototype.openModalItemskip = function () {
        var _this = this;
        var Mymodal = this.modal.create(ModalContentPageskip, { enableBackdropDismiss: false, itemskipnum: this.itemskipnum });
        Mymodal.present();
        Mymodal.onDidDismiss(function () {
            if (_this.checkoption == "menu") {
                _this.navCtrl.setRoot('MenuPage');
            }
            else {
                _this.navCtrl.setRoot('MapPage');
            }
        });
    };
    EndonePage.prototype.openModalItemsAdd = function () {
        var _this = this;
        var Mymodal = this.modal.create(ModalContentPageAdd, { enableBackdropDismiss: false, itemaddnum: this.itemaddnum });
        Mymodal.present();
        Mymodal.onDidDismiss(function () {
            if (_this.checkoption == "menu") {
                _this.navCtrl.setRoot('MenuPage');
            }
            else {
                _this.navCtrl.setRoot('MapPage');
            }
        });
    };
    EndonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-endone',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\endone\endone.html"*/'<ion-content class="orange">\n\n <ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n    <div *ngIf = "readyend;else ready">\n\n    <ion-grid class="nopadding fixheight"> \n\n    <ion-grid class="gray"> \n\n    <ion-row>\n\n \n\n    <ion-col col-2>\n\n        <img class="returnend" (click)="openmap()" src="assets/imgs/map.png">\n\n    </ion-col>\n\n    <ion-col col-8>\n\n        <div class="stateCh">STAGE {{state}} CLEAR!</div>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <ion-icon class="menuicon" ios="ios-menu" md="md-menu" (click)="openmenu()"></ion-icon>\n\n    </ion-col>\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <img class="piclight" src="assets/imgs/light.PNG" >\n\n    <p class="textconend"> {{textclear}}</p>\n\n    <div class="border"></div>\n\n    <p class="textscoreend">{{totalscore}} / 60</p>\n\n    <ion-icon name="mail" class="mail" (click)="getitem()"></ion-icon>\n\n    <p class="foot">You get item</p>\n\n\n\n  </ion-grid>\n\n\n\n    </ion-grid>\n\n    </div>\n\n<ng-template #ready>\n\n    <img class="readyload" src="assets/imgs/loading/lg.palette-rotating-ring-loader.gif">\n\n</ng-template>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\endone\endone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EndonePage);
    return EndonePage;
}());

var ModalContentPage = /** @class */ (function () {
    function ModalContentPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.itemcutnum = navParams.get('itemcutnum');
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\endone\itemcut.html"*/'<ion-content class="green">\n\n<ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n    <div class="fixheight">\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <ion-icon class="close" ios="ios-close-circle" md="md-close-circle" (click)="dismiss()"></ion-icon>\n\n        </ion-col>        \n\n    </ion-row>\n\n    <img class="getitem" src="assets/imgs/5050get.png">\n\n    <p class="textget">You get cutchoice item +1</p>\n\n    <p class="textnumget">{{itemcutnum}} / 10</p>\n\n    </div>\n\n	      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\endone\itemcut.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

var ModalContentPageskip = /** @class */ (function () {
    function ModalContentPageskip(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.itemskipnum = navParams.get('itemskipnum');
    }
    ModalContentPageskip.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPageskip = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\endone\itemskip.html"*/'<ion-content class="green">\n\n<ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n    <div class="fixheight">\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <ion-icon class="close" ios="ios-close-circle" md="md-close-circle" (click)="dismiss()"></ion-icon>\n\n        </ion-col>        \n\n    </ion-row>\n\n    <img class="getitem" src="assets/imgs/skipget.png">\n\n    <p class="textget">You get skip item +1</p>\n\n    <p class="textnumget">{{itemskipnum}} / 10</p>\n\n    </div>\n\n	      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\endone\itemskip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalContentPageskip);
    return ModalContentPageskip;
}());

var ModalContentPageAdd = /** @class */ (function () {
    function ModalContentPageAdd(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.itemaddnum = navParams.get('itemaddnum');
    }
    ModalContentPageAdd.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPageAdd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\endone\itemadd.html"*/'<ion-content class="green">\n\n<ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n    <div class="fixheight">\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <ion-icon class="close" ios="ios-close-circle" md="md-close-circle" (click)="dismiss()"></ion-icon>\n\n        </ion-col>        \n\n    </ion-row>\n\n    <img class="getitem" src="assets/imgs/addtimeget.png">\n\n    <p class="textget">You get addtime item +1</p>\n\n    <p class="textnumget">{{itemaddnum}} / 10</p>\n\n    </div>\n\n	      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\endone\itemadd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalContentPageAdd);
    return ModalContentPageAdd;
}());

//# sourceMappingURL=endone.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_endone_endone__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var storage = new __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]({});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_9__pages_endone_endone__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_endone_endone__["c" /* ModalContentPageAdd */], __WEBPACK_IMPORTED_MODULE_9__pages_endone_endone__["d" /* ModalContentPageskip */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chaptersub/chaptersub.module#ChaptersubPageModule', name: 'ChaptersubPage', segment: 'chaptersub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chapter/chapter.module#ChapterPageModule', name: 'ChapterPage', segment: 'chapter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit/credit.module#CreditPageModule', name: 'CreditPage', segment: 'credit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dictionary/dictionary.module#DictionaryPageModule', name: 'DictionaryPage', segment: 'dictionary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/endone/endone.module#EndonePageModule', name: 'EndonePage', segment: 'endone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/endsubone/endsubone.module#EndsubonePageModule', name: 'EndsubonePage', segment: 'endsubone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lesson/lesson.module#LessonPageModule', name: 'LessonPage', segment: 'lesson', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-guest/login-guest.module#LoginGuestPageModule', name: 'LoginGuestPage', segment: 'login-guest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lost/lost.module#LostPageModule', name: 'LostPage', segment: 'lost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playgame/playgame.module#PlaygamePageModule', name: 'PlaygamePage', segment: 'playgame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vocab/vocab.module#VocabPageModule', name: 'VocabPage', segment: 'vocab', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_9__pages_endone_endone__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_endone_endone__["c" /* ModalContentPageAdd */], __WEBPACK_IMPORTED_MODULE_9__pages_endone_endone__["d" /* ModalContentPageskip */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map