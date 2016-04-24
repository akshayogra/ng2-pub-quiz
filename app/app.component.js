System.register(['angular2/core', './game-join', './game-play', './RxFromIO'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, game_join_1, game_play_1, RxFromIO_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_join_1_1) {
                game_join_1 = game_join_1_1;
            },
            function (game_play_1_1) {
                game_play_1 = game_play_1_1;
            },
            function (RxFromIO_1_1) {
                RxFromIO_1 = RxFromIO_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_ngZone) {
                    this._ngZone = _ngZone;
                    this.gameStart$ = RxFromIO_1.default('gameStart');
                    this.waitingForPlayers = true;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    RxFromIO_1.default('timeLeftInRound')
                        .subscribe(function (body) { console.log('timeLeftInRound', body); });
                    this.gameStart$.subscribe(function (value) {
                        _this._ngZone.run(function () { return _this.waitingForPlayers = false; });
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n          <div class=\"jumbotron\">\n            <h1>ng-2 Pub Quiz</h1>\n          </div>\n\n\n          <!-- display the game join component while waiting for players -->\n          <div *ngIf=\"waitingForPlayers\">\n            <game-join></game-join>\n          </div>\n\n          <!-- display the game screen if we're not waiting for players -->\n          <div *ngIf=\"!waitingForPlayers\">\n            <game-play></game-play>\n          </div>\n        </div>\n    ",
                        directives: [game_join_1.GameJoin, game_play_1.GamePlay]
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map