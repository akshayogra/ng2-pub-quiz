import {Component} from 'angular2/core';
import {GameJoin} from './game-join';
import RxIO from './RxFromIO';

@Component({
    selector: 'my-app',
    template: `
        <h1>ng-2 Pub Quiz</h1>
        <div>
          <game-join></game-join>
        </div>
        <p></p>
    `,
    directives: [GameJoin]
})
export class AppComponent {
  constructor(private RxIO) {
    RxIO('gameStart')
      .subscribe(body => { console.log('gameStart', body)});
  }
}
