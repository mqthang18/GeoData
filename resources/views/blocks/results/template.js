// Block 1 only 0 province ================
var Case1 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
            <center>No results</center>
        </div>
    </div>
`;
// Block 1 only 1 province =================
var Case2 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
            <ul>
                <li>Country: {{ shapefile[0].A }} </li>
                <li>Province: {{ shapefile[0].B }} </li>
                <li>City/District: {{ shapefile[0].C }} </li>
                <li>License: {{ shapefile[0].D }} </li>
                <li>Describe: {{ shapefile[0].E }} </li>
                <li>Attachment: <a :href="shapefile[0].G">Download</a> <i class="fa fa-download"></i> </li>
            </ul>
        </div>
        <div class="result--Depict">
            <center>
                <iframe :src="shapefile[0].F" class="depictImage"></iframe>
                <br>
                <label class="depictImage" for="depictImage">Depicted image</label>
                <br>
                <br>
            </center>
        </div>
    </div>
`;
// Block 1 more than 2 provinces ===========
var Case3 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
            <ul>
                <li>Country: {{ shapefile[pagnigation].A }} </li>
                <li>Province: {{ shapefile[pagnigation].B }} </li>
                <li>City/District: {{ shapefile[pagnigation].C }} </li>
                <li>License: {{ shapefile[pagnigation].D }} </li>
                <li>Describe: {{ shapefile[pagnigation].E }} </li>
                <li>Attachment: <a :href="shapefile[pagnigation].G">Download</a> <i class="fa fa-download"></i> </li>
            </ul>

            <center>
                <iframe name="depictImage" :src="shapefile[pagnigation].F" class="depictImage" alt="Depict image from Google map"></iframe>
                <br>
                <label class="depictImage" for="depictImage">Depicted image</label>
                <br>
                <br>
            </center>
            <hr>
        </div>
        <br>
        <div class="pagnigation">
            <button v-if="pivot >= 6" v-on:click="ResetPivot()">
                <i class="fa fa-angle-double-left"></i>
            </button>
            <button v-for="item in shapefile" v-if="shapefile.indexOf(item)>pivot & shapefile.indexOf(item) <= pivot + 6 " v-on:click="ChangePageIndex(shapefile.indexOf(item))">
                {{ shapefile.indexOf(item) }}
            </button>
            <button v-if="(shapefile.length > 6) & (pivot < shapefile.length - 6)" v-on:click="AddPivot()">
                <i class="fa fa-angle-double-right"></i>
            </button>
        </div>
    </div>
`;
              
// var Case3 = `
//     <div>
//         <div id="result--GeoData" class="result--GeoData" v-for="item in shapefile">
//             <ul>
//                 <li>Country: {{ item.A }} </li>
//                 <li>Province: {{ item.B }} </li>
//                 <li>City/District: {{ item.C }} </li>
//                 <li>License: {{ item.D }} </li>
//                 <li>Describe: {{ item.E }} </li>
//                 <li>Attachment: <a :href="item.G">Download</a> <i class="fa fa-download"></i> </li>
//             </ul>

//             <center>
//                 <iframe name="depictImage" :src="item.F" class="depictImage" alt="Depict image from Google map"></iframe>
//                 <br>
//                 <label class="depictImage" for="depictImage">Depicted image</label>
//                 <br>
//                 <br>
//             </center>
//             <hr>
//         </div>
//         <div class="pagnigation">
//             <button v-for="item in shapefile">
//                 {{ shapefile.indexOf(item) }}
//             </button>
//         </div>
//     </div>
// `;