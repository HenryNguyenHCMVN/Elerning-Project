import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public matSnackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 1000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  }

  success(message:any){
    this.config['panelClass'] = ['notification','success']
    this.matSnackBar.open(message,'', this.config);
  }
}
