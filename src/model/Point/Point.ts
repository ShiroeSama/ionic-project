// --------------------------------
// Model : Point

export class Point {
    private name:string;
    private latitude:number;
    private longitude:number;

    constructor() {
        this.name = '';
        this.latitude = -1;
        this.longitude = -1;
    }

    // ----------------
    // Name

    setName(name:string): Point {
        this.name = name;
        return this;
    }

    getName(): string {
        return this.name;
    }

    // ----------------
    // Latitude

    setLatitude(latitude:number): Point {
        this.latitude = latitude;
        return this;
    }

    getLatitude(): number {
        return this.latitude;
    }

    // ----------------
    // Longitude

    setLongitude(longitude:number): Point {
        this.longitude = longitude;
        return this;
    }

    getLongitude(): number {
        return this.longitude;
    }
}
