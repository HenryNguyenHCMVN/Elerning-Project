import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../core/loader/loader.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {


  constructor(public loaderService:LoaderService) { }

  ngOnInit(): void {
  }

}
