import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'; //add tap để xử lý thành công hoặc thất bại
import { BehaviorSubject, Observable } from 'rxjs';
import { NguoiDung, UserSignIn } from '../../models/client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // currentUser = null
  private currentUserSubject = new BehaviorSubject(null);
  //currentUser.asObservable => biến currentUser thành 1 Observable => có thể subscrible
  currentUser = this.currentUserSubject.asObservable();


  //post data => AdminComponent
  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  // lấy data(localstrorage) sau khi signin
  setCurrentUser(value: any) {
    this.currentUserSubject.next(value);
  }

  constructor(private httpClient: HttpClient) {

    // setState lại data khi user signout & signin
    // sẽ setstate ở day rat nhieu lan ko chi o sigin service mà còn nhiều tác vụ khác
    const userJson = localStorage.getItem('userLogin');
    if (userJson) {
      this.setCurrentUser(JSON.parse(userJson));
    }

  }

  loginApi(userLogin: any): Observable<any> {
    return this.httpClient
      .post(
        'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
        userLogin
      )
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
  addListUser(nguoiDung:NguoiDung): Observable<any> {
    let url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`;
    return this.httpClient.post(url,nguoiDung).pipe(tap((data: any) => {
      console.log(data);
    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }

  getListUser(): Observable<any> {
    let url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    return this.httpClient.get(url).pipe(tap((data: any) => {
    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }
  getListUserGroup(maNhom:any): Observable<any> {
    let url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`;
    return this.httpClient.get(url).pipe(tap((data: any) => {
    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }

  infoUser(token:any): Observable<any> {
    let url ="https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung";
    return this.httpClient.post(url,token).pipe(tap((data: any) => {
      console.log(data);
    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }

}
