import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, mapTo, tap } from 'rxjs/operators'; //add tap để xử lý thành công hoặc thất bại
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  getListCourseApi(maNhom: any): Observable<any> {
    return this.httpClient.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`)
      .pipe(
        tap((data) => {
          console.log(data);

        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }

  getListCourseApiGP01(): Observable<any> {
    return this.httpClient.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`)
      .pipe(
        tap((data) => {
          console.log(data);

        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }


  getListCategoryCourseApi(): Observable<any> {
    return this.httpClient.get('https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      .pipe(
        tap((data) => {
          console.log(data);

        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }

  getDetailCourseApi(id: any): Observable<any> {
    return this.httpClient.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
      .pipe(
        tap((data) => {
          console.log(data);

        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }


}
