import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private detailCourse = new BehaviorSubject ({} as object);
  shareDetailCourse = this.detailCourse.asObservable();

  constructor() { }

  sharingDataDetailCourse(course:any){
    this.detailCourse.next(course);
  }
}
