import { Component, OnInit } from '@angular/core';
import { AvengerService } from '../shared/avenger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private avengerService: AvengerService) { }


  // <---------------------   ERROR NOTICE -------------------------->

  /* Displays avengers name in the sidebar,
     but the code breaks in the avenger-table.component or /avenger-table route
  */

  // avengers: Array<[]>;

  ngOnInit() {
    this.avengerService.getAvengers();
    /* .subscribe(
      list => {
        this.avengers = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        console.log(this.avengers);
      }); */
  }

}
