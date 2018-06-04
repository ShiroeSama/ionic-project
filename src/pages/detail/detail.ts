import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

// Model
import { Rando } from '../../entity/Rando/Rando';

// Component
import { MapComponent } from '../../component/map/map.component';
import { TimerComponent } from '../../component/timer/timer.component';
// Constant
declare var google;

// --------------------------------
// Controller : Home
@Component({
  templateUrl: 'detail.html'
})
export class DetailPage {
  private rando: Rando;
  public timer: TimerComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rando = navParams.get('rando');
  }

  getRando(): Rando {
    return this.rando;
  }

  ngOnInit() {
    var my_timer = this.timer;
    setTimeout(() => {
      my_timer.startTimer();
    }, 1000)
  }
}
