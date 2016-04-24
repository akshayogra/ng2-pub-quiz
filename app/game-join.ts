

import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {GameJoinService} from './game-join-service';
import 'rxjs/add/operator/map';


@Component({
    selector: 'game-join',
    template: `
      <ul>
        <li *ngFor="#game of games">
          <div>
            ({{game.id}}) {{ game.name }} <a (click)="toggle()">...</a>
            <br/>
            <div [hidden]="!showmore">
            <label for="playerName">name: </label>
            <input id="playerName" #playerName>
            <button (click)="join(game.id, playerName.value)">Join</button>
            </div>
          </div>
        </li>
      </ul>
    `,
    viewProviders: [HTTP_PROVIDERS, GameJoinService]
})
export class GameJoin {
  gameSvc: null;
  constructor(http: Http, gameSvc: GameJoinService) {
    this.gameSvc = gameSvc;
    http.get('/games')
      .map(res => res.json())
      .subscribe(games => this.games = games);
  }
  games = [];
  showmore = false;
  toggle(value) {
    this.showmore = !this.showmore;
  }
  join(gameId, name) {
    this.gameSvc
      .joinGame(gameId, name)
      .map(res => res.json())
      .subscribe()
  }
}
