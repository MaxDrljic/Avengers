import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
}
