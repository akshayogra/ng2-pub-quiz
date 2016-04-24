import {Component} from 'angular2/core';
import {Player, PlayerService} from './player-service'


@Component({
  selector: 'game-play',
  template: `
    <h2>Playing a quiz!</h2>
    <div *ngIf="betweenQuestions">
      <h1>Get Ready!</h1>
    </div>

    <div *ngIf="!betweenQuestions">
      <h2>{{ question }}</h2>
      <button *ngFor="#answer of answers; #idx = index" (click)="submitAnswer(idx)">{{ answer }}</button>
    </div>
  `
})
export class GamePlay {
  answers = [
    "Answer One", "Answer Two", "Answer the Third", "Answer Four"
  ]
  player: Player;
  constructor(public playerSvc: PlayerService) {
    this.player = this.playerSvc.getPlayer();
    console.log('this player is: ', this.player);
  }
  submitAnswer(answer) {
    console.log('you answered answer number: ', answer)
  }
}
