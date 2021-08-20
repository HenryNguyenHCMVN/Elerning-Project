import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout'
import { Subscription } from 'rxjs'
import { LoaderService } from './core/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app';

  public loading: Boolean = false;
  private subCription = new Subscription;
  constructor(public loaderService: LoaderService, private changeDetectorRef: ChangeDetectorRef) { }
  ngOnInit() { }

  ngAfterViewInit() {
    this.subCription.add(this.loaderService.isLoading.subscribe(data => {
      this.loading = data;
      this.changeDetectorRef.detectChanges();
    }))
  }

  ngOnDestroy() {
    this.subCription.unsubscribe();
  }
}
