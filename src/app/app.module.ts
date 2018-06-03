import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';

// Controller
import { HomePage } from '../pages/home/home';
import { ListRando } from '../pages/listRando/listRando';
import { DetailPage } from '../pages/detail/detail';

// Components
import { MapComponent } from '../component/map/map.component';

// Native Components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,

    // Controllers
    HomePage,
    ListRando,
    DetailPage,

    // Components
    MapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    // Controllers
    HomePage,
    ListRando,
    DetailPage,

    // Components
    MapComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
