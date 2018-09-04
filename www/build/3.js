webpackJsonp([3],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(110);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, http, storage, navParams, menuCtrl, viewCtrl, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.typemenu = false;
        this.readymenu = false;
        this.platform = platform;
        this.firstname = this.navParams.get('data');
        // if(this.firstname !== undefined){
        //   this.fullname = this.firstname;
        //   this.name = this.firstname;
        // this.readymenu = true;
        // this.storage.get('state').then((state)=> {
        // if(state === "1-0"){
        //   this.state = state;
        //   this.statetext = "Begin";
        // }else{
        //   this.state = state;
        //   this.statetext = state;
        // }
        // });
        // }else{
        // this.presentLoadingCustom();
        // }
        //   this.storage.get('id').then((id) => {
        //     if(id == null){       
        //     this.navCtrl.push(LoginPage);    
        //   }
        //     console.log('Your name is', id);  
        // });
        //   this.data = navParams.get('param1');
        //   console.log(this.data);
    }
    MenuPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n       <img src=\"assets/imgs/loading/lg.palette-rotating-ring-loader.gif\">     \n     "
        });
        // loading.onDidDismiss(() => {
        //   console.log('Dismissed loading');
        // });
        this.loading.present();
        this.loaddata();
    };
    MenuPage.prototype.loaddata = function () {
        // this.storage.get('state').then((state)=> {
        //   if(state === "1-0"){
        //     this.state = state;
        //     this.statetext = "Begin";
        //   }else{
        //     this.state = state;
        //     this.statetext = state;
        //   }
        // });
        // this.storage.get('type').then((type)=> {
        //   console.log(type);
        //   if(type === "student"){
        //     this.storage.get('fullname').then((fullname)=> {
        //       this.fullname = fullname;
        //       this.typemenu = true;
        //       this.readymenu = true;
        //       this.loading.dismiss(() => {
        //           console.log('Dismissed loading');
        //         });
        //     }); 
        //   }else {
        //     this.storage.get('name').then((name)=> {
        //       this.name = name;
        //       this.readymenu = true;
        //       this.loading.dismiss(() => {
        //           console.log('Dismissed loading');
        //         });
        //     });
        //   }
        // });
        // this.navCtrl.setRoot('MenuPage');
    };
    MenuPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter');
        // this.storage.get('state').then((state)=> {
        //   if(state === "1-0"){
        //     this.state = state;
        //     this.statetext = "Begin";
        //   }else{
        //     this.state = state;
        //     this.statetext = state;
        //   }
        // });
        var idCode;
        this.storage.get('id').then(function (id) {
            idCode = id;
        });
        this.storage.get('stageTable').then(function (stageTable) {
            for (var i = 0; i < stageTable.length; i++) {
                if (stageTable[i].id == idCode) {
                    _this.state = stageTable[i].stage;
                    if (_this.state === "1-0") {
                        _this.statetext = "Begin";
                    }
                    else {
                        _this.statetext = _this.state;
                    }
                }
            }
        });
        this.storage.get('type').then(function (type) {
            console.log(type);
            if (type == "student") {
                _this.storage.get('fullname').then(function (fullname) {
                    _this.fullname = fullname;
                    _this.typemenu = true;
                });
            }
            else {
                _this.storage.get('id').then(function (id) {
                    _this.name = id;
                });
            }
        });
        this.readymenu = true;
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.ngOnInit = function () {
        // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    MenuPage.prototype.protect = function () {
        var _this = this;
        this.storage.get('id').then(function (id) {
            if (id == null) {
                console.log('Your name is', id);
                _this.navCtrl.setRoot('LoginPage');
                return false;
            }
        });
        return true;
    };
    MenuPage.prototype.openprofile = function () {
        this.navCtrl.push('ProfilePage');
    };
    MenuPage.prototype.openMap = function () {
        this.navCtrl.push('MapPage', {
            state: this.state,
        });
    };
    MenuPage.prototype.openLesson = function () {
        this.navCtrl.push('LessonPage');
    };
    MenuPage.prototype.openCre = function () {
        this.navCtrl.push('CreditPage');
    };
    MenuPage.prototype.removeName = function () {
        var _this = this;
        this.storage.remove('id').then(function () {
            console.log('name has been removed');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        });
        // this.storage.clear().then(() => {
        //   console.log('Keys have been cleared');
        // });
    };
    MenuPage.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\menu\menu.html"*/'<ion-content>\n\n  <ion-grid class="nopadding fixheight" *ngIf="readymenu;else ready">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n        <ion-row class="gray borderbottom">\n\n          <ion-col col-9 *ngIf="typemenu;else quest">\n\n            <div class="namemenu">Name : {{fullname}}</div>\n\n            <div class="namemenu">Stage : {{statetext}}</div>\n\n          </ion-col>\n\n          <ng-template #quest>\n\n            <ion-col col-9>\n\n              <div class="namemenu">Name : {{name}}</div>\n\n              <div class="namemenu">Stage : {{statetext}}</div>\n\n            </ion-col>\n\n          </ng-template>\n\n          <ion-col col-3>\n\n            <img class="iconperson" src="assets/imgs/profilestudent.png" (click)="openprofile()">\n\n          </ion-col>\n\n          <div class="head11"></div>\n\n\n\n        </ion-row>\n\n        <ion-row class="borderbottom">\n\n          <ion-col col-9 class="blue borderright">\n\n            <div class="textmenu" (click)="openMap()">Play</div>\n\n          </ion-col>\n\n          <ion-col col-3 class="yellow"></ion-col>\n\n        </ion-row>\n\n        <ion-row class="borderbottom">\n\n          <ion-col col-3 class="green borderright"></ion-col>\n\n          <ion-col col-9 class="pink">\n\n            <div class="textmenu" (click)="openLesson()">Vocabulary Bank</div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="borderbottom ">\n\n          <ion-col col-9 class="violet borderright">\n\n            <div class="textmenu" (click)="openCre()">Credit</div>\n\n          </ion-col>\n\n          <ion-col col-3 class="yellow"></ion-col>\n\n        </ion-row>\n\n        <ion-row class="borderbottom">\n\n          <ion-col col-3 class="green borderright"></ion-col>\n\n          <ion-col col-9 class="orange">\n\n            <div class="textmenu" (click)="exitApp()">Exit</div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n  <ng-template #ready>\n\n    <img class="readyload" src="assets/imgs/loading/lg.palette-rotating-ring-loader.gif">\n\n  </ng-template>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=3.js.map