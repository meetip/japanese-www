webpackJsonp([2],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygamePageModule", function() { return PlaygamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playgame__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaygamePageModule = /** @class */ (function () {
    function PlaygamePageModule() {
    }
    PlaygamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__playgame__["a" /* PlaygamePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__playgame__["a" /* PlaygamePage */]),
            ],
        })
    ], PlaygamePageModule);
    return PlaygamePageModule;
}());

//# sourceMappingURL=playgame.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaygamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PlaygamePage = /** @class */ (function () {
    function PlaygamePage(navCtrl, alerCtrl, navParams, http, storage, modal, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.debug = true;
        this.ques = []; //don't use
        this.indexques = 0; //move question in state
        this.indexquessub = 0; //move question insubstate
        this.score = 0; //score in substate
        this.totalscore = 0; //score in state
        this.life = 5;
        this.substate = 1; // substate in page for change question
        this.url = 'http://159.65.142.130/api/getQuestion/';
        this.state = 1; // for change color
        this.quesqic = "assets/imgs/question/pinkques.PNG";
        this.choicecolor = [
            "choice",
            "choice",
            "choice",
            "choice"
        ]; //for change color text
        this.choicepic = [
            "assets/imgs/question/oranC.PNG",
            "assets/imgs/question/oranC.PNG",
            "assets/imgs/question/oranC.PNG",
            "assets/imgs/question/oranC.PNG"
        ]; //for change color picture
        this.controlclick = 0; //for cheack double touch
        this.cutchoiceclick = 0; //for cheack number in use
        this.itemtimeclick = 0; //for cheack number in use
        this.itemskipclick = 0; //for cheack number in use
        this.checkcutchoice = [
            true,
            true,
            true,
            true
        ]; //for cheack "cut can't touch"
        this.tryQ = false; //for loading data
        this.timestate = [
            65,
            60,
            55,
            50,
            45,
            40,
            35,
            30
        ]; // time each  state
        this.timeindex = 0; //assign time
        this.timeready = false; //don't use
        this.manageTab = [
            "managecolorstage",
            "managecolor",
            "managecolor",
            "managecolor",
            "managecolor",
            "managecolor",
            "managecolor",
            "managecolor",
        ];
        this.static = [];
        this.indexstatic = 0;
        this.staticquestion = [];
        this.vocabstatic = [];
        this.staticForSave = [];
        this.stateData = navParams.get('substate');
        this.statepage = navParams.get('state');
        this.totalscore = navParams.get('totalscore');
        this.data = navParams.get('data');
        this.lastStage = navParams.get('lastStage');
        console.log("playG state" + this.stateData);
        console.log("playG state" + this.state);
        console.log("Play totalsc" + this.totalscore);
        console.log("play data" + this.data);
        if (this.stateData !== undefined) {
            this.substate = this.stateData;
            this.state = this.statepage;
            if (this.substate == 2) {
                if (this.data !== undefined) {
                    this.indexques = 20;
                    this.question = this.data;
                    this.changeColor();
                    this.setQuestion();
                    this.readypage();
                }
                else {
                    this.getQuestion();
                }
            }
            else if (this.substate == 3) {
                if (this.data !== undefined) {
                    this.indexques = 40;
                    this.question = this.data;
                    this.changeColor();
                    this.setQuestion();
                    this.readypage();
                }
                else {
                    this.getQuestion();
                }
            }
            else if (this.substate == 1) {
                this.getQuestion();
            }
        }
        else {
            this.getQuestion();
        }
        if (this.totalscore === undefined) {
            this.totalscore = this.score;
        }
    }
    PlaygamePage.prototype.ngOnInit = function () {
        // this.initTimer();
        // this.dataques();
    };
    PlaygamePage.prototype.ionViewCanLeave = function () {
        this.timer.runTimer = false;
    };
    PlaygamePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('type').then(function (type) {
            _this.typeForSave = type;
        });
        this.storage.get('id').then(function (id) {
            _this.idCode = id;
        });
        this.storage.get('itemTable').then(function (itemTable) {
            if (itemTable != null) {
                var data1 = itemTable;
                for (var i = 0; i < data1.length; i++) {
                    if (data1[i].id == _this.idCode) {
                        _this.numitemcut = data1[i].itemC;
                        _this.numitemskip = data1[i].itemS;
                        _this.numitemtime = data1[i].itemA;
                    }
                }
            }
        });
        this.storage.get('staticTable').then(function (staticTable) {
            if (staticTable != null) {
                for (var i = 0; i < staticTable.length; i++) {
                    if (staticTable[i].UserID == _this.idCode) {
                        if (staticTable[i].stage == _this.state && staticTable[i].substate >= _this.substate) {
                            _this.staticquestion.push(staticTable[i]);
                        }
                    }
                }
                console.log("staticquestion = " + _this.staticquestion);
            }
        });
        this.storage.get('vocabTable').then(function (vocabTable) {
            if (vocabTable != null) {
                _this.vocabstatic = vocabTable;
                console.log(_this.vocabstatic);
            }
        });
    };
    PlaygamePage.prototype.initTimer = function () {
        this.timeInSeconds = this.timestate[this.timeindex];
        console.log(this.timeInSeconds);
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.timer.secondsRemaining.toString();
        this.timer.runTimer = true;
        this.timerTick();
    };
    PlaygamePage.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            //   console.log("this.timer.displayTime : "+ this.timer.secondsRemaining);
            if (!_this.timer.runTimer) {
                console.log("OUTTTTTTT");
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.timer.secondsRemaining.toString();
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                if (_this.checkQueStatic) {
                    _this.saveStatic(_this.staticquestion[_this.indexstatic]);
                }
                else {
                    _this.saveStatic(_this.question.question[_this.indexques]);
                }
                _this.life--;
                _this.presentToast();
            }
        }, 1000);
    };
    PlaygamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaygamePage');
    };
    PlaygamePage.prototype.getQuestion = function () {
        this.getCall();
    };
    PlaygamePage.prototype.readypage = function () {
        var _this = this;
        setTimeout(function () {
            _this.tryQ = true;
            _this.initTimer();
        }, 5500);
    };
    PlaygamePage.prototype.getCall = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + _this.statepage, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.question = data;
                _this.saveVocab();
                console.log(_this.question.question[_this.indexques].stem.romanji);
                _this.changeColor();
                _this.setQuestion();
                _this.initTimer();
                _this.tryQ = true;
                resolve(data);
            }, function (error) {
                console.log('API Error : ', error.status);
                console.log('API Error : ', JSON.stringify(error));
                _this.getCall();
                reject(error.json());
            });
        });
    };
    PlaygamePage.prototype.saveVocab = function () {
        var _this = this;
        this.storage.get('vocabTable').then(function (vocabTable) {
            if (vocabTable != null) {
                var vocab = vocabTable;
                var checkvocab = 0;
                for (var i = 0; i < _this.question.question.length; i++) {
                    for (var j = 0; j < vocabTable.length; j++) {
                        if (_this.question.question[i].stem.vocabID == vocab[j].stem.vocabID) {
                            checkvocab = 1;
                        }
                    }
                    if (checkvocab != 1) {
                        console.log("vocab no have");
                        vocab.push({
                            choices: [{
                                    vocabID: _this.question.question[i].choices[0].vocabID,
                                    hiragana: _this.question.question[i].choices[0].hiragana,
                                    romanji: _this.question.question[i].choices[0].romanji,
                                    thai: _this.question.question[i].choices[0].thai
                                }, {
                                    vocabID: _this.question.question[i].choices[1].vocabID,
                                    hiragana: _this.question.question[i].choices[1].hiragana,
                                    romanji: _this.question.question[i].choices[1].romanji,
                                    thai: _this.question.question[i].choices[1].thai
                                }, {
                                    vocabID: _this.question.question[i].choices[2].vocabID,
                                    hiragana: _this.question.question[i].choices[2].hiragana,
                                    romanji: _this.question.question[i].choices[2].romanji,
                                    thai: _this.question.question[i].choices[2].thai
                                }, {
                                    vocabID: _this.question.question[i].choices[3].vocabID,
                                    hiragana: _this.question.question[i].choices[3].hiragana,
                                    romanji: _this.question.question[i].choices[3].romanji,
                                    thai: _this.question.question[i].choices[3].thai
                                }],
                            stem: {
                                vocabID: _this.question.question[i].stem.vocabID,
                                hiragana: _this.question.question[i].stem.hiragana,
                                romanji: _this.question.question[i].stem.romanji,
                                thai: _this.question.question[i].stem.thai
                            },
                            UserID: _this.idCode
                        });
                        checkvocab = 0;
                    }
                }
                _this.storage.set('vocabTable', vocab);
            }
            else {
                var datas = [];
                for (var i = 0; i < _this.question.question.length; i++) {
                    datas.push({
                        choices: [{
                                vocabID: _this.question.question[i].choices[0].vocabID,
                                hiragana: _this.question.question[i].choices[0].hiragana,
                                romanji: _this.question.question[i].choices[0].romanji,
                                thai: _this.question.question[i].choices[0].thai
                            }, {
                                vocabID: _this.question.question[i].choices[1].vocabID,
                                hiragana: _this.question.question[i].choices[1].hiragana,
                                romanji: _this.question.question[i].choices[1].romanji,
                                thai: _this.question.question[i].choices[1].thai
                            }, {
                                vocabID: _this.question.question[i].choices[2].vocabID,
                                hiragana: _this.question.question[i].choices[2].hiragana,
                                romanji: _this.question.question[i].choices[2].romanji,
                                thai: _this.question.question[i].choices[2].thai
                            }, {
                                vocabID: _this.question.question[i].choices[3].vocabID,
                                hiragana: _this.question.question[i].choices[3].hiragana,
                                romanji: _this.question.question[i].choices[3].romanji,
                                thai: _this.question.question[i].choices[3].thai
                            }],
                        stem: {
                            vocabID: _this.question.question[i].stem.vocabID,
                            hiragana: _this.question.question[i].stem.hiragana,
                            romanji: _this.question.question[i].stem.romanji,
                            thai: _this.question.question[i].stem.thai
                        },
                        UserID: _this.idCode
                    });
                }
                _this.storage.set('vocabTable', datas);
            }
        });
    };
    PlaygamePage.prototype.setQuestion = function () {
        var rans = Math.floor(Math.random() * 4);
        if (rans == 1) {
            console.log("static wrong");
            if (this.staticquestion.length != 0) {
                // if(this.indexstatic < this.staticquestion.length){
                this.checkQueStatic = true;
                var ranstaic = Math.floor(Math.random() * this.staticquestion.length);
                console.log("this.staticquestion.length: " + this.staticquestion.length);
                console.log("ranstaic: " + ranstaic);
                this.indexstatic = ranstaic;
                var ran = Math.floor(Math.random() * 4);
                if (this.substate == 1) {
                    if (this.debug) {
                        this.questionQ = this.staticquestion[ranstaic].stem.hiragana;
                    }
                    else {
                        this.questionQ = this.staticquestion[ranstaic].stem.hiragana;
                    }
                    this.stateData = this.substate + 1;
                    if (ran == 0) {
                        this.choice1 = this.staticquestion[ranstaic].choices[0].thai;
                        this.choice2 = this.staticquestion[ranstaic].choices[1].thai;
                        this.choice3 = this.staticquestion[ranstaic].choices[2].thai;
                        this.choice4 = this.staticquestion[ranstaic].choices[3].thai;
                        this.key = 0;
                    }
                    else if (ran == 1) {
                        this.choice1 = this.staticquestion[ranstaic].choices[1].thai;
                        this.choice2 = this.staticquestion[ranstaic].choices[2].thai;
                        this.choice3 = this.staticquestion[ranstaic].choices[3].thai;
                        this.choice4 = this.staticquestion[ranstaic].choices[0].thai;
                        this.key = 3;
                    }
                    else if (ran == 2) {
                        this.choice1 = this.staticquestion[ranstaic].choices[2].thai;
                        this.choice2 = this.staticquestion[ranstaic].choices[3].thai;
                        this.choice3 = this.staticquestion[ranstaic].choices[0].thai;
                        this.choice4 = this.staticquestion[ranstaic].choices[1].thai;
                        this.key = 2;
                    }
                    else if (ran == 3) {
                        this.choice1 = this.staticquestion[ranstaic].choices[3].thai;
                        this.choice2 = this.staticquestion[ranstaic].choices[0].thai;
                        this.choice3 = this.staticquestion[ranstaic].choices[1].thai;
                        this.choice4 = this.staticquestion[ranstaic].choices[2].thai;
                        this.key = 1;
                    }
                }
                else if (this.substate == 2) {
                    var ransub2 = Math.floor(Math.random() * 2);
                    this.stateData = this.substate + 1;
                    if (ransub2 == 0) {
                        if (this.debug) {
                            this.questionQ = this.staticquestion[ranstaic].stem.hiragana;
                        }
                        else {
                            this.questionQ = this.staticquestion[ranstaic].stem.hiragana;
                        }
                        if (ran == 0) {
                            this.choice1 = this.staticquestion[ranstaic].choices[0].thai;
                            this.choice2 = this.staticquestion[ranstaic].choices[1].thai;
                            this.choice3 = this.staticquestion[ranstaic].choices[2].thai;
                            this.choice4 = this.staticquestion[ranstaic].choices[3].thai;
                            this.key = 0;
                        }
                        else if (ran == 1) {
                            this.choice1 = this.staticquestion[ranstaic].choices[1].thai;
                            this.choice2 = this.staticquestion[ranstaic].choices[2].thai;
                            this.choice3 = this.staticquestion[ranstaic].choices[3].thai;
                            this.choice4 = this.staticquestion[ranstaic].choices[0].thai;
                            this.key = 3;
                        }
                        else if (ran == 2) {
                            this.choice1 = this.staticquestion[ranstaic].choices[2].thai;
                            this.choice2 = this.staticquestion[ranstaic].choices[3].thai;
                            this.choice3 = this.staticquestion[ranstaic].choices[0].thai;
                            this.choice4 = this.staticquestion[ranstaic].choices[1].thai;
                            this.key = 2;
                        }
                        else if (ran == 3) {
                            this.choice1 = this.staticquestion[ranstaic].choices[3].thai;
                            this.choice2 = this.staticquestion[ranstaic].choices[0].thai;
                            this.choice3 = this.staticquestion[ranstaic].choices[1].thai;
                            this.choice4 = this.staticquestion[ranstaic].choices[2].thai;
                            this.key = 1;
                        }
                    }
                    else {
                        if (this.debug) {
                            this.questionQ = this.staticquestion[ranstaic].stem.thai;
                        }
                        else {
                            this.questionQ = this.staticquestion[ranstaic].stem.thai;
                        }
                        if (ran == 0) {
                            this.choice1 = this.staticquestion[ranstaic].choices[0].hiragana;
                            this.choice2 = this.staticquestion[ranstaic].choices[1].hiragana;
                            this.choice3 = this.staticquestion[ranstaic].choices[2].hiragana;
                            this.choice4 = this.staticquestion[ranstaic].choices[3].hiragana;
                            this.key = 0;
                        }
                        else if (ran == 1) {
                            this.choice1 = this.staticquestion[ranstaic].choices[1].hiragana;
                            this.choice2 = this.staticquestion[ranstaic].choices[2].hiragana;
                            this.choice3 = this.staticquestion[ranstaic].choices[3].hiragana;
                            this.choice4 = this.staticquestion[ranstaic].choices[0].hiragana;
                            this.key = 3;
                        }
                        else if (ran == 2) {
                            this.choice1 = this.staticquestion[ranstaic].choices[2].hiragana;
                            this.choice2 = this.staticquestion[ranstaic].choices[3].hiragana;
                            this.choice3 = this.staticquestion[ranstaic].choices[0].hiragana;
                            this.choice4 = this.staticquestion[ranstaic].choices[1].hiragana;
                            this.key = 2;
                        }
                        else if (ran == 3) {
                            this.choice1 = this.staticquestion[ranstaic].choices[3].hiragana;
                            this.choice2 = this.staticquestion[ranstaic].choices[0].hiragana;
                            this.choice3 = this.staticquestion[ranstaic].choices[1].hiragana;
                            this.choice4 = this.staticquestion[ranstaic].choices[2].hiragana;
                            this.key = 1;
                        }
                    }
                }
                else if (this.substate == 3) {
                    if (this.debug) {
                        this.questionQ = this.staticquestion[ranstaic].stem.thai;
                    }
                    else {
                        this.questionQ = this.staticquestion[ranstaic].stem.thai;
                    }
                    this.stateData = this.substate + 1;
                    if (ran == 0) {
                        this.choice1 = this.staticquestion[ranstaic].choices[0].hiragana;
                        this.choice2 = this.staticquestion[ranstaic].choices[1].hiragana;
                        this.choice3 = this.staticquestion[ranstaic].choices[2].hiragana;
                        this.choice4 = this.staticquestion[ranstaic].choices[3].hiragana;
                        this.key = 0;
                    }
                    else if (ran == 1) {
                        this.choice1 = this.staticquestion[ranstaic].choices[1].hiragana;
                        this.choice2 = this.staticquestion[ranstaic].choices[2].hiragana;
                        this.choice3 = this.staticquestion[ranstaic].choices[3].hiragana;
                        this.choice4 = this.staticquestion[ranstaic].choices[0].hiragana;
                        this.key = 3;
                    }
                    else if (ran == 2) {
                        this.choice1 = this.staticquestion[ranstaic].choices[2].hiragana;
                        this.choice2 = this.staticquestion[ranstaic].choices[3].hiragana;
                        this.choice3 = this.staticquestion[ranstaic].choices[0].hiragana;
                        this.choice4 = this.staticquestion[ranstaic].choices[1].hiragana;
                        this.key = 2;
                    }
                    else if (ran == 3) {
                        this.choice1 = this.staticquestion[ranstaic].choices[3].hiragana;
                        this.choice2 = this.staticquestion[ranstaic].choices[0].hiragana;
                        this.choice3 = this.staticquestion[ranstaic].choices[1].hiragana;
                        this.choice4 = this.staticquestion[ranstaic].choices[2].hiragana;
                        this.key = 1;
                    }
                }
                this.staticquestion[ranstaic].count--;
                console.log("this.staticquestion[ranstaic].count--: " + this.staticquestion[ranstaic].count);
                this.storage.set('staticTable', this.staticquestion);
                // }
                // }else{
                //     this.checkQueStatic = false;
                //     this.setChoice();
                // }
            }
            else {
                this.checkQueStatic = false;
                this.setChoice();
            }
        }
        else {
            this.checkQueStatic = false;
            this.setChoice();
        }
    };
    PlaygamePage.prototype.setChoice = function () {
        var ran = Math.floor(Math.random() * 4);
        if (this.substate == 1) {
            this.questionQ = this.question.question[this.indexques].stem.hiragana;
            this.stateData = this.substate + 1;
            if (ran == 0) {
                this.choice1 = this.question.question[this.indexques].choices[0].thai;
                this.choice2 = this.question.question[this.indexques].choices[1].thai;
                this.choice3 = this.question.question[this.indexques].choices[2].thai;
                this.choice4 = this.question.question[this.indexques].choices[3].thai;
                this.key = 0;
            }
            else if (ran == 1) {
                this.choice1 = this.question.question[this.indexques].choices[1].thai;
                this.choice2 = this.question.question[this.indexques].choices[2].thai;
                this.choice3 = this.question.question[this.indexques].choices[3].thai;
                this.choice4 = this.question.question[this.indexques].choices[0].thai;
                this.key = 3;
            }
            else if (ran == 2) {
                this.choice1 = this.question.question[this.indexques].choices[2].thai;
                this.choice2 = this.question.question[this.indexques].choices[3].thai;
                this.choice3 = this.question.question[this.indexques].choices[0].thai;
                this.choice4 = this.question.question[this.indexques].choices[1].thai;
                this.key = 2;
            }
            else if (ran == 3) {
                this.choice1 = this.question.question[this.indexques].choices[3].thai;
                this.choice2 = this.question.question[this.indexques].choices[0].thai;
                this.choice3 = this.question.question[this.indexques].choices[1].thai;
                this.choice4 = this.question.question[this.indexques].choices[2].thai;
                this.key = 1;
            }
        }
        else if (this.substate == 2) {
            var ransub2 = Math.floor(Math.random() * 2);
            this.stateData = this.substate + 1;
            if (ransub2 == 0) {
                this.questionQ = this.question.question[this.indexques].stem.hiragana;
                if (ran == 0) {
                    this.choice1 = this.question.question[this.indexques].choices[0].thai;
                    this.choice2 = this.question.question[this.indexques].choices[1].thai;
                    this.choice3 = this.question.question[this.indexques].choices[2].thai;
                    this.choice4 = this.question.question[this.indexques].choices[3].thai;
                    this.key = 0;
                }
                else if (ran == 1) {
                    this.choice1 = this.question.question[this.indexques].choices[1].thai;
                    this.choice2 = this.question.question[this.indexques].choices[2].thai;
                    this.choice3 = this.question.question[this.indexques].choices[3].thai;
                    this.choice4 = this.question.question[this.indexques].choices[0].thai;
                    this.key = 3;
                }
                else if (ran == 2) {
                    this.choice1 = this.question.question[this.indexques].choices[2].thai;
                    this.choice2 = this.question.question[this.indexques].choices[3].thai;
                    this.choice3 = this.question.question[this.indexques].choices[0].thai;
                    this.choice4 = this.question.question[this.indexques].choices[1].thai;
                    this.key = 2;
                }
                else if (ran == 3) {
                    this.choice1 = this.question.question[this.indexques].choices[3].thai;
                    this.choice2 = this.question.question[this.indexques].choices[0].thai;
                    this.choice3 = this.question.question[this.indexques].choices[1].thai;
                    this.choice4 = this.question.question[this.indexques].choices[2].thai;
                    this.key = 1;
                }
            }
            else {
                this.questionQ = this.question.question[this.indexques].stem.thai;
                if (ran == 0) {
                    this.choice1 = this.question.question[this.indexques].choices[0].hiragana;
                    this.choice2 = this.question.question[this.indexques].choices[1].hiragana;
                    this.choice3 = this.question.question[this.indexques].choices[2].hiragana;
                    this.choice4 = this.question.question[this.indexques].choices[3].hiragana;
                    this.key = 0;
                }
                else if (ran == 1) {
                    this.choice1 = this.question.question[this.indexques].choices[1].hiragana;
                    this.choice2 = this.question.question[this.indexques].choices[2].hiragana;
                    this.choice3 = this.question.question[this.indexques].choices[3].hiragana;
                    this.choice4 = this.question.question[this.indexques].choices[0].hiragana;
                    this.key = 3;
                }
                else if (ran == 2) {
                    this.choice1 = this.question.question[this.indexques].choices[2].hiragana;
                    this.choice2 = this.question.question[this.indexques].choices[3].hiragana;
                    this.choice3 = this.question.question[this.indexques].choices[0].hiragana;
                    this.choice4 = this.question.question[this.indexques].choices[1].hiragana;
                    this.key = 2;
                }
                else if (ran == 3) {
                    this.choice1 = this.question.question[this.indexques].choices[3].hiragana;
                    this.choice2 = this.question.question[this.indexques].choices[0].hiragana;
                    this.choice3 = this.question.question[this.indexques].choices[1].hiragana;
                    this.choice4 = this.question.question[this.indexques].choices[2].hiragana;
                    this.key = 1;
                }
            }
        }
        else if (this.substate == 3) {
            this.questionQ = this.question.question[this.indexques].stem.thai;
            this.stateData = this.substate + 1;
            if (ran == 0) {
                this.choice1 = this.question.question[this.indexques].choices[0].hiragana;
                this.choice2 = this.question.question[this.indexques].choices[1].hiragana;
                this.choice3 = this.question.question[this.indexques].choices[2].hiragana;
                this.choice4 = this.question.question[this.indexques].choices[3].hiragana;
                this.key = 0;
            }
            else if (ran == 1) {
                this.choice1 = this.question.question[this.indexques].choices[1].hiragana;
                this.choice2 = this.question.question[this.indexques].choices[2].hiragana;
                this.choice3 = this.question.question[this.indexques].choices[3].hiragana;
                this.choice4 = this.question.question[this.indexques].choices[0].hiragana;
                this.key = 3;
            }
            else if (ran == 2) {
                this.choice1 = this.question.question[this.indexques].choices[2].hiragana;
                this.choice2 = this.question.question[this.indexques].choices[3].hiragana;
                this.choice3 = this.question.question[this.indexques].choices[0].hiragana;
                this.choice4 = this.question.question[this.indexques].choices[1].hiragana;
                this.key = 2;
            }
            else if (ran == 3) {
                this.choice1 = this.question.question[this.indexques].choices[3].hiragana;
                this.choice2 = this.question.question[this.indexques].choices[0].hiragana;
                this.choice3 = this.question.question[this.indexques].choices[1].hiragana;
                this.choice4 = this.question.question[this.indexques].choices[2].hiragana;
                this.key = 1;
            }
        }
    };
    PlaygamePage.prototype.switchQues = function () {
        if (this.indexques < 60) {
            this.controlclick = 0;
            this.cutchoiceclick = 0;
            this.itemtimeclick = 0;
            this.indexques++;
            this.indexquessub++;
            this.changeColor();
            this.setQuestion();
        }
        //  console.log("Q : "+this.indexques);
    };
    PlaygamePage.prototype.changeColor = function () {
        if (this.state == 1) {
            this.quesqic = "assets/imgs/question/pinkques.PNG";
            this.timeindex = 0;
            for (var i = 0; i < 4; i++) {
                this.choicecolor[i] = "choice";
                this.choicepic[i] = "assets/imgs/question/oranC.PNG";
                this.checkcutchoice[i] = true;
            }
            this.manageTab = [
                "managecolorstage",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
            ];
        }
        else if (this.state == 2) {
            this.quesqic = "assets/imgs/question/orangeques.png";
            this.timeindex = 1;
            for (var i = 0; i < 4; i++) {
                this.choicecolor[i] = "choice";
                this.choicepic[i] = "assets/imgs/question/yelloC.png";
                this.checkcutchoice[i] = true;
            }
            this.manageTab = [
                "managecolor",
                "managecolorstage",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
            ];
        }
        else if (this.state == 3) {
            this.quesqic = "assets/imgs/question/yelloques.png";
            this.timeindex = 2;
            for (var i = 0; i < 4; i++) {
                this.choicecolor[i] = "choice";
                this.choicepic[i] = "assets/imgs/question/greenC.png";
                this.checkcutchoice[i] = true;
            }
            this.manageTab = [
                "managecolor",
                "managecolor",
                "managecolorstage",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
            ];
        }
        else if (this.state == 4) {
            this.quesqic = "assets/imgs/question/greenques.png";
            this.timeindex = 3;
            for (var i = 0; i < 4; i++) {
                this.choicecolor[i] = "choice";
                this.choicepic[i] = "assets/imgs/question/darkgreenC.png";
                this.checkcutchoice[i] = true;
            }
            this.manageTab = [
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolorstage",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
            ];
        }
        else if (this.state == 5) {
            this.quesqic = "assets/imgs/question/darkgreenques.png";
            this.timeindex = 4;
            for (var i = 0; i < 4; i++) {
                this.choicecolor[i] = "choice";
                this.choicepic[i] = "assets/imgs/question/blueC.png";
                this.checkcutchoice[i] = true;
            }
            this.manageTab = [
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolorstage",
                "managecolor",
                "managecolor",
                "managecolor",
            ];
        }
        else if (this.state == 6) {
            this.quesqic = "assets/imgs/question/blueques.png";
            this.timeindex = 5;
            for (var i = 0; i < 4; i++) {
                this.choicecolor[i] = "choice";
                this.choicepic[i] = "assets/imgs/question/darkblueC.png";
                this.checkcutchoice[i] = true;
            }
            this.manageTab = [
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolorstage",
                "managecolor",
                "managecolor",
            ];
        }
        else if (this.state == 7) {
            this.quesqic = "assets/imgs/question/darkblueques.png";
            this.timeindex = 6;
            for (var i = 0; i < 4; i++) {
                this.choicecolor[i] = "choice";
                this.choicepic[i] = "assets/imgs/question/violetC.png";
                this.checkcutchoice[i] = true;
            }
            this.manageTab = [
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolorstage",
                "managecolor",
            ];
        }
        else if (this.state == 8) {
            this.quesqic = "assets/imgs/question/violetques.png";
            this.timeindex = 7;
            for (var i = 0; i < 4; i++) {
                this.choicecolor[i] = "choice";
                this.choicepic[i] = "assets/imgs/question/pinkC.png";
                this.checkcutchoice[i] = true;
            }
            this.manageTab = [
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolor",
                "managecolorstage",
            ];
        }
    };
    PlaygamePage.prototype.presentToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Time out!',
            duration: 1000,
            position: 'middle',
            cssClass: "toasttime"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
            if (_this.life == 0) {
                setTimeout(function () {
                    _this.timer.runTimer = false;
                }, 1000);
                _this.navCtrl.setRoot('LostPage', {
                    static: _this.staticForSave,
                    type: _this.typeForSave
                });
            }
            else {
                if (_this.indexquessub != 19) {
                    _this.switchQues();
                    _this.initTimer();
                }
                else {
                    _this.totalscore += _this.score;
                    _this.navCtrl.setRoot('EndsubonePage', {
                        data: _this.question,
                        totalscore: _this.totalscore,
                        score: _this.score,
                        state: _this.state,
                        substate: _this.stateData,
                        lastStage: _this.lastStage,
                        static: _this.staticForSave,
                        type: _this.typeForSave
                    });
                }
            }
        });
        toast.present();
    };
    PlaygamePage.prototype.stoptime = function () {
        var _this = this;
        if (this.life == 0) {
            setTimeout(function () {
                _this.timer.runTimer = false;
            }, 1000);
        }
        else {
            this.timer.runTimer = false;
            if (this.indexquessub != 19) {
                setTimeout(function () {
                    _this.switchQues();
                    _this.initTimer();
                }, 1000);
            }
            else {
                setTimeout(function () {
                    _this.timer.runTimer = false;
                    _this.totalscore += _this.score;
                    // if(this.stateData == 4){
                    //     this.navCtrl.setRoot('EndonePage'); 
                    // }else{
                    _this.navCtrl.setRoot('EndsubonePage', {
                        data: _this.question,
                        totalscore: _this.totalscore,
                        score: _this.score,
                        state: _this.state,
                        substate: _this.stateData,
                        lastStage: _this.lastStage,
                        static: _this.staticForSave,
                        type: _this.typeForSave
                    });
                }, 1000);
            }
        }
    };
    PlaygamePage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div class=\"fixheight\">\n     <div class=\"loadtop\">\n    </div>\n    <p class=\"textload\">State 1.{{substate}}</p>\n \n   <div>\n       <img src=\"assets/imgs/loading/giphy.gif\">     \n      </div>  \n    \n      <p class=\"textload\">loading...</p>\n      <div class=\"loadtop\">\n  \n    </div>\n      </div>"
        });
        // loading.onDidDismiss(() => {
        //   console.log('Dismissed loading');
        // });
        this.loading.present();
    };
    PlaygamePage.prototype.calulatate = function (index) {
        var _this = this;
        if (this.controlclick == 0) {
            this.controlclick = 1;
            this.indexchoice = index;
            if (this.checkcutchoice[index]) {
                if (index == this.key) {
                    if (this.checkQueStatic) {
                        if (this.staticquestion[this.indexstatic].count <= 0) {
                            this.staticquestion.splice(this.indexstatic, 1);
                            this.storage.set('staticTable', this.staticquestion);
                        }
                    }
                    this.score++;
                    this.choicecolor[index] = "choicecorrect";
                    this.choicepic[index] = "assets/imgs/correctchoice.PNG";
                    //   this.openModalCorrect();
                }
                else {
                    if (this.checkQueStatic) {
                        this.saveStatic(this.staticquestion[this.indexstatic]);
                    }
                    else {
                        this.saveStatic(this.question.question[this.indexques]);
                    }
                    this.life--;
                    this.choicecolor[index] = "choiceincorrect";
                    this.choicepic[index] = "assets/imgs/close.PNG";
                    if (this.life == 0) {
                        setTimeout(function () {
                            _this.timer.runTimer = false;
                        }, 1000);
                        this.navCtrl.setRoot('LostPage', {
                            static: this.staticForSave,
                            type: this.typeForSave
                        });
                    }
                    //   this.openModalInCorrect();
                }
                this.stoptime();
            }
            else {
                this.controlclick = 0;
            }
        }
    };
    PlaygamePage.prototype.saveStatic = function (question) {
        // this.storage.get('staticTable').then((staticTable) => {
        // if(staticTable != null){//have data
        // this.static = staticTable; 
        this.staticForSave.push({ vocabID: question.stem.vocabID });
        console.log("GGGGGGG");
        console.log("question.stem.vocabID = " + question.stem.vocabID);
        var checkstatic = false;
        for (var i = 0; i < this.staticquestion.length; i++) {
            if (question.stem.vocabID == this.staticquestion[i].stem.vocabID) {
                console.log("this.staticquestion[i].count" + this.staticquestion[i].count);
                this.staticquestion[i].count = this.staticquestion[i].count + 1;
                console.log("this.staticquestion[i].count = this.staticquestion[i].count++;" + this.staticquestion[i].count);
                checkstatic = true;
            }
        }
        if (!checkstatic) {
            if (this.staticquestion.length != 0) {
                this.static.push(this.staticquestion);
            }
            this.static.push({
                choices: [{
                        vocabID: question.choices[0].vocabID,
                        hiragana: question.choices[0].hiragana,
                        romanji: question.choices[0].romanji,
                        thai: question.choices[0].thai
                    }, {
                        vocabID: question.choices[1].vocabID,
                        hiragana: question.choices[1].hiragana,
                        romanji: question.choices[1].romanji,
                        thai: question.choices[1].thai
                    }, {
                        vocabID: question.choices[2].vocabID,
                        hiragana: question.choices[2].hiragana,
                        romanji: question.choices[2].romanji,
                        thai: question.choices[2].thai
                    }, {
                        vocabID: question.choices[3].vocabID,
                        hiragana: question.choices[3].hiragana,
                        romanji: question.choices[3].romanji,
                        thai: question.choices[3].thai
                    }],
                stem: {
                    vocabID: question.stem.vocabID,
                    hiragana: question.stem.hiragana,
                    romanji: question.stem.romanji,
                    thai: question.stem.thai
                },
                UserID: this.idCode,
                count: 1,
                stage: this.state,
                substate: this.substate
            });
            this.storage.set('staticTable', this.static);
        }
        else {
            this.storage.set('staticTable', this.staticquestion);
        }
        //   }
        // else{//new
        // let datas = [];
        // datas.push({
        //     choices: [{
        //             vocabID: question[this.indexques].choices[0].vocabID,
        //             hiragana: question[this.indexques].choices[0].hiragana,
        //             romanji: question[this.indexques].choices[0].romanji,
        //             thai: question[this.indexques].choices[0].thai
        //         },{
        //             vocabID: question[this.indexques].choices[1].vocabID,
        //             hiragana: question[this.indexques].choices[1].hiragana,
        //             romanji: question[this.indexques].choices[1].romanji,
        //             thai: question[this.indexques].choices[1].thai
        //         },{
        //             vocabID:  question[this.indexques].choices[2].vocabID,
        //             hiragana: question[this.indexques].choices[2].hiragana,
        //             romanji: question[this.indexques].choices[2].romanji,
        //             thai: question[this.indexques].choices[2].thai
        //         },{
        //             vocabID: question[this.indexques].choices[3].vocabID,
        //             hiragana: question[this.indexques].choices[3].hiragana,
        //             romanji: question[this.indexques].choices[3].romanji,
        //             thai: question[this.indexques].choices[3].thai
        //         }],
        //         stem: {
        //             vocabID: question[this.indexques].stem.vocabID,
        //             hiragana: question[this.indexques].stem.hiragana,
        //             romanji: question[this.indexques].stem.romanji,
        //             thai: question[this.indexques].stem.thai
        //         },
        //         UserID:this.idCode,
        //     count: 1             
        // });
        // this.storage.set('staticTable', datas);
        // }
        // });
        console.log(this.static);
    };
    PlaygamePage.prototype.addtime = function () {
        var _this = this;
        if (this.itemtimeclick < 2 && this.numitemtime != 0) {
            this.presentToastadd();
            this.itemtimeclick++;
            --this.numitemtime;
            this.timer.secondsRemaining += 21;
            this.storage.get('itemTable').then(function (itemTable) {
                if (itemTable != null) {
                    var data1 = itemTable;
                    for (var i = 0; i < data1.length; i++) {
                        if (data1[i].id == _this.idCode) {
                            data1[i].itemA = _this.numitemtime;
                        }
                    }
                    _this.storage.set('itemTable', data1);
                }
            });
        }
        else if (this.numitemtime == 0) {
            this.presentToastDhave();
        }
        else {
            this.presentToastDuse2();
        }
    };
    PlaygamePage.prototype.presentToastadd = function () {
        var toast = this.toastCtrl.create({
            message: 'Add Time!',
            duration: 1000,
            position: 'middle',
            cssClass: 'itemtoast'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PlaygamePage.prototype.skipQ = function () {
        var _this = this;
        if (this.itemskipclick < 2 && this.numitemskip != 0) {
            this.presentToastskip();
            this.itemskipclick++;
            this.numitemskip--;
            this.storage.get('itemTable').then(function (itemTable) {
                if (itemTable != null) {
                    var data1 = itemTable;
                    for (var i = 0; i < data1.length; i++) {
                        if (data1[i].id == _this.idCode) {
                            data1[i].itemS = _this.numitemskip;
                        }
                    }
                    _this.storage.set('itemTable', data1);
                }
            });
            this.stoptime();
        }
        else if (this.numitemskip == 0) {
            this.presentToastDhave();
        }
        else {
            this.presentToastDuse2();
        }
    };
    PlaygamePage.prototype.presentToastskip = function () {
        var toast = this.toastCtrl.create({
            message: 'Skip Question!',
            duration: 1000,
            position: 'middle',
            cssClass: 'itemtoast'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PlaygamePage.prototype.cutchoice = function () {
        var _this = this;
        if (this.cutchoiceclick == 0 && this.numitemcut != 0) {
            this.presentToastcut();
            this.numitemcut--;
            this.cutchoiceclick = 1;
            this.cutran1 = 0;
            this.cutran2 = 0;
            while (this.cutran1 == this.cutran2) {
                this.cutran1 = Math.floor(Math.random() * 4);
                while (this.cutran1 == this.key) {
                    this.cutran1 = Math.floor(Math.random() * 4);
                }
                this.cutran2 = Math.floor(Math.random() * 4);
                while (this.cutran2 == this.key) {
                    this.cutran2 = Math.floor(Math.random() * 4);
                }
                console.log(this.cutran1);
                console.log(this.cutran2);
            }
            this.choicecolor[this.cutran1] = "choicecut";
            this.choicepic[this.cutran1] = "assets/imgs/question/grayC.png";
            this.choicecolor[this.cutran2] = "choicecut";
            this.choicepic[this.cutran2] = "assets/imgs/question/grayC.png";
            this.checkcutchoice[this.cutran1] = false;
            this.checkcutchoice[this.cutran2] = false;
            this.storage.get('itemTable').then(function (itemTable) {
                if (itemTable != null) {
                    var data1 = itemTable;
                    for (var i = 0; i < data1.length; i++) {
                        if (data1[i].id == _this.idCode) {
                            data1[i].itemC = _this.numitemcut;
                        }
                    }
                    _this.storage.set('itemTable', data1);
                }
            });
        }
        else if (this.numitemcut == 0) {
            this.presentToastDhave();
        }
        else {
            this.presentToastDuse1();
        }
    };
    PlaygamePage.prototype.presentToastcut = function () {
        var toast = this.toastCtrl.create({
            message: 'Cut Choice!',
            duration: 1000,
            position: 'middle',
            cssClass: 'itemtoast'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PlaygamePage.prototype.presentToastDhave = function () {
        var toast = this.toastCtrl.create({
            message: 'You do not have item!',
            duration: 1000,
            position: 'middle',
            cssClass: 'itemtoast'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PlaygamePage.prototype.presentToastDuse1 = function () {
        var toast = this.toastCtrl.create({
            message: 'Do not use more than 1!',
            duration: 1000,
            position: 'middle',
            cssClass: 'itemtoast'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PlaygamePage.prototype.presentToastDuse2 = function () {
        var toast = this.toastCtrl.create({
            message: 'Do not use more than 2!',
            duration: 1000,
            position: 'middle',
            cssClass: 'itemtoast'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PlaygamePage.prototype, "timeInSeconds", void 0);
    PlaygamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playgame',template:/*ion-inline-start:"D:\yui\workspace\Jap_Android\src\pages\playgame\playgame.html"*/'<ion-content>\n\n  <ion-grid class="nopadding fixheight">\n\n\n\n    <ion-row>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n        <div *ngIf="tryQ;else ready">\n\n          <ion-grid class="gray">\n\n            <ion-row>\n\n              <ion-col col-6>\n\n                <ion-icon ios="ios-alarm" md="md-alarm" class="head1"></ion-icon>\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                <div class="head11"> {{timer.displayTime}} </div>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="head2">score {{score}}</div>\n\n              </ion-col>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <ion-icon class="head12" (click)="openModalCorrect()" name="heart"></ion-icon>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <div class="head22">&nbsp;{{life}}</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-row>\n\n          </ion-grid>\n\n\n\n          <ion-row>\n\n            <ion-col col-11 class="nopadding">\n\n              <ion-row class="nopadding">\n\n                <ion-col col-11 class="nopadding firstques">\n\n                  <img class="quespic" src="{{quesqic}}">\n\n                  <ion-label class="questionQ">Q.{{indexquessub+1}}/20</ion-label>\n\n                  <ion-label class="question">{{questionQ}} </ion-label>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row class="between firstch">\n\n                <ion-col col-1></ion-col>\n\n                <ion-col col-2>\n\n                  <img class="chiocepic" (click)="calulatate(0)" src="{{choicepic[0]}}">\n\n                </ion-col>\n\n                <ion-col col-8 class="{{choicecolor[0]}}" (click)="calulatate(0)">&nbsp;&nbsp;{{choice1}}</ion-col>\n\n\n\n              </ion-row>\n\n              <ion-row class="between">\n\n                <ion-col col-1></ion-col>\n\n                <ion-col col-2>\n\n                  <img class="chiocepic" (click)="calulatate(1)" src="{{choicepic[1]}}">\n\n                </ion-col>\n\n                <ion-col col-9 class="{{choicecolor[1]}}" (click)="calulatate(1)">&nbsp;&nbsp;{{choice2}}</ion-col>\n\n\n\n\n\n              </ion-row>\n\n\n\n\n\n              <ion-row class="between">\n\n                <ion-col col-1></ion-col>\n\n                <ion-col col-2>\n\n                  <img class="chiocepic" (click)="calulatate(2)" src="{{choicepic[2]}}">\n\n                </ion-col>\n\n                <ion-col col-9 class="{{choicecolor[2]}}" (click)="calulatate(2)">&nbsp;&nbsp;{{choice3}}</ion-col>\n\n\n\n\n\n              </ion-row>\n\n              <ion-row class="between">\n\n                <ion-col col-1></ion-col>\n\n                <ion-col col-2>\n\n                  <img class="chiocepic" (click)="calulatate(3)" src="{{choicepic[3]}}">\n\n                </ion-col>\n\n                <ion-col col-9 class="{{choicecolor[3]}}" (click)="calulatate(3)">&nbsp;&nbsp;{{choice4}}</ion-col>\n\n              </ion-row>\n\n\n\n              <ion-row class="firstitem">\n\n                <ion-col col-4>\n\n                  <ion-row>\n\n                    <ion-col col-12>\n\n                      <div class="numitemcut">{{numitemcut}}</div>\n\n                      <img class="itemI" (click)="cutchoice()" src="assets/imgs/5050.PNG">\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-row>\n\n                    <ion-col col-12>\n\n                      <div class="numitemcut">{{numitemskip}}</div>\n\n                      <img class="itemI" (click)="skipQ()" src="assets/imgs/skip.PNG">\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-row>\n\n                    <ion-col col-12>\n\n                      <div class="numitemcut">{{numitemtime}}</div>\n\n                      <img class="itemI" (click)="addtime()" src="assets/imgs/addtime.PNG">\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n\n\n            </ion-col>\n\n\n\n            <ion-col col-1 class="nopadding">\n\n              <ion-row class="pink {{manageTab[0]}}">\n\n              </ion-row>\n\n              <ion-row class="orange {{manageTab[1]}}">\n\n              </ion-row>\n\n              <ion-row class="yellow {{manageTab[2]}}">\n\n              </ion-row>\n\n              <ion-row class="green {{manageTab[3]}}">\n\n              </ion-row>\n\n              <ion-row class="darkgreen {{manageTab[4]}}">\n\n              </ion-row>\n\n              <ion-row class="blue {{manageTab[5]}}">\n\n              </ion-row>\n\n              <ion-row class="darkblue {{manageTab[6]}}">\n\n              </ion-row>\n\n              <ion-row class="violet {{manageTab[7]}}">\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <ng-template #ready>\n\n          <div class="fixheight">\n\n            <ion-row class="loadtop">\n\n              <ion-col col-12>\n\n              </ion-col>\n\n            </ion-row>\n\n            <p class="textload">Stage {{state}}-{{substate}}</p>\n\n            <ion-row>\n\n              <ion-col col-12 class="nopadding">\n\n                <img class="loadbub" src="assets/imgs/loading/giphy.gif">\n\n              </ion-col>\n\n            </ion-row>\n\n            <p class="textload">loading...</p>\n\n            <ion-row class="loadtop">\n\n              <ion-col col-12>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ng-template>\n\n\n\n\n\n      </ion-col>\n\n      <ion-col col-xl-3 class="hidden-lg-down bghidden"> </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\yui\workspace\Jap_Android\src\pages\playgame\playgame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PlaygamePage);
    return PlaygamePage;
}());

//# sourceMappingURL=playgame.js.map

/***/ })

});
//# sourceMappingURL=2.js.map