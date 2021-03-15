import { SALLY_OBJ } from "./models/sally";

const objString = `v -1.000000 0.000000 1.000000
v 1.000000 0.000000 1.000000
v -1.000000 0.000000 -1.000000
v 1.000000 0.000000 -1.000000
vt 0.000000 0.000000
vt 1.000000 0.000000
vt 1.000000 1.000000
vt 0.000000 1.000000
vn 0.0000 1.0000 0.0000
f 1/1/1 2/2/1 4/3/1 3/4/1
`;

type Vertex = { x: number, y: number, z: number };
type UV = { u: number, v: number };

const vertices: Vertex[] = [];
const uvs: UV[] = [];
const normals: Vertex[] = [];
const faces: { vertex: Vertex, uv: UV, normal: Vertex }[] = [];

const objSplits = SALLY_OBJ.split("\n");

for (const objline of objSplits) {
    console.log(objline);
    const linevals = objline.split(" ");
    switch (objline.substr(0, 2)) {
        case "v ":
            vertices.push({
                x: parseFloat(linevals[1]),
                y: parseFloat(linevals[2]),
                z: parseFloat(linevals[3])
            });
            break;
        case "vt":
            uvs.push({
                u: parseFloat(linevals[1]),
                v: parseFloat(linevals[2])
            });
            break;
        case "vn":
            normals.push({
                x: parseFloat(linevals[1]),
                y: parseFloat(linevals[2]),
                z: parseFloat(linevals[3])
            });
            break;
        case "f ":
            for (let i = 1; i < 4; i++) {
                const objVertices = linevals[i].split("/").map(x => parseInt(x) - 1);
                faces.push({
                    vertex: vertices[objVertices[0]],
                    uv: uvs[objVertices[1]],
                    normal: normals[objVertices[2]]
                });
            }
            break;
        default:
            break;
    }
}
console.log(faces);
