import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(public dataService: DataService,
    public authService: AuthService,
    public matDialogRef:MatDialogRef<EditUserComponent>,
    public notificationService:NotificationService) { }

  user: any = {
    taiKhoan: this.authService.getCurrentUser().taiKhoan
  }

  infoUser: any = {};

  token: any;

  currentUsers: any = null;


  public mangMaNhom: Array<any> = [
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP010"
  ];


  ngOnInit(): void {
    // this.authService.currentUser.subscribe((data) => {
    //   this.currentUsers = data;
    //   this.token = this.currentUsers.accessToken
    // })
    // this.authService.infoUser(this.user).subscribe((data) => {
    //   this.infoUser = data;
    // })
  }

  handleEditUser() {
    console.log(this.dataService.formEdit.value);
    this.authService.updateUser(this.dataService.formEdit.value).subscribe((data) => {
      this.matDialogRef.close();
      window.location.reload();
      this.notificationService.success('::: Update Successful :::');
    },(error) =>{
      console.log(error);
      this.notificationService.error('::: Error :::')
    })
  }

}
