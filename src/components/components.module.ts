import { NgModule } from "@angular/core";
import { FacebookLoginComponent } from "./facebook-login/facebook-login";
import { FirebaseProvider } from "../providers/firebase/firebase";
import { Facebook } from "@ionic-native/facebook";
import { IonicModule } from "ionic-angular";
import { EventCardComponent } from "./event-card/event-card";
import { EventCoverImageComponent } from "./event-cover-image/event-cover-image";
import { GoogleMaps } from "@ionic-native/google-maps";

@NgModule({
  declarations: [
    FacebookLoginComponent,
    EventCardComponent,
    EventCoverImageComponent
  ],
  imports: [IonicModule],
  providers: [FirebaseProvider, Facebook],
  exports: [
    FacebookLoginComponent,
    EventCardComponent,
    EventCoverImageComponent
  ]
})
export class ComponentsModule {}
