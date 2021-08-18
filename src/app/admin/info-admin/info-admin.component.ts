import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-info-admin',
  templateUrl: './info-admin.component.html',
  styleUrls: ['./info-admin.component.scss']
})
export class InfoAdminComponent implements OnInit {

  // public userSignIn !: UserSignIn;

  public displayedColumns: string[] = ['taiKhoan'];

  thongTinNguoiDung: any = null;


  dataS: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.currentUser.subscribe((data) => {
      console.log(data);
      this.thongTinNguoiDung = data;
    })
  }

}
