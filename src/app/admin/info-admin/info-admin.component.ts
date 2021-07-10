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

    // this.authService.currentUser.subscribe(data =>{
    // lấy từ local
    // console.log(data)
    // chỗ này khá phức tạp code logic lắm ko gán nhu8 vậy dc
    // this.token = data.accessTokenta
    // this.dataS = data
    // let update = {...this.userSignIn}
    // update.accessToken = `Bearer ${this.dataS.accessToken}`
    // this.userSignIn = update
    // console.log(this.userSignIn.accessToken);

    // this.authService.infoUser(this.userSignIn.accessToken).subscribe(data=>{
    //   console.log(data);

    // })
    // })
  }

}
