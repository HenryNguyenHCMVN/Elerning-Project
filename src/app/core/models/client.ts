export class NguoiDung {
  public taiKhoan: any;
  public email: any;
  public soDT: any;
  public hoTen: any;
  public maLoaiNguoiDung: any;
  public matKhau: any;
}

export interface DangKyNguoiDung {
  taiKhoan: string;
  matKhau:  string;
  hoTen:    string;
  soDT:     string;
  maNhom:   string;
  email:    string;
}


export class UserSignUpManagement {
  public email?: string;
  public hoTen?: string;
  public maLoaiNguoiDung?: string;
  public soDt?: string;
  public taiKhoan?: string;
}

export interface NguoiDungDangNhap {
  taiKhoan:        string;
  email:           string;
  soDT:            string;
  maNhom:          string;
  maLoaiNguoiDung: string;
  hoTen:           string;
  accessToken:     string;
}

export interface TimKiemNguoiDung {
  taiKhoan:         string;
  hoTen:            string;
  email:            string;
  soDt:             string;
  matKhau:          string;
  maLoaiNguoiDung:  string;
  tenLoaiNguoiDung: string;
  maNhom:           string;
}

export interface ThongTinNguoiDung {
  chiTietKhoaHocGhiDanh: ChiTietKhoaHocGhiDanh[];
  taiKhoan:              string;
  matKhau:               string;
  hoTen:                 string;
  soDT:                  string;
  maLoaiNguoiDung:       string;
  maNhom:                string;
  email:                 string;
}

export interface ChiTietKhoaHocGhiDanh {
  maKhoaHoc:  string;
  tenKhoaHoc: string;
}

export interface CapNhatNguoiDung {
  taiKhoan:        string;
  matKhau:         string;
  hoTen:           string;
  soDT:            string;
  maLoaiNguoiDung: string;
  maNhom:          string;
  email:           string;
}

//COURSE

export interface DanhSachKhoaHoc {
  maKhoaHoc:      string;
  biDanh:         string;
  tenKhoaHoc:     string;
  moTa:           string;
  luotXem:        number;
  hinhAnh:        string;
  maNhom:         string;
  ngayTao:        string;
  soLuongHocVien: number;
  nguoiTao:       NguoiTAO;
  danhMucKhoaHoc: DanhMucKhoaHoc;
}

export interface DanhMucKhoaHoc {
  maDanhMucKhoahoc:  string;
  tenDanhMucKhoaHoc: string;
}

export interface NguoiTAO {
  taiKhoan:         string;
  hoTen:            string;
  maLoaiNguoiDung:  string;
  tenLoaiNguoiDung: string;
}

export class KhoaHoc {
  public maKhoaHoc?: string;
  public tenKhoaHoc?: string;
  public hinhAnh?: any;
  public danhMucKhoaHoc?: string;
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

export interface DangKyKhoaHoc {
  maKhoaHoc: string;
  taiKhoan:  string;
}

export interface CapNhatKhoaHoc {
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
