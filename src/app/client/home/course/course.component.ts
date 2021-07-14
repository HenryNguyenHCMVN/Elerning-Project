import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/core/share/data/data.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DetailComponent } from '../../detail/detail.component';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {


  courseDetail: any;

  @Input() course: any;

  constructor(public dataService: DataService, private matDialog: MatDialog) { }

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

}
