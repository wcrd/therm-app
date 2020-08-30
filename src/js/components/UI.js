import Storage from "./Storage.js";
import Therm from "./Therm.js";
import Construction from "./Construction.js";
import Helpers from "./Helpers.js"

// UI Class: Control on-screen rendering (except Canvas)
export default class UI {
    static modifyRowController(el) {
        if(el.classList.contains('delete-row')){
            console.log('Delete row!')
            UI.deleteRow(el)
        } else if(el.classList.contains('add-row')){
            console.log('Add row above!')
            UI.addRowAbove(el)
        }
    }

    static addRowAbove(row) {
        // Get index of row in table
        const idx = row.closest('tr').rowIndex;
        // Get table element
        const table = row.closest('table');
        // Insert row into table at index
        const newRow = table.insertRow(idx);
        // Fill row with styled table row html
        newRow.innerHTML = UI.rowInnerHTML();

    }

    static deleteRow(cell) {
        // Find row cell belongs too and remove row
        cell.closest('tr').remove();
    }

    static addToInputLayers(table_body, rowtype="material") {
        const row = document.createElement('tr');
        let new_row;
        if(rowtype==="cavity"){
            row.classList.add("cavity");
            row.innerHTML = UI.cavityRowInnerHTML();
        } else {
            row.innerHTML = UI.rowInnerHTML();
        }
        //append to table, return handle
        new_row = table_body.appendChild(row);
        return new_row
    }

    static clearTableBody(table) {
        // // returns handle to new table body
        // remove body
        table.querySelector('tbody').remove();
        // add new body
        const body = document.createElement('tbody');
        body.classList.add('sortable');
        const tableBody = table.appendChild(body);
        
        return tableBody
    }

    static populateHistory() {
        // get history table handle
        const historyTable = document.querySelector('#history');
        // clear table
        const tableBody = UI.clearTableBody(historyTable);
        // get local storage data
        const constructions = Storage.getConstructions();

        // repopulate
        constructions.forEach((construction) => {
            UI.addToHistory(construction, tableBody);
        })
    }

    static addToHistory(construction, table) {
        // create new row element
        const row = document.createElement('tr');
        
        // fill row
        row.innerHTML = `
            <th scope="row"><input type="text" placeholder="add name here..." class="form-control-plaintext font-weight-bold" value="${construction.name || ''}"></th>
            <td>${UI.badgeFormatter({list: construction.materials, class_options: 'mb-1 text-large'})}</td>
            <td>${UI.badgeFormatter({list: construction.thicknesses, class_options: 'mb-1 text-large'})}</td>
            <td>${UI.badgeFormatter({list: construction.k_vals, class_options: 'mb-1 text-large'})}</td>
            <td>${UI.badgeFormatter({list: construction.r_vals.map(val => { return Helpers.formatNumberLength(val, 5)}), class_options: 'mb-1 text-large'})}</td>
            <td>${UI.badgeFormatter({list: [Helpers.formatNumberLength(Construction.u_value(construction), 5)], style: 'warning', class_options: 'text-large'})}</td>
            <td>${UI.badgeFormatter({list: [Helpers.formatNumberLength(construction.r_value, 5)], style: 'warning', class_options: 'text-large'})}</td>
            <td class="align-middle text-center text-danger">delete</td>
            <td class="d-none" id="c_id">${construction._idToken}</td>`;
        
        // append row to table
        table.appendChild(row);
    }

    static populateInputTableFromConstruction(construction){
        const table = document.querySelector('#input-layers');
        const tableBody = UI.clearTableBody(table);
        // for each construction layer, add row and populate
        construction.materials.forEach((material, idx) => {
            const data = [material, construction.thicknesses[idx], construction.k_vals[idx]];
            // check for row type: material or air layer
            let rowtype;
            if(data[2] === ""){
                rowtype = "cavity"
            } else {
                rowtype = "material"
            }
            const new_row = UI.addToInputLayers(tableBody, rowtype);
            const fields = new_row.querySelectorAll('input');
            fields.forEach((field, idx) => {
                field.value = data[idx];
            });
        })
    }

    static displayConstructionResults(construction) {
        // set display digit length
        const numDigits = 5;

        const r = document.querySelector("#r-construction");
        const u = document.querySelector("#u-construction");
        r.value = Helpers.formatNumberLength(construction.r_value, numDigits);
        u.value = Helpers.formatNumberLength(construction.u_value, numDigits);
        
        const r_t = document.querySelector("#r-total");
        const u_t = document.querySelector("#u-total");
        if(UI.surfaceResistanceEnabled()){
            const r_surface = UI.getSurfaceResistance();
            const r_total = Therm.calcTotalR(construction, ...r_surface);
            r_t.value = Helpers.formatNumberLength(r_total, numDigits);
            u_t.value = Helpers.formatNumberLength((1/r_total), numDigits);
        } else {
            r_t.value = Helpers.formatNumberLength(construction.r_value, numDigits);
            u_t.value = Helpers.formatNumberLength(construction.u_value, numDigits);
        }
    }

    static clearConstructionResults() {
        const r = document.querySelector("#r-construction");
        const u = document.querySelector("#u-construction");
        const r_t = document.querySelector("#r-total");
        const u_t = document.querySelector("#u-total");

        r.value = "0.0"
        u.value = "0.0"
        r_t.value = "0.0"
        u_t.value = "0.0"
    }

    static getSurfaceResistance() {
        const output  = [];
        output.push(Number(document.querySelector("#r-external").value));
        output.push(Number(document.querySelector("#r-internal").value));
        return output
    }

    static surfaceResistanceEnabled() {
        return document.querySelector('#customSwitch1').checked
    }

    // HELPERS
    static rowInnerHTML() {
        // Stores row HTML for new rows. Not sure where else to keep this?
        const innerHTML = 
        `<td class="align-middle text-center"><i class="fas fa-circle fa-xs text-primary"></i></td>
        <td><input type="text" placeholder="material name" class="form-control-plaintext"></td>
        <td><input type="text" placeholder="depth" class="form-control-plaintext"></td>
        <td><input type="text" placeholder="k-val" class="form-control-plaintext"></td>
        <td class="align-middle text-center"><i class="far fa-plus-square fa-lg d-none row-ops add-row"></i></td>
        <td class="align-middle text-center"><i class="fas fa-times fa-lg d-none row-ops text-danger delete-row"></i></td>`;
        return innerHTML
    };

    static cavityRowInnerHTML() {
        const innerHTML =
        `<td class="align-middle text-center"><i class="fas fa-circle fa-xs text-primary"></i></td>
        <td><input type="text" disabled value="== unventilated cavity ==" class="form-control-plaintext font-italic"></td>
        <td><input type="text" value="20" class="form-control-plaintext"></td>
        <td><input type="text" disabled value="" class="form-control-plaintext text-secondary"></td>
        <td class="align-middle text-center"><i class="far fa-plus-square fa-lg d-none row-ops add-row"></i></td>
        <td class="align-middle text-center"><i class="fas fa-times fa-lg d-none row-ops text-danger delete-row"></i></td>`;
        return innerHTML
    }

    static badgeFormatter({list=[], style=false, class_options='', unit=''}={}){
        let els = '';
        list.forEach((item, idx) => {
            if(style){
                els = els.concat(`<div class="d-block"><span class="badge badge-${style} ${class_options}">${item} ${unit}</span></div>`)
            } else {
                els = els.concat(`<div class="d-block"><span class="badge badge-${UI.colorList(idx)} ${class_options}">${item} ${unit}</span></div>`)
            }
        });
        return els 
    }

    static colorList(idx){
        const colors = ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark'];
        return colors[idx]
    }
};
