import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NguoiDung } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public mangMaNhom: Array<any> = [
    "GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP010"
  ];

  mangNguoiDung: NguoiDung[] = [];

  constructor( private authService: AuthService, private router:Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  DangKy(nguoiDung:NguoiDung){
    this.authService.addListUser(nguoiDung).subscribe((result:any) =>{
     console.log(result);
     alert("Successfully")
     this.router.navigate(["/signin"]);
    },
    (error:any) => {
      console.log(error);
    })

  }

  onClear(){
    this.dataService.form.reset();
    this.dataService.initializeFormGroup();
  }

}
