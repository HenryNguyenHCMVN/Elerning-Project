import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private detailCourse = new BehaviorSubject ({} as object);
  shareDetailCourse = this.detailCourse.asObservable();

  constructor() { }

  sharingDataDetailCourse(course:any){
    console.log(course);
    this.detailCourse.next(course);
  }

  form: FormGroup = new FormGroup({
    taiKhoan: new FormControl('',[Validators.required, Validators.minLength(3)]),
    matKhau: new FormControl('',[Validators.required, Validators.minLength(3)]),
    hoTen: new FormControl('', [Validators.required, Validators.minLength(3)]),
    maNhom: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.minLength(3)]),
    soDT: new FormControl('',[Validators.required, Validators.minLength(3)]),
    maLoaiNguoiDung: new FormControl('GV'),
  })

  formEdit: FormGroup = new FormGroup({
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

  formeditCourse: FormGroup = new FormGroup({
    maKhoaHoc: new FormControl(''),
    tenKhoaHoc: new FormControl(''),
    moTa: new FormControl(''),
    maNhom: new FormControl(''),
    luotXem: new FormControl('0'),
    danhGia: new FormControl('0'),
    hinhAnh: new FormControl(''),
    ngayTao: new FormControl(''),
    maDanhMucKhoaHoc: new FormControl(''),
    taiKhoanNguoiTao: new FormControl(''),
  })
}
