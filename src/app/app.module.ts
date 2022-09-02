import { UIEffects } from './store/ui/ui.effects';
import { AuthEffects } from './store/auth/auth.effects';
import { AppReducer } from './store/app.store';
import { environment } from './../environments/environment';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([AuthEffects, UIEffects]),
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    AngularFirestore,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
