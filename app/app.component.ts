import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, NgZone} from 'angular2/core';
import {GameJoin} from './game-join';
// import {Observable} from 'rxjs/observable';
import RxfromIO from './RxFromIO';
// import 'rxjs/add/observable/of';
import Rx from 'rxjs/Rx';



@Component({
    selector: 'my-app',
    template: `
        <h1>ng-2 Pub Quiz</h1>
        <div *ngIf="waitingForPlayers">
          <game-join></game-join>
        </div>
        <p></p>
    `,
    directives: [GameJoin]
})
export class AppComponent {
  gameStart$ = RxfromIO('gameStart');
  // gameStart$ = Rx.Observable.of(false).delay(5000);
  waitingForPlayers = true;
  constructor(private _ngZone: NgZone) {
    RxfromIO('timeLeftInRound')
      .subscribe(body => { console.log('timeLeftInRound', body)});
  }
  ngOnInit() {
    this.gameStart$.subscribe(value => {
      console.log('got update: ', value);
      this._ngZone.run(() => this.waitingForPlayers = false);

    })
  }
}
