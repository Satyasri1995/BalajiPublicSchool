import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

import { AppState } from './store/app.store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { restoreSession } from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadingSub: Subscription;
  pageSub: Subscription;
  authSub: Subscription;
  constructor(
    private readonly store: Store<AppState>,
    private readonly authService: AuthService,
    private readonly auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.authSub = this.auth.authState.subscribe((user) => {
      if (user.uid) {
        this.store.dispatch(restoreSession({ uid: user.uid }));
      } else {
        this.authService.autoLogin();
      }
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
    this.authService.logout();
  }
}
