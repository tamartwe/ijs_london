import Car from './Car';


function race(distance: number, cars : Array<Car>) {
    cars.forEach((car) => {
        car.timeToDistance(distance);
    });
}
