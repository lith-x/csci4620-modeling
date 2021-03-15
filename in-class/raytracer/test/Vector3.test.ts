import { expect } from "chai";

import { Vector3 } from "../src/Vector3";

describe("Vector3 Class", function () {
    describe("Constructor", function () {
        it("Stores x,y and z", function () {
            const vec = new Vector3(3, 4, 5);
            expect(vec.x).to.equal(3);
            expect(vec.y).to.equal(4);
            expect(vec.z).to.equal(5);
        });

        it("Stores r, g, and b (assuming r = x, g = y, b = z)", function () {
            const vec = new Vector3(3, 4, 5);
            expect(vec.r).to.equal(3);
            expect(vec.g).to.equal(4);
            expect(vec.b).to.equal(5);
        });
    });

    describe("Clone", function () {
        it("It clones correctly [member method]", function () {
            const vec = new Vector3(3, 4, 5);
            const vec2 = vec.clone();
            expect(vec.x).to.equal(3);
            expect(vec.y).to.equal(4);
            expect(vec.z).to.equal(5);

            expect(vec2.x).to.equal(3);
            expect(vec2.y).to.equal(4);
            expect(vec2.z).to.equal(5);

            vec2.x = 6;
            vec2.y = 7;
            vec2.z = -10;

            expect(vec.x).to.equal(3);
            expect(vec.y).to.equal(4);
            expect(vec.z).to.equal(5);

            expect(vec2.x).to.equal(6);
            expect(vec2.y).to.equal(7);
            expect(vec2.z).to.equal(-10);
        });

        it("Stores r, g, and b", function () {
            const vec = new Vector3(3, 4, 5);
            expect(vec.r).to.equal(3);
            expect(vec.g).to.equal(4);
            expect(vec.b).to.equal(5);
        });
    });

    describe("Length getter", function () {
        it("Gets the correct length", function () {
            const vec = new Vector3(3, 4, 0);
            expect(vec.length).to.equal(5);
        });
    });

    describe("Normalize function", function () {
        it("Correctly normalizes [mutator]", function () {
            let vec = new Vector3(0, 0, 1);
            vec.normalize();
            expect(vec.x).to.equal(0);
            expect(vec.y).to.equal(0);
            expect(vec.z).to.equal(1);

            vec = new Vector3(1, 1, 0);
            vec.normalize();
            expect(vec.x).to.equal(1 / Math.sqrt(2));
            expect(vec.y).to.equal(1 / Math.sqrt(2));
            expect(vec.z).to.equal(0);
            expect(Math.abs(vec.length - 1)).to.be.lessThan(.001);
        });

        it("Correctly normalizes [static]", function () {
            const vec = Vector3.normalize(new Vector3(1, 1, 0));
            //vec.normalize();
            expect(vec.x).to.equal(1 / Math.sqrt(2));
            expect(vec.y).to.equal(1 / Math.sqrt(2));
            expect(vec.z).to.equal(0);
            expect(Math.abs(vec.length - 1)).to.be.lessThan(.001);
        });
    });

    describe("Scaling", function () {
        it("Scales correctly [mutator]", function () {
            const vec = new Vector3(3, 4, 5);
            vec.scale(.5);
            expect(vec.x).to.equal(1.5);
            expect(vec.y).to.equal(2);
            expect(vec.z).to.equal(2.5);
        });

        it("Scales correctly [static]", function () {

            const vec = new Vector3(3, 4, 5);
            Vector3.scale(vec, .5).scale(2);
            expect(vec.x).to.equal(3);
            expect(vec.y).to.equal(4);
            expect(vec.z).to.equal(5);
        });
    });

    describe("minus", function () {
        it("Correctly subtracts [mutator]", function () {
            const vec = Vector3.One;
            vec.minus(new Vector3(.5, .4, .3));
            expect(vec.x).to.equal(.5);
            expect(vec.y).to.equal(.6);
            expect(vec.z).to.equal(.7);
        });

        it("Correctly subtracts [static]", function () {
            const vec = Vector3.minus(Vector3.One, new Vector3(.5, .4, .3));
            expect(vec.x).to.equal(.5);
            expect(vec.y).to.equal(.6);
            expect(vec.z).to.equal(.7);
        });
    });

    describe("plus", function () {
        it("Correctly adds [mutator]", function () {
            const vec = Vector3.One;
            vec.plus(new Vector3(.5, .4, .3));
            expect(vec.x).to.equal(1.5);
            expect(vec.y).to.equal(1.4);
            expect(vec.z).to.equal(1.3);
        });

        it("Correctly adds [static]", function () {
            const vec = Vector3.plus(Vector3.One, new Vector3(.5, .4, .3));
            expect(vec.x).to.equal(1.5);
            expect(vec.y).to.equal(1.4);
            expect(vec.z).to.equal(1.3);
        });
    });

    describe("dot", function () {
        it("Correctly calculates the dot product", function () {
            const vec1 = new Vector3(3, 4, 5);
            const vec2 = new Vector3(1, 2, -10);
            const dot1 = vec1.dot(vec2);
            const dot2 = vec2.dot(vec1);
            expect(dot1).to.equal(-39);
            expect(dot2).to.equal(-39);
        });
    });

    describe("cross", function () {
        it("Correctly calculates the cross product [mutator]", function () {
            const vec1 = Vector3.PositiveX;
            const vec2 = Vector3.PositiveY;
            const cross1 = vec1.cross(vec2);
            expect(cross1).to.eql(Vector3.PositiveZ);
        });

        it("Correctly calculates the cross product [mutator] b", function () {
            const vec1 = Vector3.PositiveX;
            const vec2 = Vector3.PositiveY;
            const cross2 = vec2.cross(vec1);
            expect(cross2).to.eql(Vector3.NegativeZ);
        });

        it("Correctly calculates the cross product [mutator] c", function () {
            const vec1 = new Vector3(3, 4, 5);
            const vec2 = new Vector3(6, 7, -10);
            const cross2 = vec1.cross(vec2);
            expect(cross2).to.eql(new Vector3(-75, 60, -3));
        });

        it("Correctly calculates the cross product [static]", function () {
            const vec1 = Vector3.PositiveX;
            const vec2 = Vector3.PositiveY;
            const cross1 = Vector3.cross(vec1, vec2);
            expect(cross1).to.eql(Vector3.PositiveZ);
        });
    });
});