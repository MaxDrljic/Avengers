import { Component, OnInit } from '@angular/core';
import { AvengerService } from '../shared/avenger.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-avenger-table',
  templateUrl: './avenger-table.component.html',
  styleUrls: ['./avenger-table.component.scss']
})
export class AvengerTableComponent implements OnInit {

  constructor(private service: AvengerService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name'];

  ngOnInit() {
    this.service.getAvengers().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
      }
    );
  }

}
