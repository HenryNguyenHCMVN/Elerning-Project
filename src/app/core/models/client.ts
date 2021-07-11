export class NguoiDung {
  public taiKhoan: any;
  public email: any;
  public soDT: any;
  public hoTen: any;
  public maLoaiNguoiDung: any;
  public matKhau: any;
}

export class UserSignUpManagement {
  public email?: string;
  public hoTen?: string;
  public maLoaiNguoiDung?: string;
  public soDt?: string;
  public taiKhoan?: string;
}

export class KhoaHoc {
  public maKhoaHoc?: string;
  public tenKhoaHoc?: string;
  public hinhAnh?: any;
  public danhMucKhoaHoc?: string;
}


export interface UserSignIn {
  taiKhoan:        string;
  email:           string;
  soDT:            string;
  maNhom:          string;
  maLoaiNguoiDung: string;
  hoTen:           string;
  accessToken:     string;
}

