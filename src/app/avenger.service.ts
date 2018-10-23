import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AvengerService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl('1'),
    event: new FormControl(0),
    isFavorite: new FormControl(false)
  });

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
}
