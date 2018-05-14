import { Point } from '../Point/Point';

// --------------------------------
// Model : Rando

export class Rando {
    private name:string;
    private points: Array<Point>;

    constructor() {
        this.points = [];
    }

    initialized() {
        var start = new Point();
        start
            .setName('Start')
            .setLatitude(0)
            .setLongitude(0)
        ;

        var end = new Point();
        end
            .setName('End')
            .setLatitude(1)
            .setLongitude(1)
        ;

        this.points.push(start);
        this.points.push(end);
    }

    // ----------------
    // Name

    setName(name:string): Rando {
        this.name = name;
        return this;
    }

    getName(): string {
        return this.name;
    }

    // ----------------
    // Point

    setPoint(point:Point): Rando {
        this.points.push(point);
        return this;
    }

    // ----------------
    // Points

    setPoints(points:Array<Point>): Rando {
        this.points = points;
        return this;
    }

    getPoints(): Array<Point> {
        return this.points;
    }
}
