webpackJsonp([1],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, storage, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.readypro = false;
        this.scoreTable = [];
        this.totalscore = 0;
        this.login = false;
    }
    ProfilePage.prototype.setLastStage = function (state) {
        if (state == "1-0") {
            this.statenum = 1;
            this.substate = 1;
        }
        else if (state == "1-1") {
            this.statenum = 1;
            this.substate = 1;
        }
        else if (state == "1-2") {
            this.statenum = 1;
            this.substate = 2;
        }
        else if (state == "1-3") {
            this.statenum = 1;
            this.substate = 3;
        }
        else if (state == "2-1") {
            this.statenum = 2;
            this.substate = 1;
        }
        else if (state == "2-2") {
            this.statenum = 2;
            this.substate = 2;
        }
        else if (state == "2-3") {
            this.statenum = 2;
            this.substate = 3;
        }
        else if (state == "3-1") {
            this.statenum = 3;
            this.substate = 1;
        }
        else if (state == "3-2") {
            this.statenum = 3;
            this.substate = 2;
        }
        else if (state == "3-3") {
            this.statenum = 3;
            this.substate = 3;
        }
        else if (state == "4-1") {
            this.statenum = 4;
            this.substate = 1;
        }
        else if (state == "4-2") {
            this.statenum = 4;
            this.substate = 2;
        }
        else if (state == "4-3") {
            this.statenum = 4;
            this.substate = 3;
        }
        else if (state == "5-1") {
            this.statenum = 5;
            this.substate = 1;
        }
        else if (state == "5-2") {
            this.statenum = 5;
            this.substate = 2;
        }
        else if (state == "5-3") {
            this.statenum = 5;
            this.substate = 3;
        }
        else if (state == "6-1") {
            this.statenum = 6;
            this.substate = 1;
        }
        else if (state == "6-2") {
            this.statenum = 6;
            this.substate = 2;
        }
        else if (state == "6-3") {
            this.statenum = 6;
            this.substate = 3;
        }
        else if (state == "7-1") {
            this.statenum = 7;
            this.substate = 1;
        }
        else if (state == "7-2") {
            this.statenum = 7;
            this.substate = 2;
        }
        else if (state == "7-3") {
            this.statenum = 7;
            this.substate = 3;
        }
        else if (state == "8-1") {
            this.statenum = 8;
            this.substate = 1;
        }
        else if (state == "8-2") {
            this.statenum = 8;
            this.substate = 2;
        }
        else if (state == "8-3") {
            this.statenum = 8;
            this.substate = 3;
        }
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var idCode;
        this.storage.get('id').then(function (id) {
            idCode = id;
        });
        this.storage.get('stageTable').then(function (stageTable) {
            for (var i = 0; i < stageTable.length; i++) {
                if (stageTable[i].id == idCode) {
                    _this.state = stageTable[i].stage;
                    if (_this.state == "1-0") {
                        _this.statetext = "Begin";
                    }
                    else {
                        _this.statetext = _this.state;
                    }
                }
            }
            console.log(_this.state);
        });
        this.storage.get('type').then(function (type) {
            if (type == "student") {
                _this.type = true;
                _this.login = true;
                _this.typeR = "student";
            }
        });
        this.storage.get('id').then(function (id) {
            _this.name = id;
        });
        this.storage.get('id').then(function (id) {
            _this.id = id;
        });
        this.storage.get('fullname').then(function (fullname) {
            _this.fullname = fullname;
        });
        this.storage.get('firstname').then(function (firstname) {
            _this.firstname = firstname;
        });
        this.storage.get('lastname').then(function (lastname) {
            _this.lastname = lastname;
        });
        this.storage.get('scoreTable').then(function (scoreTable) {
            for (var i = 0; i < scoreTable.length; i++) {
                if (scoreTable[i].id == idCode) {
                    if (scoreTable[i].score != 0) {
                        _this.scoreTable.push({
                            stage: scoreTable[i].stage,
                            substage: scoreTable[i].substage,
                            score: scoreTable[i].score
                        });
                        _this.totalscore = _this.totalscore + scoreTable[i].score;
                    }
                }
            }
        });
        this.readypro = true;
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.openMenu = function () {
        this.navCtrl.pop();
    };
    ProfilePage.prototype.loginCMU = function () {
        this.logout();
        this.navCtrl.push('LoginPage');
    };
    ProfilePage.prototype.openMap = function (stage, substage) {
        console.log(stage);
        console.log(substage);
        // this.setLastStage(state);
        this.navCtrl.setRoot('PlaygamePage', {
            substate: substage,
            state: stage
        });
    };
    ProfilePage.prototype.logout = function () {
        this.storage.remove('type').then(function () {
            console.log('type has been removed');
        });
        this.storage.remove('staticTable').then(function () {
            console.log('staticTable has been removed');
        });
        this.storage.remove('vocabTable').then(function () {
            console.log('vocabTable has been removed');
        });
        this.storage.remove('id').then(function () {
            console.log('id has been removed');
            //this.navCtrl.setRoot(HomePage);
            document.location.href = "/";
        });
        // this.storage.clear().then(() => {
        //   console.log('Keys have been cleared');
        // });
        this.storage.remove('fullname');
        this.storage.remove('firstname');
        this.storage.remove('lastname');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\profile\profile.html"*/'<ion-content>\n\n<ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n  <div *ngIf = "readypro;else ready">\n\n    <ion-row class="gray">\n\n      <ion-col>\n\n        <img class="returnlesson" (click) = "openMenu()" src="assets/imgs/return.PNG">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-grid class="violet">\n\n      <h1 class="profile">PROFILE</h1>\n\n      <div class="datafile" *ngIf = "type;else quest">Firstname&emsp;&nbsp;&nbsp;: {{firstname}}  <br/>\n\n      Lastname&emsp;&nbsp;&nbsp;: {{lastname}}    <br/>\n\n      studentID&emsp;&nbsp;&nbsp;&nbsp;: {{id}}   <br/>\n\n      Stage clear&emsp;: {{statetext}}<br/>\n\n      Total Score&emsp;: {{totalscore}}</div>\n\n      <ng-template #quest>\n\n         <div class="datafile">Name&emsp;&nbsp;&emsp;&emsp;: {{name}}  <br/>\n\n      Stage clear&emsp;&nbsp;: {{statetext}}<br/>\n\n      Total Score&emsp;: {{totalscore}}</div>\n\n      </ng-template>\n\n    <div *ngIf = "!login" >\n\n      <button ion-button class="profileA" (click) = "loginCMU()">login with CMU Mail</button> \n\n    </div>\n\n      <button ion-button class="profileB" (click) = "logout()">logout</button>\n\n    </ion-grid>\n\n\n\n    <div class="textscorepro">SCORE</div>\n\n    <img class="propic" src="assets/imgs/question/violetques.png">\n\n\n\n    <ion-grid class="violet betweentable tablescore">\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          Stage\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          Score (20)\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          PLAY\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid class="tablescore">\n\n      <!-- <ion-row *ngFor="let score of score"> -->\n\n      <ion-row *ngFor = "let score of scoreTable">\n\n        <ion-col col-4>\n\n          {{score.stage}}-{{score.substage}}\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          {{score.score}}\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-icon class="iconplay" ios="ios-arrow-dropright" md="md-arrow-dropright" (click) = "openMap(score.stage,score.substage)"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <ng-template #ready>\n\n    <img class="readyload" src="assets/imgs/loading/lg.palette-rotating-ring-loader.gif">\n\n</ng-template>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map