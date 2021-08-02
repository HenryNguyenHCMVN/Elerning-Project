import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoaderService } from '../core/loader/loader.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  categoryList: any = [];

  searchKey: any;

  constructor(public loaderService:LoaderService, private breakpointObserver: BreakpointObserver) { }

      // search
      applySearch(){
        this.categoryList.filter = this.searchKey.trim().toLowerCase();
      }
      //clear search
      onSearchClear(){
        this.searchKey = "";
        this.applySearch();
      }

  ngOnInit(): void {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

}
