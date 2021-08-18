import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  maNhom = "GP01";
  listCourse: number = 0;
  listClient: number = 0;

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"];

  constructor(private authService: AuthService, private router: Router, private courseService:CourseService) { }

  ngOnInit(): void {
    this.getListCourses();
    this.getListClients();
  }

  getGroupCode(maNhom: string) {
    this.courseService.getListCourseApi(maNhom).subscribe((data) => {
      this.listCourse = data.length;
    })
    this.authService.getListUserGroup(maNhom).subscribe((data) => {
      this.listClient = data.length;
    })
  }

  getListCourses() {
    this.courseService.getListCourseApi(this.maNhom).subscribe((data) => {
      this.listCourse = data.length;
    })
  }
  getListClients() {
    this.authService.getListUserGroup(this.maNhom).subscribe((data) => {
      this.listClient = data.length;
    })
  }

}
