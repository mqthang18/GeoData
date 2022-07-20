function GetData() {
    var getCondition = document.getElementById('Condition').value;
    var getKeyword = document.getElementById('KeyWord').value; 
    // Handle value of getCondition and getKeyword
    getCondition = CapitalFirstletter(getCondition.trim().replace(/  +/g, ' '));
    getKeyword = CapitalFirstletter(getKeyword.trim().replace(/  +/g, ' '));
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

function CapitalFirstletter(string) {
    string = string.split(" "); 
    string = string.map(
        word => stringToSlug(word)
    );
    string = string.join(" ");
    return string; 
}

function stringToSlug(str) {
    // remove accents
    var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
        to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
    for (var i=0, l=from.length ; i < l ; i++) {
      str = str.replace(RegExp(from[i], "gi"), to[i]);
    }
  
    str = str.toLowerCase()
          .trim()
          .replace(/[^a-z0-9\-]/g, '-')
          .replace(/-+/g, '-');
    str = str[0].toUpperCase() + str.substr(1);
    return str;
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
        var data = HandleAPI(dataset);
        
        RenderAPI(data);
    })
}

// Handle API data is queried 
function HandleAPI(dataset) {
    // Define variable
    var data = [];
    var dict =  {};
    var keys = [];
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

{
    "use strict";

    // Vue instance Search Element
    var appSearch = new Vue({
        el: "#ConditionSearch", 
        data: {
            showInput1: false,
            showInput2: false,
            showInput3: false,
            GeoDataDescription: null
        },
        methods: {
            CatchCheckEvent(id) {
                if (id == 'Country') {
                    if (this.showInput1 == false) {
                        this.showInput1 = true;
                        return;
                    } else {
                        this.showInput1 = false;
                        return; 
                    }
                } else if (id == "Province") {
                    if (this.showInput2 == false) {
                        return this.showInput2 = true;
                    } else return this.showInput2 = false; 
                } else if (id == "District") {
                    if (this.showInput3 == false) {
                        return this.showInput3 = true;
                    } else return this.showInput3 = false; 
                }
            },
            getKeyByValue(object, value) {
                return Object.keys(object).find(key => object[key] === value);
            },
            RetrieveDistrictData(id = null, CountryCode = null, ProvinceCode = null, DistrictCode = null) {
                if (id != null) {
                    var APIurl = "https://docs.google.com/spreadsheets/d/"+id+"/gviz/tq?sheet=";
                    var queryStr = 'Select *';
                    
                    if (DistrictCode !== null) queryStr = queryStr + ' where A = "' + DistrictList[DistrictCode] +'"';
                    console.log(queryStr);
                    var query = encodeURIComponent(queryStr);
                    APIurl = APIurl + 'AdminstrativeBoundary' + '&tq=' + query;
                    console.log(APIurl);
                    fetch (APIurl).then(res=>res.text()).then(rep=>{
                        // console.log(rep)
                        var dataset = JSON.parse(rep.substr(47).slice(0,-2));
                        var data = HandleAPI(dataset);
                        if (data.length > 1) {
                            data.shift();
                        }
                        
                        // console.log(data);
                        RenderAPI(data, CountryCode, ProvinceCode, DistrictCode);
                    })
                } else {
                    RenderAPI(null, null, null, null);
                }
                
            },
            RetrieveProvinceData(id = null, CountryCode = null, ProvinceCode = null, DistrictCode = null) {
                if (id != null) {
                    console.log(id);
                    var APIurl1 = "https://docs.google.com/spreadsheets/d/"+id[0]+"/gviz/tq?sheet=";
                    var APIurl2 = "https://docs.google.com/spreadsheets/d/"+id[1]+"/gviz/tq?sheet=";

                    var queryStr1 = 'Select *';
                    var queryStr2 = 'Select * where A = "' + ProvinceList[ProvinceCode] + '"';

                    console.log(queryStr1);
                    console.log(queryStr2);

                    var query1 = encodeURIComponent(queryStr1);
                    var query2 = encodeURIComponent(queryStr2);
                    
                    APIurl1 = APIurl1 + 'AdminstrativeBoundary' + '&tq=' + query1;
                    APIurl2 = APIurl2 + 'AdminstrativeBoundary' + '&tq=' + query2;

                    fetch (APIurl1).then(res=>res.text()).then(rep=>{
                        // console.log(rep)
                        var dataset1 = JSON.parse(rep.substr(47).slice(0,-2));
                        var data1 = HandleAPI(dataset1);
                        if (data1.length > 1) {
                            data1.shift();
                        }
                        
                        fetch (APIurl2).then(res=>res.text()).then(rep=>{
                            var dataset2 = JSON.parse(rep.substr(47).slice(0,-2));
                            var data2 = HandleAPI(dataset2);
                            // console.log(data2);
                            var data = data2;
                            for (var i = 0; i < data1.length; i++) {
                                data.push(data1[i]);
                            }
                            console.log(data);
                            RenderAPI(data, CountryCode, ProvinceCode, DistrictCode);
                        })                    
                    })
                } else {
                    RenderAPI(null, null, null, null);
                }
            },
            GetDataInput() {
                var arr = []; 
                if (this.showInput1 == true) {
                    var Country = document.getElementById('input-Country');
                    if (Country.value.length != 0) 
                        arr.push({
                            Country: CapitalFirstletter(Country.value.trim().replace(/  +/g, ' '))
                        }); 
                    
                }
                if (this.showInput2 == true) {
                    var Province = document.getElementById('input-Province');
                    if (Province.value.length != 0) 
                        arr.push({
                            Province: CapitalFirstletter(Province.value.trim().replace(/  +/g, ' '))
                        }); 
                }
                if (this.showInput3 == true) {
                    var District = document.getElementById('input-District');
                    if (District.value.length != 0) 
                        arr.push({
                            District: CapitalFirstletter(District.value.trim().replace(/  +/g, ' '))
                        }); 
                };
                if (arr.length == 0) alert('You have to enter desired location into search box!');

                var label = ["Province", "Country", "District"]; 
                var dict = []; 
                
                arr.forEach(element => {
                    switch (Object.keys(element)[0]) {
                        case 'Country': 
                            dict["Country"] = element.Country;
                            break;
                        case 'Province':
                            dict["ProvinceCode"] = this.getKeyByValue(ProvinceList, element.Province); 
                            break;
                        case 'District':
                            dict["DistrictCode"] = this.getKeyByValue(DistrictList, element.District);
                            break;
                    }
                });
                var newDict;
                MngProv.forEach(element=>{
                    if (Object.values(dict).includes(element.ProvinceCode) || Object.values(dict).includes(element.Country) || Object.keys(element.District).includes(dict['DistrictCode'])) {
                            newDict = {
                                ProvinceSheetID: element.ProvinceSheetID,
                                DistrictSheetID: element.DistrictSheetID,
                                Country: element.Country,
                                ProvinceCode: element.ProvinceCode,
                                DistrictCode: dict['DistrictCode']
                            } 
                    }
                });
                if (newDict == undefined) this.RetrieveDistrictData(null,null,null,null)
                else if (Object.keys(dict).includes('DistrictCode')) {
                    console.log('Chỉ Search huyen/thanh pho')
                    this.RetrieveDistrictData(
                        newDict.DistrictSheetID, 
                        newDict.Country, 
                        newDict.ProvinceCode, 
                        newDict.DistrictCode
                    );
                } else {
                    console.log("Search ca tinh");
                    this.RetrieveProvinceData(
                        [newDict.DistrictSheetID, newDict.ProvinceSheetID],
                        newDict.Country, 
                        newDict.ProvinceCode, 
                        newDict.DistrictCode
                    );
                }
            },
        }
    })



    // Vue instance Render Element
    async function RenderAPI(dataAPI = null, Country = null, ProvinceCode = null, District = null) {
        // 'use strict';
        var lengthDataAPI;
        var textHTML;
        if (dataAPI !== null) {
            lengthDataAPI = dataAPI.length;
            if (lengthDataAPI == 0) {
                textHTML = Case1; 
            } else if (lengthDataAPI == 1) {
                textHTML = Case2; 
            } else if (lengthDataAPI > 1) {
                textHTML = Case3; 
            }
        } else {
            textHTML = Case1; 
        }
        var app = new Vue({
            el: "#app", 
            template: textHTML,
            data: {
                Country: Country,
                Province: ProvinceList[ProvinceCode],
                District: District, 
                shapefile: dataAPI,
                pagnigation: 0,
                pivot: 0,
                StyleShow: {
                    display: 'none'
                }           
            },
            methods: {
                DisplayGeoData: function() {
                    // console.log(Province);
                    var el = document.getElementById("result--GeoData").parentElement;
                    // console.log(el);
                    el.setAttribute('id', 'app');
                    el.setAttribute('class', 'result'); 
                    if (this.StyleShow.display == "block") {
                        this.StyleShow.display = "none";
                    } else {
                        if (this.lengthDataAPI > 0) {
                            this.StyleShow.display = "block";
                        }
                    }  
                },
                ChangePageIndex(i) {
                    var selectP = i;
                    this.pagnigation = selectP;
                    // console.log(this.pagnigation);
                },
                AddPivot() {
                    return this.pivot += 6;
                },
                ResetPivot() {
                    return this.pivot = 0;
                }
            }
        })
        app.DisplayGeoData();
        // console.log(document.getElementById("content").lastElementChild);
        // console.log(app.shapefile);
    }

}
