import { Component, OnDestroy, OnInit } from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'my-app';
  mediaSub!: Subscription;
  deviceXs!: boolean;
  constructor(public mediaObserver: MediaObserver){}
  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange) =>{
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias ==="xs" ? true: false;
    })
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}
