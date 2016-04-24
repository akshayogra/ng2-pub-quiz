
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {GameJoinService} from './game-join-service';
import {PlayerService} from './player-service';

import 'rxjs/add/operator/map';

@Component({
    selector: 'game-join',
    template: `
      <div class="list-group">
        <a *ngFor="#game of games" class="list-group-item">
          <div>
            <h3 (click)="toggle()">({{game.id}}) {{ game.name }}</h3>
            <div [hidden]="!showmore">
            <label for="playerName">name: </label>
            <input id="playerName" #playerName>
            <button (click)="join(game.id, playerName.value)">Join</button>
            </div>
          </div>
        </a>
      </div>
    `,
    viewProviders: [HTTP_PROVIDERS, GameJoinService]
})
export class GameJoin {
  constructor(http: Http, private gameSvc: GameJoinService, private playerSvc: PlayerService) {
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
    const observable$ = this.gameSvc.joinGame(gameId, name) // returns an Observable
    const json$ = observable$.map(res => res.json())

    const subscriber = json$.subscribe(
        player => { this.playerSvc.add(player.id, player.name); },
        error => { console.log('an error occurred ' + error); },
        () => { console.log('All done'); }
      );

  }
}
