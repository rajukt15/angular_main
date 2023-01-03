import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieContextService {
  API_ENDPOINT = `https://www.omdbapi.com/?apikey=cc4360a&s=`;
  inputSearchValue: string = 'batman';

  movieList: any;
  _movieList = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {
    this.movieList;
    this._movieList.next(this.movieList);
  }
  getDataAPI(input: string) {
    this.inputSearchValue = input;
    return this.http.get(this.API_ENDPOINT + this.inputSearchValue);
  }
}
