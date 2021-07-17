import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SignupComponent } from 'src/app/client/signup/signup.component';
import { NguoiDung } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  // dùng MatPaginator để phân trang
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // dùng MatSort để sort tên, thứ tự
  @ViewChild(MatSort) sort!:MatSort;

  // lấy đối tượng từ .ts
  public ELEMENT_DATA!: NguoiDung[];
  public mangNguoiDung = new MatTableDataSource(this.ELEMENT_DATA);

  public displayedColumns: string[] = ['taiKhoan','matKhau', 'email', 'maLoaiNguoiDung','tenLoaiNguoiDung', 'soDT', 'hoTen', 'hanhDong'];

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"];

  searchKey: any;

  token:any;

  constructor(private authService: AuthService, private matDialog: MatDialog) { }

  chonNhom(maNhom:any){
    this.authService.getListUserGroup(maNhom).subscribe((result) => {
      this.mangNguoiDung.data = result;
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
    this.matDialog.open(SignupComponent);
  }

  ngAfterViewInit() {// material angular
    this.mangNguoiDung.paginator = this.paginator;
    this.mangNguoiDung.sort = this.sort
  }

  onEdit(){
    this.authService.infoUser(this.token).subscribe((data) =>{
      console.log(data);
    })


  }

  ngOnInit(): void {
    this.authService.getListUser().subscribe((result: any) => {
      console.log(result);
      this.mangNguoiDung.data = result;
    })
  }
}
