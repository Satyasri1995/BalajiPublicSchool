import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

import { AppState } from './store/app.store';
import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { restoreSession } from './store/auth/auth.actions';
import { toggleSplashScreen } from './store/ui/ui.actions';
import { StatusBar } from '@capacitor/status-bar';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

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
    private readonly auth: AngularFireAuth,
    private readonly platform: Platform,
    @Optional() private readonly routerOutlet?: IonRouterOutlet
  ) {}

  ngOnInit(): void {
    StatusBar.setBackgroundColor({
      color: '#3880ff',
    });
    this.store.dispatch(toggleSplashScreen({ display: true }));
    this.authSub = this.auth.authState.subscribe((user) => {
      if (user) {
        this.store.dispatch(restoreSession({ uid: user.uid }));
      } else {
        this.authService.autoLogin();
      }
    });
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet?.canGoBack()) {
        App.exitApp();
      }
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
    this.authService.logout();
  }
}
