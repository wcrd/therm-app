// Construction Class: model to represent the 'construction' built from inputs
export default class Construction {
    constructor(materials, thicknesses, k_vals){
        this.materials = materials;
        this.thicknesses = thicknesses.map(Number);
        this.k_vals = k_vals;
        this.r_vals = Construction.layerRValues(thicknesses, k_vals);
        this.r_value = Construction.calcRValue(thicknesses, k_vals);
        this.thickness = thicknesses.reduce((acc, val) => { return acc + Number(val) }, 0)
        this._idToken = Construction.makeIDToken(materials, thicknesses, k_vals);
    }

    set name(n){
        this._name = n;
    }

    get name(){
        return this._name;
    }

    get u_value() {
        return 1/this.r_value;
    };

    static u_value(construction) {
        return 1/construction.r_value;
    }

    static calcRValue(thicknesses, k_vals){
        let r_val = 0;
        thicknesses.forEach((thickness, idx) => {
            // if layer is air layer, calculate airlayerR  (air layer is assigned k_val of "" when created)
            if(k_vals[idx]===""){
                r_val += Construction.airlayerResistance(thickness);
            } else {
                r_val += 0.001*thickness/k_vals[idx];
                //console.log(`d: ${thickness}, k: ${k_vals[idx]}`);
            }
        })
        return r_val;
    }

    // this doen't work in constructor, cant seem to access this.r_vals
    static totalRValue(r_vals){
        return r_vals.reduce((acc, curr) => { acc + curr }, 0)
    }

    static layerRValues(thicknesses, k_vals){
        let r_vals = []
        thicknesses.forEach((thickness, idx) => {
            // if layer is air layer, calculate airlayerR (air layer is assigned k_val of "" when created)
            if(k_vals[idx]===""){
                r_vals.push(Construction.airlayerResistance(thickness));
            } else {
            // else push r_val
                r_vals.push(0.001*thickness/k_vals[idx]);
            }
        });
        return r_vals
    }

    static makeIDToken(materials, thicknesses, k_vals) {
        const holding = []
        materials.forEach((material, idx) => {
            holding.push({ "m": material, "d": [thicknesses[idx], k_vals[idx]] })
        })
        // sort
        holding.sort(function(a, b){
            const nameA = a.m.toUpperCase(); // ignore upper and lowercase
            const nameB = b.m.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
        // join
        const output = []
        holding.forEach(layer => {
            output.push([layer.m, layer.d.join("_")].join("_"))
        });
        return output.join("-")
    }

    // Calculate air layer thermal resistance (horizontal) for unventilated layer as per BS-ISO6946
    // d needs to be validated b/w 0->300 before being passed to this function.
    static airlayerResistance(d) {
        const thickness = [0, 5, 7, 10, 15, 25, 300.1],
              r = [0, 0.11, 0.13, 0.15, 0.17, 0.18, 0.18];
        
        const interpolateR = (d) => {
            // find d position upper limit in thickness array
            const idx = thickness.findIndex(function(item){ return item > d })
            // interpolate
            return r[idx-1] + (r[idx]-r[idx-1])*((d-thickness[idx-1])/(thickness[idx]-thickness[idx-1]))
        }

        return interpolateR(d)
    }
}