!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=13)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){var r=n(6),o=n(7),a=n(8);e.exports=function(e){return r(e)||o(e)||a()}},function(e,t,n){e.exports=n(10)},function(e,t){function l(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(c){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=c.apply(e,i);function o(e){l(r,t,n,o,a,"next",e)}function a(e){l(r,t,n,o,a,"throw",e)}o(void 0)})}}},function(e,t){e.exports=function(e){throw new Error('"'+e+'" is read-only')}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){},function(e,t,n){var r=function(a){"use strict";var l,e=Object.prototype,u=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",r=t.toStringTag||"@@toStringTag";function i(e,t,n,r){var o=t&&t.prototype instanceof c?t:c,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(a,i,c){var l=d;return function(e,t){if(l===v)throw new Error("Generator is already running");if(l===p){if("throw"===e)throw t;return q()}for(c.method=e,c.arg=t;;){var n=c.delegate;if(n){var r=S(n,c);if(r){if(r===h)continue;return r}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(l===d)throw l=p,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);l=v;var o=s(a,i,c);if("normal"===o.type){if(l=c.done?p:f,o.arg===h)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(l=p,c.method="throw",c.arg=o.arg)}}}(e,n,i),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}a.wrap=i;var d="suspendedStart",f="suspendedYield",v="executing",p="completed",h={};function c(){}function y(){}function m(){}var g={};g[o]=function(){return this};var b=Object.getPrototypeOf,k=b&&b(b(_([])));k&&k!==e&&u.call(k,o)&&(g=k);var x=m.prototype=c.prototype=Object.create(g);function w(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function L(l){var t;this._invoke=function(n,r){function e(){return new Promise(function(e,t){!function t(e,n,r,o){var a=s(l[e],l,n);if("throw"!==a.type){var i=a.arg,c=i.value;return c&&"object"==typeof c&&u.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,r,o)},function(e){t("throw",e,r,o)}):Promise.resolve(c).then(function(e){i.value=e,r(i)},function(e){return t("throw",e,r,o)})}o(a.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}}function S(e,t){var n=e.iterator[t.method];if(n===l){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=l,S(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=l),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(u.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=l,e.done=!0,e};return r.next=r}}return{next:q}}function q(){return{value:l,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[r]=y.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,r in e||(e[r]="GeneratorFunction")),e.prototype=Object.create(x),e},a.awrap=function(e){return{__await:e}},w(L.prototype),L.prototype[n]=function(){return this},a.AsyncIterator=L,a.async=function(e,t,n,r){var o=new L(i(e,t,n,r));return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},w(x),x[r]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},a.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=_,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=l)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return a.type="throw",a.arg=n,r.next=e,t&&(r.method="next",r.arg=l),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=l),h}},a}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(2),u=n.n(c),l=(n(9),n(3)),s=n.n(l),d=n(4),f=n.n(d),v=function(){function o(e,t,n){a()(this,o),this.materials=e,this.thicknesses=t.map(Number),this.k_vals=n,this.r_vals=o.layerRValues(t,n),this.r_value=o.calcRValue(t,n),this.thickness=t.reduce(function(e,t){return e+Number(t)},0),this._idToken=o.makeIDToken(e,t,n)}return i()(o,[{key:"name",set:function(e){this._name=e},get:function(){return this._name}},{key:"u_value",get:function(){return 1/this.r_value}}],[{key:"u_value",value:function(e){return 1/e.r_value}},{key:"calcRValue",value:function(e,n){var r=0;return e.forEach(function(e,t){""===n[t]?r+=o.airlayerResistance(e):r+=.001*e/n[t]}),r}},{key:"totalRValue",value:function(e){return e.reduce(function(e,t){},0)}},{key:"layerRValues",value:function(e,n){var r=[];return e.forEach(function(e,t){""===n[t]?r.push(o.airlayerResistance(e)):r.push(.001*e/n[t])}),r}},{key:"makeIDToken",value:function(e,n,r){var o=[];e.forEach(function(e,t){o.push({m:e,d:[n[t],r[t]]})}),o.sort(function(e,t){var n=e.m.toUpperCase(),r=t.m.toUpperCase();return n<r?-1:r<n?1:0});var t=[];return o.forEach(function(e){t.push([e.m,e.d.join("_")].join("_"))}),t.join("-")}},{key:"airlayerResistance",value:function(e){var t,n,r=[0,5,7,10,15,25,300.1],o=[0,.11,.13,.15,.17,.18,.18];return t=e,n=r.findIndex(function(e){return t<e}),o[n-1]+(o[n]-o[n-1])*((t-r[n-1])/(r[n]-r[n-1]))}}]),o}(),p=function(){function u(){a()(this,u)}var t;return i()(u,null,[{key:"getConstructions",value:function(){return null===localStorage.getItem("constructions")?[]:JSON.parse(localStorage.getItem("constructions"))}},{key:"getConstructionByID",value:function(e){var t=u.getConstructions(),n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;if(c._idToken==e)return c}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return console.log("Construction not found in local storage. Abort."),!1}},{key:"updateConstructionName",value:function(n,r){var o=u.getConstructions();o.forEach(function(e,t){e._idToken===n&&(o[t].name=r)}),localStorage.setItem("constructions",JSON.stringify(o))}},{key:"addConstruction",value:function(t){var e=u.getConstructions();e.every(function(e){return e._idToken!==t._idToken||(console.log("duplicate! save aborted"),!1)})&&(e.push(t),localStorage.setItem("constructions",JSON.stringify(e)))}},{key:"deleteConstruction",value:function(e){for(var t=u.getConstructions(),n=0;n<t.length;n++)if(t[n]._idToken===e){t.splice(n,1);break}localStorage.setItem("constructions",JSON.stringify(t))}},{key:"clearConstructions",value:function(){localStorage.removeItem("constructions")}},{key:"JSONtoCSV",value:function(){var e=u.getConstructions(),o=[];return e.forEach(function(n,r){n.materials.forEach(function(e,t){o.push([r,n.name,e,n.thicknesses[t],n.k_vals[t],n.r_vals[t],n.r_value])})}),o.unshift(["id","name","material","thickness","k-val","r-val","total-r"]),o.join("\n")}},{key:"CSVtoConstruction",value:function(e){var t=e.split("\n");t.shift();var r,o,a=[],i=[],c=[];function l(e,t,n,r){var o=new v(e,t,n);u.addConstruction(o),console.log(r),u.updateConstructionName(o._idToken,r)}t.forEach(function(e,t){var n=e.split(",");n.length<5||(0==t&&(r=n[0],o=n[1]),n[0]!=r&&(l(a,i,c,o),a=[],i=[],c=[],r=n[0],o=n[1]),a.push(n[2]),i.push(n[3]),c.push(n[4]))}),l(a,i,c,o)}},{key:"exportConstructions",value:function(){var e=u.JSONtoCSV(),t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(e),t.target="_blank",t.download="constructions.csv",t.click()}},{key:"importConstructionsFromFile",value:(t=f()(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t[0],(r=new FileReader).readAsText(n),r.onload=function(){u.CSVtoConstruction(r.result)},r.onloadend=function(){b.populateHistory()},r.onerror=function(){alert("read failed. check console for details"),console.log(r.error)};case 6:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)})}]),u}(),h=n(5),y=n.n(h),m=function(){function e(){a()(this,e)}return i()(e,null,[{key:"doesTableHaveFormData",value:function(e){for(var t=e.rows,n=t.length-1;0<=n;n--){var r=t[n].cells;if(""!=r[1].children[0].value||""!=r[2].children[0].value||""!=r[3].children[0].value)return!0}return!1}},{key:"validateTableFormComplete",value:function(e){for(var t=e.rows,n=t.length-1;0<=n;n--){var r=t[n].cells;if(t[n].classList.contains("cavity")){if(""===r[1].children[0].value||""===r[2].children[0].value)return!1}else if(""===r[1].children[0].value||""===r[2].children[0].value||""===r[3].children[0].value)return!1}return!0}},{key:"validateTableFormNumberInput",value:function(e){for(var t=e.rows,n=t.length-1;0<=n;n--){var r=t[n].cells;if(t[n].classList.contains("cavity")){if(!Number(r[2].children[0].value))return!1;if(r[2].children[0].value<0||300<r[2].children[0].value)return!1}else if(!Number(r[2].children[0].value)||!Number(r[3].children[0].value))return!1}return!0}},{key:"isAirLayerBounded",value:function(e){for(var t=e.rows,n=!0,r=0;r<t.length;r++){var o=t[r];0===r&&o.classList.contains("cavity")?n=!1:r===t.length-1&&o.classList.contains("cavity")?n=!1:o.classList.contains("cavity")&&t[r+1].classList.contains("cavity")&&(n=!1)}return n}},{key:"removeEmptyTableRows",value:function(e){for(var t=e.rows,n=t.length-1;0<=n;n--){var r=t[n].cells;""===r[1].children[0].value&&""===r[2].children[0].value&&""===r[3].children[0].value&&UI.deleteRow(t[n])}}},{key:"extractLayerInfoFromTable",value:function(e){for(var t=e.rows,n=[],r=[],o=[],a=0;a<t.length;a++)n.push(t[a].cells[1].children[0].value),r.push(t[a].cells[2].children[0].value),o.push(t[a].cells[3].children[0].value);return[n,r,o]}},{key:"fitToParentContainer",value:function(e){var t=e.parentNode;e.height=t.clientHeight,e.width=t.clientWidth}},{key:"getPlotTemps",value:function(){var e=[];return e.push(Number(document.querySelector("#temp-outside").value)),e.push(Number(document.querySelector("#temp-inside").value)),e}},{key:"formatNumberLength",value:function(e,t){return""===e?"":"0"===e.toFixed(0)?e.toFixed(t-1):e.toPrecision(t)}},{key:"precise",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:4;return Number.parseFloat(e).toPrecision(n)}},{key:"fixed",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:2;return Number.parseFloat(e).toFixed(n)}},{key:"getClosest",value:function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;y()("i"),0<=--n&&t.item(n)!==this;);return-1<n});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null}}]),e}(),g=function(){function l(){a()(this,l)}return i()(l,null,[{key:"drawLayers",value:function(c){var e=l.get_dataset(c),t=document.querySelector("#canvas-construction").getContext("2d");return new Chart(t,{type:"horizontalBar",data:{labels:["construction"],datasets:e},options:{legend:{display:!0,onClick:null,labels:{filter:function(t,e){var n=!0;if("== unventilated cavity =="===t.text){for(var r=e.datasets,o=0;o<r.length-1;o++)if("== unventilated cavity =="===r[o].label){if(o===t.datasetIndex)break;n=!1;break}}else{["air (ext.)","air (int.)"].some(function(e){return t.text.includes(e)})&&(n=!1)}return n}}},scales:{yAxes:[{categoryPercentage:1,barPercentage:1,position:"right"}],xAxes:[{scaleLabel:{display:!0,labelString:"thickness"},ticks:{stepSize:1,maxRotation:0,callback:function(e,t,n){var r=n.length;if(r<=25)return e;if(25<r&&r<=50){if(t%2==0)return e}else if(50<r&&r<=75){if(t%2==0)return e}else if(75<r&&r<=100){if(t%3==0)return e}else if(100<r&&r<=125){if(t%5==0)return e}else if(t%10==0)return e}},afterBuildTicks:function(e,t){return t.filter(function(e,t,n){var r=c.thickness;return 0<=e&&e<=r})}}]},tooltips:{mode:"nearest",callbacks:{title:function(e,t){if("construction"!==e[0].label)return"temperature";var n=t.datasets[e[0].datasetIndex].label;return l.supportingLayerNames().includes(n)?n:"construction"},label:function(e,t){if("construction"===e.label){var n=t.datasets[e.datasetIndex].label;if(l.supportingLayerNames("surface").includes(n))return;if(l.supportingLayerNames("air").includes(n))return e.value<0?"".concat(t.datasets[0].data[0].y," ").concat(String.fromCharCode(176),"C"):"".concat(t.datasets[0].data[t.datasets[0].data.length-1].y," ").concat(String.fromCharCode(176),"C");var r=c.materials.indexOf(n),o=c.thicknesses.slice(0,r+1).reduce(function(e,t){return e+t},0);return["".concat(n,": ").concat(e.value," mm"),"R: ".concat(m.precise(c.r_vals[r],3)),"x = ".concat(m.fixed(o)," mm")]}var a=t.datasets[e.datasetIndex].data.length,i=["".concat(m.fixed(e.value)," ").concat(String.fromCharCode(176),"C")];return 0!=e.index&&e.index!=a-1&&i.push("x = ".concat(m.fixed(e.xLabel)," mm")),i}}},responsive:!1}})}},{key:"clearCharts",value:function(){Chart.helpers.each(Chart.instances,function(e){e.chart.destroy()})}},{key:"drawTemperatures",value:function(e,t,n,r){var o=2<arguments.length&&void 0!==n?n:35,a=3<arguments.length&&void 0!==r?r:24;t.data.datasets.unshift({label:"temperature",data:l.calculateIntermediateTemps(e,t,o,a),type:"line",yAxisID:"y-line",lineTension:0,borderWidth:1,borderColor:"#f00",pointStyle:"circle",pointBorderColor:"#f00",pointBackgroundColor:"#f00",backgroundColor:"rgba(0, 0, 0, 0.0)"}),t.options.scales.yAxes.push({id:"y-line",type:"linear",position:"left",ticks:{min:2*Math.round((Math.min(o,a)-2)/2),max:2*Math.round((Math.max(o,a)+2)/2)},scaleLabel:{labelString:"Temperature",display:!0,fontColor:"#f00"}}),t.update()}},{key:"calculateQ_area",value:function(e,t,n){return e.u_value*(t-n)}},{key:"calculateIntermediateTemps",value:function(r,e,t,n){var o=l.calculateQ_area(r,t,n),a=e.scales["x-axis-0"].min,i=e.scales["x-axis-0"].max,c=[{x:0,y:t}];return r.r_vals.forEach(function(e,t){var n=c[t].y-o/(1/e);c.push({x:c[t].x+r.thicknesses[t],y:n})}),c.unshift({x:a,y:t}),c.push({x:i,y:n}),c}},{key:"get_dataset",value:function(r){var o=[],e=b.surfaceResistanceEnabled();if(e){o.push({label:"R_surface (ext.)",data:[-.05],backgroundColor:"rgba(89, 241, 234, 1)",stack:"main"})}if(o.push({label:"air (ext.)",data:[-20],backgroundColor:"rgba(0,0,0,0)",stack:"main"}),r.materials.forEach(function(e,t){var n={};n.label=e,n.data=[r.thicknesses[t]],n.stack="main",""===r.k_vals[t]?n.backgroundColor="rgba(232, 246, 247, 0.4)":n.backgroundColor=randomColor(),o.push(n)}),e){o.push({label:"R_surface (int.)",data:[.05],backgroundColor:"rgba(89, 241, 234, 1)",stack:"main"})}return o.push({label:"air (int.)",data:[20],backgroundColor:"rgba(0,0,0,0)",stack:"main"}),o}},{key:"calcTotalR",value:function(e,t,n){return Number(e.r_value)+t+n}},{key:"defaultCanvasImage",value:function(){var e=document.querySelector("#canvas-construction"),t=e.getContext("2d"),n=e.clientHeight,r=e.clientWidth;t.lineWidth=.3,t.strokeRect(5,5,r-10,n-10),t.font="18px Lato",t.textAlign="center",t.fillStyle="gray",t.fillText("to draw a construction enter material details in the input table or select from history below",r/2,n/2)}},{key:"supportingLayerNames",value:function(e){var t=["R_surface (ext.)","R_surface (int.)","air (int.)","air (ext.)"];switch(0<arguments.length&&void 0!==e?e:"all"){case"all":return t;case"surface":return t.slice(0,2);case"air":return t.slice(2,4)}}}]),l}(),b=function(){function d(){a()(this,d)}return i()(d,null,[{key:"modifyRowController",value:function(e){e.classList.contains("delete-row")?(console.log("Delete row!"),d.deleteRow(e)):e.classList.contains("add-row")&&(console.log("Add row above!"),d.addRowAbove(e))}},{key:"addRowAbove",value:function(e){var t=e.closest("tr").rowIndex;e.closest("table").insertRow(t).innerHTML=d.rowInnerHTML()}},{key:"deleteRow",value:function(e){e.closest("tr").remove()}},{key:"addToInputLayers",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:"material",r=document.createElement("tr");return"cavity"===n?(r.classList.add("cavity"),r.innerHTML=d.cavityRowInnerHTML()):r.innerHTML=d.rowInnerHTML(),e.appendChild(r)}},{key:"clearTableBody",value:function(e){e.querySelector("tbody").remove();var t=document.createElement("tbody");return t.classList.add("sortable"),e.appendChild(t)}},{key:"populateHistory",value:function(){var e=document.querySelector("#history"),t=d.clearTableBody(e);p.getConstructions().forEach(function(e){d.addToHistory(e,t)})}},{key:"addToHistory",value:function(e,t){var n=document.createElement("tr");n.innerHTML='\n            <th scope="row"><input type="text" placeholder="add name here..." class="form-control-plaintext font-weight-bold" value="'.concat(e.name||"",'"></th>\n            <td>').concat(d.badgeFormatter({list:e.materials,class_options:"mb-1 text-large"}),"</td>\n            <td>").concat(d.badgeFormatter({list:e.thicknesses,class_options:"mb-1 text-large"}),"</td>\n            <td>").concat(d.badgeFormatter({list:e.k_vals,class_options:"mb-1 text-large"}),"</td>\n            <td>").concat(d.badgeFormatter({list:e.r_vals.map(function(e){return Helpers.formatNumberLength(e,5)}),class_options:"mb-1 text-large"}),"</td>\n            <td>").concat(d.badgeFormatter({list:[Helpers.formatNumberLength(v.u_value(e),5)],style:"warning",class_options:"text-large"}),"</td>\n            <td>").concat(d.badgeFormatter({list:[Helpers.formatNumberLength(e.r_value,5)],style:"warning",class_options:"text-large"}),'</td>\n            <td class="align-middle text-center text-danger">delete</td>\n            <td class="d-none" id="c_id">').concat(e._idToken,"</td>"),t.appendChild(n)}},{key:"populateInputTableFromConstruction",value:function(r){var e=document.querySelector("#input-layers"),o=d.clearTableBody(e);r.materials.forEach(function(e,t){var n=[e,r.thicknesses[t],r.k_vals[t]];d.addToInputLayers(o,""===n[2]?"cavity":"material").querySelectorAll("input").forEach(function(e,t){e.value=n[t]})})}},{key:"displayConstructionResults",value:function(e){var t=document.querySelector("#r-construction"),n=document.querySelector("#u-construction");t.value=Helpers.formatNumberLength(e.r_value,5),n.value=Helpers.formatNumberLength(e.u_value,5);var r=document.querySelector("#r-total"),o=document.querySelector("#u-total");if(d.surfaceResistanceEnabled()){var a=d.getSurfaceResistance(),i=g.calcTotalR.apply(g,[e].concat(u()(a)));r.value=Helpers.formatNumberLength(i,5),o.value=Helpers.formatNumberLength(1/i,5)}else r.value=Helpers.formatNumberLength(e.r_value,5),o.value=Helpers.formatNumberLength(e.u_value,5)}},{key:"clearConstructionResults",value:function(){var e=document.querySelector("#r-construction"),t=document.querySelector("#u-construction"),n=document.querySelector("#r-total"),r=document.querySelector("#u-total");e.value="0.0",t.value="0.0",n.value="0.0",r.value="0.0"}},{key:"getSurfaceResistance",value:function(){var e=[];return e.push(Number(document.querySelector("#r-external").value)),e.push(Number(document.querySelector("#r-internal").value)),e}},{key:"surfaceResistanceEnabled",value:function(){return document.querySelector("#customSwitch1").checked}},{key:"rowInnerHTML",value:function(){return'<td class="align-middle text-center"><i class="fas fa-circle fa-xs text-primary"></i></td>\n        <td><input type="text" placeholder="material name" class="form-control-plaintext"></td>\n        <td><input type="text" placeholder="depth" class="form-control-plaintext"></td>\n        <td><input type="text" placeholder="k-val" class="form-control-plaintext"></td>\n        <td class="align-middle text-center"><i class="far fa-plus-square fa-lg d-none row-ops add-row"></i></td>\n        <td class="align-middle text-center"><i class="fas fa-times fa-lg d-none row-ops text-danger delete-row"></i></td>'}},{key:"cavityRowInnerHTML",value:function(){return'<td class="align-middle text-center"><i class="fas fa-circle fa-xs text-primary"></i></td>\n        <td><input type="text" disabled value="== unventilated cavity ==" class="form-control-plaintext font-italic"></td>\n        <td><input type="text" value="20" class="form-control-plaintext"></td>\n        <td><input type="text" disabled value="" class="form-control-plaintext text-secondary"></td>\n        <td class="align-middle text-center"><i class="far fa-plus-square fa-lg d-none row-ops add-row"></i></td>\n        <td class="align-middle text-center"><i class="fas fa-times fa-lg d-none row-ops text-danger delete-row"></i></td>'}},{key:"badgeFormatter",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.list,r=void 0===n?[]:n,o=t.style,a=void 0!==o&&o,i=t.class_options,c=void 0===i?"":i,l=t.unit,u=void 0===l?"":l,s="";return r.forEach(function(e,t){s=a?s.concat('<div class="d-block"><span class="badge badge-'.concat(a," ").concat(c,'">').concat(e," ").concat(u,"</span></div>")):s.concat('<div class="d-block"><span class="badge badge-'.concat(d.colorList(t)," ").concat(c,'">').concat(e," ").concat(u,"</span></div>"))}),s}},{key:"colorList",value:function(e){return["primary","secondary","success","danger","info","light","dark"][e]}}]),d}();window.UI=b,window.Therm=g,window.Construction=v,window.Storage=p,window.Helpers=m,document.querySelector("#input-layers").addEventListener("click",function(e){b.modifyRowController(e.target)}),document.querySelector("#add-air-cavity").addEventListener("click",function(e){var t=document.querySelector("#input-layers").querySelector("tbody");b.addToInputLayers(t,"cavity")});var k=new Event("calculate");function x(e){var t=e.target.value,n=e.target.parentElement.parentElement.querySelector("#c_id").innerHTML;p.updateConstructionName(n,t)}document.addEventListener("calculate",function(e){console.log("Calculate!");var t=document.querySelector("#input-layers").querySelector("tbody");if(m.doesTableHaveFormData(t)){m.removeEmptyTableRows(t);var n=m.validateTableFormNumberInput(t),r=m.validateTableFormComplete(t),o=m.isAirLayerBounded(t);if(r)if(n)if(o){var a=m.extractLayerInfoFromTable(t),i=new v(a[0],a[1],a[2]);console.log(i),g.clearCharts();var c=g.drawLayers(i),l=m.getPlotTemps();g.drawTemperatures.apply(g,[i,c].concat(u()(l))),b.displayConstructionResults(i),p.addConstruction(i),b.populateHistory()}else alert("Air layer must be between two material layers");else alert("> d and k values must be numbers. Please check input.\n> Air layer thickness must be between 0 - 300mm");else alert("Data missing in row. Update or delete incomplete rows.")}else alert("No data")}),document.querySelector("#calculate").addEventListener("click",function(e){document.dispatchEvent(k)}),document.querySelector("#history").addEventListener("click",function(e){if("INPUT"!==e.target.tagName&&"delete"!==e.target.innerHTML){var t=m.getClosest(e.target,"tr");if("THEAD"!==t.parentElement.tagName){var n=t.querySelector("#c_id").innerHTML,r=p.getConstructionByID(n);r&&(b.populateInputTableFromConstruction(r),document.dispatchEvent(k),$(L()))}}}),document.querySelector("#dev-test").addEventListener("click",function(){w.test_data()}),document.querySelector("#reset").addEventListener("click",function(){var e=document.querySelector("#input-layers"),t=b.clearTableBody(e);$(L());for(var n=0;n<4;n++)b.addToInputLayers(t);g.clearCharts(),g.defaultCanvasImage(),b.clearConstructionResults()}),document.querySelector("#clear-history").addEventListener("click",function(){p.clearConstructions(),b.populateHistory()}),window.addEventListener("load",function(){var e=document.querySelector("#canvas-construction");m.fitToParentContainer(e),g.defaultCanvasImage(),b.populateHistory()}),window.addEventListener("resize",function(){var e=document.querySelector("#canvas-construction");m.fitToParentContainer(e),g.defaultCanvasImage()}),document.querySelector("#customSwitch1").addEventListener("click",function(){document.dispatchEvent(k);var t=document.querySelector("#customSwitch1");document.querySelector("#surface-properties").querySelectorAll("input").forEach(function(e){e.readOnly=!t.checked,e.classList.toggle("text-body")})}),document.querySelector("#temp-refresh").addEventListener("click",function(){document.dispatchEvent(k)}),document.querySelector("#history").addEventListener("keyup",function(e){13===e.keyCode&&x(e)}),document.querySelector("#history").addEventListener("click",function(e){"INPUT"==e.target.tagName&&e.target.addEventListener("blur",function(){x(e)},{once:!0})}),document.querySelector("#history").addEventListener("click",function(e){if("delete"===e.target.innerHTML){var t=m.getClosest(e.target,"tr").querySelector("#c_id").innerHTML;p.deleteConstruction(t),b.populateHistory()}}),document.querySelector("#expand-history").addEventListener("click",function(){document.querySelector("#history-div").classList.toggle("constrain");var e=document.querySelector("#expand-history"),t=e.querySelector("span"),n=e.querySelector("i");"Expand Table"===t.textContent?(t.textContent="Collapse Table",n.classList.remove("fa-angle-down"),n.classList.add("fa-angle-up")):(t.textContent="Expand Table",n.classList.remove("fa-angle-up"),n.classList.add("fa-angle-down"))}),document.querySelector("#export-history").addEventListener("click",function(){p.exportConstructions()}),document.querySelector("#import-history").addEventListener("change",function(e){confirm("This will erase current history")&&(p.clearConstructions(),p.importConstructionsFromFile(e.target.files))});var w=function(){function e(){a()(this,e)}return i()(e,null,[{key:"test_data",value:function(){var e=new v(["steel","wood","textile"],[6,3,8],[1.1,2.5,1.8]);b.populateInputTableFromConstruction(e),document.dispatchEvent(k),p.updateConstructionName(e._idToken,"::example construction::"),b.populateHistory(),L()}}]),e}();function L(){$(".sortable").sortable()}}]);