import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';
import { NotificationService } from 'src/app/core/share/data/notification.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  noInfo: any = null;

  noSignUp: string = "";

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
          this.noInfo = result;
          this.dataService.form.reset();
          this.dataService.resetFormGroup();
          this.notificationService.success(`You have successfully registered`);
          setTimeout(() => {this.router.navigate(["/signin"])}, 10000);
        },
        (error) => {
        console.log(error.error);
        this.noSignUp = error.error;
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
