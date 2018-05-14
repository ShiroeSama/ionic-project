import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular';

// Controller
import { DetailPage } from '../detail/detail';

// Model
import { Rando } from '../../model/Rando/Rando';

// Services
import { RandoFactory } from '../../service/Rando/RandoFactory';

// --------------------------------
// Controller : Home

@Component({
    selector: 'home',
    templateUrl: 'home.html'
})
export class HomePage {
    private randos: Array<Rando>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.randos = [];
        this.initialized();
    }

    initialized() {
        var rando_1 = RandoFactory.generate('Rando 1');
        var rando_2 = RandoFactory.generate('Rando 2');

        this.randos.push(rando_1);
        this.randos.push(rando_2);
    }

    getRandos(): Array<Rando> {
        return this.randos;
    }

    detail(event, item:Rando) {
        this.navCtrl.push(DetailPage, {
            rando: item
        });
    }
}
