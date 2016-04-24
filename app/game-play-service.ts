import {Injectable, NgZone} from 'angular2/core';
import RxfromIo from './RxFromIO';


@Injectable()
export class GamePlayService {
  gameStart$ = RxfromIo('gameStart');
  gameEnd$ = RxfromIo('gameEnd');
  roundStart$ = RxfromIo('roundStart');
}
