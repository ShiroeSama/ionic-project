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
            .setLatitude(45.763932)
            .setLongitude(2.955537)
        ;

        var point_2 = new Point();
        point_2
            .setName('End')
            .setLatitude(45.771256)
            .setLongitude(2.962405)
        ;

        var rando = new Rando();
        rando
            .setName(name)
            .setPoint(point_1)
            .setPoint(point_2)
            .setLocality("Puy de Dôme 63870 Orcines")
            .setDescription("Amoureux du grand air, la nature vous ouvre les bras. Découverte, culture, sport, ou détente... le volcan du puy de Dôme offre une palette d’activités pour toute la famille. Il surplombe l'ensemble des quelques 80 volcans de la Chaîne des Puys. ")
            .setTime("2H30")
            .setHeightDiff("300 M")
        ;

        return rando;
    }
}
