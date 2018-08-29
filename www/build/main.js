webpackJsonp([14],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(80);
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
    function HomePage(storage, navCtrl, http) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.http = http;
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
    HomePage.prototype.getParam = function (name) {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (!results) {
            return 0;
        }
        return results[1] || 0;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\home\home.html"*/'<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-lg-1 col-xl-3>\n\n\n\n      </ion-col>\n\n      <ion-col col-12 col-lg-10 col-xl-6>\n\n      <div class="fixheight">\n\n        <img class="logoone" src="assets/imgs/logomake.png">\n\n        <div class="title">Japanese-Thai\n\n          <br /> Vocabulary\n\n          <br /> Matching\n\n          <br /> Game </div>\n\n        <div class="homeB" (click)="openMenu()">Touch to Start</div>\n\n        <div class="or"> or </div>\n\n        <img class="homelogoCMU" src="assets/imgs/chiangmai-university-logo-english-w.png">\n\n        <div class="homeB2" (click)="openlogin()">Login with CMU mail</div>\n\n        <img class="onepic" src="assets/imgs/homepic.jpg">\n\n        <img class="twopic" src="assets/imgs/0557d23fcc27c3b.jpg">\n\n        <img class="logotwo" src="assets/imgs/logow.jpg">\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-lg-1 col-xl-3>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chapter/chapter.module": [
		290,
		12
	],
	"../pages/chaptersub/chaptersub.module": [
		302,
		11
	],
	"../pages/credit/credit.module": [
		291,
		10
	],
	"../pages/dictionary/dictionary.module": [
		292,
		9
	],
	"../pages/endone/endone.module": [
		293,
		13
	],
	"../pages/endsubone/endsubone.module": [
		294,
		8
	],
	"../pages/lesson/lesson.module": [
		296,
		7
	],
	"../pages/login-guest/login-guest.module": [
		295,
		6
	],
	"../pages/login/login.module": [
		157
	],
	"../pages/lost/lost.module": [
		297,
		5
	],
	"../pages/map/map.module": [
		303,
		4
	],
	"../pages/menu/menu.module": [
		298,
		3
	],
	"../pages/playgame/playgame.module": [
		299,
		2
	],
	"../pages/profile/profile.module": [
		300,
		1
	],
	"../pages/vocab/vocab.module": [
		301,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(257);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndonePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalContentPageskip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalContentPageAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_endone_endone__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(201);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_8__pages_endone_endone__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_endone_endone__["c" /* ModalContentPageAdd */], __WEBPACK_IMPORTED_MODULE_8__pages_endone_endone__["d" /* ModalContentPageskip */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chapter/chapter.module#ChapterPageModule', name: 'ChapterPage', segment: 'chapter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit/credit.module#CreditPageModule', name: 'CreditPage', segment: 'credit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dictionary/dictionary.module#DictionaryPageModule', name: 'DictionaryPage', segment: 'dictionary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/endone/endone.module#EndonePageModule', name: 'EndonePage', segment: 'endone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/endsubone/endsubone.module#EndsubonePageModule', name: 'EndsubonePage', segment: 'endsubone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-guest/login-guest.module#LoginGuestPageModule', name: 'LoginGuestPage', segment: 'login-guest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lesson/lesson.module#LessonPageModule', name: 'LessonPage', segment: 'lesson', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lost/lost.module#LostPageModule', name: 'LostPage', segment: 'lost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playgame/playgame.module#PlaygamePageModule', name: 'PlaygamePage', segment: 'playgame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vocab/vocab.module#VocabPageModule', name: 'VocabPage', segment: 'vocab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chaptersub/chaptersub.module#ChaptersubPageModule', name: 'ChaptersubPage', segment: 'chaptersub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_8__pages_endone_endone__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_endone_endone__["c" /* ModalContentPageAdd */], __WEBPACK_IMPORTED_MODULE_8__pages_endone_endone__["d" /* ModalContentPageskip */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_config__ = __webpack_require__(271);
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
    function LoginPage(formBuilder, storage, http, navCtrl, loadingCtrl, iab) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.qp = [];
        this.loginerr = false;
        this.typeS = "begin";
        this.todo = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]
        });
        if (localStorage.getItem('id') && localStorage.getItem('fullname')) {
            var afterLoginData = {
                student_id: this.storage.get('id'),
                firstname_TH: this.storage.get('firstname'),
                lastname_TH: this.storage.get('lastname')
            };
            this.doAfterLogin(afterLoginData);
        }
        else {
            if (this.GetParam('access_token')) {
                this.getUserWithAccessToken(this.GetParam('access_token'));
            }
            else {
                this.login();
            }
        }
    }
    LoginPage.prototype.GetParam = function (name) {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (!results) {
            return 0;
        }
        return results[1] || 0;
    };
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
    LoginPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n       <img src=\"assets/imgs/loading/lg.palette-rotating-ring-loader.gif\">     \n     "
        });
        this.loading.present();
    };
    LoginPage.prototype.postCall = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        // let options = new RequestOptions({ headers: headers });
        var postParams = {
            params: {
                UserName: this.todo.value.title,
                Password: this.todo.value.password
            }
        };
        //same but too long
        return new Promise(function (resolve, reject) {
            _this.http.post('https://sis.cmu.ac.th/cmusis/API/User/checkUser', postParams, { headers: headers })
                .toPromise()
                .then(function (response) {
                console.log('API Response : ', response);
                // this.data2 = response.json();
                _this.login();
                // resolve(response.json());
                console.log(_this.data2);
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                _this.postCall();
                reject(error.json());
            });
        });
    };
    ;
    LoginPage.prototype.login = function () {
        var _this = this;
        var authenUrl = Object(__WEBPACK_IMPORTED_MODULE_9__app_app_config__["b" /* getOAuthAuthenUrl */])();
        return new Promise(function (resolve, reject) {
            var isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
            if (isApp) {
                authenUrl = Object(__WEBPACK_IMPORTED_MODULE_9__app_app_config__["c" /* getOAuthAuthenUrlMobile */])();
                console.log('isApp: ', isApp, authenUrl);
                var browser_1 = _this.iab.create(authenUrl, '_blank');
                var listener_1 = browser_1.on('loadstart').subscribe(function (event) {
                    //Check the redirect uri
                    if (event.url.indexOf('oauth/success') > -1) {
                        listener_1.unsubscribe();
                        browser_1.close();
                        var access_token = event.url.split('=')[1].split('&')[0];
                        _this.getUserWithAccessToken(access_token);
                    }
                    else {
                        console.log("Could not authenticate");
                    }
                });
            }
            else {
                window.open(authenUrl, '_self');
            }
        });
    };
    LoginPage.prototype.doAfterLogin = function (responseData) {
        var _this = this;
        var cheackid = 0;
        this.data2 = { data: null };
        if (responseData) {
            this.data2.data = {
                StudentCode: responseData.student_id,
                FullName: responseData.firstname_TH + ' ' + responseData.lastname_TH,
                FirstName: responseData.firstname_TH,
                lastName: responseData.lastname_TH
            };
        }
        if (this.data2.data == null) {
            console.log("no user data returned", responseData);
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
            this.navCtrl.push('MenuPage');
        }
    };
    LoginPage.prototype.getUserWithAccessToken = function (access_token) {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* OAUTH_REDIRECT_URI */] + '/api/getUser?access_token=' + access_token)
            .subscribe(function (response) {
            console.log(response);
            _this.doAfterLogin(response);
        }, function (error) { return console.log(error); });
    };
    LoginPage.prototype.setName = function () {
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
            selector: 'page-login',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\login\login.html"*/'<ion-content>\n\n    <img class="readyload" src="assets/imgs/loading/lg.palette-rotating-ring-loader.gif">\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OAUTH_LOGIN_URL */
/* unused harmony export OAUTH_TOKEN_URL */
/* unused harmony export OAUTH_CLIENT_ID */
/* unused harmony export OAUTH_CLIENT_SECRET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAUTH_REDIRECT_URI; });
/* unused harmony export OAUTH_SCOPE */
/* harmony export (immutable) */ __webpack_exports__["b"] = getOAuthAuthenUrl;
/* harmony export (immutable) */ __webpack_exports__["c"] = getOAuthAuthenUrlMobile;
var OAUTH_LOGIN_URL = 'https://oauth.cmu.ac.th/v1/Authorize.aspx';
var OAUTH_TOKEN_URL = 'https://oauth.cmu.ac.th/v1/GetToken.aspx';
var OAUTH_CLIENT_ID = '9rqMCFuBdCAJJpK3pJbdse2qvuzTwBQRWj8Z02ej';
var OAUTH_CLIENT_SECRET = 'kUYa77PQeKhqzXE4y9sjgMfNYWZzrWcxD23Ht2tx';
var OAUTH_REDIRECT_URI = 'https://question-server.herokuapp.com';
var OAUTH_SCOPE = 'cmuitaccount.basicinfo';
var CRYPTO_KEY = 'A5178B6A965AACF3CD60B07A15061719';
function getOAuthAuthenUrl() {
    var backUrl = window.location.origin + '%2F%23%2Flogin';
    return OAUTH_LOGIN_URL + "?response_type=code&client_id=" + OAUTH_CLIENT_ID + "&redirect_uri=" + OAUTH_REDIRECT_URI + "&scope=" + OAUTH_SCOPE + "&state=" + backUrl;
}
function getOAuthAuthenUrlMobile() {
    var mobileBackUrl = 'mobile';
    return OAUTH_LOGIN_URL + "?response_type=code&client_id=" + OAUTH_CLIENT_ID + "&redirect_uri=" + OAUTH_REDIRECT_URI + "&scope=" + OAUTH_SCOPE + "&state=" + mobileBackUrl;
}
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
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

},[206]);
//# sourceMappingURL=main.js.map