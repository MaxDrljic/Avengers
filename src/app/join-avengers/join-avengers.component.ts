import { Component, OnInit } from '@angular/core';
import { AvengerDialogComponent } from '../avenger-dialog/avenger-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-join-avengers',
  templateUrl: './join-avengers.component.html',
  styleUrls: ['./join-avengers.component.scss']
})
export class JoinAvengersComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';

    this.dialog.open(AvengerDialogComponent, dialogConfig);
  }

}
