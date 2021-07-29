import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentUser: any;

  showFiller = false;

  thongTinNguoiDung: any = null;

  constructor( private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) { }

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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
}


