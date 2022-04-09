import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from "rxjs";
import {Game} from "./game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {

    const url = 'http://stage.whgstage.com/front-end-test/games.php';

    let header = new HttpHeaders()
    header.set('Content-Type', 'application/json');

    return new Observable(observer => {
      this.httpClient.get(url, {headers: header}).subscribe(response => {
        observer.next(Object.assign(response));
        observer.complete();
      }, error => {
        observer.error(error);
      });
    });
  }

  // getData() {
  //   return this.httpClient.get('http://stage.whgstage.com/front-end-test/games.php');
  // }
}
