import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CapNhatKhoaHoc, CapNhatNguoiDung, UserSignUpManagement } from 'src/app/core/models/client';
import { CourseService } from 'src/app/core/services/course/course.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { AddCourseComponent } from '../add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  constructor(private courseService: CourseService,
    private matDialog: MatDialog,
    public activatedRoute: ActivatedRoute,
    public dataService:DataService) { }

    ngOnInit(): void {

      //lấy API danh sách tĩnh
      this.courseService.getListCourseApiGP01().subscribe((result:any) => {
        console.log(result);
        this.mangKhoaHoc.data = result;
      })
    }

  @ViewChild('formCapNhatKH') capNhatKH!:NgForm;

  @ViewChild(MatSort, { static: true }) sort!: MatSort; //search
  @ViewChild(MatPaginator) paginator!: MatPaginator; //phân trang

  public ELEMENT_DATA!: UserSignUpManagement[];//đối tượng tạo từ client.ts
  public mangKhoaHoc = new MatTableDataSource(this.ELEMENT_DATA);

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"];

  public displayedColumns: string[] = ['maKhoaHoc', 'tenKhoaHoc','hinhAnh','luotXem','danhMucKhoaHoc','nguoiTao','xoa','capNhat','caiDat'];

  searchKey: any;

  formCapNhatKH?: FormGroup;

  maNhom: any;

  id: any;

  chonNhom(maNhom:any){
    this.courseService.getListCourseApi(maNhom).subscribe((result) => {
      this.mangKhoaHoc.data = result;
    })
  }

  ngAfterViewInit() {
    //tạo hành động cho phân trang và search
    this.mangKhoaHoc.paginator = this.paginator;
    this.mangKhoaHoc.sort = this.sort;
  }

  // search
  applySearch(){
    this.mangKhoaHoc.filter = this.searchKey.trim().toLowerCase();
  }
  //clear search
  onSearchClear(){
    this.searchKey = "";
    this.applySearch();
  }

  //thêm khóa học
  addACourse(){
    // set cứng top-up khi xuất hiện
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.width="50%";
    this.matDialog.open(AddCourseComponent,matDialogConfig);
  }

  //deleted khóa học
  delCourse(course:any){
      if (confirm('Are you sure to delete???')) {
        this.courseService.deleteCourse(course).subscribe((res) =>{
          alert('res' + res)
        },(error) =>{
          console.log('error' + error);

        });
      }
  }

  //cập nhật khóa học
  updateCourse(course:any){
    console.log('UpdateCourse: ', course);

    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.width="50%";
    this.matDialog.open(EditCourseComponent,matDialogConfig);

    this.dataService.formeditCourse.setValue({
      maKhoaHoc:          course.maKhoaHoc,
      tenKhoaHoc:         course.tenKhoaHoc,
      moTa:               course.moTa,
      luotXem:            course.luotXem,
      danhGia:            "0",
      hinhAnh:            course.hinhAnh,
      maNhom:             course.maNhom,
      ngayTao:            course.ngayTao,
      maDanhMucKhoaHoc:   course.danhMucKhoaHoc.maDanhMucKhoahoc,
      taiKhoanNguoiTao:   course.nguoiTao.taiKhoan,
    })
  }
  }

