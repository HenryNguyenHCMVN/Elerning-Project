import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/share/data/data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public mangMaNhom: Array<any> = [
    "GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP010"
  ];

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

  handleAddUser(){
    console.log(this.dataService.form.value);
  }

}
