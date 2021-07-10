import { Component, OnInit } from '@angular/core';
import { NguoiDung } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  public displayedColumns: string[] = ['taiKhoan', 'email', 'soDT', 'hoTen', 'maLoaiNguoiDung'];

  mangNguoiDung: NguoiDung[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getListUser().subscribe((result: any) => {
      console.log(result);
      this.mangNguoiDung = result;
    })
  }
}
