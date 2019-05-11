export default class Car {
    brand: string;
    color: string;
    speed: number;

    constructor(brand, color, speed) {
        this.brand = brand;
        this. color = color;
        this.speed = speed;
    }

    public timeToDistance( distance: number) : number {
        return distance / this.speed;
    }
}