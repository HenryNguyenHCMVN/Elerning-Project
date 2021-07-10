import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: any;

  showFiller = false;

  thongTinNguoiDung: any = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((result) => {
      this.thongTinNguoiDung = result;
    })

  }

  handleLogOut(){
    this.currentUser = null;
    localStorage.clear();
    alert("Log out successful");
    this.router.navigate(["/signin"]);
  }

}
