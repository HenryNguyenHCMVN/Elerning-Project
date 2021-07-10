import { Component, OnInit } from '@angular/core';
import { KhoaHoc } from 'src/app/core/models/client';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  public displayedColumns: string[] = ['maKhoaHoc', 'tenKhoaHoc', 'danhMucKhoaHoc', 'hinhAnh'];

  mangKhoaHoc: KhoaHoc [] = [];

  constructor(private courseService: CourseService) { }

  maNhom: any;

  ngOnInit(): void {
    // this.courseService.getListCourseApi(this.maNhom).subscribe((result:any) => {
    //   console.log(result);
    //   this.mangKhoaHoc = result;
    // })
  }

}
