System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var mygames, GameJoin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            mygames = [
                {
                    id: 1,
                    name: 'who wants to murder a millionare',
                    started: false
                }
            ];
            GameJoin = (function () {
                function GameJoin() {
                    this.games = mygames;
                    this.showmore = false;
                }
                GameJoin.prototype.toggle = function (value) {
                    this.showmore = !this.showmore;
                };
                GameJoin = __decorate([
                    core_1.Component({
                        selector: 'game-join',
                        template: "\n      <ul>\n        <li *ngFor=\"#game of games\">\n          <div>\n            {{ game.name }} <a (click)=\"toggle()\">...</a>\n            <br/>\n            <div [hidden]=\"!showmore\">\n            <label for=\"playerName\">name: </label>\n            <input id=\"playerName\">\n            <button>Join</button>\n            </div>\n          </div>\n        </li>\n      </ul>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], GameJoin);
                return GameJoin;
            }());
            exports_1("GameJoin", GameJoin);
        }
    }
});
//# sourceMappingURL=game-join.js.map