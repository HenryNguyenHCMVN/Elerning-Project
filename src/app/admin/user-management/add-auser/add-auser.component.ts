import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';

@Component({
  selector: 'app-add-auser',
  templateUrl: './add-auser.component.html',
  styleUrls: ['./add-auser.component.scss']
})
export class AddAUserComponent implements OnInit {

  public mangMaNhom: Array<any> = ["GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP010"];
  constructor(public dataService: DataService,
    public authService: AuthService,
    public notificationService: NotificationService,
    public matDialogRef: MatDialogRef<AddAUserComponent>
  ) { }

  ngOnInit(): void {
  }
  handleAddUser(): void {
    if (this.dataService.form.valid) {
      this.authService.addListUser(this.dataService.form.value).subscribe((result) => {
        this.dataService.form.reset();
        this.dataService.resetFormGroup();
        this.notificationService.success(`:::Submitted successfully:::`);
        this.onClose();
      }, (error) => this.notificationService.error(`${error.error}`)
      )
    }
  }
  onClear() {
    this.dataService.form.reset();
    this.dataService.resetFormGroup();
    this.notificationService.success(`:::Clear successfully:::`)
  }
  onClose() {
    this.dataService.form.reset();
    this.dataService.resetFormGroup();
    this.matDialogRef.close();
  }
}
