import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KhoaHoc, UserSignUpManagement } from 'src/app/core/models/client';
import { CourseService } from 'src/app/core/services/course/course.service';

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

  public displayedColumns: string[] = ['maKhoaHoc', 'tenKhoaHoc', 'danhMucKhoaHoc', 'hinhAnh'];

  // mangKhoaHoc: KhoaHoc [] = [];

  constructor(private courseService: CourseService) { }

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

  applySearch(search: any){
    console.log(search);
    this.mangKhoaHoc.filter = search.key.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.courseService.getListCourseApiGP01().subscribe((result:any) => {
      console.log(result);
      this.mangKhoaHoc.data = result;
    })
  }

}
