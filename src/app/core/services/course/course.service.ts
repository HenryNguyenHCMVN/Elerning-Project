import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, mapTo, tap } from 'rxjs/operators'; //add tap để xử lý thành công hoặc thất bại
import { Observable } from 'rxjs';
import { AddCourse, DanhSachKhoaHoc, registerCourse } from '../../models/client';
import { ApiService } from '../API/api.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient, private api:ApiService) { }

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

  getListCourseApiGP01(): Observable<DanhSachKhoaHoc[]> {
    return this.api
    .get<DanhSachKhoaHoc[]>(`QuanLyKhoaHoc/LayDanhSachKhoaHoc`,{
      params: {maNhom:"GP01"}
    })
      .pipe(
        tap((data) => {console.log(data);
        }),
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
  addCourseApi(addCourse: AddCourse): Observable<any> {
    let url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc`;
    return this.httpClient.post(url,addCourse).pipe(tap((data: any) => {
      console.log(data);
    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }
  addImageCourseApi(body:any): Observable<any> {
    let url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`;
    return this.httpClient.post(url,body).pipe(tap((data: any) => {
      console.log(data);
    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }

  registerCourse(createCourse:registerCourse): Observable<any> {
    let url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc`;
    return this.httpClient.post(url,createCourse).pipe(tap((data: any) => {
      console.log(data);
    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }

  deleteCourse(id: any): Observable<any> {
    let url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`;
    return this.httpClient.delete(url,id).pipe(tap((data: any) => {
      console.log(data);
    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }

}
