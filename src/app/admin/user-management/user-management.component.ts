import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { result } from 'lodash';
import { SignupComponent } from 'src/app/client/signup/signup.component';
import { NguoiDung, TimKiemNguoiDung } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';
import { AddAUserComponent } from './add-auser/add-auser.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  @ViewChild('form') formDK!:NgForm;

  // dùng MatPaginator để phân trang
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // dùng MatSort để sort tên, thứ tự
  @ViewChild(MatSort) sort!:MatSort;

  // lấy đối tượng từ .ts
  public ELEMENT_DATA!: TimKiemNguoiDung[];
  public mangNguoiDung = new MatTableDataSource(this.ELEMENT_DATA);

  public displayedColumns: string[] = ['taiKhoan', 'email', 'maLoaiNguoiDung','tenLoaiNguoiDung','matKhau', 'soDT','maNhom', 'hoTen', 'xoa', 'capNhat'];

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"];

  searchKey: any;

  error: string = "";

  user: any = {
    taiKhoan: this.authService.getCurrentUser().taiKhoan
  }

  infoUser:any = {};

  token:any;

  currentUsers: any = null;

  delUser: string = "";

  isLoading: boolean = false;

  constructor(private authService: AuthService, private matDialog: MatDialog, public dataService: DataService, private notificationService:NotificationService) { }

  chonNhom(maNhom:any){
    this.authService.getListUserGroup(maNhom).subscribe((result) => {
      this.mangNguoiDung.data= result;
    })
  }

  // search
  applySearch(){
    this.mangNguoiDung.filter = this.searchKey.trim().toLowerCase();
  }
  //clear search
  onSearchClear(){
    this.searchKey = "";
    this.applySearch();
  }
  addUser(){
    this.dataService.resetFormGroup();
    this.matDialog.open(AddAUserComponent);
  }

  ngAfterViewInit() {// material angular
    this.mangNguoiDung.paginator = this.paginator;
    this.mangNguoiDung.sort = this.sort
  }

  onEdit(user:any){
    // this.matDialog.open(EditUserComponent);

    this.dataService.formEdit.setValue({
    taiKhoan:         user.taiKhoan,
    maLoaiNguoiDung:  user.maLoaiNguoiDung,
    matKhau:          user.matKhau,
    email:            user.email,
    hoTen:            user.hoTen,
    soDT:             user.soDt,
    maNhom:           "GP01",
    });
  }


  onDelete(user:any){
    if (confirm('Are you sure to delete???')) {
      this.authService.deteteUser(user).subscribe((res) =>{
      },(error) =>{
        alert('res' + error)
      });
    }
  }

  handleEditUser(){
    console.log(this.dataService.formEdit.value);
    this.authService.updateUser(this.dataService.formEdit.value,this.token).subscribe((data) =>{
      console.log(data);
    })
  }

  //componet dismount
  ngOnInit(): void {
    this.authService.getListUser().subscribe((result: any) => {
      this.mangNguoiDung.data = result;
      console.log(result);

    })

    // this.authService.currentUser.subscribe((data) =>{
    //   this.currentUser = data;
    //   this.token = this.currentUser.accessToken;
    // })

    this.authService.currentUser.subscribe((data) => {
      this.currentUsers = data;
      this.token = this.currentUsers.accessToken
    })

    this.authService.infoUser(this.user, this.token).subscribe((data) => {
      this.infoUser = data;
      console.log(data);

  })
  }


}
