System.register(['angular2/core', 'angular2/http', './game-join-service', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, game_join_service_1;
    var GameJoin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (game_join_service_1_1) {
                game_join_service_1 = game_join_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            GameJoin = (function () {
                function GameJoin(http, gameSvc) {
                    var _this = this;
                    this.games = [];
                    this.showmore = false;
                    this.gameSvc = gameSvc;
                    http.get('/games')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (games) { return _this.games = games; });
                }
                GameJoin.prototype.toggle = function (value) {
                    this.showmore = !this.showmore;
                };
                GameJoin.prototype.join = function (gameId, name) {
                    this.gameSvc
                        .joinGame(gameId, name)
                        .map(function (res) { return res.json(); })
                        .subscribe();
                };
                GameJoin = __decorate([
                    core_1.Component({
                        selector: 'game-join',
                        template: "\n      <ul>\n        <li *ngFor=\"#game of games\">\n          <div>\n            ({{game.id}}) {{ game.name }} <a (click)=\"toggle()\">...</a>\n            <br/>\n            <div [hidden]=\"!showmore\">\n            <label for=\"playerName\">name: </label>\n            <input id=\"playerName\" #playerName>\n            <button (click)=\"join(game.id, playerName.value)\">Join</button>\n            </div>\n          </div>\n        </li>\n      </ul>\n    ",
                        viewProviders: [http_1.HTTP_PROVIDERS, game_join_service_1.GameJoinService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, game_join_service_1.GameJoinService])
                ], GameJoin);
                return GameJoin;
            }());
            exports_1("GameJoin", GameJoin);
        }
    }
});
//# sourceMappingURL=game-join.js.map