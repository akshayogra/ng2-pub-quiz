import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, NgZone} from 'angular2/core';
import {GameJoin} from './game-join';
import {GamePlay} from './game-play';
import {PlayerService} from './player-service';

// import {Observable} from 'rxjs/observable';
import RxfromIO from './RxFromIO';
// import 'rxjs/add/observable/of';
import Rx from 'rxjs/Rx';



@Component({
    selector: 'my-app',
    template: `
        <h1>ng-2 Pub Quiz</h1>

        <!-- display the game join component while waiting for players -->
        <div *ngIf="waitingForPlayers">
          <game-join></game-join>
        </div>

        <!-- display the game screen if we're not waiting for players -->
        <div *ngIf="!waitingForPlayers">
          <game-play></game-play>
        </div>
        <p></p>
    `,
    directives: [GameJoin, GamePlay]
})
export class AppComponent {
  gameStart$ = RxfromIO('gameStart');
  waitingForPlayers = true;
  constructor(private _ngZone: NgZone) {}
  ngOnInit() {
    RxfromIO('timeLeftInRound')
      .subscribe(body => { console.log('timeLeftInRound', body)});

    this.gameStart$.subscribe(value => {
      this._ngZone.run(() => this.waitingForPlayers = false);
    });
  }
}
