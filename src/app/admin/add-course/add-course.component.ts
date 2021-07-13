import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(public courseService: CourseService, private authService: AuthService) { }

  categoryList: any = [];
  infoPerson: any = [];

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

  ngOnInit(): void {
    this.getListCategory();
    this.getInfoPerson();
  }

  themKhoaHoc(value:any){
    console.log(value);

  }
}
