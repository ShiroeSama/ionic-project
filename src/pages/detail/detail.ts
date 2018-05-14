import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Model
import { Rando } from '../../model/Rando/Rando';

// --------------------------------
// Controller : Home

@Component({
    selector: 'detail',
    templateUrl: 'detail.html'
})
export class DetailPage {
    private rando:Rando;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.rando = navParams.get('rando');
    }

    getRando(): Rando {
        return this.rando;
    }
}
