webpackJsonp([7],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
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
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, storage, toastCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.recent_main_stage = 1; //stage for playgamepage
        this.readymap = false; //for load picture
        this.totalscore = navParams.get('totalscore');
        this.data = navParams.get('data');
    }
    MapPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var UserID;
        this.storage.get('id').then(function (id) {
            UserID = id;
        });
        this.storage.get('stageTable').then(function (stageTable) {
            _this.stageTable = stageTable;
            console.log(_this.stageTable);
            for (var i = 0; i < stageTable.length; i++) {
                if (stageTable[i].id == UserID) {
                    _this.stage = _this.stageTable[i].stage;
                }
            }
            console.log(_this.stage);
            _this.setMap();
            _this.readymap = true; //load success
        });
    };
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n       <img src=\"assets/imgs/loading/lg.palette-rotating-ring-loader.gif\">     \n     "
        });
        // loading.onDidDismiss(() => {
        //   console.log('Dismissed loading');
        // });
        this.loading.present();
    };
    MapPage.prototype.setMap = function () {
        if (this.stage == "1-0") {
            this.maponezero();
            this.recent_main_stage = 1;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
        else if (this.stage == "1-1") {
            this.maponeone();
            this.recent_main_stage = 1;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 2;
        }
        else if (this.stage == "1-2") {
            this.maponetwo();
            this.recent_main_stage = 1;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 3;
        }
        else if (this.stage == "1-3") {
            this.maponethree();
            this.recent_main_stage = 2;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
        else if (this.stage == "2-1") {
            this.maptwoone();
            this.recent_main_stage = 2;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 2;
        }
        else if (this.stage == "2-2") {
            this.maptwotwo();
            this.recent_main_stage = 2;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 3;
        }
        else if (this.stage == "2-3") {
            this.maptwothree();
            this.recent_main_stage = 3;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
        else if (this.stage == "3-1") {
            this.mapthreeone();
            this.recent_main_stage = 3;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 2;
        }
        else if (this.stage == "3-2") {
            this.mapthreetwo();
            this.recent_main_stage = 3;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 3;
        }
        else if (this.stage == "3-3") {
            this.mapthreethree();
            this.recent_main_stage = 4;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
        else if (this.stage == "4-1") {
            this.mapfourone();
            this.recent_main_stage = 4;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 2;
        }
        else if (this.stage == "4-2") {
            this.mapfourtwo();
            this.recent_main_stage = 4;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 3;
        }
        else if (this.stage == "4-3") {
            this.mapfourthree();
            this.recent_main_stage = 5;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
        else if (this.stage == "5-1") {
            this.mapfiveone();
            this.recent_main_stage = 5;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 2;
        }
        else if (this.stage == "5-2") {
            this.mapfivetwo();
            this.recent_main_stage = 5;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 3;
        }
        else if (this.stage == "5-3") {
            this.mapfivethree();
            this.recent_main_stage = 6;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
        else if (this.stage == "6-1") {
            this.mapsixone();
            this.recent_main_stage = 6;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 2;
        }
        else if (this.stage == "6-2") {
            this.mapsixtwo();
            this.recent_main_stage = 6;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 3;
        }
        else if (this.stage == "6-3") {
            this.mapsixthree();
            this.recent_main_stage = 7;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
        else if (this.stage == "7-1") {
            this.mapsevenone();
            this.recent_main_stage = 7;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 2;
        }
        else if (this.stage == "7-2") {
            this.mapseventwo();
            this.recent_main_stage = 7;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 3;
        }
        else if (this.stage == "7-3") {
            this.mapseventhree();
            this.recent_main_stage = 8;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
        else if (this.stage == "8-1") {
            this.mapeightone();
            this.recent_main_stage = 8;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 2;
        }
        else if (this.stage == "8-2") {
            this.mapeighttwo();
            this.recent_main_stage = 8;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 3;
        }
        else if (this.stage == "8-3") {
            this.mapeightthree();
            this.recent_main_stage = 8;
            this.stagepage = this.recent_main_stage;
            this.latest_sub_stage = 1;
        }
    };
    MapPage.prototype.openQues = function (index) {
        if (index < this.recent_main_stage) {
            //check latest_sub_stage
            if (index + 1 == this.recent_main_stage) {
                this.navCtrl.setRoot('PlaygamePage', {
                    state: this.stagepage,
                    data: this.data,
                    substate: this.latest_sub_stage,
                    lastStage: this.recent_main_stage,
                    totalscore: this.totalscore
                });
            }
            else {
                this.navCtrl.setRoot('PlaygamePage', {
                    substate: 1,
                    state: index + 1,
                    lastStage: this.recent_main_stage,
                    totalscore: this.totalscore
                });
            }
        }
        else {
            this.presentToast();
        }
    };
    MapPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Stage locked, Clear lower stages first',
            duration: 1000,
            position: 'middle',
            cssClass: 'toaststate'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MapPage.prototype.openMenu = function () {
        this.navCtrl.push('MenuPage');
    };
    //set picture map
    MapPage.prototype.maponezero = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-0.jpg",
            "assets/imgs/map/1-2-2-0-0.jpg",
            "assets/imgs/map/1-2-3-0-0.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.maponeone = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-1.jpg",
            "assets/imgs/map/1-2-2-0-0.jpg",
            "assets/imgs/map/1-2-3-0-0.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.maponetwo = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-2.jpg",
            "assets/imgs/map/1-2-2-0-0.jpg",
            "assets/imgs/map/1-2-3-0-0.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.maponethree = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-0.jpg",
            "assets/imgs/map/1-2-3-0-0.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.maptwoone = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-1.jpg",
            "assets/imgs/map/1-2-3-0-0.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.maptwotwo = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-2.jpg",
            "assets/imgs/map/1-2-3-0-0.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.maptwothree = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-0new.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapthreeone = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-1.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapthreetwo = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-2.jpg",
            "assets/imgs/map/1-3-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapthreethree = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-0-0.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapfourone = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-1.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapfourtwo = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-2.jpg",
            "assets/imgs/map/1-4-0.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapfourthree = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-3.jpg",
            "assets/imgs/map/1-4-0-1.jpg",
            "assets/imgs/map/1-5-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapfiveone = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-1.jpg",
            "assets/imgs/map/1-4-1.jpg",
            "assets/imgs/map/1-5-0-0.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapfivetwo = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-2.jpg",
            "assets/imgs/map/1-4-2.jpg",
            "assets/imgs/map/1-5-0-1.jpg",
            "assets/imgs/map/1-5-2-0.jpg"
        ];
    };
    MapPage.prototype.mapfivethree = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-0-2.jpg",
            "assets/imgs/map/1-5-2-0-0.jpg"
        ];
    };
    MapPage.prototype.mapsixone = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-1.jpg",
            "assets/imgs/map/1-5-2-0-0.jpg"
        ];
    };
    MapPage.prototype.mapsixtwo = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-2.jpg",
            "assets/imgs/map/1-5-2-0-0.jpg"
        ];
    };
    MapPage.prototype.mapsixthree = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-3.jpg",
            "assets/imgs/map/1-5-2-0-1.jpg"
        ];
    };
    MapPage.prototype.mapsevenone = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-3-0.jpg",
            "assets/imgs/map/1-5-2-7-1.jpg"
        ];
    };
    MapPage.prototype.mapseventwo = function () {
        this.stagepic = [
            "assets/imgs/map/1up-0-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-3-0.jpg",
            "assets/imgs/map/1-5-2-7-2.jpg"
        ];
    };
    MapPage.prototype.mapseventhree = function () {
        this.stagepic = [
            "assets/imgs/map/1-8-0.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-3-0.jpg",
            "assets/imgs/map/1-5-2-7-3.jpg"
        ];
    };
    MapPage.prototype.mapeightone = function () {
        this.stagepic = [
            "assets/imgs/map/1-8-1.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-3-0.jpg",
            "assets/imgs/map/1-5-2-7-3.jpg"
        ];
    };
    MapPage.prototype.mapeighttwo = function () {
        this.stagepic = [
            "assets/imgs/map/1-8-3.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-3-0.jpg",
            "assets/imgs/map/1-5-2-7-3.jpg"
        ];
    };
    MapPage.prototype.mapeightthree = function () {
        this.stagepic = [
            "assets/imgs/map/1-8-4.jpg",
            "assets/imgs/map/1-1-3.jpg",
            "assets/imgs/map/1-2-2-3.jpg",
            "assets/imgs/map/1-2-3-3.jpg",
            "assets/imgs/map/1-3-4-3.jpg",
            "assets/imgs/map/1-4-3.jpg",
            "assets/imgs/map/1-5-1-6-3-0.jpg",
            "assets/imgs/map/1-5-2-7-3.jpg"
        ];
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\map\map.html"*/'<ion-content>\n\n  <ion-grid class="nopadding fixheight" *ngIf="readymap;else ready">\n\n    \n\n    <ion-grid>\n\n      <ion-row>\n\n        \n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n        <ion-col class="gray" col-10  col-xl-6>\n\n          <img class="return" (click)="openMenu()" src="assets/imgs/return.PNG">\n\n        </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n        <ion-row> \n\n          <ion-col col-9>\n\n            <div class="stagemap">stage map</div>\n\n            <div class="textstate textstate1">stage 1 : KYUSHU</div>\n\n            <div class="textstate textstate2">stage 2 : SHIKOKU</div>\n\n            <div class="textstate textstate3">stage 3 : CHUGOKU</div>\n\n            <div class="textstate textstate4">stage 4 : KANSAI</div>\n\n            <div class="textstate textstate5">stage 5 : HOKURIKU</div>\n\n            <div class="textstate textstate6">stage 6 : KANTO</div>\n\n            <div class="textstate textstate7">stage 7 : TOHOKU</div>\n\n            <div class="textstate textstate8">stage 8 : HOKKAIDO</div>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <img class="statehok" (click)="openQues(7)" src="{{stagepic[0]}}">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n        <ion-row class="nopadding">\n\n          <ion-col col-3 class="nopadding">\n\n            <img class="state1" (click)="openQues(0)" src="{{stagepic[1]}}">\n\n          </ion-col>\n\n          <ion-col col-2 class="nopadding">\n\n            <ion-row class="nopadding">\n\n              <ion-col col-12 class="nopadding">\n\n                <img class="state2" (click)="openQues(2)" src="{{stagepic[3]}}">\n\n              </ion-col>\n\n              <ion-col col-12 class="nopadding">\n\n                <img class="state22" (click)="openQues(1)" src="{{stagepic[2]}}">\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-2 class="nopadding">\n\n            <img class="state3" (click)="openQues(3)" src="{{stagepic[4]}}">\n\n          </ion-col>\n\n          <ion-col col-2 class="nopadding">\n\n            <img class="state4" (click)="openQues(4)" src="{{stagepic[5]}}">\n\n          </ion-col>\n\n          <ion-col col-3 class="nopadding">\n\n            <ion-row class="nopadding">\n\n              <ion-col col-12 class="nopadding">\n\n                <img class="state5" (click)="openQues(6)" src="{{stagepic[7]}}">\n\n              </ion-col>\n\n              <ion-col col-12 class="nopadding">\n\n                <img class="state55" (click)="openQues(5)" src="{{stagepic[6]}}">\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n    <p class="clickmap">*Click map for start*</p>\n\n  </ion-grid>\n\n\n\n  <ng-template #ready>\n\n    <img class="readyload" src="assets/imgs/loading/lg.palette-rotating-ring-loader.gif">\n\n  </ng-template>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=7.js.map