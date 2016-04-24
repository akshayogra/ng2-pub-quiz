import {Injectable} from 'angular2/core';

export class Player {
  public id: number;
  public name: string;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

@Injectable()
export class PlayerService {
  player: Player;
  public add(id, name) {
    this.player = new Player(id, name);
    console.log('this player is: ', this.player);
  }
  public getPlayer() {
    return this.player;
  }
}
