import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  public displayedColumns: string[] = ['taiKhoan', 'email', 'maLoaiNguoiDung', 'soDT', 'hoTen'];

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"];

  // mangNguoiDung: NguoiDung[] = [];

  constructor(private authService: AuthService) { }

  chonNhom(maNhom:any){
    this.authService.getListUserGroup(maNhom).subscribe((result) => {
      this.mangNguoiDung.data = result;
    })
  }

  applySearch(search: any){
    console.log(search);
    this.mangNguoiDung.filter = search.key.trim().toLowerCase();
  }

  ngAfterViewInit() {// material angular
    this.mangNguoiDung.paginator = this.paginator;
    this.mangNguoiDung.sort = this.sort
  }
  ngOnInit(): void {
    this.authService.getListUser().subscribe((result: any) => {
      console.log(result);
      this.mangNguoiDung.data = result;
    })
  }
}
