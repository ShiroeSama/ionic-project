import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

// Model
import { Rando } from '../../entity/Rando/Rando';

// Constant
declare var google;

// --------------------------------
// Component : Map
@Component({
  selector: 'Map',
  templateUrl: 'map.component.html'
})
export class MapComponent {
  @Input() private rando: Rando;
  @ViewChild('map') private mapElement: ElementRef;
  private map: any;
  private geolocation: Geolocation;

  constructor(geolocation: Geolocation) {
    this.geolocation = geolocation;
    this.loadMap();
  }

  loadMap() {
    //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.geolocation.getCurrentPosition().then((position) => {
      var trace = [];

      this.rando.getPoints().forEach((point) => {
        let position = new google.maps.LatLng(
          point.getLatitude(),
          point.getLatitude()
        );

        trace.push(position);
      });

      let mapOptions = {
        center: trace[0],
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      trace.forEach((position) => {
        let marker = new google.maps.Marker({
          position: position,
          map: this.map,
        });
      });

      var traceRando = new google.maps.Polyline({
	        path: trace, //chemin du tracé
	        strokeColor: "#FF0000", //couleur du tracé
	        strokeOpacity: 1.0, //opacité du tracé
	        strokeWeight: 2 //grosseur du tracé
      });

      traceRando.setMap(this.map);
    }, (err) => {
      console.log(err);
    });
  }

  /*addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Information!</h4>";
    this.addInfoWindow(marker, content);
  }*/

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}
