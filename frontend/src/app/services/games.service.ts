import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Games } from '../models/games';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  private getDataGame(response) {
    return response.data
  }

  private getDataGameId(response) {
    return response.data
  }

  public getGame(): Observable<Games[]> {
    return this.http.get<Games[]>(environment.urlAddress + 'user/tournaments?page=1&i=csgo').pipe(map(this.getDataGame))
  }

  createRuleTournament(games) {
      return this.http.post<any>(environment.urlAddress + 'createRules', games);
  }


}
