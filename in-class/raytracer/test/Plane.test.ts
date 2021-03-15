import { expect } from "chai";

import { Plane } from "../src/Plane";
import { Vector3 } from "../src/Vector3";

describe("Plane Class", function () {
    describe("Constructor", function () {
        it("Correctly stores the values", function () {
            const plane = new Plane(1, 2, 3, 4);
            expect(plane.A).to.equal(1);
            expect(plane.B).to.equal(2);
            expect(plane.C).to.equal(3);
            expect(plane.D).to.equal(4);
        });
    });

    describe("fromABC", function () {
        it("Correctly calculates D", function () {
            const plane = new Plane(0, 1, 0, Vector3.Zero);
            expect(plane.A).to.equal(0);
            expect(plane.B).to.equal(1);
            expect(plane.C).to.equal(0);
            expect(plane.D).to.equal(0);
        });

        it("Correctly calculates D b", function () {
            const plane = new Plane(0, 1, 0, Vector3.PositiveY);
            expect(plane.A).to.equal(0);
            expect(plane.B).to.equal(1);
            expect(plane.C).to.equal(0);
            expect(plane.D).to.equal(-1);
        });
    });

    describe("fromThreeVectors", function () {
        it("Correctly calculates A B C D", function () {
            const plane = new Plane(Vector3.Zero, Vector3.PositiveX, Vector3.PositiveY);
            expect(plane.A).to.equal(0);
            expect(plane.B).to.equal(0);
            expect(plane.C).to.equal(1);
            expect(plane.D).to.equal(0);
        });
    });
});