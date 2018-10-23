import { Component, OnInit } from '@angular/core';

import { AvengerService } from '../avenger.service';

@Component({
  selector: 'app-avenger-dialog',
  templateUrl: './avenger-dialog.component.html',
  styleUrls: ['./avenger-dialog.component.scss']
})
export class AvengerDialogComponent implements OnInit {

  constructor(private service: AvengerService) { }

  events = [
    { id: 3, value: 'Event 1' },
    { id: 2, value: 'Event 2' },
    { id: 3, value: 'Event 3' }
  ];

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
