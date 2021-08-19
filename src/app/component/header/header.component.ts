import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() deviceXs!: boolean;
  @Input() course: any;
  @ViewChild('drawer') drawer: any;

  constructor(public courseService: CourseService,
    public authService: AuthService,
    public router:Router,
    public breakpointObserver: BreakpointObserver,
    public notificationService:NotificationService) { }

  public subcription = new Subscription();

  currentUser: any = null;
  categoryList: any = [];
  searchKey: any;


  //ngOnInit = componentDisMount
  ngOnInit(): void {
    //get danh sách lên header
    this.getListCategory();

    //call back data mới khi user có thay đổi thông tin
    this.authService.currentUser.subscribe((data) => {
      this.currentUser = data;
    })
  }
    // search
    applySearch(){
      this.categoryList.filter = this.searchKey.trim().toLowerCase();
    }
    //clear search
    onSearchClear(){
      this.searchKey = "";
      this.applySearch();
    }

  getListCategory() {
    this.courseService.getListCategoryCourseApi().subscribe((data) => {
      this.categoryList = data;
    })
  }

  handleLogOut(){
    this.currentUser = null;
    localStorage.clear();
    this.notificationService.success('Log out successful')
    this.router.navigate(["/signin"]);
  }

  //hủy API để tối ưu performance
  // ngOnDestroy() {
  //   this.subcription.unsubscribe();
  // }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  closeSideNav() {
    if (this.drawer._mode=='over') {
      this.drawer.close();
    }
  }

}

// ---------------------------------------------------------------------------

