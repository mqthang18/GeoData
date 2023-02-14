function GetData() {
    var getCondition = document.getElementById('Condition').value;
    var getKeyword = document.getElementById('KeyWord').value;
    // Handle value of getCondition and getKeyword
    getCondition = CapitalFirstletter(getCondition.trim().replace(/  +/g, ' '));
    getKeyword = CapitalFirstletter(getKeyword.trim().replace(/  +/g, ' '));
    if (getKeyword.length == 0) {
        OpenPopUp();
    } else {
        var array = SearchParamURL(AddParamURL(getCondition, getKeyword));
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
        to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(RegExp(from[i], "gi"), to[i]);
    }

    str = str.toLowerCase()
        .trim()
        .replace(/[^a-z0-9\-]/g, '-')
        .replace(/-+/g, '-');
    str = str[0].toUpperCase() + str.substr(1);
    return str;
}

function AddParamURL(Condition, KeyWord) {
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
    var APIurl = "https://docs.google.com/spreadsheets/d/" + id + "/gviz/tq?sheet=";
    var queryStr = 'Select A, B, C, D, E, F, G';
    if (array[0] == 1) {
        queryStr = queryStr + ' where B = "' + array[1] + '"';
    } else {
        queryStr = queryStr + ' where C = "' + array[1] + '"';
    }
    // console.log(queryStr);
    var query = encodeURIComponent(queryStr);
    APIurl = APIurl + 'AdminstrativeBoundary' + '&tq=' + query;
    // console.log(APIurl);
    fetch(APIurl).then(res => res.text()).then(rep => {
        // console.log(rep)
        var dataset = JSON.parse(rep.substr(47).slice(0, -2));
        var data = HandleAPI(dataset);

        RenderAPI(data);
    })
}

function OpenPopUp() {
    var ele = document.getElementById('PopUp');
    // console.log(window.getComputedStyle(ele).visibility);
    ele.style.display = 'block';
    document.getElementById('modal').style.height = document.body.scrollHeight + 'px';
}

function ClosePopUp() {
    var ele = document.getElementById('PopUp');
    ele.style.display = 'none';
    document.getElementById('modal').style.height = 'unset';
}

// Handle API data is queried 
function HandleAPI(dataset) {
    // Define variable
    var data = [];
    var dict = {};
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
            showInput2: true,
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
            RetrieveDistrictData(id = null, CountryCode = null, ProvinceCode = null, DistrictCode = null, polygonSheetID) {
                if (id != null) {
                    var APIurl = "https://docs.google.com/spreadsheets/d/" + id + "/gviz/tq?sheet=";
                    var queryStr = 'Select *';
                    // console.log(DistrictCode);
                    if (DistrictCode !== null) queryStr = queryStr + ' where A = "' + DistrictList[DistrictCode][0] + '"';
                    // console.log(queryStr);
                    var query = encodeURIComponent(queryStr);
                    APIurl = APIurl + 'AdminstrativeBoundary' + '&tq=' + query;
                    // console.log(APIurl);
                    fetch(APIurl).then(res => res.text()).then(rep => {
                        // console.log(rep)
                        var dataset = JSON.parse(rep.substr(47).slice(0, -2));
                        var data = HandleAPI(dataset);
                        if (data.length > 1) {
                            data.shift();
                        }
                        // console.log(data[0]);
                        var PolygonURL = "https://docs.google.com/spreadsheets/d/" + polygonSheetID + "/gviz/tq?sheet=Coordinates" + '&tq=' + encodeURIComponent("Select * where A='" + data[0].A + "'");

                        async function getIDpolygonsheet(PolygonURL) {
                            var response = await fetch(PolygonURL);
                            var data = await response.text();
                            data = HandleAPI(JSON.parse(data.substr(47).slice(0, -2)));
                            return data;
                        }

                        async function getpolygonData(PolygonURL) {
                            var ID = await getIDpolygonsheet(PolygonURL);
                            console.log(ID[0]);
                            if ( ID[0] != undefined) {
                                var polygonSheetURL;
                                var polygonData = {};
                                for (var init = 0; init < ID[0].C; init++) {
                                    var sheetID = init + 1
                                    polygonSheetURL = "https://docs.google.com/spreadsheets/d/" + ID[0].B + "/gviz/tq?sheet=Sheet" + sheetID + "&tq=" + encodeURIComponent("Select *");
                                    dataPOLYGON = await getIDpolygonsheet(polygonSheetURL);
                                    polygonData[init] = dataPOLYGON;
                                }
                                console.log('Right here');
                                console.log(polygonData);
                                RenderAPI(data, CountryCode, ProvinceCode, DistrictCode, polygonData);
                            } else {
                                RenderAPI(data, CountryCode, ProvinceCode, DistrictCode, polygonData=[]);
                            }
                            
                        };

                        getpolygonData(PolygonURL)

                    })
                } else {
                    RenderAPI(null, null, null, null);
                }

            },
            RetrieveProvinceData(id = null, CountryCode = null, ProvinceCode = null, DistrictCode = null, polygonSheetID) {
                // console.log(polygonSheetID)
                if (id != null) {
                    // console.log(id);
                    var APIurl1 = "https://docs.google.com/spreadsheets/d/" + id[0] + "/gviz/tq?sheet=";
                    var APIurl2 = "https://docs.google.com/spreadsheets/d/" + id[1] + "/gviz/tq?sheet=";

                    var queryStr1 = 'Select *';
                    var queryStr2 = 'Select * where A = "' + ProvinceList[ProvinceCode][0] + '"';

                    // console.log(queryStr1);
                    // console.log(queryStr2);

                    var query1 = encodeURIComponent(queryStr1);
                    var query2 = encodeURIComponent(queryStr2);

                    APIurl1 = APIurl1 + 'AdminstrativeBoundary' + '&tq=' + query1;
                    APIurl2 = APIurl2 + 'AdminstrativeBoundary' + '&tq=' + query2;

                    fetch(APIurl1).then(res => res.text()).then(rep => {
                        // console.log(rep)
                        var dataset1 = JSON.parse(rep.substr(47).slice(0, -2));
                        var data1 = HandleAPI(dataset1);
                        if (data1.length > 1) {
                            data1.shift();
                        }

                        fetch(APIurl2).then(res => res.text()).then(rep => {
                            var dataset2 = JSON.parse(rep.substr(47).slice(0, -2));
                            var data2 = HandleAPI(dataset2);
                            // console.log(data2);
                            var data = data2;
                            for (var i = 0; i < data1.length; i++) {
                                if (data1[i].A == ProvinceList[ProvinceCode][0]) data.push(data1[i]);
                            }
                            // console.log(data);

                            var PolygonURL = "https://docs.google.com/spreadsheets/d/" + polygonSheetID + "/gviz/tq?sheet=Coordinates" + '&tq=' + encodeURIComponent("Select * where A='" + data[0].A + "'");

                            async function getIDpolygonsheet(PolygonURL) {
                                var response = await fetch(PolygonURL);
                                var data = await response.text();
                                data = HandleAPI(JSON.parse(data.substr(47).slice(0, -2)));
                                return data;
                            }

                            async function getpolygonData(PolygonURL) {
                                var ID = await getIDpolygonsheet(PolygonURL);
                                console.log(ID[0])
                                if (ID[0] != undefined) {
                                    var polygonSheetURL;
                                    var polygonData = {};
                                    for (var init = 0; init < ID[0].C; init++) {
                                        var sheetID = init + 1
                                        polygonSheetURL = "https://docs.google.com/spreadsheets/d/" + ID[0].B + "/gviz/tq?sheet=Sheet" + sheetID + "&tq=" + encodeURIComponent("Select *");
                                        dataPOLYGON = await getIDpolygonsheet(polygonSheetURL);
                                        polygonData[init] = dataPOLYGON;
                                    }
                                    console.log('Right here');
                                    console.log(polygonData);
                                    // var polygonData = await getIDpolygonsheet(polygonSheetURL);

                                    RenderAPI(data, CountryCode, ProvinceCode, DistrictCode, polygonData);
                                } else {
                                    RenderAPI(data, CountryCode, ProvinceCode, DistrictCode, polygonData = []);
                                }
                            };

                            getpolygonData(PolygonURL);

                            // RenderAPI(data, CountryCode, ProvinceCode, DistrictCode);
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

                if (arr.length == 0) OpenPopUp();
                else {
                    var ele1 = document.getElementById('loadingGIF');
                    var ele2 = document.getElementById('welcomeChar');
                    // console.log(ele2);
                    if (ele2 !== null) {
                        ele2.style.display = "none";
                    }

                    // console.log(window.getComputedStyle(ele1).display);
                    if (window.getComputedStyle(ele1).display == "none") {
                        ele1.style.display = "block";
                        // ele1.style.height = document.body.scrollHeight+'px';
                        // ele1.style.background = "#9a9a9a87";
                    } else {
                        ele1.style.display = "none";
                    }

                    var label = ["Province", "Country", "District"];
                    var dict = [];

                    arr.forEach(element => {
                        switch (Object.keys(element)[0]) {
                            case 'Country':
                                dict["Country"] = element.Country;
                                break;
                            case 'Province':
                                // dict["ProvinceCode"] = this.getKeyByValue(ProvinceList, element.Province); 
                                // if (dict.ProvinceCode === undefined) {
                                //     alert("Your province is entered then don't find in list province of Viet Nam");
                                // }

                                // if (element.Province.includes('Tinh')) element.Province = element.Province.replace('Tinh', 'Tỉnh');
                                for (const [key, value] of Object.entries(ProvinceList)) {
                                    value.forEach(function (v, index) {
                                        // console.log(index)
                                        value[index] = CapitalFirstletter(v.trim().replace(/  +/g, ' '))

                                    })
                                    if (value.includes(element.Province)) {
                                        // console.log(value.includes(element.Province))
                                        dict["ProvinceCode"] = key
                                    }
                                }

                                // console.log(element.Province)
                                // console.log(dict["ProvinceCode"])
                                break;
                            case 'District':
                                for (const [key, value] of Object.entries(DistrictList)) {
                                    // console.log(key, value);
                                    if (value.includes(element.District)) {
                                        dict["DistrictCode"] = key
                                    }
                                }
                                break;
                        }
                    });
                    // console.log(dict);
                    if (!Object.values(dict).includes(undefined)) {
                        var newDict;
                        MngProv.forEach(element => {

                            if (Object.values(dict).includes(element.ProvinceCode) || Object.values(dict).includes(element.Country) || Object.keys(element.District).includes(dict['DistrictCode'])) {
                                newDict = {
                                    ProvinceSheetID: element.ProvinceSheetID,
                                    DistrictSheetID: element.DistrictSheetID,
                                    Country: element.Country,
                                    ProvinceCode: element.ProvinceCode,
                                    DistrictCode: dict['DistrictCode'],
                                    polygonSheetID: element.polygonSheetID
                                }
                                // console.log('Right here')
                                // console.log(newDict)
                            }
                        });
                        if (newDict == undefined) this.RetrieveDistrictData(null, null, null, null, null)
                        else if (Object.keys(dict).includes('DistrictCode')) {
                            console.log('Chỉ Search huyen/thanh pho')
                            this.RetrieveDistrictData(
                                newDict.DistrictSheetID,
                                newDict.Country,
                                newDict.ProvinceCode,
                                newDict.DistrictCode,
                                newDict.polygonSheetID
                            );
                        } else {
                            console.log("Search ca tinh");
                            this.RetrieveProvinceData(
                                [newDict.DistrictSheetID, newDict.ProvinceSheetID],
                                newDict.Country,
                                newDict.ProvinceCode,
                                newDict.DistrictCode,
                                newDict.polygonSheetID
                            );
                        }
                    } else {
                        RenderAPI(null, null, null, null)
                    }
                }

            },
        }
    })



    // Vue instance Render Element
    async function RenderAPI(dataAPI = null, Country = null, ProvinceCode = null, District = null, polygonData = null) {
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
        console.log(polygonData)

        console.log('Hello')
        console.log(dataAPI)
        var ele = document.getElementById('loadingGIF');
        ele.style.display = "none";

        var app = new Vue({
            el: "#app",
            template: textHTML,
            data: {
                Country: Country,
                Province: ProvinceList[ProvinceCode],
                District: District,
                shapefile: dataAPI,
                polygon: polygonData,
                pagnigation: 0,
                pivot: 0,
                StyleShow: {
                    display: 'none'
                }
            },
            methods: {
                DisplayGeoData: function () {
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
                }
            }
        })
        app.DisplayGeoData();

        var count = 0;
        var polyDat = {};
        if (polygonData != null && polygonData.length != 0) {
            Object.keys(polygonData).forEach(function (item) {
                polyDat[count] = []
                polygonData[count].forEach(function (value) {
                    polyDat[count].push([value.B, value.A]);
                })
                count++;
            })
            console.log(polyDat);
            var map = L.map('map').setView(polyDat[0][0], polygonData[0][0].D);
            Object.keys(polyDat).forEach(function (item) {
                L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                }).addTo(map);
                var polygon = L.polygon(polyDat[item]).addTo(map);
                polygon.bindPopup(`<span style="font-size: 16px;">` + polygonData[0][0].C + `</span>`);

                function onMapClick(e) {
                    map.setView(e.latlng, polygonData[0][0].E)
                }

                polygon.on('click', onMapClick);
            })

        }




    }

}
