import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    taiKhoan: new FormControl(''),
    matKhau: new FormControl(''),
    hoTen: new FormControl(''),
    maNhom: new FormControl(''),
    email: new FormControl(''),
    soDT: new FormControl(''),
    maLoaiNguoiDung: new FormControl('GV'),
  })

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      maNhom: '',
      maLoaiNguoiDung: '1',
      email: '',
      soDT: '',
    });
  }
}
