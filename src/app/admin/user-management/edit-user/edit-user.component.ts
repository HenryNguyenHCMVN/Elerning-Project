import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/share/data/data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: any = null;

  token:any;


  public mangMaNhom: Array<any> = [
    "GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP010"
  ];

  constructor(public dataService:DataService, public authService:AuthService) { }

  ngOnInit(): void {
    // this.authService.currentUser.subscribe((data) => {
    //     this.user = data;
    //   this.token = this.user.accessToken;
    //   console.log(this.token);//cai formControl o dau v anh

    // })
  }

  handleEditUser(){
    // console.log(this.dataService.formEdit.value);
    // this.authService.updateUser(this.dataService.formEdit.value).subscribe((data) =>{
    //   console.log(data);

    // })

  }

}
