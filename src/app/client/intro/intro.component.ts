import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Input() deviceXs!: boolean;
  constructor() { 
  }



  ngOnInit(): void {

  }



}
