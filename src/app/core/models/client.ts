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

export interface ThemKhoaHoc {
  maKhoaHoc:        string;
  biDanh:           string;
  tenKhoaHoc:       string;
  moTa:             string;
  luotXem:          number;
  danhGia:          number;
  hinhAnh:          string;
  maNhom:           string;
  ngayTao:          string;
  maDanhMucKhoaHoc: string;
  taiKhoanNguoiTao: string;
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

export interface AddCourse {
  maKhoaHoc:        string;
  biDanh:           string;
  tenKhoaHoc:       string;
  moTa:             string;
  luotXem:          number;
  danhGia:          number;
  hinhAnh:          string;
  maNhom:           string;
  ngayTao:          string;
  maDanhMucKhoaHoc: string;
  taiKhoanNguoiTao: string;
}

export interface registerCourse {
  maKhoaHoc: any;
  taiKhoan: any;
}
