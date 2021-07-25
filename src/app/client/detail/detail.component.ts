import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: any;
  courseDetail: any

  constructor(public activatedRoute: ActivatedRoute, public courseService: CourseService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((result) => {
      console.log(this.id);
      this.id = result.id;
      this.courseService.getDetailCourseApi(this.id).subscribe((data) => {
        console.log(data);
        this.courseDetail = data;
      })
    });
  }

  createRegister(){
  }

  goBack(): void{
  }
}
