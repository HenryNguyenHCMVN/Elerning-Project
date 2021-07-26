import { Component, OnInit } from '@angular/core';
import { CapNhatKhoaHoc } from 'src/app/core/models/client';
import { CourseService } from 'src/app/core/services/course/course.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  constructor(public dataService:DataService, public courseService:CourseService, public notificationService:NotificationService) { }

  ngOnInit(): void {
  }

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"];

  categoryList: any = [];

  getListCategory() {
    this.courseService.getListCategoryCourseApi().subscribe((result) =>{
      console.log(result);
      this.categoryList = result;
    })
}
// value:CapNhatNguoiDung, file:any
editCourse(value:CapNhatKhoaHoc, files:any) {
  console.log(this.dataService.formeditCourse.value);
  console.log(value);
  console.log(files[0]);

  // thêm ảnh cho khóa học
  value.hinhAnh = files[0].name;
  this.courseService.updateCourse(this.dataService.formeditCourse.value).subscribe((result) =>{
    if (typeof result === 'object') {
      // chuyển dạng FormData
      var formData = new FormData();
      formData.append("Files",files[0]);
      formData.append("tenKhoaHoc",value.tenKhoaHoc);
      this.courseService.addImageCourseApi(formData).subscribe((result) =>{
        if (result === true) {
            alert('Add successfull')
        }
      })

    }
    this.notificationService.success('::: Add A Successfull :::');
      // window.location.reload();

  })
  this.notificationService.error('::: Image is wrong format or size :::');
  // window.location.reload();

}
}
