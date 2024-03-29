import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { ENV } from "@app/env";
import { FirebaseProvider } from "../providers/firebase/firebase";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FilterEffects } from "../effects/filter.effects";
import { filterReducer } from "../reducers/filter.reducer";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { eventsReducer } from "../reducers/events.reducer";
import { EventsEffects } from "../effects/events.effects";
import { userReducer } from "../reducers/user.reducer";
import { UserEffects } from "../effects/user.effects";
import { GeolocationProvider } from "../providers/geolocation/geolocation";
import { Geolocation } from "@ionic-native/geolocation";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(ENV.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,

    StoreModule.forRoot({
      filter: filterReducer,
      events: eventsReducer,
      user: userReducer
    }),
    EffectsModule.forRoot([FilterEffects, EventsEffects, UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    GeolocationProvider,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
