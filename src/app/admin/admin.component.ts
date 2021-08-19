import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../core/share/data/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('drawer') drawer: any;
  currentUser: any;
  showFiller = false;
  thongTinNguoiDung: any = null;
  constructor(public breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    public router: Router,
    public notificationService:NotificationService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((result) => {
      this.thongTinNguoiDung = result;
    })
  }

  handleLogOut() {
    this.currentUser = null;
    localStorage.clear();
    this.notificationService.success('Log Out Successfull')
    this.router.navigate(["/signin"]);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}


