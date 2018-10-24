import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventList: AngularFireList<any>;
  array = [];

  // Grab the event list from Firebase
  // Snapshot changes and listen to new changes
  // Convert the list to an array and map through each item
  // Return the key and the payload
  constructor(private firebase: AngularFireDatabase) {
    this.eventList = this.firebase.list('events');
    this.eventList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  // Grabbing the event name using lodash
  getEventName($key) {
    if ($key === '0') {
      return '';
    } else {
      return _.find(this.array, (obj) => obj.$key === $key)['name'];
    }
  }

  // Grab event description
  getEventDescription($key) {
    if ($key === '0') {
      return '';
    } else {
      return _.find(this.array, (obj) => obj.$key === $key)['item'];
    }
  }
}
