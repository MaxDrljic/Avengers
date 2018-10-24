import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  // Configs for the snackbar
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };

  success(msg) {
    this.config['panelClass'] = ['notification', 'success'];
    // Second parameter is snackbar action, which is not needed in this case, so just use ''
    this.snackBar.open(msg, '', this.config);
  }

}
