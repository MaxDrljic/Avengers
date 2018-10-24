import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AvengerService {

  constructor(private firebase: AngularFireDatabase) { }

  avengerList: AngularFireList<any>;

  // Form Group properties & validation
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl('1'),
    event: new FormControl(0),
    isFavorite: new FormControl(false)
  });

  // When the form is initialized, form values get reset and returned to default
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      description: '',
      gender: '1',
      event: 0,
      isFavorite: false
    });
  }


  /* <---------------  CRUD FUNCTIONALITY  -------------> */


  // Grab Avengers from Firebase
  // Observable gets returned and snapshotChanges() will watch for changes.
  getAvengers() {
    this.avengerList = this.firebase.list('avengers');
    return this.avengerList.snapshotChanges();
  }

  // Data filled in the form gets passed to this function, and then to the Firebase
  insertAvenger(avenger) {
    this.avengerList.push({
      name: avenger.name,
      description: avenger.description,
      gender: avenger.gender,
      event: avenger.event,
      isFavorite: avenger.isFavorite
    });
  }

  // Update Avenger to the values supplied in the form
  updateAvenger(avenger) {
    this.avengerList.update(avenger.$key, {
      name: avenger.name,
      description: avenger.description,
      gender: avenger.gender,
      event: avenger.event,
      isFavorite: avenger.isFavorite
    });
  }

  // Identifies the Avenger by it's key and removes it
  deleteAvenger($key: string) {
    this.avengerList.remove($key);
  }

  /*
    Populate the form with the selected avenger
    Pass the values from the form and set them,
    But using lodash, we omit values from the Firebase,
    and only target the values that are actually in the form
  */
  populateForm(avenger) {
    this.form.setValue(_.omit(avenger, 'eventName', 'eventDescription'));
  }
}
