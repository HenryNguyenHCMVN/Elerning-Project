import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CapNhatNguoiDung, ThongTinNguoiDung } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';
import { InfouserComponent } from '../infouser.component';
import { FormControl, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'app-modalinfouser',
  templateUrl: './modalinfouser.component.html',
  styleUrls: ['./modalinfouser.component.scss']
})
export class ModalinfouserComponent implements OnInit {

  infoUser?: any;
  editUser?:any;

  public mangMaNhom: Array<any> = [// arr maNhom render html
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  constructor(public authService:AuthService,
    public dataService: DataService,
    private matDialog : MatDialog,
    public notificationService:NotificationService,
    @Inject(MAT_DIALOG_DATA) public infouserComponent:InfouserComponent) { }

  ngOnInit(): void {
    this.getInfoUser();
  }

  getInfoUser() {
    this.infoUser = this.authService.getCurrentUser();
    console.log(this.infoUser);
    this.editUser = this.dataService.formEdit.setValue({
    taiKhoan:         this.infoUser.taiKhoan,
    maLoaiNguoiDung:  this.infoUser.maLoaiNguoiDung,
    matKhau:          this.infoUser.matKhau,
    email:            this.infoUser.email,
    hoTen:            this.infoUser.hoTen,
    soDT:             this.infoUser.soDT,
    maNhom:           this.infoUser.maNhom,
    })
  }


  handleEditUser() {
    console.log(this.dataService.formEdit.value);
    this.authService.updateUser(this.dataService.formEdit.value).subscribe((data) => {
      // this.matDialogRef.close();
      // window.location.reload();
      this.notificationService.success('::: Update Successful :::');
    },(error) =>{
      console.log(error);
      this.notificationService.error(`::: ${error.error} :::`)
    })
  }
}
