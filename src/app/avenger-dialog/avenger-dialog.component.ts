import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { AvengerService } from '../shared/avenger.service';
import { EventsService } from '../shared/events.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-avenger-dialog',
  templateUrl: './avenger-dialog.component.html',
  styleUrls: ['./avenger-dialog.component.scss']
})
export class AvengerDialogComponent implements OnInit {

  constructor(private service: AvengerService,
    private eventsService: EventsService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<AvengerDialogComponent>) { }

  ngOnInit() {
    this.service.getAvengers();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted Successfully!');
  }

  /*
  If the form is valid:
    If there is no key in the form:
      then insert avenger and the given values
    else:
      call updateAvenger function from the service & update form values
      Reset the from, initialize the form, display success message & close form
  */
  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value) {
        this.service.insertAvenger(this.service.form.value);
      } else {
        this.service.updateAvenger(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success(':: Submitted Successfully!');
        this.onClose();
      }
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
