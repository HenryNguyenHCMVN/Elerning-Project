import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'; //add tap để xử lý thành công hoặc thất bại
import { BehaviorSubject, Observable } from 'rxjs';
import { DangKyNguoiDung, NguoiDung, NguoiDungDangNhap, ThongTinNguoiDung, TimKiemNguoiDung } from '../../models/client';
import { ApiService } from '../API/api.service';

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


  constructor(private httpClient: HttpClient, private api: ApiService) {

    // setState lại data khi user signout & signin
    // sẽ setstate ở day rat nhieu lan ko chi o sigin service mà còn nhiều tác vụ khác
    const userJson = localStorage.getItem('userLogin');
    if (userJson) {
      this.setCurrentUser(JSON.parse(userJson));
    }

  }

  loginApi(userLogin: any): Observable<NguoiDungDangNhap> {
    return this.api.post<NguoiDungDangNhap>('QuanLyNguoiDung/DangNhap',userLogin)
      .pipe(
        tap((data) => {
          console.log(data);
        })
        )}


  addListUser(nguoiDung:DangKyNguoiDung): Observable<DangKyNguoiDung> {
    let url = `QuanLyNguoiDung/DangKy`;
    return this.httpClient.post<DangKyNguoiDung>(url,nguoiDung).pipe(tap((data: any) => {
      console.log(data);
    }),
      )
  }

  getListUser(): Observable<TimKiemNguoiDung> {
    let url = `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01`;
    return this.httpClient.get<TimKiemNguoiDung>(url).pipe(tap((data: any) => {
      console.log(data);

    }),
    )
  }
  getListUserGroup(maNhom:any): Observable<TimKiemNguoiDung[]> {
    let url = `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}`;
    return this.httpClient.get<TimKiemNguoiDung[]>(url).pipe(tap((data: any) => {
      console.log(data);

    }),
     )
  }

  infoUser(token:any): Observable<ThongTinNguoiDung> {
    let url ="QuanLyNguoiDung/ThongTinNguoiDung";
    return this.httpClient.post<ThongTinNguoiDung>(url,token).pipe(tap((data: any) => {
      console.log(data);
    }),
    )
  }

  // updateUser(): Observable<any> {
  //   let url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
  //   return this.httpClient.put(url).pipe(tap((data: any) => {
  //     console.log(data);

  //   }),
  //     catchError(err => {
  //       console.log(err);
  //       return err
  //     }))
  // }

  deteteUser(taiKhoan:any): Observable<any> {
    let url = `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return this.httpClient.delete(url).pipe(tap((data: any) => {
      console.log(data);

    }),
      catchError(err => {
        console.log(err);
        return err
      }))
  }
}
