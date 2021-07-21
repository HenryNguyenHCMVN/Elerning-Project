import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public matSnackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  }

  success(message:any){
    this.config['panelClass'] = ['notification','success']
    this.matSnackBar.open(message,'', this.config);
  }

  error(message:any){
    this.config['panelClass'] = ['notification','warn']
    this.matSnackBar.open(message,'', this.config);
  }
}
