import {HTTP_PROVIDERS, Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core'

@Injectable()
export class GameJoinService {
  constructor(private http: Http) {}
  joinGame(gameId, name) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('/players', JSON.stringify({ gameId, name}), { headers });
  }
}
