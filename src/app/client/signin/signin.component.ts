import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private notificationService:NotificationService) { }

  hide = true;

  userLogin: any = {
    taiKhoan: "",
    matKhau: "",
  };

  handleLogin() {

    this.authService.loginApi(this.userLogin).subscribe((data) => {
      // lưu data local
      localStorage.setItem("userLogin", JSON.stringify(data));
      //lưu data vào AuthService
      this.authService.setCurrentUser(data);

      const {successURL} = this.activatedRoute.snapshot.queryParams;
      if (successURL) {
        this.router.navigate([successURL]);
      }else{
        this.notificationService.success(`::: Log in successfully :::`)
        this.router.navigate(["/"]);
      }
    },
    (error) =>{
      console.log(error);
      alert("User or Password is wrong");
    })

  }

  ngOnInit(): void {
  }

}

