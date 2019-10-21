export default class Helpers {
    static doesTableHaveFormData(table) {
        // get table rows
        const table_rows = table.rows;
        
        // loop through rows (backward just because)
        for(let i = table_rows.length-1; i >= 0; i--){
            
            // get all cells for row
            let cells = table_rows[i].cells;
            
            // if material [1], thickness [2], or k [3] have value, return success
            if(cells[1].children[0].value != '' || cells[2].children[0].value != '' || cells[3].children[0].value != ''){
                return true;
            }
        }
        // if no data found
        return false;
    }
    
    // check all rows have three input cells filled
    static validateTableFormComplete(table) {
        // get table rows
        const table_rows = table.rows;
        
        // loop through rows bottom to top (b/c we will be removing as we go)
        for(let i = table_rows.length-1; i >= 0; i--){
            
            // get all cells for row
            let cells = table_rows[i].cells;
            
            // if layer is air layer, skip k value validation
            if(table_rows[i].classList.contains("cavity")){
                // if material [1], thickness [2] are empty, return 'not-valid' row.
                if(cells[1].children[0].value === '' || cells[2].children[0].value === ''){
                    return false;
                }
            } else {
                // if material [1], thickness [2], or k [3] are empty, return 'not-valid' row.
                if(cells[1].children[0].value === '' || cells[2].children[0].value === '' || cells[3].children[0].value === ''){
                    return false;
                }
            }
        }
        return true;  
    }

    // check data in input rows is the right format
    static validateTableFormNumberInput(table) {
        // get table rows
        const table_rows = table.rows;
        
        // loop through rows (backward just because)
        for(let i = table_rows.length-1; i >= 0; i--){
            
            // get all cells for row
            let cells = table_rows[i].cells;

            // if layer is air layer, skip k value validation
            if(table_rows[i].classList.contains("cavity")) {
                // if thickness [2]cannot be cast to number, fail
                if(!Number(cells[2].children[0].value)){
                    return false;
                } else if(cells[2].children[0].value < 0 || cells[2].children[0].value > 300) {
                    // too thick for air cavity - other calculation methods are required
                    // beyond the scope of this site.
                    return false;
                }
            } else {
                // if thickness [2], and k [3] cannot be cast to number, fail
                if(!Number(cells[2].children[0].value) || !Number(cells[3].children[0].value)){
                    return false;
                }
            }
        }
        return true;
    }

    // check that air layer rows are bounded by material rows
    static isAirLayerBounded(table) {
        // get table rows
        const table_rows = table.rows;
        // loop through and check for air layers at edges or adjacent
        let bounded = true;
        for(let idx = 0; idx < table_rows.length; idx++) {
            const row = table_rows[idx]
            // if last or first table row is air layer, then it is not bounded
            if(idx===0 && row.classList.contains("cavity")) {
                bounded = false
            } else if(idx === table_rows.length-1 && row.classList.contains("cavity")) {
                bounded = false
            } else if(row.classList.contains("cavity")){
                // if air cavity (not start or end), if next row is cavity, not bounded
                if(table_rows[idx+1].classList.contains("cavity")){
                    bounded = false
                }
            }
        }
        return bounded

    }

    static removeEmptyTableRows(table) {
        // get table rows
        const table_rows = table.rows;
        
        // loop through rows bottom to top (b/c we will be removing as we go)
        for(let i = table_rows.length-1; i >= 0; i--){
            
            // get all cells for row
            let cells = table_rows[i].cells;
            
            // if material [1], thickness [2], and k [3] are empty, delete row.
            if(cells[1].children[0].value === '' && cells[2].children[0].value === '' && cells[3].children[0].value === ''){
                UI.deleteRow(table_rows[i]);
            }
        }    
    }

    static extractLayerInfoFromTable(table){
        // get table rows
        const table_rows = table.rows;

        // Initialise output arrays
        let materials = [];
        let thicknesses = [];
        let k_vals = [];

        // Loop through rows and save data
        for(let i=0; i < table_rows.length; i++){
            materials.push(table_rows[i].cells[1].children[0].value);
            thicknesses.push(table_rows[i].cells[2].children[0].value);
            k_vals.push(table_rows[i].cells[3].children[0].value);
        };

        return [materials, thicknesses, k_vals]
    }

    static fitToParentContainer(el) {
        const parent = el.parentNode;
        el.height = parent.clientHeight;
        el.width = parent.clientWidth;
    }

    static getPlotTemps() {
        const output = []
        output.push(Number(document.querySelector("#temp-outside").value))
        output.push(Number(document.querySelector("#temp-inside").value))
        return output
    }

    static formatNumberLength(number, length) {
        // if number is blank string, return early
        if(number===""){ return "" }
        // get integer part
        const integer = number.toFixed(0);
        // if 0, then number is decimal and we want fixed length-1
        if(integer==="0"){
            return number.toFixed(length-1);
        } else {
            // can just use to precision
            return number.toPrecision(length);
        }
    }

    static precise(x, p = 4){
        return Number.parseFloat(x).toPrecision(p)
    }
    static fixed(x, p = 2){
        return Number.parseFloat(x).toFixed(p)
    }

    // jQuery method in Vanilla JS
    static getClosest( elem, selector ) {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function(s) {
                    const matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1;
                };
        }

        // Get closest match
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            if ( elem.matches( selector ) ) return elem;
        }

        return null;

    };

}
