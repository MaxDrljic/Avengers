import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private _http: HttpClient) { }

  // Timestamp and the hash is required for Marvel API to work
  private TimeStamp = new Date().getTime();
  private hash = Md5.hashStr(this.TimeStamp + environment.PrivateKey + environment.PublicKey).toString();

  // Grabs API endpoint and the data
  grabHeroes() {
    return this._http.get(
      environment.MarvelEndpoint + this.TimeStamp + '&apikey=' + environment.PublicKey + '&hash=' + this.hash + '&limit=80');
  }

}
