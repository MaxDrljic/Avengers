import { Component, OnInit } from '@angular/core';
import { AvengerDialogComponent } from '../avenger-dialog/avenger-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MarvelService } from '../shared/marvel.service';
import { AvengerService } from '../shared/avenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private heroes = [];
  public icon = 'close';
  public page = 1;

  constructor(private _marvelService: MarvelService,
    private service: AvengerService,
    private dialog: MatDialog) { }

  ngOnInit() {
    /* First, grab the endpoint from the service,
       Then, the subscribe is needed to listen to data,
       After that, simply loop through data and display what is needed */
    this._marvelService.grabHeroes()
      .subscribe((res: any['data']) => {
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

  public addFavorite() {
    if (this.icon === 'close') {
      this.icon = 'favorite';
    }
  }

  public removeFavorite() {
    if (this.icon === 'favorite') {
      this.icon = 'close';
    }
  }

  /* Function which enables infinite scroll
     Calling ngOnInit() inside a function is not the best practice,
     but for now it gets the job done...
  */
  onScroll() {
    this.page = this.page + 1;
    this.ngOnInit();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AvengerDialogComponent, dialogConfig);
  }

}
