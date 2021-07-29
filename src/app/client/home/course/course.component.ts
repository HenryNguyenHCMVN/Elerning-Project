import { Component, Input, OnInit} from '@angular/core';
import { DataService } from 'src/app/core/share/data/data.service';
import {MatDialog} from '@angular/material/dialog';
import { DetailComponent } from '../../detail/detail.component';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  isLoading: boolean = false;

  courseDetail: any;

  @Input() course: any;

  constructor(public dataService: DataService, private matDialog: MatDialog, private router:Router) {

      //isloading
      this.router.events.subscribe((routerEvent: Event) =>{
        if (routerEvent instanceof NavigationStart) {
          this.isLoading = true;
        }
        if (routerEvent instanceof NavigationEnd) {
          this.isLoading = false;
        }
      })

  }

  ngOnInit(): void {

  }

  openDialog(){
    console.log(this.course);
    this.dataService.sharingDataDetailCourse(this.course);
    this.matDialog.open(DetailComponent);
  }

  clickDetail(){
    console.log('123');

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


}
