import { Vector3 } from "./Vector3";

export class Plane {
    public A: number;
    public B: number;
    public C: number;
    public D: number;

    constructor(A: number, B: number, C: number, D: number);
    constructor(A: number, B: number, C: number, vec: Vector3);
    constructor(vec1: Vector3, vec2: Vector3, vec3: Vector3);
    constructor(plane: Plane);
    constructor(one: number | Vector3 | Plane, two?: number | Vector3, three?: number | Vector3, four?: number | Vector3) {
        if (one instanceof Plane) {
            this.setABCD(one.A, one.B, one.C, one.D);
        } else if (one instanceof Vector3) {
            this.fromVecs(one, two as Vector3, three as Vector3);
        } else {
            if (typeof four === "number")
                this.setABCD(one, two as number, three as number, four);
            else
                this.fromABC(one, two as number, three as number, four);
        }
    }

    private setABCD(A: number, B: number, C: number, D: number) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
    }

    private fromABC(A: number, B: number, C: number, vec: Vector3) {
        this.setABCD(A, B, C, -vec.dot(new Vector3(A, B, C)));
    }

    private fromVecs(vec1: Vector3, vec2: Vector3, vec3: Vector3) {
        const d1 = Vector3.minus(vec2, vec1).normalize();
        const d2 = Vector3.minus(vec3, vec1).normalize();
        const cross = Vector3.cross(d1, d2);
        this.fromABC(cross.x, cross.y, cross.z, vec1);
    }

    clone() {
        return new Plane(this);
    }
}
