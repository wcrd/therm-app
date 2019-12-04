import UI from './UI.js';
import Helpers from './Helpers.js';

// Therm Class: Calculation and rendering methods
export default class Therm {

    static drawLayers(construction) {
        // process data (add air layers, convert to Chart.js format)
        const dataset = Therm.get_dataset(construction);

        // get canvas
        const canvas = document.querySelector('#canvas-construction');
        // set context
        const ctx = canvas.getContext("2d");

        // draw
        const myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["construction"],
                datasets: dataset
                //borderColor: 'rgb(255, 99, 132)'
            },
            options: {
                legend: {
                    display: true,
                    onClick: null,
                    labels: {
                        filter: function(item, chart) {
                            let state = true;
                            // check if cavity
                            if(item.text==="== unventilated cavity =="){
                                // Logic to remove air cavity label if another exists
                                // get legend items
                                const labels = chart['datasets']
                                // loop through items
                                for(let i=0; i<labels.length-1;i++){
                                    //get first item that is cavity, then check if it is same index as current legend item
                                    if(labels[i].label==="== unventilated cavity =="){
                                        // if it is same item, keep item and break the filter loop
                                        if(i === item.datasetIndex){
                                            break;
                                        } else {
                                            // if it is not same item, then this is a duplicate lengend entry and should be removed
                                            state = false;
                                            break;
                                        }
                                    }
                                }
                                //for(let i =)
                            } else {
                                // Logic to remove a particular legend item goes here
                                const items = ['air (ext.)', 'air (int.)'];
                                if(items.some(el => item.text.includes(el))){ state = false }
                            }
                            
                            
                            return state;
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0,
                        position: 'right'
                    }],
                    xAxes: [{
                        scaleLabel: {display: true, labelString: 'thickness'},
                        ticks: {
                            stepSize: 1.0,
                            maxRotation: 0,
                            callback: function(value, index, values){
                                const n = values.length;
                                if(n <= 25){
                                    return value
                                } else if(n > 25 && n <= 50){
                                    if( index % 2 == 0 ){
                                        return value
                                    }
                                } else if(n > 50 && n <= 75){
                                    if( index % 2 == 0 ){
                                        return value
                                    }
                                } else if(n > 75 && n <= 100){
                                    if( index % 3 == 0 ){
                                        return value
                                    }
                                } else if(n > 100 && n <= 125){
                                    if( index % 5 == 0 ){
                                        return value
                                    }
                                } else {
                                    if( index % 10 == 0 ){
                                        return value
                                    }
                                }
                            }
                        },
                        afterBuildTicks: function(axis, ticks){
                            // filter ticks so that only ticks around construction are shown
                            return ticks.filter((val, idx, arr) => {
                                // get construction thickness
                                const limit = construction.thickness
                                return val >= 0 && val <= limit;
                            })
                        }
                    }]
                },
                tooltips: {
                    mode: 'nearest',
                    callbacks: {
                        title: function(tooltipItem, data) {
                            let label = tooltipItem[0].label;
                            if(label === "construction"){
                                // get title of data
                                let label = data.datasets[tooltipItem[0].datasetIndex].label
                                // if surface resistance or air boundary, just show name
                                if(Therm.supportingLayerNames().includes(label)){
                                    return label
                                } else {
                                    return "construction"
                                }
                            } else {
                                return "temperature"
                            }
                        },
                        label: function(tooltipItem, data) {
                            // if construction show thickness with mm
                            if(tooltipItem.label === "construction"){
                                let label = data.datasets[tooltipItem.datasetIndex].label;
                                // if surface resistance show nothing
                                if(Therm.supportingLayerNames("surface").includes(label)){
                                    return
                                //if air boundary, show temperature
                                } else if(Therm.supportingLayerNames("air").includes(label)) {
                                    if(tooltipItem.value < 0){
                                        // temp is always first dataset
                                        // left side air layer, get left side temp value
                                        return `${data.datasets[0].data[0].y} ${String.fromCharCode(176)}C`
                                    } else {
                                        // right side air layer, get right side temp value
                                        return `${data.datasets[0].data[data.datasets[0].data.length-1].y} ${String.fromCharCode(176)}C`
                                    }
                                } else {
                                    // material. Show thickness AND layer r-val AND x-val
                                    let layer_idx = construction.materials.indexOf(label);
                                    let x_pos = (construction.thicknesses.slice(0,layer_idx+1)).reduce((a, b) => a + b, 0);
                                    return [
                                        `${label}: ${tooltipItem.value} mm`, 
                                        `R: ${Helpers.precise(construction.r_vals[layer_idx], 3)}`,
                                        `x = ${Helpers.fixed(x_pos)} mm`
                                    ]
                                }
                            } else {
                                // Temperature Point
                                // show temp with degC and x (x if not endpoint)
                                const tempDataLength = data.datasets[tooltipItem.datasetIndex].data.length;
                                const tooltip = [`${Helpers.fixed(tooltipItem.value)} ${String.fromCharCode(176)}C`]
                                // if not endpoint, include x-value
                                if(tooltipItem.index != 0 && tooltipItem.index != tempDataLength-1) {
                                    tooltip.push(`x = ${Helpers.fixed(tooltipItem.xLabel)} mm`)
                                }
                                return tooltip
                            }
                        }
                    },
                },
                responsive: false
            }
        });

        return myChart
    }

    static clearCharts() {
        Chart.helpers.each(Chart.instances, instance => {
            instance.chart.destroy();
        })
    }

    static drawTemperatures(construction, chart, t_o = 35, t_i = 24) {
        // insert first so drawn ontop of bar chart
        chart.data.datasets.unshift({
            label: "temperature",
            data: Therm.calculateIntermediateTemps(construction, chart, t_o, t_i),
            type: 'line',
            yAxisID: 'y-line',
            lineTension: 0,
            borderWidth: 1,
            borderColor: '#f00',
            pointStyle: 'circle',
            pointBorderColor: '#f00',
            pointBackgroundColor: '#f00',
            backgroundColor: 'rgba(0, 0, 0, 0.0)'
        });
        chart.options.scales.yAxes.push({
            id: 'y-line',
            type: 'linear',
            position: 'left',
            ticks: {
                min: 2*Math.round((Math.min(t_o,t_i)-2)/2),
                max: 2*Math.round((Math.max(t_o,t_i)+2)/2)
            },            
            scaleLabel: {
                labelString: "Temperature",
                display: true,
                fontColor: '#f00'
            }
        });
        chart.update();
    }

    static calculateQ_area(construction, t_o, t_i) {
        // Q/A = UdT [W/m2]
        return construction.u_value * (t_o - t_i)
    }

    // calculate temperatures between layers in construction
    static calculateIntermediateTemps(construction, chart, t_o, t_i) {
        // Get heat transfer rate for construction
        const Q_area = Therm.calculateQ_area(construction, t_o, t_i);
        // get x-axis range
        const xMin = chart.scales['x-axis-0'].min;
        const xMax = chart.scales['x-axis-0'].max;
        // intialise first temps in output array (external temperature)
        const temps = [{x: 0, y: t_o}]
        // loop through r vals, calculate temps external to internal
        construction.r_vals.forEach((r_val, idx) => {
            // get intermediate temp based on temp to left
            let t_n = temps[idx]['y'] - (Q_area / (1 / r_val));
            temps.push({x: temps[idx]['x']+construction.thicknesses[idx], y: t_n})
        })
        // push end points
        temps.unshift({x: xMin, y:t_o})
        temps.push({x: xMax, y: t_i})
        return temps
    }

    static get_dataset(data) {
        // define external and internal air layers
        const ext_air = {label: 'air (ext.)', data: [-20], backgroundColor: 'rgba(0,0,0,0)', stack: "main"}
        const int_air = {label: 'air (int.)', data: [20], backgroundColor: 'rgba(0,0,0,0)', stack: "main"}
        // define output
        const output = [];
        // if surface resitance enabled
        const surface = UI.surfaceResistanceEnabled()
        if(surface){
            // define surface layers
            const r_ext = {label: 'R_surface (ext.)', data: [-0.05], backgroundColor: 'rgba(89, 241, 234, 1)', stack: "main"}
            output.push(r_ext)
        }
        
        // create output array, set first item as air external, second as ext surface resistance
        output.push(ext_air);
        data.materials.forEach((material, idx) => {
            let d = {};

            d.label = material;
            d.data = [data.thicknesses[idx]];
            //d.borderWidth = 2;
            d.stack = "main";
            // if air cavity make transperent
            if(data.k_vals[idx]===""){
                d.backgroundColor = 'rgba(232, 246, 247, 0.4)';
            } else {
                // from randomColor library
                d.backgroundColor = randomColor();
            }
            

            output.push(d);
        })
        if(surface){
            const r_int = {label: 'R_surface (int.)', data: [0.05], backgroundColor: 'rgba(89, 241, 234, 1)', stack: "main"}
            output.push(r_int)
        };
        output.push(int_air);
        return output;
    }

    static calcTotalR(construction, r_int, r_ext) {
        return Number(construction.r_value) + r_int + r_ext;
    }

    static defaultCanvasImage(){
        // get canvas
        const canvas = document.querySelector('#canvas-construction');
        // set context
        const ctx = canvas.getContext('2d');
        // get canvas height and width
        const h = canvas.clientHeight;
        const w = canvas.clientWidth;
        // clear canvas content (if exists)
        ctx.clearRect(0,0,w,h);
        // set inlay offset
        const offset = 5;
        // draw rectangle
        ctx.lineWidth = 0.3;
        ctx.strokeRect(offset, offset, w-offset*2, h-offset*2);
        // draw message
        ctx.font = "18px Lato";
        ctx.textAlign = "center";
        ctx.fillStyle = "gray";
        ctx.fillText("to draw a construction enter material details in the input table or select from history below", w/2, h/2);
    }

    

    // HELPERS
    static supportingLayerNames(category = "all") {
        let names = ['R_surface (ext.)', 'R_surface (int.)', 'air (int.)', 'air (ext.)'];
        switch(category) {
            case "all":
                return names
            case "surface":
                return names.slice(0,2)
            case "air":
                return names.slice(2,4)
        }
    }
}