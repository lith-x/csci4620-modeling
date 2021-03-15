const vX = 0;
const vY = 1;
const vZ = 2;
const vR = vX;
const vG = vY;
const vB = vZ;

export class Vector3 {
    static get Zero() { return new Vector3(0, 0, 0); }
    static get One() { return new Vector3(1, 1, 1); }
    static get PositiveX() { return new Vector3(1, 0, 0); }
    static get PositiveY() { return new Vector3(0, 1, 0); }
    static get PositiveZ() { return new Vector3(0, 0, 1); }
    static get NegativeX() { return new Vector3(-1, 0, 0); }
    static get NegativeY() { return new Vector3(0, -1, 0); }
    static get NegativeZ() { return new Vector3(0, 0, -1); }


    private v: number[] = [];

    public get x() { return this.v[vX]; }
    public set x(val: number) { this.v[vX] = val; }
    public get y() { return this.v[vY]; }
    public set y(val: number) { this.v[vY] = val; }
    public get z() { return this.v[vZ]; }
    public set z(val: number) { this.v[vZ] = val; }

    public get r() { return this.v[vR]; }
    public set r(val: number) { this.v[vR] = val; }
    public get g() { return this.v[vG]; }
    public set g(val: number) { this.v[vG] = val; }
    public get b() { return this.v[vB]; }
    public set b(val: number) { this.v[vB] = val; }

    public get length() { return Math.sqrt(this.v.reduce((a, b) => a + b ** 2, 0)); }

    constructor(x: number, y: number, z: number);
    constructor(v: Vector3);
    constructor(one: number | Vector3, two?: number, three?: number) {
        if (typeof one === "number")
            this.v.push(one, two, three);
        else
            this.v.push(one.x, one.y, one.z);
    }

    normalize() {
        const l = this.length;
        this.v = this.v.map(a => a / l);
        return this;
    }

    static normalize(vec: Vector3) {
        return vec.clone().normalize();
    }

    scale(scalar: number) {
        this.v = this.v.map(a => a * scalar);
        return this;
    }

    static scale(vec: Vector3, s: number) {
        return vec.clone().scale(s);
    }

    plus(vec: Vector3) {
        this.v = this.v.map((val, i) => val + vec.v[i]);
        return this;
    }

    static plus(vec1: Vector3, vec2: Vector3) {
        return vec1.clone().plus(vec2);
    }

    minus(vec: Vector3) {
        this.v = this.v.map((val, i) => val - vec.v[i]);
        return this;
    }

    static minus(vec1: Vector3, vec2: Vector3) {
        return vec1.clone().minus(vec2);
    }

    dot(vec: Vector3) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    }

    cross(vec: Vector3) {
        const oldX = this.x;
        const oldY = this.y;
        const oldZ = this.z;
        this.x = oldY * vec.z - oldZ * vec.y;
        this.y = oldZ * vec.x - oldX * vec.z;
        this.z = oldX * vec.y - oldY * vec.x;
        return this;
    }

    static cross(vec1: Vector3, vec2: Vector3) {
        return vec1.clone().cross(vec2);
    }

    clone() {
        return new Vector3(this);
    }
}