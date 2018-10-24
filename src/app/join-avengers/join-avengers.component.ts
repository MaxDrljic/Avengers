import { Component, OnInit } from '@angular/core';
import { AvengerDialogComponent } from '../avenger-dialog/avenger-dialog.component';
import { AvengerService } from '../shared/avenger.service';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-join-avengers',
  templateUrl: './join-avengers.component.html',
  styleUrls: ['./join-avengers.component.scss']
})
export class JoinAvengersComponent implements OnInit {

  constructor(private service: AvengerService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  // First, create form group instance from the service
  // Define suitable dialog configurations
  // Open the dialog by targeting the component and adding dialogConfig reference
  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AvengerDialogComponent, dialogConfig);
  }

}
