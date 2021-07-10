import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

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
      alert("Log in successful")
      this.router.navigate(["/"]);
      console.log(data);
    },
    (error) =>{
      console.log(error);
      alert("User or Password is wrong");
    })

  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}

