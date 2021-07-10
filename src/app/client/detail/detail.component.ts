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

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
    });

    this.courseService.getDetailCourseApi(this.id).subscribe((data) => {
      console.log(data);
      this.courseDetail = data;
    })

  }

}
