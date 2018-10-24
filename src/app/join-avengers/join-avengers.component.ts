import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AvengerDialogComponent } from '../avenger-dialog/avenger-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-join-avengers',
  templateUrl: './join-avengers.component.html',
  styleUrls: ['./join-avengers.component.scss']
})
export class JoinAvengersComponent implements OnInit {

  // Defining the reference to the dialog & it's component
  // avengerDialogRef: MatDialogRef<AvengerDialogComponent>;

  // Defining MatDialog service
  constructor(/* private dialog: MatDialog */) { }

  /* avengers = [
    { name: 'Sample Avenger', description: 'Feel free to add a new one!' }
  ];

  // Class method which opens the dialog
  // Also, data object should be defined inside the avengerDialogRef where I pass the name and the description
  openAvengerDialog(avenger?) {
    this.avengerDialogRef = this.dialog.open(AvengerDialogComponent, {
      hasBackdrop: false,
      disableClose: true,
      autoFocus: true,
      data: {
        name: avenger ? avenger.name : '',
        description: avenger ? avenger.description : ''
      }
    });

    // Handling the observable by first filtering and then listening to changes
    // If the avenger is clicked, the item is found by it's index which is assigned to the name property.
    // If the index is negative 1, FINISH!!!
    // Else, FINISH!!!
    this.avengerDialogRef
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(name => {
        if (avenger) {
          const index = this.avengers.findIndex(f => f.name === avenger.name);
          if (index !== -1) {
            this.avengers[index] = { name, description: avenger.description };
          }
        } else {
          this.avengers.push({ name, description: '' });
        }
      });
  } */
  ngOnInit() {
  }

}
