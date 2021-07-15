import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserSignUpManagement } from 'src/app/core/models/client';
import { CourseService } from 'src/app/core/services/course/course.service';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort!: MatSort; //search
  @ViewChild(MatPaginator) paginator!: MatPaginator; //phân trang

  public ELEMENT_DATA!: UserSignUpManagement[];//đối tượng tạo từ client.ts
  public mangKhoaHoc = new MatTableDataSource(this.ELEMENT_DATA);

  public mangMaNhom: Array<any> = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"];

  public displayedColumns: string[] = ['maKhoaHoc', 'tenKhoaHoc','hinhAnh','luotXem','danhMucKhoaHoc','nguoiTao','hanhDong'];

  searchKey: any;

  constructor(private courseService: CourseService, private matDialog: MatDialog) { }

  maNhom: any;

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

  ngOnInit(): void {

    //lấy API danh sách tĩnh
    this.courseService.getListCourseApiGP01().subscribe((result:any) => {
      console.log(result);
      this.mangKhoaHoc.data = result;
    })
  }

  addACourse(){
    console.log('123');


    // set cứng top-up khi xuất hiện
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.width="60%";
    this.matDialog.open(AddCourseComponent,matDialogConfig);
  }

}
