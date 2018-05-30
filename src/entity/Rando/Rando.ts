import { Point } from '../Point/Point';

// --------------------------------
// Model : Rando

export class Rando {
  private name:string;
  private locality:string;
  private description:string;
  private time:string;
  private height_diff:string;
  private score:string;

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
  // Adress

  setLocality(locality:string): Rando {
    this.locality = locality;
    return this;
  }

  getLocality(): string {
    return this.locality;
  }

  // ----------------
  // Description

  setDescription(description:string): Rando {
    this.description = description;
    return this;
  }

  getDescription(): string {
    return this.description;
  }

  // ----------------
  // Time

  setTime(time:string): Rando {
    this.time = time;
    return this;
  }

  getTime(): string {
    return this.time;
  }

  // ----------------
  // Height_diff

  setHeightDiff(height_diff:string): Rando {
    this.height_diff = height_diff;
    return this;
  }

  getHeightDiff(): string {
    return this.height_diff;
  }
  // ----------------
  // Score

  setScore(score:string): Rando {
    this.score = score;
    return this;
  }

  getScore(): string {
    return this.score;
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
