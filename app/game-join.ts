

import {Component} from 'angular2/core';

var mygames = [
  {
    id: 1,
    name: 'who wants to murder a millionare',
    started: false
  }
];

@Component({
    selector: 'game-join',
    template: `
      <ul>
        <li *ngFor="#game of games">
          <div>
            {{ game.name }} <a (click)="toggle()">...</a>
            <br/>
            <div [hidden]="!showmore">
            <label for="playerName">name: </label>
            <input id="playerName">
            <button>Join</button>
            </div>
          </div>
        </li>
      </ul>
    `,
})
export class GameJoin {
  games = mygames;
  showmore = false;
  toggle(value) {
    this.showmore = !this.showmore;
  }
}
