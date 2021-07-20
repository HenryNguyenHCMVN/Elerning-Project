import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NguoiDung } from 'src/app/core/models/client';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';
import { SigninComponent } from '../signin/signin.component';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  public mangMaNhom: Array<any> = [
    "GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP010"
  ];

  constructor(  private authService: AuthService,
                private router:Router,
                public dataService: DataService,
                public notificationService: NotificationService) { }

  ngOnInit(): void {

  }

  handleSignIn() :void{
    if (this.dataService.form.valid) {
        this.authService.addListUser(this.dataService.form.value).subscribe((result) =>{
          console.log(result);
          this.dataService.form.reset();
          this.dataService.resetFormGroup();
          this.notificationService.success(`::: Submitted successfully :::`);
          this.router.navigate(["/signin"]);
        },
        (error) => {
          console.log(error);
        }
        )
    }
  }
  onClear(){
    this.dataService.form.reset();
    this.dataService.resetFormGroup();
    this.notificationService.success(`::: Clear successfully :::`)
  }
}
