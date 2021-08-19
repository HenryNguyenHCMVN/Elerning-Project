import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'; //add tap để xử lý thành công hoặc thất bại
import { Observable, throwError } from 'rxjs';
import { CapNhatKhoaHoc, DangKyKhoaHoc, DanhMucKhoaHoc, DanhSachKhoaHoc, HuyGhiDanhKhoaHoc, ThemKhoaHoc } from '../../models/client';
import { ApiService } from '../API/api.service';
import { NotificationService } from '../../share/data/notification.service';

interface Options {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient, private api: ApiService, public notificationService: NotificationService) { }

  //Lấy danh sách khóa học = {maNhom}
  getListCourseApi(maNhom: any): Observable<any> {
    return this.api
      .get<DanhSachKhoaHoc[]>(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`)
      .pipe(tap((data) => { })
      );
  }

  //lay danh sách khóa học set cứng GP01
  getListCourseApiGP01(): Observable<DanhSachKhoaHoc[]> {
    return this.api
      .get<DanhSachKhoaHoc[]>(`QuanLyKhoaHoc/LayDanhSachKhoaHoc`, {
        params: { maNhom: "GP01" }
      })
      .pipe(tap((data) => { }),
    );
  }

  //Lấy danh mục khóa học
  getListCategoryCourseApi(): Observable<any> {
    return this.api
      .get<DanhMucKhoaHoc>('QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      .pipe(tap((data) => { }),
    );
  }

  //lấy thông tin khóa học = {id}
  getDetailCourseApi(id: any): Observable<DanhSachKhoaHoc> {
    return this.api.
      get<DanhSachKhoaHoc>(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
      .pipe(
        tap((data) => { }),
      );
  }

  //Thêm khóa học
  addCourseApi(addCourse: ThemKhoaHoc): Observable<ThemKhoaHoc> {
    let url = `QuanLyKhoaHoc/ThemKhoaHoc`;
    return this.api.
      post<ThemKhoaHoc>(url, addCourse).pipe(tap((data: any) => {
        console.log(data);
      }),
      )
  }

  //Upload hình ảnh
  addImageCourseApi(body: any): Observable<any> {
    let url = `QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`;
    return this.api.
      post(url, body).pipe(tap((data: any) => { }),
    )
  }

  //cập nhật khóa học
  updateCourse(course: any): Observable<CapNhatKhoaHoc> {
    let url = `QuanLyKhoaHoc/CapNhatKhoaHoc`;
    return this.api.
      put<CapNhatKhoaHoc>(url, course).pipe(tap((data: any) => { })
      )
  }

  //đăng ký khóa học
  registerCourse(register: DangKyKhoaHoc): Observable<DangKyKhoaHoc> {
    let url = `QuanLyKhoaHoc/DangKyKhoaHoc`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.api.
      post<DangKyKhoaHoc>(url, register, { headers: headers }).pipe(tap((data: any) => { }),
        catchError((err) => {
          if (err.status === 500) {
            this.notificationService.error(`${err.error}`)
          } else {
            this.notificationService.success(' ::: Register successful :::');
          }
          return throwError(err);
        })
      )
  }

  // Hủy ghi danh
  unsubscribeCourse(unregister: any): Observable<HuyGhiDanhKhoaHoc> {
    let url = `QuanLyKhoaHoc/HuyGhiDanh`;
    return this.api.
      post<HuyGhiDanhKhoaHoc>(url, unregister).pipe(tap((data: any) => { }),
        catchError((err) => {
          if (err.status === 500) {
            this.notificationService.error(`${err.error}`)
          } else {
            this.notificationService.success(' ::: Unsubscribed successfully :::');
            window.location.reload();
          }
          return throwError(err);
        })
      )
  }

  //delete
  deleteCourse(id: any): Observable<any> {
    let url = `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`;
    return this.api.
      delete(url, id).pipe(tap((data) => { }),
        catchError((err) => {
          if (err.status === 500) {
            this.notificationService.error('Courses already enrolled students cannot be deleted')
          } else {
            this.notificationService.success(' ::: Deleted successful :::');
            window.location.reload();
          }
          return err;
        })
      )

  }

}
