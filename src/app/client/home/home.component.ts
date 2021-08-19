import { Component,OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/core/services/course/course.service';

import {Subscription} from 'rxjs'
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from 'src/app/core/share/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;// material angular
  private subcription = new Subscription();
  courseList: any = [];
  course: any;
  maNhom: any;

  public mangMaNhom: Array<any> = [
    "GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"
  ];

  constructor(private courseService: CourseService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getListCourse();
    this.courseList.paginator = this.paginator;
  }

  chonNhom(maNhom:any){
    this.courseService.getListCourseApi(maNhom).subscribe((data) =>this.courseList = data)
  }

  getListCourse () {
    this.courseService.getListCourseApiGP01().subscribe((data) =>this.courseList = data)
  }

  //hủy API để tối ưu performance
  // ngOnDestroy() {
  //   this.subcription.unsubscribe();
  // }

  openDialog(){
    this.dataService.sharingDataDetailCourse(this.course);
  }

  clickDetail(){}

  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 20,
    responsive: {
      0: {
        items: 1,
    nav: false,

      },
      400: {
        items: 2,
    nav: false,

      },
      740: {
        items: 3,
    nav: false,

      },
      940: {
        items: 4,

      }
    },
    nav: true,
  }




}
