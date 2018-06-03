import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

// Controller
import { DetailPage } from '../detail/detail';

// Entity
import { Rando } from '../../entity/Rando/Rando';

// Repository
import { RandoRepository } from '../../repository/Rando/RandoRepository';

declare var google;

@Component({
  templateUrl: 'listRando.html'
})
export class ListRando {
  protected repository: RandoRepository;
  protected randos: Array<Rando>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.repository = new RandoRepository();
    this.randos = this.repository.findAll();
  }

  getRandos(): Array<Rando> {
    return this.randos;
  }

  detail(event, item:Rando) {
    this.navCtrl.push(DetailPage, {
      rando: item
    });
  }


  /*
  ionViewDidLoad(){
  this.loadMap();
}

loadMap(){
this.geolocation.getCurrentPosition().then((position) => {
let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
let mapOptions = {
center: latLng,
zoom: 15,
mapTypeId: google.maps.MapTypeId.ROADMAP
}
this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
}, (err) => {
console.log(err);
});
}

addMarker(){
let marker = new google.maps.Marker({
map: this.map,
animation: google.maps.Animation.DROP,
position: this.map.getCenter()
});
let content = "<h4>Information!</h4>";
this.addInfoWindow(marker, content);
}

addInfoWindow(marker, content){
let infoWindow = new google.maps.InfoWindow({
content: content
});
google.maps.event.addListener(marker, 'click', () => {
infoWindow.open(this.map, marker);
});
}
*/
}
