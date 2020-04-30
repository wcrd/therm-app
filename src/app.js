// bundle items for webpack
import './css/app.css'

// Import components
import UI from './js/UI.js'
import Helpers from './js/Helpers.js'
import Therm from './js/Therm.js'
import Construction from './js/Construction.js'
import Storage from './js/Storage.js'

// register for dev only
window.UI = UI;
window.Therm = Therm;
window.Construction = Construction;
window.Storage = Storage;
window.Helpers = Helpers;



// EVENT: Modify table row (add/delete)
document.querySelector('#input-layers').addEventListener('click', e => {
    UI.modifyRowController(e.target);
})

// EVENT: add air cavity row
document.querySelector('#add-air-cavity').addEventListener('click', e => {
    const tableBody = document.querySelector('#input-layers').querySelector('tbody')
    UI.addToInputLayers(tableBody, "cavity")
})

// EVENT: Calculate
// custom event handle
const event_calculate = new Event('calculate');

document.addEventListener('calculate', e => {
    console.log("Calculate!")
    // get table body ref
    const table = document.querySelector('#input-layers').querySelector('tbody');
    
    // Check for data
    const hasData = Helpers.doesTableHaveFormData(table);
    if(!hasData){
        alert('No data')
        return
    } else {
        // Remove empty rows
        Helpers.removeEmptyTableRows(table);
        
        // data validation
        const hasValidInputData = Helpers.validateTableFormNumberInput(table);
        const isComplete = Helpers.validateTableFormComplete(table);
        const airLayerBounded = Helpers.isAirLayerBounded(table);
        
        if(!isComplete){
            alert('Data missing in row. Update or delete incomplete rows.')
            return
        } else if(!hasValidInputData){
            alert('> d and k values must be numbers. Please check input.\n> Air layer thickness must be between 0 - 300mm');
            return
        } else if(!airLayerBounded){
            alert('Air layer must be between two material layers')
            return
        } else {
            // Get data [0] material, [1] thickness, [2] k value
            const layerData = Helpers.extractLayerInfoFromTable(table);
            // create Construction
            const construction = new Construction(layerData[0], layerData[1], layerData[2]);
            console.log(construction)
            
            // Clear existing charts
            Therm.clearCharts();
            // Draw construction
            const chart = Therm.drawLayers(construction);
            
            // Get temp plot options from construction properties table
            const plotTemps = Helpers.getPlotTemps()
            // Draw temperature gradients 
            Therm.drawTemperatures(construction, chart, ...plotTemps)
            
            // Display results
            UI.displayConstructionResults(construction);

            // Record in history
            Storage.addConstruction(construction);
            // Update History Table
            UI.populateHistory();
        }        
    }

})

document.querySelector('#calculate').addEventListener('click', e => {
    document.dispatchEvent(event_calculate)
});

// EVENT: Load from History
document.querySelector('#history').addEventListener('click', e => {
    // if click is in input field or delete button, do nothing
    if(e.target.tagName === 'INPUT' || e.target.innerHTML === 'delete'){ return }
    // get parent node (table row)
    const row = Helpers.getClosest(e.target, 'tr')
    // check if element is table row not column (i.e. not header or other element)
    if(row.parentElement.tagName === "THEAD"){ return }
    // get construction id value
    const id = row.querySelector('#c_id').innerHTML;
    // retrieve construction from storage
    const construction = Storage.getConstructionByID(id);
    // populate input table and plot
    if(construction){
        UI.populateInputTableFromConstruction(construction);
        document.dispatchEvent(event_calculate);
        $(makeSortable());
    }

})

// EVENT: DEV TESTING
document.querySelector('#dev-test').addEventListener('click', () =>{
    _dev_helpers.test_data();
})

// EVENT: Reset
document.querySelector('#reset').addEventListener('click', () => {
    // remove rows from input table
    const inputTable = document.querySelector('#input-layers');
    const tableBody = UI.clearTableBody(inputTable)
    $(makeSortable());
    // redraw input table with four rows
    for(let i = 0; i < 4; i++){
        UI.addToInputLayers(tableBody);
    }
    // reset canvas
    Therm.clearCharts();
    // draw default image
    Therm.defaultCanvasImage();

    // reset results window
    UI.clearConstructionResults();
})


// EVENT: Clear History
document.querySelector('#clear-history').addEventListener('click', () => {
    // Clear storage
    Storage.clearConstructions();
    // Reload table
    UI.populateHistory();
})

// EVENT: On load and resize
window.addEventListener('load', () => {
    // Load canvas and size it to div
    const canvas = document.querySelector('#canvas-construction');
    Helpers.fitToParentContainer(canvas);
    // draw default image
    Therm.defaultCanvasImage();

    // Populate History
    UI.populateHistory();
})
window.addEventListener('resize', () => {
    // Resize canvas
    const canvas = document.querySelector('#canvas-construction');
    Helpers.fitToParentContainer(canvas);
    // draw default image
    Therm.defaultCanvasImage();
})

// EVENT: Click R_surface enable toggle
document.querySelector('#customSwitch1').addEventListener('click', () => {
    // recalculate
    // replot
    document.dispatchEvent(event_calculate);

    // change column style based on toggle position
    const toggle = document.querySelector('#customSwitch1');
    // get column
    const col = document.querySelector('#surface-properties');
    // get all inputs
    const inputs = col.querySelectorAll('input');
    // reformat
    inputs.forEach((input) => {
        input.readOnly = !toggle.checked;
        input.classList.toggle('text-body');
    });
    
});

// EVENT: t_o t_i refresh
document.querySelector('#temp-refresh').addEventListener('click', () => {
    // recalculate
    // replot
    document.dispatchEvent(event_calculate);
})

// EVENT: add name to history (click out and enter press)
document.querySelector('#history').addEventListener('keyup', e => { 
    if(e.keyCode === 13){ handleHistoryName(e) }
});

document.querySelector('#history').addEventListener('click', e => {
    // if the user clicks into an input field
    if(e.target.tagName == "INPUT"){
        // create a one time event listener to tell when they click out of that input field
        e.target.addEventListener('blur', () => {
            // write name to storage
            handleHistoryName(e);
        }, { once: true })
    }  
})

function handleHistoryName(e){
    // get name
    const name = e.target.value;
    // get construction id
    const row = e.target.parentElement.parentElement;
    const id = row.querySelector('#c_id').innerHTML;
    // save name
    Storage.updateConstructionName(id, name);
}

// EVENT History delete row
document.querySelector('#history').addEventListener('click', e => {
    // only delete if delete button clicked
    if(e.target.innerHTML === 'delete'){
        // get parent node (table row)
        const row = Helpers.getClosest(e.target, 'tr');
        // get construction id value
        const id = row.querySelector('#c_id').innerHTML;
        // delete from Storage
        Storage.deleteConstruction(id);
        // repopulate table
        UI.populateHistory();
     }
})
// EVENT: Expand history table
document.querySelector('#expand-history').addEventListener('click', () => {
    // toggle History div element height property
    document.querySelector('#history-div').classList.toggle('constrain')
    // toggle button text
    const btn = document.querySelector('#expand-history');
    const btnText = btn.querySelector('span');
    const btnIcon = btn.querySelector('i');

    if(btnText.textContent === "Expand Table"){
        btnText.textContent = "Collapse Table";
        btnIcon.classList.remove('fa-angle-down');
        btnIcon.classList.add('fa-angle-up');
    } else {
        btnText.textContent = "Expand Table";
        btnIcon.classList.remove('fa-angle-up');
        btnIcon.classList.add('fa-angle-down');
    }
})

// EVENT Export History Data
document.querySelector('#export-history').addEventListener('click', () => {
    Storage.exportConstructions();
})

// EVENT Import history data
document.querySelector('#import-history').addEventListener('change', e => {
    // flash alert that this will erase current hisory
    const response = confirm("This will erase current history");
    if(response){
        // Clear storage
        Storage.clearConstructions();
        // handle file and load into storage
        Storage.importConstructionsFromFile(e.target.files);
    }
});

// HELPERS
class _dev_helpers {
    static test_data() {
        // dummy data
        const data = new Construction(['steel', 'wood', 'textile'], [6, 3, 8], [1.1, 2.5, 1.8]);
        // draw
        UI.populateInputTableFromConstruction(data);
        document.dispatchEvent(event_calculate);
        // add name
        Storage.updateConstructionName(data._idToken, "::example construction::");
        // reload storage
        UI.populateHistory();
        // make sortable
        makeSortable();
    }
}

function makeSortable(){
    $(".sortable").sortable();
}