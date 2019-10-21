import Construction from "./Construction.js";
import UI from "./UI.js";

// Storage Class: Control browser storage
export default class Storage {
    // Load Storage
    static getConstructions() {
        let constructions;
        if(localStorage.getItem('constructions') === null) {
            constructions = [];
        } else {
            constructions = JSON.parse(localStorage.getItem('constructions'))
        }
        return constructions;
    }

    // get construction by id
    static getConstructionByID(id) {
        const constructions = Storage.getConstructions();
        for (let construction of constructions) {
            if(construction._idToken == id){
                return construction
            }
        }
        console.log('Construction not found in local storage. Abort.')
        return false
    }

    // Update item in storage
    static updateConstructionName(id, name) {
        // get constructions from storage
        const constructions = Storage.getConstructions();
        // find construction to update
        constructions.forEach((entry, idx) => {
            if(entry._idToken === id){
                // update name parameter
                constructions[idx].name = name;
            }
        });
        // save back to storage
        localStorage.setItem('constructions', JSON.stringify(constructions));
    }

    // Add to storage
    static addConstruction(construction) {
        // get constructions from storage
        const constructions = Storage.getConstructions();
        // check if exists
        const newCons = constructions.every((entry) => {
            if(entry._idToken === construction._idToken){
                console.log('duplicate! save aborted')
                return false;
            }
            return true;
        });
        if(!newCons){ return }

        // add construction
        constructions.push(construction);
        // save back to storage
        localStorage.setItem('constructions', JSON.stringify(constructions));
    }

    // Delete from Storage
    static deleteConstruction(id) {
        // get constructions from storage
        const constructions = Storage.getConstructions();
        // find construction to delete
        for(let i = 0; i < constructions.length; i++){
            if(constructions[i]._idToken === id){
                // delete
                constructions.splice(i, 1);
                break;
            }
        }
        // save back to storage
        localStorage.setItem('constructions', JSON.stringify(constructions));
    }

    // Clear storage
    static clearConstructions() {
        localStorage.removeItem('constructions');
    }

    // convert storage into csv file
    static JSONtoCSV(){
        // get constructions
        const constructions = Storage.getConstructions();
        // csv headers
        const csvHeaders = ['id', 'name', 'material', 'thickness', 'k-val', 'r-val', 'total-r'];
        // make csv content
        const csvBody = [];
        constructions.forEach((c, c_idx) => {
            // create new row per material layer
            c.materials.forEach((m, idx) => {
                csvBody.push([
                    c_idx,
                    c.name,
                    m,
                    c.thicknesses[idx],
                    c.k_vals[idx],
                    c.r_vals[idx],
                    c.r_value
                ]);
            });
        });
        // insert csv headers at start of data
        csvBody.unshift(csvHeaders)
        // join into csv string
        return csvBody.join("\n")
    }
    
    // convert CSV to Constructions
    static CSVtoConstruction(csv_data){
        // convert to list per row
        const data = csv_data.split('\n');
        // remove header
        data.shift();
        // results containers
        let materials = [], thicknesses = [], k_vals = [];
        // current construction id (for processing layers)
        let c_id, name;
        // loop through each row, extract info for a construction and create
        data.forEach((row, idx) => {
            // split row into element
            const layer = row.split(',');
            // validate number of columns [id, name, mat, d, k]
            if(layer.length < 5){ return }
            // set c_id, name on first iteration
            if(idx==0){ c_id = layer[0]; name = layer[1] }
            // if construction id does not == previous, save existing construction, reset and start new construction
            if(layer[0] != c_id){
                // create & save construction
                saveConstruction(materials, thicknesses, k_vals, name);
                // reset variables
                materials = [];
                thicknesses = [];
                k_vals = [];
                // set new c_id, name
                c_id = layer[0];
                name = layer[1];
            }

            // process layer
            materials.push(layer[2]);
            thicknesses.push(layer[3]);
            k_vals.push(layer[4]);

        })
        // create final construction
        saveConstruction(materials, thicknesses, k_vals, name);

        // Helper
        function saveConstruction(m, t, k, n){
            const c = new Construction(m, t, k);
            // save construction
            Storage.addConstruction(c);
            console.log(n);
            Storage.updateConstructionName(c._idToken, n)

        }
    }


    // export to csv
    static exportConstructions(){
        // convert stored constructions to csv-like format
        const csv = Storage.JSONtoCSV();
        // set params via a 'hidden' element
        const hiddenElement = document.createElement('a');
        hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'constructions.csv'
        hiddenElement.click();
    }

    // import from csv
    static async importConstructionsFromFile(fileList){
        // upload button is restricted to one-file.
        // get file element
        const file = fileList[0];
        // read file element
        const reader = new FileReader();
        reader.readAsText(file);
        // event on read (b/c async we just can't call this sequentially)
        reader.onload = function() {
            Storage.CSVtoConstruction(reader.result)
        }
        reader.onloadend = function() {
            UI.populateHistory();
        }
        reader.onerror = function() {
            alert("read failed. check console for details")
            console.log(reader.error)
        }
    }
}