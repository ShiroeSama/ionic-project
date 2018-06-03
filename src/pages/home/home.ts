import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

// Controller
import { ListRando } from '../listRando/listRando';

// Entity
import { Rando } from '../../entity/Rando/Rando';

// Repository
import { RandoRepository } from '../../repository/Rando/RandoRepository';

declare var google;

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  logIn(){
    console.log("Username :"+this.username);
    console.log("Password :"+this.password);
    if(this.username=="admin" && this.password=="admin"){
      this.navCtrl.push(ListRando);
    }
  }
}
