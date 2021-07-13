import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/core/services/course/course.service';

import {Subscription} from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;// material angular

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) { }

  private subcription = new Subscription();

  courseList: any = [];

  maNhom: any;

  public mangMaNhom: Array<any> = [
    "GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"
  ];

  chonNhom(maNhom:any){
    console.log(maNhom);
    this.courseService.getListCourseApi(maNhom).subscribe((data) => {
      this.courseList = data;
    })
  }

  getListCourse () {
    this.courseService.getListCourseApiGP01().subscribe((data) => {
      console.log(data);
      this.courseList = data;

    })
  }

  ngOnInit(): void {
    this.getListCourse();
    this.courseList.paginator = this.paginator;
  }

  //hủy API để tối ưu performance
  ngOnDestroy() {
    console.log("out!!!");
    this.subcription.unsubscribe();
  }


}
