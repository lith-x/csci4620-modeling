import { expect } from "chai";

import { Vector3 } from "../src/Vector3";
import { Ray } from "../src/Ray";
import { Plane } from "../src/Plane";

describe("Ray Class", function () {
    describe("Constructor", function () {
        it("Stores start and end", function () {
            const ray = new Ray(Vector3.Zero, Vector3.One);
            expect(ray.start).to.eql(Vector3.Zero);
            expect(ray.end).to.eql(Vector3.One);
        });
    });

    describe("normalize", function () {
        it("Nomalizes correctly", function () {
            const normalized = new Ray(Vector3.Zero, Vector3.One).normalize();
            expect(normalized.end.x).to.equal(1 / Math.sqrt(3));
            expect(normalized.end.y).to.equal(1 / Math.sqrt(3));
            expect(normalized.end.z).to.equal(1 / Math.sqrt(3));
        });
    });
    
    describe("direction", function () {
        it("Returns the correct direction [member]", function () {
            const direction = new Ray(Vector3.Zero, Vector3.One).direction;
            expect(direction.x).to.equal(1);
            expect(direction.y).to.equal(1);
            expect(direction.z).to.equal(1);
        });
    });
    
    describe("length", function () {
        it("Returns the correct length [member]", function () {
            const ray = new Ray(Vector3.Zero, Vector3.PositiveX);
            expect(ray.length).to.equal(1);
        });
    });

    describe("distanceToPlane", function () {
        it("Calculates the correct distance", function () {
            const ray = new Ray(Vector3.PositiveY, Vector3.Zero);
            const distance = ray.distanceToPlane(new Plane(0, 1, 0, 0));
            expect(distance).to.equal(1);
        });
    });
});
