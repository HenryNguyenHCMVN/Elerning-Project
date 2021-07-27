import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemKhoaHoc } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(public courseService: CourseService, private authService: AuthService, private notificationService:NotificationService) { }

  categoryList: any = [];

  infoPerson: any = [];

  mangThemKhoaHoc: any = [];

  public selected!: Date | null;

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP010"];

  url: any;

  msg = "";

  imgAddCourse(event:any){
    if(!event.target.files[0] || event.target.files[0].length == 0){
      this.msg = 'You must select an image';
			return;
    }
    var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
  }

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

  themKhoaHoc(value:ThemKhoaHoc, files:any){
    console.log(value);
    console.log(files[0]);

    // thêm ảnh cho khóa học
    value.hinhAnh = files[0].name;
    this.courseService.addCourseApi(value).subscribe((result) =>{
      if (typeof result === 'object') {
        // chuyển dạng FormData
        var formData = new FormData();
        formData.append("Files",files[0]);
        formData.append("hinhAnh",value.hinhAnh);
        this.courseService.addImageCourseApi(formData).subscribe((result) =>{
          if (result === true) {
              alert('Add successfull')
          }
        })
      }
      // this.notificationService.success('::: Add A Successfull :::');
      // window.location.reload();
    })
    // this.notificationService.error('::: Course code or course name already exists :::');
  }


}
