import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {GameJoin} from './game-join';
import {Observable} from 'rxjs/observable';
import RxfromIO from './RxFromIO';

const gameStart$ = RxfromIO('gameStart');

@Component({
    selector: 'my-app',
    template: `
        <h1>ng-2 Pub Quiz</h1>
        <div [hidden]="!waitingForPlayers">
          <game-join></game-join>
        </div>
        <p></p>
    `,
    directives: [GameJoin],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @Input() gameStart$:Observable<any>;
  waitingForPlayers = true;
  constructor(private cd: ChangeDetectorRef) {
    RxfromIO('timeLeftInRound')
      .subscribe(body => { console.log('timeLeftInRound', body)});
  }
  ngOnInit() {
    this.gameStart$.subscribe((started) => {
      this.waitingForPlayers = !started;
      this.cd.markForCheck();
    });

  }
}
