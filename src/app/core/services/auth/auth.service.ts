import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'; //add tap để xử lý thành công hoặc thất bại
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CapNhatNguoiDung, DangKyNguoiDung, NguoiDungDangNhap, ThongTinNguoiDung, TimKiemNguoiDung } from '../../models/client';
import { ApiService } from '../API/api.service';
import { NotificationService } from '../../share/data/notification.service';

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

    // Account
    private currentAccount = new BehaviorSubject(null)
    shareAccount = this.currentAccount.asObservable();
    getCurrentAccount(): any {
      return this.currentAccount.value
    }
    setCurrentAccount(value: any) {
      this.currentAccount.next(value)
    }


  constructor(private api: ApiService, public notificationService:NotificationService) {

    // setState lại data khi user signout & signin
    // sẽ setstate ở day rat nhieu lan ko chi o sigin service mà còn nhiều tác vụ khác
    const userJson = localStorage.getItem('userLogin');
    if (userJson) {
      this.setCurrentUser(JSON.parse(userJson));
    }

    const userJsonAccount = localStorage.getItem('userLogin');
    if (userJsonAccount) {
      this.setCurrentAccount(JSON.parse(userJsonAccount));
    }

  }

  //Đăng nhập
  loginApi(userLogin: any): Observable<NguoiDungDangNhap> {
    return this.api.
    post<NguoiDungDangNhap>('QuanLyNguoiDung/DangNhap',userLogin).pipe(tap((data) => {})
        )
      }


  //Đăng ký
  addListUser(nguoiDung:DangKyNguoiDung): Observable<DangKyNguoiDung> {
    let url = `QuanLyNguoiDung/DangKy`;
    return this.api.
    post<DangKyNguoiDung>(url,nguoiDung).pipe(tap((data: any) => {})
      )
  }

  //Tìm kiếm người dùng mã gán cứng là GP01
  getListUser(): Observable<TimKiemNguoiDung> {
    let url = `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01`;
    return this.api.
    get<TimKiemNguoiDung>(url).pipe(tap((data: any) => { })
    )
  }

  //Tìm kiếm người dùng ={maNhom}
  getListUserGroup(maNhom:any): Observable<TimKiemNguoiDung[]> {
    let url = `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}`;
    return this.api.
    get<TimKiemNguoiDung[]>(url,maNhom).pipe(tap((data: any) => {})
     )
  }

  //Thông tin người dùng
  infoUser(taiKhoan:any): Observable<ThongTinNguoiDung> {
    let url ="QuanLyNguoiDung/ThongTinNguoiDung";
    return this.api.
    post<ThongTinNguoiDung>(url,taiKhoan).pipe(tap((data: any) => {})
    )
  }

  //Cập nhật người dùng
  updateUser(user:any): Observable<CapNhatNguoiDung> {
    let url = `QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
    return this.api.put<CapNhatNguoiDung>(url,user).pipe(tap((data: any) => {})
    )
  }

  //Xóa người dùng
  deteteUser(taiKhoan:any): Observable<any> {
    let url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return this.api.delete(url,taiKhoan).pipe(tap((data: any) => {}),
      catchError((err) => {
        if (err.status === 500) {
          this.notificationService.error('Registered User - Cannot be deleted')
        } else {
          this.notificationService.success (':::Deleted successful:::');
          window.location.reload();
        }
        return err;
      }))
  }
}
