import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
    matKhau: new FormControl('',[Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    conFirmMatKhau: new FormControl(null),
    hoTen: new FormControl('', [Validators.required, Validators.minLength(3)]),
    maNhom: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    soDT: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    maLoaiNguoiDung: new FormControl('Student')
  },{
    validators: [ValidationMatchPass.match('matKhau','conFirmMatKhau')]
  })

  formEdit: FormGroup = new FormGroup({
    taiKhoan: new FormControl('',[Validators.required, Validators.minLength(3)]),
    matKhau: new FormControl('',[Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    hoTen: new FormControl('', [Validators.required, Validators.minLength(3)]),
    maNhom: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    soDT: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    maLoaiNguoiDung: new FormControl('Student'),
  })

  resetFormGroup() {
    this.form.setValue({
      // $key: null,
      taiKhoan: '',
      matKhau: '',
      conFirmMatKhau: '',
      hoTen: '',
      maNhom: '',
      maLoaiNguoiDung: 'Student',
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

export default class ValidationMatchPass {
  static match(passWord: string, checkpassWord: string): ValidatorFn {
      return (controls: AbstractControl) => {
          const pass = controls.get(passWord);
          const checkPass = controls.get(checkpassWord);

          if (checkPass?.errors && !checkPass.errors.matching) {
              return null;
          }

          if (pass?.value !== checkPass?.value) {
              controls.get(checkpassWord)?.setErrors({ matching: true });
              return { matching: true };
          } else {
              return null;
          }
      };
  }
}
