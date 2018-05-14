// Model
import { Rando } from '../../model/Rando/Rando';
import { Point } from '../../model/Point/Point';

// --------------------------------
// Service : RandoFactory

export class RandoFactory {

    static generate(name: string) {
        var point_1 = new Point();
        point_1
            .setName('Start')
            .setLatitude(0)
            .setLongitude(0)
        ;

        var point_2 = new Point();
        point_2
            .setName('End')
            .setLatitude(1)
            .setLongitude(1)
        ;

        var rando = new Rando();
        rando
            .setName(name)
            .setPoint(point_1)
            .setPoint(point_2)
        ;

        return rando;
    }
}
