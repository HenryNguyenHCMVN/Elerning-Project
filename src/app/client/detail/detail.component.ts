import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  register: any = {
    taiKhoan: "",
    maKhoaHoc: "",
  }

  id: any;
  courseDetail: any

  constructor(public activatedRoute: ActivatedRoute, public courseService: CourseService, public notificationService:NotificationService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((result) => {
      console.log(this.id);
      this.id = result.id;
      this.courseService.getDetailCourseApi(this.id).subscribe((data) => {
        console.log(data);
        this.courseDetail = data;
      })
    });
  }

  createRegister() {
    this.courseService.registerCourse(this.register).subscribe((res) => {
      this.notificationService.success('Successfully registered for the course')
    },(err) => {
      this.notificationService.error('Registered for this course already!')
    })
  }
}
