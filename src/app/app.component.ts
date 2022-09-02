
import { AppState } from './store/app.store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadingSub: Subscription;
  pageSub: Subscription;
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.doSubscriptions();
  }

  doSubscriptions() {
  }

  ngOnDestroy(): void {

  }
}
