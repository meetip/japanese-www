webpackJsonp([8],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndsubonePageModule", function() { return EndsubonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endsubone__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EndsubonePageModule = /** @class */ (function () {
    function EndsubonePageModule() {
    }
    EndsubonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__endsubone__["a" /* EndsubonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__endsubone__["a" /* EndsubonePage */]),
            ],
        })
    ], EndsubonePageModule);
    return EndsubonePageModule;
}());

//# sourceMappingURL=endsubone.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndsubonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_call_api_call_api__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the EndsubonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EndsubonePage = /** @class */ (function () {
    function EndsubonePage(navCtrl, storage, navParams, CallApiProvider) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.CallApiProvider = CallApiProvider;
        this.textwin = " " + "がんばりましょう。";
        this.data = navParams.get('data');
        this.state = navParams.get('state');
        this.substate = navParams.get('substate');
        this.score = navParams.get('score');
        this.totalscore = navParams.get('totalscore');
        this.lastStage = navParams.get('lastStage');
        this.staticForSave = navParams.get('static');
        this.typeForSave = navParams.get('type');
        console.log("end state" + this.state);
        console.log("end state" + this.lastStage);
        console.log("end score" + this.score);
        console.log("end total" + this.totalscore);
        console.log("end data" + this.data);
    }
    EndsubonePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('id').then(function (id) {
            _this.idCode = id;
        });
        if (typeof this.lastStage != 'undefined') {
            if (this.lastStage <= this.state) {
                console.log("GGGG");
                this.storage.get('stageTable').then(function (stageTable) {
                    _this.stageTable = stageTable;
                    console.log(_this.stageTable);
                    for (var i = 0; i < stageTable.length; i++) {
                        if (stageTable[i].id == _this.idCode) {
                            _this.stageTable[i].stage = _this.state + "-" + (_this.substate - 1);
                        }
                    }
                    console.log(_this.stageTable);
                    _this.storage.set('stageTable', _this.stageTable);
                });
            }
        }
        //score
        var checkscore = 0;
        this.storage.get('scoreTable').then(function (scoreTable) {
            _this.scoreTable = scoreTable;
            if (scoreTable != null) {
                if (typeof _this.score !== 'undefined') {
                    var _loop_1 = function (i) {
                        if (scoreTable[i].id == _this.idCode) {
                            if (scoreTable[i].stage == _this.state) {
                                if (scoreTable[i].substage == (_this.substate - 1)) {
                                    if (scoreTable[i].score < _this.score) {
                                        _this.scoreTable[i].score = _this.score;
                                        checkscore = 1;
                                        _this.storage.set('scoreTable', _this.scoreTable);
                                        //saveScoreIndatabase
                                        if (_this.typeForSave == "student") {
                                            var scoreForSave_1 = [{
                                                    studentID: _this.idCode,
                                                    stage: _this.state + "-" + (_this.substate - 1),
                                                    score: _this.score
                                                }];
                                            callback = function (result) {
                                                console.log("saveScoreInDatabase: ", scoreForSave_1);
                                            };
                                            _this.CallApiProvider.getCallScoreSave(callback, scoreForSave_1);
                                        }
                                    }
                                    else {
                                        checkscore = 2;
                                    }
                                }
                            }
                        }
                    };
                    var callback;
                    for (var i = 0; i < scoreTable.length; i++) {
                        _loop_1(i);
                    }
                    if (checkscore == 0) {
                        //saveScoreIndatabase
                        if (_this.typeForSave == "student") {
                            var scoreForSave_2 = [{
                                    studentID: _this.idCode,
                                    stage: _this.state + "-" + (_this.substate - 1),
                                    score: _this.score
                                }];
                            var callback = function (result) {
                                console.log("saveScoreInDatabase: ", scoreForSave_2);
                            };
                            _this.CallApiProvider.getCallScoreSave(callback, scoreForSave_2);
                        }
                        _this.scoreTable.push({
                            id: _this.idCode,
                            stage: _this.state,
                            substage: (_this.substate - 1),
                            score: _this.score
                        });
                        _this.storage.set('scoreTable', _this.scoreTable);
                    }
                }
            }
        });
        //static save    
        if (typeof this.staticForSave !== 'undefined' && this.staticForSave.length > 0) {
            var staticVocab_1 = [{
                    "type": this.typeForSave,
                    "mistake": this.staticForSave
                }];
            var callback = function (result) {
                console.log("saveStaticInDatabase: ", staticVocab_1);
            };
            this.CallApiProvider.getCallStaticSave(callback, staticVocab_1);
        }
        if (this.substate < 4) {
            this.foot = "next " + this.state + "-" + this.substate;
        }
        else {
            this.foot = "END STATE";
        }
        if (this.score > 18) {
            this.textwin = " " + "たいへん よく できました。";
        }
        else if (this.score > 16) {
            this.textwin = " " + "よく できました。";
        }
        else {
            this.textwin = " " + "がんばりましょう。";
        }
    };
    EndsubonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EndsubonePage');
    };
    EndsubonePage.prototype.dismiss = function () {
        if (this.substate == 4) {
            if (typeof this.lastStage != 'undefined') {
                this.navCtrl.setRoot('EndonePage', {
                    // totalscore: this.totalscore,
                    state: this.state,
                    lastStage: this.lastStage
                });
            }
            else {
                this.navCtrl.setRoot('MapPage');
            }
        }
        else {
            this.navCtrl.setRoot('MapPage', {
                data: this.data,
            });
        }
    };
    EndsubonePage.prototype.openmap = function () {
        this.navCtrl.setRoot('MapPage');
    };
    EndsubonePage.prototype.openmenu = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    EndsubonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-endsubone',template:/*ion-inline-start:"D:\yui\workspace\JapanGame\JapanGame\src\pages\endsubone\endsubone.html"*/'<ion-content class="orange">\n\n<ion-grid class="nopadding fixheight">\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n  <ion-col col-12 col-xl-6>\n\n    <ion-grid class="nopadding fixheight"> \n\n    <ion-grid class="gray"> \n\n    <ion-row>\n\n \n\n    <ion-col col-2>\n\n        <img class="returnend" (click)="openmap()" src="assets/imgs/map.png">\n\n    </ion-col>\n\n    <ion-col col-8>\n\n        <div class="stateCh">STAGE {{state}} ({{state}}-1-->{{state}}-3)</div>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n         <ion-icon class="menuicon" (click)="openmenu()" ios="ios-menu" md="md-menu"></ion-icon>\n\n    </ion-col>\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <div class="textconS">Stage {{state}}-{{substate-1}} CLEAR!</div>\n\n    <p class="textcon"> {{textwin}}</p>\n\n    <div class="border"></div>\n\n    <p class="textscore">{{score}} / 20</p> \n\n    <ion-icon ios="ios-arrow-dropright-circle" md="md-arrow-dropright-circle" class="next" (click)="dismiss()"></ion-icon>\n\n    <p class="foot">{{foot}}</p>\n\n\n\n  </ion-grid>\n\n    </ion-grid>\n\n	      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\JapanGame\JapanGame\src\pages\endsubone\endsubone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_call_api_call_api__["a" /* CallApiProvider */]])
    ], EndsubonePage);
    return EndsubonePage;
}());

//# sourceMappingURL=endsubone.js.map

/***/ })

});
//# sourceMappingURL=8.js.map