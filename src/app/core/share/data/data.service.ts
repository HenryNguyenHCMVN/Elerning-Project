import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';


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
    // $key: new FormControl(null),
    taiKhoan: new FormControl('',[Validators.required, Validators.minLength(3)]),
    matKhau: new FormControl('',[Validators.required, Validators.minLength(3)]),
    hoTen: new FormControl('', [Validators.required, Validators.minLength(3)]),
    maNhom: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.minLength(3)]),
    soDT: new FormControl('',[Validators.required, Validators.minLength(3)]),
    maLoaiNguoiDung: new FormControl('GV'),
  })

  resetFormGroup() {
    this.form.setValue({
      // $key: null,
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      maNhom: '',
      maLoaiNguoiDung: 'GV',
      email: '',
      soDT: '',
    });
  }

  popularForm(user:any){
    this.form.setValue(_.omit(user,'taiKhoan'));
  }
}
    //   {
    //   taiKhoan: user.taiKhoan,
    //   matKhau: user.matKhau,
    //   hoTen: user.hoTen,
    //   maNhom: user.maNhom,
    //   maLoaiNguoiDung: user.maLoaiNguoiDung,
    //   email: user.email,
    //   soDT: user.soDT,
    // }
