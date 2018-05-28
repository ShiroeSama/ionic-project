import { Rando } from '../../entity/Rando/Rando';
import { RandoFactory } from '../../service/Rando/RandoFactory';

// --------------------------------
// Repository : Rando

export class RandoRepository {

    findAll(): Array<Rando> {
      var randos = [];

      randos.push(RandoFactory.generate('Rando 1'));
      randos.push(RandoFactory.generate('Rando 2'));

      return randos;
    }

}
