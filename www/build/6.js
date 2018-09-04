webpackJsonp([6],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuestPageModule", function() { return LoginGuestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_guest__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginGuestPageModule = /** @class */ (function () {
    function LoginGuestPageModule() {
    }
    LoginGuestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_guest__["a" /* LoginGuestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_guest__["a" /* LoginGuestPage */]),
            ],
        })
    ], LoginGuestPageModule);
    return LoginGuestPageModule;
}());

//# sourceMappingURL=login-guest.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
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
 * Generated class for the LoginGuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginGuestPage = /** @class */ (function () {
    function LoginGuestPage(navCtrl, storage, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.data = [];
        this.name = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')
                ])]
        });
    }
    LoginGuestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginGuestPage');
    };
    LoginGuestPage.prototype.openMenu = function () {
        var _this = this;
        //stage
        this.storage.get('stageTable').then(function (stageTable) {
            if (stageTable != null) {
                _this.data = stageTable;
                _this.data.push({
                    id: _this.name.value.title,
                    stage: "1-0"
                });
                _this.storage.set('stageTable', _this.data);
            }
            else {
                _this.data.push({
                    id: _this.name.value.title,
                    stage: "1-0"
                });
                _this.storage.set('stageTable', _this.data);
            }
            console.log(_this.data);
        });
        //score
        this.storage.get('scoreTable').then(function (scoreTable) {
            if (scoreTable != null) {
                var data1 = scoreTable;
                data1.push({
                    id: _this.name.value.title,
                    stage: 1,
                    substage: 1,
                    score: 0
                });
                _this.storage.set('scoreTable', data1);
            }
            else {
                var data1 = [];
                data1.push({
                    id: _this.name.value.title,
                    stage: 1,
                    substage: 1,
                    score: 0
                });
                _this.storage.set('scoreTable', data1);
            }
        });
        //item
        this.storage.get('itemTable').then(function (itemTable) {
            if (itemTable != null) {
                var data1 = itemTable;
                data1.push({
                    id: _this.name.value.title,
                    itemC: 2,
                    itemS: 2,
                    itemA: 2
                });
                _this.storage.set('itemTable', data1);
            }
            else {
                var data1 = [];
                data1.push({
                    id: _this.name.value.title,
                    itemC: 2,
                    itemS: 2,
                    itemA: 2
                });
                _this.storage.set('itemTable', data1);
            }
        });
        //  this.storage.get('id').then((id) => {
        //   if(id == null){
        //     console.log('Your name is', id);        
        //     this.navCtrl.push(LoginPage);    
        //   }else {
        //     console.log('Your name is', id); 
        //     this.navCtrl.setRoot(MenuPage);
        //   }
        // });
        this.storage.set('id', this.name.value.title);
        this.storage.set('type', "quest");
        this.storage.set('state', "1-0");
        this.navCtrl.push('MenuPage');
    };
    LoginGuestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-guest',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\login-guest\login-guest.html"*/'<ion-content>\n\n  <ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n\n\n        <img class="loginlogoguest" src="assets/imgs/student.png">\n\n\n\n        <!-- <ion-row class="inputquest">  -->\n\n        <!-- <ion-col col-3> -->\n\n        <!-- <ion-label class="textname">Name</ion-label> -->\n\n        <form novalidate class="formtext" [formGroup]="name" (ngSubmit)="openMenu()">\n\n          <ion-item class="quest">\n\n            <ion-label class="textname" fixed>name </ion-label>\n\n            <ion-input class="textquest" type="text" formControlName="title"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item class="error" *ngIf="(name.get(\'title\').hasError(\'required\')||name.get(\'title\').hasError(\'pattern\')) && name.get(\'title\').touched">\n\n            <div *ngIf="name.get(\'title\').hasError(\'required\') && name.get(\'title\').touched">\n\n              Please input your name.\n\n            </div>\n\n            <div *ngIf="name.get(\'title\').hasError(\'pattern\') && name.get(\'title\').touched">\n\n              Please input character(a-z) at least 1 character.\n\n            </div>\n\n          </ion-item>\n\n          <div class="betweenB"></div>\n\n          <button ion-button class="loginB" [disabled]="name.invalid">OK</button>\n\n        </form>\n\n\n\n        <!-- </ion-col>  \n\n     <ion-col col-9>\n\n      <ion-input class="textquest" type="text"></ion-input>\n\n    </ion-col>\n\n  </ion-row>      -->\n\n\n\n        <!-- <button ion-button class="loginB" (click) = "openMenu()">OK</button>  -->\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\login-guest\login-guest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginGuestPage);
    return LoginGuestPage;
}());

//# sourceMappingURL=login-guest.js.map

/***/ })

});
//# sourceMappingURL=6.js.map