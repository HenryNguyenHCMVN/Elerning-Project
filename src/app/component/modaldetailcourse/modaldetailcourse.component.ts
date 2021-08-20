import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from 'src/app/client/home/home.component';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-modaldetailcourse',
  templateUrl: './modaldetailcourse.component.html',
  styleUrls: ['./modaldetailcourse.component.scss']
})
export class ModaldetailcourseComponent implements OnInit {


  detailCourse?: any;
  constructor(@Inject(MAT_DIALOG_DATA) public homeComponent: HomeComponent, private courseService: CourseService, private modal: MatDialog) { }

  ngOnInit(): void {
    this.courseService.shareCourseDetail.subscribe(data => {
      this.detailCourse = data
    })
  }

}
