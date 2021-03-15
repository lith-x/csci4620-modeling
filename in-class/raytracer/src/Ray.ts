import { Plane } from "./Plane";
import { Vector3 } from "./Vector3";

export class Ray {
    public start: Vector3;
    public end: Vector3;
    public get direction() { return Vector3.minus(this.end, this.start); }
    public get length() { return this.direction.length; }

    constructor(start: Vector3, end: Vector3);
    constructor(ray: Ray);
    constructor(one: Vector3 | Ray, two?: Vector3) {
        if (one instanceof Vector3) {
            this.start = one.clone();
            this.end = two.clone();
        } else {
            this.start = one.start.clone();
            this.end = one.end.clone();
        }
    }

    normalize() {
        this.end = Vector3.plus(this.start, this.direction.scale(1 / this.length));
        return this;
    }

    distanceToPlane(p: Plane) {
        return -(p.A * this.start.x + p.B * this.start.y + p.C * this.start.z + p.D) /
            (p.A * this.direction.x + p.B * this.direction.y + p.C * this.direction.z);
    }

    clone() {
        return new Ray(this);
    }
}
