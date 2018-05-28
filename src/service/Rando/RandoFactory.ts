// Model
import { Rando } from '../../entity/Rando/Rando';
import { Point } from '../../entity/Point/Point';

// --------------------------------
// Service : RandoFactory

export class RandoFactory {

    static generate(name: string) {
        var point_1 = new Point();
        point_1
            .setName('Start')
            .setLatitude(30)
            .setLongitude(55)
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
