function GetData() {
    var getCondition = document.getElementById('Condition').value;
    var getKeyword = document.getElementById('KeyWord').value; 
    if (getKeyword.length == 0) {
        alert("You have to enter desired location into search box!")
    } else {
        // if (document.getElementById('result') != null) {
        //     var ele = document.getElementById('content'); 
        //     console.log(ele.lastChild);
        //     ele.lastChild.innerHTML = '';
        //     ele.lastChild.setAttribute('id', 'app');
        //     ele.lastChild.setAttribute('class', 'result');
        // };
        var array = SearchParamURL(AddParamURL(getCondition,getKeyword));
        RetrieveData(array);
    }
}

function AddParamURL(Condition,KeyWord) {
    var url = window.location.href; 
    url = new URL(url)
    var search_params = url.searchParams;
    search_params.set('condition', Condition);
    search_params.set('keyword', KeyWord);
    return url;
}

function SearchParamURL(url) {
    var search = url.searchParams;
    var condition = search.get('condition');
    var getKeyword = search.get('keyword');

    return [condition, getKeyword]
}

function RetrieveData(array) {
    var id = "1-OFc0ImUdOsK2lpvHNEf3sF-ATGeMXdEMGR0Yk3PHec";
    // var APIurl = "https://docs.google.com/spreadsheets/d/1l5M2wd5vnAV-zH6tigcPGsNK_-qLO56Hrhzn_ufzmDo/gviz/tq?sheet=";
    var APIurl = "https://docs.google.com/spreadsheets/d/"+id+"/gviz/tq?sheet=";
    var queryStr = 'Select A, B, C, D, E, F, G';
    if (array[0] == 1) {
        queryStr = queryStr + ' where B = "' + array[1] +'"';
    } else {
        queryStr = queryStr + ' where C = "' + array[1] +'"';
    }
    // console.log(queryStr);
    var query = encodeURIComponent(queryStr);
    APIurl = APIurl + 'AdminstrativeBoundary' + '&tq=' + query;
    // console.log(APIurl);
    fetch (APIurl).then(res=>res.text()).then(rep=>{
        // console.log(rep)
        var dataset = JSON.parse(rep.substr(47).slice(0,-2));
        var data = HandleAPI(dataset)
        
        RenderAPI(data);
    })
}

// Handle API data is queried 
function HandleAPI(dataset) {
    // Define variable
    var data = [];
    var dict =  {};
    var keys = [];
    // console.log(dataset);
    // Get datasetOne cols and rows
    var cols = dataset.table.cols;
    var rows = dataset.table.rows;
    // Create list key for dict
    for (var i = 0; i < Object.keys(cols).length; i++) {
        keys.push(cols[i].id);
        // keys.push(cols[i].label);
    }

    // Create list value for dict
    for (var i = 0; i < Object.keys(rows).length; i++) {
        var value = {};
        var el = rows[i].c;
        for (var j = 0; j < Object.keys(keys).length; j++) {
            if (el[j] != null) {
                value[keys[j]] = el[j].v;
            } else {
                value[keys[j]] = null;
            }
        }
        data.push(value);
    }
    return data;
}

// Vue instance
async function RenderAPI(dataAPI) {
    'use strict';
    var lengthDataAPI =  dataAPI.length;
    var textHTML;
    if (lengthDataAPI == 0) {
        textHTML = Case1; 
    } else if (lengthDataAPI == 1) {
        textHTML = Case2; 
    } else if (lengthDataAPI > 1) {
        textHTML = Case3; 
    }
    
    var app = new Vue({
        el: "#app", 
        template: textHTML,
        data: {
            shapefile: dataAPI,
            StyleShow: {
                display: 'none'
            }           
        },
        methods: {
            DisplayGeoData: function() {
                // var lengthDataAPI = this.shapefile.length;
                // console.log(lengthDataAPI)
              
                // document.getElementById("content").lastElementChild.setAttribute('id', 'app');   
                // document.getElementById("content").lastElementChild.setAttribute('class', 'result');
                var el = document.getElementById("result--GeoData").parentElement;
                console.log(el);
                el.setAttribute('id', 'app');
                el.setAttribute('class', 'result'); 
                if (this.StyleShow.display == "block") {
                    this.StyleShow.display = "none";
                } else {
                    if (this.lengthDataAPI > 0) {
                        this.StyleShow.display = "block";
                    }
                }  
            }
        }
    })
    app.DisplayGeoData();
    // console.log(document.getElementById("content").lastElementChild);
    
    // console.log(app.shapefile);
}

