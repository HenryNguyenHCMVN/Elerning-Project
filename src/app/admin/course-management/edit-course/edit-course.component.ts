import { Component, OnInit } from '@angular/core';
import { CapNhatNguoiDung } from 'src/app/core/models/client';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  constructor( public courseService:CourseService) { }

  ngOnInit(): void {
  }

  categoryList: any = [];

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP010"];

  getListCategory() {
    this.courseService.getListCategoryCourseApi().subscribe((result) =>{
      console.log(result);
      this.categoryList = result;
    })
}
  editCourse(value:CapNhatNguoiDung, file:any) {

  }

}
