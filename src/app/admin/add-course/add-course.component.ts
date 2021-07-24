import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCourse } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(public courseService: CourseService, private authService: AuthService, private router:Router) { }

  categoryList: any = [];
  infoPerson: any = [];

  mangThemKhoaHoc: any = [];

  public selected!: Date | null;

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP010"];

  getListCategory() {
      this.courseService.getListCategoryCourseApi().subscribe((result) =>{
        console.log(result);
        this.categoryList = result;
      })
  }

  getInfoPerson(){
    this.authService.currentUser.subscribe((result) =>{
      console.log(result);
      this.infoPerson = result;
    })
  }

  //componentdis mount
  ngOnInit(): void {
    this.getListCategory();
    this.getInfoPerson();
  }

  handleFileInput(event:any) {

}

  themKhoaHoc(value:AddCourse, files:any){
    console.log(value);
    console.log(files[0]);

    // thêm ảnh cho khóa học
    value.hinhAnh = files[0].name;

    this.courseService.addCourseApi(value).subscribe((result) =>{
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
      alert('Successfully')
      this.router.navigate(["admin/course-management"])
    })
  }


}
