System.register(['angular2/core', './player-service'], function(exports_1, context_1) {
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
    var core_1, player_service_1;
    var GamePlay;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            }],
        execute: function() {
            GamePlay = (function () {
                function GamePlay(playerSvc) {
                    this.playerSvc = playerSvc;
                    this.answers = [
                        "Answer One", "Answer Two", "Answer the Third", "Answer Four"
                    ];
                    this.player = this.playerSvc.getPlayer();
                    console.log('this player is: ', this.player);
                }
                GamePlay.prototype.submitAnswer = function (answer) {
                    console.log('you answered answer number: ', answer);
                };
                GamePlay = __decorate([
                    core_1.Component({
                        selector: 'game-play',
                        template: "\n    <h2>Playing a quiz!</h2>\n    <div *ngIf=\"betweenQuestions\">\n      <h1>Get Ready!</h1>\n    </div>\n\n    <div *ngIf=\"!betweenQuestions\">\n      <h2>{{ question }}</h2>\n      <button *ngFor=\"#answer of answers; #idx = index\" (click)=\"submitAnswer(idx)\">{{ answer }}</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService])
                ], GamePlay);
                return GamePlay;
            }());
            exports_1("GamePlay", GamePlay);
        }
    }
});
//# sourceMappingURL=game-play.js.map