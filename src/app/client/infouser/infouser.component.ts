import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ChiTietKhoaHocGhiDanh, ThongTinNguoiDung } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { ModalinfouserComponent } from './modalinfouser/modalinfouser.component';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.scss']
})
export class InfouserComponent implements OnInit {

  maKhoaHoc?:ChiTietKhoaHocGhiDanh[];
  chiTiet: any;
  infoUser: any;
  ELEMENT_DATA!: ChiTietKhoaHocGhiDanh[];
  historyCourse = new MatTableDataSource(this.ELEMENT_DATA);

  displayedColumns: Array<any> = [
    "stt",
    "maKhoaHoc",
    "tenKhoaHoc",
    "ngayDat",
  ];

  constructor( public authService:AuthService, public matDialog:MatDialog, public dataService:DataService) { }

  ngOnInit(): void {
    this.getInfoAccount();
  }
  getInfoAccount() {
    // let account = { taikhoan: "" };
    // account.taikhoan = this.authService.getCurrentUser();
    // this.authService.infoUser(account).subscribe((data) => {
    //   const { chiTietKhoaHocGhiDanh, ..._data } = data
    //   this.authService.setCurrentUser(_data)
    //   this.authService.currentUser.subscribe((data) => {
    //     console.log(data);
    //     this.infoUser = data;
    //   });
    //   this.historyCourse.data = chiTietKhoaHocGhiDanh;
    // });
    this.authService.infoUser(this.infoUser).subscribe((data) => {
      this.infoUser = data;
      this.chiTiet = data.chiTietKhoaHocGhiDanh;
    });
    this.historyCourse.data = this.chiTiet;
  }

  searchHistory(event: any){
    this.historyCourse.filter = event.target.value.trim().toLowerCase();
  }
  updateInfoUser(){
    this.matDialog.open(ModalinfouserComponent);
    this.authService.setCurrentAccount(this.infoUser);
    this.dataService.formEdit.setValue({
    taiKhoan:         this.infoUser.taiKhoan,
    maLoaiNguoiDung:  this.infoUser.maLoaiNguoiDung,
    matKhau:          this.infoUser.matKhau,
    email:            this.infoUser.email,
    hoTen:            this.infoUser.hoTen,
    soDT:             this.infoUser.soDt,
    maNhom:           "GP01",
    })
  }
  onDelete(){
    let unRegister = { taikhoan: "", maKhoaHoc:"" };
    unRegister.taikhoan = this.authService.getCurrentUser().taiKhoan;
    unRegister.maKhoaHoc = this.chiTiet.maKhoaHoc;
    console.log(unRegister);

  }
}
