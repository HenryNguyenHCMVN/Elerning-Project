import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: any;
  courseDetail: any;
  register: any = { maKhoaHoc: "", taiKhoan: "" };
  taiKhoan: any;

  constructor(public activatedRoute: ActivatedRoute,
    public courseService: CourseService,
    public authService: AuthService,
    public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    this.activatedRoute.params.subscribe((result) => {
      this.id = result.id;
      this.courseService.getDetailCourseApi(this.id).subscribe((data) => {
        this.courseDetail = data;
        this.register.maKhoaHoc = this.courseDetail.maKhoaHoc;
      })
    });

    this.authService.currentUser.subscribe((data) => {
      this.taiKhoan = data
      this.register.taiKhoan = this.taiKhoan.taiKhoan;
    })
  }

  createRegister() {
    console.log(this.register);
    this.courseService.registerCourse(this.register).subscribe((data) => { })
  }
}
