import { Point } from '../Point/Point';

// --------------------------------
// Model : Rando

export class Rando {
    private name:string;
    private points: Array<Point>;

    constructor() {
        this.points = [];
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
