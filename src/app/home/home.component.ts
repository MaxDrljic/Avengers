import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _marvelService: MarvelService) { }

  private heroes = [];

  ngOnInit() {
    /* First, grab the endpoint from the service,
       Then, the subscribe is needed to listen to data,
       After that, simply loop through data and display what is needed */
    this._marvelService.grabHeroes()
      .subscribe((res: any[]) => {
        console.log(res.data.results);
        for (let i = 0; i < res.data.results.length; i++) {
          if (res.data.results[i].description.length > 1) {
            this.heroes.push({
              name: res.data.results[i].name,
              description: res.data.results[i].description,
              image: res.data.results[i].thumbnail.path + '.' + res.data.results[i].thumbnail.extension,
            });
          }
        }
        console.log(this.heroes);
      });
  }

}
